// Italian Translations
import { TranslationKeys } from './de';

export const it: TranslationKeys = {
  // Navigation
  nav: {
    home: 'Home',
    features: 'Funzionalità',
    pricing: 'Prezzi',
    useCases: 'Casi d\'uso',
    caseStudies: 'Casi di studio',
    compare: 'Confronta',
    partners: 'Partner',
    about: 'Chi siamo',
    contact: 'Contatti',
    docs: 'Documentazione',
    status: 'Stato',
    changelog: 'Changelog',
    login: 'Accedi',
    requestDemo: 'Richiedi demo',
    password: 'Password',
    allFeaturesOverview: 'Panoramica di tutte le funzionalità',
    featureLabels: {
      dashboards: '80+ Dashboard',
      templates: '75+ Template',
      bpmn: 'Editor processi BPMN',
      migration: 'Migrazione dati',
      harmonization: 'Armonizzazione dati',
      cutover: 'Gestione cutover',
      risks: 'Gestione rischi e problemi',
      resources: 'Pianificazione risorse',
    },
  },
  
  // Common
  common: {
    learnMore: 'Scopri di più',
    getStarted: 'Inizia ora',
    readMore: 'Leggi di più',
    viewAll: 'Vedi tutto',
    back: 'Indietro',
    next: 'Avanti',
    submit: 'Invia',
    cancel: 'Annulla',
    save: 'Salva',
    search: 'Cerca',
    loading: 'Caricamento...',
    error: 'Errore',
    success: 'Successo',
    yes: 'Sì',
    no: 'No',
    close: 'Chiudi',
    download: 'Scarica',
    subscribe: 'Iscriviti',
    email: 'Email',
    phone: 'Telefono',
    name: 'Nome',
    company: 'Azienda',
    message: 'Messaggio',
  },
  
  // Homepage
  home: {
    hero: {
      badge: 'Gestione progetti SAP reinventata',
      title: 'Pianifica, gestisci ed esegui progetti SAP in modo più intelligente – con CUTO',
      subtitle: 'Accelera i progetti SAP con modelli preconfigurati, stima realistica dello sforzo e dashboard intelligenti — tutto in una piattaforma.',
      cta: {
        primary: 'Ottieni accesso a vita',
        secondary: 'Guarda come funziona',
      },
    },
    stats: {
      projects: 'Progetti di successo',
      timeSaved: 'Tempo risparmiato',
      satisfaction: 'Soddisfazione cliente',
      countries: 'Paesi nel mondo',
    },
    features: {
      title: 'Tutto ciò di cui hai bisogno per progetti SAP di successo',
      subtitle: 'CUTO combina metodi collaudati con tecnologia moderna per la massima trasparenza del progetto.',
    },
    problem: {
      title: 'I progetti SAP sono complessi',
      subtitle: 'Molti progetti falliscono a causa della mancanza di struttura, responsabilità poco chiare e mancanza di trasparenza.',
      problems: [
        'Mancanza di standardizzazione',
        'Responsabilità poco chiare',
        'Mancanza di trasparenza',
        'Ritardi e sforamenti di budget',
      ],
    },
    solution: {
      title: 'CUTO risolve questi problemi',
      subtitle: 'Con processi strutturati, ruoli chiari e informazioni in tempo reale.',
    },
    testimonials: {
      title: 'Cosa dicono i nostri clienti',
      subtitle: 'Scopri come CUTO trasforma i progetti SAP.',
    },
    faq: {
      title: 'Domande frequenti',
      subtitle: 'Trova risposte alle domande più importanti su CUTO.',
    },
    cta: {
      title: 'Pronto per una gestione progetti SAP strutturata?',
      subtitle: 'Contattaci per una demo e scopri come CUTO può supportare il tuo prossimo progetto SAP.',
      button: 'Richiedi demo',
    },
    newsletter: {
      title: 'Checklist progetto SAP',
      subtitle: 'Ottieni la nostra checklist completa che copre tutte le fasi dell\'implementazione SAP. Utilizzata da oltre 500 project manager in tutto il mondo.',
      placeholder: 'La tua email aziendale',
      button: 'Scarica checklist gratuita',
      disclaimer: 'Iscrivendoti, accetti di ricevere aggiornamenti occasionali. Puoi annullare l\'iscrizione in qualsiasi momento.',
    },
    explainerVideo: {
      title: 'Guarda CUTO in azione',
      subtitle: 'Scopri in 90 secondi come CUTO trasforma i tuoi progetti SAP.',
      comingSoon: 'Video in arrivo',
      badge: 'Guarda demo',
    },
    trustBadges: {
      gdpr: 'Conforme GDPR',
      madeInGermany: 'Made in Germany',
      euHosting: 'Hosting UE',
      sapCertified: 'Certificato SAP',
    },
    socialProof: {
      title: 'Scelto dai professionisti SAP delle aziende leader',
    },
    statsLabels: {
      dashboards: 'Dashboard',
      templates: 'Template',
      dashboardCategories: 'Categorie dashboard',
      processLevels: 'Livelli di processo',
    },
    problemStatement: {
      title: 'I progetti SAP sono complessi. I tuoi strumenti non dovrebbero esserlo.',
      subtitle: 'Comprendiamo le tue sfide – e abbiamo creato CUTO per risolverle.',
      problem: 'Il problema',
      problems: {
        pmoOverhead: {
          title: 'Alto overhead PMO',
          description: 'Il tracciamento manuale, i fogli Excel infiniti e le informazioni sparse drenano la produttività del tuo team.',
        },
        doubleEntry: {
          title: 'Doppia immissione dati',
          description: 'Mantenere più sistemi porta a dati incoerenti, tempo sprecato ed errori costosi.',
        },
        noDashboard: {
          title: 'Nessun dashboard centrale',
          description: 'Senza visibilità in tempo reale, i rischi passano inosservati e le decisioni si basano su informazioni obsolete.',
        },
      },
      solution: 'CUTO risolve tutti e tre – in una piattaforma unificata',
    },
    howItWorks: {
      title: 'Come funziona – Come CUTO ti supporta',
      subtitle: 'CUTO.ai ti guida attraverso l\'intero ciclo del progetto SAP – dalla prima idea al go-live. In quattro passaggi, la complessità diventa un piano di progetto chiaro e gestibile.',
      steps: {
        templates: {
          title: '75+ Template',
          description: 'Cattura il tuo progetto SAP in pochi minuti. Scegli tra template predefiniti per tipici tipi di progetti SAP. CUTO riconosce automaticamente le fasi, le attività e i ruoli rilevanti e getta le basi per il tuo piano di progetto strutturato.',
        },
        planning: {
          title: 'Pianificazione completa',
          description: 'Stime di effort realistiche. Basandosi sui tuoi input (scope, sistemi, dimensione del team), CUTO.ai crea una stima di effort solida – basata sui dati, tracciabile e regolabile. Niente più congetture, ma basi di pianificazione affidabili.',
        },
        control: {
          title: 'Controllo totale',
          description: 'Mantieni il controllo totale in ogni momento. I dashboard ti mostrano il progresso, i rischi e le dipendenze in tempo reale. Gli aggiornamenti automatici e gli alert ti aiutano a stabilire le priorità correttamente – prima che sorgano problemi.',
        },
        goLive: {
          title: 'Go-Live di successo',
          description: 'Dalla pianificazione all\'esecuzione – senza stress fino al go-live. CUTO.ai ti accompagna fino alla fine: con raccomandazioni d\'azione chiare, report di stato automatizzati e documentazione delle lezioni apprese. In questo modo, i progetti non solo vengono completati con successo ma migliorati in modo sostenibile.',
        },
      },
    },
    screenshot: {
      title: 'Dashboard CUTO',
      subtitle: 'Gestione progetti completa in un colpo d\'occhio',
    },
    integrations: {
      title: 'Integrazioni senza soluzione di continuità',
      subtitle: 'Collega CUTO ai tuoi strumenti esistenti. Importa dati, sincronizza il progresso e mantieni tutto coordinato.',
      tools: {
        jira: 'Jira',
        sapAlm: 'SAP ALM',
        msProject: 'MS Project',
        slack: 'Slack',
        teams: 'Teams',
        excel: 'Excel/CSV',
      },
      apiAvailable: 'API REST disponibile',
      requestIntegration: 'Richiedi integrazione personalizzata →',
    },
    useCases: {
      title: 'Per tutti i tipi di progetti SAP',
      subtitle: 'CUTO ti supporta con vari tipi di progetti SAP',
      items: {
        greenfield: {
          title: 'Greenfield, Brownfield o Ibrido',
          description: 'Che sia Greenfield, Brownfield o Ibrido – per la trasformazione aziendale.',
        },
        implementation: {
          title: 'Implementazione, Migrazione o Cutover',
          description: 'Gestione progetti professionale per implementazioni SAP. Pianificazione, gestione e controllo in un unico strumento.',
        },
        methodology: {
          title: 'SAP Activate, Ibrido, ASAP, Agile, Waterfall',
          description: 'Migrazione dati sicura e strutturata. Pianifica ogni passo e minimizza i rischi.',
        },
        scope: {
          title: 'Programma, Roadmap, Portfolio o Progetto singolo',
          description: 'Pianificazione ed esecuzione precisa del cutover. Dalla preparazione al go-live di successo.',
        },
      },
    },
    testimonialsList: [
      {
        quote: 'CUTO ha trasformato il modo in cui gestiamo il nostro rollout S/4HANA. I template ci hanno fatto risparmiare settimane di pianificazione, e i dashboard ci danno visibilità in tempo reale che non avevamo mai avuto.',
        author: 'Michael Krüger',
        role: 'SAP Program Manager, Acme Corp',
        initials: 'MK',
      },
      {
        quote: 'Finalmente uno strumento che capisce la complessità dei progetti SAP! La sola funzione di stima dell\'effort ha ripagato l\'intero investimento. Altamente raccomandato per qualsiasi consulenza SAP.',
        author: 'Sarah Weber',
        role: 'Partner, TechGlobal Consulting',
        initials: 'SW',
      },
      {
        quote: 'Abbiamo ridotto il nostro overhead PMO del 40% dopo essere passati a CUTO. La gestione del cutover è eccezionale – il nostro ultimo go-live è stato il più fluido che abbiamo mai avuto.',
        author: 'Thomas Bauer',
        role: 'CIO, InnoSystems GmbH',
        initials: 'TB',
      },
    ],
    faqList: [
      {
        question: 'Cosa rende CUTO diverso da JIRA o SAP Cloud ALM?',
        answer: 'CUTO è progettato appositamente per i progetti SAP. Mentre JIRA è uno strumento generico e SAP ALM si concentra sugli aspetti tecnici, CUTO fornisce gestione progetti end-to-end con template specifici SAP, stima dell\'effort basata su dati di progetti SAP reali, e integrazione perfetta con entrambi gli strumenti.',
      },
      {
        question: 'Posso migrare i miei dati di progetto esistenti a CUTO?',
        answer: 'Sì! CUTO supporta l\'importazione di dati da Excel, JIRA e SAP Cloud ALM. Il nostro team di onboarding ti aiuterà a migrare i tuoi progetti esistenti e personalizzare i template secondo il tuo flusso di lavoro attuale.',
      },
      {
        question: 'CUTO è adatto per piccoli progetti SAP?',
        answer: 'Assolutamente. CUTO scala da implementazioni di singolo progetto a programmi complessi multi-sistema. Il nostro piano Starter è perfetto per progetti più piccoli, mentre i piani Professional ed Enterprise supportano complessità illimitata.',
      },
      {
        question: 'Quanto tempo ci vuole per iniziare?',
        answer: 'La maggior parte dei team è operativa in un giorno. Scegli semplicemente un template, personalizza i parametri del tuo progetto, e CUTO genera la tua struttura di progetto completa. Nessuna configurazione lunga richiesta.',
      },
      {
        question: 'Offrite integrazioni con altri strumenti?',
        answer: 'Sì! CUTO si integra con JIRA, SAP Cloud ALM, Microsoft Project, e strumenti di comunicazione comuni come Slack e Teams. I piani Enterprise includono accesso API personalizzato per integrazioni aggiuntive.',
      },
      {
        question: 'Che tipo di supporto offrite?',
        answer: 'Tutti i piani includono supporto email e accesso alla nostra knowledge base. I piani Professional aggiungono supporto chat, mentre i clienti Enterprise ottengono un success manager dedicato e tempi di risposta garantiti da SLA.',
      },
    ],
  },
  
  // Footer
  footer: {
    description: 'Gestione progetti strutturata per progetti SAP. Dalla trasformazione al cutover di successo.',
    navigation: 'Navigazione',
    contact: 'Contatti',
    legal: 'Legale',
    imprint: 'Note legali',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini di servizio',
    cookies: 'Politica sui cookie',
    stayUpdated: 'Resta aggiornato',
    newsletterText: 'Ricevi consigli sui progetti SAP e aggiornamenti CUTO.',
    copyright: '© {year} CUTO. Tutti i diritti riservati.',
    madeWith: 'Fatto con ❤️ per la gestione di progetti SAP',
  },
  
  // Partners Page
  partners: {
    hero: {
      badge: 'Programma Partner',
      title: 'Cresci con CUTO',
      subtitle: 'Unisciti al nostro ecosistema di partner e beneficia di commissioni interessanti, risorse esclusive e un mercato di trasformazione SAP in crescita.',
      cta: 'Diventa partner',
    },
    stats: {
      partners: 'Partner nel mondo',
      countries: 'Paesi attivi',
      satisfaction: 'Soddisfazione',
      payouts: 'Pagato',
    },
    types: {
      title: 'Scegli il tuo modello di partnership',
      subtitle: 'Che tu sia un freelancer o una grande azienda – abbiamo il programma giusto per te.',
      referral: {
        name: 'Partner di riferimento',
        description: 'Raccomanda CUTO alla tua rete e guadagna commissioni interessanti per ogni contratto concluso.',
      },
      reseller: {
        name: 'Partner rivenditore',
        description: 'Vendi CUTO come parte del tuo portfolio e beneficia di margini interessanti e ricavi ricorrenti.',
      },
      solution: {
        name: 'Partner soluzioni',
        description: 'Partnership strategica per grandi società di consulenza con attività go-to-market congiunte e co-selling.',
      },
      technology: {
        name: 'Partner tecnologico',
        description: 'Integra la tua soluzione con CUTO e esplora insieme nuovi mercati attraverso sinergie tecnologiche.',
      },
    },
    tiers: {
      title: 'Livelli partner',
      subtitle: 'Più vendi, più ne benefici. Passa di livello e goditi vantaggi aggiuntivi.',
    },
    benefits: {
      title: 'Perché diventare partner CUTO?',
    },
    testimonials: {
      title: 'Cosa dicono i nostri partner',
    },
    faq: {
      title: 'Domande frequenti',
    },
    cta: {
      title: 'Pronto a diventare partner?',
      subtitle: 'Inizia oggi e beneficia del crescente mercato di trasformazione SAP. La registrazione richiede solo 5 minuti.',
      apply: 'Candidati come partner',
      consultation: 'Prenota una consulenza',
    },
    apply: {
      title: 'Candidatura partner',
      subtitle: 'Compila il modulo per candidarti come partner CUTO. L\'elaborazione richiede solitamente 1-2 giorni lavorativi.',
      steps: {
        type: 'Tipo di partner',
        contact: 'Contatto',
        company: 'Azienda',
        submit: 'Invia',
      },
      success: {
        title: 'Grazie per la tua candidatura!',
        message: 'Abbiamo ricevuto la tua candidatura e ti contatteremo entro 2 giorni lavorativi.',
      },
    },
  },
  
  // Status Page
  status: {
    title: 'Stato CUTO',
    operational: 'Operativo',
    degraded: 'Prestazioni degradate',
    partialOutage: 'Interruzione parziale',
    majorOutage: 'Interruzione importante',
    maintenance: 'In manutenzione',
    lastUpdated: 'Ultimo aggiornamento',
    liveStats: {
      title: 'Statistiche in tempo reale',
      projects: 'Progetti',
      workstreams: 'Workstream',
      tasks: 'Attività',
      users: 'Utenti',
      completedToday: 'Completate oggi',
      activeProjects: 'Progetti attivi',
      updateInfo: 'Statistiche aggiornate ogni 5 secondi',
    },
    uptime: {
      title: 'Uptime ultimi 90 giorni',
      overall: 'Disponibilità complessiva',
    },
    components: {
      title: 'Componenti del servizio',
    },
    incidents: {
      title: 'Incidenti passati',
      noIncidents: 'Nessun incidente',
      noIncidentsDesc: 'Nessun incidente significativo negli ultimi 90 giorni.',
    },
    subscribe: {
      title: 'Ricevi aggiornamenti',
      subtitle: 'Ricevi notifiche immediate in caso di interruzioni o manutenzioni programmate.',
      button: 'Iscriviti agli aggiornamenti',
    },
  },
  
  // Docs
  docs: {
    title: 'Documentazione',
    subtitle: 'Tutto ciò che devi sapere per usare CUTO con successo. Guide, tutorial e best practice.',
    search: 'Cerca articoli, argomenti o parole chiave...',
    popularArticles: 'Articoli popolari',
    browseTopics: 'Sfoglia argomenti',
    quickAccess: 'Accesso rapido',
    articles: 'Articoli',
    readingTime: 'Tempo di lettura',
    lastUpdated: 'Aggiornato',
    notFound: {
      title: 'Non hai trovato quello che cerchi?',
      subtitle: 'Il nostro team di supporto è qui per aiutarti. Contattaci per assistenza personalizzata.',
      contactSupport: 'Contatta il supporto',
    },
    feedback: {
      title: 'Questo articolo ti è stato utile?',
      subtitle: 'Facci sapere come possiamo migliorare la nostra documentazione.',
      helpful: 'Sì, utile',
      notHelpful: 'Non utile',
    },
    relatedArticles: 'Articoli correlati',
    backToOverview: 'Torna alla panoramica',
  },
  
  // Cookie Consent
  cookies: {
    title: 'Impostazioni cookie',
    description: 'Utilizziamo i cookie per migliorare la tua esperienza.',
    acceptAll: 'Accetta tutti',
    rejectAll: 'Rifiuta tutti',
    customize: 'Personalizza',
    necessary: 'Necessari',
    analytics: 'Analitici',
    marketing: 'Marketing',
    save: 'Salva impostazioni',
  },
  
  // Language
  language: {
    select: 'Seleziona lingua',
    current: 'Lingua corrente',
  },

  // Features
  features: {
    overview: {
      title: 'Tutto ciò di cui hai bisogno per i progetti SAP',
      subtitle: 'CUTO fornisce un toolkit completo per la gestione dei progetti SAP – dalla pianificazione iniziale al go-live e oltre. Scopri come ogni funzionalità ti aiuta a realizzare progetti di successo.',
      screenshotTitle: 'Panoramica della piattaforma CUTO',
      screenshotSubtitle: 'Gestione progetti completa in un colpo d\'occhio',
      additionalCapabilities: 'Funzionalità aggiuntive',
      cta: {
        title: 'Pronto a vedere CUTO in azione?',
        subtitle: 'Prenota una demo personalizzata e scopri come CUTO può trasformare la tua gestione dei progetti SAP.',
        demo: 'Prenota una demo',
        pricing: 'Vedi prezzi',
      },
    },
    categories: {
      dashboards: {
        name: '80+ Dashboard',
        description: 'Visibilità in tempo reale su ogni aspetto del tuo progetto SAP. Dai riepiloghi esecutivi alle analisi tecniche approfondite.',
        highlights: ['KPI Esecutivi', 'Mappe di rischio', 'Tracciamento progressi', 'Monitoraggio Cutover'],
      },
      templates: {
        name: '75+ Template',
        description: 'Template di progetto collaudati basati sulla metodologia SAP Activate e reale esperienza di implementazione.',
        highlights: ['Implementazione S/4HANA', 'Migrazione dati', 'Template moduli', 'Piani Cutover'],
      },
      bpmn: {
        name: 'Editor di processi BPMN',
        description: 'Documenta i tuoi processi aziendali con il nostro editor BPMN 2.0 integrato. Tracciabilità completa alle attività del progetto.',
        highlights: ['Editor Drag & Drop', 'Gerarchia a 6 livelli', 'Controllo versioni', 'Esportazione BPMN 2.0'],
      },
      migration: {
        name: 'Migrazione dati',
        description: 'Strumenti completi di validazione e qualità dei dati. Rileva i problemi prima che diventino problemi di go-live.',
        highlights: ['Catalogo dati', 'Motore di validazione', 'Controlli qualità', 'Riconciliazione'],
      },
      harmonization: {
        name: 'Armonizzazione dati',
        description: 'Identifica e pulisci i duplicati nei tuoi dati di origine prima della migrazione. Algoritmi di matching intelligenti e selezione Golden Record.',
        highlights: ['Rilevamento duplicati', 'Matching fuzzy', 'Golden Record', 'Approvazione 4 occhi'],
      },
      cutover: {
        name: 'Gestione Cutover',
        description: 'Pianifica, prova ed esegui il tuo go-live con precisione. Monitoraggio in tempo reale e supporto decisionale.',
        highlights: ['Checklist', 'Tracciamento Timeline', 'Supporto Go/No-Go', 'Hypercare'],
      },
      risks: {
        name: 'Gestione rischi e problemi',
        description: 'Identificazione proattiva dei rischi e tracciamento dei problemi. Mantieni il tuo progetto in carreggiata con visibilità completa.',
        highlights: ['Registro rischi', 'Mappa di calore', 'Tracciamento misure', 'Workflow di escalation'],
      },
      resources: {
        name: 'Pianificazione risorse',
        description: 'Ottimizza l\'allocazione del team e traccia la capacità. Timesheet integrato per un costing accurato del progetto.',
        highlights: ['Pianificazione capacità', 'Matrice competenze', 'Timesheet', 'Tracciamento utilizzo'],
      },
    },
    additionalCapabilities: {
      gantt: { title: 'Diagrammi di Gantt & Timeline', desc: 'Timeline di progetto visuale con dipendenze, milestone e evidenziazione del percorso critico.' },
      budget: { title: 'Tracciamento budget', desc: 'Tracciamento costi pianificati vs effettivi, analisi del burn rate e previsione al completamento.' },
      notifications: { title: 'Notifiche e Avvisi', desc: 'Notifiche e-mail per assegnazioni di attività, elementi scaduti e promemoria milestone.' },
      export: { title: 'Esportazione e Reporting', desc: 'Esportazione in Excel, PDF o PowerPoint. Generazione automatizzata di report di stato.' },
      access: { title: 'Accesso basato su ruoli', desc: 'Controlla chi vede cosa con permessi granulari per i ruoli del team.' },
      integrations: { title: 'Integrazioni', desc: 'Accesso API per l\'integrazione con Jira, ServiceNow e altri strumenti enterprise.' },
    },
    // Feature: Dashboards
    dashboards: {
      badge: 'Dashboard preconfigurate',
      title: 'Dashboard e Report Esecutivi',
      subtitle: 'Prendi decisioni basate sui dati con la nostra libreria completa di dashboard. Dai riepiloghi esecutivi alle analisi tecniche – tutte le metriche a colpo d\'occhio.',
      screenshotTitle: 'Dashboard Esecutiva',
      screenshotSubtitle: 'Panoramica dello stato del progetto in tempo reale',
      stats: {
        dashboards: 'Dashboard',
        categories: 'Categorie',
        customizable: 'Personalizzabile',
        realtime: 'Tempo reale',
      },
      keyBenefits: {
        realtime: { title: 'Aggiornamenti in tempo reale', desc: 'Tutte le dashboard si aggiornano automaticamente quando cambiano i dati del progetto' },
        mobile: { title: 'Ottimizzato per mobile', desc: 'Accedi allo stato del progetto da qualsiasi dispositivo' },
        export: { title: 'Esporta e Condividi', desc: 'Esporta in PDF, Excel o condividi link live con gli stakeholder' },
      },
      categoriesLabel: 'Categorie',
      dashboardsLabel: 'dashboard',
      categories: {
        executive: {
          name: 'Esecutivo e Strategico',
          dashboards: [
            { id: 'EXE-001', name: 'Dashboard salute progetto', desc: 'Stato generale del progetto con sistema a semaforo per lo Steering Committee' },
            { id: 'EXE-002', name: 'Riepilogo esecutivo', desc: 'KPI di alto livello, stato milestone, principali rischi per il C-Level' },
            { id: 'EXE-003', name: 'Allineamento strategico', desc: 'Allineamento dei risultati del progetto con gli obiettivi strategici' },
            { id: 'EXE-004', name: 'Realizzazione del valore', desc: 'Tracciamento business case, misurazione ROI' },
            { id: 'EXE-005', name: 'Portfolio', desc: 'Panoramica multi-progetto per i programmi' },
          ]
        },
        time: {
          name: 'Gestione del tempo e Pianificazione',
          dashboards: [
            { id: 'TIM-001', name: 'Vista Gantt', desc: 'Timeline visuale con milestone e dipendenze' },
            { id: 'TIM-002', name: 'Tracciamento milestone', desc: 'Stato delle milestone e analisi dei trend' },
            { id: 'TIM-003', name: 'Percorso critico', desc: 'Visualizzazione delle attività critiche' },
            { id: 'TIM-004', name: 'Analisi dei ritardi', desc: 'Analisi delle cause radice per i ritardi' },
            { id: 'TIM-005', name: 'Progresso per fase', desc: 'Progresso per fase del progetto' },
            { id: 'TIM-006', name: 'Confronto baseline', desc: 'Confronto piano vs effettivo' },
          ]
        },
        budget: {
          name: 'Budget e Finanza',
          dashboards: [
            { id: 'BUD-001', name: 'Panoramica budget', desc: 'Budget totale con confronto piano/effettivo' },
            { id: 'BUD-002', name: 'Tasso di consumo', desc: 'Consumo del budget nel tempo' },
            { id: 'BUD-003', name: 'Costi per workstream', desc: 'Distribuzione dei costi per workstream' },
            { id: 'BUD-004', name: 'Previsione', desc: 'Proiezione dei costi fino a fine progetto' },
            { id: 'BUD-005', name: 'Viaggi e Spese', desc: 'Controllo delle spese di viaggio' },
            { id: 'BUD-006', name: 'Tracciamento costi fornitori', desc: 'Costi esterni e spese contractor' },
            { id: 'BUD-007', name: 'Analisi degli scostamenti', desc: 'Analisi delle deviazioni con cause' },
          ]
        },
        resources: {
          name: 'Risorse e Team',
          dashboards: [
            { id: 'RES-001', name: 'Allocazione risorse', desc: 'Panoramica dell\'allocazione dei membri del team' },
            { id: 'RES-002', name: 'Matrice delle competenze', desc: 'Competenze e capacità nel team' },
            { id: 'RES-003', name: 'Pianificazione capacità', desc: 'Disponibilità e utilizzo' },
            { id: 'RES-004', name: 'Stato onboarding', desc: 'Integrazione dei nuovi membri del team' },
            { id: 'RES-005', name: 'Conflitti risorse', desc: 'Sovra-allocazione e conflitti' },
            { id: 'RES-006', name: 'Risorse esterne', desc: 'Vista contractor e consulenti' },
            { id: 'RES-007', name: 'Performance del team', desc: 'Metriche di produttività' },
          ]
        },
        risks: {
          name: 'Rischi e Problemi',
          dashboards: [
            { id: 'RSK-001', name: 'Registro dei rischi', desc: 'Tutti i rischi con probabilità e impatto' },
            { id: 'RSK-002', name: 'Mappa di calore rischi', desc: 'Matrice visuale dei rischi' },
            { id: 'RSK-003', name: 'Tracciamento problemi', desc: 'Problemi aperti e escalation' },
            { id: 'RSK-004', name: 'Trend dei rischi', desc: 'Sviluppo dei rischi nel tempo' },
            { id: 'RSK-005', name: 'Stato mitigazione', desc: 'Stato delle misure di mitigazione rischi' },
            { id: 'RSK-006', name: 'Top 10 rischi', desc: 'Focus sui rischi critici' },
          ]
        },
        scope: {
          name: 'Scope e Requisiti',
          dashboards: [
            { id: 'SCO-001', name: 'Panoramica scope', desc: 'Scope del progetto dentro/fuori scope' },
            { id: 'SCO-002', name: 'Stato requisiti', desc: 'Adempimento dei requisiti' },
            { id: 'SCO-003', name: 'Registro modifiche', desc: 'Modifiche di scope e loro impatto' },
            { id: 'SCO-004', name: 'Analisi Fit-Gap', desc: 'Standard vs personalizzazione' },
            { id: 'SCO-005', name: 'Progresso User Stories', desc: 'Per progetti agili' },
          ]
        },
        quality: {
          name: 'Qualità e Test',
          dashboards: [
            { id: 'QUA-001', name: 'Progresso test', desc: 'Stato di esecuzione dei casi di test' },
            { id: 'QUA-002', name: 'Dashboard difetti', desc: 'Bug e problemi dai test' },
            { id: 'QUA-003', name: 'Copertura test', desc: 'Copertura test per modulo' },
            { id: 'QUA-004', name: 'Stato UAT', desc: 'Stato dei test di accettazione utente' },
            { id: 'QUA-005', name: 'Quality Gates', desc: 'Raggiungimento delle quality gate' },
            { id: 'QUA-006', name: 'Stato regressione', desc: 'Risultati dei test di regressione' },
            { id: 'QUA-007', name: 'Test di performance', desc: 'Test di carico e performance' },
            { id: 'QUA-008', name: 'Tracciamento approvazioni', desc: 'Approvazioni di release' },
          ]
        },
        workstream: {
          name: 'Workstream e Modulo',
          dashboards: [
            { id: 'WRK-001', name: 'Stato workstream', desc: 'Progresso per modulo SAP/workstream' },
            { id: 'WRK-002', name: 'Dipendenze cross-workstream', desc: 'Dipendenze tra workstream' },
            { id: 'WRK-003', name: 'Punti di integrazione', desc: 'Stato di tutti i punti di integrazione' },
            { id: 'WRK-004', name: 'Progresso configurazione', desc: 'Progresso configurazione per modulo' },
            { id: 'WRK-005', name: 'Progresso BPML', desc: 'Progresso Business Process Master List' },
            { id: 'WRK-006', name: 'Copertura BPMN', desc: 'Documentazione BPMN per livello di processo' },
          ]
        },
        technical: {
          name: 'Tecnico',
          dashboards: [
            { id: 'TEC-001', name: 'Landscape sistemi', desc: 'Panoramica del landscape SAP' },
            { id: 'TEC-002', name: 'Stato interfacce', desc: 'Sviluppo e test delle interfacce' },
            { id: 'TEC-003', name: 'Stato migrazione', desc: 'Progresso della migrazione dati' },
            { id: 'TEC-004', name: 'Gestione trasporti', desc: 'Release e stato dei trasporti' },
            { id: 'TEC-005', name: 'Matrice autorizzazioni', desc: 'Panoramica ruoli e autorizzazioni' },
            { id: 'TEC-006', name: 'Backlog sviluppo', desc: 'Stato sviluppo ABAP/Fiori' },
            { id: 'TEC-007', name: 'Qualità del codice', desc: 'Metriche di qualità del codice' },
            { id: 'TEC-008', name: 'Performance sistema', desc: 'Metriche di performance del sistema' },
            { id: 'TEC-009', name: 'Stato sicurezza', desc: 'Verifiche sicurezza e compliance' },
            { id: 'TEC-010', name: 'Prontezza Cloud', desc: 'Prontezza per migrazione cloud' },
          ]
        },
        change: {
          name: 'Change Management',
          dashboards: [
            { id: 'OCM-001', name: 'Mappa stakeholder', desc: 'Analisi e coinvolgimento stakeholder' },
            { id: 'OCM-002', name: 'Progresso formazione', desc: 'Completamento della formazione' },
            { id: 'OCM-003', name: 'Piano di comunicazione', desc: 'Stato delle attività di comunicazione' },
            { id: 'OCM-004', name: 'Valutazione prontezza', desc: 'Prontezza organizzativa' },
            { id: 'OCM-005', name: 'Metriche di adozione', desc: 'Adozione utenti dopo il go-live' },
            { id: 'OCM-006', name: 'Dashboard feedback', desc: 'Feedback e soddisfazione utenti' },
          ]
        },
        golive: {
          name: 'Go-Live e Cutover',
          dashboards: [
            { id: 'GLV-001', name: 'Checklist Cutover', desc: 'Stato checklist go-live' },
            { id: 'GLV-002', name: 'Stato Hypercare', desc: 'Supporto post-go-live' },
            { id: 'GLV-003', name: 'Countdown Go-Live', desc: 'Giorni al go-live con attività critiche' },
            { id: 'GLV-004', name: 'Piano di rollout', desc: 'Stato del rollout multi-sito' },
            { id: 'GLV-005', name: 'Timeline Cutover', desc: 'Pianificazione dettagliata del cutover' },
          ]
        },
        governance: {
          name: 'Governance',
          dashboards: [
            { id: 'GOV-001', name: 'Steering Committee', desc: 'Decisioni e azioni' },
            { id: 'GOV-002', name: 'Audit trail', desc: 'Modifiche e approvazioni' },
            { id: 'GOV-003', name: 'Stato compliance', desc: 'Compliance normativa' },
            { id: 'GOV-004', name: 'Calendario riunioni', desc: 'Riunioni e workshop di progetto' },
            { id: 'GOV-005', name: 'Stato documentazione', desc: 'Progresso della documentazione di progetto' },
          ]
        },
        vendor: {
          name: 'Gestione Fornitori',
          dashboards: [
            { id: 'VEN-001', name: 'Performance fornitori', desc: 'Performance dei partner esterni' },
            { id: 'VEN-002', name: 'Stato contratti', desc: 'Panoramica contratti e scadenze' },
            { id: 'VEN-003', name: 'Monitoraggio SLA', desc: 'Conformità ai livelli di servizio' },
          ]
        },
        communication: {
          name: 'Comunicazione',
          dashboards: [
            { id: 'COM-001', name: 'Generatore di report', desc: 'Report di stato automatizzati' },
            { id: 'COM-002', name: 'Stato newsletter', desc: 'Attività di comunicazione interna' },
            { id: 'COM-003', name: 'Log escalation', desc: 'Escalation e loro risoluzione' },
            { id: 'COM-004', name: 'Verbali riunioni', desc: 'Documentazione delle riunioni' },
          ]
        },
      },
      cta: {
        title: 'Pronto a vedere queste dashboard in azione?',
        demo: 'Prenota una demo',
        allFeatures: 'Vedi tutte le funzionalità',
      },
    },

    // Feature: Templates (IT)
    templates: {
      badge: 'Template di progetto',
      title: 'Template di progetto preconfigurati',
      subtitle: 'Avvia il tuo progetto SAP con template collaudati. Ogni template contiene attività, milestone, dipendenze e stime di effort predefinite basate su esperienza reale.',
      screenshotTitle: 'Selezione template',
      screenshotSubtitle: 'Scegli tra 75+ template preconfigurati',
      stats: { templates: 'Template', categories: 'Categorie', activities: 'Attività', customizable: 'Personalizzabile' },
      keyBenefits: {
        quickStart: { title: 'Avvio rapido', desc: 'Configura il tuo progetto in minuti, non giorni' },
        bestPractices: { title: 'Best practice', desc: 'Basato su SAP Activate e metodologie collaudate' },
        estimates: { title: 'Stime accurate', desc: 'Stime realistiche da progetti reali' },
        customizable: { title: 'Completamente personalizzabile', desc: 'Adatta ogni template alle tue esigenze' },
      },
      cta: { title: 'Avvia il tuo progetto con le basi giuste', demo: 'Prenota una demo', pricing: 'Vedi prezzi' },
    },

    bpmn: {
      badge: 'Conforme BPMN 2.0',
      title: 'Editor di processi BPMN',
      subtitle: 'Documenta i tuoi processi aziendali visivamente con il nostro editor BPMN 2.0 integrato.',
      screenshotTitle: 'Editor di processi BPMN',
      screenshotSubtitle: 'Modellazione processi drag & drop',
      cta: { title: 'Pronto a documentare i tuoi processi?', demo: 'Prenota una demo', allFeatures: 'Vedi tutte le funzionalità' },
    },

    migration: {
      badge: 'Qualità e Validazione dati',
      title: 'Strumenti di migrazione dati',
      subtitle: 'Assicura il successo della migrazione con validazione completa, controlli di qualità e strumenti di riconciliazione.',
      screenshotTitle: 'Dashboard di validazione',
      screenshotSubtitle: 'Analisi dei tassi di corrispondenza in tempo reale',
      cta: { title: 'Pronto per una migrazione di successo?', demo: 'Prenota una demo', cutover: 'Gestione Cutover →' },
    },

    cutover: {
      badge: 'Pronto per il Go-Live',
      title: 'Gestione Cutover',
      subtitle: 'Pianifica, prova ed esegui il tuo go-live con precisione.',
      screenshotTitle: 'Timeline Cutover',
      screenshotSubtitle: 'Tracciamento go-live minuto per minuto',
      cta: { title: 'Pronto per un go-live senza stress?', demo: 'Prenota una demo', risks: 'Gestione rischi →' },
    },

    risks: {
      badge: 'Gestione proattiva dei rischi',
      title: 'Gestione rischi e problemi',
      subtitle: 'Identifica, valuta e mitiga i rischi prima che impattino il tuo progetto.',
      screenshotTitle: 'Mappa di calore dei rischi',
      screenshotSubtitle: 'Matrice di valutazione visuale dei rischi',
      cta: { title: 'Pronto a gestire i rischi proattivamente?', demo: 'Prenota una demo', resources: 'Pianificazione risorse →' },
    },

    resources: {
      badge: 'Gestione team',
      title: 'Pianificazione risorse',
      subtitle: 'Ottimizza l\'allocazione del tuo team e assicurati che le persone giuste lavorino sulle attività giuste.',
      screenshotTitle: 'Pianificazione capacità team',
      screenshotSubtitle: 'Panoramica dell\'allocazione risorse',
      cta: { title: 'Pronto a ottimizzare il tuo team di progetto?', demo: 'Prenota una demo', pricing: 'Vedi prezzi' },
    },

    harmonization: {
      badge: 'Ottimizza la qualità dei dati',
      title: 'Armonizzazione dati & Rilevamento duplicati',
      subtitle: 'Identifica e pulisci i duplicati nei tuoi dati di origine prima della migrazione. Dati puliti e deduplicati per il tuo sistema di destinazione.',
      screenshotTitle: 'Panoramica cluster duplicati',
      screenshotSubtitle: 'Raggruppamento intelligente e selezione Golden Record',
      stats: {
        records: 'Record max.',
        algorithms: 'Algoritmi di matching',
        strategies: 'Strategie Golden Record',
        auditTrail: 'Audit trail',
      },
      keyFeatures: {
        config: {
          title: 'Configurazione flessibile',
          desc: 'Definisci set di tabelle, relazioni e filtri per un rilevamento preciso dei duplicati.',
        },
        matching: {
          title: 'Matching intelligente',
          desc: 'Combina regole di matching esatto, fuzzy, fonetico e N-gram.',
        },
        golden: {
          title: 'Selezione Golden Record',
          desc: 'Determinazione automatica o manuale del record master.',
        },
      },
      matchTypesTitle: 'Tipi di regole di matching',
      matchTypes: {
        exact: 'Match esatto',
        exactDesc: 'I campi devono essere identici',
        exactUse: 'Numeri articolo, ID',
        fuzzy: 'Match fuzzy',
        fuzzyDesc: 'Confronto di similarità con soglia',
        fuzzyUse: 'Nomi, descrizioni',
        phonetic: 'Match fonetico',
        phoneticDesc: 'Similarità basata sul suono',
        phoneticUse: 'Nomi di persone',
        ngram: 'Confronto N-Gram',
        ngramDesc: 'Analisi di sottostringhe',
        ngramUse: 'Indirizzi, testi lunghi',
      },
      useCase: 'Caso d\'uso',
      algorithmsTitle: 'Algoritmi di matching',
      algorithms: {
        levenshtein: 'Distanza di Levenshtein',
        levenshteinDesc: 'Calcola la distanza minima di modifica tra due stringhe',
        jaroWinkler: 'Jaro-Winkler',
        jaroWinklerDesc: 'Ottimizzato per stringhe corte e nomi',
        soundex: 'Soundex & Metaphone',
        soundexDesc: 'Confronto fonetico per similarità sonora',
        ngram: 'Analisi N-Gram',
        ngramDesc: 'Analisi di sottostringhe per testi lunghi',
      },
      workflowTitle: 'Flusso di lavoro',
      workflow: {
        config: 'Configurazione',
        configDesc: 'Seleziona tabelle dal Data Catalog, definisci relazioni, imposta filtri',
        rules: 'Definisci regole',
        rulesDesc: 'Seleziona campi di match, imposta algoritmo e soglia',
        analysis: 'Avvia analisi',
        analysisDesc: 'Calcolo automatico chiavi di blocco, formazione cluster, suggerimento Golden Record',
        review: 'Revisione & Approvazione',
        reviewDesc: 'Verifica cluster, conferma Golden Record, approvazione opzionale a 4 occhi',
        export: 'Esporta',
        exportDesc: 'Dati puliti, tabella di mapping, report di audit',
      },
      goldenRecordTitle: 'Strategie Golden Record',
      goldenRecordSubtitle: 'Determina automaticamente o manualmente il record master:',
      goldenRecord: {
        completeness: 'Completezza',
        completenessDesc: 'Record con il maggior numero di campi compilati',
        recency: 'Attualità',
        recencyDesc: 'Record più recente per data di creazione',
        quality: 'Qualità',
        qualityDesc: 'Punteggio di qualità dei dati più alto',
        manual: 'Manuale',
        manualDesc: 'Nessun suggerimento automatico',
      },
      reviewTitle: 'Revisione & Approvazione',
      review: {
        clusterOverview: 'Panoramica cluster: Tutti i gruppi di duplicati a colpo d\'occhio',
        detailCompare: 'Confronto dettagliato: Confronto campo per campo dei record',
        matchDetails: 'Dettagli match: Visualizzazione trasparente dei motivi di rilevamento',
        fourEyes: 'Principio dei 4 occhi: Approvazione opzionale da parte di una seconda persona',
      },
      useCasesTitle: 'Esempi di utilizzo',
      useCases: {
        materials: {
          title: 'Duplicati materiali (SAP)',
          rule: 'Match fuzzy sulla descrizione materiale con soglia dell\'85%',
        },
        customers: {
          title: 'Duplicati clienti',
          rule: 'Match fonetico sul nome + match fuzzy sull\'indirizzo',
          filter: 'Golden Record: Record più completo',
        },
        vendors: {
          title: 'Pulizia fornitori',
          rule: 'Match esatto sul codice fiscale + match fuzzy sul nome',
          filter: 'Con approvazione a 4 occhi',
        },
      },
      tables: 'Tabelle',
      rule: 'Regola',
      filter: 'Filtro',
      exportTitle: 'Opzioni di esportazione',
      export: {
        cleanedData: {
          title: 'Dati puliti',
          desc: 'Nuova versione del dataset senza duplicati come fonte di migrazione',
        },
        mappingTable: {
          title: 'Tabella di mapping',
          desc: 'ID vecchio → ID Golden Record per le regole di migrazione',
        },
        summary: {
          title: 'Riepilogo',
          desc: 'Statistiche e audit trail per documentazione e conformità',
        },
      },
      benefitsTitle: 'Vantaggi',
      benefits: {
        earlyDetection: 'Rilevamento precoce: Identificare problemi di dati prima della migrazione',
        flexibility: 'Flessibilità: Regole personalizzabili per ogni caso d\'uso',
        transparency: 'Trasparenza: Punteggi di match e decisioni tracciabili',
        compliance: 'Conformità: Principio dei 4 occhi e audit trail completo',
        integration: 'Integrazione: Connessione fluida con Data Catalog e regole di migrazione',
        scalability: 'Scalabilità: Ottimizzato per grandi volumi di dati (fino a 3 milioni di record)',
      },
      cta: {
        title: 'Pronto per dati puliti?',
        subtitle: 'Scopri come CUTO ottimizza la qualità dei tuoi dati prima della migrazione.',
        demo: 'Richiedi demo',
        migration: 'Migrazione dati →',
      },
    },
  },

  pricing: {
    title: 'Prezzi semplici e trasparenti',
    subtitle: 'Ottieni l\'accesso a vita a CUTO durante la nostra fase di early adopter. Nessun canone mensile, nessun costo nascosto – paga una volta, usa per sempre.',
    lifetime: '/a vita',
    oneTimePayment: 'Pagamento unico',
    contactForPricing: 'Contattaci per i prezzi',
    getStarted: 'Inizia ora',
    contactSales: 'Contatta le vendite',
    mostPopular: 'Più popolare',

    plans: {
      starter: {
        name: 'Starter',
        description: 'Per piccoli team e progetti singoli',
        features: {
          projects: '1 Progetto',
          users: 'Fino a 5 utenti',
          templates: 'Tutti i 75+ modelli di progetto',
          dashboards: '30+ Dashboard',
          support: 'Supporto via e-mail',
          updates: 'Aggiornamenti a vita',
        },
      },
      professional: {
        name: 'Professional',
        description: 'Per team in crescita e progetti multipli',
        features: {
          projects: 'Progetti illimitati',
          users: 'Fino a 25 utenti',
          templates: 'Tutti i 75+ modelli di progetto',
          dashboards: 'Tutti gli 80+ dashboard',
          bpmn: 'Editor di processi BPMN',
          migration: 'Strumenti di migrazione dati',
          support: 'Supporto prioritario e-mail & chat',
          updates: 'Aggiornamenti a vita',
        },
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Per grandi organizzazioni e programmi',
        price: 'Personalizzato',
        features: {
          everything: 'Tutto illimitato',
          users: 'Utenti illimitati',
          professional: 'Tutte le funzionalità Professional',
          onPremise: 'Opzione di deployment on-premise',
          integrations: 'Integrazioni personalizzate',
          successManager: 'Success manager dedicato',
          sla: 'SLA & supporto prioritario',
          training: 'Formazione & onboarding',
        },
      },
    },

    comparison: {
      title: 'Confronto funzionalità',
      feature: 'Funzionalità',
      projects: 'Progetti',
      users: 'Utenti',
      templates: 'Modelli di progetto',
      dashboards: 'Dashboard',
      bpmn: 'Editor di processi BPMN',
      migration: 'Strumenti di migrazione dati',
      cutover: 'Gestione cutover',
      onPremise: 'Deployment on-premise',
      api: 'Accesso API',
      support: 'Supporto',
      values: {
        unlimited: 'Illimitato',
        basic: 'Base',
        full: 'Completo',
        email: 'E-mail',
        emailChat: 'E-mail & Chat',
        dedicatedSla: 'Dedicato + SLA',
        custom: '+ Personalizzato',
      },
    },

    faq: {
      title: 'Domande frequenti',
      questions: {
        lifetime: {
          q: 'Cosa significa "accesso a vita"?',
          a: 'Una volta acquistato CUTO, hai accesso per sempre. Questo include tutti gli aggiornamenti futuri e le nuove funzionalità senza costi aggiuntivi. Nessun abbonamento, nessun rinnovo.',
        },
        upgrade: {
          q: 'Posso fare l\'upgrade in seguito?',
          a: 'Sì! Puoi passare da Starter a Professional in qualsiasi momento. Pagherai solo la differenza tra i due piani. Contattaci per i prezzi di upgrade.',
        },
        trial: {
          q: 'C\'è una prova gratuita?',
          a: 'Offriamo una demo personalizzata dove ti mostriamo CUTO con il tuo caso d\'uso specifico. Contattaci per programmare una chiamata demo di 30 minuti.',
        },
        payment: {
          q: 'Quali metodi di pagamento accettate?',
          a: 'Accettiamo bonifico bancario, carta di credito e PayPal. Per i clienti Enterprise, possiamo anche accomodare ordini di acquisto e fatturazione.',
        },
        security: {
          q: 'I miei dati sono al sicuro?',
          a: 'Sì. CUTO utilizza crittografia standard del settore, backup regolari e gestione dei dati conforme al GDPR. I clienti Enterprise possono scegliere il deployment on-premise.',
        },
        training: {
          q: 'Offrite formazione?',
          a: 'I piani Professional includono documentazione completa e tutorial video. I piani Enterprise includono onboarding personalizzato e sessioni di formazione.',
        },
      },
    },

    cta: {
      title: 'Pronto a ottimizzare i tuoi progetti SAP?',
      subtitle: 'Unisciti agli early adopter che stanno già gestendo i loro progetti SAP in modo più intelligente con CUTO.',
      button: 'Prenota una demo',
    },
  },

  docs: {
    badge: 'Knowledge Base',
    title: 'Documentazione',
    subtitle: 'Tutto quello che devi sapere per usare CUTO con successo. Guide, tutorial e best practice.',
    searchPlaceholder: 'Cerca articoli, argomenti o parole chiave...',
    noResults: 'Nessun risultato per "{query}"',
    popular: 'Articoli popolari',
    browseTopics: 'Esplora argomenti',
    articles: 'Articoli',
    explore: 'Esplora',
    quickAccess: 'Accesso rapido',
    gettingStarted: 'Primi passi',
    functionsLabel: 'Funzionalità',
    integrations: 'Integrazioni',
    cta: {
      title: 'Non hai trovato quello che cerchi?',
      description: 'Il nostro team di supporto è qui per aiutarti. Contattaci per assistenza personalizzata.',
      contactSupport: 'Contatta il supporto',
    },
  },

  partners: {
    badge: 'Programma Partner',
    title: 'Cresci con CUTO',
    subtitle: 'Entra a far parte del nostro ecosistema di partner e approfitta di commissioni interessanti, risorse esclusive e un mercato di trasformazione SAP in crescita.',
    stats: {
      partners: 'Partner nel mondo',
      countries: 'Paesi attivi',
      satisfaction: 'Soddisfazione',
      payouts: 'Pagati',
    },
    cta: {
      becomePartner: 'Diventa partner',
      learnMore: 'Scopri di più',
    },
    partnerTypes: {
      title: 'Scegli il tuo modello di partnership',
      subtitle: 'Che tu sia freelance o grande azienda – abbiamo il programma giusto per te.',
      popular: 'Popolare',
      commission: 'Modello commissioni',
      firstYear: 'Primo anno',
      recurring: 'Ricorrente',
      idealFor: 'Ideale per',
      yourBenefits: 'I tuoi vantaggi',
      requirements: 'Requisiti',
      applyAs: 'Candidati come partner {type}',
    },
    tiers: {
      title: 'Livelli Partner',
      subtitle: 'Più vendi, più ne benefici. Sali di livello e goditi vantaggi aggiuntivi.',
      recommended: 'CONSIGLIATO',
      minRevenue: 'Fatturato min.',
      minDeals: 'Deal min.',
      certified: 'Certificati',
      benefits: 'Vantaggi',
      moreBenefits: '+{count} altri vantaggi',
      year: '/Anno',
    },
    whyPartner: {
      title: 'Perché diventare partner CUTO?',
    },
    testimonials: {
      title: 'Cosa dicono i nostri partner',
    },
    faq: {
      title: 'Domande frequenti',
    },
    apply: {
      title: 'Pronto a diventare partner?',
      subtitle: 'Inizia oggi e approfitta del mercato in crescita della trasformazione SAP. La registrazione richiede solo 5 minuti.',
      applyButton: 'Candidati come partner',
      consultation: 'Prenota consulenza',
    },
  },

  contact: {
    title: 'Contatti',
    subtitle: 'Contattaci per una demo o maggiori informazioni su CUTO',
    info: {
      title: 'Informazioni di contatto',
      email: 'E-mail',
      phone: 'Telefono',
      phoneText: 'Contattaci via e-mail',
      demo: 'Richiedi demo',
      demoText: 'Prenota una demo personalizzata e scopri come CUTO può supportare il tuo progetto SAP.',
    },
    form: {
      title: 'Invia messaggio',
      name: 'Nome',
      email: 'E-mail',
      company: 'Azienda',
      message: 'Messaggio',
      submit: 'Invia',
      successMessage: 'Grazie per il tuo messaggio! Ti risponderemo a breve.',
    },
  },

  about: {
    title: 'Chi siamo',
    subtitle: 'CUTO è la soluzione strutturata per la gestione dei progetti SAP',
    mission: {
      title: 'La nostra Missione',
      p1: 'La nostra missione è rendere i progetti SAP più di successo. Crediamo che la gestione strutturata dei progetti sia la chiave del successo. CUTO è stato sviluppato per dare ai project manager e ai team gli strumenti di cui hanno bisogno per gestire con successo progetti SAP complessi dall\'inizio alla fine.',
      p2: 'Combiniamo le best practice di progetti SAP di successo con tecnologia moderna per fornirti una piattaforma intuitiva e potente. Il nostro obiettivo è semplificare la gestione dei progetti aumentando al contempo la qualità e il successo dei tuoi progetti.',
    },
    whatWeDo: {
      title: 'Cosa facciamo',
      description: 'CUTO ti supporta in tutte le fasi del tuo progetto SAP - dall\'inizializzazione al completamento con successo. Il nostro servizio SaaS fornisce una soluzione completa per la gestione strutturata dei progetti.',
      items: {
        init: 'Inizializzazione del progetto con template collaudati',
        planning: 'Pianificazione completa di attività, sforzi e tempistiche',
        management: 'Gestione continua del progetto e monitoraggio dei progressi',
        completion: 'Chiusura strutturata del progetto con documentazione',
      },
    },
    whyCuto: {
      title: 'Perché CUTO?',
      templates: {
        title: 'Template collaudati',
        description: 'Inizia con le best practice di progetti SAP di successo. Risparmia tempo nell\'inizializzazione del progetto.',
      },
      planning: {
        title: 'Pianificazione strutturata',
        description: 'Pianifica attività, sforzi e tempistiche con precisione. Crea piani di progetto realistici e attuabili.',
      },
      management: {
        title: 'Gestione continua',
        description: 'Tieni traccia dei progressi del progetto. Identifica i rischi in anticipo e prendi decisioni basate sui dati.',
      },
      completion: {
        title: 'Completamento di successo',
        description: 'Chiudi i tuoi progetti in modo strutturato. Con milestone chiare e documentazione completa.',
      },
    },
    team: {
      title: 'Il nostro Team',
      p1: 'CUTO è stato sviluppato da un team con anni di esperienza nei progetti SAP. Comprendiamo le sfide che project manager e team affrontano nelle trasformazioni SAP, implementazioni, migrazioni dati e progetti di cutover.',
      p2: 'Il nostro obiettivo è superare queste sfide attraverso processi strutturati e tecnologia moderna. Siamo appassionati nel rendere i progetti SAP più di successo.',
    },
  },

  compare: {
    badge: 'Confronto',
    title: 'CUTO vs. Alternative',
    subtitle: 'Confronta CUTO con altri strumenti di gestione progetti e trova la soluzione migliore per i tuoi progetti SAP.',
    recommended: 'Consigliato',
    features: 'Funzionalità',
    strengths: 'Punti di forza',
    limitations: 'Limitazioni',
    allCategories: 'Tutte le categorie',
    whyCuto: {
      title: 'Perché CUTO per i progetti SAP?',
      specialized: {
        title: 'Specializzato per SAP',
        description: 'A differenza degli strumenti generici, CUTO è stato sviluppato specificamente per i requisiti dei progetti SAP.',
      },
      ready: {
        title: 'Pronto all\'uso',
        description: 'Template preconfigurati per SAP Activate, Cutover e altro – nessuna configurazione complessa richiesta.',
      },
      cutover: {
        title: 'Cutover integrato',
        description: 'Gestione cutover unica per un Go-Live senza problemi – un add-on o non disponibile in altri strumenti.',
      },
      pricing: {
        title: 'Prezzi equi',
        description: 'Prezzi trasparenti senza costi nascosti per add-on o funzionalità enterprise.',
      },
    },
    cta: {
      title: 'Verifica tu stesso',
      description: 'Prova CUTO gratis per 14 giorni e scopri quanto può essere efficiente la gestione dei progetti SAP.',
      tryFree: 'Prova gratis',
      requestDemo: 'Richiedi demo',
    },
  },

  useCases: {
    badge: 'Casi d\'uso & Tutorial',
    title: 'CUTO nella pratica',
    subtitle: 'Scopri guide pratiche e video tutorial per casi d\'uso tipici nei progetti SAP. Dalla pianificazione del progetto fino al Go-Live.',
    searchPlaceholder: 'Cerca casi d\'uso...',
    featured: 'Casi d\'uso in evidenza',
    all: 'Tutti',
    allUseCases: 'Tutti i casi d\'uso',
    noResults: {
      title: 'Nessun caso d\'uso trovato',
      description: 'Prova una ricerca diversa o seleziona un\'altra categoria.',
      reset: 'Reimposta filtri',
    },
    suggest: {
      title: 'Ti manca un caso d\'uso?',
      description: 'Stiamo ampliando continuamente la nostra libreria di casi d\'uso. Facci sapere quali argomenti ti interesserebbero.',
      button: 'Suggerisci un caso d\'uso',
      features: 'Scopri tutte le funzionalità',
    },
    detail: {
      home: 'Home',
      useCases: 'Casi d\'uso',
      readingTime: 'tempo di lettura',
      videoTutorial: 'Video tutorial',
      comingSoon: 'Prossimamente',
      stepByStep: 'Guida passo dopo passo',
      proTips: 'Consigli professionali',
      related: 'Casi d\'uso correlati',
      cta: {
        title: 'Pronto a provare CUTO?',
        description: 'Inizia oggi e ottimizza i tuoi progetti SAP.',
        start: 'Inizia ora',
        allUseCases: '← Tutti i casi d\'uso',
      },
    },
  },

  // Legal Pages
  legal: {
    imprint: {
      title: 'Impronta',
      subtitle: 'Informazioni legali',
      companyInfo: {
        title: 'Informazioni aziendali',
        companyName: 'Nome azienda',
        address: 'Indirizzo',
        contact: 'Contatto',
      },
      legalInfo: {
        title: 'Informazioni legali',
        managingDirector: 'Amministratore delegato',
        commercialRegister: 'Registro delle imprese',
        registerCourt: 'Tribunale di registrazione',
        registrationNumber: 'Numero di registrazione',
        vatId: 'Partita IVA',
        vatIdText: 'Numero di identificazione IVA secondo §27a della legge IVA',
      },
      liabilityContent: {
        title: 'Responsabilità per i contenuti',
        p1: 'In qualità di fornitore di servizi, siamo responsabili dei nostri contenuti su queste pagine in conformità con la legge generale ai sensi dell\'articolo 7, paragrafo 1, della legge tedesca sui media telematici (TMG). Tuttavia, secondo gli articoli da 8 a 10 del TMG, non siamo obbligati a monitorare le informazioni di terzi trasmesse o memorizzate da noi o a indagare su circostanze che indichino attività illegali.',
        p2: 'Gli obblighi di rimozione o blocco dell\'uso delle informazioni secondo la legge generale rimangono inalterati. Tuttavia, la responsabilità a questo riguardo è possibile solo dal momento in cui viene a conoscenza una concreta violazione della legge. Se veniamo a conoscenza di tali violazioni, rimuoveremo immediatamente questo contenuto.',
      },
      liabilityLinks: {
        title: 'Responsabilità per i link',
        p1: 'La nostra offerta contiene link a siti web esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Pertanto, non possiamo assumerci alcuna responsabilità per questi contenuti esterni. Il rispettivo fornitore o operatore delle pagine è sempre responsabile del contenuto delle pagine collegate. Le pagine collegate sono state verificate per possibili violazioni legali al momento del collegamento. Contenuti illegali non erano riconoscibili al momento del collegamento.',
        p2: 'Tuttavia, un controllo permanente del contenuto delle pagine collegate non è ragionevole senza prove concrete di una violazione della legge. Se veniamo a conoscenza di violazioni, rimuoveremo immediatamente tali link.',
      },
      copyright: {
        title: 'Diritti d\'autore',
        p1: 'I contenuti e le opere creati dagli operatori del sito su queste pagine sono soggetti alla legge tedesca sul diritto d\'autore. La riproduzione, l\'elaborazione, la distribuzione e qualsiasi forma di commercializzazione di tale materiale oltre l\'ambito della legge sul diritto d\'autore richiederanno il previo consenso scritto del rispettivo autore o creatore.',
        p2: 'I download e le copie di questo sito sono consentiti solo per uso privato e non commerciale. Nella misura in cui il contenuto di questo sito non è stato creato dall\'operatore, vengono rispettati i diritti d\'autore di terzi. In particolare, i contenuti di terzi sono identificati come tali. Se doveste comunque venire a conoscenza di una violazione del diritto d\'autore, vi preghiamo di informarci. Se veniamo a conoscenza di violazioni, rimuoveremo immediatamente tale contenuto.',
      },
    },
    privacy: {
      title: 'Informativa sulla privacy',
      subtitle: 'Informazioni sulla protezione dei dati',
      intro: {
        title: '1. Introduzione',
        p1: 'Prendiamo molto seriamente la protezione dei vostri dati personali. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo le vostre informazioni personali quando utilizzate il nostro sito web e i nostri servizi.',
        p2: 'Il responsabile del trattamento dei dati su questo sito web è:',
      },
      dataCollection: {
        title: '2. Raccolta e trattamento dei dati',
        autoTitle: '2.1 Dati raccolti automaticamente',
        autoIntro: 'Quando visitate il nostro sito web, raccogliamo automaticamente alcune informazioni, tra cui:',
        autoItems: ['Indirizzo IP', 'Tipo e versione del browser', 'Sistema operativo', 'Data e ora di accesso', 'Pagine visitate', 'URL di riferimento'],
        autoP: 'Questi dati vengono elaborati per garantire la sicurezza e la funzionalità del nostro sito web e per migliorare i nostri servizi.',
      },
      contactForm: {
        title: '3. Modulo di contatto e email',
        p1: 'Quando ci contattate tramite il modulo di contatto o email, elaboriamo i seguenti dati:',
        items: ['Nome', 'Indirizzo email', 'Contenuto del messaggio', 'Qualsiasi altra informazione che fornite volontariamente'],
        p2: 'Questi dati vengono elaborati per rispondere alla vostra richiesta e vengono conservati per il tempo necessario a gestire la vostra richiesta o come richiesto dalla legge.',
      },
      cookies: {
        title: '4. Cookie',
        p1: 'Il nostro sito web utilizza cookie per migliorare l\'esperienza utente e analizzare l\'utilizzo del sito web. I cookie sono piccoli file di testo memorizzati sul vostro dispositivo.',
        p2: 'Potete controllare e gestire i cookie nelle impostazioni del vostro browser. Tuttavia, disabilitare i cookie potrebbe limitare la funzionalità del nostro sito web.',
        p3: 'Per informazioni dettagliate sui cookie che utilizziamo, consultate la nostra',
        cookiePolicy: 'Politica sui cookie',
      },
      dataSharing: {
        title: '5. Condivisione dei dati',
        p1: 'Non vendiamo, scambiamo o affittiamo i vostri dati personali a terzi. Possiamo condividere i vostri dati solo nelle seguenti circostanze:',
        items: [
          'Con fornitori di servizi che ci assistono nella gestione del nostro sito web e servizi (sotto rigidi accordi di riservatezza)',
          'Quando richiesto dalla legge o per proteggere i nostri diritti e la nostra sicurezza',
          'Con il vostro esplicito consenso',
        ],
      },
      dataSecurity: {
        title: '6. Sicurezza dei dati',
        p1: 'Implementiamo misure tecniche e organizzative appropriate per proteggere i vostri dati personali da accesso non autorizzato, perdita, distruzione o alterazione. Queste misure includono:',
        items: ['Crittografia SSL/TLS per la trasmissione dei dati', 'Aggiornamenti di sicurezza regolari', 'Controlli di accesso e autenticazione', 'Backup regolari'],
      },
      yourRights: {
        title: '7. I vostri diritti',
        p1: 'Ai sensi del Regolamento generale sulla protezione dei dati (GDPR), avete i seguenti diritti:',
        items: {
          access: 'Diritto di accesso: Potete richiedere informazioni sui vostri dati personali che trattiamo',
          rectification: 'Diritto di rettifica: Potete richiedere la correzione di dati inesatti',
          erasure: 'Diritto alla cancellazione: Potete richiedere la cancellazione dei vostri dati personali',
          restriction: 'Diritto alla limitazione: Potete richiedere la limitazione del trattamento dei dati',
          portability: 'Diritto alla portabilità: Potete richiedere il trasferimento dei vostri dati',
          objection: 'Diritto di opposizione: Potete opporvi a determinati tipi di trattamento dei dati',
          withdrawal: 'Diritto di revoca del consenso: Potete revocare il vostro consenso in qualsiasi momento',
        },
        p2: 'Per esercitare questi diritti, contattateci all\'indirizzo',
      },
      dataRetention: {
        title: '8. Conservazione dei dati',
        p1: 'Conserviamo i vostri dati personali solo per il tempo necessario a soddisfare le finalità per cui sono stati raccolti, o come richiesto dalle leggi e regolamenti applicabili.',
        p2: 'Quando i dati non sono più necessari, verranno cancellati in modo sicuro o resi anonimi.',
      },
      changes: {
        title: '9. Modifiche a questa informativa sulla privacy',
        p1: 'Possiamo aggiornare questa informativa sulla privacy di tanto in tanto per riflettere i cambiamenti nelle nostre pratiche o requisiti legali. Vi informeremo di eventuali modifiche significative pubblicando la nuova informativa sulla privacy su questa pagina e aggiornando la data "Ultimo aggiornamento".',
      },
      contact: {
        title: '10. Contatto',
        p1: 'Se avete domande o dubbi su questa informativa sulla privacy o sulle nostre pratiche di trattamento dei dati, contattateci:',
        email: 'Email',
        address: 'Indirizzo',
      },
    },
    terms: {
      title: 'Termini di servizio',
      subtitle: 'Termini e condizioni per l\'utilizzo di CUTO',
      scope: {
        title: '1. Ambito e accettazione',
        p1: 'Questi Termini di servizio ("Termini") regolano il vostro accesso e l\'utilizzo del servizio CUTO ("Servizio") fornito da benX AG ("noi", "nostro"). Accedendo o utilizzando il nostro Servizio, accettate di essere vincolati da questi Termini.',
        p2: 'Se non accettate questi Termini, non potete accedere o utilizzare il Servizio.',
      },
      serviceDescription: {
        title: '2. Descrizione del servizio',
        p1: 'CUTO è una piattaforma Software-as-a-Service (SaaS) progettata per supportare la gestione strutturata di progetti SAP, tra cui:',
        items: [
          'Inizializzazione del progetto con template',
          'Pianificazione di attività, sforzi e tempistiche',
          'Gestione del progetto e monitoraggio dei progressi',
          'Completamento del progetto e documentazione',
        ],
      },
      registration: {
        title: '3. Registrazione e account',
        p1: 'Per utilizzare il Servizio, dovete creare un account e fornire informazioni accurate, complete e aggiornate. Siete responsabili di:',
        items: [
          'Mantenere la riservatezza delle vostre credenziali dell\'account',
          'Tutte le attività che si verificano sotto il vostro account',
          'Informarci immediatamente di qualsiasi uso non autorizzato del vostro account',
        ],
        p2: 'Dovete avere almeno 18 anni per creare un account e utilizzare il Servizio.',
      },
      acceptableUse: {
        title: '4. Uso accettabile',
        p1: 'Accettate di non:',
        items: [
          'Utilizzare il Servizio per scopi illegali o non autorizzati',
          'Violare le leggi della vostra giurisdizione',
          'Trasmettere virus, malware o codice dannoso',
          'Tentare di ottenere accesso non autorizzato al Servizio o ai suoi sistemi correlati',
          'Interferire o interrompere il Servizio o i server collegati al Servizio',
          'Copiare, modificare o creare opere derivate dal Servizio',
          'Effettuare reverse engineering, decompilare o disassemblare il Servizio',
          'Utilizzare il Servizio per memorizzare o trasmettere materiale illegale, diffamatorio o altrimenti illecito',
        ],
      },
      subscription: {
        title: '5. Abbonamento e pagamento',
        p1: 'Il Servizio viene fornito su base di abbonamento. Sottoscrivendo, accettate di pagare le tariffe applicabili come specificato nel vostro piano di abbonamento.',
        p2: 'Le tariffe di abbonamento vengono fatturate in anticipo su base mensile o annuale, a seconda della selezione. Tutte le tariffe non sono rimborsabili salvo quanto richiesto dalla legge.',
        p3: 'Ci riserviamo il diritto di modificare i nostri prezzi in qualsiasi momento. Le variazioni di prezzo vi saranno comunicate in anticipo e si applicheranno ai periodi di fatturazione successivi.',
        p4: 'Se il pagamento non viene ricevuto o fallisce, possiamo sospendere o terminare il vostro accesso al Servizio.',
      },
      intellectualProperty: {
        title: '6. Proprietà intellettuale',
        p1: 'Il Servizio, inclusi i suoi contenuti originali, funzionalità e funzionalità, è di proprietà di benX AG ed è protetto da diritti d\'autore internazionali, marchi e altre leggi sulla proprietà intellettuale.',
        p2: 'Mantenete la proprietà di qualsiasi dato, contenuto o materiale che caricate o create utilizzando il Servizio ("I vostri contenuti"). Utilizzando il Servizio, ci concedete una licenza per utilizzare, memorizzare ed elaborare I vostri contenuti esclusivamente allo scopo di fornirvi il Servizio.',
        p3: 'Non potete utilizzare i nostri marchi, loghi o altre informazioni proprietarie senza il nostro previo consenso scritto.',
      },
      dataPrivacy: {
        title: '7. Dati e privacy',
        p1: 'Il vostro utilizzo del Servizio è anche regolato dalla nostra',
        privacyPolicy: 'Informativa sulla privacy',
        p2: '. Consultate la nostra Informativa sulla privacy per capire come raccogliamo, utilizziamo e proteggiamo i vostri dati.',
        p3: 'Implementiamo misure di sicurezza appropriate per proteggere i vostri dati, ma non possiamo garantire la sicurezza assoluta. Siete responsabili del mantenimento della sicurezza delle vostre credenziali dell\'account.',
      },
      serviceAvailability: {
        title: '8. Disponibilità del servizio',
        p1: 'Ci sforziamo di fornire un accesso affidabile e continuo al Servizio. Tuttavia, non garantiamo che il Servizio sarà disponibile in ogni momento o esente da interruzioni, errori o difetti.',
        p2: 'Possiamo eseguire manutenzione programmata o aggiornamenti che potrebbero interrompere temporaneamente l\'accesso al Servizio. Faremo sforzi ragionevoli per informarvi in anticipo della manutenzione pianificata.',
      },
      termination: {
        title: '9. Risoluzione',
        p1: 'Potete cancellare il vostro abbonamento in qualsiasi momento attraverso le impostazioni del vostro account o contattandoci. Alla cancellazione, il vostro accesso al Servizio continuerà fino alla fine del vostro attuale periodo di fatturazione.',
        p2: 'Possiamo sospendere o terminare il vostro accesso al Servizio immediatamente se:',
        items: [
          'Violate questi Termini',
          'Non pagate le tariffe applicabili',
          'Siamo obbligati a farlo dalla legge',
          'Interrompiamo il Servizio',
        ],
        p3: 'Alla risoluzione, il vostro diritto di utilizzare il Servizio cesserà immediatamente. Possiamo eliminare il vostro account e i vostri dati dopo un ragionevole periodo di conservazione, a meno che non siamo obbligati a conservarli dalla legge.',
      },
      liability: {
        title: '10. Limitazione di responsabilità',
        p1: 'Nella misura massima consentita dalla legge, benX AG non sarà responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi, né per perdite di profitti o ricavi, siano essi sostenuti direttamente o indirettamente, né per perdite di dati, uso, avviamento o altre perdite intangibili.',
        p2: 'La nostra responsabilità totale per qualsiasi reclamo derivante da o correlato al Servizio non supererà l\'importo che ci avete pagato nei dodici (12) mesi precedenti il reclamo.',
      },
      changes: {
        title: '11. Modifiche ai termini',
        p1: 'Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Vi informeremo di eventuali modifiche sostanziali pubblicando i Termini aggiornati su questa pagina e aggiornando la data "Ultimo aggiornamento". Il vostro uso continuato del Servizio dopo tali modifiche costituisce l\'accettazione dei Termini modificati.',
      },
      governingLaw: {
        title: '12. Legge applicabile',
        p1: 'Questi Termini saranno regolati e interpretati in conformità con le leggi della Germania, senza riguardo alle sue disposizioni sui conflitti di legge. Qualsiasi controversia derivante da questi Termini o dal Servizio sarà soggetta alla giurisdizione esclusiva dei tribunali tedeschi.',
      },
      contact: {
        title: '13. Contatto',
        p1: 'Se avete domande su questi Termini, contattateci:',
        email: 'Email',
        address: 'Indirizzo',
      },
    },
    cookies: {
      title: 'Politica sui cookie',
      subtitle: 'Informazioni sul nostro utilizzo dei cookie',
      whatAreCookies: {
        title: '1. Cosa sono i cookie?',
        p1: 'I cookie sono piccoli file di testo che vengono inseriti sul vostro dispositivo (computer, tablet o cellulare) quando visitate un sito web. I cookie sono ampiamente utilizzati per far funzionare i siti web in modo più efficiente e per fornire informazioni ai proprietari dei siti web.',
        p2: 'I cookie consentono a un sito web di riconoscere il vostro dispositivo e memorizzare alcune informazioni sulle vostre preferenze o azioni passate. Questo ci aiuta a fornirvi una migliore esperienza quando navigate sul nostro sito web e ci consente anche di migliorare i nostri servizi.',
      },
      howWeUse: {
        title: '2. Come utilizziamo i cookie',
        p1: 'Utilizziamo i cookie per i seguenti scopi:',
        essential: 'Cookie essenziali: Necessari per il corretto funzionamento del sito web',
        analytics: 'Cookie analitici: Ci aiutano a capire come i visitatori interagiscono con il nostro sito web',
        functional: 'Cookie funzionali: Ricordano le vostre preferenze e impostazioni',
        performance: 'Cookie di prestazione: Raccolgono informazioni sulle prestazioni del sito web',
      },
      types: {
        title: '3. Tipi di cookie che utilizziamo',
        essential: {
          title: '3.1 Cookie essenziali',
          p1: 'Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni da voi effettuate, come l\'impostazione delle vostre preferenze sulla privacy, l\'accesso o la compilazione di moduli.',
          p2: 'Esempi: Cookie di sessione, cookie di autenticazione, cookie di sicurezza',
        },
        analytics: {
          title: '3.2 Cookie analitici',
          p1: 'Questi cookie ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito web. Ci aiutano a sapere quali pagine sono più popolari e vedere come i visitatori si muovono nel sito.',
          p2: 'Esempi: Cookie di Google Analytics (se utilizzati)',
        },
        functional: {
          title: '3.3 Cookie funzionali',
          p1: 'Questi cookie consentono al sito web di fornire funzionalità e personalizzazione avanzate. Possono essere impostati da noi o da fornitori terzi i cui servizi abbiamo aggiunto alle nostre pagine.',
          p2: 'Esempi: Preferenze linguistiche, impostazioni regionali, preferenze dell\'interfaccia utente',
        },
        performance: {
          title: '3.4 Cookie di prestazione',
          p1: 'Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito web raccogliendo e riportando informazioni in modo anonimo. Questo ci aiuta a migliorare il funzionamento del nostro sito web.',
        },
      },
      thirdParty: {
        title: '4. Cookie di terze parti',
        p1: 'Oltre ai nostri cookie, possiamo anche utilizzare vari cookie di terze parti per riportare statistiche di utilizzo del Servizio, fornire pubblicità, ecc. Questi cookie di terze parti possono includere:',
        items: ['Servizi di analisi (es., Google Analytics)', 'Reti pubblicitarie', 'Piattaforme di social media'],
        p2: 'Questi cookie di terze parti sono soggetti alle rispettive politiche sulla privacy delle terze parti. Non controlliamo questi cookie e dovreste consultare i siti web di terze parti per maggiori informazioni sulle loro pratiche relative ai cookie.',
      },
      duration: {
        title: '5. Durata dei cookie',
        p1: 'I cookie possono essere cookie "di sessione" o "persistenti":',
        session: 'Cookie di sessione: Sono cookie temporanei che vengono eliminati quando chiudete il vostro browser. Permettono al sito web di collegare le vostre azioni durante una sessione del browser.',
        persistent: 'Cookie persistenti: Rimangono sul vostro dispositivo per un periodo prestabilito o fino a quando non li eliminate. Vengono attivati ogni volta che visitate il sito web che li ha creati.',
      },
      managing: {
        title: '6. Gestione dei cookie',
        p1: 'Avete il diritto di accettare o rifiutare i cookie. La maggior parte dei browser web accetta automaticamente i cookie, ma di solito potete modificare le impostazioni del vostro browser per rifiutare i cookie se preferite.',
        p2: 'Tuttavia, se scegliete di rifiutare i cookie, potreste non essere in grado di sperimentare completamente le funzionalità interattive del nostro sito web o alcuni dei nostri servizi potrebbero non funzionare correttamente.',
        p3: 'Potete gestire i cookie attraverso le impostazioni del vostro browser. Ecco i link alle istruzioni per i browser più popolari:',
      },
      consent: {
        title: '7. Consenso ai cookie',
        p1: 'Quando visitate il nostro sito web per la prima volta, potremmo chiedervi il consenso per utilizzare determinati cookie. Potete ritirare il vostro consenso in qualsiasi momento modificando le vostre preferenze sui cookie nelle impostazioni del vostro browser o contattandoci.',
        p2: 'I cookie essenziali non richiedono consenso in quanto sono necessari per il funzionamento del sito web.',
      },
      updates: {
        title: '8. Aggiornamenti a questa politica sui cookie',
        p1: 'Possiamo aggiornare questa Politica sui cookie di tanto in tanto per riflettere i cambiamenti nelle nostre pratiche o per altre ragioni operative, legali o normative. Vi informeremo di eventuali modifiche significative pubblicando la nuova Politica sui cookie su questa pagina e aggiornando la data "Ultimo aggiornamento".',
      },
      contact: {
        title: '9. Contatto',
        p1: 'Se avete domande sul nostro utilizzo dei cookie o su questa Politica sui cookie, contattateci:',
        email: 'Email',
        address: 'Indirizzo',
      },
    },
  },
};

