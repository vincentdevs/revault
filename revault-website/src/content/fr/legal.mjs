const crumbs = [['Mentions légales', '/legal/']];
const draft = "Nos avocats rédigent le texte définitif de cette page. Les rubriques ci-dessous indiquent ce qu'elle couvrira.";
const actions = [{ label: 'Lire la clause', href: '/legal/disclaimer/' }, { label: 'Toutes les pages légales', href: '/legal/' }];
const sections = (h2, names) => ({ type: 'rows', h2, items: names.map(([title, body]) => ({ title, status: 'Chez nos avocats', body })) });

export default [
  {
    path: '/legal/',
    crumbs: [],
    crumbLabel: 'Mentions légales',
    title: 'Informations légales : Revault',
    description: "Déclaration de protection des données, conditions d'utilisation, cookies et clause précisant que Revault ne fournit aucun conseil juridique ou financier.",
    h1: 'Informations légales',
    sub: "Cette page renvoie à la déclaration de protection des données, aux conditions d'utilisation, à l'information sur les cookies et à la clause de non-responsabilité. Revault fournit des services de marketing et de processus de conformité et ne fournit aucun conseil juridique ou financier : ses clients doivent donc s'en remettre à leurs propres juristes pour leurs obligations réglementaires.",
    actions: [{ label: 'Lire la clause', href: '/legal/disclaimer/' }, { label: 'Protection des données', href: '/legal/privacy/' }],
    blocks: [
      {
        type: 'linkrows',
        h2: 'Pages légales',
        items: [
          { title: 'Déclaration de protection des données', body: 'Comment Revault collecte, utilise et protège les données personnelles selon le droit suisse et européen de la protection des données.', href: '/legal/privacy/' },
          { title: "Conditions d'utilisation", body: "Les conditions qui régissent l'utilisation du site de Revault et des informations qu'il contient.", href: '/legal/terms/' },
          { title: 'Information sur les cookies', body: 'Quels cookies Revault utilise, pourquoi, et comment modifier vos choix.', href: '/legal/cookies/' },
          { title: 'Clause de non-responsabilité', body: 'Revault fournit des services de marketing et de processus de conformité. Elle ne fournit aucun conseil juridique ou financier.', href: '/legal/disclaimer/' },
        ],
      },
    ],
  },
  {
    path: '/legal/privacy/',
    crumbs,
    crumbLabel: 'Déclaration de protection des données',
    draft,
    title: 'Déclaration de protection des données : Revault',
    description: 'Comment Revault collecte, utilise et protège les données personnelles selon le droit suisse et européen de la protection des données.',
    h1: 'Comment Revault traite les données personnelles',
    sub: 'Cette déclaration expliquera comment Revault collecte, utilise et protège les données personnelles selon le droit suisse et européen de la protection des données. Elle indique qui est le responsable du traitement, quelles données sont collectées et pourquoi, qui les reçoit, combien de temps elles sont conservées et quels droits vous pouvez exercer.',
    actions,
    blocks: [sections('Ce que couvre la déclaration', [
      ['Responsable du traitement', 'Qui répond de vos données personnelles.'],
      ['Données collectées', 'Les données personnelles que Revault collecte.'],
      ['Finalités', 'À quoi sert chaque catégorie de données.'],
      ['Base juridique', 'Le fondement de chaque utilisation en droit suisse et européen.'],
      ['Destinataires', 'Qui reçoit des données personnelles.'],
      ['Transferts', "Si des données quittent la Suisse ou l'UE, et avec quelles garanties."],
      ['Conservation', 'Combien de temps chaque catégorie est conservée.'],
      ['Droits', 'Vos droits et la manière de les exercer.'],
      ['Contact', 'Comment joindre Revault au sujet de vos données.'],
    ])],
  },
  {
    path: '/legal/terms/',
    crumbs,
    crumbLabel: "Conditions d'utilisation",
    draft,
    title: "Conditions d'utilisation : Revault",
    description: "Les conditions qui régissent l'utilisation du site de Revault et des informations qu'il contient.",
    h1: "Conditions d'utilisation de ce site",
    sub: "Ces conditions régiront l'utilisation du site de Revault et des informations qu'il contient. Les informations publiées sur ce site sont générales et peuvent ne pas tenir compte des dernières modifications des règles, et la clause de non-responsabilité s'applique déjà à tout ce qui est publié ici.",
    actions,
    blocks: [sections('Ce que couvrent les conditions', [
      ['Utilisation du site', 'Les conditions auxquelles le site et son contenu peuvent être utilisés.'],
      ['Informations publiées sur le site', 'Le caractère général des informations et leurs limites.'],
    ])],
  },
  {
    path: '/legal/cookies/',
    crumbs,
    crumbLabel: 'Information sur les cookies',
    draft,
    title: 'Information sur les cookies : Revault',
    description: 'Quels cookies Revault utilise, pourquoi, et comment modifier vos choix.',
    h1: 'Les cookies sur le site de Revault',
    sub: "Cette information indiquera quels cookies Revault utilise, pourquoi, et comment vous pouvez modifier vos choix. Les cookies dont le site n'a pas besoin pour fonctionner restent désactivés tant que vous n'avez pas donné votre consentement, et aucun suivi par des tiers n'est actif avant cela.",
    actions,
    blocks: [sections("Ce que couvre l'information", [
      ['Cookies utilisés', 'Chaque cookie, avec sa finalité.'],
      ['Vos choix', 'Comment donner, refuser ou retirer votre consentement.'],
    ])],
  },
  {
    path: '/legal/disclaimer/',
    crumbs,
    crumbLabel: 'Clause de non-responsabilité',
    title: 'Clause de non-responsabilité : Revault',
    description: 'Revault fournit des services de marketing et de processus de conformité. Elle ne fournit aucun conseil juridique ou financier.',
    h1: 'Revault ne fournit pas de conseil juridique',
    sub: "Revault ne fournit aucun conseil juridique ou financier. Les informations publiées sur ce site sont générales et peuvent ne pas tenir compte des dernières modifications des règles. Les clients restent responsables de leurs obligations réglementaires et doivent s'en remettre à leurs propres juristes.",
    actions: [{ label: 'Toutes les pages légales', href: '/legal/' }, { label: 'Lire la méthode', href: '/method/' }],
    blocks: [
      {
        type: 'split',
        h2: 'Ce que fournit Revault',
        body: [
          'Revault fournit des services de marketing et de processus de conformité. Nous mettons en place le processus et le dispositif de relecture, et vos juristes approuvent les règles que nous appliquons.',
          'Nous réduisons le risque de refus et accélérons le processus. Les décisions de validation restent à vos relecteurs et aux autorités de surveillance.',
        ],
      },
    ],
  },
];
