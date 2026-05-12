const blends = [
  {
    name: 'Dawn Circuit',
    subtitle: 'calm focus capsule concept',
    category: 'Focus',
    tier: 'Noticeable',
    status: 'Needs research',
    target: 'Clean task initiation, steady attention, low jitter profile.',
    candidates: ['Rhodiola rosea extract', 'L-theanine', 'Lion\'s mane fruiting body / erinacine-focused material', 'Magnesium L-threonate or glycinate'],
    mechanism: 'Adaptogenic fatigue support plus smoother attentional tone. Theanine is the “edge softener”; Rhodiola is the drive layer; Lion\'s mane is more long-horizon neurotrophic positioning than acute stimulant.',
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
    risks: ['Kava liver/sedation risk', 'Avoid alcohol/sedatives', 'Pregnancy/liver disease exclusion', 'No “Xanax-like” public copy'],
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
    risks: ['Pregnancy exclusion for mugwort', 'Allergy screening', 'Avoid “guaranteed lucid dream” claims'],
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
    mechanism: 'Mitochondrial and adaptogenic positioning rather than neurotransmitter intensity. Better as a daily performance powder than a “hit hard in 15 minutes” product.',
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
    mechanism: 'A more conventional but commercially legible recovery stack: phytosome/piperine-style absorption logic matters because raw curcumin is a classic underperformer.',
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
    risks: ['Pregnancy caution', 'Avoid intoxication/liquid-courage framing', 'Interaction review if adding Kanna or kava'],
    anchor: 'Traditional-use heavy; evidence brief needed for claims.'
  }
];

const grid = document.querySelector('#blendGrid');
const filters = document.querySelectorAll('.filter');

function render(filter = 'all') {
  const visible = filter === 'all' ? blends : blends.filter((blend) => blend.category === filter);
  grid.innerHTML = visible.map((blend) => `
    <article class="blend-card" data-category="${blend.category}">
      <div class="blend-topline">
        <span class="tag">${blend.category}</span>
        <span class="tag muted">${blend.tier}</span>
      </div>
      <h3>${blend.name}</h3>
      <p class="subtitle">${blend.subtitle}</p>
      <p class="target">${blend.target}</p>
      <div class="mini-section">
        <h4>Candidate stack</h4>
        <ul>${blend.candidates.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="mini-section">
        <h4>Why it could work</h4>
        <p>${blend.mechanism}</p>
      </div>
      <div class="mini-section risk">
        <h4>Review flags</h4>
        <ul>${blend.risks.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <footer class="card-foot"><span>${blend.status}</span><span>${blend.anchor}</span></footer>
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

render();
