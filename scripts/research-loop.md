# Botanica Living Research Loop

Daily autonomous task:

1. Scan current health/supplement industry and botanical evidence sources across a rotating source radar:
   - FDA dietary supplement updates, warning letters, recalls, and import alerts
   - FTC health-products compliance/enforcement and implied-claims guidance
   - NIH/NCCIH/ODS botanical safety pages and fact sheets
   - PubMed / NCBI E-utilities for botanicals in Botanica concepts
   - clinical-trial registry or systematic-review updates when relevant
   - credible supplement/product trend outlets (NutraIngredients, Nutraceuticals World, WholeFoods, SPINS-style retail summaries, supplier news)
   - traditional herbal systems / ethnobotany references, clearly labeled as non-clinical inspiration
   - consumer/product-signal scans: formats, launches, gummies, tinctures, chocolates, bitters, lozenges, powders, social trend themes
2. Update `sites/botanica/data/research.json` with:
   - `lastUpdated`
   - `sourceCoverage` when the radar changes
   - 5–9 best new `signals`
   - 5–8 strongest `remedies`
   - concise watchlist adjustments
3. Keep language internal-R&D safe:
   - no medical advice
   - no disease-treatment claims
   - no dosing instructions
   - no prescription-drug equivalence
   - clear risk flags
   - mark potent/experimental formulas as specialist-review-only when they touch serotonergic, sedative, hormone, glycemic, liver, CYP, anticoagulant, psychiatric, pregnancy, or medication concerns
4. Commit and push to `armonon/botanica-lab` main.
5. Announce to Discord #mnr only when there is a meaningful new signal, a blocker, or a broken deploy.
