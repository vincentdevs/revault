const crumbs = [['Solutions', '/solutions/']];
const noAdvice = { q: 'Fournissez-vous des conseils juridiques ?', a: 'Non. Revault met en place le processus et le dispositif de relecture. Vos juristes approuvent les règles que nous appliquons.' };

export default [
  {
    path: '/solutions/',
    crumbs: [],
    crumbLabel: 'Solutions',
    title: 'Solutions par secteur : Revault',
    description: 'Services de croissance et de conformité pour plateformes crypto, néobanques, partenariats fintech et banque, fintechs B2B et protocoles blockchain.',
    h1: 'Des solutions pour les marchés réglementés',
    sub: "Chaque segment réglementé a ses règles, ses acheteurs et ses canaux : la première étape que nous proposons change donc selon le segment. Choisissez la page qui correspond à votre fonction pour voir les problèmes que nous y traitons, ce que nous livrons et le déroulement d'une première mission.",
    actions: [{ label: 'Réserver un diagnostic', href: '/book-a-diagnostic/' }, { label: 'Voir les services', href: '/services/' }],
    blocks: [
      {
        type: 'linkrows',
        h2: 'Trouvez votre segment',
        items: [
          { title: "Plateformes d'échange et courtiers crypto", body: "Pour les responsables du marketing, de la croissance et des partenariats qui s'adressent au Royaume-Uni, à l'UE ou à la Suisse. La première étape est un diagnostic de quatre à six semaines.", href: '/solutions/crypto-exchanges-brokers/' },
          { title: 'Néobanques et challengers', body: 'Pour les équipes qui doivent faire adopter un deuxième produit et garder le premier client. La première étape est un audit de fidélisation de 30 jours.', href: '/solutions/neobanks-challengers/' },
          { title: 'Équipes de partenariat fintech et banque', body: "Pour les fintechs dont les campagnes exigent l'accord d'une banque partenaire. La première étape est un pilote avec un partenaire.", href: '/solutions/fintech-bank-partnerships/' },
          { title: 'Fintechs B2B qui vendent aux banques', body: 'Pour les fournisseurs examinés par les achats, la sécurité et la compliance. La première étape est un diagnostic de la bibliothèque de preuves.', href: '/solutions/b2b-fintech-for-banks/' },
          { title: 'Protocoles blockchain', body: 'Pour les protocoles et les projets de jetons qui grandissent par leur communauté. Les disponibilités sont limitées, et la première étape est une revue de protocole.', href: '/solutions/blockchain-protocols/' },
        ],
      },
      { type: 'cta', h2: 'Vous hésitez entre plusieurs pages', body: 'Indiquez vos marchés et votre type de produit dans le formulaire de réservation : nous vous répondons dans les deux jours ouvrables avec le périmètre adapté.', label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/solutions/crypto-exchanges-brokers/',
    crumbs,
    crumbLabel: "Plateformes d'échange et courtiers crypto",
    title: 'Conformité du marketing crypto pour plateformes : Revault',
    description: 'Revue des allégations, suivi des partenaires et circuits de validation pour les plateformes et courtiers crypto actifs sur plusieurs marchés réglementés.',
    service: { name: "Conformité du marketing crypto pour plateformes d'échange et courtiers", type: 'Processus de conformité marketing', area: ['Switzerland'] },
    h1: 'Croissance crypto en marchés réglementés',
    sub: 'Le marketing crypto obéit désormais à des règles distinctes sur chaque marché. Le Royaume-Uni et le règlement européen MiCA exigent des communications loyales, claires et non trompeuses, avec des avertissements sur les risques dans les textes destinés aux clients, et les plateformes publicitaires y ajoutent leurs règles de certification. Revault tient à jour les formulations approuvées pour chacun de vos marchés.',
    actions: [{ label: 'Réserver un diagnostic crypto', href: '/book-a-diagnostic/' }, { label: 'Lire la méthode', href: '/method/' }],
    media: { type: 'facts', label: "Résumé d'une première mission type pour une plateforme crypto", title: 'Première mission type', rows: [['Format', 'Diagnostic'], ['Durée', 'Quatre à six semaines'], ['Résultat', "Registre des risques, liste de corrections et projet de bibliothèque d'allégations"]] },
    blocks: [
      {
        type: 'rows',
        h2: 'Les problèmes que nous traitons',
        intro: "La FCA attend des entreprises qu'elles signalent les risques liés aux allégations de stabilité et qu'elles se demandent si leurs clients comprendront ce qui leur est proposé. Quatre problèmes découlent de règles de ce type.",
        items: [
          { title: 'Des allégations qui varient selon le marché', body: 'Une formulation acceptée dans un pays peut être restreinte dans un autre. Nous tenons à jour les formulations approuvées pour chaque marché, avec la raison pour laquelle chaque allégation est admise.' },
          { title: "L'accès aux plateformes publicitaires", body: "Les plateformes publicitaires modifient leurs règles pour les catégories crypto. Nous suivons la situation de chaque canal que vous utilisez et signalons les changements avant qu'ils ne touchent une campagne en cours." },
          { title: 'Affiliés et partenaires', body: 'Les contenus des partenaires peuvent engager la responsabilité de la plateforme. Binance a récemment supprimé des commissions de parrainage en raison de méthodes publicitaires interdites, ce qui montre à quelle vitesse un programme de partenariat peut être restreint. Nous fixons les règles applicables aux partenaires, relisons leurs contenus et conservons une trace des corrections.' },
          { title: 'Des validations lentes', body: 'Nous orientons les supports selon leur niveau de risque : les contenus à faible risque sont validés rapidement, et les contenus à risque élevé partent au service juridique avec un dossier complet.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Ce que Revault livre',
        items: [
          "Une bibliothèque d'allégations par juridiction, avec les formulations approuvées, les avertissements obligatoires, les présentations interdites et la source de chaque règle.",
          'Un circuit de validation avec des niveaux de risque et des délais de réponse convenus pour le juridique et la compliance.',
          "Un registre de l'accès aux canaux publicitaires, mis à jour à chaque changement de règles des plateformes.",
          "Une politique pour les affiliés et les partenaires, avec une procédure de relecture et une piste d'audit.",
        ],
      },
      {
        type: 'split',
        h2: "À qui ce service s'adresse",
        body: [
          "Aux responsables du marketing, de la croissance et des partenariats de plateformes d'échange et de courtiers actifs au Royaume-Uni, dans l'UE ou en Suisse, ou qui y font de la publicité.",
          'La première mission est un diagnostic de quatre à six semaines qui passe en revue les campagnes en cours, les contenus des partenaires et le circuit de validation actuel. Elle aboutit à un registre des risques, à une liste de corrections classées par priorité et à un projet de bibliothèque pour les allégations les plus risquées.',
        ],
        link: { label: 'Voir ce que comprend le diagnostic', href: '/services/diagnostic/' },
      },
      {
        type: 'faq',
        items: [
          noAdvice,
          { q: 'Quels marchés couvrez-vous ?', a: "La Suisse d'abord, puis l'UE, puis le Royaume-Uni. Un marché n'est ajouté qu'une fois son module d'allégations relu par un avocat local." },
          { q: 'Pouvez-vous gérer nos campagnes payantes ?', a: 'Nous produisons et gérons les campagnes à partir de la bibliothèque approuvée. Les décisions finales sur les canaux et les budgets restent à votre équipe.' },
        ],
      },
      { type: 'cta', h2: 'Réservez un diagnostic crypto', body: `En quatre à six semaines, vous saurez quelles allégations en ligne présentent le plus de risque sur chaque marché et quoi corriger en premier. Des lectures complémentaires se trouvent dans la <a class="textlink" href="/research/">bibliothèque de recherche</a>.`, label: 'Réserver un diagnostic crypto' },
    ],
  },
  {
    path: '/solutions/neobanks-challengers/',
    crumbs,
    crumbLabel: 'Néobanques et challengers',
    title: 'Croissance et fidélisation pour néobanques : Revault',
    description: 'Faites adopter un deuxième produit et fidélisez vos clients, avec des messages relationnels conformes et des offres ciblées.',
    service: { name: 'Marketing de croissance et de fidélisation pour néobanques', type: 'Marketing relationnel et de fidélisation', area: ['Switzerland'] },
    h1: 'Vendre le deuxième produit, garder le premier client',
    sub: "La plupart des banques challengers gagnent des clients en obtenant leur compte salaire, mais leur chiffre d'affaires progresse lorsqu'elles vendent un deuxième produit. Souvent, les clients gardent leur compte principal et déplacent peu à peu leur argent ailleurs. L'acquisition coûte cher, et les offres de fidélisation aussi lorsqu'elles sont envoyées à tout le monde.",
    actions: [{ label: 'Réserver un audit', href: '/book-a-diagnostic/' }, { label: 'Lire la méthode', href: '/method/' }],
    media: { type: 'facts', label: "Résumé d'une première mission type pour une néobanque", title: 'Première mission type', rows: [['Format', 'Audit de fidélisation'], ['Durée', '30 jours'], ['Résultat', 'Trois programmes déclenchés par des signaux et un plan de test']] },
    blocks: [
      {
        type: 'rows',
        h2: 'Les problèmes que nous traitons',
        items: [
          { title: 'Le départ silencieux', body: "Selon l'étude 2026 de J.D. Power sur la banque de détail aux États-Unis, 20 % des clients ont retiré de l'argent de leur banque principale en trois mois, sans clôturer formellement leur compte. Nous repérons les premiers signaux de ce déplacement." },
          { title: 'Des offres générales coûteuses', body: "Dans une expérience menée par un praticien, une offre de fidélisation standard a coûté 1,21 fois le coût d'acquisition par client conservé, contre 0,87 fois pour une version ciblée selon l'effet attendu (uplift). Nous adressons les offres aux clients susceptibles d'y répondre et mesurons le résultat par rapport à un groupe témoin." },
          { title: 'La conformité des messages relationnels', body: "Les messages sur les produits doivent décrire avec exactitude les frais, les risques et les conditions d'accès. Nous faisons valider les modèles à l'avance, produit par produit." },
        ],
      },
      {
        type: 'checks',
        h2: 'Ce que Revault livre',
        items: [
          "La définition des signaux de risque de départ et d'occasion de vendre un deuxième produit, à partir de vos données de transactions et de produits.",
          'Des modèles de messages relationnels conformes pour chaque produit.',
          'Un ciblage des offres selon la réponse attendue, mesuré par rapport à un groupe témoin.',
          "Un tableau de bord indiquant le coût par client supplémentaire conservé et l'adoption des produits.",
        ],
      },
      {
        type: 'split',
        h2: 'Comment se déroule une première mission',
        body: [
          'Nous commençons par un audit de fidélisation de 30 jours. Nous examinons votre tunnel de conversion, définissons trois programmes déclenchés par des signaux et établissons le plan de test.',
          "L'accès aux données dépend de votre installation actuelle, et nous le confirmons pendant le diagnostic. Le volet reporting de ce travail est prévu sous la forme du module Measurement Layer.",
        ],
        link: { label: "Voir l'état du module Measurement Layer", href: '/platform/' },
      },
      { type: 'cta', h2: 'Réservez un audit de fidélisation', body: `En trente jours, vous disposez de trois programmes à tester et d'un plan pour mesurer chacun par rapport à un groupe témoin. La <a class="textlink" href="/services/">page des services</a> indique ce qui peut suivre.`, label: 'Réserver un audit' },
    ],
  },
  {
    path: '/solutions/fintech-bank-partnerships/',
    crumbs,
    crumbLabel: 'Partenariats fintech et banque',
    title: 'Marketing des partenariats fintech et banque : Revault',
    description: 'Contenus partagés, circuits de validation avec les partenaires et co-marketing pour les fintechs qui travaillent avec des banques partenaires.',
    service: { name: 'Marketing des partenariats entre fintechs et banques', type: 'Circuit de validation avec les partenaires', area: ['Switzerland'] },
    h1: 'Des validations plus rapides entre fintechs et banques',
    sub: 'Dans un partenariat entre une fintech et une banque, la banque partenaire répond de la façon dont ses programmes sont promus : chaque campagne peut donc exiger son accord. Les fintechs soumettent des contenus, les banques renvoient des commentaires, et les mêmes questions reviennent à chaque nouveau support. Ce retard fait manquer des lancements et use les deux équipes.',
    actions: [{ label: "Discuter d'un pilote", href: '/book-a-diagnostic/' }, { label: 'Lire la méthode', href: '/method/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Les problèmes que nous traitons',
        items: [
          { title: 'Le même contenu relu plusieurs fois', body: 'Chaque banque applique ses propres règles à des contenus presque identiques. Nous tenons une seule bibliothèque partagée, complétée par les règles propres à chaque banque partenaire.' },
          { title: 'Aucune trace de qui a validé quoi', body: "La surveillance des partenaires exige une piste d'audit claire. Chaque validation est enregistrée avec la version, le relecteur et la date." },
          { title: 'Un co-marketing refait pour chaque partenaire', body: 'Les supports de lancement sont reconstruits pour chaque partenaire. Nous produisons un kit réutilisable, que les banques partenaires valident une fois et réemploient dans des limites convenues.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Ce que Revault livre',
        items: [
          "Une bibliothèque d'allégations partagée, complétée par les règles propres à chaque banque.",
          'Un circuit de relecture avec les partenaires, assorti de délais de réponse convenus.',
          "Un registre des validations que l'équipe compliance de la banque peut contrôler.",
          "Des kits de lancement pour le co-marketing, validés à l'avance lorsque la banque l'accepte.",
        ],
      },
      {
        type: 'split',
        h2: 'Où en est le Partner Portal',
        body: [
          "Le Partner Portal complet est prévu et n'est pas encore en service. D'ici à son lancement, nous assurons ce service par un circuit de validation que nous gérons avec vos banques partenaires.",
          'Son état est mis à jour sur la page de la plateforme à chaque nouvelle version, et notre façon de traiter les données des partenaires est décrite à la page Sécurité et données.',
        ],
        link: { label: "Voir l'état de la plateforme", href: '/platform/' },
      },
      { type: 'cta', h2: "Discutons d'un pilote partenaire", body: `Un pilote fait passer une banque partenaire par la bibliothèque partagée et le circuit de relecture. La <a class="textlink" href="/security-and-data/">page Sécurité et données</a> explique comment les enregistrements sont traités.`, label: "Discuter d'un pilote" },
    ],
  },
  {
    path: '/solutions/b2b-fintech-for-banks/',
    crumbs,
    crumbLabel: 'Fintechs B2B qui vendent aux banques',
    title: 'Marketing des fintechs B2B auprès des banques : Revault',
    description: 'Contenus étayés par des preuves, prospection validée et ciblage des acheteurs bancaires pour les fintechs qui vendent leur infrastructure aux banques.',
    service: { name: 'Marketing des fintechs B2B auprès des banques', type: 'Marketing par la preuve et aide à la vente', area: ['Switzerland'] },
    h1: 'Des preuves que les banques peuvent vérifier',
    sub: "Les banques et les banques coopératives achètent lentement. Les achats, la sécurité et la compliance examinent chacun le fournisseur, et ils se fient davantage à des preuves vérifiables qu'à des affirmations générales. La prospection auprès d'acheteurs réglementés obéit elle aussi à des règles : un message trop enthousiaste peut créer un problème à lui seul.",
    actions: [{ label: 'Réserver un diagnostic', href: '/book-a-diagnostic/' }, { label: 'Lire la méthode', href: '/method/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Les problèmes que nous traitons',
        items: [
          { title: 'Des allégations que les acheteurs ne peuvent pas vérifier', body: 'Nous relions chaque allégation à un document : une étude de cas, un certificat de sécurité ou une fiche technique publiée.' },
          { title: 'Une prospection qui crée des risques', body: "Nous contrôlons à l'avance les modèles de messages commerciaux à l'aide de la bibliothèque d'allégations et fixons ce qui peut être dit des produits réglementés." },
          { title: 'Peu de rendez-vous qualifiés', body: 'Nous établissons une liste de comptes cibles à partir des informations publiques sur les banques et les banques coopératives de votre segment, et nous ordonnons la prospection en conséquence.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Ce que Revault livre',
        items: [
          'Une bibliothèque de preuves, où chaque étude de cas, chaque document de sécurité et chaque allégation sur le produit est relié à ses justificatifs.',
          'Des modèles de messages commerciaux et de prospection validés.',
          'Un plan de comptes cibles fondé sur des informations publiques.',
        ],
      },
      {
        type: 'split',
        h2: 'Comment nous traitons les résultats des clients',
        body: ["Revault ne publie aucun résultat de client sans autorisation écrite et sans chiffres vérifiés. Lorsqu'aucun cas client n'est disponible, nous utilisons des exemples anonymisés et clairement signalés comme tels."],
        link: { label: "Lire nos critères d'allégation", href: '/method/' },
      },
      { type: 'cta', h2: 'Réservez un diagnostic de vos preuves', body: "Le diagnostic montre quelles allégations de vos supports de vente renvoient déjà à un document qu'un acheteur bancaire peut vérifier.", label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/solutions/blockchain-protocols/',
    crumbs,
    crumbLabel: 'Protocoles blockchain',
    title: 'Conformité marketing des protocoles blockchain : Revault',
    description: 'Contenus pédagogiques, information sur les risques et contrôle des incitations pour les protocoles blockchain et les projets de jetons. Places limitées.',
    service: { name: 'Conformité marketing des protocoles blockchain', type: 'Contrôle des promotions et des incitations', area: ['Switzerland'] },
    h1: 'Une communauté qui grandit dans les règles',
    sub: "Les protocoles grandissent par leur communauté, mais certaines promotions sont restreintes ou interdites. Google interdit la publicité pour les ICO (émissions de jetons), et les règles britanniques limitent les incitations à investir. Une seule sanction peut entamer le crédit d'un projet auprès de ses partenaires et de ses investisseurs. Nos disponibilités sont limitées, et nous retenons peu de protocoles au départ.",
    actions: [{ label: 'Demander une revue', href: '/book-a-diagnostic/' }, { label: 'Lire la méthode', href: '/method/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Les problèmes que nous traitons',
        items: [
          { title: 'Des promotions restreintes', body: "Nous déterminons quelles activités sont interdites ou restreintes sur chaque marché avant qu'une campagne ne soit conçue." },
          { title: 'Des incitations qui peuvent être assimilées à des promotions', body: 'Nous contrôlons chaque incitation, chaque airdrop et chaque récompense de parrainage avant son lancement.' },
          { title: 'Des contenus pédagogiques difficiles à rendre exacts', body: 'Nous rédigeons des explications qui décrivent ce que fait le protocole, sur quoi il est adossé et quels sont les risques, chaque allégation renvoyant à une preuve.' },
        ],
      },
      {
        type: 'checks',
        h2: 'Ce que Revault livre',
        items: [
          'Un contrôle des incitations et des promotions pour chaque campagne prévue.',
          "Un plan de contenus pédagogiques et d'information sur les risques.",
          'Un plan de croissance de la communauté fondé sur votre site, votre newsletter, vos espaces communautaires et la formation des partenaires.',
        ],
      },
      { type: 'cta', h2: 'Demandez une revue de protocole', body: "Envoyez-nous la campagne ou l'incitation que vous préparez : nous vous dirons si nous avons de la disponibilité et quels marchés la revue couvrirait.", label: 'Demander une revue' },
    ],
  },
];
