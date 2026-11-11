const crumbs = [['Solutions', '/solutions/']];
const noAdvice = { q: 'Do you provide legal advice?', a: 'No. Revault builds the process and the review layer. Your counsel approves the rules we apply.' };

export default [
  {
    path: '/solutions/',
    crumbs: [],
    crumbLabel: 'Solutions',
    title: 'Solutions by Audience: Revault',
    description: 'Revault growth and compliance services for crypto exchanges, neobanks, fintech partnership teams, B2B fintechs, and blockchain protocols.',
    h1: 'Solutions for regulated growth teams',
    sub: 'Each regulated segment faces different rules, different buyers, and different channels, so the first step we offer changes with the segment. Choose the page that matches your role to see the problems we solve there, what we deliver, and what a first engagement looks like.',
    actions: [{ label: 'Book a diagnostic', href: '/book-a-diagnostic/' }, { label: 'See the services', href: '/services/' }],
    media: { type: 'mock', mock: 'crm' },
    blocks: [
      {
        type: 'linkrows',
        h2: 'Find your segment',
        items: [
          { title: 'Crypto exchanges and brokers', body: 'For heads of marketing, growth, and partnerships marketing to the UK, EU, or Switzerland. The first step is a four to six week diagnostic.', href: '/solutions/crypto-exchanges-brokers/' },
          { title: 'Neobanks and challengers', body: 'For teams that need a second product adopted and the first customer kept. The first step is a 30-day retention audit.', href: '/solutions/neobanks-challengers/' },
          { title: 'Fintech and bank partnership teams', body: 'For fintechs whose campaigns need a sponsor bank\'s approval. The first step is a partner pilot.', href: '/solutions/fintech-bank-partnerships/' },
          { title: 'B2B fintechs selling to banks', body: 'For vendors facing procurement, security, and compliance review. The first step is a proof-library diagnostic.', href: '/solutions/b2b-fintech-for-banks/' },
          { title: 'Blockchain protocols', body: 'For protocols and token projects that grow through community. Availability is limited, and the first step is a protocol review.', href: '/solutions/blockchain-protocols/' },
        ],
      },
      { type: 'cta', h2: 'Not sure which page fits', body: 'Tell us your markets and your product area in the booking form, and we will reply with the scope that matches within two working days.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/solutions/crypto-exchanges-brokers/',
    crumbs,
    crumbLabel: 'Crypto exchanges and brokers',
    title: 'Crypto Marketing Compliance for Exchanges: Revault',
    description: 'Claim review, partner oversight, and approval workflows for crypto exchanges and brokers marketing across regulated markets.',
    service: { name: 'Crypto marketing compliance for exchanges and brokers', type: 'Marketing compliance process', area: ['Switzerland'] },
    h1: 'Crypto growth that holds up across regulated markets',
    sub: 'Crypto marketing now has to meet separate rules in each market. The UK and the EU\'s MiCA framework both require promotions to be fair, clear, and not misleading, with risk warnings in client-facing copy, and ad platforms keep their own certification rules on top. Revault maintains the approved language for each market you sell in.',
    actions: [{ label: 'Book a crypto diagnostic', href: '/book-a-diagnostic/' }, { label: 'Read the method', href: '/method/' }],
    media: { type: 'facts', label: 'Summary of a typical first engagement for a crypto exchange', title: 'Typical first engagement', rows: [['Format', 'Diagnostic'], ['Duration', 'Four to six weeks'], ['Output', 'Risk register, fix list, and a draft claim library']] },
    blocks: [
      {
        type: 'rows',
        h2: 'The problems we solve',
        intro: 'The FCA expects firms to disclose the risks of stability claims and to consider whether customers will understand what they are promoting. Four problems follow from rules like that one.',
        items: [
          { title: 'Claims that differ by market', body: 'A phrase that is acceptable in one country can be restricted in another. We maintain the approved language for each market, with the reason each claim is allowed.' },
          { title: 'Platform eligibility', body: 'Ad platforms change their rules for crypto categories. We track the status for each channel you use and flag changes before they affect a live campaign.' },
          { title: 'Affiliates and partners', body: 'Partner content can create liability for the exchange. Binance recently cancelled referral commissions for prohibited advertising methods, which shows how quickly partner programs can be restricted. We set partner rules, review partner content, and keep a record of corrections.' },
          { title: 'Slow approvals', body: 'We route assets by risk level, so low-risk content is approved quickly and high-risk content goes to legal with a complete file.' },
        ],
      },
      {
        type: 'checks',
        h2: 'What Revault delivers',
        items: [
          'A jurisdiction claim library with approved wording, required risk language, prohibited framings, and the source for each rule.',
          'An approval workflow with risk tiers and service-level targets for legal and compliance.',
          'A channel eligibility register, updated as platform rules change.',
          'An affiliate and partner policy with a review process and audit trail.',
        ],
      },
      {
        type: 'split',
        h2: 'Who this is for',
        body: [
          'Heads of marketing, growth, and partnerships at exchanges and brokers that operate in or market to the UK, EU, or Switzerland.',
          'The first engagement is a four to six week diagnostic that reviews live campaigns, partner content, and the current approval path. It ends with a risk register, a prioritized fix list, and a draft claim library for the highest-risk claims.',
        ],
        link: { label: 'See what the diagnostic includes', href: '/services/diagnostic/' },
      },
      {
        type: 'faq',
        items: [
          noAdvice,
          { q: 'Which markets do you cover?', a: 'Switzerland first, then the EU, then the UK. Each market is added only after its claim module has been reviewed by local counsel.' },
          { q: 'Can you run our paid campaigns?', a: 'We produce and manage campaigns within the approved library. Final decisions on channels and spend remain with your team.' },
        ],
      },
      { type: 'cta', h2: 'Book a crypto diagnostic', body: 'In four to six weeks you will know which live claims carry the most risk in each market and what to fix first. Related reading sits in the <a class="textlink" href="/research/">research library</a>.', label: 'Book a crypto diagnostic' },
    ],
  },
  {
    path: '/solutions/neobanks-challengers/',
    crumbs,
    crumbLabel: 'Neobanks and challengers',
    title: 'Neobank Growth and Retention Marketing: Revault',
    description: 'Grow secondary products and retain customers at neobanks and challengers, with compliant lifecycle messages and targeted offers.',
    service: { name: 'Neobank growth and retention marketing', type: 'Retention and lifecycle marketing', area: ['Switzerland'] },
    h1: 'Grow the second product, keep the first customer',
    sub: 'Most challenger banks win customers by taking their salary account, but they grow revenue by winning a second product. Customers often keep their primary account and gradually move money elsewhere. Acquisition is costly, and retention offers are expensive when they are sent to everyone.',
    actions: [{ label: 'Book a retention audit', href: '/book-a-diagnostic/' }, { label: 'Read the method', href: '/method/' }],
    media: { type: 'facts', label: 'Summary of a typical first engagement for a neobank', title: 'Typical first engagement', rows: [['Format', 'Retention audit'], ['Duration', '30 days'], ['Output', 'Three trigger-based programs and a test plan']] },
    blocks: [
      {
        type: 'rows',
        h2: 'The problems we solve',
        items: [
          { title: 'Soft switching', body: 'J.D. Power\'s 2026 study of US retail banking found that 20% of customers moved money away from their primary bank within three months without formally closing the account. We identify the early signals of this shift.' },
          { title: 'Expensive blanket offers', body: 'In one practitioner experiment, a standard retention offer cost 1.21 times the acquisition cost per retained user, while an uplift-targeted version cost 0.87 times. We target offers at customers likely to respond and measure the result against a holdout group.' },
          { title: 'Compliance in lifecycle messages', body: 'Product messages must describe fees, risks, and eligibility accurately. We pre-clear templates for each product.' },
        ],
      },
      {
        type: 'checks',
        h2: 'What Revault delivers',
        items: [
          'Trigger definitions for churn risk and secondary-product opportunity, based on your transaction and product data.',
          'Compliant lifecycle templates for each product.',
          'Offer targeting by expected response, with holdout measurement.',
          'A dashboard showing cost per incremental retained customer and product adoption.',
        ],
      },
      {
        type: 'split',
        h2: 'How a first engagement runs',
        body: [
          'We start with a 30-day retention audit. We review your funnel, identify three trigger-based programs, and design the test plan.',
          'Data access depends on your existing setup, and we confirm it in the diagnostic. The reporting side of this work is planned as the Measurement Layer module.',
        ],
        link: { label: 'See the Measurement Layer status', href: '/platform/' },
      },
      { type: 'cta', h2: 'Book a retention audit', body: 'Thirty days gives you three programs to test and a plan for measuring each one against a holdout group. The <a class="textlink" href="/services/">services page</a> shows what can follow.', label: 'Book a retention audit' },
    ],
  },
  {
    path: '/solutions/fintech-bank-partnerships/',
    crumbs,
    crumbLabel: 'Fintech and bank partnerships',
    title: 'Fintech-Bank Partnership Marketing: Revault',
    description: 'Shared content, partner approval workflows, and co-marketing for fintechs working with partner banks.',
    service: { name: 'Fintech and bank partnership marketing', type: 'Partner approval workflow', area: ['Switzerland'] },
    h1: 'Faster approvals for fintech and bank partnerships',
    sub: 'In fintech and bank partnerships, the sponsor bank is responsible for how its programs are marketed, so every campaign may need the bank\'s approval. Fintechs submit content, banks return comments, and the same questions come back with each new asset. The delay costs launches and frustrates both teams.',
    actions: [{ label: 'Discuss a partner pilot', href: '/book-a-diagnostic/' }, { label: 'Read the method', href: '/method/' }],
    media: { type: 'mock', mock: 'approval' },
    blocks: [
      {
        type: 'rows',
        h2: 'The problems we solve',
        items: [
          { title: 'Repeated review of the same content', body: 'Each bank applies its own rules to content that is nearly identical. We maintain one shared library, with a bank-specific overlay for each partner.' },
          { title: 'No record of who approved what', body: 'Partner oversight requires a clear audit trail. Every approval is recorded with the version, reviewer, and date.' },
          { title: 'Co-marketing that does not scale', body: 'Launch assets are built again for each partner. We produce a reusable kit that partner banks can approve once and reuse within agreed limits.' },
        ],
      },
      {
        type: 'checks',
        h2: 'What Revault delivers',
        items: [
          'A shared claim library with bank-specific overlays.',
          'A partner review workflow with service-level targets.',
          'An approval record that the bank\'s compliance team can audit.',
          'Launch kits for co-marketing, pre-approved where the bank agrees.',
        ],
      },
      {
        type: 'split',
        h2: 'Where the Partner Portal stands',
        body: [
          'The full Partner Portal is planned and is not live yet. Until it launches, we deliver this service through a managed workflow with your bank partners.',
          'Its status is updated on the platform page at each release, and the way we handle partner data is described under security and data.',
        ],
        link: { label: 'See the platform status', href: '/platform/' },
      },
      { type: 'cta', h2: 'Discuss a partner pilot', body: 'A pilot takes one partner bank through the shared library and the review workflow. See the <a class="textlink" href="/security-and-data/">security and data page</a> for how records are handled.', label: 'Discuss a partner pilot' },
    ],
  },
  {
    path: '/solutions/b2b-fintech-for-banks/',
    crumbs,
    crumbLabel: 'B2B fintechs selling to banks',
    title: 'B2B Fintech Marketing to Banks: Revault',
    description: 'Proof-led content, approved sales outreach, and bank-buyer targeting for fintechs selling infrastructure to banks and credit unions.',
    service: { name: 'B2B fintech marketing to banks', type: 'Proof-led marketing and sales enablement', area: ['Switzerland'] },
    h1: 'Proof that bank buyers can verify',
    sub: 'Banks and credit unions buy slowly. Procurement, security, and compliance teams each review the vendor, and they trust evidence they can check more than general claims. Outreach to regulated buyers is also subject to rules, so an enthusiastic message can create a problem of its own.',
    actions: [{ label: 'Book a proof-library diagnostic', href: '/book-a-diagnostic/' }, { label: 'Read the method', href: '/method/' }],
    media: { type: 'mock', mock: 'crm' },
    blocks: [
      {
        type: 'rows',
        h2: 'The problems we solve',
        items: [
          { title: 'Claims buyers cannot verify', body: 'We link each claim to a document: a case study, a security certificate, or a published product specification.' },
          { title: 'Outreach that creates risk', body: 'We pre-check sales templates against the claim library and set rules for what can be said about regulated products.' },
          { title: 'Few qualified meetings', body: 'We build a target list from public information about banks and credit unions in your segment, and sequence outreach accordingly.' },
        ],
      },
      {
        type: 'checks',
        h2: 'What Revault delivers',
        items: [
          'A proof library in which case studies, security documents, and product claims are each linked to supporting evidence.',
          'Approved sales and outreach templates.',
          'A target-account plan based on public information.',
        ],
      },
      {
        type: 'split',
        h2: 'How we handle client results',
        body: ['Revault does not publish client results without written permission and verified figures. Where a client case is not available, we use anonymized, clearly labelled examples.'],
        link: { label: 'Read our claim standard', href: '/method/' },
      },
      { type: 'cta', h2: 'Book a proof-library diagnostic', body: 'The diagnostic shows which claims in your sales material are already linked to a document a bank buyer can check.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/solutions/blockchain-protocols/',
    crumbs,
    crumbLabel: 'Blockchain protocols',
    title: 'Blockchain Protocol Marketing Compliance: Revault',
    description: 'Education content, risk disclosure, and incentive checks for blockchain protocols and token projects, with limited availability.',
    service: { name: 'Blockchain protocol marketing compliance', type: 'Promotion and incentive review', area: ['Switzerland'] },
    h1: 'Community growth within the rules',
    sub: 'Protocols depend on community growth, but some promotions are restricted or prohibited. Google does not allow ads for initial coin offerings, and the UK rules restrict incentives to invest. A single enforcement case can damage a project\'s credibility with partners and investors. Availability is limited, and we are selecting a small number of protocols for early work.',
    actions: [{ label: 'Request a protocol review', href: '/book-a-diagnostic/' }, { label: 'Read the method', href: '/method/' }],
    media: { type: 'mock', mock: 'register' },
    blocks: [
      {
        type: 'rows',
        h2: 'The problems we solve',
        items: [
          { title: 'Restricted promotions', body: 'We identify which activities are prohibited or restricted in each market before a campaign is designed.' },
          { title: 'Incentives that may be treated as promotions', body: 'We check every incentive, airdrop, or referral reward before it runs.' },
          { title: 'Education that is hard to make accurate', body: 'We build explainers that describe what the protocol does, how it is backed, and what the risks are, with each claim linked to evidence.' },
        ],
      },
      {
        type: 'checks',
        h2: 'What Revault delivers',
        items: [
          'An incentive and promotion check for each planned campaign.',
          'An education and risk-disclosure content plan.',
          'A community-growth plan based on owned channels and partner education.',
        ],
      },
      { type: 'cta', h2: 'Request a protocol review', body: 'Send us the campaign or incentive you are planning, and we will tell you whether we have capacity and which markets the review would cover.', label: 'Request a protocol review' },
    ],
  },
];
