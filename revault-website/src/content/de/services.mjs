const crumbs = [['Leistungen', '/services/']];
const book = { label: 'Analyse anfragen', href: '/book-a-diagnostic/' };

export default [
  {
    path: '/services/',
    crumbs: [],
    crumbLabel: 'Leistungen',
    title: 'Revault-Leistungen: Analyse, Aufbau, Managed Growth',
    description: 'Drei Leistungen für reguliertes Wachstum: eine Analyse zum Fixpreis, der Aufbau von Claim-Bibliothek und Freigabeprozess und ein Managed-Growth-Retainer.',
    h1: 'So arbeiten wir mit Ihnen',
    sub: 'Revault verkauft seine Leistungen in einer festen Reihenfolge. Die meisten Kunden beginnen mit einer Analyse, gehen dann in den Aufbau und danach in einen Retainer. Nach jeder Phase können Sie aufhören und behalten das Ergebnis. Die erste Verpflichtung beträgt deshalb vier bis sechs Wochen zu einem Fixpreis.',
    actions: [book, { label: 'Zur Methode', href: '/method/' }],
    media: { type: 'facts', label: 'Die Reihenfolge der drei Leistungen', title: 'Die Reihenfolge', rows: [['Zuerst', 'Analyse, vier bis sechs Wochen'], ['Danach', 'Aufbau, acht bis zwölf Wochen'], ['Anschliessend', 'Managed Growth, jeden Monat']] },
    blocks: [
      {
        type: 'showcase',
        tone: 'ink',
        h2: 'Drei Leistungen, der Reihe nach',
        items: [
          { title: 'Analyse', body: 'Vier bis sechs Wochen zum Fixpreis. Wir prüfen Ihre Kampagnen, die Partnerinhalte, die Freigaben und die Kosten der Kundengewinnung. Am Ende steht ein 90-Tage-Plan.', href: '/services/diagnostic/', more: 'Zur Analyse' },
          { title: 'Aufbau von Claim-Bibliothek und Freigabeprozess', body: 'Acht bis zwölf Wochen zu einem Projektpreis. Die freigegebenen Claims, die Risikostufen und der Freigabeprozess für Ihre Märkte. Ihre ersten Kampagnen durchlaufen den Prozess bereits.', href: '/services/claim-library-build/', more: 'Zum Aufbau' },
          { title: 'Managed Growth', body: 'Ein monatlicher Retainer mit einer Mindestlaufzeit von sechs Monaten. Kampagnen, Partner, Lifecycle-Programme und Reporting, alles innerhalb Ihrer freigegebenen Claim-Bibliothek.', href: '/services/managed-growth/', more: 'Zum Retainer' },
        ],
      },
      {
        type: 'rail',
        tone: 'white',
        h2: 'Wie eine Phase zur nächsten führt',
        items: [
          { title: 'Analyse', body: 'Sie benennt die Risiken und die Korrekturen und liefert den Plan, aus dem sich der Umfang der nächsten Phase ergibt.', when: 'Vier bis sechs Wochen' },
          { title: 'Aufbau', body: 'Er macht aus den grössten Risiken freigegebene Claims und einen Freigabeprozess, den Ihr Team selbst führt.', when: 'Acht bis zwölf Wochen' },
          { title: 'Managed Growth', body: 'Wir führen Kampagnen, Partner und Lifecycle-Programme innerhalb dieser Bibliothek und berichten jeden Monat.', when: 'Jeden Monat' },
        ],
      },
      {
        type: 'split',
        h2: 'Wie wir Preise festlegen',
        body: [
          'Der Preis hängt vom Umfang ab: von der Anzahl Märkte, aktiver Produkte und Partner. Wir erstellen eine Offerte nach einem ersten Gespräch. Fixe Preise für den Aufbau oder den Retainer veröffentlichen wir keine.',
          'Die Preisspanne der Analyse bestätigen wir bei der Buchung.',
        ],
      },
      { type: 'cta', h2: 'Mit der Analyse beginnen', body: 'Sie ist die kürzeste der drei Leistungen. Aus ihr gehen das Risikoregister und der Plan hervor, auf denen der Umfang der beiden anderen beruht.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/services/diagnostic/',
    crumbs,
    crumbLabel: 'Analyse',
    title: 'Wachstums- und Compliance-Analyse: Revault',
    description: 'Vier bis sechs Wochen zum Fixpreis: Prüfung Ihrer Kampagnen, Partnerinhalte, Freigaben und Kosten der Kundengewinnung, mit einem priorisierten Plan.',
    service: { name: 'Wachstums- und Compliance-Analyse', type: 'Compliance-Audit für das Marketing', area: ['Switzerland'] },
    h1: 'Wachstums- und Compliance-Analyse',
    sub: 'Die Analyse zeigt, wo Ihr Wachstum regulatorischen Risiken ausgesetzt ist und wo es Geld verliert. Sie ist der richtige erste Schritt, wenn Kampagnen in der Prüfung stecken bleiben, wenn ein Partner Bedenken anmeldet oder wenn die Kosten der Kundengewinnung steigen, ohne dass die Ursache klar ist.',
    actions: [book, { label: 'Zum Zeitplan', href: '#timeline' }],
    media: { type: 'facts', label: 'Überblick über die Analyse', title: 'Die Analyse im Überblick', rows: [['Dauer', 'Vier bis sechs Wochen'], ['Preis', 'Fix, bei der Buchung bestätigt'], ['Ergebnis', 'Risikoregister, Korrekturliste, Entwurf der Claim-Bibliothek und 90-Tage-Plan']] },
    blocks: [
      {
        type: 'checks',
        h2: 'Was enthalten ist',
        items: [
          'Prüfung der laufenden und kürzlich beendeten Kampagnen, Landingpages und Lifecycle-Nachrichten anhand der Regeln jedes Marktes.',
          'Prüfung der Affiliate- und Partnerinhalte, einschliesslich der Korrekturen.',
          'Darstellung Ihres heutigen Freigabeprozesses mit der Dauer jedes Schritts.',
          'Kosten von Kundengewinnung und Kundenbindung je Produkt und Kanal, einschliesslich Prüfzeit und Reibung im KYC-Prozess, soweit die Daten es zulassen.',
        ],
      },
      {
        type: 'rows',
        h2: 'Was Sie erhalten',
        items: [
          { title: 'Ein Risikoregister', body: 'Jedes Risiko ist nach Schweregrad und Eintrittswahrscheinlichkeit bewertet.' },
          { title: 'Eine priorisierte Korrekturliste', body: 'Die Korrekturen sind geordnet. Ihr Team weiss, was zuerst zu ändern ist.' },
          { title: 'Der Entwurf einer Claim-Bibliothek', body: 'Er deckt die Claims mit dem höchsten Risiko ab, die in der Prüfung gefunden wurden.' },
          { title: 'Ein 90-Tage-Plan', body: 'Der Plan nennt die Verantwortlichen und die Entscheidungspunkte.' },
        ],
      },
      {
        type: 'checks',
        negative: true,
        h2: 'Was nicht enthalten ist',
        items: [
          'Rechtsgutachten. Wir zeigen auf, wo Ihre Rechtsberatung einen Claim prüfen sollte.',
          'Mediaeinkauf oder die Umsetzung von Kampagnen.',
          'Änderungen an Ihrem Produkt oder Ihren Kundenbedingungen.',
        ],
      },
      {
        type: 'rail',
        id: 'timeline',
        h2: 'Zeitplan',
        items: [
          { title: 'Kickoff und Datenanfrage', body: 'Wir vereinbaren den Umfang, bestimmen eine Person, die den Freigabeprozess verantwortet, und fordern aktuelle Kampagnen und Partnerinhalte an.', when: 'Woche 1' },
          { title: 'Prüfung und Interviews', body: 'Wir prüfen das Material anhand der Regeln jedes Marktes und befragen die Personen, die an der Freigabe beteiligt sind.', when: 'Wochen 2 bis 4' },
          { title: 'Präsentation und Plan', body: 'Wir stellen das Risikoregister und die Korrekturliste vor und übergeben den 90-Tage-Plan.', when: 'Wochen 5 bis 6' },
        ],
      },
      {
        type: 'faq',
        items: [
          { q: 'Wie lange dauert die Analyse?', a: 'Vier bis sechs Wochen.' },
          { q: 'Was brauchen Sie von uns?', a: 'Zugang zu aktuellen Kampagnen und Partnerinhalten sowie eine Person, die den Freigabeprozess verantwortet. Welche Datenzugänge nötig sind, klären wir vor dem Kickoff.' },
          { q: 'Erhalten wir eine juristische Freigabe?', a: 'Nein. Sie erhalten eine Risikoeinschätzung und eine Liste der Claims, die Ihre Rechtsberatung freigeben soll.' },
        ],
      },
      { type: 'cta', h2: 'Analyse anfragen', body: 'In einem kurzen Gespräch klären wir, ob die Analyse passt. Danach erhalten Sie einen schriftlichen Leistungsumfang, auch wenn wir nicht zusammenarbeiten.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/services/claim-library-build/',
    crumbs,
    crumbLabel: 'Aufbau der Claim-Bibliothek',
    title: 'Claim-Bibliothek und Freigabeprozess: Revault',
    description: 'Aufbau einer freigegebenen Claim-Bibliothek und eines Freigabeprozesses nach Risikostufen für Ihre Märkte. Ihre ersten Kampagnen durchlaufen ihn bereits.',
    service: { name: 'Aufbau von Claim-Bibliothek und Freigabeprozess', type: 'Compliance-Prozess für das Marketing', area: ['Switzerland'] },
    h1: 'Eine Claim-Bibliothek, die Ihr Team selbst führt',
    sub: 'Eine Claim-Bibliothek macht aus regulatorischen Einschätzungen ein gemeinsames Arbeitsdokument. Das Marketing weiss, welche Claims (Werbeaussagen) freigegeben sind, welche Pflichthinweise dazugehören und wer Neues prüfen muss. Der Rechtsdienst verbringt weniger Zeit mit Routineinhalten und mehr mit den Fällen, die es verlangen.',
    actions: [{ label: 'Aufbau besprechen', href: '/book-a-diagnostic/' }, { label: 'Zur Methode', href: '/method/' }],
    media: { type: 'facts', label: 'Überblick über den Aufbau der Claim-Bibliothek', title: 'Der Aufbau im Überblick', rows: [['Dauer', 'Acht bis zwölf Wochen'], ['Preis', 'Projektpreis, Offerte nach Umfang'], ['Ergebnis', 'Claim-Bibliothek, Risikostufen, Freigabeprozess und erste Kampagnen']] },
    blocks: [
      {
        type: 'rows',
        h2: 'Was wir aufbauen',
        items: [
          { title: 'Eine Claim-Bibliothek', body: 'Geordnet nach Produkt und Markt, mit jedem Claim, seiner freigegebenen Formulierung, den Pflichthinweisen und der Quelle.' },
          { title: 'Ein Regelwerk für Risikostufen', body: 'Es legt fest, welche Inhalte das Marketing freigibt, welche der Rechtsdienst prüft und welche eine Produktprüfung brauchen.' },
          { title: 'Ein Freigabeprozess', body: 'Mit verbindlichen Bearbeitungsfristen und einem vollständigen Protokoll jedes Entscheids.' },
          { title: 'Ihre ersten Kampagnen', body: 'Zwei oder drei Kampagnen durchlaufen den neuen Prozess, bevor wir ihn übergeben.' },
        ],
      },
      {
        type: 'split',
        h2: 'Wie die Bibliothek aktuell bleibt',
        body: ['Regeln ändern sich. Jeder Claim hat eine verantwortliche Person, ein Prüfdatum und ein Änderungsprotokoll. Ändert sich eine Regel oder die Richtlinie einer Plattform, werden die betroffenen Claims markiert und geprüft.'],
      },
      {
        type: 'split',
        tone: 'tint',
        h2: 'Wer freigibt',
        body: ['Ihre Rechtsberatung gibt den rechtlichen Inhalt der Bibliothek frei. Revault pflegt die Struktur, den Freigabeprozess und die operativen Inhalte. Das Freigabeprotokoll zeigt, wer welchen Claim wann freigegeben hat.'],
        link: { label: 'Wie Protokolle geführt werden', href: '/method/' },
      },
      { type: 'cta', h2: 'Aufbau besprechen', body: 'Die meisten Aufbauprojekte folgen auf eine Analyse. Das Risikoregister zeigt uns, welche Claims und Märkte die Bibliothek zuerst abdecken soll.', label: 'Aufbau besprechen' },
    ],
  },
  {
    path: '/services/managed-growth/',
    crumbs,
    crumbLabel: 'Managed Growth',
    title: 'Managed-Growth-Retainer für regulierte Marken: Revault',
    description: 'Monatliche Kampagnenproduktion, Partnerbetreuung, Lifecycle-Programme und Reporting, alles innerhalb Ihrer freigegebenen Claim-Bibliothek.',
    service: { name: 'Managed-Growth-Retainer', type: 'Marketing als betreute Dienstleistung', area: ['Switzerland'] },
    h1: 'Managed Growth nach Ihren Regeln',
    sub: 'Im Retainer führen wir Ihr Wachstum Monat für Monat. Die Kampagnen entstehen innerhalb der freigegebenen Claim-Bibliothek, für die Partner gelten dieselben Regeln, und das Reporting zeigt, was das eingesetzte Budget bringt.',
    actions: [{ label: 'Scoping-Gespräch buchen', href: '/book-a-diagnostic/' }, { label: 'Zur Methode', href: '/method/' }],
    media: { type: 'facts', label: 'Überblick über den Managed-Growth-Retainer', title: 'Der Retainer im Überblick', rows: [['Laufzeit', 'Monatlich, mindestens sechs Monate'], ['Preis', 'Nach Umfang, nie an das Werbebudget gekoppelt'], ['Ergebnis', 'Kampagnen, Prüfung der Partnerinhalte und ein Monatsbericht']] },
    blocks: [
      {
        type: 'checks',
        h2: 'Was der Retainer umfasst',
        items: [
          'Kampagnenproduktion innerhalb der freigegebenen Claims, mit Vorprüfung vor der Einreichung.',
          'Betreuung von Partnern und Affiliates, einschliesslich Prüfung und Korrektur ihrer Inhalte.',
          'Lifecycle- und Retention-Programme, gemessen gegen eine Kontrollgruppe.',
          'Monatliches Reporting zu Kundengewinnung und Kundenbindung je Produkt und Kanal.',
        ],
      },
      {
        type: 'split',
        h2: 'Wie wir Preise festlegen',
        body: ['Der Preis des Retainers richtet sich nach dem Umfang: der Anzahl Märkte, aktiver Produkte und Partner. Die Mindestlaufzeit beträgt sechs Monate. Unser Honorar hängt nicht vom Werbebudget ab. So verdienen wir nichts daran, dass mehr ausgegeben wird, und können uns an der Qualität der Compliance messen lassen.'],
      },
      {
        type: 'table',
        h2: 'Was der Monatsbericht zeigt',
        cols: ['Kennzahl', 'Was sie Ihnen sagt'],
        rows: [
          ['Tage vom Briefing bis zum freigegebenen Werbemittel', 'Wie lange eine Kampagne wartet, bis sie starten kann'],
          ['Freigabequote im ersten Durchgang', 'Wie viele Inhalte ohne zweite Prüfrunde freigegeben werden'],
          ['Korrekturen oder Rückzüge', 'Was nach der Veröffentlichung geändert oder entfernt werden musste'],
          ['Kosten pro zusätzlich gewonnenem Kunden', 'Was das Budget gebracht hat, je Produkt'],
        ],
      },
      { type: 'cta', h2: 'Scoping-Gespräch buchen', body: 'Im Gespräch legen wir fest, welche Märkte, Produkte und Partner dazugehören. Aus diesen drei Zahlen ergibt sich die Offerte.', label: 'Scoping-Gespräch buchen' },
    ],
  },
];
