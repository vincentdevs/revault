// Every page of the site, as data. build.mjs turns each entry into one HTML file.
import solutions from './solutions.mjs';
import services from './services.mjs';
import company from './company.mjs';
import legal from './legal.mjs';

const book = { label: 'Book a diagnostic', href: '/book-a-diagnostic/' };

const home = {
  path: '/',
  title: 'Regulated Growth Marketing for Finance and Crypto: Revault',
  description: 'Revault is a go-to-market, growth, and marketing service for regulated finance, fintech, and crypto teams, with every campaign approved before launch.',
  h1: 'Growth you can take to compliance',
  sub: 'Revault is a go-to-market, growth, and marketing service for regulated finance, fintech, and crypto teams. We run your distribution, fill your CRM with qualified buyers, and turn them into revenue, with every campaign approved by legal, compliance, and partner banks.',
  actions: [book, { label: 'See how it works', href: '#how-it-works' }],
  media: { type: 'growth', label: 'Animation: a B2B buyer at a regulated company becomes a lead through distribution, is qualified in the CRM, and becomes compliant revenue, confirmed by a dollar sign' },
  blocks: [
    {
      type: 'diagram',
      h2: 'Why regulated campaigns stall',
      body: [
        'Growth teams in regulated markets work under rules that change by market and by channel. A campaign can be approved in one country and banned in another. Partner banks review every asset that carries their name, and ad platforms can remove a category with little notice.',
        'Most teams handle this by sending everything to legal and waiting, which slows launches and sometimes pulls campaigns after they go live.',
        'In January 2026, the UK\'s Advertising Standards Authority banned a series of Coinbase advertisements for misrepresenting the risks of crypto investment, according to press coverage of the ruling. Revault exists to make that kind of problem visible before launch.',
      ],
      flow: {
        label: 'How a campaign ready to launch ends up delayed or pulled',
        top: { icon: 'alert', label: 'Campaign ready to launch' },
        cols: [
          [{ icon: 'inbox', label: 'Everything goes to legal' }, { icon: 'clock', label: 'The team waits for review' }, { icon: 'trend', label: 'The launch slips', end: true }],
          [{ icon: 'globe', label: 'Rules differ by market' }, { icon: 'ban', label: 'Approved here, banned there' }, { icon: 'undo', label: 'Campaign pulled after launch', end: true }],
        ],
      },
    },
    {
      type: 'rows',
      h2: 'Lead generation built for regulated buyers',
      intro: 'Leads in finance are won slowly, and in B2B a committee approves them. We plan distribution around the people who have to say yes.',
      items: [
        { title: 'Lead generation', body: 'We build a target list from public information about the companies in your segment, then reach them through campaigns, partners, and approved outreach.' },
        { title: 'The buying committee', body: 'Banks and credit unions buy slowly. Procurement, security, and compliance teams each review the vendor, so we prepare the evidence each of them asks for.' },
        { title: 'Proof that can be checked', body: 'Each claim in your sales material links to a document: a case study, a security certificate, or a published product specification.' },
        { title: 'From lead to revenue', body: 'Leads are recorded in your CRM, and each month we report which channels turned them into customers and at what cost.' },
      ],
    },
    {
      type: 'rail',
      id: 'how-it-works',
      h2: 'How Revault works',
      intro: 'The three stages run in sequence, and you can stop after any of them with a deliverable you keep.',
      items: [
        { title: 'Diagnostic', body: 'We review your live campaigns, partner content, approval process, and acquisition economics. You receive a prioritized list of risks and fixes and a 90-day plan.', when: 'Four to six weeks' },
        { title: 'Claim library and workflow', body: 'We build the approved claims, required disclosures, and approval route for your markets. By the end, your team is running the system itself.', when: 'Eight to twelve weeks' },
        { title: 'Managed growth', body: 'We produce campaigns within the approved library, manage partners and lifecycle messages, and report on acquisition and retention by product.', when: 'Each month' },
      ],
    },
    {
      type: 'linkrows',
      h2: 'Who Revault is for',
      items: [
        { title: 'Crypto exchanges and brokers', body: 'Claim review across markets and partner oversight.', href: '/solutions/crypto-exchanges-brokers/' },
        { title: 'Neobanks and challengers', body: 'Growth in secondary products and retention.', href: '/solutions/neobanks-challengers/' },
        { title: 'Fintech partnership teams', body: 'Faster bank approvals and shared content.', href: '/solutions/fintech-bank-partnerships/' },
        { title: 'B2B fintechs selling to banks', body: 'Proof-based content and approved outreach.', href: '/solutions/b2b-fintech-for-banks/' },
        { title: 'Blockchain protocols', body: 'Education and incentive checks, with limited availability.', href: '/solutions/blockchain-protocols/' },
      ],
    },
    {
      type: 'showcase',
      tone: 'ink',
      h2: 'What we deliver',
      intro: 'Revault is a service, run by people. We use distribution to bring you buyers, we put them in your CRM, and we report the revenue they produce.',
      items: [
        { title: 'Distribution', body: 'We produce and run your campaigns, partner and affiliate programs, lifecycle messages, and outreach, all within your approved claims.' },
        { title: 'Your CRM', body: 'The buyers each channel brings in are recorded in your CRM, so marketing and sales work from the same list.' },
        { title: 'Revenue', body: 'Each month we report acquisition, retention, and cost per incremental customer, by product and by channel.' },
        { title: 'Approval before launch', body: 'Every asset is checked against the claim library, then signed off by marketing, compliance, or legal according to its risk tier.' },
      ],
    },
    {
      type: 'split',
      h2: 'Our approach to evidence',
      body: ['We publish our research with sources, dates, and limitations, including where evidence is thin. Articles are reviewed again when the rules they describe change.'],
      link: { label: 'Start with the research library', href: '/research/' },
    },
    {
      type: 'cta',
      h2: 'Start with a diagnostic',
      body: 'A bounded engagement that gives you a clear view of your current risks and a plan you can act on. We do not provide legal advice, and your counsel remains responsible for the rules we apply.',
      label: 'Book a diagnostic',
    },
  ],
};

const notFound = {
  path: '/404/',
  noindex: true,
  title: 'Page not found: Revault',
  description: 'The page you asked for does not exist on the Revault website.',
  h1: 'This page does not exist',
  sub: 'The address may have changed, or the link that brought you here may be out of date. The home page, the solutions overview, and the booking page are the three places most visitors are looking for, and each one is a single step from here.',
  actions: [{ label: 'Go to the home page', href: '/' }, { label: 'See the solutions', href: '/solutions/' }],
  blocks: [{ type: 'cta', h2: 'Talk to us about a diagnostic', body: 'If you were looking for a way to reach Revault, the booking page takes a short request and we reply with a written scope.', label: 'Book a diagnostic' }],
};

export default [home, ...solutions, ...services, ...company, ...legal, notFound];
