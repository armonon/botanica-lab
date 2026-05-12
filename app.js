const blends = [
  {
    name: 'Dawn Circuit',
    subtitle: 'calm focus capsule concept',
    category: 'Focus',
    tier: 'Noticeable',
    status: 'Needs research',
    target: 'Clean task initiation, steady attention, low jitter profile.',
    candidates: ['Rhodiola rosea extract', 'L-theanine', 'Lion\'s mane fruiting body / erinacine-focused material', 'Magnesium L-threonate or glycinate'],
    mechanism: 'Adaptogenic fatigue support plus smoother attentional tone. Theanine is the edge softener; Rhodiola is the drive layer; Lion\'s mane is more long-horizon neurotrophic positioning than acute stimulant.',
    risks: ['Avoid drug-equivalence language', 'Review stimulant sensitivity', 'Screen bipolar/mania risk if mood language appears'],
    anchor: 'Rhodiola fatigue systematic reviews; L-theanine/caffeine attention literature.'
  },
  {
    name: 'Velvet Lantern',
    subtitle: 'evening downshift tincture concept',
    category: 'Calm',
    tier: 'Strong / specialist-review',
    status: 'Claims review required',
    target: 'Warm social ease and body-level unwind without positioning as anxiety treatment.',
    candidates: ['Kava chemotype-screened extract', 'Passionflower', 'Lemon balm', 'Glycine'],
    mechanism: 'GABAergic and calming-herb stack built around a kava-led sensory effect. The product edge is felt relaxation, but liver, sedation, alcohol, and medication interaction flags must be front-and-center.',
    risks: ['Kava liver/sedation risk', 'Avoid alcohol/sedatives', 'Pregnancy/liver disease exclusion', 'No Xanax-like public copy'],
    anchor: 'Kava safety review; NCCIH/FDA-style conservative supplement warnings.'
  },
  {
    name: 'Moonbridge',
    subtitle: 'dream ritual tea concept',
    category: 'Sleep',
    tier: 'Gentle to noticeable',
    status: 'Needs research',
    target: 'Dream vividness ritual and softer pre-sleep transition, not insomnia treatment.',
    candidates: ['Blue lotus', 'Mugwort', 'Lemon balm', 'Apigenin-rich chamomile'],
    mechanism: 'A sensory ritual built around aromatic bitter/floral botanicals and mild calming support. This is more ceremonial UX than hard pharmacology, so claims should stay experiential.',
    risks: ['Pregnancy exclusion for mugwort', 'Allergy screening', 'Avoid guaranteed lucid dream claims'],
    anchor: 'Traditional-use heavy; research needed before any claims.'
  },
  {
    name: 'Golden Hour',
    subtitle: 'mood-brightening gummy concept',
    category: 'Mood',
    tier: 'Noticeable',
    status: 'Claims review required',
    target: 'Brighter emotional tone and everyday resilience language, not depression treatment.',
    candidates: ['Saffron extract standardized to crocin/safranal', 'Lemon balm', 'Cacao polyphenols', 'Vitamin B6 cofactor'],
    mechanism: 'Saffron has the strongest early evidence signal here; cacao and lemon balm make the experience warmer and more ritual/product-friendly. Keep the copy away from treatment claims.',
    risks: ['SSRI/SNRI interaction review', 'Pregnancy caution', 'Avoid antidepressant analogue claims'],
    anchor: '2026 saffron systematic review/meta-analysis of RCTs.'
  },
  {
    name: 'Iron Lotus',
    subtitle: 'vitality tonic concept',
    category: 'Vitality',
    tier: 'Strong / specialist-review',
    status: 'Needs research',
    target: 'Vitality, stamina, and libido-support positioning without hormone-treatment claims.',
    candidates: ['Tongkat ali standardized extract', 'Shilajit purified/resin tested for heavy metals', 'Maca', 'Zinc / boron cofactors'],
    mechanism: 'A male-vitality concept with strong market pull but high claims risk. Product quality testing matters as much as formula logic, especially for shilajit contamination concerns.',
    risks: ['Hormone-sensitive conditions', 'Medication review', 'Heavy metal testing', 'Avoid testosterone-treatment claims'],
    anchor: 'Research request needed for endocrine/safety review.'
  },
  {
    name: 'Green Voltage',
    subtitle: 'non-stimulant energy powder concept',
    category: 'Focus',
    tier: 'Noticeable',
    status: 'Concept',
    target: 'Clean daytime energy and stamina without leaning on high caffeine.',
    candidates: ['Cordyceps extract', 'CoQ10', 'PQQ', 'Schisandra berry'],
    mechanism: 'Mitochondrial and adaptogenic positioning rather than neurotransmitter intensity. Better as a daily performance powder than a hit-hard-in-15-minutes product.',
    risks: ['Medication review for Schisandra/CYP questions', 'Avoid disease/mitochondrial dysfunction claims'],
    anchor: 'Evidence mixed by ingredient; needs brief before claims.'
  },
  {
    name: 'Marrow Garden',
    subtitle: 'recovery + inflammation support concept',
    category: 'Recovery',
    tier: 'Noticeable',
    status: 'Needs research',
    target: 'Post-training comfort and recovery-support positioning.',
    candidates: ['Boswellia AKBA extract', 'Curcumin phytosome', 'Tart cherry', 'Ginger'],
    mechanism: 'A more conventional but commercially legible recovery stack: phytosome-style absorption logic matters because raw curcumin is a classic underperformer.',
    risks: ['Anticoagulant review', 'Gallbladder/GI caution', 'Avoid pain-treatment claims'],
    anchor: 'Needs anti-inflammatory claims review before launch.'
  },
  {
    name: 'Blue Orchard',
    subtitle: 'social ease lozenge concept',
    category: 'Calm',
    tier: 'Gentle to noticeable',
    status: 'Concept',
    target: 'Soft, warm social presence with a ritual mouthfeel.',
    candidates: ['Damiana', 'Rose petal', 'Lemon balm', 'Theobromine-light cacao'],
    mechanism: 'More sensory and tradition-led than pharmacologically aggressive. The lozenge format could make the ritual memorable without overpromising effect intensity.',
    risks: ['Pregnancy caution', 'Avoid intoxication/liquid-courage framing', 'Interaction review if adding kanna or kava'],
    anchor: 'Traditional-use heavy; evidence brief needed for claims.'
  },
  {
    name: 'Neural Ember',
    subtitle: 'high-signal mood + presence concept',
    category: 'Mood',
    tier: 'Strong / specialist-review',
    status: 'Experimental concept',
    target: 'Noticeable warmth, presence, and social brightness without intoxication framing.',
    candidates: ['Sceletium tortuosum / kanna extract', 'Saffron extract', 'L-theanine', 'Cacao polyphenols'],
    mechanism: 'This is the adventurous mood lane: kanna supplies the experimental edge, while saffron and cacao make the concept product-friendly. It must remain internal until serotonergic and medication-interaction review is complete.',
    risks: ['SSRI/SNRI/MAOI review required', 'No euphoria or drug-equivalence copy', 'Pregnancy and psychiatric-condition caution'],
    anchor: 'Kanna evidence and interaction review required before claims.'
  },
  {
    name: 'Desert Current',
    subtitle: 'vitality + endurance powder concept',
    category: 'Vitality',
    tier: 'Noticeable to strong',
    status: 'Needs research',
    target: 'Dry, clean stamina and resilient drive without stimulant positioning.',
    candidates: ['Cistanche extract', 'Cordyceps militaris', 'Schisandra berry', 'Electrolyte mineral base'],
    mechanism: 'A less crowded vitality stack than the usual ashwagandha/tongkat lane. Cistanche and schisandra add traditional-system intrigue; cordyceps keeps the performance bridge recognizable.',
    risks: ['Hormone and blood-pressure review', 'CYP/medication screen for schisandra', 'Avoid endurance-treatment claims'],
    anchor: 'Traditional-use plus emerging evidence; needs focused brief.'
  },
  {
    name: 'Bitter Aurora',
    subtitle: 'metabolic ritual capsule concept',
    category: 'Metabolic',
    tier: 'Strong / specialist-review',
    status: 'Claims review required',
    target: 'Post-meal metabolic support positioning without diabetes, weight-loss, or glucose-treatment claims.',
    candidates: ['Berberine-containing botanical extract', 'Ceylon cinnamon', 'Bitter melon', 'Fenugreek'],
    mechanism: 'Potent and commercially interesting, but this lane is claim-sensitive. Berberine makes the concept feel serious; that also means medication, pregnancy, liver, and glycemic-risk gates are non-negotiable.',
    risks: ['Medication and hypoglycemia review', 'Pregnancy exclusion', 'No diabetes or weight-loss treatment claims'],
    anchor: 'Needs regulatory/clinical brief before any public copy.'
  },
  {
    name: 'Solar Mycelium',
    subtitle: 'immune-season tonic concept',
    category: 'Immune',
    tier: 'Gentle to noticeable',
    status: 'Concept',
    target: 'Seasonal resilience and ritual support without cold/flu prevention claims.',
    candidates: ['Reishi beta-glucan extract', 'Turkey tail extract', 'Elderberry', 'Acerola vitamin C'],
    mechanism: 'A familiar immune-support direction made more Botanica by blending mushroom depth with fruit-forward ritual. The trick is keeping immune language lawful and not disease-prevention oriented.',
    risks: ['Autoimmune and immunosuppressant review', 'Avoid antiviral/prevention claims', 'Quality testing for mushroom extracts'],
    anchor: 'Evidence varies by mushroom species and extract quality.'
  },
  {
    name: 'Digestive Spark',
    subtitle: 'bitter aperitif drop concept',
    category: 'Digestive',
    tier: 'Gentle to noticeable',
    status: 'Concept',
    target: 'Pre-meal sensory ritual, bitter-forward digestion support language only after review.',
    candidates: ['Gentian root', 'Artichoke leaf', 'Ginger', 'Orange peel'],
    mechanism: 'A traditional bitters format that feels premium and immediate through taste. It is experiential without needing heavy pharmacology claims.',
    risks: ['Gallbladder and reflux caution', 'Pregnancy review', 'Avoid GERD/IBS treatment claims'],
    anchor: 'Traditional bitters plus ingredient-specific clinical literature.'
  },
  {
    name: 'Lucid Grove',
    subtitle: 'ceremonial dream chocolate concept',
    category: 'Sleep',
    tier: 'Experimental / specialist-review',
    status: 'Experimental concept',
    target: 'A memorable night ritual around dream recall, sensory richness, and pre-sleep mood.',
    candidates: ['Blue lotus', 'Mugwort', 'Reishi', 'Low-theobromine cacao base'],
    mechanism: 'This is a product-experience concept first and a claims concept second. It could be beautiful, but the botanical evidence is thin and mugwort requires conservative exclusion flags.',
    risks: ['Pregnancy exclusion', 'Allergy review', 'Avoid lucid-dream guarantees or sedative claims'],
    anchor: 'Traditional-use heavy; safety brief required.'
  }
];

const categoryKeywords = {
  Focus: ['focus', 'adhd', 'attention', 'work', 'study', 'energy', 'creative', 'motivation', 'brain'],
  Calm: ['calm', 'stress', 'relax', 'anxiety', 'social', 'unwind', 'edge'],
  Sleep: ['sleep', 'dream', 'night', 'insomnia', 'rest', 'lucid'],
  Mood: ['mood', 'happy', 'bright', 'depressed', 'sad', 'social', 'warm', 'presence'],
  Vitality: ['vitality', 'libido', 'stamina', 'drive', 'men', 'testosterone', 'endurance'],
  Recovery: ['recovery', 'sore', 'pain', 'inflammation', 'workout', 'joints'],
  Metabolic: ['metabolic', 'glucose', 'sugar', 'weight', 'craving', 'meal'],
  Immune: ['immune', 'cold', 'flu', 'seasonal', 'resilience'],
  Digestive: ['digest', 'gut', 'bloating', 'meal', 'bitters', 'stomach']
};

const safetyWords = ['pregnant', 'pregnancy', 'breastfeeding', 'ssri', 'snri', 'maoi', 'blood thinner', 'warfarin', 'sedative', 'benzo', 'liver', 'thyroid', 'autoimmune', 'bipolar', 'diabetes', 'medication', 'prescription'];

const grid = document.querySelector('#blendGrid');
const filters = document.querySelectorAll('.filter');
const chatLog = document.querySelector('#chatLog');
const chatForm = document.querySelector('#chatForm');
const chatInput = document.querySelector('#chatInput');
const quickPrompts = document.querySelectorAll('[data-prompt]');
const chatStatus = document.querySelector('#chatStatus');
const chatEndpoint = window.BOTANICA_CHAT_ENDPOINT || '/api/chat';
const chatHistory = [];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function render(filter = 'all') {
  const visible = filter === 'all' ? blends : blends.filter((blend) => blend.category === filter);
  if (!grid) return;
  grid.innerHTML = visible.map((blend) => `
    <article class="blend-card" data-category="${escapeHtml(blend.category)}">
      <div class="blend-topline">
        <span class="tag">${escapeHtml(blend.category)}</span>
        <span class="tag muted">${escapeHtml(blend.tier)}</span>
      </div>
      <h3>${escapeHtml(blend.name)}</h3>
      <p class="subtitle">${escapeHtml(blend.subtitle)}</p>
      <p class="target">${escapeHtml(blend.target)}</p>
      <div class="mini-section">
        <h4>Candidate stack</h4>
        <ul>${blend.candidates.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
      <div class="mini-section">
        <h4>Why it could work</h4>
        <p>${escapeHtml(blend.mechanism)}</p>
      </div>
      <div class="mini-section risk">
        <h4>Review flags</h4>
        <ul>${blend.risks.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
      <footer class="card-foot"><span>${escapeHtml(blend.status)}</span><span>${escapeHtml(blend.anchor)}</span></footer>
    </article>
  `).join('');
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    render(button.dataset.filter);
  });
});

function inferCategories(text) {
  const lower = text.toLowerCase();
  const scored = Object.entries(categoryKeywords)
    .map(([category, words]) => ({
      category,
      score: words.reduce((count, word) => count + (lower.includes(word) ? 1 : 0), 0)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.category);

  return scored.length ? scored.slice(0, 2) : ['Focus', 'Calm'];
}

function buildBotanicaReply(text) {
  const categories = inferCategories(text);
  const lower = text.toLowerCase();
  const potent = /strong|potent|intense|noticeable|powerful|hard|experimental|wild/.test(lower);
  const riskyContext = safetyWords.filter((word) => lower.includes(word));
  const pool = blends
    .filter((blend) => categories.includes(blend.category))
    .sort((a, b) => {
      const aStrong = /strong|specialist|experimental/i.test(a.tier) ? 1 : 0;
      const bStrong = /strong|specialist|experimental/i.test(b.tier) ? 1 : 0;
      return potent ? bStrong - aStrong : aStrong - bStrong;
    });
  const picks = pool.slice(0, 2);
  const fallback = picks.length ? picks : [blends[0], blends[1]];
  const ingredientSet = [...new Set(fallback.flatMap((blend) => blend.candidates).slice(0, 7))];

  const reviewNote = riskyContext.length
    ? `<p class="chat-warning"><strong>Hard safety gate:</strong> you mentioned ${escapeHtml(riskyContext.join(', '))}. This stays R&D-only until a clinician/research review clears interactions, contraindications, and claims.</p>`
    : '<p class="chat-warning"><strong>Safety gate:</strong> no dosing, medical advice, disease claims, or launch copy from this chat. Treat this as an idea draft only.</p>';

  return `
    <p><strong>Concept direction:</strong> ${escapeHtml(categories.join(' + '))}${potent ? ' with a stronger experimental edge' : ' with a conservative first-pass edge'}.</p>
    <p><strong>Starter stack to investigate:</strong> ${ingredientSet.map(escapeHtml).join(' · ')}</p>
    <p><strong>Best matching Botanica concepts:</strong> ${fallback.map((blend) => `<button class="inline-jump" data-filter-jump="${escapeHtml(blend.category)}">${escapeHtml(blend.name)}</button>`).join(' ')}</p>
    <p><strong>Formulation logic:</strong> combine one lead botanical for the felt state, one smoother/support layer, one sensory/ritual layer, and one safety/compliance review question before anything gets consumer-facing.</p>
    ${reviewNote}
  `;
}

function appendChat(role, html, options = {}) {
  if (!chatLog) return null;
  const message = document.createElement('div');
  message.className = `chat-message ${role}${options.loading ? ' loading' : ''}`;
  message.innerHTML = html;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
  return message;
}

function setChatStatus(text, mode = 'idle') {
  if (!chatStatus) return;
  chatStatus.textContent = text;
  chatStatus.dataset.mode = mode;
}

function formatBotText(text) {
  const safe = escapeHtml(text.trim());
  const blocks = safe.split(/\n{2,}/).filter(Boolean);
  return blocks.map((block) => {
    const withBreaks = block.replace(/\n/g, '<br>');
    return `<p>${withBreaks}</p>`;
  }).join('');
}

async function callOpenEndedBot(clean) {
  const messages = [...chatHistory.slice(-8), { role: 'user', content: clean }];
  const response = await fetch(chatEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `Chat backend unavailable (${response.status})`);
  if (!data.reply) throw new Error('Chat backend returned no reply');
  return data.reply;
}

async function askBotanica(text) {
  const clean = text.trim();
  if (!clean) return;

  appendChat('user', `<p>${escapeHtml(clean)}</p>`);
  chatHistory.push({ role: 'user', content: clean });
  const pending = appendChat('bot', '<p><strong>Thinking like a formulator…</strong></p>', { loading: true });
  setChatStatus('Creative AI online check…', 'thinking');

  try {
    const reply = await callOpenEndedBot(clean);
    if (pending) {
      pending.classList.remove('loading');
      pending.innerHTML = formatBotText(reply);
    } else {
      appendChat('bot', formatBotText(reply));
    }
    chatHistory.push({ role: 'assistant', content: reply });
    setChatStatus('Open-ended creative AI connected', 'online');
  } catch (error) {
    const fallback = `${buildBotanicaReply(clean)}<p class="chat-warning"><strong>Backend note:</strong> ${escapeHtml(error.message)}. I used the local safety-rules fallback; deploy the serverless API with OPENAI_API_KEY to unlock fully open-ended conversation.</p>`;
    if (pending) {
      pending.classList.remove('loading');
      pending.innerHTML = fallback;
    } else {
      appendChat('bot', fallback);
    }
    chatHistory.push({ role: 'assistant', content: pending?.textContent || 'Local fallback blend idea generated.' });
    setChatStatus('Local fallback active until backend deploy', 'fallback');
  }
}

if (chatForm && chatInput) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = chatInput.value;
    chatInput.value = '';
    askBotanica(value);
  });
}

quickPrompts.forEach((button) => {
  button.addEventListener('click', () => {
    const prompt = button.dataset.prompt || '';
    if (chatInput) chatInput.value = prompt;
    askBotanica(prompt);
  });
});

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter-jump]');
  if (!button) return;
  const category = button.dataset.filterJump;
  const matchingFilter = [...filters].find((filter) => filter.dataset.filter === category);
  if (matchingFilter) matchingFilter.click();
  document.querySelector('#blends')?.scrollIntoView({ behavior: 'smooth' });
});

render();
appendChat('bot', '<p><strong>Botanica Lab Bot online.</strong> Tell me the target state, format, ingredients you like/avoid, and how adventurous you want to get. If the AI backend is deployed, I’ll answer open-ended; otherwise I’ll use the local safety-rules fallback.</p>');
setChatStatus('Ready for creative blend ideation', 'idle');

async function loadResearchPulse() {
  try {
    const response = await fetch('./data/research.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`research.json ${response.status}`);
    const data = await response.json();
    renderResearchPulse(data);
  } catch (error) {
    console.warn('Research pulse unavailable', error);
    const pulseStatus = document.querySelector('#pulseStatus');
    if (pulseStatus) pulseStatus.textContent = 'Research pulse temporarily unavailable';
  }
}

function renderResearchPulse(data) {
  const lastUpdated = document.querySelector('#lastUpdated');
  const pulseSummary = document.querySelector('#pulseSummary');
  const pulseStatus = document.querySelector('#pulseStatus');
  const nextScan = document.querySelector('#nextScan');
  const pulseGrid = document.querySelector('#pulseGrid');
  const remedyGrid = document.querySelector('#remedyGrid');
  const watchList = document.querySelector('#watchList');
  const sourceRadar = document.querySelector('#sourceRadar');

  const updated = data.lastUpdated ? new Date(data.lastUpdated) : null;
  const formatted = updated && !Number.isNaN(updated.valueOf())
    ? updated.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })
    : 'recently';

  if (lastUpdated) lastUpdated.textContent = `Last update: ${formatted}`;
  if (pulseSummary && data.summary) pulseSummary.textContent = data.summary;
  if (pulseStatus) pulseStatus.textContent = data.status || 'Research pulse online';
  if (nextScan) nextScan.textContent = `Next scan: ${data.nextScan || 'daily'}`;

  if (sourceRadar) {
    sourceRadar.innerHTML = (data.sourceCoverage || []).map((source) => `
      <article class="source-card">
        <span class="tag">${escapeHtml(source.type || 'Source')}</span>
        <h3>${escapeHtml(source.name)}</h3>
        <p>${escapeHtml(source.use)}</p>
      </article>
    `).join('');
  }

  if (pulseGrid) {
    pulseGrid.innerHTML = (data.signals || []).map((signal) => `
      <article class="pulse-card">
        <div class="blend-topline">
          <span class="tag">${escapeHtml(signal.category || 'Signal')}</span>
          <span class="tag muted">${escapeHtml(signal.confidence || 'Review')}</span>
        </div>
        <h3>${escapeHtml(signal.title)}</h3>
        <p>${escapeHtml(signal.takeaway)}</p>
        <p><strong>Why it matters:</strong> ${escapeHtml(signal.whyItMatters)}</p>
        <p class="source-line">${escapeHtml(signal.source || 'Source pending')} · ${escapeHtml(signal.date || 'undated')}</p>
        ${signal.url ? `<a href="${escapeHtml(signal.url)}" target="_blank" rel="noreferrer">Open source →</a>` : ''}
      </article>
    `).join('');
  }

  if (remedyGrid) {
    remedyGrid.innerHTML = (data.remedies || []).map((remedy) => `
      <article class="remedy-card">
        <div class="blend-topline">
          <span class="tag">${escapeHtml(remedy.lane || 'Remedy')}</span>
          <span class="tag muted">${escapeHtml(remedy.status || 'Concept')}</span>
        </div>
        <h3>${escapeHtml(remedy.name)}</h3>
        <div class="remedy-herbs">${(remedy.leadHerbs || []).map((herb) => `<span>${escapeHtml(herb)}</span>`).join('')}</div>
        <div class="remedy-detail">
          <p><strong>Product promise:</strong> ${escapeHtml(remedy.promise)}</p>
          <p><strong>Evidence read:</strong> ${escapeHtml(remedy.evidence)}</p>
          <p><strong>Risk gate:</strong> ${escapeHtml(remedy.risk)}</p>
        </div>
      </article>
    `).join('');
  }

  if (watchList) {
    watchList.innerHTML = (data.watchlist || []).map((item) => `<span>${escapeHtml(item)}</span>`).join('');
  }
}

loadResearchPulse();
