const crumbs = [['Legal', '/legal/']];
const draft = 'Counsel drafts the final text of this page. The sections below show what it will cover.';
const actions = [{ label: 'Read the disclaimer', href: '/legal/disclaimer/' }, { label: 'All legal pages', href: '/legal/' }];
const sections = (h2, names) => ({ type: 'rows', h2, items: names.map(([title, body]) => ({ title, status: 'With counsel', body })) });

export default [
  {
    path: '/legal/',
    crumbs: [],
    crumbLabel: 'Legal',
    title: 'Legal Information: Revault',
    description: 'Privacy notice, terms, cookie notice, and the disclaimer that Revault does not provide legal or financial advice.',
    h1: 'Legal information',
    sub: 'This page links to the privacy notice, the terms of use, the cookie notice, and the disclaimer. Revault provides marketing and compliance process services and does not provide legal or financial advice, so clients should rely on their own counsel for their regulatory obligations.',
    actions: [{ label: 'Read the disclaimer', href: '/legal/disclaimer/' }, { label: 'Read the privacy notice', href: '/legal/privacy/' }],
    blocks: [
      {
        type: 'linkrows',
        h2: 'Legal pages',
        items: [
          { title: 'Privacy notice', body: 'How Revault collects, uses, and protects personal data under Swiss and EU data protection law.', href: '/legal/privacy/' },
          { title: 'Terms of use', body: 'Terms governing use of the Revault website and the information it contains.', href: '/legal/terms/' },
          { title: 'Cookie notice', body: 'Which cookies Revault uses, why, and how to change your choices.', href: '/legal/cookies/' },
          { title: 'Disclaimer', body: 'Revault provides marketing and compliance process services, not legal or financial advice.', href: '/legal/disclaimer/' },
        ],
      },
    ],
  },
  {
    path: '/legal/privacy/',
    crumbs,
    crumbLabel: 'Privacy notice',
    draft,
    title: 'Privacy Notice: Revault',
    description: 'How Revault collects, uses, and protects personal data under Swiss and EU data protection law.',
    h1: 'How Revault handles personal data',
    sub: 'This notice will explain how Revault collects, uses, and protects personal data under Swiss and EU data protection law. It covers who the controller is, what data is collected and why, who receives it, how long it is kept, and the rights you can exercise.',
    actions,
    blocks: [sections('What the notice covers', [
      ['Controller', 'Who is responsible for your personal data.'],
      ['Data collected', 'The personal data Revault collects.'],
      ['Purposes', 'What each category of data is used for.'],
      ['Legal basis', 'The basis for each use under Swiss and EU law.'],
      ['Recipients', 'Who receives personal data.'],
      ['Transfers', 'Whether data leaves Switzerland or the EU, and under which safeguards.'],
      ['Retention', 'How long each category is kept.'],
      ['Rights', 'The rights you have and how to exercise them.'],
      ['Contact', 'How to reach Revault about your data.'],
    ])],
  },
  {
    path: '/legal/terms/',
    crumbs,
    crumbLabel: 'Terms of use',
    draft,
    title: 'Terms of Use: Revault',
    description: 'Terms governing use of the Revault website and the information it contains.',
    h1: 'Terms of use for this website',
    sub: 'These terms will govern use of the Revault website and the information it contains. Information on this site is general and may not reflect the most recent rule changes, and the disclaimer already applies to everything published here.',
    actions,
    blocks: [sections('What the terms cover', [
      ['Use of the website', 'The conditions under which the site and its content may be used.'],
      ['Information on the site', 'The general nature of the information and its limits.'],
    ])],
  },
  {
    path: '/legal/cookies/',
    crumbs,
    crumbLabel: 'Cookie notice',
    draft,
    title: 'Cookie Notice: Revault',
    description: 'Which cookies Revault uses, why, and how to change your choices.',
    h1: 'Cookies on the Revault website',
    sub: 'This notice will state which cookies Revault uses, why it uses them, and how you can change your choices. Cookies that the site does not need in order to work stay off until you consent, and no third-party tracking runs before that.',
    actions,
    blocks: [sections('What the notice covers', [
      ['Cookies in use', 'Each cookie, with its purpose.'],
      ['Your choices', 'How to give, refuse, or withdraw consent.'],
    ])],
  },
  {
    path: '/legal/disclaimer/',
    crumbs,
    crumbLabel: 'Disclaimer',
    title: 'Disclaimer: Revault Is Not a Legal Adviser',
    description: 'Revault provides marketing and compliance process services, not legal or financial advice.',
    h1: 'Revault does not provide legal advice',
    sub: 'Revault does not provide legal or financial advice. Information on this site is general and may not reflect the most recent rule changes. Clients remain responsible for their regulatory obligations and should rely on their own counsel.',
    actions: [{ label: 'All legal pages', href: '/legal/' }, { label: 'Read the method', href: '/method/' }],
    blocks: [
      {
        type: 'split',
        h2: 'What Revault provides',
        body: [
          'Revault provides marketing and compliance process services. We build the process and the review layer, and your counsel approves the rules we apply.',
          'We reduce the risk of rejection and speed the process. Approval decisions remain with your reviewers and regulators.',
        ],
      },
    ],
  },
];
