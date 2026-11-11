const crumbs = [['Rechtliches', '/legal/']];
const draft = 'Den endgültigen Text dieser Seite verfasst unsere Rechtsberatung. Die Abschnitte unten zeigen, was er behandeln wird.';
const actions = [{ label: 'Disclaimer lesen', href: '/legal/disclaimer/' }, { label: 'Alle rechtlichen Seiten', href: '/legal/' }];
const sections = (h2, names) => ({ type: 'rows', h2, items: names.map(([title, body]) => ({ title, status: 'Bei der Rechtsberatung', body })) });

export default [
  {
    path: '/legal/',
    crumbs: [],
    crumbLabel: 'Rechtliches',
    title: 'Rechtliche Informationen: Revault',
    description: 'Datenschutzerklärung, Nutzungsbedingungen, Cookie-Hinweis und der Disclaimer: Revault erbringt keine Rechts- oder Finanzberatung.',
    h1: 'Rechtliche Informationen',
    sub: 'Diese Seite führt zur Datenschutzerklärung, zu den Nutzungsbedingungen, zum Cookie-Hinweis und zum Disclaimer. Revault erbringt Dienstleistungen für Marketing- und Compliance-Prozesse und keine Rechts- oder Finanzberatung. Für ihre regulatorischen Pflichten sollten sich Kunden auf ihre eigene Rechtsberatung stützen.',
    actions: [{ label: 'Disclaimer lesen', href: '/legal/disclaimer/' }, { label: 'Zur Datenschutzerklärung', href: '/legal/privacy/' }],
    blocks: [
      {
        type: 'linkrows',
        h2: 'Rechtliche Seiten',
        items: [
          { title: 'Datenschutzerklärung', body: 'Wie Revault Personendaten nach Schweizer und EU-Datenschutzrecht beschafft, verwendet und schützt.', href: '/legal/privacy/' },
          { title: 'Nutzungsbedingungen', body: 'Die Bedingungen für die Nutzung der Website von Revault und der darin enthaltenen Informationen.', href: '/legal/terms/' },
          { title: 'Cookie-Hinweis', body: 'Welche Cookies Revault einsetzt, wozu, und wie Sie Ihre Auswahl ändern.', href: '/legal/cookies/' },
          { title: 'Disclaimer', body: 'Revault erbringt Dienstleistungen für Marketing- und Compliance-Prozesse, keine Rechts- oder Finanzberatung.', href: '/legal/disclaimer/' },
        ],
      },
    ],
  },
  {
    path: '/legal/privacy/',
    crumbs,
    crumbLabel: 'Datenschutzerklärung',
    draft,
    title: 'Datenschutzerklärung: Revault',
    description: 'Wie Revault Personendaten nach Schweizer und EU-Datenschutzrecht beschafft, verwendet und schützt.',
    h1: 'Wie Revault mit Personendaten umgeht',
    sub: 'Diese Erklärung wird darlegen, wie Revault Personendaten nach Schweizer und EU-Datenschutzrecht beschafft, verwendet und schützt. Sie hält fest, wer der Verantwortliche ist, welche Daten wozu beschafft werden, wer sie erhält, wie lange sie aufbewahrt werden und welche Rechte Sie geltend machen können.',
    actions,
    blocks: [sections('Was die Erklärung behandelt', [
      ['Verantwortlicher', 'Wer für Ihre Personendaten verantwortlich ist.'],
      ['Beschaffte Daten', 'Die Personendaten, die Revault beschafft.'],
      ['Zwecke', 'Wozu jede Datenkategorie verwendet wird.'],
      ['Rechtsgrundlage', 'Die Grundlage jeder Verwendung nach Schweizer und EU-Recht.'],
      ['Empfänger', 'Wer Personendaten erhält.'],
      ['Bekanntgabe ins Ausland', 'Ob Daten die Schweiz oder die EU verlassen und mit welchen Garantien.'],
      ['Aufbewahrung', 'Wie lange jede Kategorie aufbewahrt wird.'],
      ['Rechte', 'Welche Rechte Sie haben und wie Sie sie geltend machen.'],
      ['Kontakt', 'Wie Sie Revault zu Ihren Daten erreichen.'],
    ])],
  },
  {
    path: '/legal/terms/',
    crumbs,
    crumbLabel: 'Nutzungsbedingungen',
    draft,
    title: 'Nutzungsbedingungen: Revault',
    description: 'Die Bedingungen für die Nutzung der Website von Revault und der darin enthaltenen Informationen.',
    h1: 'Nutzungsbedingungen für diese Website',
    sub: 'Diese Bedingungen werden die Nutzung der Website von Revault und der darin enthaltenen Informationen regeln. Die Informationen auf dieser Website sind allgemeiner Natur und geben möglicherweise nicht die neusten Regeländerungen wieder. Der Disclaimer gilt bereits heute für alles, was hier veröffentlicht ist.',
    actions,
    blocks: [sections('Was die Bedingungen behandeln', [
      ['Nutzung der Website', 'Die Bedingungen, unter denen die Website und ihre Inhalte genutzt werden dürfen.'],
      ['Informationen auf der Website', 'Der allgemeine Charakter der Informationen und ihre Grenzen.'],
    ])],
  },
  {
    path: '/legal/cookies/',
    crumbs,
    crumbLabel: 'Cookie-Hinweis',
    draft,
    title: 'Cookie-Hinweis: Revault',
    description: 'Welche Cookies Revault einsetzt, wozu, und wie Sie Ihre Auswahl ändern.',
    h1: 'Cookies auf der Website von Revault',
    sub: 'Dieser Hinweis wird festhalten, welche Cookies Revault einsetzt, wozu sie dienen und wie Sie Ihre Auswahl ändern können. Cookies, die für den Betrieb der Website nicht nötig sind, bleiben ausgeschaltet, bis Sie einwilligen. Vorher läuft kein Tracking durch Dritte.',
    actions,
    blocks: [sections('Was der Hinweis behandelt', [
      ['Eingesetzte Cookies', 'Jedes Cookie mit seinem Zweck.'],
      ['Ihre Auswahl', 'Wie Sie einwilligen, ablehnen oder Ihre Einwilligung widerrufen.'],
    ])],
  },
  {
    path: '/legal/disclaimer/',
    crumbs,
    crumbLabel: 'Disclaimer',
    title: 'Disclaimer: Revault ist keine Rechtsberatung',
    description: 'Revault erbringt Dienstleistungen für Marketing- und Compliance-Prozesse, keine Rechts- oder Finanzberatung.',
    h1: 'Revault erbringt keine Rechtsberatung',
    sub: 'Revault erbringt keine Rechts- oder Finanzberatung. Die Informationen auf dieser Website sind allgemeiner Natur und geben möglicherweise nicht die neusten Regeländerungen wieder. Kunden bleiben für ihre regulatorischen Pflichten verantwortlich und sollten sich auf ihre eigene Rechtsberatung stützen.',
    actions: [{ label: 'Alle rechtlichen Seiten', href: '/legal/' }, { label: 'Zur Methode', href: '/method/' }],
    blocks: [
      {
        type: 'split',
        h2: 'Was Revault leistet',
        body: [
          'Revault erbringt Dienstleistungen für Marketing- und Compliance-Prozesse. Wir bauen den Prozess und die Prüfstufe auf, und Ihre Rechtsberatung gibt die Regeln frei, die wir anwenden.',
          'Wir senken das Risiko einer Ablehnung und verkürzen den Prozess. Über die Freigabe entscheiden weiterhin Ihre Prüfenden und die Aufsichtsbehörden.',
        ],
      },
    ],
  },
];
