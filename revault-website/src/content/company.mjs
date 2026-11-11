const book = { label: 'Book a diagnostic', href: '/book-a-diagnostic/' };

export default [
  {
    path: '/platform/',
    crumbs: [],
    crumbLabel: 'Platform',
    title: 'Revault Platform: Claims, Approvals, Partners, Measurement',
    description: 'The Revault platform modules for claim management, approval workflows, partner portals, and measurement, with honest status for each.',
    h1: 'The Revault platform',
    sub: 'The platform supports our services. We build each module from the manual workflows used in client work, and we label each one with its current status. Until a module is live, we deliver its function through the managed service, and we do not show product screenshots of features that do not exist yet.',
    actions: [{ label: 'Ask about a pilot', href: '/book-a-diagnostic/' }, { label: 'See the services', href: '/services/' }],
    media: { type: 'mock', mock: 'library' },
    blocks: [
      {
        type: 'rows',
        h2: 'Four modules and where each one stands',
        items: [
          { title: 'Claim Engine', status: 'In development', body: 'Stores approved claims, disclosures, evidence, and jurisdiction rules, and checks drafts against them. Every claim carries its version history and review dates. Today this function is delivered through the <a class="textlink" href="/services/claim-library-build/">claim library build</a>.' },
          { title: 'Approval Hub', status: 'In development', body: 'Routes content by risk tier to marketing, legal, compliance, and partner reviewers, with timestamps and an audit trail.' },
          { title: 'Partner Portal', status: 'Planned', body: 'Lets a fintech submit content once, lets each partner bank review it against its own rules, and records each approval. It is planned after the first bank and fintech pilots.' },
          { title: 'Measurement Layer', status: 'Planned', body: 'Reports fully loaded acquisition cost by product and channel, including review time and partner payouts. Retention and uplift reporting connects to your analytics and CRM. Today this reporting is part of the <a class="textlink" href="/services/managed-growth/">managed growth retainer</a>.' },
        ],
      },
      {
        type: 'table',
        tone: 'tint',
        h2: 'What each status label means',
        cols: ['Label', 'Meaning'],
        rows: [
          ['Live', 'Available to every client.'],
          ['Pilot', 'Available to selected clients.'],
          ['In development', 'Being built from the manual workflow we run today.'],
          ['Planned', 'Scoped, with no build started.'],
        ],
      },
      { type: 'cta', h2: 'Ask about a pilot', body: 'A module in pilot is available to selected clients, and until then its function reaches you through the managed service.', label: 'Ask about a pilot' },
    ],
  },
  {
    path: '/method/',
    crumbs: [],
    crumbLabel: 'Method',
    title: 'How Revault Works: Method and Claim Standard',
    description: 'The Revault method: diagnostic steps, claim standard, risk tiers, approval records, and handover to your team.',
    h1: 'How Revault works',
    sub: 'The method has four stages, one claim standard, and three risk tiers. Every approval is recorded, so your team and your reviewers can see who decided what and when. Your counsel and compliance team decide what is compliant, and Revault applies and maintains the standard they approve.',
    actions: [book, { label: 'See the risk tiers', href: '#risk-tiers' }],
    media: { type: 'mock', mock: 'approval' },
    blocks: [
      {
        type: 'rail',
        h2: 'The four stages',
        items: [
          { title: 'Diagnose', body: 'Review current risk, process, and economics.' },
          { title: 'Build', body: 'Create the claim library, risk tiers, and workflow.' },
          { title: 'Run', body: 'Launch the first campaigns through the new process and measure.' },
          { title: 'Hand over', body: 'Transfer the library, workflow, and reporting to your team, or move into a retainer.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Our claim standard',
        aside: 'Each claim we approve must meet all four conditions.',
        items: [
          'Accurate, with evidence that can be produced on request.',
          'Fair, clear, and not misleading in the specific market and channel.',
          'Accompanied by the disclosures the rules require for that product.',
          'Owned by a named person who reviews it on a set schedule.',
        ],
      },
      {
        type: 'table',
        id: 'risk-tiers',
        tone: 'tint',
        h2: 'Risk tiers',
        cols: ['Tier', 'What it covers', 'Who signs off'],
        rows: [
          ['Low risk', 'General brand content with no product claims.', 'Marketing'],
          ['Medium risk', 'Product claims using approved language.', 'Marketing and compliance'],
          ['High risk', 'New claims, performance figures, or any content referring to investment returns or stability.', 'Legal review required'],
        ],
      },
      {
        type: 'split',
        h2: 'Records',
        body: ['Every approval records the asset, version, claim references, reviewer, decision, and date. Records are kept for the period your rules require.'],
      },
      {
        type: 'faq',
        items: [
          { q: 'Who decides what is compliant?', a: 'Your counsel and compliance team. Revault applies and maintains the standard they approve.' },
          { q: 'Can you guarantee approval?', a: 'No. We reduce the risk of rejection and speed the process. Approval decisions remain with your reviewers and regulators.' },
        ],
      },
      { type: 'cta', h2: 'See the method on your own campaigns', body: 'The diagnostic is the first stage, and it applies the claim standard and the risk tiers to the campaigns you are running now.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/research/',
    crumbs: [],
    crumbLabel: 'Research',
    title: 'Research on Regulated Marketing and Growth: Revault',
    description: 'Research on financial promotion rules, acquisition economics, and trust in finance, with sources, methods, and limitations.',
    h1: 'Research on regulated marketing',
    sub: 'We publish our research on financial promotion rules, acquisition economics, and trust in finance with sources, dates, and limitations. Where evidence is thin, we say so. Articles are reviewed again when the rules they describe change.',
    actions: [{ label: 'Read the Swiss guide', href: '/research/financial-promotion-rules-switzerland/' }, { label: 'See our standards', href: '#standards' }],
    media: { type: 'mock', mock: 'article' },
    blocks: [
      {
        type: 'linkrows',
        h2: 'Articles',
        items: [
          { title: 'Financial promotion rules in Switzerland', body: 'How Swiss rules on financial advertising, misleading claims, and crypto marketing apply to growth teams, with sources and open questions.', href: '/research/financial-promotion-rules-switzerland/' },
        ],
      },
      {
        type: 'checks',
        id: 'standards',
        h2: 'Our standards for research',
        items: [
          'Every claim links to a primary source where one exists: regulation, regulator guidance, or peer-reviewed work.',
          'Vendor and industry figures are labelled as such.',
          'Each article states its method and limits.',
        ],
      },
      { type: 'cta', h2: 'Apply the research to your campaigns', body: 'The diagnostic checks your live campaigns against the same rules these articles describe, market by market.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/research/financial-promotion-rules-switzerland/',
    crumbs: [['Research', '/research/']],
    crumbLabel: 'Financial promotion rules in Switzerland',
    article: { published: null, reviewed: null },
    title: 'Financial Promotion Rules in Switzerland: A Guide',
    description: 'How Swiss rules on financial advertising, misleading claims, and crypto marketing apply to growth teams, with sources and open questions.',
    h1: 'Financial promotion rules in Switzerland',
    sub: 'Switzerland has no crypto-specific advertising law, but financial advertising is covered by the Financial Services Act, and misleading claims are covered by the Unfair Competition Act. An amendment on crypto marketing has been consulted on and is still being processed. This guide is written by Revault Research and is not legal advice.',
    actions: [{ label: 'Read the rules', href: '#rules' }, book],
    media: { type: 'mock', mock: 'article' },
    blocks: [
      {
        type: 'prose',
        id: 'rules',
        html: `
<h2>The rules that apply now</h2>
<ul>
<li>Under the Financial Services Act (FinSA), advertising for financial services must be labelled as advertising. Advertising for financial instruments must not contradict the prospectus or key information document, and must refer to them where required.</li>
<li>Under the Unfair Competition Act (UWG), misleading advertising about a company's products or services is prohibited.</li>
<li>The Swiss Fair Competition Commission publishes principles for commercial communication, which are applied in complaints. For climate claims, its guidance treats neutrality claims based on carbon offsets as misleading for financial products.</li>
</ul>
<h2>Crypto marketing</h2>
<p>Switzerland does not have a separate crypto advertising regime. The rules that apply depend on how a crypto-asset is classified. If it is a security, the FinSA rules apply.</p>
<p>The Federal Council consulted from October 2025 to February 2026 on an amendment that would add fair marketing and advertising requirements for issuers and promoters of crypto-based assets. We will update this article when the amendment is finalized.</p>
<h2>Words to avoid unless licensed</h2>
<p>Only institutions with a banking licence may describe themselves as a bank in advertising, and only they may advertise the acceptance of deposits. Check every name and label in your campaigns.</p>
<h2>What we do not know yet</h2>
<ul>
<li>The final wording of the crypto advertising amendment.</li>
<li>How the Commission will apply the principles to new product formats.</li>
</ul>
<h2>Sources</h2>
<ul>
<li>Financial Services Act (FinSA)</li>
<li>Unfair Competition Act (UWG)</li>
<li>Swiss Fair Competition Commission, principles for commercial communication</li>
<li>Federal Council consultation on crypto-based assets, October 2025 to February 2026</li>
<li>Federal Office for the Environment (BAFU), guidance on climate claims</li>
</ul>`,
      },
      { type: 'cta', h2: 'Check your Swiss campaigns', body: 'Switzerland is the first market Revault covers, and the diagnostic reviews your live campaigns against the rules described above.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/insights/',
    crumbs: [],
    crumbLabel: 'Insights',
    title: 'Insights on Regulated Marketing: Revault',
    description: 'Practical notes on financial promotion rules, platform policy changes, and how to brief a campaign compliance can approve.',
    h1: 'Insights for regulated growth teams',
    sub: 'Short, practical articles for growth and compliance teams on financial promotion rules, platform policy changes, and how to brief a campaign that compliance can approve. Each article will show its date and when it was last reviewed. The first three articles are planned and listed below.',
    actions: [{ label: 'Read the research', href: '/research/' }, book],
    media: { type: 'mock', mock: 'article' },
    blocks: [
      {
        type: 'rows',
        h2: 'Planned first articles',
        items: [
          { title: 'How to brief a campaign that compliance can approve', status: 'Planned', body: 'What a brief needs to contain before it goes to review.' },
          { title: 'What changes when an ad platform restricts a category', status: 'Planned', body: 'What happens to live campaigns, and what a team can prepare before a restriction lands.' },
          { title: 'A checklist for reviewing affiliate content', status: 'Planned', body: 'The points to check in partner content before it carries your name.' },
        ],
      },
      { type: 'cta', h2: 'Read the longer research in the meantime', body: 'The research library holds our sourced work, starting with the guide to financial promotion rules in Switzerland.', label: 'Go to research', href: '/research/' },
    ],
  },
  {
    path: '/about/',
    crumbs: [],
    crumbLabel: 'About',
    title: 'About Revault: Why We Exist',
    description: 'Why Revault exists, how we work, and what we will not do: growth for regulated teams, without legal advice.',
    h1: 'Why Revault exists',
    sub: 'Growth teams in regulated markets lose time and money to review delays, banned campaigns, and partner friction. Most of the tools and agencies they use were built for unregulated marketing. Revault is built for the work in between: claims, approvals, partners, and measurement.',
    actions: [book, { label: 'Read the method', href: '/method/' }],
    media: { type: 'mock', mock: 'channels' },
    blocks: [
      {
        type: 'checks',
        h2: 'How we work',
        items: [
          'We do not give legal advice. Your counsel remains responsible for the rules we apply.',
          'We publish our research and label what is not yet proven.',
          'We do not show client results we cannot verify.',
        ],
      },
      {
        type: 'checks',
        negative: true,
        h2: 'What we will not do',
        items: [
          'Create content that imitates a real organization, person, or record.',
          'Promise approval from a regulator, platform, or partner bank.',
          'Use influencer or undisclosed promotion for our clients.',
        ],
      },
      { type: 'cta', h2: 'Start with a diagnostic', body: 'It is a bounded first engagement, and it shows how we work before either side commits to more.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/security-and-data/',
    crumbs: [],
    crumbLabel: 'Security and data',
    draft: 'This page goes live once each control it describes is in place and can be demonstrated.',
    title: 'Security and Data Handling: Revault',
    description: 'How Revault handles client data, access, retention, and subprocessors, under Swiss and EU data protection law.',
    h1: 'Security and data handling',
    sub: 'Finance buyers ask about data first. This page states what we collect, where it is stored, who can access it, and how long we keep it. It is reviewed before each release and whenever our subprocessors change.',
    actions: [book, { label: 'Read the privacy notice', href: '/legal/privacy/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'What this page will state',
        items: [
          { title: 'Data we collect and why', status: 'To be completed', body: 'The categories of client and personal data we hold, and the purpose of each.' },
          { title: 'Legal basis', status: 'To be completed', body: 'Under the Swiss Federal Act on Data Protection and, where it applies, GDPR.' },
          { title: 'Storage and hosting', status: 'To be completed', body: 'The storage location and the hosting providers.' },
          { title: 'Access controls', status: 'To be completed', body: 'Who can access client data, and how staff are trained.' },
          { title: 'Retention and deletion', status: 'To be completed', body: 'Retention periods, and deletion on request.' },
          { title: 'Subprocessors', status: 'To be completed', body: 'The full list, with the purpose and location of each.' },
          { title: 'Incident response', status: 'To be completed', body: 'The contact for reporting an incident.' },
        ],
      },
      { type: 'cta', h2: 'Ask us about data handling directly', body: 'Until this page is complete, we answer data questions in writing as part of the diagnostic scope.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/book-a-diagnostic/',
    crumbs: [],
    crumbLabel: 'Book a diagnostic',
    title: 'Book a Growth and Compliance Diagnostic',
    description: 'Book a fixed-fee diagnostic of your campaigns, partner content, and approvals. Four to six weeks, with a prioritized plan.',
    h1: 'Book a diagnostic',
    sub: 'A short call confirms fit, and a written scope follows whether or not we work together. The diagnostic itself runs four to six weeks at a fixed fee and ends with a risk register, a prioritized fix list, and a 90-day plan. We respond within two working days.',
    actions: [{ label: 'Fill in the request', href: '#request' }, { label: 'What the diagnostic includes', href: '/services/diagnostic/' }],
    media: { type: 'mock', mock: 'register' },
    blocks: [
      {
        type: 'form',
        id: 'request',
        h2: 'Tell us where you are',
        body: [
          'We ask only for what we need to reply: who you are, where you operate, and what you are trying to fix.',
          'Revault does not provide legal advice. Your counsel remains responsible for the rules we apply.',
        ],
      },
    ],
  },
  {
    path: '/book-a-diagnostic/thanks/',
    noindex: true,
    crumbs: [['Book a diagnostic', '/book-a-diagnostic/']],
    crumbLabel: 'Request received',
    title: 'Request Received: Revault',
    description: 'Your diagnostic request has reached Revault. We reply within two working days with a time for a short call.',
    h1: 'Your request has reached us',
    sub: 'We reply within two working days to arrange a short call. After the call you receive a written scope for the diagnostic, whether or not we go on to work together. While you wait, the method page explains the four stages, the claim standard, and the risk tiers.',
    actions: [{ label: 'Read the method', href: '/method/' }, { label: 'Back to the home page', href: '/' }],
    blocks: [{ type: 'cta', h2: 'See what the diagnostic covers', body: 'The service page lists what is included, what you receive, and what a diagnostic leaves to your counsel.', label: 'See the diagnostic', href: '/services/diagnostic/' }],
  },
];
