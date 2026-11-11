// Every page of the site, as data. build.mjs turns each entry into one HTML file.
import solutions from './solutions.mjs';
import services from './services.mjs';
import company from './company.mjs';
import legal from './legal.mjs';

const book = { label: 'Analyse anfragen', href: '/book-a-diagnostic/' };

const home = {
  path: '/',
  title: 'Marketing für regulierte Finanz- und Kryptofirmen: Revault',
  description: 'Revault übernimmt Go-to-Market, Wachstum und Marketing für regulierte Finanz-, Fintech- und Kryptoteams. Jede Kampagne ist vor dem Start freigegeben.',
  h1: 'Wachstum, das vor Compliance besteht',
  sub: 'Revault übernimmt Go-to-Market, Wachstum und Marketing für regulierte Finanz-, Fintech- und Kryptoteams. Wir führen Ihre Kampagnen und Partnerprogramme, füllen Ihr CRM mit qualifizierten Käufern und machen daraus Umsatz. Jede Kampagne ist vom Rechtsdienst, von Compliance und von den Partnerbanken freigegeben.',
  actions: [book, { label: 'So funktioniert es', href: '#how-it-works' }],
  media: { type: 'growth', label: 'Animation: Ein B2B-Käufer in einem regulierten Unternehmen wird über Kampagnen und Partner zum Lead, wird im CRM qualifiziert und wird zu regelkonformem Umsatz, bestätigt durch ein Dollarzeichen' },
  blocks: [
    {
      type: 'diagram',
      h2: 'Warum regulierte Kampagnen stecken bleiben',
      body: [
        'Wachstumsteams in regulierten Märkten arbeiten mit Regeln, die sich je nach Markt und Kanal unterscheiden. Eine Kampagne kann in einem Land freigegeben und im nächsten verboten sein. Partnerbanken prüfen jedes Werbemittel, das ihren Namen trägt, und Werbeplattformen können eine Kategorie kurzfristig sperren.',
        'Die meisten Teams schicken deshalb alles an den Rechtsdienst und warten. Das verzögert den Start, und manchmal wird eine Kampagne zurückgezogen, nachdem sie bereits live ist.',
        'Im Januar 2026 verbot die britische Advertising Standards Authority (ASA) laut Medienberichten über den Entscheid eine Reihe von Coinbase-Anzeigen, weil sie die Risiken von Kryptoanlagen falsch darstellten. Revault macht solche Probleme sichtbar, bevor eine Kampagne startet.',
      ],
      flow: {
        label: 'Wie eine startbereite Kampagne verzögert oder zurückgezogen wird',
        top: { icon: 'alert', label: 'Kampagne ist startbereit' },
        cols: [
          [{ icon: 'inbox', label: 'Alles geht an den Rechtsdienst' }, { icon: 'clock', label: 'Das Team wartet auf die Prüfung' }, { icon: 'trend', label: 'Der Start verschiebt sich', end: true }],
          [{ icon: 'globe', label: 'Regeln je Markt verschieden' }, { icon: 'ban', label: 'Hier freigegeben, dort verboten' }, { icon: 'undo', label: 'Kampagne nach dem Start gestoppt', end: true }],
        ],
      },
    },
    {
      type: 'rows',
      h2: 'Leadgenerierung für regulierte Käufer',
      intro: 'Leads in der Finanzbranche brauchen Zeit, und im B2B entscheidet ein Gremium über den Kauf. Wir planen Kampagnen und Outreach für die Personen, die zustimmen müssen.',
      items: [
        { title: 'Leadgenerierung', body: 'Aus öffentlichen Informationen über die Unternehmen in Ihrem Segment erstellen wir eine Zielliste. Diese Unternehmen erreichen wir über Kampagnen, Partner und freigegebenen Outreach.' },
        { title: 'Das Buying Center', body: 'Banken und Genossenschaftsbanken kaufen langsam. Einkauf, IT-Sicherheit und Compliance prüfen den Anbieter je einzeln. Wir bereiten die Nachweise vor, die jede dieser Stellen verlangt.' },
        { title: 'Überprüfbare Nachweise', body: 'Jeder Claim in Ihren Verkaufsunterlagen verweist auf ein Dokument: eine Fallstudie, ein Sicherheitszertifikat oder eine veröffentlichte Produktspezifikation.' },
        { title: 'Vom Lead zum Umsatz', body: 'Die Leads werden in Ihrem CRM erfasst. Jeden Monat berichten wir, über welche Kanäle daraus Kunden wurden und zu welchen Kosten.' },
      ],
    },
    {
      type: 'rail',
      id: 'how-it-works',
      h2: 'So arbeitet Revault',
      intro: 'Die drei Phasen folgen aufeinander. Nach jeder Phase können Sie aufhören und behalten das Ergebnis.',
      items: [
        { title: 'Analyse', body: 'Wir prüfen Ihre laufenden Kampagnen, die Partnerinhalte, den Freigabeprozess und die Kosten der Kundengewinnung. Sie erhalten eine priorisierte Liste der Risiken und Korrekturen sowie einen 90-Tage-Plan.', when: 'Vier bis sechs Wochen' },
        { title: 'Claim-Bibliothek und Freigabeprozess', body: 'Wir erarbeiten die freigegebenen Claims, die Pflichthinweise und den Freigabeweg für Ihre Märkte. Am Ende führt Ihr Team den Prozess selbst.', when: 'Acht bis zwölf Wochen' },
        { title: 'Managed Growth', body: 'Wir produzieren Kampagnen innerhalb der freigegebenen Bibliothek, betreuen Partner und Lifecycle-Nachrichten und berichten über Kundengewinnung und Kundenbindung je Produkt.', when: 'Jeden Monat' },
      ],
    },
    {
      type: 'linkrows',
      h2: 'Für wen Revault arbeitet',
      items: [
        { title: 'Kryptobörsen und Broker', body: 'Claim-Prüfung je Markt und Aufsicht über Partnerinhalte.', href: '/solutions/crypto-exchanges-brokers/' },
        { title: 'Neobanken und Challenger', body: 'Wachstum bei Zweitprodukten und Kundenbindung.', href: '/solutions/neobanks-challengers/' },
        { title: 'Fintech-Partnerschaftsteams', body: 'Schnellere Freigaben der Bank und gemeinsame Inhalte.', href: '/solutions/fintech-bank-partnerships/' },
        { title: 'B2B-Fintechs mit Banken als Kunden', body: 'Inhalte mit Nachweisen und freigegebener Outreach.', href: '/solutions/b2b-fintech-for-banks/' },
        { title: 'Blockchain-Protokolle', body: 'Aufklärungsinhalte und Prüfung von Anreizen, mit begrenzter Kapazität.', href: '/solutions/blockchain-protocols/' },
      ],
    },
    {
      type: 'showcase',
      tone: 'ink',
      h2: 'Was wir liefern',
      intro: 'Revault ist eine Dienstleistung, die von Menschen erbracht wird. Wir gewinnen Käufer über Kampagnen und Partner, erfassen sie in Ihrem CRM und berichten über den Umsatz, der daraus entsteht.',
      items: [
        { title: 'Kampagnen und Kanäle', body: 'Wir produzieren und führen Ihre Kampagnen, Partner- und Affiliate-Programme, Lifecycle-Nachrichten und Ihren Outreach, alles innerhalb Ihrer freigegebenen Claims.' },
        { title: 'Ihr CRM', body: 'Die Käufer, die jeder Kanal bringt, werden in Ihrem CRM erfasst. Marketing und Verkauf arbeiten mit derselben Liste.' },
        { title: 'Umsatz', body: 'Jeden Monat berichten wir über Kundengewinnung, Kundenbindung und Kosten pro zusätzlich gewonnenem Kunden, je Produkt und je Kanal.' },
        { title: 'Freigabe vor dem Start', body: 'Jedes Werbemittel wird mit der Claim-Bibliothek abgeglichen. Je nach Risikostufe gibt es danach Marketing, Compliance oder der Rechtsdienst frei.' },
      ],
    },
    {
      type: 'split',
      h2: 'Wie wir mit Belegen umgehen',
      body: ['Wir veröffentlichen unser Research mit Quellen, Datum und Grenzen der Aussagekraft, auch dort, wo die Datenlage dünn ist. Ändern sich die beschriebenen Regeln, prüfen wir die Artikel erneut.'],
      link: { label: 'Zur Research-Bibliothek', href: '/research/' },
    },
    {
      type: 'cta',
      h2: 'Mit einer Analyse beginnen',
      body: 'Ein klar begrenztes Mandat: Sie sehen Ihre aktuellen Risiken und erhalten einen Plan, den Sie umsetzen können. Wir erbringen keine Rechtsberatung. Für die Regeln, die wir anwenden, bleibt Ihre Rechtsberatung verantwortlich.',
      label: 'Analyse anfragen',
    },
  ],
};

const notFound = {
  path: '/404/',
  noindex: true,
  title: 'Seite nicht gefunden: Revault',
  description: 'Die gesuchte Seite gibt es auf der Website von Revault nicht.',
  h1: 'Diese Seite gibt es nicht',
  sub: 'Vielleicht hat sich die Adresse geändert, oder der Link, über den Sie gekommen sind, ist veraltet. Die meisten Besucherinnen und Besucher suchen die Startseite, die Übersicht der Lösungen oder die Anfrage für eine Analyse. Alle drei erreichen Sie von hier aus mit einem Klick.',
  actions: [{ label: 'Zur Startseite', href: '/' }, { label: 'Lösungen ansehen', href: '/solutions/' }],
  blocks: [{ type: 'cta', h2: 'Sprechen Sie mit uns über eine Analyse', body: 'Wenn Sie Revault erreichen wollten: Auf der Anfrageseite füllen Sie ein kurzes Formular aus, und wir antworten mit einem schriftlichen Leistungsumfang.', label: 'Analyse anfragen' }],
};

export default [home, ...solutions, ...services, ...company, ...legal, notFound];
