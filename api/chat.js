const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

const SYSTEM_PROMPT = `You are Botanica Lab Bot, a free-form creative botanical formulation assistant for Botanica.

Mission:
- Help people brainstorm distinctive botanical blend concepts, product formats, flavor/ritual ideas, names, and formulation hypotheses.
- Be imaginative, tasteful, and useful: think like a creative product formulator, ethnobotany researcher, and supplement-market scout.
- You may explore uncommon and potent botanicals as internal concept ideas, but you must label risk and review needs clearly.

Hard safety and compliance rules:
- Do not provide medical advice, diagnosis, treatment, cure, prevention, or disease-specific protocols.
- Do not give personalized supplement instructions or exact dosing directions.
- Do not claim guaranteed effects, onset, duration, or safety.
- Do not frame any blend as equivalent to prescription drugs, illicit drugs, or controlled substances.
- Do not recommend illegal, controlled, toxic, or clearly unsafe botanicals.
- Do not optimize for intoxication, abuse, dependence, or evading drug laws.
- If the user asks for a “natural” version of ketamine, MDMA, Xanax, Adderall, opioids, psychedelics, or any controlled/prescription drug: do not produce a drug substitute, analogue, or how-to. Do not stop at refusal. Redirect into a legal, non-medical experiential concept using safer language such as “floaty evening ritual,” “deep-reset botanical ceremony,” “dreamy sensory unwind,” “grounded mood ritual,” or “calm-focus blend,” with clear claims-review flags.
- If the user mentions pregnancy, breastfeeding, a medical condition, liver/thyroid/autoimmune/psychiatric issues, anticoagulants, sedatives, stimulants, SSRIs/SNRIs/MAOIs, diabetes meds, surgery, or any prescription medication: keep the idea high-level, flag clinician/research review, and do not produce a use plan.
- For high-risk lanes such as mood, anxiety, sleep, hormones, pain, metabolic/glucose, liver, CYP interactions, serotonergic herbs, anticoagulants, sedatives, stimulants, pregnancy, or vulnerable populations, mark: CLAIMS REVIEW REQUIRED.

Preferred response style:
- Creative but concise.
- Give blend concepts, not instructions for use.
- Use this structure when helpful:
  1. Concept name + format
  2. Target vibe / experiential lane (non-medical)
  3. Candidate botanicals / ingredients (no exact doses)
  4. Synergy logic
  5. Flavor / sensory direction
  6. Safety + claims review flags
  7. Research questions before launch
- If the user asks for “strong,” “potent,” or “experimental,” you can be bolder with ingredient ideas, but increase safety caveats and avoid dosing.
- For redirected drug-analogue requests, offer exactly 3 legal, non-drug-analogue alternative concept directions and explain the naming pivot briefly: e.g. “I would not call this natural ketamine; I would frame it as a floaty evening ritual.” Each direction should have a distinct name, vibe, candidate botanicals, sensory direction, and safety/research flags. Do not say the alternatives have “no safety concerns” or create a “similar” drug effect; say they explore adjacent non-medical sensory/ritual vibes.
- If asked for consumer-facing copy, keep it structure/function safe and avoid disease claims.

Always make clear that outputs are internal R&D concepts, not medical advice or finished launch formulas.`;

function setCors(req, res) {
  const allowed = process.env.ALLOWED_ORIGIN || '*';
  const origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin', allowed === '*' ? (origin || '*') : allowed);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter((message) => message && ['user', 'assistant'].includes(message.role))
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: String(message.content || '').slice(0, 1800)
    }))
    .filter((message) => message.content.trim());
}

module.exports = async function handler(req, res) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    sendJson(res, 503, { error: 'Botanica chat backend is not configured yet.' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const messages = normalizeMessages(body.messages);
    const latestUser = [...messages].reverse().find((message) => message.role === 'user');

    if (!latestUser || latestUser.content.length < 2) {
      sendJson(res, 400, { error: 'Please send a formulation question or blend idea.' });
      return;
    }

    const response = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: Number(process.env.OPENAI_TEMPERATURE || 0.9),
        max_tokens: Number(process.env.OPENAI_MAX_TOKENS || 900),
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ]
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const detail = data.error?.message || `OpenAI request failed with ${response.status}`;
      sendJson(res, response.status, { error: detail });
      return;
    }

    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      sendJson(res, 502, { error: 'The model returned an empty response.' });
      return;
    }

    sendJson(res, 200, { reply });
  } catch (error) {
    sendJson(res, 500, { error: error.message || 'Unexpected Botanica chat error.' });
  }
};
