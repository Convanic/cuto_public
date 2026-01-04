// French Translations
import { TranslationKeys } from './de';

export const fr: TranslationKeys = {
  // Navigation
  nav: {
    home: 'Accueil',
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    useCases: 'Cas d\'usage',
    caseStudies: 'Études de cas',
    compare: 'Comparer',
    partners: 'Partenaires',
    about: 'À propos',
    contact: 'Contact',
    docs: 'Documentation',
    status: 'Statut',
    changelog: 'Journal des modifications',
    login: 'Connexion',
    requestDemo: 'Demander une démo',
    password: 'Mot de passe',
    allFeaturesOverview: 'Aperçu de toutes les fonctionnalités',
    featureLabels: {
      dashboards: '80+ Tableaux de bord',
      templates: '75+ Modèles',
      bpmn: 'Éditeur de processus BPMN',
      migration: 'Migration de données',
      harmonization: 'Harmonisation des données',
      cutover: 'Gestion du cutover',
      risks: 'Gestion des risques et des problèmes',
      resources: 'Planification des ressources',
    },
  },
  
  // Common
  common: {
    learnMore: 'En savoir plus',
    getStarted: 'Commencer',
    readMore: 'Lire la suite',
    viewAll: 'Voir tout',
    back: 'Retour',
    next: 'Suivant',
    submit: 'Soumettre',
    cancel: 'Annuler',
    save: 'Enregistrer',
    search: 'Rechercher',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    yes: 'Oui',
    no: 'Non',
    close: 'Fermer',
    download: 'Télécharger',
    subscribe: 'S\'abonner',
    email: 'E-mail',
    phone: 'Téléphone',
    name: 'Nom',
    company: 'Entreprise',
    message: 'Message',
  },

  // Cookie Consent Banner
  cookies: {
    title: '🍪 Nous respectons votre vie privée',
    description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies. Vous pouvez également personnaliser vos préférences.',
    learnMore: 'En savoir plus',
    customize: 'Personnaliser',
    hideDetails: 'Masquer les détails',
    rejectAll: 'Tout refuser',
    acceptAll: 'Tout accepter',
    savePreferences: 'Enregistrer les préférences',
    preferencesTitle: 'Préférences de cookies',
    necessary: {
      title: 'Nécessaires',
      description: 'Essentiels au fonctionnement du site web. Ne peuvent pas être désactivés.',
      badge: 'Toujours actif',
    },
    analytics: {
      title: 'Analytiques',
      description: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site web.',
    },
    functional: {
      title: 'Fonctionnels',
      description: 'Mémorisent vos préférences et personnalisent votre expérience.',
    },
    marketing: {
      title: 'Marketing',
      description: 'Affichent des publicités pertinentes et mesurent l\'efficacité des campagnes.',
    },
  },
  
  // Homepage
  home: {
    hero: {
      badge: 'Gestion de projet SAP réinventée',
      title: 'Planifiez, gérez et exécutez vos projets SAP plus intelligemment – avec CUTO',
      subtitle: 'Accélérez vos projets SAP avec des modèles préconfigurés, une estimation réaliste des efforts et des tableaux de bord intelligents — tout en une plateforme.',
      cta: {
        primary: 'Obtenir l\'accès à vie',
        secondary: 'Voir comment ça marche',
      },
    },
    stats: {
      projects: 'Projets réussis',
      timeSaved: 'Temps économisé',
      satisfaction: 'Satisfaction client',
      countries: 'Pays dans le monde',
    },
    features: {
      title: 'Tout ce dont vous avez besoin pour des projets SAP réussis',
      subtitle: 'CUTO combine des méthodes éprouvées avec une technologie moderne pour une transparence maximale des projets.',
    },
    problem: {
      title: 'Les projets SAP sont complexes',
      subtitle: 'De nombreux projets échouent en raison d\'un manque de structure, de responsabilités floues et d\'un manque de transparence.',
      problems: [
        'Manque de standardisation',
        'Responsabilités floues',
        'Manque de transparence',
        'Retards et dépassements de budget',
      ],
    },
    solution: {
      title: 'CUTO résout ces problèmes',
      subtitle: 'Avec des processus structurés, des rôles clairs et des informations en temps réel.',
    },
    targetAudience: {
      title: 'Pour chaque groupe cible',
      subtitle: 'CUTO accompagne tous ceux qui souhaitent gérer avec succès leurs projets SAP',
      tabs: {
        customers: {
          label: 'Clients SAP',
          title: 'Pour les clients SAP',
          description: 'CUTO vous accompagne en tant que client SAP dans la gestion professionnelle et la mise en œuvre réussie de vos projets SAP internes.',
          whyTitle: 'Pourquoi CUTO pour les clients SAP ?',
          benefits: [
            'Gestion de projet structurée sans coûts de conseil externes',
            'Modèles éprouvés pour les projets SAP typiques de votre entreprise',
            'Contrôle total sur l\'avancement du projet, les efforts et les risques',
            'Structures de projet réutilisables pour les initiatives futures',
            'Communication transparente avec les parties prenantes internes'
          ]
        },
        consultancies: {
          label: 'Cabinets de conseil SAP',
          title: 'Pour les cabinets de conseil SAP',
          description: 'Augmentez l\'efficacité de vos projets de conseil et fournissez des résultats structurés et traçables à vos clients.',
          whyTitle: 'Pourquoi CUTO pour les cabinets de conseil SAP ?',
          benefits: [
            'Initialisation de projet plus rapide avec des modèles préconfigurés',
            'Présentations de projet professionnelles pour les clients',
            'Processus standardisés pour une exécution de projet cohérente',
            'Meilleure planification des ressources et estimation des efforts',
            'Meilleures pratiques réutilisables pour des projets similaires'
          ]
        },
        freelancers: {
          label: 'Freelances',
          title: 'Pour les freelances',
          description: 'En tant que freelance, vous bénéficiez d\'outils de gestion de projet professionnels qui mettent en valeur votre expertise.',
          whyTitle: 'Pourquoi CUTO pour les freelances ?',
          benefits: [
            'Gestion de projet professionnelle même en tant qu\'individu',
            'Démarrage rapide dans de nouveaux projets avec des modèles',
            'Estimations d\'efforts crédibles pour vos clients',
            'Documentation structurée de votre travail',
            'Structures de projet réutilisables pour des missions similaires'
          ]
        },
        users: {
          label: 'Utilisateurs SAP',
          title: 'Pour les utilisateurs SAP',
          description: 'En tant qu\'utilisateur SAP, vous obtenez les outils pour gérer vos projets SAP de manière autonome et réussie.',
          whyTitle: 'Pourquoi CUTO pour les utilisateurs SAP ?',
          benefits: [
            'Gestion de projet indépendante sans support externe',
            'Meilleures pratiques pour les projets utilisateurs SAP typiques',
            'Structuration claire même pour les petits projets',
            'Soutien à l\'apprentissage grâce à des modèles prédéfinis',
            'Documentation traçable pour votre équipe'
          ]
        }
      }
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Découvrez comment CUTO transforme les projets SAP.',
    },
    faq: {
      title: 'Questions fréquemment posées',
      subtitle: 'Trouvez des réponses aux questions les plus importantes sur CUTO.',
    },
    cta: {
      title: 'Prêt pour une gestion de projet SAP structurée ?',
      subtitle: 'Contactez-nous pour une démo et découvrez comment CUTO peut soutenir votre prochain projet SAP.',
      button: 'Demander une démo',
    },
    newsletter: {
      title: 'Checklist projet SAP',
      subtitle: 'Obtenez notre checklist complète couvrant toutes les phases de l\'implémentation SAP. Utilisée par plus de 500 chefs de projet dans le monde.',
      placeholder: 'Votre e-mail professionnel',
      button: 'Télécharger la checklist gratuite',
      disclaimer: 'En vous abonnant, vous acceptez de recevoir des mises à jour occasionnelles. Désabonnement possible à tout moment.',
      freeDownload: 'Téléchargement gratuit',
      checklistItems: [
        'Critères d\'évaluation pré-projet',
        'Checklist de préparation au go-live',
        'Cadre d\'identification des risques',
        'Modèle de planification de cutover',
      ],
      checklistCount: 'Éléments de la checklist',
      successMessage: '🎉 Merci ! Vérifiez votre e-mail pour la checklist projet SAP.',
      errorMessage: 'Veuillez entrer votre adresse e-mail.',
      sending: 'Envoi en cours...',
      checkEmail: '✓ Vérifiez votre e-mail !',
      footerTitle: 'Restez informé',
      footerSubtitle: 'Recevez des conseils SAP et les actualités CUTO.',
      footerPlaceholder: 'Votre e-mail',
      subscribing: 'Inscription...',
      subscribed: '✓ Inscrit !',
      subscribe: 'S\'abonner',
      compactTitle: 'Conseils projet SAP',
      compactSubtitle: 'Perspectives hebdomadaires pour des projets SAP réussis.',
    },
    explainerVideo: {
      title: 'Voir CUTO en action',
      subtitle: 'Découvrez en 90 secondes comment CUTO transforme vos projets SAP.',
      comingSoon: 'Vidéo à venir',
      badge: 'Voir la démo',
    },
    trustBadges: {
      gdpr: 'Conforme RGPD',
      madeInGermany: 'Made in Germany',
      euHosting: 'Hébergement UE',
      sapCertified: 'Certifié SAP',
    },
    socialProof: {
      title: 'Approuvé par les professionnels SAP des entreprises leaders',
    },
    statsLabels: {
      dashboards: 'Tableaux de bord',
      templates: 'Modèles',
      dashboardCategories: 'Catégories de tableaux de bord',
      processLevels: 'Niveaux de processus',
    },
    problemStatement: {
      title: 'Les projets SAP sont complexes. Vos outils ne devraient pas l\'être.',
      subtitle: 'Nous comprenons vos défis – et avons créé CUTO pour les résoudre.',
      problem: 'Le problème',
      problems: {
        pmoOverhead: {
          title: 'Surcharge PMO élevée',
          description: 'Le suivi manuel, les fichiers Excel sans fin et les informations dispersées drainent la productivité de votre équipe.',
        },
        doubleEntry: {
          title: 'Double saisie des données',
          description: 'Maintenir plusieurs systèmes conduit à des données incohérentes, du temps perdu et des erreurs coûteuses.',
        },
        noDashboard: {
          title: 'Pas de tableau de bord central',
          description: 'Sans visibilité en temps réel, les risques passent inaperçus et les décisions sont basées sur des informations obsolètes.',
        },
      },
      solution: 'CUTO résout ces trois problèmes – dans une plateforme unifiée',
    },
    howItWorks: {
      title: 'Comment ça marche – Comment CUTO vous accompagne',
      subtitle: 'CUTO.ai vous guide tout au long du cycle de projet SAP – de la première idée au go-live. En quatre étapes, la complexité devient un plan de projet clair et gérable.',
      steps: {
        templates: {
          title: '75+ Modèles',
          description: 'Capturez votre projet SAP en quelques minutes. Choisissez parmi des modèles prédéfinis pour les types de projets SAP typiques. CUTO reconnaît automatiquement les phases, activités et rôles pertinents et pose les bases de votre plan de projet structuré.',
        },
        planning: {
          title: 'Planification complète',
          description: 'Estimations d\'effort réalistes. Basé sur vos entrées (périmètre, systèmes, taille de l\'équipe), CUTO.ai crée une estimation d\'effort solide – basée sur les données, traçable et ajustable. Plus de conjectures, mais des bases de planification fiables.',
        },
        control: {
          title: 'Contrôle total',
          description: 'Gardez le contrôle total à tout moment. Les tableaux de bord vous montrent la progression, les risques et les dépendances en temps réel. Les mises à jour automatiques et les alertes vous aident à définir correctement les priorités – avant que les problèmes ne surviennent.',
        },
        goLive: {
          title: 'Go-Live réussi',
          description: 'De la planification à l\'exécution – sereinement jusqu\'au go-live. CUTO.ai vous accompagne jusqu\'à la fin : avec des recommandations d\'action claires, des rapports de statut automatisés et une documentation des leçons apprises. Ainsi, les projets sont non seulement terminés avec succès mais améliorés durablement.',
        },
      },
    },
    screenshot: {
      title: 'Tableau de bord CUTO',
      subtitle: 'Gestion de projet complète en un coup d\'œil',
    },
    integrations: {
      title: 'Intégrations transparentes',
      subtitle: 'Connectez CUTO à vos outils existants. Importez des données, synchronisez la progression et gardez tout en cohérence.',
      tools: {
        jira: 'Jira',
        sapAlm: 'SAP ALM',
        msProject: 'MS Project',
        slack: 'Slack',
        teams: 'Teams',
        excel: 'Excel/CSV',
      },
      apiAvailable: 'API REST disponible',
      requestIntegration: 'Demander une intégration personnalisée →',
    },
    useCases: {
      title: 'Pour tous les types de projets SAP',
      subtitle: 'CUTO vous accompagne pour différents types de projets SAP',
      items: {
        greenfield: {
          title: 'Greenfield, Brownfield ou Hybride',
          description: 'Que ce soit Greenfield, Brownfield ou Hybride – pour la transformation business.',
        },
        implementation: {
          title: 'Implémentation, Migration ou Cutover',
          description: 'Gestion de projet professionnelle pour les implémentations SAP. Planification, gestion et contrôle dans un seul outil.',
        },
        methodology: {
          title: 'SAP Activate, Hybride, ASAP, Agile, Cascade',
          description: 'Migration de données sécurisée et structurée. Planifiez chaque étape et minimisez les risques.',
        },
        scope: {
          title: 'Programme, Roadmap, Portfolio ou Projet unique',
          description: 'Planification et exécution précises du cutover. De la préparation au go-live réussi.',
        },
      },
    },
    testimonialsList: [
      {
        quote: 'CUTO a transformé la façon dont nous gérons notre déploiement S/4HANA. Les modèles nous ont fait gagner des semaines de planification, et les tableaux de bord nous donnent une visibilité en temps réel que nous n\'avions jamais eue.',
        author: 'Michael Krüger',
        role: 'SAP Program Manager, Acme Corp',
        initials: 'MK',
      },
      {
        quote: 'Enfin un outil qui comprend la complexité des projets SAP ! La fonction d\'estimation d\'effort seule a rentabilisé tout l\'investissement. Fortement recommandé pour tout cabinet de conseil SAP.',
        author: 'Sarah Weber',
        role: 'Partner, TechGlobal Consulting',
        initials: 'SW',
      },
      {
        quote: 'Nous avons réduit notre surcharge PMO de 40% après être passés à CUTO. La gestion du cutover est exceptionnelle – notre dernier go-live a été le plus fluide que nous ayons jamais eu.',
        author: 'Thomas Bauer',
        role: 'CIO, InnoSystems GmbH',
        initials: 'TB',
      },
    ],
    faqList: [
      {
        question: 'Qu\'est-ce qui différencie CUTO de JIRA ou SAP Cloud ALM ?',
        answer: 'CUTO est conçu spécifiquement pour les projets SAP. Alors que JIRA est un outil générique et que SAP ALM se concentre sur les aspects techniques, CUTO fournit une gestion de projet de bout en bout avec des modèles spécifiques SAP, une estimation d\'effort basée sur des données de projets SAP réels, et une intégration transparente avec les deux outils.',
      },
      {
        question: 'Puis-je migrer mes données de projet existantes vers CUTO ?',
        answer: 'Oui ! CUTO prend en charge l\'import de données depuis Excel, JIRA et SAP Cloud ALM. Notre équipe d\'onboarding vous aidera à migrer vos projets existants et à personnaliser les modèles selon votre flux de travail actuel.',
      },
      {
        question: 'CUTO est-il adapté aux petits projets SAP ?',
        answer: 'Absolument. CUTO s\'adapte des implémentations de projet unique aux programmes multi-systèmes complexes. Notre plan Starter est parfait pour les projets plus petits, tandis que les plans Professional et Enterprise supportent une complexité illimitée.',
      },
      {
        question: 'Combien de temps faut-il pour démarrer ?',
        answer: 'La plupart des équipes sont opérationnelles en une journée. Choisissez simplement un modèle, personnalisez vos paramètres de projet, et CUTO génère votre structure de projet complète. Pas de configuration longue requise.',
      },
      {
        question: 'Proposez-vous des intégrations avec d\'autres outils ?',
        answer: 'Oui ! CUTO s\'intègre avec JIRA, SAP Cloud ALM, Microsoft Project, et des outils de communication courants comme Slack et Teams. Les plans Enterprise incluent un accès API personnalisé pour des intégrations supplémentaires.',
      },
      {
        question: 'Quel type de support offrez-vous ?',
        answer: 'Tous les plans incluent le support par e-mail et l\'accès à notre base de connaissances. Les plans Professional ajoutent le support par chat, tandis que les clients Enterprise bénéficient d\'un success manager dédié et de temps de réponse garantis par SLA.',
      },
    ],
  },
  
  // Footer
  footer: {
    description: 'Gestion de projet structurée pour les projets SAP. De la transformation au cutover réussi.',
    navigation: 'Navigation',
    contact: 'Contact',
    legal: 'Mentions légales',
    imprint: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',
    cookies: 'Politique des cookies',
    stayUpdated: 'Restez informé',
    newsletterText: 'Recevez des conseils projets SAP et les actualités CUTO.',
    copyright: '© {year} CUTO. Tous droits réservés.',
    madeWith: 'Fait avec ❤️ pour la gestion de projets SAP',
  },
  
  // Status Page
  status: {
    title: 'Statut CUTO',
    operational: 'Opérationnel',
    degraded: 'Performance dégradée',
    partialOutage: 'Panne partielle',
    majorOutage: 'Panne majeure',
    maintenance: 'En maintenance',
    lastUpdated: 'Dernière mise à jour',
    liveStats: {
      title: 'Statistiques en direct',
      projects: 'Projets',
      workstreams: 'Workstreams',
      tasks: 'Tâches',
      users: 'Utilisateurs',
      completedToday: 'Complétées aujourd\'hui',
      activeProjects: 'Projets actifs',
      updateInfo: 'Statistiques mises à jour toutes les 5 secondes',
    },
    uptime: {
      title: 'Disponibilité des 90 derniers jours',
      overall: 'Disponibilité globale',
    },
    components: {
      title: 'Composants du service',
    },
    incidents: {
      title: 'Incidents passés',
      noIncidents: 'Aucun incident',
      noIncidentsDesc: 'Aucun incident significatif ces 90 derniers jours.',
    },
    subscribe: {
      title: 'Recevoir les mises à jour',
      subtitle: 'Soyez notifié immédiatement en cas de pannes ou de maintenances planifiées.',
      button: 'S\'abonner aux mises à jour',
    },
  },
  
  // Language
  language: {
    select: 'Choisir la langue',
    current: 'Langue actuelle',
  },

  // Features
  features: {
    overview: {
      title: 'Tout ce dont vous avez besoin pour les projets SAP',
      subtitle: 'CUTO fournit une boîte à outils complète pour la gestion de projets SAP – de la planification initiale au go-live et au-delà. Découvrez comment chaque fonctionnalité vous aide à réaliser des projets réussis.',
      screenshotTitle: 'Aperçu de la plateforme CUTO',
      screenshotSubtitle: 'Gestion de projet complète en un coup d\'œil',
      additionalCapabilities: 'Fonctionnalités supplémentaires',
      cta: {
        title: 'Prêt à voir CUTO en action ?',
        subtitle: 'Planifiez une démo personnalisée et découvrez comment CUTO peut transformer votre gestion de projets SAP.',
        demo: 'Planifier une démo',
        pricing: 'Voir les tarifs',
      },
    },
    categories: {
      dashboards: {
        name: '80+ Tableaux de bord',
        description: 'Visibilité en temps réel sur chaque aspect de votre projet SAP. Des résumés exécutifs aux analyses techniques approfondies.',
        highlights: ['KPIs Exécutifs', 'Cartes de risques', 'Suivi du progrès', 'Monitoring Cutover'],
      },
      templates: {
        name: '75+ Modèles',
        description: 'Modèles de projet éprouvés basés sur la méthodologie SAP Activate et une expérience d\'implémentation réelle.',
        highlights: ['Implémentation S/4HANA', 'Migration de données', 'Modèles de modules', 'Plans Cutover'],
      },
      bpmn: {
        name: 'Éditeur de processus BPMN',
        description: 'Documentez vos processus métier avec notre éditeur BPMN 2.0 intégré. Traçabilité complète vers les activités du projet.',
        highlights: ['Éditeur Drag & Drop', 'Hiérarchie à 6 niveaux', 'Contrôle de version', 'Export BPMN 2.0'],
      },
      migration: {
        name: 'Migration de données',
        description: 'Outils complets de validation et de qualité des données. Détectez les problèmes avant qu\'ils ne deviennent des problèmes de go-live.',
        highlights: ['Catalogue de données', 'Moteur de validation', 'Contrôles qualité', 'Réconciliation'],
      },
      harmonization: {
        name: 'Harmonisation des données',
        description: 'Identifiez et nettoyez les doublons dans vos données sources avant la migration. Algorithmes de matching intelligents et sélection du Golden Record.',
        highlights: ['Détection de doublons', 'Matching flou', 'Golden Record', 'Approbation 4 yeux'],
      },
      cutover: {
        name: 'Gestion du Cutover',
        description: 'Planifiez, répétez et exécutez votre go-live avec précision. Surveillance en temps réel et aide à la décision.',
        highlights: ['Checklists', 'Suivi Timeline', 'Support Go/No-Go', 'Hypercare'],
      },
      risks: {
        name: 'Gestion des risques et problèmes',
        description: 'Identification proactive des risques et suivi des problèmes. Gardez votre projet sur les rails avec une visibilité totale.',
        highlights: ['Registre des risques', 'Carte thermique', 'Suivi des mesures', 'Workflow d\'escalade'],
      },
      resources: {
        name: 'Planification des ressources',
        description: 'Optimisez l\'allocation de l\'équipe et suivez la capacité. Feuille de temps intégrée pour un chiffrage précis du projet.',
        highlights: ['Planification capacité', 'Matrice de compétences', 'Feuille de temps', 'Suivi utilisation'],
      },
    },
    additionalCapabilities: {
      gantt: { title: 'Diagrammes de Gantt & Timeline', desc: 'Timeline de projet visuelle avec dépendances, jalons et mise en évidence du chemin critique.' },
      budget: { title: 'Suivi du budget', desc: 'Suivi des coûts prévus vs réels, analyse du taux de consommation et prévision jusqu\'à l\'achèvement.' },
      notifications: { title: 'Notifications & Alertes', desc: 'Notifications par e-mail pour les attributions de tâches, les éléments en retard et les rappels de jalons.' },
      export: { title: 'Export & Reporting', desc: 'Export vers Excel, PDF ou PowerPoint. Génération automatisée de rapports de statut.' },
      access: { title: 'Accès basé sur les rôles', desc: 'Contrôlez qui voit quoi avec des permissions granulaires pour les rôles d\'équipe.' },
      integrations: { title: 'Intégrations', desc: 'Accès API pour l\'intégration avec Jira, ServiceNow et autres outils d\'entreprise.' },
    },
    // Feature: Dashboards
    dashboards: {
      badge: 'Tableaux de bord préconfigurés',
      title: 'Tableaux de bord et rapports exécutifs',
      subtitle: 'Prenez des décisions basées sur les données avec notre bibliothèque complète de tableaux de bord. Des résumés exécutifs aux analyses techniques – toutes les métriques en un coup d\'œil.',
      screenshotTitle: 'Tableau de bord exécutif',
      screenshotSubtitle: 'Vue d\'ensemble en temps réel de la santé du projet',
      stats: {
        dashboards: 'Tableaux de bord',
        categories: 'Catégories',
        customizable: 'Personnalisable',
        realtime: 'Temps réel',
      },
      keyBenefits: {
        realtime: { title: 'Mises à jour en temps réel', desc: 'Tous les tableaux de bord se mettent à jour automatiquement lorsque les données du projet changent' },
        mobile: { title: 'Optimisé mobile', desc: 'Accédez à l\'état de votre projet depuis n\'importe quel appareil' },
        export: { title: 'Export & Partage', desc: 'Exportez en PDF, Excel ou partagez des liens en direct avec les parties prenantes' },
      },
      categoriesLabel: 'Catégories',
      dashboardsLabel: 'tableaux de bord',
      categories: {
        executive: {
          name: 'Exécutif & Stratégique',
          dashboards: [
            { id: 'EXE-001', name: 'Tableau de bord santé projet', desc: 'État global du projet avec système de feux pour le Comité de pilotage' },
            { id: 'EXE-002', name: 'Résumé exécutif', desc: 'KPIs haut niveau, état des jalons, principaux risques pour la direction' },
            { id: 'EXE-003', name: 'Alignement stratégique', desc: 'Alignement des résultats du projet avec les objectifs stratégiques' },
            { id: 'EXE-004', name: 'Réalisation de valeur', desc: 'Suivi du business case, mesure du ROI' },
            { id: 'EXE-005', name: 'Portfolio', desc: 'Vue d\'ensemble multi-projets pour les programmes' },
          ]
        },
        time: {
          name: 'Gestion du temps & Planification',
          dashboards: [
            { id: 'TIM-001', name: 'Vue Gantt', desc: 'Timeline visuelle avec jalons et dépendances' },
            { id: 'TIM-002', name: 'Suivi des jalons', desc: 'État des jalons et analyse des tendances' },
            { id: 'TIM-003', name: 'Chemin critique', desc: 'Visualisation des activités critiques' },
            { id: 'TIM-004', name: 'Analyse des retards', desc: 'Analyse des causes racines des retards' },
            { id: 'TIM-005', name: 'Progrès par phase', desc: 'Avancement par phase de projet' },
            { id: 'TIM-006', name: 'Comparaison baseline', desc: 'Comparaison planifié vs réel' },
          ]
        },
        budget: {
          name: 'Budget & Finance',
          dashboards: [
            { id: 'BUD-001', name: 'Vue d\'ensemble budget', desc: 'Budget total avec comparaison planifié/réel' },
            { id: 'BUD-002', name: 'Taux de consommation', desc: 'Consommation du budget dans le temps' },
            { id: 'BUD-003', name: 'Coûts par workstream', desc: 'Répartition des coûts par workstream' },
            { id: 'BUD-004', name: 'Prévisions', desc: 'Projection des coûts jusqu\'à la fin du projet' },
            { id: 'BUD-005', name: 'Voyages & Frais', desc: 'Contrôle des frais de déplacement' },
            { id: 'BUD-006', name: 'Suivi coûts fournisseurs', desc: 'Coûts externes et dépenses contractors' },
            { id: 'BUD-007', name: 'Analyse des écarts', desc: 'Analyse des écarts avec causes' },
          ]
        },
        resources: {
          name: 'Ressources & Équipe',
          dashboards: [
            { id: 'RES-001', name: 'Allocation ressources', desc: 'Vue d\'ensemble de l\'allocation des membres de l\'équipe' },
            { id: 'RES-002', name: 'Matrice de compétences', desc: 'Compétences et expertise dans l\'équipe' },
            { id: 'RES-003', name: 'Planification capacité', desc: 'Disponibilité et utilisation' },
            { id: 'RES-004', name: 'Statut onboarding', desc: 'Intégration des nouveaux membres' },
            { id: 'RES-005', name: 'Conflits ressources', desc: 'Sur-allocation et conflits' },
            { id: 'RES-006', name: 'Ressources externes', desc: 'Vue contractors et consultants' },
            { id: 'RES-007', name: 'Performance équipe', desc: 'Métriques de productivité' },
          ]
        },
        risks: {
          name: 'Risques & Problèmes',
          dashboards: [
            { id: 'RSK-001', name: 'Registre des risques', desc: 'Tous les risques avec probabilité et impact' },
            { id: 'RSK-002', name: 'Carte thermique risques', desc: 'Matrice visuelle des risques' },
            { id: 'RSK-003', name: 'Suivi des problèmes', desc: 'Problèmes ouverts et escalades' },
            { id: 'RSK-004', name: 'Tendance risques', desc: 'Évolution des risques dans le temps' },
            { id: 'RSK-005', name: 'Statut des mesures', desc: 'État des mesures d\'atténuation' },
            { id: 'RSK-006', name: 'Top 10 risques', desc: 'Focus sur les risques critiques' },
          ]
        },
        scope: {
          name: 'Périmètre & Exigences',
          dashboards: [
            { id: 'SCO-001', name: 'Vue périmètre', desc: 'Périmètre du projet in/out of scope' },
            { id: 'SCO-002', name: 'Statut exigences', desc: 'Accomplissement des exigences' },
            { id: 'SCO-003', name: 'Journal des changements', desc: 'Changements de périmètre et impacts' },
            { id: 'SCO-004', name: 'Analyse Fit-Gap', desc: 'Standard vs personnalisation' },
            { id: 'SCO-005', name: 'Progrès User Stories', desc: 'Pour les projets agiles' },
          ]
        },
        quality: {
          name: 'Qualité & Tests',
          dashboards: [
            { id: 'QUA-001', name: 'Progrès des tests', desc: 'Statut d\'exécution des cas de test' },
            { id: 'QUA-002', name: 'Tableau des défauts', desc: 'Bugs et problèmes issus des tests' },
            { id: 'QUA-003', name: 'Couverture de test', desc: 'Couverture par module' },
            { id: 'QUA-004', name: 'Statut UAT', desc: 'Statut des tests d\'acceptation' },
            { id: 'QUA-005', name: 'Quality Gates', desc: 'Atteinte des portes qualité' },
            { id: 'QUA-006', name: 'Statut régression', desc: 'Résultats des tests de régression' },
            { id: 'QUA-007', name: 'Tests de performance', desc: 'Tests de charge et performance' },
            { id: 'QUA-008', name: 'Suivi des validations', desc: 'Validations de release' },
          ]
        },
        workstream: {
          name: 'Workstream & Module',
          dashboards: [
            { id: 'WRK-001', name: 'Statut workstream', desc: 'Progrès par module SAP/workstream' },
            { id: 'WRK-002', name: 'Dépendances cross-workstream', desc: 'Dépendances entre workstreams' },
            { id: 'WRK-003', name: 'Points d\'intégration', desc: 'Statut de tous les points d\'intégration' },
            { id: 'WRK-004', name: 'Progrès configuration', desc: 'Avancement configuration par module' },
            { id: 'WRK-005', name: 'Progrès BPML', desc: 'Avancement Business Process Master List' },
            { id: 'WRK-006', name: 'Couverture BPMN', desc: 'Documentation BPMN par niveau de processus' },
          ]
        },
        technical: {
          name: 'Technique',
          dashboards: [
            { id: 'TEC-001', name: 'Paysage système', desc: 'Vue d\'ensemble du paysage SAP' },
            { id: 'TEC-002', name: 'Statut interfaces', desc: 'Développement et test des interfaces' },
            { id: 'TEC-003', name: 'Statut migration', desc: 'Progrès de la migration de données' },
            { id: 'TEC-004', name: 'Gestion des transports', desc: 'Releases et statut des transports' },
            { id: 'TEC-005', name: 'Matrice d\'autorisation', desc: 'Vue d\'ensemble rôles et autorisations' },
            { id: 'TEC-006', name: 'Backlog développement', desc: 'Statut développement ABAP/Fiori' },
            { id: 'TEC-007', name: 'Qualité du code', desc: 'Métriques de qualité du code' },
            { id: 'TEC-008', name: 'Performance système', desc: 'Métriques de performance système' },
            { id: 'TEC-009', name: 'Statut sécurité', desc: 'Vérifications sécurité et conformité' },
            { id: 'TEC-010', name: 'Préparation Cloud', desc: 'Préparation à la migration cloud' },
          ]
        },
        change: {
          name: 'Conduite du changement',
          dashboards: [
            { id: 'OCM-001', name: 'Carte des parties prenantes', desc: 'Analyse et engagement des parties prenantes' },
            { id: 'OCM-002', name: 'Progrès formation', desc: 'Achèvement des formations' },
            { id: 'OCM-003', name: 'Plan de communication', desc: 'Statut des activités de communication' },
            { id: 'OCM-004', name: 'Évaluation de préparation', desc: 'Préparation organisationnelle' },
            { id: 'OCM-005', name: 'Métriques d\'adoption', desc: 'Adoption utilisateur après go-live' },
            { id: 'OCM-006', name: 'Feedback', desc: 'Retours et satisfaction utilisateurs' },
          ]
        },
        golive: {
          name: 'Go-Live & Cutover',
          dashboards: [
            { id: 'GLV-001', name: 'Checklist Cutover', desc: 'Statut de la checklist go-live' },
            { id: 'GLV-002', name: 'Statut Hypercare', desc: 'Support post-go-live' },
            { id: 'GLV-003', name: 'Compte à rebours Go-Live', desc: 'Jours avant go-live avec tâches critiques' },
            { id: 'GLV-004', name: 'Plan de déploiement', desc: 'Statut du déploiement multi-sites' },
            { id: 'GLV-005', name: 'Timeline Cutover', desc: 'Planning détaillé du cutover' },
          ]
        },
        governance: {
          name: 'Gouvernance',
          dashboards: [
            { id: 'GOV-001', name: 'Comité de pilotage', desc: 'Décisions et actions' },
            { id: 'GOV-002', name: 'Piste d\'audit', desc: 'Changements et approbations' },
            { id: 'GOV-003', name: 'Statut conformité', desc: 'Conformité réglementaire' },
            { id: 'GOV-004', name: 'Calendrier des réunions', desc: 'Réunions et ateliers projet' },
            { id: 'GOV-005', name: 'Statut documentation', desc: 'Progrès de la documentation projet' },
          ]
        },
        vendor: {
          name: 'Gestion des fournisseurs',
          dashboards: [
            { id: 'VEN-001', name: 'Performance fournisseurs', desc: 'Performance des partenaires externes' },
            { id: 'VEN-002', name: 'Statut des contrats', desc: 'Vue d\'ensemble contrats et échéances' },
            { id: 'VEN-003', name: 'Monitoring SLA', desc: 'Conformité aux niveaux de service' },
          ]
        },
        communication: {
          name: 'Communication',
          dashboards: [
            { id: 'COM-001', name: 'Générateur de rapports', desc: 'Rapports de statut automatisés' },
            { id: 'COM-002', name: 'Statut newsletter', desc: 'Activités de communication interne' },
            { id: 'COM-003', name: 'Journal des escalades', desc: 'Escalades et leur résolution' },
            { id: 'COM-004', name: 'Comptes-rendus', desc: 'Documentation des réunions' },
          ]
        },
      },
      cta: {
        title: 'Prêt à voir ces tableaux de bord en action ?',
        demo: 'Planifier une démo',
        allFeatures: 'Voir toutes les fonctionnalités',
      },
    },

    // Feature: Templates (FR)
    templates: {
      badge: 'Modèles de projet',
      title: 'Modèles de projet préconfigurés',
      subtitle: 'Lancez votre projet SAP avec des modèles éprouvés. Chaque modèle contient des activités, jalons, dépendances et estimations d\'effort prédéfinis basés sur une expérience réelle.',
      screenshotTitle: 'Sélection de modèle',
      screenshotSubtitle: 'Choisissez parmi 75+ modèles préconfigurés',
      stats: {
        templates: 'Modèles',
        categories: 'Catégories',
        activities: 'Activités',
        customizable: 'Personnalisable',
      },
      keyBenefits: {
        quickStart: { title: 'Démarrage rapide', desc: 'Configurez votre projet en minutes, pas en jours' },
        bestPractices: { title: 'Meilleures pratiques', desc: 'Basé sur SAP Activate et méthodologies éprouvées' },
        estimates: { title: 'Estimations précises', desc: 'Estimations réalistes issues de projets réels' },
        customizable: { title: 'Entièrement personnalisable', desc: 'Adaptez chaque modèle à vos besoins' },
      },
      howItWorks: {
        title: 'Comment fonctionnent les modèles',
        steps: {
          select: { title: 'Choisir le modèle', desc: 'Sélectionnez dans notre bibliothèque selon votre type de projet' },
          configure: { title: 'Configurer le périmètre', desc: 'Définissez modules, sites et facteurs de complexité' },
          generate: { title: 'Auto-génération', desc: 'CUTO génère votre plan de projet avec les activités' },
          customize: { title: 'Personnaliser', desc: 'Affinez dates, ressources et dépendances' },
        },
      },
      categories: {
        s4hana: {
          name: 'Implémentation SAP S/4HANA',
          templates: [
            { name: 'Implémentation Greenfield', desc: 'Nouvelle implémentation complète avec méthodologie SAP Activate', activities: '500+' },
            { name: 'Conversion Brownfield', desc: 'Conversion système de SAP ECC vers S/4HANA', activities: '350+' },
            { name: 'Transition sélective', desc: 'Approche hybride avec sélection de données', activities: '400+' },
            { name: 'Central Finance', desc: 'Projet d\'harmonisation finance', activities: '250+' },
          ]
        },
        modules: {
          name: 'Modules SAP',
          templates: [
            { name: 'FI/CO Finance & Contrôle de gestion', desc: 'Comptabilité générale, fournisseurs, clients, centres de coûts', activities: '180+' },
            { name: 'MM Gestion des achats', desc: 'Approvisionnement, stocks, MRP', activities: '150+' },
            { name: 'SD Administration des ventes', desc: 'Gestion des commandes, facturation, expédition', activities: '160+' },
            { name: 'PP Planification de production', desc: 'MRP, atelier, planification de capacité', activities: '140+' },
            { name: 'HR/HCM Capital humain', desc: 'Administration du personnel, paie, gestion du temps', activities: '200+' },
            { name: 'PM Maintenance', desc: 'Planification maintenance, ordres de travail', activities: '100+' },
            { name: 'QM Gestion de la qualité', desc: 'Planification des inspections, notifications qualité', activities: '90+' },
            { name: 'WM/EWM Magasin', desc: 'Gestion d\'entrepôt, optimisation du stockage', activities: '120+' },
          ]
        },
        migration: {
          name: 'Migration de données',
          templates: [
            { name: 'Migration données de base', desc: 'Migration clients, fournisseurs, articles, nomenclatures', activities: '80+' },
            { name: 'Migration données transactionnelles', desc: 'Postes ouverts, commandes d\'achat, commandes de vente', activities: '60+' },
            { name: 'Migration données historiques', desc: 'Données archivées et historique analytique', activities: '40+' },
            { name: 'Évaluation qualité des données', desc: 'Activités de nettoyage et validation des données', activities: '50+' },
          ]
        },
        cutover: {
          name: 'Cutover & Go-Live',
          templates: [
            { name: 'Cutover standard', desc: 'Go-live site unique avec phases standard', activities: '150+' },
            { name: 'Cutover Big Bang', desc: 'Tous les sites simultanément', activities: '200+' },
            { name: 'Déploiement par phases', desc: 'Stratégie de déploiement multi-vagues', activities: '180+' },
            { name: 'Plan Hypercare', desc: 'Activités de support post-go-live', activities: '60+' },
          ]
        },
        testing: {
          name: 'Tests',
          templates: [
            { name: 'Tests unitaires', desc: 'Tests de configuration et développement', activities: '100+' },
            { name: 'Tests d\'intégration', desc: 'Tests de processus de bout en bout', activities: '120+' },
            { name: 'Tests d\'acceptation utilisateur', desc: 'Cycles de test utilisateurs métier', activities: '80+' },
            { name: 'Tests de performance', desc: 'Tests de charge et de stress', activities: '40+' },
            { name: 'Tests de sécurité', desc: 'Tests d\'autorisation et de pénétration', activities: '30+' },
          ]
        },
        change: {
          name: 'Conduite du changement',
          templates: [
            { name: 'Gestion des parties prenantes', desc: 'Analyse et plan d\'engagement des parties prenantes', activities: '50+' },
            { name: 'Programme de formation', desc: 'Formation utilisateurs finaux et utilisateurs clés', activities: '70+' },
            { name: 'Plan de communication', desc: 'Activités de communication projet', activities: '40+' },
            { name: 'Préparation organisationnelle', desc: 'Évaluation de l\'impact du changement', activities: '30+' },
          ]
        },
        cloud: {
          name: 'Solutions SAP Cloud',
          templates: [
            { name: 'SAP SuccessFactors', desc: 'Implémentation HCM cloud', activities: '180+' },
            { name: 'SAP Ariba', desc: 'Implémentation Procurement cloud', activities: '150+' },
            { name: 'SAP Concur', desc: 'Implémentation voyages et frais', activities: '80+' },
            { name: 'SAP Analytics Cloud', desc: 'Implémentation Business Intelligence', activities: '60+' },
            { name: 'SAP BTP', desc: 'Configuration Business Technology Platform', activities: '100+' },
          ]
        },
        integration: {
          name: 'Intégration & Interfaces',
          templates: [
            { name: 'Intégration EDI', desc: 'Configuration Electronic Data Interchange', activities: '40+' },
            { name: 'Développement API', desc: 'Développement interfaces REST/SOAP', activities: '50+' },
            { name: 'Intégration SAP PI/PO', desc: 'Configuration Process Integration', activities: '60+' },
            { name: 'Intégration SAP CPI', desc: 'Cloud Platform Integration', activities: '50+' },
          ]
        },
      },
      activitiesLabel: 'activités',
      templatesLabel: 'modèles',
      customTemplate: {
        title: 'Besoin d\'un modèle personnalisé ?',
        desc: 'Vous ne trouvez pas exactement ce dont vous avez besoin ? Notre plan Enterprise inclut le développement de modèles personnalisés adaptés aux méthodologies et exigences spécifiques de votre organisation.',
        button: 'Demander un modèle personnalisé',
      },
      cta: {
        title: 'Démarrez votre projet sur de bonnes bases',
        demo: 'Planifier une démo',
        pricing: 'Voir les tarifs',
      },
    },

    // Feature: BPMN
    bpmn: {
      badge: 'BPMN 2.0 conforme',
      title: 'Éditeur de processus BPMN',
      subtitle: 'Documentez vos processus métier visuellement avec notre éditeur BPMN 2.0 intégré. Liez les diagrammes de processus directement aux activités du projet.',
      screenshotTitle: 'Éditeur de processus BPMN',
      screenshotSubtitle: 'Modélisation de processus par glisser-déposer',
      keyFeatures: {
        modeling: { title: 'Modélisation visuelle des processus', desc: 'Interface glisser-déposer pour des diagrammes BPMN professionnels. Support de tous les éléments BPMN 2.0.' },
        linking: { title: 'Liaison des activités', desc: 'Liez les processus BPMN directement aux activités BPML. Chaque élément peut être connecté aux activités du projet.' },
        coverage: { title: 'Suivi de couverture', desc: 'Suivez la couverture de documentation BPMN sur tous les niveaux de processus.' },
      },
      processArchitecture: {
        title: 'Architecture de processus à 6 niveaux',
        subtitle: 'CUTO supporte la hiérarchie de processus standard SAP des processus end-to-end aux étapes de travail détaillées.',
        levels: {
          l1: { name: 'Processus End-to-End', example: 'ex. Order to Cash (O2C)' },
          l2: { name: 'Groupe de processus', example: 'ex. Traitement des commandes' },
          l3: { name: 'Processus principal', example: 'ex. Saisie de commande standard' },
          l4: { name: 'Sous-processus', example: 'ex. Validation client' },
          l5: { name: 'Activité', example: 'ex. Vérifier limite de crédit' },
          l6: { name: 'Étape de travail', example: 'ex. Envoyer alerte crédit' },
        },
      },
      elements: {
        title: 'Éléments BPMN supportés',
        events: { title: 'Événements', items: ['Événement de début', 'Événement de fin', 'Événement intermédiaire', 'Événement timer', 'Événement message', 'Événement erreur'] },
        tasks: { title: 'Tâches', items: ['User Task', 'Service Task', 'Script Task', 'Manual Task', 'Business Rule Task', 'Sub-Process'] },
        gateways: { title: 'Gateways', items: ['Gateway exclusif (XOR)', 'Gateway parallèle (AND)', 'Gateway inclusif (OR)', 'Gateway basé sur événements', 'Gateway complexe'] },
        containers: { title: 'Conteneurs', items: ['Pool', 'Lane', 'Sub-Process', 'Transaction', 'Call Activity'] },
      },
      extendedProperties: {
        title: 'Propriétés d\'éléments étendues',
        subtitle: 'Au-delà des propriétés BPMN standard, vous pouvez capturer des métadonnées supplémentaires pour chaque élément.',
        effort: { title: 'Effort estimé', desc: 'Définissez la durée attendue en minutes, heures ou jours pour chaque tâche' },
        systems: { title: 'Systèmes impliqués', desc: 'Liez les tâches aux systèmes et modules SAP de votre paysage' },
        transactions: { title: 'Transactions', desc: 'Documentez les codes de transaction SAP pertinents (ex. VA01, ME21N)' },
        helpText: { title: 'Texte d\'aide', desc: 'Ajoutez des descriptions détaillées et des instructions pour chaque étape' },
      },
      importExport: {
        title: 'Import et Export',
        items: [
          'Importer des fichiers BPMN 2.0 XML existants',
          'Exporter au format BPMN 2.0 standard',
          'Exporter en images PNG/SVG pour documentation',
          'Compatible avec Signavio, Aris et autres outils',
        ],
      },
      versioning: {
        title: 'Versionnage et historique',
        items: [
          'Historique de versions automatique pour chaque modification',
          'Comparer les versions côte à côte',
          'Restaurer les versions précédentes en un clic',
          'Flux d\'états : Brouillon → Révision → Approuvé → Archivé',
        ],
      },
      cta: { title: 'Prêt à documenter vos processus ?', demo: 'Planifier une démo', allFeatures: 'Voir toutes les fonctionnalités' },
    },

    // Feature: Migration
    migration: {
      badge: 'Qualité & Validation des données',
      title: 'Outils de migration de données',
      subtitle: 'Assurez le succès de la migration avec validation complète, contrôles qualité et outils de réconciliation.',
      screenshotTitle: 'Tableau de bord de validation',
      screenshotSubtitle: 'Analyse des taux de correspondance en temps réel',
      keyFeatures: {
        catalog: { title: 'Catalogue de données', desc: 'Dépôt central pour tous les objets de migration. Définissez les mappings, types de données et règles de transformation.' },
        validation: { title: 'Moteur de validation', desc: 'Validation automatisée des données source-cible, vérifications de complétude et conformité aux règles métier.' },
        dashboard: { title: 'Tableau de bord qualité', desc: 'Vue en temps réel des métriques de qualité des données. Suivez les taux de correspondance et la progression de résolution.' },
      },
      workflow: {
        title: 'Flux de migration de données',
        steps: {
          define: { title: 'Définir', desc: 'Configurer le catalogue de données avec objets et champs' },
          map: { title: 'Mapper', desc: 'Créer les mappings de champs et règles de transformation' },
          extract: { title: 'Extraire', desc: 'Charger ou connecter les données source' },
          validate: { title: 'Valider', desc: 'Exécuter les vérifications de qualité automatisées' },
          reconcile: { title: 'Réconcilier', desc: 'Comparer et vérifier les données cible' },
        },
      },
      validationTypes: {
        title: 'Capacités de validation',
        keyField: { title: 'Validation champ clé', desc: 'Vérifiez que tous les enregistrements peuvent correspondre entre systèmes source et cible.', items: ['Détecter enregistrements source manquants', 'Détecter enregistrements cible manquants', 'Identifier les clés en double'] },
        fieldLevel: { title: 'Validation au niveau champ', desc: 'Comparez les valeurs de champs individuels entre source et cible.', items: ['Détecter les écarts de valeurs', 'Validation types de données', 'Vérifications format et longueur'] },
        rules: { title: 'Règles de migration', desc: 'Définissez des règles de validation complexes au-delà de la simple correspondance.', items: ['Tables de mapping de valeurs', 'Transformations conditionnelles', 'Règles d\'ignorance pour champs système', 'Support correspondance wildcards'] },
        quality: { title: 'Vérifications qualité données', desc: 'Évaluation qualité données pré-migration.', items: ['Vérifications de complétude', 'Intégrité référentielle', 'Validation règles métier', 'Détection outliers'] },
      },
      statistics: {
        title: 'Statistiques et rapports',
        matchRate: { title: 'Tableau de bord taux de correspondance', desc: 'Visualisation en temps réel de la progression de validation et des taux de correspondance' },
        errorDownload: { title: 'Téléchargements d\'erreurs', desc: 'Exporter les erreurs de validation en CSV/Excel pour analyse hors ligne' },
        fieldStats: { title: 'Statistiques de champs', desc: 'Analyse par champ avec taux de correspondance et types d\'erreurs' },
      },
      objects: {
        title: 'Objets de migration courants',
        items: ['Données clients', 'Données fournisseurs', 'Données articles', 'Nomenclatures', 'Comptes généraux', 'Centres de coûts', 'Centres de profit', 'Postes de travail', 'Gammes', 'Commandes ouvertes', 'Ordres ouverts', 'Postes ouverts', 'Immobilisations', 'Données personnel', 'Données bancaires', 'Prix', 'Conditions', 'Lots', 'Numéros de série', 'Quotas'],
        customNote: '+ Objets personnalisés de votre catalogue de données',
      },
      cta: { title: 'Prêt pour une migration réussie ?', demo: 'Planifier une démo', cutover: 'Gestion du Cutover →' },
    },

    // Feature: Cutover
    cutover: {
      badge: 'Prêt pour le Go-Live',
      title: 'Gestion du Cutover',
      subtitle: 'Planifiez, répétez et exécutez votre go-live avec précision. Des checklists de cutover au monitoring en temps réel.',
      screenshotTitle: 'Timeline Cutover',
      screenshotSubtitle: 'Suivi go-live minute par minute',
      keyFeatures: {
        checklists: { title: 'Checklists de Cutover', desc: 'Checklists prédéfinies pour chaque phase du cutover. Assurez-vous que rien n\'est oublié au go-live.' },
        timeline: { title: 'Gestion de la Timeline', desc: 'Planification cutover à la minute avec suivi automatique du temps.' },
        rehearsal: { title: 'Support des répétitions', desc: 'Effectuez plusieurs dry runs pour perfectionner votre plan de cutover.' },
      },
      phases: {
        title: 'Gestion des phases de Cutover',
        preCutover: { name: 'Pré-Cutover', time: 'J-30 à J-0', tasks: ['Vérification finale du blocage des données', 'Validation des accès système', 'Communication aux parties prenantes', 'Mise en place War Room'] },
        technical: { name: 'Cutover Technique', time: 'J-0 à J+12h', tasks: ['Arrêt système legacy', 'Extraction finale des données', 'Exécution du chargement des données', 'Validation technique'] },
        business: { name: 'Cutover Métier', time: 'J+12h à J+24h', tasks: ['Vérification des soldes d\'ouverture', 'Tests des processus métier', 'Activation des accès utilisateurs', 'Décision Go/No-Go'] },
        hypercare: { name: 'Hypercare', time: 'J+24h à J+2s', tasks: ['Support 24/7', 'Triage et résolution des problèmes', 'Monitoring des performances', 'Support utilisateurs'] },
      },
      dayDashboard: {
        title: 'Tableau de bord jour du Cutover',
        subtitle: 'Centre de commande en temps réel pendant l\'exécution du cutover.',
        tasksComplete: 'Tâches terminées',
        timeVsPlan: 'Temps vs. Plan',
        openBlockers: 'Bloqueurs ouverts',
        teamMembers: 'Membres de l\'équipe actifs',
      },
      goNoGo: { title: 'Support de décision Go/No-Go', items: ['Évaluation automatisée de la préparation', 'Mise en évidence du statut du chemin critique', 'Résumé des risques avec statut des actions', 'Documentation des décisions et piste d\'audit'] },
      rollout: { title: 'Planification du Rollout', items: ['Planification rollout multi-vagues', 'Checklists spécifiques par site', 'Réplication rollout basée sur templates', 'Gestion des dépendances inter-sites'] },
      communication: {
        title: 'Communication Cutover',
        broadcasts: { title: 'Diffusions de statut', desc: 'Mises à jour automatiques aux parties prenantes à intervalles configurables' },
        alerts: { title: 'Alertes d\'escalade', desc: 'Notifications automatiques en cas de retards ou bloqueurs identifiés' },
        logging: { title: 'Journal d\'activités', desc: 'Piste d\'audit complète de toutes les activités et décisions du cutover' },
      },
      cta: { title: 'Prêt pour un go-live sans stress ?', demo: 'Planifier une démo', risks: 'Gestion des risques →' },
    },

    // Feature: Risks
    risks: {
      badge: 'Gestion proactive des risques',
      title: 'Gestion des risques et problèmes',
      subtitle: 'Identifiez, évaluez et atténuez les risques avant qu\'ils n\'impactent votre projet. Suivez les problèmes jusqu\'à résolution avec responsabilité totale.',
      screenshotTitle: 'Carte thermique des risques',
      screenshotSubtitle: 'Matrice d\'évaluation visuelle des risques',
      keyFeatures: {
        register: { title: 'Registre des risques', desc: 'Dépôt central pour tous les risques du projet avec évaluation probabilité et impact.' },
        issues: { title: 'Suivi des problèmes', desc: 'Capturez et gérez les problèmes dès qu\'ils surviennent. Définissez les responsables et suivez la progression.' },
        heatmaps: { title: 'Cartes thermiques', desc: 'Matrice visuelle des risques avec probabilité vs. impact. Identifiez rapidement les risques critiques.' },
      },
      matrix: {
        title: 'Matrice d\'évaluation des risques',
        subtitle: 'Classez les risques par probabilité et impact pour prioriser les actions.',
        probability: 'Probabilité',
        impact: 'Impact',
        veryLow: 'Très faible',
        low: 'Faible',
        medium: 'Moyen',
        high: 'Élevé',
        veryHigh: 'Très élevé',
        critical: 'Critique',
      },
      categories: {
        title: 'Catégories de risques prédéfinies',
        technical: { name: 'Technique', examples: 'Performance système, intégration, qualité des données' },
        resource: { name: 'Ressources', examples: 'Dépendance personnes clés, lacunes compétences, disponibilité' },
        schedule: { name: 'Calendrier', examples: 'Retard timeline, retards jalons' },
        budget: { name: 'Budget', examples: 'Dépassements de coûts, dépenses non planifiées' },
        scope: { name: 'Périmètre', examples: 'Dérive du périmètre, exigences peu claires' },
        vendor: { name: 'Fournisseurs', examples: 'Livraison tiers, problèmes de licences' },
        change: { name: 'Changement', examples: 'Acceptation utilisateurs, résistance organisationnelle' },
        compliance: { name: 'Conformité', examples: 'Réglementaire, audit, sécurité' },
      },
      mitigation: { title: 'Gestion de l\'atténuation', items: ['Définir plusieurs actions par risque', 'Assigner responsables et échéances', 'Suivre progression et efficacité des actions', 'Réévaluer le risque après actions', 'Rappels automatiques pour actions en retard'] },
      issueWorkflow: { title: 'Flux de résolution des problèmes', items: ['Flux d\'états : Nouveau → En cours → Résolu → Fermé', 'Niveaux de priorité avec suivi SLA', 'Chemins d\'escalade et notifications', 'Documentation cause racine', 'Capture des leçons apprises'] },
      reporting: {
        title: 'Rapports risques et problèmes',
        trend: { title: 'Analyse des tendances', desc: 'Suivez l\'évolution des risques et problèmes dans le temps. Identifiez les schémas et thèmes récurrents.' },
        top10: { title: 'Rapports Top 10', desc: 'Focus sur les risques les plus critiques pour les présentations au comité de pilotage.' },
        resolution: { title: 'Métriques de résolution', desc: 'Temps moyen de résolution, tendances ouverts vs. fermés, performance par responsable.' },
      },
      cta: { title: 'Prêt à gérer les risques proactivement ?', demo: 'Planifier une démo', resources: 'Planification des ressources →' },
    },

    // Feature: Resources
    resources: {
      badge: 'Gestion d\'équipe',
      title: 'Planification des ressources',
      subtitle: 'Optimisez l\'allocation de votre équipe et assurez-vous que les bonnes personnes travaillent sur les bonnes tâches. Planifiez la capacité et évitez les conflits.',
      screenshotTitle: 'Planification de capacité d\'équipe',
      screenshotSubtitle: 'Vue d\'ensemble de l\'allocation des ressources',
      keyFeatures: {
        capacity: { title: 'Planification de capacité', desc: 'Planifiez la capacité des ressources sur les phases du projet. Visualisez la disponibilité et identifiez les lacunes.' },
        balancing: { title: 'Équilibrage de charge', desc: 'Identifiez les ressources sur et sous-utilisées. Équilibrez la charge de travail de l\'équipe pour une productivité optimale.' },
        time: { title: 'Suivi du temps', desc: 'Suivez l\'effort réel vs. planifié. Fonctionnalité feuille de temps intégrée pour un calcul précis des coûts.' },
      },
      teamStructure: {
        title: 'Structure de l\'équipe projet',
        roles: {
          pm: { role: 'Chef de projet', responsibilities: 'Livraison globale du projet, gestion des parties prenantes' },
          lead: { role: 'Responsable Workstream', responsibilities: 'Livraison spécifique au module, coordination d\'équipe' },
          consultant: { role: 'Consultant', responsibilities: 'Configuration, tests, documentation' },
          developer: { role: 'Développeur', responsibilities: 'Développement sur mesure, interfaces, rapports' },
          tester: { role: 'Testeur', responsibilities: 'Exécution des tests, enregistrement des défauts, validation' },
          analyst: { role: 'Analyste métier', responsibilities: 'Exigences, conception de processus, support UAT' },
          change: { role: 'Responsable changement', responsibilities: 'Formation, communication, adoption' },
          architect: { role: 'Architecte', responsibilities: 'Conception de solution, décisions techniques' },
        },
      },
      allocationViews: { title: 'Vues d\'allocation des ressources', weeklyView: 'Vue hebdomadaire', resource: 'Ressource', total: 'Total' },
      skills: { title: 'Gestion des compétences', items: ['Définir les compétences requises par rôle et activité', 'Suivre les niveaux de compétences des membres', 'Identifier les lacunes pour planifier la formation', 'Faire correspondre compétences et exigences des tâches'] },
      external: { title: 'Ressources externes', items: ['Suivre contractors et consultants séparément', 'Dates de contrat et suivi des renouvellements', 'Suivi tarif journalier et coûts', 'Métriques de performance fournisseurs'] },
      timesheet: {
        title: 'Feuille de temps intégrée',
        subtitle: 'Suivi du temps simple intégré directement aux activités du projet.',
        features: {
          activity: { title: 'Basé sur les activités', desc: 'Enregistrer le temps directement sur les activités du projet' },
          approval: { title: 'Flux d\'approbation', desc: 'Soumettre et approuver les feuilles de temps hebdomadaires' },
          comparison: { title: 'Plan vs. Réel', desc: 'Comparer l\'effort planifié avec le temps réel' },
          export: { title: 'Export', desc: 'Exporter vers Excel ou intégrer avec les systèmes RH' },
        },
      },
      cta: { title: 'Prêt à optimiser votre équipe projet ?', demo: 'Planifier une démo', pricing: 'Voir les tarifs' },
    },

    harmonization: {
      badge: 'Optimiser la qualité des données',
      title: 'Harmonisation des données & Détection des doublons',
      subtitle: 'Identifiez et nettoyez les doublons dans vos données sources avant la migration. Des données propres et dédupliquées pour votre système cible.',
      screenshotTitle: 'Aperçu des clusters de doublons',
      screenshotSubtitle: 'Regroupement intelligent et sélection du Golden Record',
      stats: {
        records: 'Enregistrements max.',
        algorithms: 'Algorithmes de matching',
        strategies: 'Stratégies Golden Record',
        auditTrail: 'Piste d\'audit',
      },
      keyFeatures: {
        config: {
          title: 'Configuration flexible',
          desc: 'Définissez des ensembles de tables, des relations et des filtres pour une détection précise des doublons.',
        },
        matching: {
          title: 'Matching intelligent',
          desc: 'Combinez des règles de matching exact, flou, phonétique et N-gram.',
        },
        golden: {
          title: 'Sélection Golden Record',
          desc: 'Détermination automatique ou manuelle de l\'enregistrement maître.',
        },
      },
      matchTypesTitle: 'Types de règles de matching',
      matchTypes: {
        exact: 'Match exact',
        exactDesc: 'Les champs doivent être identiques',
        exactUse: 'Numéros d\'article, IDs',
        fuzzy: 'Match flou',
        fuzzyDesc: 'Comparaison de similarité avec seuil',
        fuzzyUse: 'Noms, descriptions',
        phonetic: 'Match phonétique',
        phoneticDesc: 'Similarité basée sur le son',
        phoneticUse: 'Noms de personnes',
        ngram: 'Comparaison N-Gram',
        ngramDesc: 'Analyse de sous-chaînes',
        ngramUse: 'Adresses, textes longs',
      },
      useCase: 'Cas d\'usage',
      algorithmsTitle: 'Algorithmes de matching',
      algorithms: {
        levenshtein: 'Distance de Levenshtein',
        levenshteinDesc: 'Calcule la distance d\'édition minimale entre deux chaînes',
        jaroWinkler: 'Jaro-Winkler',
        jaroWinklerDesc: 'Optimisé pour les chaînes courtes et les noms',
        soundex: 'Soundex & Metaphone',
        soundexDesc: 'Comparaison phonétique pour la similarité sonore',
        ngram: 'Analyse N-Gram',
        ngramDesc: 'Analyse de sous-chaînes pour les textes longs',
      },
      workflowTitle: 'Flux de travail',
      workflow: {
        config: 'Configuration',
        configDesc: 'Sélectionner les tables du Data Catalog, définir les relations, configurer les filtres',
        rules: 'Définir les règles',
        rulesDesc: 'Sélectionner les champs de match, définir l\'algorithme et le seuil',
        analysis: 'Lancer l\'analyse',
        analysisDesc: 'Calcul automatique des clés de blocage, formation de clusters, suggestion Golden Record',
        review: 'Révision & Approbation',
        reviewDesc: 'Vérifier les clusters, confirmer le Golden Record, approbation optionnelle à 4 yeux',
        export: 'Export',
        exportDesc: 'Données nettoyées, table de mapping, rapport d\'audit',
      },
      goldenRecordTitle: 'Stratégies Golden Record',
      goldenRecordSubtitle: 'Déterminez automatiquement ou manuellement l\'enregistrement maître :',
      goldenRecord: {
        completeness: 'Complétude',
        completenessDesc: 'Enregistrement avec le plus de champs remplis',
        recency: 'Récence',
        recencyDesc: 'Enregistrement le plus récent par date de création',
        quality: 'Qualité',
        qualityDesc: 'Score de qualité des données le plus élevé',
        manual: 'Manuel',
        manualDesc: 'Pas de suggestions automatiques',
      },
      reviewTitle: 'Révision & Approbation',
      review: {
        clusterOverview: 'Aperçu des clusters : Tous les groupes de doublons en un coup d\'œil',
        detailCompare: 'Comparaison détaillée : Comparaison champ par champ des enregistrements',
        matchDetails: 'Détails du match : Affichage transparent des raisons de détection',
        fourEyes: 'Principe des 4 yeux : Approbation optionnelle par une deuxième personne',
      },
      useCasesTitle: 'Exemples d\'utilisation',
      useCases: {
        materials: {
          title: 'Doublons de matériaux (SAP)',
          rule: 'Match flou sur la description du matériau avec un seuil de 85%',
        },
        customers: {
          title: 'Doublons clients',
          rule: 'Match phonétique sur le nom + match flou sur l\'adresse',
          filter: 'Golden Record : Enregistrement le plus complet',
        },
        vendors: {
          title: 'Nettoyage fournisseurs',
          rule: 'Match exact sur le numéro fiscal + match flou sur le nom',
          filter: 'Avec approbation à 4 yeux',
        },
      },
      tables: 'Tables',
      rule: 'Règle',
      filter: 'Filtre',
      exportTitle: 'Options d\'export',
      export: {
        cleanedData: {
          title: 'Données nettoyées',
          desc: 'Nouvelle version du dataset sans doublons comme source de migration',
        },
        mappingTable: {
          title: 'Table de mapping',
          desc: 'Ancien ID → ID Golden Record pour les règles de migration',
        },
        summary: {
          title: 'Résumé',
          desc: 'Statistiques et piste d\'audit pour la documentation et la conformité',
        },
      },
      benefitsTitle: 'Avantages',
      benefits: {
        earlyDetection: 'Détection précoce : Identifier les problèmes de données avant la migration',
        flexibility: 'Flexibilité : Règles personnalisables pour chaque cas d\'usage',
        transparency: 'Transparence : Scores de match et décisions traçables',
        compliance: 'Conformité : Principe des 4 yeux et piste d\'audit complète',
        integration: 'Intégration : Connexion transparente avec le Data Catalog et les règles de migration',
        scalability: 'Évolutivité : Optimisé pour de grands volumes de données (jusqu\'à 3 millions d\'enregistrements)',
      },
      cta: {
        title: 'Prêt pour des données propres ?',
        subtitle: 'Découvrez comment CUTO optimise la qualité de vos données avant la migration.',
        demo: 'Demander une démo',
        migration: 'Migration de données →',
      },
    },
  },

  pricing: {
    title: 'Tarification simple et transparente',
    subtitle: 'Obtenez un accès à vie à CUTO pendant notre phase d\'early adopter. Pas de frais mensuels, pas de coûts cachés – payez une fois, utilisez pour toujours.',
    lifetime: '/à vie',
    oneTimePayment: 'Paiement unique',
    contactForPricing: 'Contactez-nous pour les tarifs',
    getStarted: 'Commencer',
    contactSales: 'Contacter les ventes',
    mostPopular: 'Le plus populaire',

    plans: {
      starter: {
        name: 'Starter',
        description: 'Pour les petites équipes & projets uniques',
        features: {
          projects: '1 Projet',
          users: 'Jusqu\'à 5 utilisateurs',
          templates: 'Tous les 75+ modèles de projet',
          dashboards: '30+ Tableaux de bord',
          support: 'Support par e-mail',
          updates: 'Mises à jour à vie',
        },
      },
      professional: {
        name: 'Professional',
        description: 'Pour les équipes en croissance & projets multiples',
        features: {
          projects: 'Projets illimités',
          users: 'Jusqu\'à 25 utilisateurs',
          templates: 'Tous les 75+ modèles de projet',
          dashboards: 'Tous les 80+ tableaux de bord',
          bpmn: 'Éditeur de processus BPMN',
          migration: 'Outils de migration de données',
          support: 'Support prioritaire e-mail & chat',
          updates: 'Mises à jour à vie',
        },
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Pour les grandes organisations & programmes',
        price: 'Sur mesure',
        features: {
          everything: 'Tout illimité',
          users: 'Utilisateurs illimités',
          professional: 'Toutes les fonctionnalités Professional',
          onPremise: 'Option de déploiement sur site',
          integrations: 'Intégrations personnalisées',
          successManager: 'Gestionnaire de succès dédié',
          sla: 'SLA & support prioritaire',
          training: 'Formation & onboarding',
        },
      },
    },

    comparison: {
      title: 'Comparaison des fonctionnalités',
      feature: 'Fonctionnalité',
      projects: 'Projets',
      users: 'Utilisateurs',
      templates: 'Modèles de projet',
      dashboards: 'Tableaux de bord',
      bpmn: 'Éditeur de processus BPMN',
      migration: 'Outils de migration de données',
      cutover: 'Gestion du cutover',
      onPremise: 'Déploiement sur site',
      api: 'Accès API',
      support: 'Support',
      values: {
        unlimited: 'Illimité',
        basic: 'Basique',
        full: 'Complet',
        email: 'E-mail',
        emailChat: 'E-mail & Chat',
        dedicatedSla: 'Dédié + SLA',
        custom: '+ Personnalisé',
      },
    },

    faq: {
      title: 'Questions fréquemment posées',
      questions: {
        lifetime: {
          q: 'Que signifie "accès à vie" ?',
          a: 'Une fois que vous avez acheté CUTO, vous avez accès pour toujours. Cela inclut toutes les futures mises à jour et nouvelles fonctionnalités sans frais supplémentaires. Pas d\'abonnements, pas de renouvellements.',
        },
        upgrade: {
          q: 'Puis-je upgrader plus tard ?',
          a: 'Oui ! Vous pouvez passer de Starter à Professional à tout moment. Vous ne payez que la différence entre les deux plans. Contactez-nous pour les tarifs de mise à niveau.',
        },
        trial: {
          q: 'Y a-t-il un essai gratuit ?',
          a: 'Nous offrons une démo personnalisée où nous vous montrons CUTO avec votre cas d\'usage spécifique. Contactez-nous pour planifier un appel de démo de 30 minutes.',
        },
        payment: {
          q: 'Quels moyens de paiement acceptez-vous ?',
          a: 'Nous acceptons les virements bancaires, les cartes de crédit et PayPal. Pour les clients Enterprise, nous pouvons également accommoder les bons de commande et la facturation.',
        },
        security: {
          q: 'Mes données sont-elles sécurisées ?',
          a: 'Oui. CUTO utilise un chiffrement conforme aux normes de l\'industrie, des sauvegardes régulières et un traitement des données conforme au RGPD. Les clients Enterprise peuvent choisir le déploiement sur site.',
        },
        training: {
          q: 'Proposez-vous des formations ?',
          a: 'Les plans Professional incluent une documentation complète et des tutoriels vidéo. Les plans Enterprise incluent un onboarding personnalisé et des sessions de formation.',
        },
      },
    },

    cta: {
      title: 'Prêt à optimiser vos projets SAP ?',
      subtitle: 'Rejoignez les early adopters qui gèrent déjà leurs projets SAP plus intelligemment avec CUTO.',
      button: 'Planifier une démo',
    },
  },

  docs: {
    badge: 'Base de connaissances',
    title: 'Documentation',
    subtitle: 'Tout ce que vous devez savoir pour utiliser CUTO avec succès. Guides, tutoriels et meilleures pratiques.',
    searchPlaceholder: 'Rechercher des articles, sujets ou mots-clés...',
    noResults: 'Aucun résultat pour "{query}"',
    popular: 'Articles populaires',
    browseTopics: 'Parcourir les sujets',
    articles: 'Articles',
    explore: 'Explorer',
    quickAccess: 'Accès rapide',
    gettingStarted: 'Premiers pas',
    functionsLabel: 'Fonctionnalités',
    integrations: 'Intégrations',
    cta: {
      title: 'Vous n\'avez pas trouvé ce que vous cherchez ?',
      description: 'Notre équipe de support est là pour vous aider. Contactez-nous pour une assistance personnalisée.',
      contactSupport: 'Contacter le support',
    },
  },

  partners: {
    badge: 'Programme Partenaires',
    title: 'Grandissez avec CUTO',
    subtitle: 'Rejoignez notre écosystème de partenaires et bénéficiez de commissions attractives, de ressources exclusives et d\'un marché de transformation SAP en croissance.',
    stats: {
      partners: 'Partenaires dans le monde',
      countries: 'Pays actifs',
      satisfaction: 'Satisfaction',
      payouts: 'Versés',
    },
    cta: {
      becomePartner: 'Devenir partenaire',
      learnMore: 'En savoir plus',
    },
    partnerTypes: {
      title: 'Choisissez votre modèle de partenariat',
      subtitle: 'Que vous soyez freelance ou grande entreprise – nous avons le programme adapté pour vous.',
      popular: 'Populaire',
      commission: 'Modèle de commission',
      firstYear: 'Première année',
      recurring: 'Récurrent',
      idealFor: 'Idéal pour',
      yourBenefits: 'Vos avantages',
      requirements: 'Exigences',
      applyAs: 'Postuler en tant que partenaire {type}',
    },
    tiers: {
      title: 'Niveaux de partenariat',
      subtitle: 'Plus vous vendez, plus vous bénéficiez. Montez en niveau et profitez d\'avantages supplémentaires.',
      recommended: 'RECOMMANDÉ',
      minRevenue: 'CA min.',
      minDeals: 'Deals min.',
      certified: 'Certifiés',
      benefits: 'Avantages',
      moreBenefits: '+{count} autres avantages',
      year: '/An',
    },
    whyPartner: {
      title: 'Pourquoi devenir partenaire CUTO ?',
    },
    testimonials: {
      title: 'Ce que disent nos partenaires',
    },
    faq: {
      title: 'Questions fréquentes',
    },
    apply: {
      title: 'Prêt à devenir partenaire ?',
      subtitle: 'Commencez dès aujourd\'hui et profitez du marché croissant de la transformation SAP. L\'inscription ne prend que 5 minutes.',
      applyButton: 'Postuler comme partenaire',
      consultation: 'Réserver une consultation',
    },
    types: {
      referral: {
        name: 'Partenaire Referral',
        shortName: 'Referral',
        description: 'Recommandez CUTO à votre réseau et gagnez des commissions attractives pour chaque accord conclu avec succès.',
        targetAudience: 'Freelancers SAP, consultants indépendants, chefs de projet',
        idealFor: [
          'Consultants SAP avec un large réseau de clients',
          'Freelancers dans la communauté SAP',
          'Anciens employés SAP',
          'Chefs de projet avec contacts en grandes entreprises',
        ],
        requirements: [
          'Aucun prérequis minimum',
          'Inscription en ligne simple',
          'Compréhension de base des projets SAP',
        ],
        benefits: [
          '20% de commission sur le chiffre d\'affaires de la première année',
          '10% de partage de revenus récurrents (Année 2+)',
          'Lien de suivi personnel',
          'Paiements mensuels',
          'Accès au portail partenaire',
          'Matériaux de marketing co-branded',
        ],
        commission: {
          firstYear: '20%',
          recurring: '10%',
          bonus: 'Bonus de €1.000 à partir de 3 accords/trimestre',
        },
      },
      reseller: {
        name: 'Partenaire Revendeur',
        shortName: 'Reseller',
        description: 'Vendez CUTO dans le cadre de votre portefeuille et bénéficiez de marges attractives et de revenus récurrents.',
        targetAudience: 'Petites et moyennes entreprises de conseil SAP',
        idealFor: [
          'Cabinets de conseil SAP avec 5-50 consultants',
          'Intégrateurs de systèmes IT axés SAP',
          'Prestataires de services SAP régionaux',
          'Cabinets de conseil boutique pour le marché moyen',
        ],
        requirements: [
          'Au moins 2 consultants CUTO certifiés',
          'Preuve d\'expérience en projets SAP',
          'Engagement de chiffre d\'affaires annuel',
          'Participation à l\'onboarding partenaire',
        ],
        benefits: [
          'Marge de 25-30% sur les licences',
          '15% de partage de revenus récurrents',
          'Enregistrement d\'accords avec protection des prix',
          'Contrats clients propres',
          'Options white-label disponibles',
          'Support prioritaire (< 4h de réponse)',
          'Accès aux fonctionnalités bêta',
        ],
        commission: {
          firstYear: '25-30%',
          recurring: '15%',
          bonus: 'Bonus d\'enregistrement d\'accords jusqu\'à €5.000',
        },
        highlight: true,
      },
      solution: {
        name: 'Partenaire Solutions',
        shortName: 'Solution',
        description: 'Partenariat stratégique pour les grandes entreprises de conseil avec activités go-to-market conjointes et co-selling.',
        targetAudience: 'Grandes entreprises de conseil SAP et intégrateurs de systèmes',
        idealFor: [
          'Cabinets de conseil SAP de premier plan',
          'Intégrateurs de systèmes mondiaux',
          'Big 4 consulting firms',
          'SAP Gold Partners',
        ],
        requirements: [
          'Au moins 10 consultants CUTO certifiés',
          'Expérience prouvée en projets S/4HANA',
          'Engagement de chiffre d\'affaires annuel à partir de €100k',
          'Plan d\'affaires conjoint',
          'Parrainage exécutif',
        ],
        benefits: [
          'Modèle de partage de revenus individuel',
          'Co-selling avec l\'équipe commerciale CUTO',
          'Campagnes de marketing conjointes',
          'Support RFP',
          'Responsable partenaire dédié',
          'Revues trimestrielles des affaires',
          'Accès anticipé aux fonctionnalités roadmap',
          'Études de cas et RP conjoints',
          'Tarifs préférentiels pour les grands projets',
        ],
        commission: {
          firstYear: 'Individuel',
          recurring: 'Revenue Share',
          bonus: 'Accélérateur co-selling',
        },
      },
      technology: {
        name: 'Partenaire Technologique',
        shortName: 'Technology',
        description: 'Intégrez votre solution avec CUTO et ouvrez ensemble de nouveaux marchés grâce à des synergies technologiques.',
        targetAudience: 'Fournisseurs de logiciels dans l\'écosystème SAP',
        idealFor: [
          'Fournisseurs d\'add-ons SAP',
          'Fabricants d\'outils de gestion de projet',
          'Plateformes DevOps & ALM',
          'Fournisseurs de données et analytics',
        ],
        requirements: [
          'Offre de produits complémentaires',
          'Équipe d\'intégration technique',
          'Public cible partagé',
          'Capacité d\'intégration API',
        ],
        benefits: [
          'Partage de leads bidirectionnel',
          'Budget co-marketing',
          'Listage sur marketplace',
          'Accès API et support technique',
          'Webinaires et événements conjoints',
          'Showcase d\'intégration',
          'Cross-promotion dans la newsletter',
        ],
        commission: {
          firstYear: 'Lead-Sharing',
          recurring: 'Cross-Referral',
        },
      },
    },
    tierLevels: {
      registered: {
        name: 'Registered',
        minRevenue: '€0',
        minDeals: 0,
        certifiedConsultants: 0,
        benefits: [
          'Accès au portail partenaire',
          'Matériaux de formation de base',
          'Support standard',
          'Newsletter partenaire',
        ],
      },
      silver: {
        name: 'Silver',
        minRevenue: '€25.000',
        minDeals: 2,
        certifiedConsultants: 2,
        benefits: [
          'Tous les avantages Registered',
          '+5% de marge supplémentaire',
          'Support prioritaire (< 8h)',
          'Appels partenaires trimestriels',
          'Pack de matériaux de marketing',
          'Listage dans l\'annuaire partenaires',
        ],
      },
      gold: {
        name: 'Gold',
        minRevenue: '€75.000',
        minDeals: 5,
        certifiedConsultants: 5,
        benefits: [
          'Tous les avantages Silver',
          '+10% de marge supplémentaire',
          'Support prioritaire (< 4h)',
          'Responsable partenaire dédié',
          'Budget co-marketing (€5k/an)',
          'Accès aux fonctionnalités bêta',
          'Webinaires conjoints',
        ],
      },
      platinum: {
        name: 'Platinum',
        minRevenue: '€150.000',
        minDeals: 10,
        certifiedConsultants: 10,
        benefits: [
          'Tous les avantages Gold',
          '+15% de marge supplémentaire',
          'Support premium (< 2h, 24/7)',
          'Sponsor exécutif chez CUTO',
          'Budget co-marketing (€15k/an)',
          'Accès anticipé à la roadmap',
          'Communiqués de presse conjoints',
          'Événements partenaires exclusifs',
          'Demandes de fonctionnalités personnalisées',
        ],
      },
    },
    generalBenefits: [
      {
        icon: '💰',
        title: 'Commissions attractives',
        description: 'Jusqu\'à 30% de marge sur les accords et partages de revenus récurrents pour un revenu à long terme.',
      },
      {
        icon: '📈',
        title: 'Marché en croissance',
        description: 'Le marché de la transformation SAP S/4HANA croît rapidement – positionnez-vous comme expert.',
      },
      {
        icon: '🎓',
        title: 'Certifications gratuites',
        description: 'Devenez consultant certifié CUTO avec notre programme de formation complet.',
      },
      {
        icon: '🛠️',
        title: 'Support ventes et marketing',
        description: 'Présentations prêtes, études de cas et matériaux co-branded pour vos présentations.',
      },
      {
        icon: '🤝',
        title: 'Support dédié',
        description: 'Votre responsable partenaire personnel vous soutient avec les accords et questions stratégiques.',
      },
      {
        icon: '🚀',
        title: 'Onboarding rapide',
        description: 'En seulement 2 semaines de la demande au partenaire actif – nous vous facilitons la tâche.',
      },
    ],
    partnerTestimonials: [
      {
        quote: 'En tant que freelancer, j\'ai gagné plus de €45.000 en commissions au cours des 12 derniers mois – simplement grâce aux recommandations dans mon réseau. CUTO se vend pratiquement tout seul.',
        author: 'Thomas Müller',
        role: 'SAP Senior Consultant (Freelancer)',
        company: 'Indépendant',
        partnerType: 'referral',
      },
      {
        quote: 'Le partenariat avec CUTO a parfaitement complété notre portefeuille de services. Nous offrons maintenant des solutions end-to-end de transformation SAP et avons augmenté notre chiffre d\'affaires de 40%.',
        author: 'Dr. Sandra Weber',
        role: 'Managing Partner',
        company: 'Alpine Consulting GmbH',
        partnerType: 'reseller',
      },
      {
        quote: 'Le modèle de co-selling fonctionne excellemment. Pour les RFPs complexes, nous travaillons main dans la main avec l\'équipe CUTO – cela convainc les clients et accélère le cycle de vente.',
        author: 'Michael Hoffmann',
        role: 'Director SAP Practice',
        company: 'Global Systems AG',
        partnerType: 'solution',
      },
    ],
    faqItems: [
      {
        question: 'À quelle vitesse puis-je commencer à gagner ?',
        answer: 'Après l\'inscription, vous recevrez immédiatement votre lien de suivi personnel. Dès qu\'un client recommandé par vous signe un contrat et que le premier paiement est effectué, votre commission devient due. Pour les accords enterprise, le cycle de vente peut prendre 3-6 mois.',
      },
      {
        question: 'Y a-t-il une durée minimale de contrat ?',
        answer: 'Non, en tant que Partenaire Referral, vous pouvez arrêter à tout moment sans préavis. Pour les Partenaires Revendeurs et Solutions, des accords individuels s\'appliquent, généralement avec une durée annuelle.',
      },
      {
        question: 'Comment fonctionne l\'enregistrement des accords ?',
        answer: 'Les Partenaires Revendeurs et Solutions peuvent enregistrer des accords potentiels via le portail partenaire. Cela vous donne une protection des prix pendant 90 jours et empêche d\'autres partenaires de travailler sur le même lead.',
      },
      {
        question: 'Quelle formation est requise ?',
        answer: 'Les Partenaires Referral ne nécessitent pas de certification formelle. Pour les Partenaires Revendeurs et Solutions, nous offrons un programme de certification en ligne gratuit (env. 8 heures) ainsi qu\'une formation en présentiel optionnelle.',
      },
      {
        question: 'Puis-je devenir Revendeur plus tard en tant que freelancer ?',
        answer: 'Oui, beaucoup de nos partenaires les plus performants ont commencé comme Partenaires Referral et ont grandi. Une fois que vous remplissez les exigences, vous pouvez faire un upgrade et bénéficier de meilleures conditions.',
      },
      {
        question: 'Y a-t-il des territoires de vente exclusifs ?',
        answer: 'Pour les Partenaires Platinum, nous pouvons conclure des accords exclusifs dans certaines régions ou industries. Cela est négocié individuellement et nécessite des engagements de chiffre d\'affaires correspondants.',
      },
    ],
  },

  contact: {
    title: 'Contact',
    subtitle: 'Contactez-nous pour une démo ou plus d\'informations sur CUTO',
    info: {
      title: 'Informations de contact',
      email: 'E-mail',
      phone: 'Téléphone',
      phoneText: 'Veuillez nous contacter par e-mail',
      demo: 'Demander une démo',
      demoText: 'Planifiez une démo personnalisée et découvrez comment CUTO peut soutenir votre projet SAP.',
    },
    form: {
      title: 'Envoyer un message',
      name: 'Nom',
      email: 'E-mail',
      company: 'Entreprise',
      message: 'Message',
      submit: 'Envoyer',
      successMessage: 'Merci pour votre message ! Nous vous répondrons sous peu.',
    },
  },

  about: {
    title: 'À propos de CUTO',
    subtitle: 'CUTO est la solution structurée pour la gestion de projets SAP',
    mission: {
      title: 'Notre Mission',
      p1: 'Notre mission est de rendre les projets SAP plus réussis. Nous croyons que la gestion de projet structurée est la clé du succès. CUTO a été développé pour donner aux chefs de projet et aux équipes les outils dont ils ont besoin pour gérer avec succès des projets SAP complexes du début à la fin.',
      p2: 'Nous combinons les meilleures pratiques de projets SAP réussis avec une technologie moderne pour vous fournir une plateforme intuitive et puissante. Notre objectif est de simplifier la gestion de projet tout en augmentant la qualité et le succès de vos projets.',
    },
    whatWeDo: {
      title: 'Ce que nous faisons',
      description: 'CUTO vous accompagne dans toutes les phases de votre projet SAP - de l\'initialisation à la réussite. Notre service SaaS offre une solution complète pour la gestion de projet structurée.',
      items: {
        init: 'Initialisation de projet avec des modèles éprouvés',
        planning: 'Planification complète des activités, efforts et calendriers',
        management: 'Gestion de projet continue et suivi des progrès',
        completion: 'Clôture de projet structurée avec documentation',
      },
    },
    whyCuto: {
      title: 'Pourquoi CUTO ?',
      templates: {
        title: 'Modèles éprouvés',
        description: 'Commencez avec les meilleures pratiques de projets SAP réussis. Gagnez du temps lors de l\'initialisation du projet.',
      },
      planning: {
        title: 'Planification structurée',
        description: 'Planifiez les activités, efforts et calendriers avec précision. Créez des plans de projet réalistes et réalisables.',
      },
      management: {
        title: 'Gestion continue',
        description: 'Suivez l\'avancement du projet. Identifiez les risques tôt et prenez des décisions basées sur les données.',
      },
      completion: {
        title: 'Clôture réussie',
        description: 'Clôturez vos projets de manière structurée. Avec des jalons clairs et une documentation complète.',
      },
    },
    team: {
      title: 'Notre Équipe',
      p1: 'CUTO a été développé par une équipe avec des années d\'expérience dans les projets SAP. Nous comprenons les défis auxquels les chefs de projet et les équipes font face dans les transformations SAP, les implémentations, les migrations de données et les projets de cutover.',
      p2: 'Notre objectif est de surmonter ces défis grâce à des processus structurés et une technologie moderne. Nous sommes passionnés par le fait de rendre les projets SAP plus réussis.',
    },
  },

  compare: {
    badge: 'Comparaison',
    title: 'CUTO vs. Alternatives',
    subtitle: 'Comparez CUTO avec d\'autres outils de gestion de projet et trouvez la meilleure solution pour vos projets SAP.',
    recommended: 'Recommandé',
    features: 'Fonctionnalités',
    strengths: 'Points forts',
    limitations: 'Limitations',
    allCategories: 'Toutes les catégories',
    whyCuto: {
      title: 'Pourquoi CUTO pour les projets SAP ?',
      specialized: {
        title: 'Spécialisé pour SAP',
        description: 'Contrairement aux outils génériques, CUTO a été spécialement développé pour les exigences des projets SAP.',
      },
      ready: {
        title: 'Prêt à l\'emploi',
        description: 'Templates préconfigurés pour SAP Activate, Cutover et plus – pas de configuration complexe nécessaire.',
      },
      cutover: {
        title: 'Cutover intégré',
        description: 'Gestion du cutover unique pour un Go-Live en douceur – un add-on ou non disponible dans d\'autres outils.',
      },
      pricing: {
        title: 'Tarification équitable',
        description: 'Tarification transparente sans coûts cachés pour les add-ons ou fonctionnalités enterprise.',
      },
    },
    cta: {
      title: 'Jugez par vous-même',
      description: 'Essayez CUTO gratuitement pendant 14 jours et découvrez à quel point la gestion de projets SAP peut être efficace.',
      tryFree: 'Essayer gratuitement',
      requestDemo: 'Demander une démo',
    },
  },

  useCases: {
    badge: 'Cas d\'usage & Tutoriels',
    title: 'CUTO en pratique',
    subtitle: 'Découvrez des guides pratiques et des tutoriels vidéo pour les cas d\'usage typiques dans les projets SAP. De la planification du projet jusqu\'au Go-Live.',
    searchPlaceholder: 'Rechercher des cas d\'usage...',
    featured: 'Cas d\'usage en vedette',
    all: 'Tous',
    allUseCases: 'Tous les cas d\'usage',
    noResults: {
      title: 'Aucun cas d\'usage trouvé',
      description: 'Essayez une autre recherche ou sélectionnez une autre catégorie.',
      reset: 'Réinitialiser les filtres',
    },
    suggest: {
      title: 'Un cas d\'usage vous manque ?',
      description: 'Nous élargissons continuellement notre bibliothèque de cas d\'usage. Dites-nous quels sujets vous intéresseraient.',
      button: 'Suggérer un cas d\'usage',
      features: 'Découvrir toutes les fonctionnalités',
    },
    detail: {
      home: 'Accueil',
      useCases: 'Cas d\'usage',
      readingTime: 'temps de lecture',
      videoTutorial: 'Tutoriel vidéo',
      comingSoon: 'Bientôt disponible',
      stepByStep: 'Guide étape par étape',
      proTips: 'Conseils de pro',
      related: 'Cas d\'usage connexes',
      cta: {
        title: 'Prêt à essayer CUTO ?',
        description: 'Commencez dès aujourd\'hui et optimisez vos projets SAP.',
        start: 'Commencer',
        allUseCases: '← Tous les cas d\'usage',
      },
    },
    // Categories
    categories: {
      'project-planning': {
        name: 'Planification de projet',
        description: 'Planifier les phases, sprints et jalons',
      },
      'templates': {
        name: 'Modèles',
        description: 'Créer et utiliser des modèles',
      },
      'dashboards': {
        name: 'Tableaux de bord',
        description: 'Visualiser les KPIs et les rapports',
      },
      'migration': {
        name: 'Migration de données',
        description: 'Migrer les données de manière structurée',
      },
      'cutover': {
        name: 'Cutover',
        description: 'Réussir le Go-Live',
      },
      'risk-management': {
        name: 'Gestion des risques',
        description: 'Identifier et gérer les risques',
      },
      'team-management': {
        name: 'Équipe & Ressources',
        description: 'Gérer les équipes et les rôles',
      },
      'reporting': {
        name: 'Rapports',
        description: 'Créer des rapports et des exports',
      },
    },
    // Use Case Items
    items: {
      'phase-in-sprints-aufteilen': {
        title: 'Comment diviser une phase en sprints ?',
        description: 'Apprenez à diviser efficacement une phase de projet SAP en sprints gérables – pour une meilleure vue d\'ensemble et un travail agile.',
        content: `## Vue d'ensemble

Dans les projets SAP complexes, une seule phase peut rapidement devenir déroutante. La division en sprints aide à mieux suivre la progression et à maintenir l'équipe concentrée.

## Pourquoi des sprints dans les projets SAP ?

- **Meilleure vue d'ensemble**: Les petits paquets de travail sont plus faciles à gérer
- **Feedback régulier**: Les résultats peuvent être examinés après chaque sprint
- **Flexibilité**: Les ajustements peuvent être effectués plus rapidement
- **Motivation**: Progrès visible sur de courtes périodes

## Prérequis

Avant de commencer, assurez-vous que :
- La phase est déjà créée dans CUTO
- Les activités de la phase sont définies
- L'équipe est assignée à la phase`,
        steps: [
          { title: 'Sélectionner la phase', description: 'Naviguez jusqu\'à la phase souhaitée dans votre projet. Cliquez sur le menu de la phase et sélectionnez "Planification de Sprint".' },
          { title: 'Définir la durée du sprint', description: 'Définissez la durée standard du sprint (typiquement : 2-4 semaines). CUTO calcule automatiquement le nombre de sprints possibles en fonction de la durée de la phase.' },
          { title: 'Assigner les activités', description: 'Glissez et déposez les activités dans les sprints respectifs. CUTO vous montre la charge de travail par sprint.' },
          { title: 'Vérifier les dépendances', description: 'CUTO vous avertit automatiquement si des activités avec des dépendances sont planifiées dans le mauvais ordre.' },
          { title: 'Définir les objectifs du sprint', description: 'Ajoutez un objectif clair pour chaque sprint. Cela aide l\'équipe à rester concentrée.' },
        ],
        proTips: [
          'Prévoyez un tampon de 10-15% pour les tâches imprévues.',
          'Gardez les planifications de sprint courtes – maximum 2 heures par sprint.',
          'Utilisez les rétrospectives de sprint pour une amélioration continue.',
          'Évitez les sprints pendant les jours fériés ou les périodes de vacances.',
        ],
        author: { name: 'Dr. Michael Schmidt', role: 'Expert en projets SAP' },
        readingTime: '8 min',
      },
      'sap-activate-template-nutzen': {
        title: 'Créer automatiquement un modèle SAP Activate',
        description: 'Apprenez à créer un projet SAP Activate complet avec toutes ses phases et activités en un seul clic.',
        content: `## Qu'est-ce que SAP Activate ?

SAP Activate est la méthodologie de projet officielle de SAP pour les implémentations S/4HANA. CUTO propose des modèles prêts à l'emploi qui contiennent toutes les phases et les meilleures pratiques.

## Fases incluses

1. **Discover** - Initialisation et cadrage du projet
2. **Prepare** - Configuration du projet et constitution de l'équipe
3. **Explore** - Analyse Fit-Gap et conception
4. **Realize** - Configuration et développement
5. **Deploy** - Tests et Go-Live
6. **Run** - Hypercare et optimisation`,
        steps: [
          { title: 'Créer un nouveau projet', description: 'Cliquez sur "Nouveau projet" et sélectionnez "Créer à partir d\'un modèle".' },
          { title: 'Sélectionner SAP Activate', description: 'Choisissez "SAP Activate for S/4HANA" parmi les modèles disponibles.' },
          { title: 'Saisir les données du projet', description: 'Saisissez le nom du projet, la date de début et le Go-Live prévu. CUTO calcule automatiquement la durée des phases.' },
          { title: 'Personnaliser le modèle', description: 'Adaptez le modèle à vos besoins – supprimez les activités inutiles ou ajoutez les vôtres.' },
        ],
        proTips: [
          'Enregistrez les modèles personnalisés pour de futurs projets.',
          'Utilisez les estimations comme point de départ et ajustez-les en fonction de votre expérience.',
          'Liez le modèle à vos rôles standard pour une planification des ressources plus rapide.',
        ],
        author: { name: 'Sarah Weber', role: 'Consultante SAP' },
        readingTime: '5 min',
      },
      'management-dashboard-erstellen': {
        title: 'Créer un tableau de bord KPI pour la direction',
        description: 'Créez des tableaux de bord pertinents qui donnent à la direction un aperçu rapide de l\'état du projet.',
        content: `## Pourquoi des tableaux de bord pour la direction ?

La direction a besoin d'une vue différente du projet que l'équipe projet. Un bon tableau de bord de direction montre :

- **État du projet en un coup d'œil** (système de feux tricolores)
- **Budget vs. coûts réels**
- **Aperçu des jalons**
- **Principaux risques**
- **Utilisation des ressources**

## Meilleures pratiques

- Moins c'est plus : Maximum 6-8 KPIs par tableau de bord
- Utilisez les couleurs de manière cohérente (Rouge/Jaune/Vert)
- Montrez les tendances, pas seulement les valeurs actuelles
- Mettez à jour les tableaux de bord régulièrement`,
        steps: [
          { title: 'Ouvrir la zone des tableaux de bord', description: 'Naviguez vers "Tableaux de bord" et cliquez sur "Créer un nouveau tableau de bord".' },
          { title: 'Choisir la mise en page', description: 'Sélectionnez une mise en page prédéfinie ou créez votre propre grille.' },
          { title: 'Ajouter des widgets', description: 'Glissez les widgets souhaités sur le tableau de bord : état du projet, graphique budgétaire, jalons, etc.' },
          { title: 'Configurer les filtres', description: 'Configurez des filtres globaux pour la période, les projets ou les équipes.' },
          { title: 'Partager', description: 'Partagez le tableau de bord avec l\'équipe de direction ou exportez-le en PDF.' },
        ],
        proTips: [
          'Créez des tableaux de bord distincts pour différents groupes de parties prenantes.',
          'Utilisez l\'actualisation automatique pour les présentations en direct.',
          'Exportez les tableaux de bord en PDF pour les réunions hors ligne.',
        ],
        author: { name: 'Thomas Müller', role: 'Responsable PMO' },
        readingTime: '7 min',
      },
      'go-live-checkliste': {
        title: 'Créer et gérer la checklist de Go-Live',
        description: 'Une checklist de Go-Live structurée est cruciale pour un cutover réussi. Apprenez à la créer dans CUTO.',
        content: `## L'importance d'une checklist de Go-Live

Le Go-Live est le moment le plus critique d'un projet SAP. Une checklist bien structurée aide à :

- Ne rien oublier
- Définir clairement les responsabilités
- Suivre la progression en temps réel
- Réagir rapidement aux problèmes

## Áreas típicas de la lista

1. **Pré-Go-Live** (J-7 à J-1)
2. **Week-end du Cutover** (J-0)
3. **Post-Go-Live / Hypercare** (J+1 à J+14)`,
        steps: [
          { title: 'Ouvrir le module Cutover', description: 'Naviguez vers la zone Cutover de votre projet.' },
          { title: 'Créer une checklist à partir d\'un modèle', description: 'Sélectionnez une checklist de Go-Live prédéfinie ou créez-en une nouvelle.' },
          { title: 'Ajouter des tâches', description: 'Ajoutez toutes les tâches nécessaires avec des plages horaires et des responsables.' },
          { title: 'Définir les dépendances', description: 'Liez les tâches qui dépendent les unes des autres (par ex. "Arrêter le système" avant "Démarrer la migration des données").' },
          { title: 'Générer un runbook', description: 'Exportez la checklist sous forme de runbook détaillé pour l\'équipe de cutover.' },
        ],
        proTips: [
          'Effectuez un exercice de cutover (répétition à blanc) avant le vrai Go-Live.',
          'Définissez des critères et des procédures de rollback clairs.',
          'Prévoyez une marge suffisante pour les problèmes imprévus.',
          'Assurez-vous que toutes les parties prenantes connaissent les voies d\'escalade.',
        ],
        author: { name: 'Dr. Michael Schmidt', role: 'Expert en projets SAP' },
        readingTime: '6 min',
      },
      'risiken-identifizieren-tracken': {
        title: 'Identifier et suivre les risques du projet',
        description: 'Une gestion proactive des risques est la clé du succès d\'un projet. Apprenez à enregistrer et à surveiller les risques dans CUTO.',
        content: `## Pourquoi la gestion des risques ?

Les projets SAP sont complexes et présentent de nombreuses sources de risques potentiels :

- Risques techniques (intégration, performance)
- Risques organisationnels (gestion du changement, ressources)
- Risques de calendrier (retards, dépendances)
- Risques budgétaires (dérive du périmètre, coûts imprévus)

## Matrice des risques

CUTO utilise une matrice des risques standardisée :
- **Probabilité**: Faible / Moyenne / Élevée
- **Impact**: Faible / Moyen / Élevé / Critique
- **Score de risque**: Calculé automatiquement`,
        steps: [
          { title: 'Ouvrir le registre des risques', description: 'Naviguez vers "Risques et problèmes" dans votre projet.' },
          { title: 'Enregistrer un nouveau risque', description: 'Cliquez sur "Ajouter un risque" et décrivez le risque en détail.' },
          { title: 'Procéder à l\'évaluation', description: 'Évaluez la probabilité et l\'impact. CUTO calcule le score de risque.' },
          { title: 'Définir des mesures', description: 'Ajoutez des mesures préventives et réactives et assignez des responsables.' },
          { title: 'Réviser régulièrement', description: 'Utilisez la fonction de revue des risques pour les mettre à jour régulièrement.' },
        ],
        proTips: [
          'Organisez un atelier sur les risques avec toutes les parties prenantes au début du projet.',
          'Priorisez les 10 principaux risques et concentrez-vous sur eux.',
          'Liez les risques aux activités concernées pour une meilleure transparence.',
          'Utilisez le tableau de bord des risques pour les réunions du comité de pilotage.',
        ],
        author: { name: 'Sarah Weber', role: 'Consultante SAP' },
        readingTime: '5 min',
      },
      'datenmigration-planen': {
        title: 'Planifier la migration des données de manière structurée',
        description: 'Une migration de données réussie nécessite une planification minutieuse. Découvrez comment CUTO vous y aide.',
        content: `## Défis de la migration des données

La migration des données est souvent la partie sous-estimée d'un projet SAP :

- **Qualité des données**: Les données héritées sont souvent incohérentes
- **Mappage**: Faire correspondre les anciennes structures aux nouvelles
- **Volume**: Migrer efficacement de grands volumes de données
- **Validation**: S'assurer que toutes les données sont correctes

## Module de migration CUTO

CUTO propose des fonctions spécialisées pour :
- La planification et le suivi de la migration
- La gestion du catalogue d'objets
- La documentation des cycles de test
- La coordination du Cut-Over`,
        steps: [
          { title: 'Enregistrer les objets de migration', description: 'Créez un catalogue de tous les objets à migrer (clients, fournisseurs, matériaux, etc.).' },
          { title: 'Assigner les responsabilités', description: 'Assignez un responsable fonctionnel et technique pour chaque objet.' },
          { title: 'Planifier les cycles de test', description: 'Planifiez plusieurs migrations de test avant le cycle final.' },
          { title: 'Suivre la progression', description: 'Utilisez le tableau de bord de migration pour surveiller l\'état de tous les objets.' },
          { title: 'Intégration du Cutover', description: 'Liez les activités de migration à votre checklist de Go-Live.' },
        ],
        proTips: [
          'Commencez tôt le nettoyage des données – cela prend généralement plus de temps que prévu.',
          'Documentez toutes les règles de mappage pour une traçabilité ultérieure.',
          'Planifiez au moins 3 migrations de test complètes.',
          'Impliquez les départements fonctionnels dès le début dans la validation des données.',
        ],
        author: { name: 'Thomas Müller', role: 'Responsable PMO' },
        readingTime: '9 min',
      },
    },
  },

  // Legal Pages
  legal: {
    imprint: {
      title: 'Mentions légales',
      subtitle: 'Informations juridiques',
      companyInfo: {
        title: 'Informations sur l\'entreprise',
        companyName: 'Nom de l\'entreprise',
        address: 'Adresse',
        contact: 'Contact',
      },
      legalInfo: {
        title: 'Informations juridiques',
        managingDirector: 'Directeur général',
        commercialRegister: 'Registre du commerce',
        registerCourt: 'Tribunal d\'enregistrement',
        registrationNumber: 'Numéro d\'enregistrement',
        vatId: 'N° TVA',
        vatIdText: 'Numéro d\'identification TVA selon §27a de la loi sur la TVA',
      },
      liabilityContent: {
        title: 'Responsabilité du contenu',
        p1: 'En tant que fournisseur de services, nous sommes responsables de notre propre contenu sur ces pages conformément au droit général en vertu de l\'article 7, paragraphe 1, de la loi allemande sur les télémédias (TMG). Cependant, selon les articles 8 à 10 du TMG, nous ne sommes pas obligés de surveiller les informations de tiers transmises ou stockées par nous ou d\'enquêter sur les circonstances indiquant une activité illégale.',
        p2: 'Les obligations de supprimer ou de bloquer l\'utilisation des informations en vertu du droit général restent inchangées. Cependant, la responsabilité à cet égard n\'est possible qu\'à partir du moment où une violation concrète de la loi devient connue. Si nous prenons connaissance de telles violations, nous supprimerons ce contenu immédiatement.',
      },
      liabilityLinks: {
        title: 'Responsabilité des liens',
        p1: 'Notre offre contient des liens vers des sites web externes de tiers sur le contenu desquels nous n\'avons aucune influence. Par conséquent, nous ne pouvons assumer aucune responsabilité pour ces contenus externes. Le fournisseur ou l\'exploitant respectif des pages est toujours responsable du contenu des pages liées. Les pages liées ont été vérifiées pour d\'éventuelles violations légales au moment de la liaison. Aucun contenu illégal n\'était reconnaissable au moment de la liaison.',
        p2: 'Cependant, un contrôle permanent du contenu des pages liées n\'est pas raisonnable sans preuve concrète d\'une violation de la loi. Si nous prenons connaissance de violations, nous supprimerons immédiatement ces liens.',
      },
      copyright: {
        title: 'Droits d\'auteur',
        p1: 'Le contenu et les œuvres créés par les exploitants du site sur ces pages sont soumis au droit d\'auteur allemand. La reproduction, le traitement, la distribution et toute forme de commercialisation de ce matériel au-delà de la portée du droit d\'auteur nécessitent le consentement écrit préalable de son auteur ou créateur respectif.',
        p2: 'Les téléchargements et copies de ce site ne sont autorisés que pour un usage privé et non commercial. Dans la mesure où le contenu de ce site n\'a pas été créé par l\'exploitant, les droits d\'auteur de tiers sont respectés. En particulier, les contenus de tiers sont identifiés comme tels. Si vous prenez néanmoins connaissance d\'une violation du droit d\'auteur, veuillez nous en informer. Si nous prenons connaissance de violations, nous supprimerons immédiatement ce contenu.',
      },
    },
    privacy: {
      title: 'Politique de confidentialité',
      subtitle: 'Informations sur la protection des données',
      intro: {
        title: '1. Introduction',
        p1: 'Nous prenons très au sérieux la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.',
        p2: 'Le responsable du traitement des données sur ce site web est :',
      },
      dataCollection: {
        title: '2. Collecte et traitement des données',
        autoTitle: '2.1 Données collectées automatiquement',
        autoIntro: 'Lorsque vous visitez notre site web, nous collectons automatiquement certaines informations, notamment :',
        autoItems: ['Adresse IP', 'Type et version du navigateur', 'Système d\'exploitation', 'Date et heure d\'accès', 'Pages visitées', 'URL de référence'],
        autoP: 'Ces données sont traitées pour assurer la sécurité et la fonctionnalité de notre site web et pour améliorer nos services.',
      },
      contactForm: {
        title: '3. Formulaire de contact et e-mail',
        p1: 'Lorsque vous nous contactez via le formulaire de contact ou par e-mail, nous traitons les données suivantes :',
        items: ['Nom', 'Adresse e-mail', 'Contenu du message', 'Toute autre information que vous fournissez volontairement'],
        p2: 'Ces données sont traitées pour répondre à votre demande et sont conservées aussi longtemps que nécessaire pour traiter votre demande ou selon les exigences légales.',
      },
      cookies: {
        title: '4. Cookies',
        p1: 'Notre site web utilise des cookies pour améliorer l\'expérience utilisateur et analyser l\'utilisation du site web. Les cookies sont de petits fichiers texte stockés sur votre appareil.',
        p2: 'Vous pouvez contrôler et gérer les cookies dans les paramètres de votre navigateur. Cependant, la désactivation des cookies peut limiter la fonctionnalité de notre site web.',
        p3: 'Pour des informations détaillées sur les cookies que nous utilisons, veuillez consulter notre',
        cookiePolicy: 'Politique de cookies',
      },
      dataSharing: {
        title: '5. Partage des données',
        p1: 'Nous ne vendons, n\'échangeons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos données uniquement dans les circonstances suivantes :',
        items: [
          'Avec des prestataires de services qui nous aident à exploiter notre site web et nos services (sous accords de confidentialité stricts)',
          'Lorsque la loi l\'exige ou pour protéger nos droits et notre sécurité',
          'Avec votre consentement explicite',
        ],
      },
      dataSecurity: {
        title: '6. Sécurité des données',
        p1: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l\'accès non autorisé, la perte, la destruction ou l\'altération. Ces mesures comprennent :',
        items: ['Cryptage SSL/TLS pour la transmission des données', 'Mises à jour de sécurité régulières', 'Contrôles d\'accès et authentification', 'Sauvegardes régulières'],
      },
      yourRights: {
        title: '7. Vos droits',
        p1: 'En vertu du Règlement général sur la protection des données (RGPD), vous disposez des droits suivants :',
        items: {
          access: 'Droit d\'accès : Vous pouvez demander des informations sur vos données personnelles que nous traitons',
          rectification: 'Droit de rectification : Vous pouvez demander la correction des données inexactes',
          erasure: 'Droit à l\'effacement : Vous pouvez demander la suppression de vos données personnelles',
          restriction: 'Droit à la limitation : Vous pouvez demander la limitation du traitement des données',
          portability: 'Droit à la portabilité : Vous pouvez demander le transfert de vos données',
          objection: 'Droit d\'opposition : Vous pouvez vous opposer à certains types de traitement des données',
          withdrawal: 'Droit de retrait du consentement : Vous pouvez retirer votre consentement à tout moment',
        },
        p2: 'Pour exercer ces droits, veuillez nous contacter à',
      },
      dataRetention: {
        title: '8. Conservation des données',
        p1: 'Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour remplir les finalités pour lesquelles elles ont été collectées, ou selon les exigences des lois et réglementations applicables.',
        p2: 'Lorsque les données ne sont plus nécessaires, elles seront supprimées de manière sécurisée ou anonymisées.',
      },
      changes: {
        title: '9. Modifications de cette politique de confidentialité',
        p1: 'Nous pouvons mettre à jour cette politique de confidentialité de temps en temps pour refléter les changements dans nos pratiques ou les exigences légales. Nous vous informerons de tout changement significatif en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date "Dernière mise à jour".',
      },
      contact: {
        title: '10. Contact',
        p1: 'Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou nos pratiques de traitement des données, veuillez nous contacter :',
        email: 'E-mail',
        address: 'Adresse',
      },
    },
    terms: {
      title: 'Conditions d\'utilisation',
      subtitle: 'Conditions générales d\'utilisation de CUTO',
      scope: {
        title: '1. Champ d\'application et acceptation',
        p1: 'Ces conditions d\'utilisation ("Conditions") régissent votre accès et votre utilisation du service CUTO ("Service") fourni par benX AG ("nous", "notre"). En accédant ou en utilisant notre Service, vous acceptez d\'être lié par ces Conditions.',
        p2: 'Si vous n\'acceptez pas ces Conditions, vous ne pouvez pas accéder ou utiliser le Service.',
      },
      serviceDescription: {
        title: '2. Description du service',
        p1: 'CUTO est une plateforme Software-as-a-Service (SaaS) conçue pour soutenir la gestion de projet structurée pour les projets SAP, notamment :',
        items: [
          'Initialisation de projet avec des modèles',
          'Planification des activités, efforts et calendriers',
          'Gestion de projet et suivi des progrès',
          'Clôture de projet et documentation',
        ],
      },
      registration: {
        title: '3. Inscription et compte',
        p1: 'Pour utiliser le Service, vous devez créer un compte et fournir des informations exactes, complètes et à jour. Vous êtes responsable de :',
        items: [
          'Maintenir la confidentialité de vos identifiants de compte',
          'Toutes les activités qui se produisent sous votre compte',
          'Nous informer immédiatement de toute utilisation non autorisée de votre compte',
        ],
        p2: 'Vous devez avoir au moins 18 ans pour créer un compte et utiliser le Service.',
      },
      acceptableUse: {
        title: '4. Utilisation acceptable',
        p1: 'Vous acceptez de ne pas :',
        items: [
          'Utiliser le Service à des fins illégales ou non autorisées',
          'Violer les lois de votre juridiction',
          'Transmettre des virus, logiciels malveillants ou code nuisible',
          'Tenter d\'obtenir un accès non autorisé au Service ou à ses systèmes connexes',
          'Interférer avec ou perturber le Service ou les serveurs connectés au Service',
          'Copier, modifier ou créer des œuvres dérivées du Service',
          'Désassembler, décompiler ou décomposer le Service',
          'Utiliser le Service pour stocker ou transmettre du matériel contrefait, diffamatoire ou autrement illégal',
        ],
      },
      subscription: {
        title: '5. Abonnement et paiement',
        p1: 'Le Service est fourni sur la base d\'un abonnement. En vous abonnant, vous acceptez de payer les frais applicables tels que spécifiés dans votre plan d\'abonnement.',
        p2: 'Les frais d\'abonnement sont facturés à l\'avance sur une base mensuelle ou annuelle, selon votre choix. Tous les frais sont non remboursables sauf si la loi l\'exige.',
        p3: 'Nous nous réservons le droit de modifier nos tarifs à tout moment. Les changements de prix vous seront communiqués à l\'avance et s\'appliqueront aux périodes de facturation suivantes.',
        p4: 'Si le paiement n\'est pas reçu ou échoue, nous pouvons suspendre ou résilier votre accès au Service.',
      },
      intellectualProperty: {
        title: '6. Propriété intellectuelle',
        p1: 'Le Service, y compris son contenu original, ses fonctionnalités et sa fonctionnalité, appartient à benX AG et est protégé par le droit international d\'auteur, les marques et autres lois sur la propriété intellectuelle.',
        p2: 'Vous conservez la propriété de toutes les données, contenus ou matériaux que vous téléchargez ou créez en utilisant le Service ("Votre contenu"). En utilisant le Service, vous nous accordez une licence pour utiliser, stocker et traiter Votre contenu uniquement dans le but de vous fournir le Service.',
        p3: 'Vous ne pouvez pas utiliser nos marques, logos ou autres informations propriétaires sans notre consentement écrit préalable.',
      },
      dataPrivacy: {
        title: '7. Données et confidentialité',
        p1: 'Votre utilisation du Service est également régie par notre',
        privacyPolicy: 'Politique de confidentialité',
        p2: '. Veuillez consulter notre Politique de confidentialité pour comprendre comment nous collectons, utilisons et protégeons vos données.',
        p3: 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données, mais ne pouvons garantir une sécurité absolue. Vous êtes responsable du maintien de la sécurité de vos identifiants de compte.',
      },
      serviceAvailability: {
        title: '8. Disponibilité du service',
        p1: 'Nous nous efforçons de fournir un accès fiable et continu au Service. Cependant, nous ne garantissons pas que le Service sera disponible à tout moment ou exempt d\'interruptions, d\'erreurs ou de défauts.',
        p2: 'Nous pouvons effectuer des maintenances ou mises à jour programmées qui peuvent temporairement interrompre l\'accès au Service. Nous ferons des efforts raisonnables pour vous informer à l\'avance des maintenances planifiées.',
      },
      termination: {
        title: '9. Résiliation',
        p1: 'Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte ou en nous contactant. Après l\'annulation, votre accès au Service continuera jusqu\'à la fin de votre période de facturation en cours.',
        p2: 'Nous pouvons suspendre ou résilier votre accès au Service immédiatement si :',
        items: [
          'Vous violez ces Conditions',
          'Vous ne payez pas les frais applicables',
          'Nous sommes tenus de le faire par la loi',
          'Nous cessons le Service',
        ],
        p3: 'À la résiliation, votre droit d\'utiliser le Service cessera immédiatement. Nous pouvons supprimer votre compte et vos données après une période de conservation raisonnable, sauf si nous sommes tenus de les conserver par la loi.',
      },
      liability: {
        title: '10. Limitation de responsabilité',
        p1: 'Dans la mesure maximale permise par la loi, benX AG ne sera pas responsable de tout dommage indirect, accessoire, spécial, consécutif ou punitif, ni de toute perte de profits ou de revenus, qu\'ils soient encourus directement ou indirectement, ni de toute perte de données, d\'utilisation, de clientèle ou d\'autres pertes intangibles.',
        p2: 'Notre responsabilité totale pour toute réclamation découlant du ou liée au Service ne dépassera pas le montant que vous nous avez payé au cours des douze (12) mois précédant la réclamation.',
      },
      changes: {
        title: '11. Modifications des conditions',
        p1: 'Nous nous réservons le droit de modifier ces Conditions à tout moment. Nous vous informerons de tout changement significatif en publiant les Conditions mises à jour sur cette page et en mettant à jour la date "Dernière mise à jour". Votre utilisation continue du Service après de tels changements constitue l\'acceptation des Conditions modifiées.',
      },
      governingLaw: {
        title: '12. Droit applicable',
        p1: 'Ces Conditions seront régies et interprétées conformément aux lois de l\'Allemagne, sans égard à ses dispositions relatives aux conflits de lois. Tout litige découlant de ces Conditions ou du Service sera soumis à la juridiction exclusive des tribunaux d\'Allemagne.',
      },
      contact: {
        title: '13. Contact',
        p1: 'Si vous avez des questions concernant ces Conditions, veuillez nous contacter :',
        email: 'E-mail',
        address: 'Adresse',
      },
    },
    cookies: {
      title: 'Politique de cookies',
      subtitle: 'Informations sur notre utilisation des cookies',
      whatAreCookies: {
        title: '1. Que sont les cookies ?',
        p1: 'Les cookies sont de petits fichiers texte placés sur votre appareil (ordinateur, tablette ou mobile) lorsque vous visitez un site web. Les cookies sont largement utilisés pour faire fonctionner les sites web plus efficacement et pour fournir des informations aux propriétaires de sites web.',
        p2: 'Les cookies permettent à un site web de reconnaître votre appareil et de stocker certaines informations sur vos préférences ou actions passées. Cela nous aide à vous offrir une meilleure expérience lorsque vous naviguez sur notre site web et nous permet également d\'améliorer nos services.',
      },
      howWeUse: {
        title: '2. Comment nous utilisons les cookies',
        p1: 'Nous utilisons des cookies aux fins suivantes :',
        essential: 'Cookies essentiels : Nécessaires au bon fonctionnement du site web',
        analytics: 'Cookies analytiques : Nous aident à comprendre comment les visiteurs interagissent avec notre site web',
        functional: 'Cookies fonctionnels : Mémorisent vos préférences et paramètres',
        performance: 'Cookies de performance : Collectent des informations sur les performances du site web',
      },
      types: {
        title: '3. Types de cookies que nous utilisons',
        essential: {
          title: '3.1 Cookies essentiels',
          p1: 'Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés dans nos systèmes. Ils ne sont généralement définis qu\'en réponse aux actions que vous effectuez, telles que la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires.',
          p2: 'Exemples : Cookies de session, cookies d\'authentification, cookies de sécurité',
        },
        analytics: {
          title: '3.2 Cookies analytiques',
          p1: 'Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d\'améliorer les performances de notre site web. Ils nous aident à savoir quelles pages sont les plus populaires et à voir comment les visiteurs se déplacent sur le site.',
          p2: 'Exemples : Cookies Google Analytics (si utilisés)',
        },
        functional: {
          title: '3.3 Cookies fonctionnels',
          p1: 'Ces cookies permettent au site web de fournir des fonctionnalités et une personnalisation améliorées. Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages.',
          p2: 'Exemples : Préférences linguistiques, paramètres régionaux, préférences d\'interface utilisateur',
        },
        performance: {
          title: '3.4 Cookies de performance',
          p1: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant et en rapportant des informations de manière anonyme. Cela nous aide à améliorer le fonctionnement de notre site web.',
        },
      },
      thirdParty: {
        title: '4. Cookies tiers',
        p1: 'En plus de nos propres cookies, nous pouvons également utiliser divers cookies tiers pour rapporter des statistiques d\'utilisation du Service, diffuser des publicités, etc. Ces cookies tiers peuvent inclure :',
        items: ['Services d\'analyse (par ex., Google Analytics)', 'Réseaux publicitaires', 'Plateformes de médias sociaux'],
        p2: 'Ces cookies tiers sont soumis aux politiques de confidentialité respectives des tiers. Nous ne contrôlons pas ces cookies, et vous devriez consulter les sites web tiers pour plus d\'informations sur leurs pratiques en matière de cookies.',
      },
      duration: {
        title: '5. Durée des cookies',
        p1: 'Les cookies peuvent être soit des cookies "de session" soit des cookies "persistants" :',
        session: 'Cookies de session : Ce sont des cookies temporaires qui sont supprimés lorsque vous fermez votre navigateur. Ils permettent au site web de lier vos actions pendant une session de navigation.',
        persistent: 'Cookies persistants : Ils restent sur votre appareil pendant une période définie ou jusqu\'à ce que vous les supprimiez. Ils sont activés chaque fois que vous visitez le site web qui les a créés.',
      },
      managing: {
        title: '6. Gestion des cookies',
        p1: 'Vous avez le droit d\'accepter ou de refuser les cookies. La plupart des navigateurs web acceptent automatiquement les cookies, mais vous pouvez généralement modifier les paramètres de votre navigateur pour refuser les cookies si vous le préférez.',
        p2: 'Cependant, si vous choisissez de refuser les cookies, vous pourriez ne pas pouvoir profiter pleinement des fonctionnalités interactives de notre site web ou certains de nos services pourraient ne pas fonctionner correctement.',
        p3: 'Vous pouvez gérer les cookies via les paramètres de votre navigateur. Voici des liens vers les instructions pour les navigateurs populaires :',
      },
      consent: {
        title: '7. Consentement aux cookies',
        p1: 'Lors de votre première visite sur notre site web, nous pouvons vous demander votre consentement pour utiliser certains cookies. Vous pouvez retirer votre consentement à tout moment en ajustant vos préférences de cookies dans les paramètres de votre navigateur ou en nous contactant.',
        p2: 'Les cookies essentiels ne nécessitent pas de consentement car ils sont nécessaires au fonctionnement du site web.',
      },
      updates: {
        title: '8. Mises à jour de cette politique de cookies',
        p1: 'Nous pouvons mettre à jour cette Politique de cookies de temps en temps pour refléter les changements dans nos pratiques ou pour d\'autres raisons opérationnelles, légales ou réglementaires. Nous vous informerons de tout changement significatif en publiant la nouvelle Politique de cookies sur cette page et en mettant à jour la date "Dernière mise à jour".',
      },
      contact: {
        title: '9. Contact',
        p1: 'Si vous avez des questions concernant notre utilisation des cookies ou cette Politique de cookies, veuillez nous contacter :',
        email: 'E-mail',
        address: 'Adresse',
      },
    },
  },
};

