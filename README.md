# Botanica Site

Static mini-site for Botanica, a separate botanical R&D project built on top of MNR.

## Local preview

Static preview:

```bash
python3 -m http.server 4173 --directory sites/botanica
```

Open <http://localhost:4173>.

Open-ended chat preview (requires Vercel CLI and a server-side OpenAI key):

```bash
cd sites/botanica
cp .env.example .env.local
# add OPENAI_API_KEY to .env.local; never commit it
npx vercel dev
```

Then open the Vercel local URL and use the Lab Bot. Joey's local workspace has `.env.local` configured from the available OpenAI key; it is git-ignored and not committed.

## Notes

- Internal R&D framing only.
- No medical advice, no dosing instructions, no consumer-ready disease claims.
- Blend ideas require claims/safety review before any public launch.
- Lab Bot calls `/api/chat` for open-ended creative blend ideation when deployed to a serverless host such as Vercel.
- The browser never stores API keys. Set `OPENAI_API_KEY` as a server-side environment variable.
- If `/api/chat` is unavailable on GitHub Pages, Lab Bot falls back to the local rules-based blend generator.
- To make open-ended mode live publicly, deploy this repo to a serverless host (recommended: Vercel) and add `OPENAI_API_KEY` in that host's project environment settings. GitHub Pages alone cannot execute `/api/chat`.
- The living research loop should rotate across regulators, PubMed/clinical literature, industry news, traditional herbal systems, recalls, supplier/product launches, and consumer format trends.
- Clickable articles/deep dives live in `data/articles.json`; each post should include citations, source links, blend ideas, safety flags, and niche formulation angles.
