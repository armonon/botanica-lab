# Botanica Site

Static mini-site for Botanica, a separate botanical R&D project built on top of MNR.

## Local preview

```bash
python3 -m http.server 4173 --directory sites/botanica
```

Open <http://localhost:4173>.

## Notes

- Internal R&D framing only.
- No medical advice, no dosing instructions, no consumer-ready disease claims.
- Blend ideas require claims/safety review before any public launch.
- Lab Bot is a static rules-based chat prototype; a true open-ended LLM chat needs a secure backend/proxy so no API keys live in the browser.
- The living research loop should rotate across regulators, PubMed/clinical literature, industry news, traditional herbal systems, recalls, supplier/product launches, and consumer format trends.
