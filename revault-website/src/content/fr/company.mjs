const book = { label: 'Réserver un diagnostic', href: '/book-a-diagnostic/' };

export default [
  {
    path: '/platform/',
    crumbs: [],
    crumbLabel: 'Plateforme',
    title: 'Plateforme Revault : allégations, validations, mesure',
    description: "Les modules de la plateforme Revault : gestion des allégations, circuits de validation, portail partenaires et mesure, avec l'état réel de chacun.",
    h1: 'La plateforme Revault',
    sub: "La plateforme vient en appui de nos services. Nous construisons chaque module à partir des processus manuels utilisés chez nos clients, et nous indiquons pour chacun son état actuel. Tant qu'un module n'est pas en service, nous assurons sa fonction dans le cadre de nos services, et nous ne montrons aucune capture d'écran de fonctions qui n'existent pas encore.",
    actions: [{ label: 'Demander un pilote', href: '/book-a-diagnostic/' }, { label: 'Voir les services', href: '/services/' }],
    blocks: [
      {
        type: 'rows',
        h2: "Quatre modules et l'état de chacun",
        items: [
          { title: 'Claim Engine', status: 'En développement', body: `Conserve les allégations approuvées, les mentions obligatoires, les preuves et les règles par juridiction, et contrôle les projets de textes par rapport à elles. Chaque allégation garde l'historique de ses versions et ses dates de révision. Aujourd'hui, cette fonction est assurée par la <a class="textlink" href="/services/claim-library-build/">mise en place de la bibliothèque d'allégations</a>.` },
          { title: 'Approval Hub', status: 'En développement', body: "Oriente les contenus selon leur niveau de risque vers les relecteurs du marketing, du juridique, de la compliance et des partenaires, avec un horodatage et une piste d'audit." },
          { title: 'Partner Portal', status: 'Prévu', body: 'Permet à une fintech de soumettre un contenu une seule fois, à chaque banque partenaire de le relire selon ses propres règles, et enregistre chaque validation. Il est prévu après les premiers pilotes avec des banques et des fintechs.' },
          { title: 'Measurement Layer', status: 'Prévu', body: `Indique le coût d'acquisition complet par produit et par canal, temps de relecture et commissions versées aux partenaires compris. Le reporting de la fidélisation et de l'uplift se connecte à vos outils d'analyse et à votre CRM. Aujourd'hui, ce reporting fait partie du <a class="textlink" href="/services/managed-growth/">mandat mensuel de croissance</a>.` },
        ],
      },
      {
        type: 'table',
        tone: 'tint',
        h2: 'Ce que signifie chaque état',
        cols: ['État', 'Signification'],
        rows: [
          ['En service', 'Disponible pour tous les clients.'],
          ['Pilote', 'Disponible pour certains clients.'],
          ['En développement', "En cours de construction à partir du processus manuel que nous appliquons aujourd'hui."],
          ['Prévu', 'Périmètre défini, construction non commencée.'],
        ],
      },
      { type: 'cta', h2: 'Demandez un pilote', body: "Un module en pilote est disponible pour certains clients. D'ici là, sa fonction vous est fournie dans le cadre de nos services.", label: 'Demander un pilote' },
    ],
  },
  {
    path: '/method/',
    crumbs: [],
    crumbLabel: 'Méthode',
    title: "Méthode Revault : étapes et critères d'allégation",
    description: "La méthode Revault : étapes du diagnostic, critères d'allégation, niveaux de risque, registre des validations et remise à votre équipe.",
    h1: 'La méthode de travail de Revault',
    sub: "La méthode comprend quatre étapes, une série de critères d'allégation et trois niveaux de risque. Chaque validation est enregistrée : votre équipe et vos relecteurs voient qui a décidé quoi, et quand. Vos juristes et votre équipe compliance décident de ce qui est conforme, et Revault applique et tient à jour les critères qu'ils approuvent.",
    actions: [book, { label: 'Voir les niveaux de risque', href: '#risk-tiers' }],
    blocks: [
      {
        type: 'rail',
        h2: 'Les quatre étapes',
        items: [
          { title: 'Diagnostiquer', body: 'Examiner les risques, le processus et les coûts actuels.' },
          { title: 'Mettre en place', body: "Créer la bibliothèque d'allégations, les niveaux de risque et le circuit de validation." },
          { title: 'Lancer', body: 'Faire passer les premières campagnes par le nouveau processus et mesurer.' },
          { title: 'Remettre', body: 'Transmettre la bibliothèque, le circuit de validation et le reporting à votre équipe, ou passer à un mandat mensuel.' },
        ],
      },
      {
        type: 'checks',
        h2: "Nos critères d'allégation",
        aside: 'Chaque allégation que nous approuvons doit remplir les quatre conditions.',
        items: [
          'Exacte, avec des preuves qui peuvent être produites sur demande.',
          'Loyale, claire et non trompeuse sur le marché et le canal concernés.',
          'Accompagnée des mentions que les règles exigent pour ce produit.',
          'Confiée à une personne nommée, qui la revoit selon un calendrier fixé.',
        ],
      },
      {
        type: 'table',
        id: 'risk-tiers',
        tone: 'tint',
        h2: 'Niveaux de risque',
        cols: ['Niveau', "Ce qu'il couvre", 'Qui valide'],
        rows: [
          ['Risque faible', 'Contenus de marque généraux, sans allégation sur un produit.', 'Marketing'],
          ['Risque moyen', 'Allégations sur un produit qui reprennent des formulations approuvées.', 'Marketing et compliance'],
          ['Risque élevé', "Allégations nouvelles, chiffres de performance et tout contenu évoquant un rendement ou la stabilité d'un placement.", 'Relecture juridique obligatoire'],
        ],
      },
      {
        type: 'split',
        h2: 'Registre des validations',
        body: ['Chaque validation consigne le support, la version, les allégations concernées, le relecteur, la décision et la date. Les enregistrements sont conservés pendant la durée que vos règles exigent.'],
      },
      {
        type: 'faq',
        items: [
          { q: 'Qui décide de ce qui est conforme ?', a: "Vos juristes et votre équipe compliance. Revault applique et tient à jour les critères qu'ils approuvent." },
          { q: 'Pouvez-vous garantir une validation ?', a: 'Non. Nous réduisons le risque de refus et accélérons le processus. Les décisions de validation restent à vos relecteurs et aux autorités de surveillance.' },
        ],
      },
      { type: 'cta', h2: 'Voyez la méthode appliquée à vos campagnes', body: "Le diagnostic est la première étape : il applique les critères d'allégation et les niveaux de risque aux campagnes que vous menez actuellement.", label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/research/',
    crumbs: [],
    crumbLabel: 'Recherche',
    title: 'Recherche sur le marketing réglementé : Revault',
    description: "Recherches sur les règles de la publicité financière, les coûts d'acquisition et la confiance dans la finance, avec sources, méthodes et limites.",
    h1: 'Recherche sur le marketing réglementé',
    sub: "Nous publions nos recherches sur les règles de la publicité financière, les coûts d'acquisition et la confiance dans la finance avec leurs sources, leurs dates et leurs limites. Lorsque les preuves sont minces, nous le disons. Les articles sont revus lorsque les règles qu'ils décrivent changent.",
    actions: [{ label: 'Lire le guide suisse', href: '/research/financial-promotion-rules-switzerland/' }, { label: 'Voir nos exigences', href: '#standards' }],
    blocks: [
      {
        type: 'linkrows',
        h2: 'Articles',
        items: [
          { title: 'Les règles de la publicité financière en Suisse', body: "Comment les règles suisses sur la publicité financière, les allégations trompeuses et le marketing crypto s'appliquent aux équipes de croissance, avec les sources et les questions ouvertes.", href: '/research/financial-promotion-rules-switzerland/' },
        ],
      },
      {
        type: 'checks',
        id: 'standards',
        h2: 'Nos exigences en matière de recherche',
        items: [
          "Chaque affirmation renvoie à une source primaire lorsqu'il en existe une : texte de loi, publication d'une autorité de surveillance ou travail évalué par des pairs.",
          'Les chiffres provenant de fournisseurs ou du secteur sont signalés comme tels.',
          'Chaque article indique sa méthode et ses limites.',
        ],
      },
      { type: 'cta', h2: 'Appliquez ces recherches à vos campagnes', body: 'Le diagnostic contrôle vos campagnes en cours au regard des règles que décrivent ces articles, marché par marché.', label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/research/financial-promotion-rules-switzerland/',
    crumbs: [['Recherche', '/research/']],
    crumbLabel: 'Les règles de la publicité financière en Suisse',
    article: { published: null, reviewed: null },
    title: 'Règles de la publicité financière en Suisse : le guide',
    description: "Comment les règles suisses sur la publicité financière, les allégations trompeuses et le marketing crypto s'appliquent aux équipes de croissance.",
    h1: 'Les règles de la publicité financière en Suisse',
    sub: "La Suisse n'a pas de loi sur la publicité propre aux cryptoactifs, mais la publicité financière relève de la loi sur les services financiers (LSFin), et les allégations trompeuses de la loi fédérale contre la concurrence déloyale (LCD). Une modification portant sur le marketing crypto a été mise en consultation et reste en traitement. Ce guide est rédigé par Revault Research et ne constitue pas un conseil juridique.",
    actions: [{ label: 'Lire les règles', href: '#rules' }, book],
    blocks: [
      {
        type: 'prose',
        id: 'rules',
        html: `
<h2>Les règles applicables aujourd'hui</h2>
<ul>
<li>Selon la loi sur les services financiers (LSFin), la publicité pour des services financiers doit être désignée comme telle. La publicité pour des instruments financiers ne doit pas contredire le prospectus ni la feuille d'information de base, et doit y renvoyer lorsque la loi l'exige.</li>
<li>Selon la loi fédérale contre la concurrence déloyale (LCD), la publicité trompeuse sur les produits ou les services d'une entreprise est interdite.</li>
<li>La Commission Suisse pour la Loyauté publie des règles relatives à la loyauté dans la communication commerciale, qu'elle applique lors des plaintes. Pour les allégations climatiques, ses lignes directrices considèrent comme trompeuses, pour les produits financiers, les allégations de neutralité fondées sur des compensations carbone.</li>
</ul>
<h2>Le marketing crypto</h2>
<p>La Suisse n'a pas de régime distinct pour la publicité crypto. Les règles applicables dépendent de la qualification du cryptoactif. S'il s'agit d'une valeur mobilière, les règles de la LSFin s'appliquent.</p>
<p>Le Conseil fédéral a mené, d'octobre 2025 à février 2026, une consultation sur une modification qui introduirait des exigences de loyauté en matière de marketing et de publicité pour les émetteurs et les promoteurs de cryptoactifs. Nous mettrons cet article à jour lorsque la modification sera définitive.</p>
<h2>Les termes réservés aux établissements autorisés</h2>
<p>Seuls les établissements titulaires d'une autorisation bancaire peuvent se présenter comme une banque dans leur publicité, et eux seuls peuvent faire de la publicité pour l'acceptation de dépôts. Vérifiez chaque nom et chaque désignation dans vos campagnes.</p>
<h2>Ce que nous ne savons pas encore</h2>
<ul>
<li>Le texte définitif de la modification sur la publicité crypto.</li>
<li>La façon dont la Commission appliquera ses règles aux nouveaux formats de produits.</li>
</ul>
<h2>Sources</h2>
<ul>
<li>Loi sur les services financiers (LSFin)</li>
<li>Loi fédérale contre la concurrence déloyale (LCD)</li>
<li>Commission Suisse pour la Loyauté, règles relatives à la loyauté dans la communication commerciale</li>
<li>Consultation du Conseil fédéral sur les cryptoactifs, d'octobre 2025 à février 2026</li>
<li>Office fédéral de l'environnement (OFEV), recommandations sur les allégations climatiques</li>
</ul>`,
      },
      { type: 'cta', h2: 'Contrôlez vos campagnes suisses', body: 'La Suisse est le premier marché que couvre Revault, et le diagnostic examine vos campagnes en cours au regard des règles décrites ci-dessus.', label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/insights/',
    crumbs: [],
    crumbLabel: 'Notes pratiques',
    title: 'Notes pratiques sur le marketing réglementé : Revault',
    description: "Notes pratiques sur les règles de la publicité financière, les changements des plateformes et le brief d'une campagne que la compliance peut valider.",
    h1: 'Notes pratiques pour les marchés réglementés',
    sub: "Des articles courts et pratiques, destinés aux équipes de croissance et de compliance, sur les règles de la publicité financière, les changements de politique des plateformes et la rédaction d'un brief de campagne que la compliance peut valider. Chaque article indiquera sa date et celle de sa dernière révision. Les trois premiers articles sont prévus et figurent ci-dessous.",
    actions: [{ label: 'Lire les recherches', href: '/research/' }, book],
    blocks: [
      {
        type: 'rows',
        h2: 'Premiers articles prévus',
        items: [
          { title: 'Rédiger un brief de campagne que la compliance peut valider', status: 'Prévu', body: "Ce qu'un brief doit contenir avant de partir en relecture." },
          { title: 'Ce qui change quand une plateforme publicitaire restreint une catégorie', status: 'Prévu', body: "Ce qui arrive aux campagnes en cours, et ce qu'une équipe peut préparer avant qu'une restriction n'entre en vigueur." },
          { title: "Une liste de contrôle pour relire les contenus d'affiliés", status: 'Prévu', body: "Les points à vérifier dans le contenu d'un partenaire avant qu'il ne porte votre nom." },
        ],
      },
      { type: 'cta', h2: 'En attendant, lisez nos recherches plus longues', body: 'La bibliothèque de recherche réunit nos travaux sourcés, à commencer par le guide des règles de la publicité financière en Suisse.', label: 'Aller aux recherches', href: '/research/' },
    ],
  },
  {
    path: '/about/',
    crumbs: [],
    crumbLabel: 'À propos',
    title: "À propos de Revault : notre raison d'être",
    description: 'Pourquoi Revault existe, comment nous travaillons et ce que nous refusons de faire : la croissance des équipes réglementées, sans conseil juridique.',
    h1: 'Pourquoi Revault existe',
    sub: "Dans les marchés réglementés, les équipes de croissance perdent du temps et de l'argent à cause des retards de relecture, des campagnes interdites et des frictions avec les partenaires. La plupart des outils et des agences qu'elles utilisent ont été conçus pour un marketing non réglementé. Revault est conçu pour le travail qui se situe entre les deux : allégations, validations, partenaires et mesure.",
    actions: [book, { label: 'Lire la méthode', href: '/method/' }],
    blocks: [
      {
        type: 'checks',
        h2: 'Comment nous travaillons',
        items: [
          'Nous ne donnons pas de conseil juridique. Vos juristes restent responsables des règles que nous appliquons.',
          "Nous publions nos recherches et signalons ce qui n'est pas encore prouvé.",
          'Nous ne montrons aucun résultat de client que nous ne pouvons pas vérifier.',
        ],
      },
      {
        type: 'checks',
        negative: true,
        h2: 'Ce que nous refusons de faire',
        items: [
          'Créer des contenus qui imitent une organisation, une personne ou un document réels.',
          "Promettre la validation d'une autorité de surveillance, d'une plateforme ou d'une banque partenaire.",
          'Recourir pour nos clients à des influenceurs ou à de la publicité non déclarée.',
        ],
      },
      { type: 'cta', h2: 'Commencez par un diagnostic', body: "C'est une première mission délimitée, qui montre notre façon de travailler avant que l'une ou l'autre partie ne s'engage davantage.", label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/security-and-data/',
    crumbs: [],
    crumbLabel: 'Sécurité et données',
    draft: "Cette page sera mise en ligne lorsque chaque mesure qu'elle décrit sera en place et pourra être démontrée.",
    title: 'Sécurité et traitement des données : Revault',
    description: 'Comment Revault traite les données de ses clients, les accès, la conservation et les sous-traitants, selon le droit suisse et européen.',
    h1: 'Sécurité et traitement des données',
    sub: "Les acheteurs du secteur financier posent d'abord la question des données. Cette page indique ce que nous collectons, où les données sont stockées, qui peut y accéder et combien de temps nous les conservons. Elle est revue avant chaque nouvelle version et chaque fois que nos sous-traitants changent.",
    actions: [book, { label: 'Protection des données', href: '/legal/privacy/' }],
    blocks: [
      {
        type: 'rows',
        h2: 'Ce que cette page indiquera',
        items: [
          { title: 'Les données collectées et leur finalité', status: 'À compléter', body: 'Les catégories de données de clients et de données personnelles que nous détenons, et la finalité de chacune.' },
          { title: 'Base juridique', status: 'À compléter', body: "Selon la loi fédérale sur la protection des données (LPD) et, lorsqu'il s'applique, le RGPD." },
          { title: 'Stockage et hébergement', status: 'À compléter', body: 'Le lieu de stockage et les hébergeurs.' },
          { title: 'Contrôle des accès', status: 'À compléter', body: 'Qui peut accéder aux données des clients, et comment le personnel est formé.' },
          { title: 'Conservation et suppression', status: 'À compléter', body: 'Les durées de conservation, et la suppression sur demande.' },
          { title: 'Sous-traitants', status: 'À compléter', body: "La liste complète, avec la finalité et le lieu d'établissement de chacun." },
          { title: 'Gestion des incidents', status: 'À compléter', body: 'Le contact à qui signaler un incident.' },
        ],
      },
      { type: 'cta', h2: 'Posez-nous directement vos questions sur les données', body: "Tant que cette page n'est pas complète, nous répondons par écrit aux questions sur les données dans le cadre du périmètre du diagnostic.", label: 'Réserver un diagnostic' },
    ],
  },
  {
    path: '/book-a-diagnostic/',
    crumbs: [],
    crumbLabel: 'Réserver un diagnostic',
    title: 'Réserver un diagnostic de croissance et de conformité',
    description: 'Réservez un diagnostic à prix fixe de vos campagnes, des contenus de vos partenaires et de vos validations. Quatre à six semaines, avec un plan priorisé.',
    h1: 'Réserver un diagnostic',
    sub: 'Un court appel permet de vérifier que le diagnostic vous convient, et vous recevez ensuite un périmètre écrit, que nous travaillions ensemble ou non. Le diagnostic dure quatre à six semaines, à prix fixe, et aboutit à un registre des risques, à une liste de corrections classées par priorité et à un plan à 90 jours. Nous répondons dans les deux jours ouvrables.',
    actions: [{ label: 'Remplir la demande', href: '#request' }, { label: 'Ce que comprend le diagnostic', href: '/services/diagnostic/' }],
    blocks: [
      {
        type: 'form',
        id: 'request',
        h2: 'Dites-nous où vous en êtes',
        body: [
          "Nous ne demandons que ce qu'il nous faut pour vous répondre : qui vous êtes, où vous êtes actifs et ce que vous cherchez à corriger.",
          'Revault ne fournit pas de conseil juridique. Vos juristes restent responsables des règles que nous appliquons.',
        ],
      },
    ],
  },
  {
    path: '/book-a-diagnostic/thanks/',
    noindex: true,
    crumbs: [['Réserver un diagnostic', '/book-a-diagnostic/']],
    crumbLabel: 'Demande reçue',
    title: 'Demande reçue : Revault',
    description: "Votre demande de diagnostic est parvenue à Revault. Nous répondons dans les deux jours ouvrables pour convenir d'un court appel.",
    h1: 'Votre demande nous est parvenue',
    sub: "Nous vous répondons dans les deux jours ouvrables pour convenir d'un court appel. Après cet appel, vous recevez un périmètre écrit pour le diagnostic, que nous travaillions ensuite ensemble ou non. En attendant, la page consacrée à la méthode explique les quatre étapes, les critères d'allégation et les niveaux de risque.",
    actions: [{ label: 'Lire la méthode', href: '/method/' }, { label: "Retour à la page d'accueil", href: '/' }],
    blocks: [{ type: 'cta', h2: 'Voyez ce que couvre le diagnostic', body: "La page du service indique ce qui est compris, ce que vous recevez et ce qu'un diagnostic laisse à vos juristes.", label: 'Voir le diagnostic', href: '/services/diagnostic/' }],
  },
];
