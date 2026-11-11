const crumbs = [['Services', '/services/']];
const book = { label: 'Book a diagnostic', href: '/book-a-diagnostic/' };

export default [
  {
    path: '/services/',
    crumbs: [],
    crumbLabel: 'Services',
    title: 'Revault Services: Diagnostic, Build, Managed Growth',
    description: 'Three services for regulated growth: a fixed-fee diagnostic, a claim library and workflow build, and a managed growth retainer.',
    h1: 'How we work with you',
    sub: 'Revault sells in sequence. Most clients start with a diagnostic, then move into a build, then a managed retainer. You can stop at any stage with a deliverable you keep, so the first commitment is four to six weeks and a fixed fee.',
    actions: [book, { label: 'Read the method', href: '/method/' }],
    media: { type: 'facts', label: 'The order in which the three services run', title: 'The sequence', rows: [['First', 'Diagnostic, four to six weeks'], ['Then', 'Build, eight to twelve weeks'], ['After that', 'Managed growth, each month']] },
    blocks: [
      {
        type: 'showcase',
        tone: 'ink',
        mocks: ['register', 'library', 'report'],
        h2: 'Three services, in order',
        items: [
          { title: 'Diagnostic', body: 'Four to six weeks at a fixed fee. A review of your campaigns, partner content, approvals, and acquisition economics, ending in a 90-day plan.', href: '/services/diagnostic/', more: 'See the diagnostic' },
          { title: 'Claim library and workflow build', body: 'Eight to twelve weeks at a project fee. The approved claims, risk tiers, and approval workflow for your markets, with your first campaigns run through them.', href: '/services/claim-library-build/', more: 'See the build' },
          { title: 'Managed growth', body: 'A monthly retainer with a six-month minimum. Campaigns, partners, lifecycle work, and reporting, all within your approved claim library.', href: '/services/managed-growth/', more: 'See the retainer' },
        ],
      },
      {
        type: 'rail',
        tone: 'white',
        h2: 'How one stage leads to the next',
        items: [
          { title: 'Diagnostic', body: 'It names the risks and the fixes, and produces the plan the next stage is scoped from.', when: 'Four to six weeks' },
          { title: 'Build', body: 'It turns the highest-risk findings into approved claims and an approval workflow your team runs.', when: 'Eight to twelve weeks' },
          { title: 'Managed growth', body: 'It runs campaigns, partners, and lifecycle programs inside that library, and reports each month.', when: 'Each month' },
        ],
      },
      {
        type: 'split',
        h2: 'How pricing works',
        body: [
          'Pricing depends on scope: the number of markets, active products, and partners. We quote after a first conversation, and we do not publish fixed prices for the build or the retainer.',
          'The diagnostic fee range is confirmed at booking.',
        ],
      },
      { type: 'cta', h2: 'Start with the diagnostic', body: 'It is the shortest of the three services, and it produces the risk register and the plan that the other two are scoped from.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/services/diagnostic/',
    crumbs,
    crumbLabel: 'Diagnostic',
    title: 'Growth and Compliance Diagnostic: Revault',
    description: 'A four to six week fixed-fee review of your campaigns, partner content, approvals, and acquisition economics, with a prioritized plan.',
    service: { name: 'Growth and compliance diagnostic', type: 'Marketing compliance audit', area: ['Switzerland'] },
    h1: 'Growth and compliance diagnostic',
    sub: 'The diagnostic shows where your growth is exposed to regulatory risk and where it is leaking money. It is the right first step when campaigns stall in review, when a partner raises concerns, or when acquisition costs rise without a clear cause.',
    actions: [book, { label: 'See the timeline', href: '#timeline' }],
    media: { type: 'facts', label: 'Summary of the diagnostic', title: 'The diagnostic at a glance', rows: [['Duration', 'Four to six weeks'], ['Fee', 'Fixed, confirmed at booking'], ['Output', 'Risk register, fix list, draft claim library, and a 90-day plan']] },
    blocks: [
      {
        type: 'checks',
        mock: 'register',
        h2: 'What is included',
        items: [
          'Review of live and recent campaigns, landing pages, and lifecycle messages against the rules for each market.',
          'Review of affiliate and partner content, including corrections.',
          'Mapping of your current approval process, with time per step.',
          'Acquisition and retention economics by product and channel, including review time and KYC friction where data allows.',
        ],
      },
      {
        type: 'rows',
        h2: 'What you receive',
        items: [
          { title: 'A risk register', body: 'Each risk is rated by severity and likelihood.' },
          { title: 'A prioritized fix list', body: 'The fixes are ordered, so your team knows what to change first.' },
          { title: 'A draft claim library', body: 'It covers the highest-risk claims found in the review.' },
          { title: 'A 90-day plan', body: 'The plan names owners and decision points.' },
        ],
      },
      {
        type: 'checks',
        negative: true,
        h2: 'What is not included',
        items: [
          'Legal opinions. We identify where your counsel should review a claim.',
          'Media buying or campaign execution.',
          'Changes to your product or customer terms.',
        ],
      },
      {
        type: 'rail',
        id: 'timeline',
        h2: 'Timeline',
        items: [
          { title: 'Kickoff and data request', body: 'We agree the scope, name a process owner for approvals, and request recent campaigns and partner content.', when: 'Week 1' },
          { title: 'Review and interviews', body: 'We review the material against the rules for each market and interview the people in the approval path.', when: 'Weeks 2 to 4' },
          { title: 'Readout and plan', body: 'We present the risk register and the fix list, and hand over the 90-day plan.', when: 'Weeks 5 to 6' },
        ],
      },
      {
        type: 'faq',
        items: [
          { q: 'How long does it take?', a: 'Four to six weeks.' },
          { q: 'What do you need from us?', a: 'Access to recent campaigns, partner content, and a process owner for approvals. Data access requirements are confirmed before kickoff.' },
          { q: 'Will we get a sign-off from legal?', a: 'No. We give you a risk view and a list of claims for your counsel to approve.' },
        ],
      },
      { type: 'cta', h2: 'Book a diagnostic', body: 'A short call confirms fit, and a written scope follows whether or not we work together.', label: 'Book a diagnostic' },
    ],
  },
  {
    path: '/services/claim-library-build/',
    crumbs,
    crumbLabel: 'Claim library build',
    title: 'Claim Library and Approval Workflow: Revault',
    description: 'Build an approved claim library and risk-tiered approval workflow for your markets, with your first campaigns run through it.',
    service: { name: 'Claim library and approval workflow build', type: 'Marketing compliance process', area: ['Switzerland'] },
    h1: 'A claim library and approval workflow your team can run',
    sub: 'A claim library turns regulatory judgment into shared working material. Marketing knows which claims are approved, what disclosures they require, and who must review anything new. Legal spends less time on routine content and more on the cases that need it.',
    actions: [{ label: 'Discuss a build', href: '/book-a-diagnostic/' }, { label: 'Read the method', href: '/method/' }],
    media: { type: 'facts', label: 'Summary of the claim library build', title: 'The build at a glance', rows: [['Duration', 'Eight to twelve weeks'], ['Fee', 'Project fee, quoted by scope'], ['Output', 'Claim library, risk tiers, workflow, and first campaigns']] },
    blocks: [
      {
        type: 'rows',
        h2: 'What we build',
        items: [
          { title: 'A claim library', body: 'Organized by product and market, with each claim, its approved wording, required disclosures, and its source.' },
          { title: 'A risk-tiering rule set', body: 'It states which content needs marketing sign-off, which needs legal review, and which needs a product check.' },
          { title: 'An approval workflow', body: 'With service-level targets and a complete record of each decision.' },
          { title: 'Your first campaigns', body: 'Two or three campaigns are run through the new process before handover.' },
        ],
      },
      {
        type: 'split',
        mock: 'library',
        h2: 'How the library stays current',
        body: ['Rules change. Each claim has an owner, a review date, and a change log. When a rule or platform policy changes, the affected claims are flagged and reviewed.'],
      },
      {
        type: 'split',
        tone: 'tint',
        mock: 'approval',
        h2: 'Who signs off',
        body: ['Your counsel approves the legal content of the library. Revault maintains the structure, the workflow, and the operational content. The approval record shows who approved each claim and when.'],
        link: { label: 'See how records are kept', href: '/method/' },
      },
      { type: 'cta', h2: 'Discuss a build', body: 'Most builds follow a diagnostic, because the risk register tells us which claims and markets the library should cover first.', label: 'Discuss a build' },
    ],
  },
  {
    path: '/services/managed-growth/',
    crumbs,
    crumbLabel: 'Managed growth',
    title: 'Managed Growth Retainer for Regulated Brands: Revault',
    description: 'Monthly campaign production, partner management, lifecycle work, and reporting, all within your approved claim library.',
    service: { name: 'Managed growth retainer', type: 'Managed marketing service', area: ['Switzerland'] },
    h1: 'Managed growth within your approved rules',
    sub: 'The managed retainer runs your growth month to month. Campaigns are produced within the approved claim library, partners are managed to the same rules, and reporting shows what the spend produces.',
    actions: [{ label: 'Book a scoping call', href: '/book-a-diagnostic/' }, { label: 'Read the method', href: '/method/' }],
    media: { type: 'facts', label: 'Summary of the managed growth retainer', title: 'The retainer at a glance', rows: [['Term', 'Monthly, six-month minimum'], ['Fee', 'By scope, never tied to ad spend'], ['Output', 'Campaigns, partner reviews, and a monthly report']] },
    blocks: [
      {
        type: 'checks',
        mock: 'channels',
        h2: 'What the retainer covers',
        items: [
          'Campaign production within approved claims, with pre-checks before submission.',
          'Partner and affiliate management, including content reviews and corrections.',
          'Lifecycle and retention programs, with holdout testing.',
          'Monthly reporting on acquisition and retention by product and channel.',
        ],
      },
      {
        type: 'split',
        h2: 'How pricing works',
        body: ['The retainer is priced by scope: the number of markets, active products, and partners. The minimum term is six months. We do not tie fees to ad spend, so our incentives stay aligned with compliance quality.'],
      },
      {
        type: 'table',
        h2: 'What the monthly report shows',
        cols: ['Measure', 'What it tells you'],
        rows: [
          ['Days from brief to approved asset', 'How long a campaign waits before it can launch'],
          ['First-pass approval rate', 'How much content is approved without a second review round'],
          ['Corrections or takedowns', 'What had to be changed or removed after going live'],
          ['Cost per incremental customer', 'What the spend produced, by product'],
        ],
      },
      { type: 'cta', h2: 'Book a scoping call', body: 'The call sets the markets, products, and partners in scope, and the quote follows from those three numbers.', label: 'Book a scoping call' },
    ],
  },
];
