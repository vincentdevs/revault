const crumbs = [['Lösungen', '/solutions/']];
const noAdvice = { q: 'Erbringen Sie Rechtsberatung?', a: 'Nein. Revault baut den Prozess und die Prüfstufe auf. Die Regeln, die wir anwenden, gibt Ihre Rechtsberatung frei.' };

export default [
  {
    path: '/solutions/',
    crumbs: [],
    crumbLabel: 'Lösungen',
    title: 'Lösungen nach Zielgruppe: Revault',
    description: 'Wachstums- und Compliance-Leistungen von Revault für Kryptobörsen, Neobanken, Fintech-Partnerschaftsteams, B2B-Fintechs und Blockchain-Protokolle.',
    h1: 'Lösungen für regulierte Wachstumsteams',
    sub: 'Jedes regulierte Segment hat andere Regeln, andere Käufer und andere Kanäle. Deshalb sieht der erste Schritt, den wir anbieten, je nach Segment anders aus. Wählen Sie die Seite, die zu Ihrer Rolle passt. Dort sehen Sie, welche Probleme wir lösen, was wir liefern und wie ein erstes Mandat abläuft.',
    actions: [{ label: 'Analyse anfragen', href: '/book-a-diagnostic/' }, { label: 'Leistungen ansehen', href: '/services/' }],
    blocks: [
      {
        type: 'linkrows',
        h2: 'Ihr Segment finden',
        items: [
          { title: 'Kryptobörsen und Broker', body: 'Für Verantwortliche in Marketing, Wachstum und Partnerschaften, die in Grossbritannien, der EU oder der Schweiz werben. Der erste Schritt ist eine Analyse von vier bis sechs Wochen.', href: '/solutions/crypto-exchanges-brokers/' },
          { title: 'Neobanken und Challenger', body: 'Für Teams, die ein zweites Produkt verkaufen und die bestehende Kundschaft halten wollen. Der erste Schritt ist ein Retention-Audit von 30 Tagen.', href: '/solutions/neobanks-challengers/' },
          { title: 'Partnerschaftsteams von Fintechs und Banken', body: 'Für Fintechs, deren Kampagnen die Freigabe einer Partnerbank brauchen. Der erste Schritt ist ein Pilot mit einer Partnerbank.', href: '/solutions/fintech-bank-partnerships/' },
          { title: 'B2B-Fintechs mit Banken als Kunden', body: 'Für Anbieter, die von Einkauf, IT-Sicherheit und Compliance geprüft werden. Der erste Schritt ist eine Analyse Ihrer Nachweise.', href: '/solutions/b2b-fintech-for-banks/' },
          { title: 'Blockchain-Protokolle', body: 'Für Protokolle und Token-Projekte, die über ihre Community wachsen. Die Kapazität ist begrenzt, der erste Schritt ist eine Protokollprüfung.', href: '/solutions/blockchain-protocols/' },
        ],
      },
      { type: 'cta', h2: 'Sie sind nicht sicher, welche Seite passt', body: 'Nennen Sie uns im Anfrageformular Ihre Märkte und Ihren Produktbereich. Innert zwei Arbeitstagen erhalten Sie von uns den passenden Leistungsumfang.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/solutions/crypto-exchanges-brokers/',
    crumbs,
    crumbLabel: 'Kryptobörsen und Broker',
    title: 'Krypto-Marketing-Compliance für Börsen: Revault',
    description: 'Claim-Prüfung, Aufsicht über Partnerinhalte und Freigabeprozesse für Kryptobörsen und Broker, die in mehreren regulierten Märkten werben.',
    service: { name: 'Krypto-Marketing-Compliance für Börsen und Broker', type: 'Compliance-Prozess für das Marketing', area: ['Switzerland'] },
    h1: 'Krypto-Wachstum für regulierte Märkte',
    sub: 'Krypto-Marketing muss heute in jedem Markt eigene Regeln einhalten. Grossbritannien und die MiCA-Verordnung der EU verlangen, dass Werbung fair, klar und nicht irreführend ist und Risikohinweise enthält. Dazu kommen die Zertifizierungsregeln der Werbeplattformen. Revault pflegt die freigegebenen Formulierungen für jeden Markt, in dem Sie verkaufen.',
    actions: [{ label: 'Krypto-Analyse anfragen', href: '/book-a-diagnostic/' }, { label: 'Zur Methode', href: '/method/' }],
    media: { type: 'facts', label: 'Überblick über ein typisches erstes Mandat für eine Kryptobörse', title: 'Typisches erstes Mandat', rows: [['Format', 'Analyse'], ['Dauer', 'Vier bis sechs Wochen'], ['Ergebnis', 'Risikoregister, Korrekturliste und Entwurf der Claim-Bibliothek']] },
    blocks: [
      {
        type: 'rows',
        h2: 'Die Probleme, die wir lösen',
        intro: 'Die FCA erwartet, dass Firmen die Risiken von Stabilitätsversprechen offenlegen und prüfen, ob die Kundschaft versteht, wofür geworben wird. Aus solchen Regeln ergeben sich vier Probleme.',
        items: [
          { title: 'Claims, die je nach Markt anders lauten müssen', body: 'Eine Formulierung, die in einem Land zulässig ist, kann in einem anderen eingeschränkt sein. Wir pflegen die freigegebenen Formulierungen je Markt und halten fest, warum jeder Claim zulässig ist.' },
          { title: 'Zulassung auf Werbeplattformen', body: 'Werbeplattformen ändern ihre Regeln für Krypto-Kategorien. Wir verfolgen den Stand für jeden Kanal, den Sie nutzen, und melden Änderungen, bevor sie eine laufende Kampagne treffen.' },
          { title: 'Affiliates und Partner', body: 'Partnerinhalte können für die Börse zum Haftungsrisiko werden. Binance hat kürzlich Empfehlungsprovisionen wegen verbotener Werbemethoden gestrichen. Das zeigt, wie schnell Partnerprogramme eingeschränkt werden. Wir legen Regeln für Partner fest, prüfen ihre Inhalte und dokumentieren jede Korrektur.' },
          { title: 'Langsame Freigaben', body: 'Wir leiten Werbemittel nach Risikostufe weiter. Inhalte mit tiefem Risiko werden rasch freigegeben, Inhalte mit hohem Risiko gehen mit vollständigem Dossier an den Rechtsdienst.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Was Revault liefert',
        items: [
          'Eine Claim-Bibliothek je Rechtsordnung mit freigegebenen Formulierungen, vorgeschriebenen Risikohinweisen, unzulässigen Darstellungen und der Quelle jeder Regel.',
          'Ein Freigabeprozess mit Risikostufen und verbindlichen Bearbeitungsfristen für Rechtsdienst und Compliance.',
          'Ein Register, das zeigt, auf welchen Kanälen Sie werben dürfen, nachgeführt bei jeder Regeländerung der Plattformen.',
          'Eine Richtlinie für Affiliates und Partner mit Prüfprozess und Audit-Trail.',
        ],
      },
      {
        type: 'split',
        h2: 'Für wen das gedacht ist',
        body: [
          'Für Verantwortliche in Marketing, Wachstum und Partnerschaften bei Börsen und Brokern, die in Grossbritannien, der EU oder der Schweiz tätig sind oder dort werben.',
          'Das erste Mandat ist eine Analyse von vier bis sechs Wochen. Sie prüft die laufenden Kampagnen, die Partnerinhalte und den heutigen Freigabeweg. Am Ende stehen ein Risikoregister, eine priorisierte Korrekturliste und der Entwurf einer Claim-Bibliothek für die Claims mit dem höchsten Risiko.',
        ],
        link: { label: 'Was die Analyse umfasst', href: '/services/diagnostic/' },
      },
      {
        type: 'faq',
        items: [
          noAdvice,
          { q: 'Welche Märkte decken Sie ab?', a: 'Zuerst die Schweiz, danach die EU, danach Grossbritannien. Ein Markt kommt erst dazu, wenn eine lokale Anwaltskanzlei sein Claim-Modul geprüft hat.' },
          { q: 'Können Sie unsere bezahlten Kampagnen führen?', a: 'Wir produzieren und betreuen Kampagnen innerhalb der freigegebenen Bibliothek. Über Kanäle und Budget entscheidet abschliessend Ihr Team.' },
        ],
      },
      { type: 'cta', h2: 'Krypto-Analyse anfragen', body: 'Nach vier bis sechs Wochen wissen Sie, welche laufenden Claims in welchem Markt das höchste Risiko tragen und was zuerst zu korrigieren ist. Weiterführende Artikel finden Sie in der <a class="textlink" href="/research/">Research-Bibliothek</a>.', label: 'Krypto-Analyse anfragen' },
    ],
  },
  {
    path: '/solutions/neobanks-challengers/',
    crumbs,
    crumbLabel: 'Neobanken und Challenger',
    title: 'Wachstum und Kundenbindung für Neobanken: Revault',
    description: 'Zweitprodukte ausbauen und Kundschaft halten: für Neobanken und Challenger, mit regelkonformen Lifecycle-Nachrichten und gezielten Angeboten.',
    service: { name: 'Wachstums- und Retention-Marketing für Neobanken', type: 'Retention- und Lifecycle-Marketing', area: ['Switzerland'] },
    h1: 'Zweites Produkt verkaufen, Kundschaft halten',
    sub: 'Die meisten Challenger-Banken gewinnen Kundinnen und Kunden über das Lohnkonto. Mehr Ertrag entsteht aber erst mit einem zweiten Produkt. Viele behalten ihr Hauptkonto und verschieben ihr Geld nach und nach zu anderen Anbietern. Neukunden zu gewinnen ist teuer, und Halteangebote kosten viel, wenn alle sie erhalten.',
    actions: [{ label: 'Retention-Audit anfragen', href: '/book-a-diagnostic/' }, { label: 'Zur Methode', href: '/method/' }],
    media: { type: 'facts', label: 'Überblick über ein typisches erstes Mandat für eine Neobank', title: 'Typisches erstes Mandat', rows: [['Format', 'Retention-Audit'], ['Dauer', '30 Tage'], ['Ergebnis', 'Drei triggerbasierte Programme und ein Testplan']] },
    blocks: [
      {
        type: 'rows',
        h2: 'Die Probleme, die wir lösen',
        items: [
          { title: 'Stille Abwanderung', body: 'Gemäss der Studie von J.D. Power zum US-Retailbanking 2026 haben 20 Prozent der Kundinnen und Kunden innert drei Monaten Geld von ihrer Hauptbank abgezogen, ohne das Konto formell zu schliessen. Wir erkennen die frühen Anzeichen dieser Verlagerung.' },
          { title: 'Teure Angebote für alle', body: 'In einem Experiment aus der Praxis kostete ein übliches Halteangebot pro gehaltenem Nutzer das 1,21-Fache der Akquisitionskosten. Die Variante, die gezielt nach erwarteter Wirkung (Uplift) verschickt wurde, kostete das 0,87-Fache. Wir richten Angebote an Kundinnen und Kunden, die voraussichtlich darauf reagieren, und messen das Ergebnis gegen eine Kontrollgruppe.' },
          { title: 'Compliance in Lifecycle-Nachrichten', body: 'Produktnachrichten müssen Gebühren, Risiken und Voraussetzungen korrekt beschreiben. Wir lassen die Vorlagen für jedes Produkt vorab freigeben.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Was Revault liefert',
        items: [
          'Definierte Auslöser für Abwanderungsrisiko und für Chancen bei Zweitprodukten, gestützt auf Ihre Transaktions- und Produktdaten.',
          'Regelkonforme Lifecycle-Vorlagen für jedes Produkt.',
          'Angebote, die nach erwarteter Reaktion verschickt und gegen eine Kontrollgruppe gemessen werden.',
          'Ein Dashboard mit den Kosten pro zusätzlich gehaltenem Kunden und der Nutzung der Produkte.',
        ],
      },
      {
        type: 'split',
        h2: 'So läuft ein erstes Mandat ab',
        body: [
          'Wir beginnen mit einem Retention-Audit von 30 Tagen. Wir prüfen Ihren Funnel, bestimmen drei triggerbasierte Programme und entwerfen den Testplan.',
          'Der Datenzugang hängt von Ihrer bestehenden Infrastruktur ab. Wir klären ihn in der Analyse. Das Reporting zu dieser Arbeit ist als Modul Measurement Layer geplant.',
        ],
        link: { label: 'Stand des Measurement Layer', href: '/platform/' },
      },
      { type: 'cta', h2: 'Retention-Audit anfragen', body: 'Nach dreissig Tagen haben Sie drei Programme zum Testen und einen Plan, wie jedes gegen eine Kontrollgruppe gemessen wird. Was danach folgen kann, zeigt die <a class="textlink" href="/services/">Seite Leistungen</a>.', label: 'Retention-Audit anfragen' },
    ],
  },
  {
    path: '/solutions/fintech-bank-partnerships/',
    crumbs,
    crumbLabel: 'Partnerschaften von Fintechs und Banken',
    title: 'Marketing für Fintech-Bank-Partnerschaften: Revault',
    description: 'Gemeinsame Inhalte, Freigabeprozesse mit der Partnerbank und Co-Marketing für Fintechs, die mit Partnerbanken arbeiten.',
    service: { name: 'Marketing für Partnerschaften von Fintechs und Banken', type: 'Freigabeprozess mit Partnerbanken', area: ['Switzerland'] },
    h1: 'Schnellere Freigaben mit der Partnerbank',
    sub: 'In einer Partnerschaft zwischen Fintech und Bank haftet die Partnerbank dafür, wie ihre Programme beworben werden. Jede Kampagne kann deshalb ihre Freigabe brauchen. Das Fintech reicht Inhalte ein, die Bank schickt Kommentare zurück, und bei jedem neuen Werbemittel kommen dieselben Fragen. Die Verzögerung kostet Lancierungen und belastet beide Teams.',
    actions: [{ label: 'Partnerpilot besprechen', href: '/book-a-diagnostic/' }, { label: 'Zur Methode', href: '/method/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Die Probleme, die wir lösen',
        items: [
          { title: 'Dieselben Inhalte werden mehrfach geprüft', body: 'Jede Bank wendet eigene Regeln auf Inhalte an, die fast identisch sind. Wir pflegen eine gemeinsame Bibliothek mit einer Zusatzebene für die Regeln jeder Partnerbank.' },
          { title: 'Niemand weiss, wer was freigegeben hat', body: 'Die Aufsicht über Partner verlangt einen klaren Audit-Trail. Jede Freigabe wird mit Version, prüfender Person und Datum festgehalten.' },
          { title: 'Co-Marketing, das sich nicht wiederholen lässt', body: 'Werbemittel für eine Lancierung werden für jeden Partner neu erstellt. Wir produzieren ein wiederverwendbares Kit, das Partnerbanken einmal freigeben und innerhalb vereinbarter Grenzen erneut einsetzen.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Was Revault liefert',
        items: [
          'Eine gemeinsame Claim-Bibliothek mit einer Zusatzebene je Bank.',
          'Ein Prüfprozess mit den Partnern und verbindlichen Bearbeitungsfristen.',
          'Ein Freigabeprotokoll, das die Compliance-Abteilung der Bank prüfen kann.',
          'Lancierungskits für das Co-Marketing, vorab freigegeben, wo die Bank zustimmt.',
        ],
      },
      {
        type: 'split',
        h2: 'Wo das Partner Portal steht',
        body: [
          'Das vollständige Partner Portal ist geplant und noch nicht live. Bis dahin erbringen wir diese Leistung über einen Prozess, den wir gemeinsam mit Ihren Partnerbanken führen.',
          'Den Stand aktualisieren wir bei jedem Release auf der Seite Plattform. Wie wir mit Partnerdaten umgehen, steht unter Sicherheit und Daten.',
        ],
        link: { label: 'Stand der Plattform ansehen', href: '/platform/' },
      },
      { type: 'cta', h2: 'Partnerpilot besprechen', body: 'Im Pilot durchläuft eine Partnerbank die gemeinsame Bibliothek und den Prüfprozess. Wie die Protokolle aufbewahrt werden, lesen Sie auf der <a class="textlink" href="/security-and-data/">Seite Sicherheit und Daten</a>.', label: 'Partnerpilot besprechen' },
    ],
  },
  {
    path: '/solutions/b2b-fintech-for-banks/',
    crumbs,
    crumbLabel: 'B2B-Fintechs mit Banken als Kunden',
    title: 'B2B-Fintech-Marketing für Banken: Revault',
    description: 'Inhalte mit Nachweisen, freigegebener Outreach und gezielte Ansprache von Bankeinkäufern für Fintechs, die Infrastruktur an Banken verkaufen.',
    service: { name: 'B2B-Fintech-Marketing für Banken', type: 'Marketing mit Nachweisen und Verkaufsunterstützung', area: ['Switzerland'] },
    h1: 'Nachweise, die Banken prüfen können',
    sub: 'Banken und Genossenschaftsbanken kaufen langsam. Einkauf, IT-Sicherheit und Compliance prüfen den Anbieter je einzeln, und sie vertrauen Belegen, die sie nachprüfen können, mehr als allgemeinen Aussagen. Auch für den Outreach an regulierte Käufer gelten Regeln. Eine allzu begeisterte Nachricht kann deshalb selbst zum Problem werden.',
    actions: [{ label: 'Nachweis-Analyse anfragen', href: '/book-a-diagnostic/' }, { label: 'Zur Methode', href: '/method/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Die Probleme, die wir lösen',
        items: [
          { title: 'Claims ohne Nachweis', body: 'Wir verknüpfen jeden Claim mit einem Dokument: einer Fallstudie, einem Sicherheitszertifikat oder einer veröffentlichten Produktspezifikation.' },
          { title: 'Outreach, der Risiken schafft', body: 'Wir gleichen Verkaufsvorlagen vorab mit der Claim-Bibliothek ab und legen fest, was über regulierte Produkte gesagt werden darf.' },
          { title: 'Zu wenige qualifizierte Termine', body: 'Aus öffentlichen Informationen über Banken und Genossenschaftsbanken in Ihrem Segment erstellen wir eine Zielliste und planen danach die Reihenfolge des Outreach.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Was Revault liefert',
        items: [
          'Eine Nachweisbibliothek, in der jede Fallstudie, jedes Sicherheitsdokument und jeder Produkt-Claim mit einem Beleg verknüpft ist.',
          'Freigegebene Vorlagen für Verkauf und Outreach.',
          'Ein Zielaccount-Plan, gestützt auf öffentliche Informationen.',
        ],
      },
      {
        type: 'split',
        h2: 'Umgang mit Kundenergebnissen',
        body: ['Revault veröffentlicht Kundenergebnisse nur mit schriftlicher Einwilligung und geprüften Zahlen. Ist kein Kundenfall verfügbar, verwenden wir anonymisierte Beispiele und kennzeichnen sie deutlich.'],
        link: { label: 'Unseren Claim-Standard lesen', href: '/method/' },
      },
      { type: 'cta', h2: 'Nachweis-Analyse anfragen', body: 'Die Analyse zeigt, welche Claims in Ihren Verkaufsunterlagen bereits mit einem Dokument verknüpft sind, das ein Bankeinkäufer überprüfen kann.', label: 'Analyse anfragen' },
    ],
  },
  {
    path: '/solutions/blockchain-protocols/',
    crumbs,
    crumbLabel: 'Blockchain-Protokolle',
    title: 'Marketing-Compliance für Blockchain-Protokolle: Revault',
    description: 'Aufklärungsinhalte, Risikohinweise und Prüfung von Anreizen für Blockchain-Protokolle und Token-Projekte, mit begrenzter Kapazität.',
    service: { name: 'Marketing-Compliance für Blockchain-Protokolle', type: 'Prüfung von Werbeaktionen und Anreizen', area: ['Switzerland'] },
    h1: 'Community-Wachstum innerhalb der Regeln',
    sub: 'Protokolle wachsen über ihre Community, doch manche Werbeaktionen sind eingeschränkt oder verboten. Google lässt keine Anzeigen für Initial Coin Offerings zu, und die britischen Regeln beschränken Anreize zum Investieren. Ein einziges Verfahren kann die Glaubwürdigkeit eines Projekts bei Partnern und Investoren beschädigen. Unsere Kapazität ist begrenzt, wir wählen wenige Protokolle für erste Mandate aus.',
    actions: [{ label: 'Protokollprüfung anfragen', href: '/book-a-diagnostic/' }, { label: 'Zur Methode', href: '/method/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Die Probleme, die wir lösen',
        items: [
          { title: 'Eingeschränkte Werbeaktionen', body: 'Bevor eine Kampagne entworfen wird, klären wir, welche Aktivitäten in welchem Markt verboten oder eingeschränkt sind.' },
          { title: 'Anreize, die als Werbung gelten können', body: 'Wir prüfen jeden Anreiz, jeden Airdrop und jede Empfehlungsprämie vor dem Start.' },
          { title: 'Aufklärung, die schwer korrekt zu formulieren ist', body: 'Wir erstellen Erklärtexte, die beschreiben, was das Protokoll tut, wie es gedeckt ist und welche Risiken bestehen. Jede Aussage ist mit einem Beleg verknüpft.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Was Revault liefert',
        items: [
          'Eine Prüfung der Anreize und Werbeaktionen für jede geplante Kampagne.',
          'Ein Inhaltsplan für Aufklärung und Risikohinweise.',
          'Ein Plan für das Community-Wachstum über Ihre eigene Website, Ihren Newsletter, Ihre Community-Kanäle und die Aufklärung durch Partner.',
        ],
      },
      { type: 'cta', h2: 'Protokollprüfung anfragen', body: 'Schicken Sie uns die Kampagne oder den Anreiz, den Sie planen. Wir sagen Ihnen, ob wir Kapazität haben und welche Märkte die Prüfung abdecken würde.', label: 'Protokollprüfung anfragen' },
    ],
  },
];
