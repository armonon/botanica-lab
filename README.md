# Botanica Site

Static mini-site for Botanica, a separate botanical R&D project built on top of MNR.

## Local preview

Static preview:

```bash
python3 -m http.server 4173 --directory sites/botanica
```

Open <http://localhost:4173>.

Open-ended chat preview (requires Vercel CLI and an OpenAI key):

```bash
cd sites/botanica
OPENAI_API_KEY=... npx vercel dev
```

Then open the Vercel local URL and use the Lab Bot.

## Notes

- Internal R&D framing only.
- No medical advice, no dosing instructions, no consumer-ready disease claims.
- Blend ideas require claims/safety review before any public launch.
- Lab Bot calls `/api/chat` for open-ended creative blend ideation when deployed to a serverless host such as Vercel.
- The browser never stores API keys. Set `OPENAI_API_KEY` as a server-side environment variable.
- If `/api/chat` is unavailable on GitHub Pages, Lab Bot falls back to the local rules-based blend generator.
- The living research loop should rotate across regulators, PubMed/clinical literature, industry news, traditional herbal systems, recalls, supplier/product launches, and consumer format trends.
