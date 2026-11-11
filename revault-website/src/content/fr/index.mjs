// Toutes les pages du site, sous forme de données. build.mjs transforme chaque entrée en un fichier HTML.
import solutions from './solutions.mjs';
import services from './services.mjs';
import company from './company.mjs';
import legal from './legal.mjs';

const book = { label: 'Réserver un diagnostic', href: '/book-a-diagnostic/' };

const home = {
  path: '/',
  title: 'Croissance en finance réglementée et crypto : Revault',
  description: 'Go-to-market, croissance et marketing pour la finance réglementée, la fintech et la crypto. Chaque campagne est validée avant son lancement.',
  h1: 'Une croissance que la compliance peut valider',
  sub: "Revault est un service de go-to-market, de croissance et de marketing pour les équipes de la finance réglementée, de la fintech et de la crypto. Nous menons vos campagnes et votre prospection, alimentons votre CRM en acheteurs qualifiés et les transformons en chiffre d'affaires. Chaque campagne est validée par le juridique, la compliance et les banques partenaires.",
  actions: [book, { label: 'Voir comment cela fonctionne', href: '#how-it-works' }],
  media: { type: 'growth', label: "Animation : un acheteur B2B d'une entreprise réglementée devient un lead grâce à vos campagnes, est qualifié dans le CRM, puis devient du chiffre d'affaires conforme, confirmé par un symbole dollar" },
  blocks: [
    {
      type: 'diagram',
      h2: 'Pourquoi vos campagnes restent bloquées',
      body: [
        "Dans les marchés réglementés, les équipes de croissance travaillent avec des règles qui changent d'un marché et d'un canal à l'autre. Une campagne peut être autorisée dans un pays et interdite dans un autre. Les banques partenaires relisent chaque support qui porte leur nom, et les plateformes publicitaires peuvent fermer une catégorie presque sans préavis.",
        'La plupart des équipes envoient donc tout au service juridique et attendent, ce qui retarde les lancements et oblige parfois à retirer une campagne déjà en ligne.',
        "En janvier 2026, l'Advertising Standards Authority (ASA), l'autorité britannique de contrôle de la publicité, a interdit une série de publicités de Coinbase qui présentaient de façon trompeuse les risques de l'investissement en cryptomonnaies, selon la presse qui a rendu compte de la décision. Revault existe pour rendre ce type de problème visible avant le lancement.",
      ],
      flow: {
        label: 'Comment une campagne prête à être lancée finit retardée ou retirée',
        top: { icon: 'alert', label: 'Campagne prête' },
        cols: [
          [{ icon: 'inbox', label: 'Tout part au service juridique' }, { icon: 'clock', label: "L'équipe attend la relecture" }, { icon: 'trend', label: 'Le lancement est repoussé', end: true }],
          [{ icon: 'globe', label: 'Les règles varient selon le marché' }, { icon: 'ban', label: 'Autorisée ici, interdite ailleurs' }, { icon: 'undo', label: 'Campagne retirée après le lancement', end: true }],
        ],
      },
    },
    {
      type: 'rows',
      h2: 'Une génération de leads pensée pour les acheteurs réglementés',
      intro: "Dans la finance, un lead se gagne lentement, et en B2B c'est un comité qui décide. Nous organisons vos campagnes et votre prospection autour des personnes qui doivent donner leur accord.",
      items: [
        { title: 'Génération de leads', body: 'Nous établissons une liste de comptes cibles à partir des informations publiques sur les entreprises de votre segment, puis nous les contactons par des campagnes, des partenaires et une prospection validée.' },
        { title: "Le comité d'achat", body: 'Les banques et les banques coopératives achètent lentement. Les achats, la sécurité et la compliance examinent chacun le fournisseur : nous préparons les justificatifs que chacun demande.' },
        { title: 'Des preuves vérifiables', body: 'Chaque allégation de vos supports de vente renvoie à un document : une étude de cas, un certificat de sécurité ou une fiche technique publiée.' },
        { title: "Du lead au chiffre d'affaires", body: 'Les leads sont enregistrés dans votre CRM, et nous indiquons chaque mois quels canaux les ont transformés en clients, et à quel coût.' },
      ],
    },
    {
      type: 'rail',
      id: 'how-it-works',
      h2: 'Comment Revault travaille',
      intro: 'Les trois étapes se suivent, et vous pouvez vous arrêter après chacune en gardant le livrable produit.',
      items: [
        { title: 'Diagnostic', body: "Nous examinons vos campagnes en cours, les contenus de vos partenaires, votre circuit de validation et vos coûts d'acquisition. Vous recevez une liste de risques et de corrections classés par priorité, ainsi qu'un plan à 90 jours.", when: 'Quatre à six semaines' },
        { title: "Bibliothèque d'allégations et circuit de validation", body: 'Nous établissons les allégations approuvées, les mentions obligatoires et le circuit de validation pour vos marchés. À la fin, votre équipe fait fonctionner le dispositif elle-même.', when: 'Huit à douze semaines' },
        { title: 'Croissance sous mandat', body: "Nous produisons les campagnes à partir de la bibliothèque approuvée, nous gérons les partenaires et les messages relationnels, et nous rendons compte de l'acquisition et de la fidélisation par produit.", when: 'Chaque mois' },
      ],
    },
    {
      type: 'linkrows',
      h2: "À qui Revault s'adresse",
      items: [
        { title: 'Bourses et courtiers crypto', body: 'Revue des allégations par marché et suivi des partenaires.', href: '/solutions/crypto-exchanges-brokers/' },
        { title: 'Néobanques et challengers', body: "Vente d'un deuxième produit et fidélisation.", href: '/solutions/neobanks-challengers/' },
        { title: 'Équipes de partenariat fintech', body: 'Validations bancaires plus rapides et contenus partagés.', href: '/solutions/fintech-bank-partnerships/' },
        { title: 'Fintechs B2B qui vendent aux banques', body: 'Contenus étayés par des preuves et prospection validée.', href: '/solutions/b2b-fintech-for-banks/' },
        { title: 'Protocoles blockchain', body: 'Contenus pédagogiques et contrôle des incitations, avec des disponibilités limitées.', href: '/solutions/blockchain-protocols/' },
      ],
    },
    {
      type: 'showcase',
      tone: 'ink',
      h2: 'Ce que nous livrons',
      intro: "Revault est un service assuré par des personnes. Nos campagnes et notre prospection vous amènent des acheteurs, nous les enregistrons dans votre CRM et nous rendons compte du chiffre d'affaires qu'ils génèrent.",
      items: [
        { title: 'Campagnes et prospection', body: "Nous produisons et menons vos campagnes, vos programmes de partenariat et d'affiliation, vos messages relationnels et votre prospection, toujours dans les limites de vos allégations approuvées." },
        { title: 'Votre CRM', body: 'Les acheteurs amenés par chaque canal sont enregistrés dans votre CRM : le marketing et la vente travaillent sur la même liste.' },
        { title: "Chiffre d'affaires", body: "Chaque mois, nous indiquons l'acquisition, la fidélisation et le coût par client supplémentaire, par produit et par canal." },
        { title: 'Validation avant le lancement', body: "Chaque support est contrôlé à l'aide de la bibliothèque d'allégations, puis validé par le marketing, la compliance ou le juridique selon son niveau de risque." },
      ],
    },
    {
      type: 'split',
      h2: 'Comment nous traitons les preuves',
      body: ["Nous publions nos recherches avec leurs sources, leurs dates et leurs limites, y compris lorsque les preuves sont minces. Les articles sont revus lorsque les règles qu'ils décrivent changent."],
      link: { label: 'Commencer par la bibliothèque de recherche', href: '/research/' },
    },
    {
      type: 'cta',
      h2: 'Commencez par un diagnostic',
      body: 'Une mission délimitée, qui vous donne une vue claire de vos risques actuels et un plan applicable. Nous ne fournissons pas de conseil juridique, et vos juristes restent responsables des règles que nous appliquons.',
      label: 'Réserver un diagnostic',
    },
  ],
};

const notFound = {
  path: '/404/',
  noindex: true,
  title: 'Page introuvable : Revault',
  description: "La page demandée n'existe pas sur le site de Revault.",
  h1: "Cette page n'existe pas",
  sub: "L'adresse a peut-être changé, ou le lien qui vous a amené ici n'est plus à jour. La page d'accueil, la vue d'ensemble des solutions et la page de réservation sont les trois pages que la plupart des visiteurs cherchent, et chacune se trouve à un clic d'ici.",
  actions: [{ label: "Aller à la page d'accueil", href: '/' }, { label: 'Voir les solutions', href: '/solutions/' }],
  blocks: [{ type: 'cta', h2: "Parlons d'un diagnostic", body: 'Si vous cherchiez à joindre Revault, la page de réservation recueille une courte demande, et nous vous répondons avec un périmètre de mission écrit.', label: 'Réserver un diagnostic' }],
};

export default [home, ...solutions, ...services, ...company, ...legal, notFound];
