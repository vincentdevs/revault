const book = { label: 'Analyse anfragen', href: '/book-a-diagnostic/' };

export default [
  {
    path: '/platform/',
    crumbs: [],
    crumbLabel: 'Plattform',
    title: 'Revault-Plattform: Claims, Freigaben, Partner, Messung',
    description: 'Die Module der Revault-Plattform für Claim-Verwaltung, Freigabeprozesse, Partnerportal und Messung, jedes mit seinem tatsächlichen Stand.',
    h1: 'Die Revault-Plattform',
    sub: 'Die Plattform unterstützt unsere Dienstleistungen. Jedes Modul entsteht aus den manuellen Abläufen, die wir in Kundenmandaten einsetzen, und trägt eine Angabe zu seinem aktuellen Stand. Solange ein Modul nicht live ist, erbringen wir seine Funktion als betreute Dienstleistung. Screenshots von Funktionen, die es noch nicht gibt, zeigen wir keine.',
    actions: [{ label: 'Nach einem Pilot fragen', href: '/book-a-diagnostic/' }, { label: 'Leistungen ansehen', href: '/services/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Vier Module und ihr aktueller Stand',
        items: [
          { title: 'Claim Engine', status: 'In Entwicklung', body: 'Speichert freigegebene Claims, Pflichthinweise, Belege und die Regeln je Rechtsordnung und gleicht Entwürfe damit ab. Jeder Claim führt seine Versionsgeschichte und seine Prüfdaten mit. Heute erbringen wir diese Funktion über den <a class="textlink" href="/services/claim-library-build/">Aufbau der Claim-Bibliothek</a>.' },
          { title: 'Approval Hub', status: 'In Entwicklung', body: 'Leitet Inhalte nach Risikostufe an die Prüfenden in Marketing, Rechtsdienst, Compliance und bei Partnern weiter, mit Zeitstempel und Audit-Trail.' },
          { title: 'Partner Portal', status: 'Geplant', body: 'Ein Fintech reicht Inhalte einmal ein, jede Partnerbank prüft sie nach ihren eigenen Regeln, und jede Freigabe wird festgehalten. Das Modul ist für die Zeit nach den ersten Pilotprojekten mit Banken und Fintechs geplant.' },
          { title: 'Measurement Layer', status: 'Geplant', body: 'Weist die Vollkosten der Kundengewinnung je Produkt und Kanal aus, einschliesslich Prüfzeit und Auszahlungen an Partner. Das Reporting zu Kundenbindung und Uplift wird an Ihre Analytics-Lösung und Ihr CRM angebunden. Heute ist dieses Reporting Teil des <a class="textlink" href="/services/managed-growth/">Managed-Growth-Retainers</a>.' },
        ],
      },
      {
        type: 'table',
        tone: 'tint',
        h2: 'Was die Statusangaben bedeuten',
        cols: ['Angabe', 'Bedeutung'],
        rows: [
          ['Live', 'Für alle Kunden verfügbar.'],
          ['Pilot', 'Für ausgewählte Kunden verfügbar.'],
          ['In Entwicklung', 'Wird aus dem manuellen Ablauf gebaut, den wir heute einsetzen.'],
          ['Geplant', 'Der Umfang steht fest, die Entwicklung hat noch nicht begonnen.'],
        ],
      },
      { type: 'cta', h2: 'Nach einem Pilot fragen', body: 'Ein Modul im Pilot steht ausgewählten Kunden zur Verfügung. Bis dahin erhalten Sie seine Funktion als betreute Dienstleistung.', label: 'Nach einem Pilot fragen' },
    ],
  },
  {
    path: '/method/',
    crumbs: [],
    crumbLabel: 'Methode',
    title: 'So arbeitet Revault: Methode und Claim-Standard',
    description: 'Die Methode von Revault: Schritte der Analyse, Claim-Standard, Risikostufen, Freigabeprotokolle und Übergabe an Ihr Team.',
    h1: 'So arbeitet Revault',
    sub: 'Die Methode besteht aus vier Phasen, einem Claim-Standard und drei Risikostufen. Jede Freigabe wird protokolliert. So sehen Ihr Team und Ihre Prüfenden, wer was wann entschieden hat. Was regelkonform ist, entscheiden Ihre Rechtsberatung und Ihre Compliance-Abteilung. Revault wendet den Standard an, den sie freigeben, und hält ihn aktuell.',
    actions: [book, { label: 'Zu den Risikostufen', href: '#risk-tiers' }],
    blocks: [
      {
        type: 'rail',
        h2: 'Die vier Phasen',
        items: [
          { title: 'Analysieren', body: 'Aktuelle Risiken, Abläufe und Kosten prüfen.' },
          { title: 'Aufbauen', body: 'Claim-Bibliothek, Risikostufen und Freigabeprozess erstellen.' },
          { title: 'Betreiben', body: 'Die ersten Kampagnen durch den neuen Prozess führen und messen.' },
          { title: 'Übergeben', body: 'Bibliothek, Freigabeprozess und Reporting an Ihr Team übergeben oder in einen Retainer wechseln.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Unser Claim-Standard',
        aside: 'Jeder Claim, den wir freigeben, muss alle vier Bedingungen erfüllen.',
        items: [
          'Korrekt, mit Belegen, die auf Anfrage vorgelegt werden können.',
          'Fair, klar und nicht irreführend im jeweiligen Markt und Kanal.',
          'Begleitet von den Pflichthinweisen, die die Regeln für dieses Produkt verlangen.',
          'Einer namentlich bestimmten Person zugeteilt, die ihn nach festem Zeitplan überprüft.',
        ],
      },
      {
        type: 'table',
        id: 'risk-tiers',
        tone: 'tint',
        h2: 'Risikostufen',
        cols: ['Stufe', 'Was sie umfasst', 'Wer freigibt'],
        rows: [
          ['Tiefes Risiko', 'Allgemeine Markeninhalte ohne Produkt-Claims.', 'Marketing'],
          ['Mittleres Risiko', 'Produkt-Claims in freigegebener Formulierung.', 'Marketing und Compliance'],
          ['Hohes Risiko', 'Neue Claims, Performance-Zahlen und alle Inhalte, die sich auf Anlagerenditen oder Stabilität beziehen.', 'Prüfung durch den Rechtsdienst nötig'],
        ],
      },
      {
        type: 'split',
        h2: 'Protokolle',
        body: ['Jede Freigabe hält das Werbemittel, die Version, die verwendeten Claims, die prüfende Person, den Entscheid und das Datum fest. Die Protokolle werden so lange aufbewahrt, wie es Ihre Regeln verlangen.'],
      },
      {
        type: 'faq',
        items: [
          { q: 'Wer entscheidet, was regelkonform ist?', a: 'Ihre Rechtsberatung und Ihre Compliance-Abteilung. Revault wendet den Standard an, den sie freigeben, und hält ihn aktuell.' },
          { q: 'Können Sie eine Freigabe garantieren?', a: 'Nein. Wir senken das Risiko einer Ablehnung und verkürzen den Prozess. Über die Freigabe entscheiden weiterhin Ihre Prüfenden und die Aufsichtsbehörden.' },
        ],
      },
      { type: 'cta', h2: 'Die Methode an Ihren Kampagnen sehen', body: 'Die Analyse ist die erste Phase. Sie wendet den Claim-Standard und die Risikostufen auf die Kampagnen an, die Sie heute führen.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/research/',
    crumbs: [],
    crumbLabel: 'Research',
    title: 'Research zu reguliertem Marketing und Wachstum: Revault',
    description: 'Research zu den Regeln für Finanzwerbung, zu den Kosten der Kundengewinnung und zu Vertrauen im Finanzbereich, mit Quellen, Methode und Grenzen.',
    h1: 'Research zu reguliertem Marketing',
    sub: 'Wir veröffentlichen unser Research zu den Regeln für Finanzwerbung, zu den Kosten der Kundengewinnung und zu Vertrauen im Finanzbereich mit Quellen, Datum und Grenzen der Aussagekraft. Wo die Datenlage dünn ist, schreiben wir das hin. Ändern sich die beschriebenen Regeln, prüfen wir die Artikel erneut.',
    actions: [{ label: 'Leitfaden Schweiz lesen', href: '/research/financial-promotion-rules-switzerland/' }, { label: 'Unsere Standards', href: '#standards' }],
    blocks: [
      {
        type: 'linkrows',
        h2: 'Artikel',
        items: [
          { title: 'Regeln für Finanzwerbung in der Schweiz', body: 'Wie die Schweizer Regeln zu Finanzwerbung, irreführenden Angaben und Krypto-Marketing für Wachstumsteams gelten, mit Quellen und offenen Fragen.', href: '/research/financial-promotion-rules-switzerland/' },
        ],
      },
      {
        type: 'checks',
        id: 'standards',
        h2: 'Unsere Standards für Research',
        items: [
          'Jede Aussage verweist auf eine Primärquelle, wo es eine gibt: einen Erlass, eine Wegleitung der Aufsichtsbehörde oder eine begutachtete wissenschaftliche Arbeit.',
          'Zahlen von Anbietern und aus der Branche sind als solche gekennzeichnet.',
          'Jeder Artikel nennt seine Methode und seine Grenzen.',
        ],
      },
      { type: 'cta', h2: 'Das Research auf Ihre Kampagnen anwenden', body: 'Die Analyse prüft Ihre laufenden Kampagnen Markt für Markt anhand derselben Regeln, die diese Artikel beschreiben.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/research/financial-promotion-rules-switzerland/',
    crumbs: [['Research', '/research/']],
    crumbLabel: 'Regeln für Finanzwerbung in der Schweiz',
    article: { published: null, reviewed: null },
    title: 'Regeln für Finanzwerbung in der Schweiz: ein Leitfaden',
    description: 'Wie die Schweizer Regeln zu Finanzwerbung, irreführenden Angaben und Krypto-Marketing für Wachstumsteams gelten, mit Quellen und offenen Fragen.',
    h1: 'Regeln für Finanzwerbung in der Schweiz',
    sub: 'Die Schweiz kennt kein eigenes Werbegesetz für Kryptowerte. Finanzwerbung fällt unter das Finanzdienstleistungsgesetz (FIDLEG), irreführende Angaben fallen unter das Bundesgesetz gegen den unlauteren Wettbewerb (UWG). Zu einer Änderung für das Krypto-Marketing fand eine Vernehmlassung statt, die Vorlage ist noch in Arbeit. Dieser Leitfaden stammt von Revault Research und ist keine Rechtsberatung.',
    actions: [{ label: 'Zu den Regeln', href: '#rules' }, book],
    blocks: [
      {
        type: 'prose',
        id: 'rules',
        html: `
<h2>Die Regeln, die heute gelten</h2>
<ul>
<li>Nach dem Finanzdienstleistungsgesetz (FIDLEG) muss Werbung für Finanzdienstleistungen als solche gekennzeichnet sein. Werbung für Finanzinstrumente darf dem Prospekt oder dem Basisinformationsblatt nicht widersprechen und muss, wo vorgeschrieben, auf diese Dokumente hinweisen.</li>
<li>Nach dem Bundesgesetz gegen den unlauteren Wettbewerb (UWG) ist irreführende Werbung über die Produkte oder Leistungen eines Unternehmens verboten.</li>
<li>Die Schweizerische Lauterkeitskommission veröffentlicht Grundsätze für die kommerzielle Kommunikation, die sie bei Beschwerden anwendet. Bei Klimaaussagen stuft ihre Praxis Neutralitätsversprechen, die auf CO2-Kompensation beruhen, bei Finanzprodukten als irreführend ein.</li>
</ul>
<h2>Krypto-Marketing</h2>
<p>Die Schweiz hat keine gesonderte Werberegelung für Kryptowerte. Welche Regeln gelten, hängt davon ab, wie ein Kryptowert eingestuft wird. Gilt er als Effekte, kommen die Regeln des FIDLEG zur Anwendung.</p>
<p>Der Bundesrat führte von Oktober 2025 bis Februar 2026 eine Vernehmlassung zu einer Änderung durch, die Emittenten und Vermittler kryptobasierter Vermögenswerte zu fairem Marketing und fairer Werbung verpflichten würde. Wir aktualisieren diesen Artikel, sobald die Änderung verabschiedet ist.</p>
<h2>Begriffe, die eine Bewilligung voraussetzen</h2>
<p>Nur Institute mit einer Bankbewilligung dürfen sich in der Werbung als Bank bezeichnen, und nur sie dürfen für die Entgegennahme von Einlagen werben. Prüfen Sie jeden Namen und jede Bezeichnung in Ihren Kampagnen.</p>
<h2>Was wir noch nicht wissen</h2>
<ul>
<li>Den endgültigen Wortlaut der Änderung zur Krypto-Werbung.</li>
<li>Wie die Kommission die Grundsätze auf neue Produktformate anwenden wird.</li>
</ul>
<h2>Quellen</h2>
<ul>
<li>Finanzdienstleistungsgesetz (FIDLEG)</li>
<li>Bundesgesetz gegen den unlauteren Wettbewerb (UWG)</li>
<li>Schweizerische Lauterkeitskommission, Grundsätze für die kommerzielle Kommunikation</li>
<li>Vernehmlassung des Bundesrates zu kryptobasierten Vermögenswerten, Oktober 2025 bis Februar 2026</li>
<li>Bundesamt für Umwelt (BAFU), Hinweise zu Klimaaussagen</li>
</ul>`,
      },
      { type: 'cta', h2: 'Ihre Schweizer Kampagnen prüfen', body: 'Die Schweiz ist der erste Markt, den Revault abdeckt. Die Analyse prüft Ihre laufenden Kampagnen anhand der oben beschriebenen Regeln.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/insights/',
    crumbs: [],
    crumbLabel: 'Insights',
    title: 'Insights zu reguliertem Marketing: Revault',
    description: 'Praxisnotizen zu Regeln für Finanzwerbung, zu Richtlinienänderungen der Plattformen und zum Briefing einer Kampagne, die Compliance freigeben kann.',
    h1: 'Insights für regulierte Märkte',
    sub: 'Kurze, praktische Artikel für Wachstums- und Compliance-Teams: zu den Regeln für Finanzwerbung, zu Richtlinienänderungen der Plattformen und zum Briefing einer Kampagne, die Compliance freigeben kann. Jeder Artikel nennt sein Datum und den Zeitpunkt der letzten Prüfung. Die ersten drei Artikel sind geplant und unten aufgeführt.',
    actions: [{ label: 'Research lesen', href: '/research/' }, book],
    blocks: [
      {
        type: 'rows',
        h2: 'Geplante erste Artikel',
        items: [
          { title: 'So briefen Sie eine Kampagne, die Compliance freigeben kann', status: 'Geplant', body: 'Was ein Briefing enthalten muss, bevor es in die Prüfung geht.' },
          { title: 'Was sich ändert, wenn eine Werbeplattform eine Kategorie einschränkt', status: 'Geplant', body: 'Was mit laufenden Kampagnen geschieht und was ein Team vorbereiten kann, bevor eine Einschränkung in Kraft tritt.' },
          { title: 'Checkliste für die Prüfung von Affiliate-Inhalten', status: 'Geplant', body: 'Die Punkte, die in Partnerinhalten zu prüfen sind, bevor sie Ihren Namen tragen.' },
        ],
      },
      { type: 'cta', h2: 'In der Zwischenzeit das ausführlichere Research lesen', body: 'Die Research-Bibliothek enthält unsere Arbeiten mit Quellenangaben. Den Anfang macht der Leitfaden zu den Regeln für Finanzwerbung in der Schweiz.', label: 'Zum Research', href: '/research/' },
    ],
  },
  {
    path: '/about/',
    crumbs: [],
    crumbLabel: 'Über uns',
    title: 'Über Revault: warum es uns gibt',
    description: 'Warum es Revault gibt, wie wir arbeiten und was wir nicht tun: Wachstum für regulierte Teams, ohne Rechtsberatung.',
    h1: 'Warum es Revault gibt',
    sub: 'Wachstumsteams in regulierten Märkten verlieren Zeit und Geld durch verzögerte Prüfungen, verbotene Kampagnen und Reibung mit Partnern. Die meisten Tools und Agenturen, mit denen sie arbeiten, sind für unreguliertes Marketing gebaut. Revault übernimmt die Arbeit dazwischen: Claims, Freigaben, Partner und Messung.',
    actions: [book, { label: 'Zur Methode', href: '/method/' }],
    blocks: [
      {
        type: 'checks',
        h2: 'Wie wir arbeiten',
        items: [
          'Wir erbringen keine Rechtsberatung. Für die Regeln, die wir anwenden, bleibt Ihre Rechtsberatung verantwortlich.',
          'Wir veröffentlichen unser Research und kennzeichnen, was noch nicht belegt ist.',
          'Wir zeigen keine Kundenergebnisse, die wir nicht überprüfen können.',
        ],
      },
      {
        type: 'checks',
        negative: true,
        h2: 'Was wir nicht tun',
        items: [
          'Inhalte erstellen, die eine echte Organisation, eine echte Person oder ein echtes Dokument nachahmen.',
          'Die Freigabe durch eine Aufsichtsbehörde, eine Plattform oder eine Partnerbank versprechen.',
          'Für unsere Kunden Influencer-Werbung oder nicht gekennzeichnete Werbung einsetzen.',
        ],
      },
      { type: 'cta', h2: 'Mit einer Analyse beginnen', body: 'Sie ist ein klar begrenztes erstes Mandat und zeigt, wie wir arbeiten, bevor sich eine der beiden Seiten zu mehr verpflichtet.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/security-and-data/',
    crumbs: [],
    crumbLabel: 'Sicherheit und Daten',
    draft: 'Diese Seite geht live, sobald jede beschriebene Massnahme umgesetzt ist und nachgewiesen werden kann.',
    title: 'Sicherheit und Umgang mit Daten: Revault',
    description: 'Wie Revault mit Kundendaten, Zugriffen, Aufbewahrung und Unterauftragsbearbeitern umgeht, nach Schweizer und EU-Datenschutzrecht.',
    h1: 'Sicherheit und Umgang mit Daten',
    sub: 'Käufer aus der Finanzbranche fragen zuerst nach den Daten. Diese Seite hält fest, welche Daten wir erheben, wo sie gespeichert sind, wer darauf zugreifen kann und wie lange wir sie aufbewahren. Wir überprüfen sie vor jedem Release und immer dann, wenn sich unsere Unterauftragsbearbeiter ändern.',
    actions: [book, { label: 'Zur Datenschutzerklärung', href: '/legal/privacy/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Was auf dieser Seite stehen wird',
        items: [
          { title: 'Welche Daten wir erheben und wozu', status: 'Wird ergänzt', body: 'Die Kategorien von Kunden- und Personendaten, die wir bearbeiten, und der Zweck jeder Kategorie.' },
          { title: 'Rechtsgrundlage', status: 'Wird ergänzt', body: 'Nach dem Datenschutzgesetz (DSG) und, wo sie anwendbar ist, nach der DSGVO.' },
          { title: 'Speicherung und Hosting', status: 'Wird ergänzt', body: 'Der Speicherort und die Hosting-Anbieter.' },
          { title: 'Zugriffskontrollen', status: 'Wird ergänzt', body: 'Wer auf Kundendaten zugreifen kann und wie die Mitarbeitenden geschult werden.' },
          { title: 'Aufbewahrung und Löschung', status: 'Wird ergänzt', body: 'Die Aufbewahrungsfristen und die Löschung auf Verlangen.' },
          { title: 'Unterauftragsbearbeiter', status: 'Wird ergänzt', body: 'Die vollständige Liste mit Zweck und Standort jedes Anbieters.' },
          { title: 'Vorgehen bei Vorfällen', status: 'Wird ergänzt', body: 'Die Kontaktstelle für die Meldung eines Vorfalls.' },
        ],
      },
      { type: 'cta', h2: 'Fragen Sie uns direkt zum Umgang mit Daten', body: 'Bis diese Seite vollständig ist, beantworten wir Fragen zu den Daten schriftlich, als Teil des Leistungsumfangs der Analyse.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/book-a-diagnostic/',
    crumbs: [],
    crumbLabel: 'Analyse anfragen',
    title: 'Wachstums- und Compliance-Analyse anfragen',
    description: 'Fragen Sie eine Analyse Ihrer Kampagnen, Partnerinhalte und Freigaben zum Fixpreis an. Vier bis sechs Wochen, mit einem priorisierten Plan.',
    h1: 'Analyse anfragen',
    sub: 'In einem kurzen Gespräch klären wir, ob die Analyse passt. Danach erhalten Sie einen schriftlichen Leistungsumfang, auch wenn wir nicht zusammenarbeiten. Die Analyse selbst dauert vier bis sechs Wochen, kostet einen Fixpreis und endet mit einem Risikoregister, einer priorisierten Korrekturliste und einem 90-Tage-Plan. Wir antworten innert zwei Arbeitstagen.',
    actions: [{ label: 'Anfrage ausfüllen', href: '#request' }, { label: 'Was die Analyse umfasst', href: '/services/diagnostic/' }],
    blocks: [
      {
        type: 'form',
        id: 'request',
        h2: 'Sagen Sie uns, wo Sie stehen',
        body: [
          'Wir fragen nur, was wir für eine Antwort brauchen: wer Sie sind, in welchen Märkten Sie tätig sind und was Sie beheben wollen.',
          'Revault erbringt keine Rechtsberatung. Für die Regeln, die wir anwenden, bleibt Ihre Rechtsberatung verantwortlich.',
        ],
      },
    ],
  },
  {
    path: '/book-a-diagnostic/thanks/',
    noindex: true,
    crumbs: [['Analyse anfragen', '/book-a-diagnostic/']],
    crumbLabel: 'Anfrage eingegangen',
    title: 'Anfrage eingegangen: Revault',
    description: 'Ihre Anfrage für eine Analyse ist bei Revault eingegangen. Wir melden uns innert zwei Arbeitstagen mit einem Termin für ein kurzes Gespräch.',
    h1: 'Ihre Anfrage ist bei uns eingegangen',
    sub: 'Wir melden uns innert zwei Arbeitstagen, um ein kurzes Gespräch zu vereinbaren. Nach dem Gespräch erhalten Sie einen schriftlichen Leistungsumfang für die Analyse, auch wenn wir danach nicht zusammenarbeiten. In der Zwischenzeit erklärt die Seite Methode die vier Phasen, den Claim-Standard und die Risikostufen.',
    actions: [{ label: 'Zur Methode', href: '/method/' }, { label: 'Zurück zur Startseite', href: '/' }],
    blocks: [{ type: 'cta', h2: 'Sehen Sie, was die Analyse umfasst', body: 'Die Seite zur Leistung zeigt, was enthalten ist, was Sie erhalten und was eine Analyse Ihrer Rechtsberatung überlässt.', label: 'Zur Analyse', href: '/services/diagnostic/' }],
  },
];
