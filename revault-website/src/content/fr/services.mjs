const crumbs = [['Services', '/services/']];
const book = { label: 'Réserver un diagnostic', href: '/book-a-diagnostic/' };

export default [
  {
    path: '/services/',
    crumbs: [],
    crumbLabel: 'Services',
    title: 'Services Revault : diagnostic, mise en place, mandat',
    description: "Trois services pour la croissance réglementée : un diagnostic à prix fixe, la mise en place d'une bibliothèque d'allégations et un mandat mensuel.",
    h1: 'Comment nous travaillons avec vous',
    sub: "Revault vend ses services dans l'ordre. La plupart des clients commencent par un diagnostic, passent ensuite à la mise en place, puis à un mandat mensuel. Vous pouvez vous arrêter à chaque étape en gardant le livrable produit : le premier engagement se limite donc à quatre à six semaines et à un prix fixe.",
    actions: [book, { label: 'Lire la méthode', href: '/method/' }],
    media: { type: 'facts', label: "L'ordre dans lequel les trois services se suivent", title: "L'ordre des services", rows: [["D'abord", 'Diagnostic, quatre à six semaines'], ['Ensuite', 'Mise en place, huit à douze semaines'], ['Puis', 'Mandat mensuel, chaque mois']] },
    blocks: [
      {
        type: 'showcase',
        tone: 'ink',
        h2: "Trois services, dans l'ordre",
        items: [
          { title: 'Diagnostic', body: "Quatre à six semaines, à prix fixe. Un examen de vos campagnes, des contenus de vos partenaires, de vos validations et de vos coûts d'acquisition, qui aboutit à un plan à 90 jours.", href: '/services/diagnostic/', more: 'Voir le diagnostic' },
          { title: "Bibliothèque d'allégations et circuit de validation", body: "Huit à douze semaines, au prix d'un projet. Les allégations approuvées, les niveaux de risque et le circuit de validation pour vos marchés, éprouvés sur vos premières campagnes.", href: '/services/claim-library-build/', more: 'Voir la mise en place' },
          { title: 'Croissance sous mandat', body: "Un mandat mensuel de six mois au minimum. Campagnes, partenaires, programmes relationnels et reporting, toujours à partir de votre bibliothèque d'allégations approuvée.", href: '/services/managed-growth/', more: 'Voir le mandat' },
        ],
      },
      {
        type: 'rail',
        tone: 'white',
        h2: 'Comment une étape mène à la suivante',
        items: [
          { title: 'Diagnostic', body: "Il nomme les risques et les corrections, et fournit le plan qui sert à définir l'étape suivante.", when: 'Quatre à six semaines' },
          { title: 'Mise en place', body: "Elle transforme les risques les plus élevés en allégations approuvées et en un circuit de validation que votre équipe gère.", when: 'Huit à douze semaines' },
          { title: 'Croissance sous mandat', body: "Nous menons les campagnes, les partenariats et les programmes relationnels à partir de cette bibliothèque, avec un rapport chaque mois.", when: 'Chaque mois' },
        ],
      },
      {
        type: 'split',
        h2: 'Comment les prix sont fixés',
        body: [
          'Le prix dépend du périmètre : le nombre de marchés, de produits actifs et de partenaires. Nous établissons une offre après un premier entretien, et nous ne publions pas de prix fixes pour la mise en place ni pour le mandat.',
          'La fourchette de prix du diagnostic est confirmée à la réservation.',
        ],
      },
      { type: 'cta', h2: 'Commencez par le diagnostic', body: "C'est le plus court des trois services, et il produit le registre des risques et le plan qui servent à définir le périmètre des deux autres.", label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/services/diagnostic/',
    crumbs,
    crumbLabel: 'Diagnostic',
    title: 'Diagnostic de croissance et de conformité : Revault',
    description: "Un examen de quatre à six semaines, à prix fixe, de vos campagnes, des contenus de partenaires, des validations et des coûts d'acquisition, avec un plan.",
    service: { name: 'Diagnostic de croissance et de conformité', type: 'Audit de conformité marketing', area: ['Switzerland'] },
    h1: 'Diagnostic de croissance et de conformité',
    sub: "Le diagnostic montre où votre croissance est exposée à un risque réglementaire et où elle perd de l'argent. C'est la bonne première étape lorsque des campagnes restent bloquées en relecture, qu'un partenaire exprime des réserves ou que les coûts d'acquisition augmentent sans cause claire.",
    actions: [book, { label: 'Voir le calendrier', href: '#timeline' }],
    media: { type: 'facts', label: 'Résumé du diagnostic', title: 'Le diagnostic en bref', rows: [['Durée', 'Quatre à six semaines'], ['Prix', 'Fixe, confirmé à la réservation'], ['Résultat', "Registre des risques, liste de corrections, projet de bibliothèque d'allégations et plan à 90 jours"]] },
    blocks: [
      {
        type: 'checks',
        h2: 'Ce qui est compris',
        items: [
          "L'examen des campagnes en cours et récentes, des pages de destination et des messages relationnels au regard des règles de chaque marché.",
          "L'examen des contenus des affiliés et des partenaires, corrections comprises.",
          'La cartographie de votre circuit de validation actuel, avec la durée de chaque étape.',
          "Les coûts d'acquisition et de fidélisation par produit et par canal, y compris le temps de relecture et les abandons liés au KYC lorsque les données le permettent.",
        ],
      },
      {
        type: 'rows',
        h2: 'Ce que vous recevez',
        items: [
          { title: 'Un registre des risques', body: 'Chaque risque est noté selon sa gravité et sa probabilité.' },
          { title: 'Une liste de corrections priorisées', body: 'Les corrections sont ordonnées : votre équipe sait quoi modifier en premier.' },
          { title: "Un projet de bibliothèque", body: "Il couvre les allégations les plus risquées relevées pendant l'examen." },
          { title: 'Un plan à 90 jours', body: 'Le plan désigne les responsables et les points de décision.' },
        ],
      },
      {
        type: 'checks',
        negative: true,
        h2: "Ce qui n'est pas compris",
        items: [
          'Les avis de droit. Nous signalons les allégations que vos juristes devraient examiner.',
          "L'achat d'espace publicitaire et l'exécution des campagnes.",
          'Les modifications de votre produit ou de vos conditions générales.',
        ],
      },
      {
        type: 'rail',
        id: 'timeline',
        h2: 'Calendrier',
        items: [
          { title: 'Lancement et demande de données', body: 'Nous convenons du périmètre, désignons un responsable du circuit de validation et demandons les campagnes récentes et les contenus des partenaires.', when: 'Semaine 1' },
          { title: 'Examen et entretiens', body: 'Nous examinons les documents au regard des règles de chaque marché et interrogeons les personnes qui interviennent dans le circuit de validation.', when: 'Semaines 2 à 4' },
          { title: 'Restitution et plan', body: 'Nous présentons le registre des risques et la liste de corrections, et nous remettons le plan à 90 jours.', when: 'Semaines 5 et 6' },
        ],
      },
      {
        type: 'faq',
        items: [
          { q: 'Combien de temps cela prend-il ?', a: 'Quatre à six semaines.' },
          { q: 'De quoi avez-vous besoin de notre part ?', a: "D'un accès aux campagnes récentes et aux contenus des partenaires, et d'un responsable du circuit de validation. Les besoins d'accès aux données sont confirmés avant le lancement." },
          { q: 'Obtiendrons-nous une validation juridique ?', a: "Non. Nous vous remettons une vue des risques et une liste d'allégations à faire approuver par vos juristes." },
        ],
      },
      { type: 'cta', h2: 'Réservez un diagnostic', body: 'Un court appel permet de vérifier que le diagnostic vous convient, et vous recevez ensuite un périmètre écrit, que nous travaillions ensemble ou non.', label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/services/claim-library-build/',
    crumbs,
    crumbLabel: "Bibliothèque d'allégations",
    title: "Bibliothèque d'allégations et validation : Revault",
    description: "Mettez en place une bibliothèque d'allégations approuvées et un circuit de validation par niveau de risque, éprouvés sur vos premières campagnes.",
    service: { name: "Mise en place d'une bibliothèque d'allégations et d'un circuit de validation", type: 'Processus de conformité marketing', area: ['Switzerland'] },
    h1: "Des allégations validées, gérées par votre équipe",
    sub: "Une bibliothèque d'allégations transforme l'appréciation réglementaire en document de travail commun. Le marketing sait quelles allégations sont approuvées, quelles mentions elles exigent et qui doit relire toute nouveauté. Le juridique passe moins de temps sur les contenus courants et davantage sur les cas qui le demandent.",
    actions: [{ label: "Discuter d'une mise en place", href: '/book-a-diagnostic/' }, { label: 'Lire la méthode', href: '/method/' }],
    media: { type: 'facts', label: "Résumé de la mise en place de la bibliothèque d'allégations", title: 'La mise en place en bref', rows: [['Durée', 'Huit à douze semaines'], ['Prix', 'Prix par projet, selon le périmètre'], ['Résultat', "Bibliothèque d'allégations, niveaux de risque, circuit de validation et premières campagnes"]] },
    blocks: [
      {
        type: 'rows',
        h2: 'Ce que nous mettons en place',
        items: [
          { title: "Une bibliothèque d'allégations", body: 'Classée par produit et par marché, avec pour chaque allégation sa formulation approuvée, ses mentions obligatoires et sa source.' },
          { title: 'Des règles de classement par niveau de risque', body: "Elles indiquent quels contenus exigent la validation du marketing, lesquels une relecture juridique et lesquels un contrôle par l'équipe produit." },
          { title: 'Un circuit de validation', body: 'Avec des délais de réponse convenus et un enregistrement complet de chaque décision.' },
          { title: 'Vos premières campagnes', body: 'Deux ou trois campagnes passent par le nouveau processus avant la remise à votre équipe.' },
        ],
      },
      {
        type: 'split',
        h2: 'Comment la bibliothèque reste à jour',
        body: ["Les règles changent. Chaque allégation a un responsable, une date de révision et un journal des modifications. Lorsqu'une règle ou la politique d'une plateforme change, les allégations concernées sont signalées et revues."],
      },
      {
        type: 'split',
        tone: 'tint',
        h2: 'Qui valide',
        body: ['Vos juristes approuvent le contenu juridique de la bibliothèque. Revault tient à jour la structure, le circuit de validation et le contenu opérationnel. Le registre des validations indique qui a approuvé chaque allégation, et quand.'],
        link: { label: 'Voir comment les enregistrements sont conservés', href: '/method/' },
      },
      { type: 'cta', h2: "Discutons d'une mise en place", body: 'La plupart des mises en place suivent un diagnostic, car le registre des risques nous indique quelles allégations et quels marchés la bibliothèque doit couvrir en premier.', label: "Discuter d'une mise en place" },
    ],
  },
  {
    path: '/services/managed-growth/',
    crumbs,
    crumbLabel: 'Croissance sous mandat',
    title: 'Croissance sous mandat pour marques réglementées : Revault',
    description: "Production mensuelle de campagnes, gestion des partenaires, programmes relationnels et reporting, à partir de votre bibliothèque d'allégations approuvée.",
    service: { name: 'Mandat mensuel de croissance', type: 'Service de marketing géré', area: ['Switzerland'] },
    h1: 'Une croissance gérée selon vos règles',
    sub: "Avec le mandat mensuel, nous menons vos actions de croissance mois après mois. Les campagnes sont produites à partir de la bibliothèque d'allégations approuvée, les partenaires sont soumis aux mêmes règles, et le reporting montre ce que les dépenses rapportent.",
    actions: [{ label: 'Réserver un appel de cadrage', href: '/book-a-diagnostic/' }, { label: 'Lire la méthode', href: '/method/' }],
    media: { type: 'facts', label: 'Résumé du mandat mensuel de croissance', title: 'Le mandat en bref', rows: [['Durée', 'Mensuelle, six mois au minimum'], ['Prix', 'Selon le périmètre, jamais lié au budget publicitaire'], ['Résultat', 'Campagnes, relectures des partenaires et rapport mensuel']] },
    blocks: [
      {
        type: 'checks',
        h2: 'Ce que couvre le mandat',
        items: [
          'La production de campagnes à partir des allégations approuvées, avec un contrôle préalable avant la soumission.',
          'La gestion des partenaires et des affiliés, y compris la relecture et la correction de leurs contenus.',
          'Les programmes relationnels et de fidélisation, testés avec un groupe témoin.',
          "Un rapport mensuel sur l'acquisition et la fidélisation, par produit et par canal.",
        ],
      },
      {
        type: 'split',
        h2: 'Comment le prix est fixé',
        body: ["Le prix du mandat dépend du périmètre : le nombre de marchés, de produits actifs et de partenaires. La durée minimale est de six mois. Nos honoraires ne dépendent pas du budget publicitaire : dépenser davantage ne nous rapporte rien, et notre intérêt reste la qualité de la conformité."],
      },
      {
        type: 'table',
        h2: 'Ce que montre le rapport mensuel',
        cols: ['Indicateur', "Ce qu'il vous apprend"],
        rows: [
          ['Jours entre le brief et le support validé', 'Combien de temps une campagne attend avant de pouvoir être lancée'],
          ['Taux de validation au premier passage', 'Quelle part des contenus est validée sans deuxième relecture'],
          ['Corrections ou retraits', "Ce qu'il a fallu modifier ou retirer après la mise en ligne"],
          ['Coût par client supplémentaire', 'Ce que les dépenses ont rapporté, par produit'],
        ],
      },
      { type: 'cta', h2: 'Réservez un appel de cadrage', body: "L'appel fixe les marchés, les produits et les partenaires concernés, et l'offre découle de ces trois nombres.", label: 'Réserver un appel de cadrage' },
    ],
  },
];
