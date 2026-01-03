// Czech Translations
import { TranslationKeys } from './de';

export const cs: TranslationKeys = {
  // Navigation
  nav: {
    home: 'Domů',
    features: 'Funkce',
    pricing: 'Ceník',
    useCases: 'Případy užití',
    caseStudies: 'Případové studie',
    compare: 'Porovnat',
    partners: 'Partneři',
    about: 'O nás',
    contact: 'Kontakt',
    docs: 'Dokumentace',
    status: 'Stav',
    changelog: 'Seznam změn',
    login: 'Přihlásit se',
    requestDemo: 'Vyžádat demo',
    password: 'Heslo',
    allFeaturesOverview: 'Přehled všech funkcí',
    featureLabels: {
      dashboards: '80+ Dashboardů',
      templates: '75+ Šablon',
      bpmn: 'BPMN Procesní editor',
      migration: 'Migrace dat',
      harmonization: 'Harmonizace dat',
      cutover: 'Cutover Management',
      risks: 'Řízení rizik a problémů',
      resources: 'Plánování zdrojů',
    },
  },
  
  // Common
  common: {
    learnMore: 'Dozvědět se více',
    getStarted: 'Začít',
    readMore: 'Číst dál',
    viewAll: 'Zobrazit vše',
    back: 'Zpět',
    next: 'Další',
    submit: 'Odeslat',
    cancel: 'Zrušit',
    save: 'Uložit',
    search: 'Hledat',
    loading: 'Načítání...',
    error: 'Chyba',
    success: 'Úspěch',
    yes: 'Ano',
    no: 'Ne',
    close: 'Zavřít',
    download: 'Stáhnout',
    subscribe: 'Odebírat',
    email: 'E-mail',
    phone: 'Telefon',
    name: 'Jméno',
    company: 'Společnost',
    message: 'Zpráva',
  },
  
  // Homepage
  home: {
    hero: {
      badge: 'Nové pojetí řízení SAP projektů',
      title: 'Plánujte, spravujte a realizujte SAP projekty chytřeji – s CUTO',
      subtitle: 'Zrychlete SAP projekty pomocí předkonfigurovaných šablon, realistického odhadu pracnosti a inteligentních dashboardů — vše na jedné platformě.',
      cta: {
        primary: 'Získat doživotní přístup',
        secondary: 'Podívejte se, jak to funguje',
      },
    },
    stats: {
      projects: 'Úspěšných projektů',
      timeSaved: 'Ušetřeného času',
      satisfaction: 'Spokojenost zákazníků',
      countries: 'Zemí po celém světě',
    },
    features: {
      title: 'Vše, co potřebujete pro úspěšné SAP projekty',
      subtitle: 'CUTO kombinuje osvědčené metody s moderní technologií pro maximální transparentnost projektu.',
    },
    problem: {
      title: 'SAP projekty jsou komplexní',
      subtitle: 'Mnoho projektů selhává kvůli nedostatku struktury, nejasným odpovědnostem a chybějící transparentnosti.',
      problems: [
        'Nedostatek standardizace',
        'Nejasné odpovědnosti',
        'Chybějící transparentnost',
        'Zpoždění a překročení rozpočtu',
      ],
    },
    solution: {
      title: 'CUTO řeší tyto problémy',
      subtitle: 'Se strukturovanými procesy, jasnými rolemi a přehledy v reálném čase.',
    },
    targetAudience: {
      title: 'Pro každou cílovou skupinu',
      subtitle: 'CUTO podporuje všechny, kteří chtějí úspěšně řídit SAP projekty',
      tabs: {
        customers: {
          label: 'SAP zákazníci',
          title: 'Pro SAP zákazníky',
          description: 'CUTO vás jako SAP zákazníka podporuje v profesionálním řízení a úspěšné realizaci vašich interních SAP projektů.',
          whyTitle: 'Proč CUTO pro SAP zákazníky?',
          benefits: [
            'Strukturované řízení projektů bez nákladů na externí konzultace',
            'Osvědčené šablony pro typické SAP projekty ve vaší společnosti',
            'Plná kontrola nad průběhem projektu, úsilím a riziky',
            'Znovupoužitelné projektové struktury pro budoucí iniciativy',
            'Transparentní komunikace s interními zainteresovanými stranami'
          ]
        },
        consultancies: {
          label: 'SAP konzultace',
          title: 'Pro SAP konzultační společnosti',
          description: 'Zvyšte efektivitu vašich konzultačních projektů a dodávejte klientům strukturované, sledovatelné výsledky.',
          whyTitle: 'Proč CUTO pro SAP konzultace?',
          benefits: [
            'Rychlejší inicializace projektů s předkonfigurovanými šablonami',
            'Profesionální projektové prezentace pro klienty',
            'Standardizované procesy pro konzistentní realizaci projektů',
            'Lepší plánování zdrojů a odhad úsilí',
            'Znovupoužitelné osvědčené postupy pro podobné projekty'
          ]
        },
        freelancers: {
          label: 'Freelanceři',
          title: 'Pro freelancery',
          description: 'Jako freelancer získáte profesionální nástroje pro řízení projektů, které zdůrazní vaši odbornost.',
          whyTitle: 'Proč CUTO pro freelancery?',
          benefits: [
            'Profesionální řízení projektů i jako jednotlivec',
            'Rychlý start do nových projektů s šablonami',
            'Důvěryhodné odhady úsilí pro vaše klienty',
            'Strukturovaná dokumentace vaší práce',
            'Znovupoužitelné projektové struktury pro podobné zakázky'
          ]
        },
        users: {
          label: 'SAP uživatelé',
          title: 'Pro SAP uživatele',
          description: 'Jako SAP uživatel získáte nástroje pro nezávislé a úspěšné řízení vašich SAP projektů.',
          whyTitle: 'Proč CUTO pro SAP uživatele?',
          benefits: [
            'Nezávislé řízení projektů bez externí podpory',
            'Osvědčené postupy pro typické projekty SAP uživatelů',
            'Jasná struktura i pro menší projekty',
            'Podpora učení prostřednictvím předdefinovaných šablon',
            'Sledovatelná dokumentace pro váš tým'
          ]
        }
      }
    },
    testimonials: {
      title: 'Co říkají naši zákazníci',
      subtitle: 'Zjistěte, jak CUTO transformuje SAP projekty.',
    },
    faq: {
      title: 'Často kladené otázky',
      subtitle: 'Najděte odpovědi na nejdůležitější otázky o CUTO.',
    },
    cta: {
      title: 'Jste připraveni na strukturované řízení SAP projektů?',
      subtitle: 'Kontaktujte nás pro demo a zjistěte, jak může CUTO podpořit váš další SAP projekt.',
      button: 'Vyžádat demo',
    },
    newsletter: {
      title: 'Kontrolní seznam pro SAP projekty',
      subtitle: 'Získejte náš komplexní kontrolní seznam pokrývající všechny fáze implementace SAP. Používá ho více než 500 projektových manažerů po celém světě.',
      placeholder: 'Zadejte svůj pracovní e-mail',
      button: 'Stáhnout bezplatný kontrolní seznam',
      disclaimer: 'Přihlášením k odběru souhlasíte s občasným dostáváním aktualizací. Odběr můžete kdykoli zrušit.',
      freeDownload: 'Stažení zdarma',
      checklistItems: [
        'Kritéria hodnocení před projektem',
        'Kontrolní seznam připravenosti na go-live',
        'Rámec identifikace rizik',
        'Šablona plánování přechodu',
      ],
      checklistCount: 'Položek kontrolního seznamu',
      successMessage: '🎉 Děkujeme! Zkontrolujte svůj e-mail pro kontrolní seznam SAP projektu.',
      errorMessage: 'Zadejte prosím svou e-mailovou adresu.',
      sending: 'Odesílání...',
      checkEmail: '✓ Zkontrolujte svůj e-mail!',
      footerTitle: 'Zůstaňte informováni',
      footerSubtitle: 'Získejte tipy pro SAP projekty a novinky z CUTO.',
      footerPlaceholder: 'Váš e-mail',
      subscribing: 'Přihlašování...',
      subscribed: '✓ Přihlášeno!',
      subscribe: 'Přihlásit se',
      compactTitle: 'Tipy pro SAP projekty',
      compactSubtitle: 'Týdenní poznatky pro úspěšné SAP projekty.',
    },
    explainerVideo: {
      title: 'Podívejte se na CUTO v akci',
      subtitle: 'Zjistěte za 90 sekund, jak CUTO transformuje vaše SAP projekty.',
      comingSoon: 'Video již brzy',
      badge: 'Přehrát demo',
    },
    trustBadges: {
      gdpr: 'V souladu s GDPR',
      madeInGermany: 'Vyrobeno v Německu',
      euHosting: 'EU Data Hosting',
      sapCertified: 'Certifikováno SAP',
    },
    socialProof: {
      title: 'Důvěřují nám SAP profesionálové z předních společností',
    },
    statsLabels: {
      dashboards: 'Dashboardy',
      templates: 'Šablony',
      dashboardCategories: 'Kategorie dashboardů',
      processLevels: 'Úrovně procesů',
    },
    problemStatement: {
      title: 'SAP projekty jsou složité. Vaše nástroje by neměly být.',
      subtitle: 'Rozumíme vašim výzvám – a postavili jsme CUTO, aby je řešil.',
      problem: 'Problém',
      problems: {
        pmoOverhead: {
          title: 'Vysoká režie PMO',
          description: 'Manuální sledování, nekonečné excelové tabulky a roztroušené informace vyčerpávají produktivitu vašeho týmu.',
        },
        doubleEntry: {
          title: 'Dvojité zadávání dat',
          description: 'Udržování více systémů vede k nekonzistentním datům, ztrátě času a nákladným chybám.',
        },
        noDashboard: {
          title: 'Žádný centrální dashboard',
          description: 'Bez přehledu v reálném čase zůstávají rizika nepovšimnuta a rozhodnutí jsou založena na zastaralých informacích.',
        },
      },
      solution: 'CUTO řeší všechny tři problémy – v jedné sjednocené platformě.',
    },
    howItWorks: {
      title: 'Jak to funguje – Jak vás CUTO podporuje',
      subtitle: 'CUTO.ai vás provede celým cyklem SAP projektu – od první myšlenky až po go-live. Ve čtyřech krocích se složitost stává jasným a zvládnutelným projektovým plánem.',
      steps: {
        templates: {
          title: '75+ Šablon',
          description: 'Zachyťte svůj SAP projekt během několika minut. Vyberte si z předdefinovaných šablon pro typické typy SAP projektů. CUTO automaticky rozpozná relevantní fáze, aktivity a role a položí základ pro váš strukturovaný projektový plán.',
        },
        planning: {
          title: 'Kompletní plánování',
          description: 'Realistické odhady pracnosti. Na základě vašich vstupů (rozsah, systémy, velikost týmu) vytvoří CUTO.ai solidní odhad pracnosti – založený na datech, sledovatelný a upravitelný. Žádné další odhady, ale spolehlivé základy plánování.',
        },
        control: {
          title: 'Plná kontrola',
          description: 'Udržujte plnou kontrolu po celou dobu. Dashboardy vám v reálném čase ukazují pokrok, rizika a závislosti. Automatizované aktualizace a upozornění vám pomohou správně nastavit priority – dříve, než nastanou problémy.',
        },
        goLive: {
          title: 'Úspěšný Go-Live',
          description: 'Od plánování po realizaci – bez stresu až po go-live. CUTO.ai vás doprovází až do konce: s jasnými doporučeními k akci, automatizovanými zprávami o stavu a dokumentací poučení. Tímto způsobem jsou projekty nejen úspěšně dokončeny, ale i udržitelně zlepšovány.',
        },
      },
    },
    screenshot: {
      title: 'CUTO Dashboard',
      subtitle: 'Kompletní řízení projektu na první pohled',
    },
    integrations: {
      title: 'Bezproblémové integrace',
      subtitle: 'Propojte CUTO s vašimi stávajícími nástroji. Importujte data, synchronizujte pokrok a udržujte vše v synchronizaci.',
      tools: {
        jira: 'Jira',
        sapAlm: 'SAP ALM',
        msProject: 'MS Project',
        slack: 'Slack',
        teams: 'Teams',
        excel: 'Excel/CSV',
      },
      apiAvailable: 'K dispozici REST API',
      requestIntegration: 'Vyžádat vlastní integraci →',
    },
    useCases: {
      title: 'Pro všechny typy SAP projektů',
      subtitle: 'CUTO vás podporuje s různými typy SAP projektů',
      items: {
        greenfield: {
          title: 'Greenfield, Brownfield nebo Hybrid',
          description: 'Ať už Greenfield, Brownfield nebo Hybrid – pro transformaci podniku.',
        },
        implementation: {
          title: 'Implementace, Migrace nebo Cutover',
          description: 'Profesionální řízení projektů pro implementace SAP. Plánování, řízení a kontrola v jednom nástroji.',
        },
        methodology: {
          title: 'SAP Activate, Hybrid, ASAP, Agile, Waterfall',
          description: 'Bezpečná a strukturovaná migrace dat. Naplánujte každý krok a minimalizujte rizika.',
        },
        scope: {
          title: 'Program, Roadmap, Portfolio nebo Jednotlivý projekt',
          description: 'Přesné plánování a provedení cutoveru. Od přípravy po úspěšný go-live.',
        },
      },
    },
    testimonialsList: [
      {
        quote: 'CUTO transformovalo způsob, jakým řídíme náš rollout S/4HANA. Šablony nám ušetřily týdny plánování a dashboardy nám dávají přehled v reálném čase, který jsme nikdy předtím neměli.',
        author: 'Michael Krüger',
        role: 'SAP Program Manager, Acme Corp',
        initials: 'MK',
      },
      {
        quote: 'Konečně nástroj, který rozumí složitosti SAP projektů! Jen funkce odhadu pracnosti zaplatila celou investici. Vřele doporučuji pro jakoukoli SAP poradenství.',
        author: 'Sarah Weber',
        role: 'Partner, TechGlobal Consulting',
        initials: 'SW',
      },
      {
        quote: 'Po přechodu na CUTO jsme snížili naši režii PMO o 40 %. Funkce cutover managementu je výjimečná – náš poslední go-live byl nejhladší, jaký jsme kdy měli.',
        author: 'Thomas Bauer',
        role: 'CIO, InnoSystems GmbH',
        initials: 'TB',
      },
    ],
    faqList: [
      {
        question: 'Čím se CUTO liší od JIRA nebo SAP Cloud ALM?',
        answer: 'CUTO je účelově vytvořen pro SAP projekty. Zatímco JIRA je obecný nástroj a SAP ALM se zaměřuje na technické aspekty, CUTO poskytuje komplexní řízení projektů se šablonami specifickými pro SAP, odhadem pracnosti založeným na reálných datech ze SAP projektů a bezproblémovou integrací s oběma nástroji.',
      },
      {
        question: 'Mohu migrovat svá stávající projektová data do CUTO?',
        answer: 'Ano! CUTO podporuje import dat z Excelu, JIRA a SAP Cloud ALM. Náš onboardingový tým vám pomůže migrovat vaše stávající projekty a přizpůsobit šablony tak, aby odpovídaly vašemu současnému pracovnímu postupu.',
      },
      {
        question: 'Je CUTO vhodné pro malé SAP projekty?',
        answer: 'Absolutně. CUTO se škáluje od implementací jednotlivých projektů až po komplexní programy s více systémy. Náš plán Starter je ideální pro menší projekty, zatímco plány Professional a Enterprise podporují neomezenou složitost.',
      },
      {
        question: 'Jak dlouho trvá, než začnu?',
        answer: 'Většina týmů je v provozu během jednoho dne. Jednoduše si vyberte šablonu, přizpůsobte parametry projektu a CUTO vygeneruje vaši kompletní projektovou strukturu. Není nutné žádné zdlouhavé nastavování ani konfigurace.',
      },
      {
        question: 'Nabízíte integrace s jinými nástroji?',
        answer: 'Ano! CUTO se integruje s JIRA, SAP Cloud ALM, Microsoft Project a běžnými komunikačními nástroji jako Slack a Teams. Plány Enterprise zahrnují vlastní přístup k API pro další integrace.',
      },
      {
        question: 'Jakou podporu nabízíte?',
        answer: 'Všechny plány zahrnují e-mailovou podporu a přístup do naší znalostní báze. Plány Professional přidávají podporu přes chat, zatímco zákazníci Enterprise získají dedikovaného manažera úspěchu a doby odezvy podpořené SLA.',
      },
    ],
  },
  
  // Footer
  footer: {
    description: 'Strukturované řízení projektů pro SAP projekty. Od transformace po úspěšný cutover.',
    navigation: 'Navigace',
    contact: 'Kontakt',
    legal: 'Právní',
    imprint: 'Tiráž',
    privacy: 'Zásady ochrany osobních údajů',
    terms: 'Obchodní podmínky',
    cookies: 'Zásady používání souborů cookie',
    stayUpdated: 'Zůstaňte v obraze',
    newsletterText: 'Získejte tipy pro SAP projekty a novinky o CUTO.',
    copyright: '© {year} CUTO. Všechna práva vyhrazena.',
    madeWith: 'S ❤️ pro řízení SAP projektů',
  },
  
  // Status Page
  status: {
    title: 'Stav CUTO',
    operational: 'V provozu',
    degraded: 'Zhoršený výkon',
    partialOutage: 'Částečný výpadek',
    majorOutage: 'Velký výpadek',
    maintenance: 'V údržbě',
    lastUpdated: 'Naposledy aktualizováno',
    liveStats: {
      title: 'Živé statistiky platformy',
      projects: 'Projekty',
      workstreams: 'Pracovní proudy',
      tasks: 'Úkoly',
      users: 'Uživatelé',
      completedToday: 'Dnes dokončeno',
      activeProjects: 'Aktivní projekty',
      updateInfo: 'Statistiky aktualizovány každých 5 sekund',
    },
    uptime: {
      title: 'Dostupnost za posledních 90 dní',
      overall: 'Celková dostupnost',
    },
    components: {
      title: 'Komponenty služby',
    },
    incidents: {
      title: 'Minulé incidenty',
      noIncidents: 'Žádné incidenty',
      noIncidentsDesc: 'Žádné významné incidenty za posledních 90 dní.',
    },
    subscribe: {
      title: 'Získat aktualizace stavu',
      subtitle: 'Dostávejte okamžitá upozornění na výpadky nebo plánovanou údržbu.',
      button: 'Přihlásit se k odběru aktualizací',
    },
  },
  
  // Cookie Consent
  cookies: {
    title: 'Nastavení souborů cookie',
    description: 'Používáme soubory cookie ke zlepšení vašeho zážitku.',
    acceptAll: 'Přijmout vše',
    rejectAll: 'Odmítnout vše',
    customize: 'Přizpůsobit',
    necessary: 'Nezbytné',
    analytics: 'Analytické',
    marketing: 'Marketingové',
    save: 'Uložit nastavení',
  },
  
  // Language
  language: {
    select: 'Vybrat jazyk',
    current: 'Aktuální jazyk',
  },

  // Features
  features: {
    overview: {
      title: 'Vše, co potřebujete pro SAP projekty',
      subtitle: 'CUTO poskytuje kompletní sadu nástrojů pro řízení SAP projektů – od počátečního plánování přes go-live a dál. Zjistěte, jak vám každá funkce pomáhá dodávat úspěšné projekty.',
      screenshotTitle: 'Přehled platformy CUTO',
      screenshotSubtitle: 'Kompletní řízení projektu na první pohled',
      additionalCapabilities: 'Další schopnosti',
      cta: {
        title: 'Jste připraveni vidět CUTO v akci?',
        subtitle: 'Naplánujte si osobní demo a zjistěte, jak může CUTO transformovat vaše řízení SAP projektů.',
        demo: 'Naplánovat demo',
        pricing: 'Zobrazit ceník',
      },
    },
    categories: {
      dashboards: {
        name: '80+ Dashboardů',
        description: 'Přehled v reálném čase o každém aspektu vašeho SAP projektu. Od manažerských shrnutí po technické hloubkové analýzy.',
        highlights: ['Manažerské KPI', 'Tepelné mapy rizik', 'Sledování pokroku', 'Monitorování cutoveru'],
      },
      templates: {
        name: '75+ Šablon',
        description: 'V praxi ověřené projektové šablony založené na metodice SAP Activate a reálných implementačních zkušenostech.',
        highlights: ['Implementace S/4HANA', 'Migrace dat', 'Šablony modulů', 'Plány cutoveru'],
      },
      bpmn: {
        name: 'BPMN Procesní editor',
        description: 'Dokumentujte své obchodní procesy pomocí našeho integrovaného editoru BPMN 2.0. Plná sledovatelnost k projektovým aktivitám.',
        highlights: ['Drag & Drop editor', '6úrovňová hierarchie', 'Správa verzí', 'Export do BPMN 2.0'],
      },
      migration: {
        name: 'Migrace dat',
        description: 'Komplexní nástroje pro validaci a kvalitu dat. Odchyťte problémy dříve, než se stanou problémy při go-live.',
        highlights: ['Katalog dat', 'Validační engine', 'Kontroly kvality', 'Rekonciliace'],
      },
      harmonization: {
        name: 'Harmonizace dat',
        description: 'Identifikujte a vyčistěte duplicity ve vašich zdrojových datech před migrací. Inteligentní algoritmy pro párování a výběr Zlatého záznamu.',
        highlights: ['Detekce duplicit', 'Fuzzy párování', 'Zlatý záznam', 'Schválení 4 očí'],
      },
      cutover: {
        name: 'Cutover Management',
        description: 'Plánujte, nacvičujte a realizujte svůj go-live s přesností. Monitorování v reálném čase a podpora rozhodování.',
        highlights: ['Kontrolní seznamy', 'Sledování časové osy', 'Podpora Go/No-Go', 'Hypercare'],
      },
      risks: {
        name: 'Řízení rizik a problémů',
        description: 'Proaktivní identifikace rizik a sledování problémů. Udržujte svůj projekt na správné cestě s plnou viditelností.',
        highlights: ['Registr rizik', 'Tepelná mapa', 'Sledování mitigace', 'Eskalační workflow'],
      },
      resources: {
        name: 'Plánování zdrojů',
        description: 'Optimalizujte alokaci týmu a sledujte kapacitu. Integrovaný timesheet pro přesné náklady na projekt.',
        highlights: ['Plánování kapacity', 'Matice dovedností', 'Timesheet', 'Sledování využití'],
      },
    },
    additionalCapabilities: {
      gantt: { title: 'Ganttovy diagramy a časová osa', desc: 'Vizuální časová osa projektu se závislostmi, milníky a zvýrazněním kritické cesty.' },
      budget: { title: 'Sledování rozpočtu', desc: 'Sledování plánovaných vs. skutečných nákladů, analýza míry čerpání a prognóza do dokončení.' },
      notifications: { title: 'Oznámení a upozornění', desc: 'E-mailová oznámení o přiřazení úkolů, položkách po termínu a připomenutí milníků.' },
      export: { title: 'Export a reporting', desc: 'Export do Excelu, PDF nebo PowerPointu. Automatické generování zpráv o stavu.' },
      access: { title: 'Přístup na základě rolí', desc: 'Kontrolujte, kdo co vidí, pomocí granulárních oprávnění pro týmové role.' },
      integrations: { title: 'Integrace', desc: 'Přístup k API pro integraci s Jira, ServiceNow a dalšími podnikovými nástroji.' },
    },
    // Feature: Dashboards
    dashboards: {
      badge: 'Předpřipravené dashboardy',
      title: 'Manažerské dashboardy a reporty',
      subtitle: 'Dělejte rozhodnutí založená na datech s naší komplexní knihovnou dashboardů. Od manažerských shrnutí po technické hloubkové analýzy – všechny metriky na první pohled.',
      screenshotTitle: 'Manažerský dashboard',
      screenshotSubtitle: 'Přehled stavu projektu v reálném čase',
      stats: {
        dashboards: 'Dashboardů',
        categories: 'Kategorií',
        customizable: 'Přizpůsobitelné',
        realtime: 'V reálném čase',
      },
      keyBenefits: {
        realtime: { title: 'Aktualizace v reálném čase', desc: 'Všechny dashboardy se automaticky aktualizují při změně projektových dat' },
        mobile: { title: 'Připraveno pro mobily', desc: 'Přistupujte ke stavu svého projektu z jakéhokoli zařízení, kdekoli' },
        export: { title: 'Export a sdílení', desc: 'Exportujte do PDF, Excelu nebo sdílejte živé odkazy se zúčastněnými stranami' },
      },
      categoriesLabel: 'Kategorie',
      dashboardsLabel: 'dashboardů',
      categories: {
        executive: {
          name: 'Manažerské a strategické',
          dashboards: [
            { id: 'EXE-001', name: 'Dashboard stavu projektu', desc: 'Celkový stav projektu se semaforovým systémem pro řídící výbor' },
            { id: 'EXE-002', name: 'Dashboard manažerského shrnutí', desc: 'Vysokoúrovňové KPI, stav milníků, hlavní rizika pro C-Level' },
            { id: 'EXE-003', name: 'Dashboard strategického sladění', desc: 'Sladění výsledků projektu se strategickými cíli' },
            { id: 'EXE-004', name: 'Dashboard realizace hodnoty', desc: 'Sledování business case, měření ROI' },
            { id: 'EXE-005', name: 'Portfolio Dashboard', desc: 'Přehled více projektů pro programy' },
          ]
        },
        time: {
          name: 'Řízení času a plánování',
          dashboards: [
            { id: 'TIM-001', name: 'Přehled Ganttova diagramu', desc: 'Vizuální časová osa s milníky a závislostmi' },
            { id: 'TIM-002', name: 'Sledování milníků', desc: 'Stav milníků a analýza trendů' },
            { id: 'TIM-003', name: 'Dashboard kritické cesty', desc: 'Vizualizace kritických aktivit' },
            { id: 'TIM-004', name: 'Analýza zpoždění', desc: 'Analýza příčin zpoždění harmonogramu' },
            { id: 'TIM-005', name: 'Pokrok fáze', desc: 'Pokrok za fázi projektu' },
            { id: 'TIM-006', name: 'Porovnání s výchozím plánem', desc: 'Porovnání plánu vs. skutečnosti' },
          ]
        },
        budget: {
          name: 'Rozpočet a finance',
          dashboards: [
            { id: 'BUD-001', name: 'Přehled rozpočtu', desc: 'Celkový rozpočet s porovnáním plán/skutečnost' },
            { id: 'BUD-002', name: 'Míra čerpání nákladů', desc: 'Spotřeba rozpočtu v čase' },
            { id: 'BUD-003', name: 'Náklady podle pracovního proudu', desc: 'Rozdělení nákladů podle pracovního proudu' },
            { id: 'BUD-004', name: 'Dashboard prognózy', desc: 'Projekce nákladů do konce projektu' },
            { id: 'BUD-005', name: 'Cestovní náklady a výdaje', desc: 'Kontrola cestovních nákladů' },
            { id: 'BUD-006', name: 'Sledování nákladů dodavatelů', desc: 'Externí náklady a výdaje dodavatelů' },
            { id: 'BUD-007', name: 'Analýza odchylek nákladů', desc: 'Analýza odchylek s příčinami' },
          ]
        },
        resources: {
          name: 'Zdroje a tým',
          dashboards: [
            { id: 'RES-001', name: 'Alokace zdrojů', desc: 'Přehled alokace členů týmu' },
            { id: 'RES-002', name: 'Matice dovedností', desc: 'Dovednosti a kompetence v týmu' },
            { id: 'RES-003', name: 'Plánování kapacity', desc: 'Dostupnost a využití' },
            { id: 'RES-004', name: 'Stav onboardingu', desc: 'Integrace nových členů týmu' },
            { id: 'RES-005', name: 'Konflikty zdrojů', desc: 'Přealokování a konflikty' },
            { id: 'RES-006', name: 'Externí zdroje', desc: 'Přehled dodavatelů a konzultantů' },
            { id: 'RES-007', name: 'Výkon týmu', desc: 'Metriky produktivity' },
          ]
        },
        risks: {
          name: 'Rizika a problémy',
          dashboards: [
            { id: 'RSK-001', name: 'Registr rizik', desc: 'Všechna rizika s pravděpodobností a dopadem' },
            { id: 'RSK-002', name: 'Tepelná mapa rizik', desc: 'Vizuální matice rizik' },
            { id: 'RSK-003', name: 'Sledování problémů', desc: 'Otevřené problémy a eskalace' },
            { id: 'RSK-004', name: 'Trend rizik', desc: 'Vývoj rizik v čase' },
            { id: 'RSK-005', name: 'Stav mitigace', desc: 'Stav opatření ke zmírnění rizik' },
            { id: 'RSK-006', name: 'Top 10 rizik', desc: 'Zaměření na kritická rizika' },
          ]
        },
        scope: {
          name: 'Rozsah a požadavky',
          dashboards: [
            { id: 'SCO-001', name: 'Přehled rozsahu', desc: 'Rozsah projektu s in/out of scope' },
            { id: 'SCO-002', name: 'Stav požadavků', desc: 'Plnění požadavků' },
            { id: 'SCO-003', name: 'Záznam změn', desc: 'Změny rozsahu a jejich dopad' },
            { id: 'SCO-004', name: 'Analýza Fit-Gap', desc: 'Standard vs. přizpůsobení' },
            { id: 'SCO-005', name: 'Pokrok uživatelských příběhů', desc: 'Pro agilní projekty' },
          ]
        },
        quality: {
          name: 'Kvalita a testování',
          dashboards: [
            { id: 'QUA-001', name: 'Pokrok testování', desc: 'Stav provádění testovacích případů' },
            { id: 'QUA-002', name: 'Dashboard defektů', desc: 'Chyby a problémy z testování' },
            { id: 'QUA-003', name: 'Pokrytí testů', desc: 'Pokrytí testů na modul' },
            { id: 'QUA-004', name: 'Stav UAT', desc: 'Stav uživatelských akceptačních testů' },
            { id: 'QUA-005', name: 'Kvalitativní brány', desc: 'Dosažení kvalitativních bran' },
            { id: 'QUA-006', name: 'Stav regrese', desc: 'Výsledky regresních testů' },
            { id: 'QUA-007', name: 'Výkonnostní testy', desc: 'Zátěžové a výkonnostní testy' },
            { id: 'QUA-008', name: 'Sledování schválení', desc: 'Schválení vydání' },
          ]
        },
        workstream: {
          name: 'Pracovní proud a modul',
          dashboards: [
            { id: 'WRK-001', name: 'Stav pracovního proudu', desc: 'Pokrok podle modulu/pracovního proudu SAP' },
            { id: 'WRK-002', name: 'Závislosti mezi pracovními proudy', desc: 'Závislosti mezi pracovními proudy' },
            { id: 'WRK-003', name: 'Integrační body', desc: 'Stav všech integračních bodů' },
            { id: 'WRK-004', name: 'Pokrok konfigurace', desc: 'Pokrok konfigurace na modul' },
            { id: 'WRK-005', name: 'Pokrok BPML', desc: 'Pokrok hlavního seznamu obchodních procesů' },
            { id: 'WRK-006', name: 'Pokrytí BPMN', desc: 'Dokumentace BPMN na úroveň procesu' },
          ]
        },
        technical: {
          name: 'Technické',
          dashboards: [
            { id: 'TEC-001', name: 'Systémová krajina', desc: 'Přehled systémové krajiny SAP' },
            { id: 'TEC-002', name: 'Stav rozhraní', desc: 'Vývoj a testování rozhraní' },
            { id: 'TEC-003', name: 'Stav migrace dat', desc: 'Pokrok migrace dat' },
            { id: 'TEC-004', name: 'Řízení transportů', desc: 'Vydání a stav transportů' },
            { id: 'TEC-005', name: 'Autorizační matice', desc: 'Přehled rolí a oprávnění' },
            { id: 'TEC-006', name: 'Vývojový backlog', desc: 'Stav vývoje ABAP/Fiori' },
            { id: 'TEC-007', name: 'Kvalita kódu', desc: 'Metriky kvality kódu' },
            { id: 'TEC-008', name: 'Výkon systému', desc: 'Metriky výkonu systému' },
            { id: 'TEC-009', name: 'Stav zabezpečení', desc: 'Kontroly zabezpečení a shody' },
            { id: 'TEC-010', name: 'Připravenost na cloud', desc: 'Připravenost na migraci do cloudu' },
          ]
        },
        change: {
          name: 'Řízení změn',
          dashboards: [
            { id: 'OCM-001', name: 'Mapa zúčastněných stran', desc: 'Analýza a zapojení zúčastněných stran' },
            { id: 'OCM-002', name: 'Pokrok školení', desc: 'Dokončení školení' },
            { id: 'OCM-003', name: 'Komunikační plán', desc: 'Stav komunikačních aktivit' },
            { id: 'OCM-004', name: 'Hodnocení připravenosti', desc: 'Připravenost organizace' },
            { id: 'OCM-005', name: 'Metriky přijetí', desc: 'Přijetí uživateli po go-live' },
            { id: 'OCM-006', name: 'Dashboard zpětné vazby', desc: 'Zpětná vazba a spokojenost uživatelů' },
          ]
        },
        golive: {
          name: 'Go-Live a Cutover',
          dashboards: [
            { id: 'GLV-001', name: 'Kontrolní seznam pro Cutover', desc: 'Stav kontrolního seznamu pro go-live' },
            { id: 'GLV-002', name: 'Stav Hypercare', desc: 'Podpora po go-live' },
            { id: 'GLV-003', name: 'Odpočítávání do Go-Live', desc: 'Dny do go-live s kritickými úkoly' },
            { id: 'GLV-004', name: 'Plán rolloutu', desc: 'Stav rolloutu na více místech' },
            { id: 'GLV-005', name: 'Časová osa Cutoveru', desc: 'Podrobný harmonogram cutoveru' },
          ]
        },
        governance: {
          name: 'Governance',
          dashboards: [
            { id: 'GOV-001', name: 'Řídící výbor', desc: 'Rozhodnutí a akční body' },
            { id: 'GOV-002', name: 'Auditní stopa', desc: 'Změny a schválení' },
            { id: 'GOV-003', name: 'Stav shody', desc: 'Soulad s předpisy' },
            { id: 'GOV-004', name: 'Kalendář schůzek', desc: 'Projektové schůzky a workshopy' },
            { id: 'GOV-005', name: 'Stav dokumentu', desc: 'Pokrok v dokumentaci projektu' },
          ]
        },
        vendor: {
          name: 'Řízení dodavatelů',
          dashboards: [
            { id: 'VEN-001', name: 'Výkon dodavatele', desc: 'Výkon externího partnera' },
            { id: 'VEN-002', name: 'Stav smlouvy', desc: 'Přehled smluv a termínů' },
            { id: 'VEN-003', name: 'Monitorování SLA', desc: 'Soulad s úrovní služeb' },
          ]
        },
        communication: {
          name: 'Komunikace',
          dashboards: [
            { id: 'COM-001', name: 'Generátor zpráv o stavu', desc: 'Automatizované zprávy o stavu' },
            { id: 'COM-002', name: 'Stav newsletteru', desc: 'Interní komunikační aktivity' },
            { id: 'COM-003', name: 'Záznam eskalací', desc: 'Eskalace a jejich řešení' },
            { id: 'COM-004', name: 'Zápisy ze schůzek', desc: 'Dokumentace ze schůzek' },
          ]
        },
      },
      cta: {
        title: 'Jste připraveni vidět tyto dashboardy v akci?',
        demo: 'Naplánovat demo',
        allFeatures: 'Zobrazit všechny funkce',
      },
    },

    // Feature: Templates
    templates: {
      badge: 'Projektové šablony',
      title: 'Předkonfigurované projektové šablony',
      subtitle: 'Začněte svůj SAP projekt s v praxi ověřenými šablonami. Každá šablona obsahuje předdefinované aktivity, milníky, závislosti a odhady pracnosti založené na reálných projektových zkušenostech.',
      screenshotTitle: 'Výběr šablony',
      screenshotSubtitle: 'Vyberte si z více než 75 předpřipravených šablon',
      stats: {
        templates: 'Šablon',
        categories: 'Kategorií',
        activities: 'Aktivit',
        customizable: 'Přizpůsobitelné',
      },
      keyBenefits: {
        quickStart: { title: 'Rychlý start', desc: 'Nastavte svůj projekt během minut, ne dnů' },
        bestPractices: { title: 'Osvědčené postupy', desc: 'Založeno na SAP Activate a osvědčených metodikách' },
        estimates: { title: 'Přesné odhady', desc: 'Realistické odhady pracnosti z reálných projektů' },
        customizable: { title: 'Plně přizpůsobitelné', desc: 'Přizpůsobte každou šablonu vašim specifickým potřebám' },
      },
      howItWorks: {
        title: 'Jak fungují šablony',
        steps: {
          select: { title: 'Vybrat šablonu', desc: 'Vyberte si z naší knihovny na základě typu vašeho projektu' },
          configure: { title: 'Konfigurovat rozsah', desc: 'Definujte moduly, lokace a faktory složitosti' },
          generate: { title: 'Automaticky generovat', desc: 'CUTO vygeneruje váš projektový plán s aktivitami' },
          customize: { title: 'Přizpůsobit', desc: 'Dolaďte termíny, zdroje a závislosti' },
        },
      },
      categories: {
        s4hana: {
          name: 'Implementace SAP S/4HANA',
          templates: [
            { name: 'Greenfield implementace', desc: 'Kompletní nová implementace s metodikou SAP Activate', activities: '500+' },
            { name: 'Brownfield konverze', desc: 'Konverze systému z SAP ECC na S/4HANA', activities: '350+' },
            { name: 'Selektivní přechod dat', desc: 'Hybridní přístup s výběrem dat', activities: '400+' },
            { name: 'Central Finance', desc: 'Projekt harmonizace financí', activities: '250+' },
          ]
        },
        modules: {
          name: 'SAP Moduly',
          templates: [
            { name: 'FI/CO Finance a controlling', desc: 'Hlavní kniha, AP, AR, nákladové střediskové účetnictví', activities: '180+' },
            { name: 'MM Řízení materiálových toků', desc: 'Nákup, zásoby, MRP', activities: '150+' },
            { name: 'SD Prodej a distribuce', desc: 'Řízení objednávek, fakturace, expedice', activities: '160+' },
            { name: 'PP Plánování výroby', desc: 'MRP, dílenské řízení, plánování kapacity', activities: '140+' },
            { name: 'HR/HCM Lidský kapitál', desc: 'Personální administrativa, mzdy, řízení času', activities: '200+' },
            { name: 'PM Údržba zařízení', desc: 'Plánování údržby, pracovní příkazy', activities: '100+' },
            { name: 'QM Řízení kvality', desc: 'Plánování inspekcí, oznámení o kvalitě', activities: '90+' },
            { name: 'WM/EWM Sklad', desc: 'Řízení skladu, optimalizace skladování', activities: '120+' },
          ]
        },
        migration: {
          name: 'Migrace dat',
          templates: [
            { name: 'Migrace kmenových dat', desc: 'Migrace zákazníků, dodavatelů, materiálů, kusovníků', activities: '80+' },
            { name: 'Migrace transakčních dat', desc: 'Otevřené položky, nákupní objednávky, prodejní objednávky', activities: '60+' },
            { name: 'Migrace historických dat', desc: 'Archivovaná data a historie analýz', activities: '40+' },
            { name: 'Hodnocení kvality dat', desc: 'Aktivity čištění a validace dat', activities: '50+' },
          ]
        },
        cutover: {
          name: 'Cutover a Go-Live',
          templates: [
            { name: 'Standardní Cutover', desc: 'Go-live na jednom místě se standardními fázemi', activities: '150+' },
            { name: 'Big Bang Cutover', desc: 'Všechny lokace současně', activities: '200+' },
            { name: 'Fázový Rollout', desc: 'Strategie rolloutu ve více vlnách', activities: '180+' },
            { name: 'Plán Hypercare', desc: 'Aktivity podpory po go-live', activities: '60+' },
          ]
        },
        testing: {
          name: 'Testování',
          templates: [
            { name: 'Jednotkové testování', desc: 'Testování konfigurace a vývoje', activities: '100+' },
            { name: 'Integrační testování', desc: 'Testování end-to-end procesů', activities: '120+' },
            { name: 'Uživatelské akceptační testování', desc: 'Cykly testování business uživateli', activities: '80+' },
            { name: 'Výkonnostní testování', desc: 'Zátěžové a stresové testování', activities: '40+' },
            { name: 'Bezpečnostní testování', desc: 'Testování oprávnění a penetrační testování', activities: '30+' },
          ]
        },
        change: {
          name: 'Řízení změn',
          templates: [
            { name: 'Řízení zúčastněných stran', desc: 'Analýza zúčastněných stran a plán zapojení', activities: '50+' },
            { name: 'Školicí program', desc: 'Školení koncových a klíčových uživatelů', activities: '70+' },
            { name: 'Komunikační plán', desc: 'Projektové komunikační aktivity', activities: '40+' },
            { name: 'Připravenost organizace', desc: 'Hodnocení dopadu změn', activities: '30+' },
          ]
        },
        cloud: {
          name: 'SAP Cloud řešení',
          templates: [
            { name: 'SAP SuccessFactors', desc: 'Implementace HCM v cloudu', activities: '180+' },
            { name: 'SAP Ariba', desc: 'Implementace nákupu v cloudu', activities: '150+' },
            { name: 'SAP Concur', desc: 'Implementace cestovních nákladů', activities: '80+' },
            { name: 'SAP Analytics Cloud', desc: 'Implementace business intelligence', activities: '60+' },
            { name: 'SAP BTP', desc: 'Nastavení Business Technology Platform', activities: '100+' },
          ]
        },
        integration: {
          name: 'Integrace a rozhraní',
          templates: [
            { name: 'EDI integrace', desc: 'Nastavení elektronické výměny dat', activities: '40+' },
            { name: 'Vývoj API', desc: 'Vývoj rozhraní REST/SOAP', activities: '50+' },
            { name: 'SAP PI/PO integrace', desc: 'Nastavení procesní integrace', activities: '60+' },
            { name: 'SAP CPI integrace', desc: 'Integrace cloudové platformy', activities: '50+' },
          ]
        },
      },
      activitiesLabel: 'aktivit',
      templatesLabel: 'šablon',
      customTemplate: {
        title: 'Potřebujete vlastní šablonu?',
        desc: "Nemůžete najít přesně to, co potřebujete? Náš plán Enterprise zahrnuje vývoj vlastních šablon přizpůsobených specifickým metodikám a požadavkům vaší organizace.",
        button: 'Vyžádat vlastní šablonu',
      },
      cta: {
        title: 'Začněte svůj projekt se správným základem',
        demo: 'Naplánovat demo',
        pricing: 'Zobrazit ceník',
      },
    },

    // Feature: BPMN
    bpmn: {
      badge: 'V souladu s BPMN 2.0',
      title: 'BPMN Procesní editor',
      subtitle: 'Dokumentujte své obchodní procesy vizuálně s naším integrovaným editorem BPMN 2.0. Propojte procesní diagramy přímo s vašimi projektovými aktivitami pro kompletní sledovatelnost.',
      screenshotTitle: 'BPMN Procesní editor',
      screenshotSubtitle: 'Modelování procesů pomocí drag & drop',
      keyFeatures: {
        modeling: { title: 'Vizuální modelování procesů', desc: 'Drag-and-drop rozhraní pro tvorbu profesionálních BPMN diagramů. Podpora všech prvků BPMN 2.0 včetně úkolů, bran, událostí a plaveckých drah.' },
        linking: { title: 'Propojení aktivit', desc: 'Propojte BPMN procesy přímo s BPML aktivitami. Každý prvek procesu může být spojen s projektovými aktivitami pro plnou sledovatelnost.' },
        coverage: { title: 'Sledování pokrytí', desc: 'Sledujte pokrytí BPMN dokumentace napříč všemi úrovněmi procesů. Dashboardy ukazují, které procesy jsou zdokumentovány a které vyžadují pozornost.' },
      },
      processArchitecture: {
        title: '6úrovňová procesní architektura',
        subtitle: 'CUTO podporuje standardní procesní hierarchii SAP od vysokoúrovňových end-to-end procesů až po detailní pracovní kroky. Každá úroveň může mít vlastní BPMN dokumentaci.',
        levels: {
          l1: { name: 'End-to-End proces', example: 'např. Order to Cash (O2C)' },
          l2: { name: 'Procesní skupina', example: 'např. Zpracování prodejní objednávky' },
          l3: { name: 'Hlavní proces', example: 'např. Založení standardní objednávky' },
          l4: { name: 'Podproces', example: 'např. Validace zákazníka' },
          l5: { name: 'Aktivita', example: 'např. Kontrola kreditního limitu' },
          l6: { name: 'Pracovní krok', example: 'např. Odeslat upozornění na kredit' },
        },
      },
      elements: {
        title: 'Podporované prvky BPMN',
        events: { title: 'Události', items: ['Startovní událost', 'Koncová událost', 'Meziudálost', 'Časová událost', 'Zprávová událost', 'Chybová událost'] },
        tasks: { title: 'Úkoly', items: ['Uživatelský úkol', 'Servisní úkol', 'Skriptový úkol', 'Manuální úkol', 'Úkol s obchodním pravidlem', 'Podproces'] },
        gateways: { title: 'Brány', items: ['Exkluzivní brána (XOR)', 'Paralelní brána (AND)', 'Inkluzivní brána (OR)', 'Brána založená na událostech', 'Komplexní brána'] },
        containers: { title: 'Kontejnery', items: ['Pool', 'Lane', 'Podproces', 'Transakce', 'Volací aktivita'] },
      },
      extendedProperties: {
        title: 'Rozšířené vlastnosti prvků',
        subtitle: 'Kromě standardních vlastností BPMN vám CUTO umožňuje zachytit další metadata pro každý prvek procesu, aby podpořil vaši implementaci SAP.',
        effort: { title: 'Odhadovaná pracnost', desc: 'Definujte očekávanou dobu trvání v minutách, hodinách nebo dnech pro každý úkol' },
        systems: { title: 'Zúčastněné systémy', desc: 'Propojte úkoly se systémy a moduly SAP z vaší krajiny' },
        transactions: { title: 'Transakce', desc: 'Dokumentujte relevantní transakční kódy SAP (např. VA01, ME21N)' },
        helpText: { title: 'Nápověda', desc: 'Přidejte podrobné popisy a uživatelské pokyny pro každý krok' },
      },
      importExport: {
        title: 'Import & Export',
        items: [
          'Import stávajících souborů BPMN 2.0 XML',
          'Export do standardního formátu BPMN 2.0',
          'Export jako obrázky PNG/SVG pro dokumentaci',
          'Kompatibilní s Signavio, Aris a dalšími nástroji',
        ],
      },
      versioning: {
        title: 'Verzování a historie',
        items: [
          'Automatická historie verzí pro každou změnu',
          'Porovnání verzí vedle sebe',
          'Obnovení předchozích verzí jedním kliknutím',
          'Workflow stavu: Koncept → Revize → Schváleno → Archivováno',
        ],
      },
      cta: {
        title: 'Jste připraveni dokumentovat své procesy?',
        demo: 'Naplánovat demo',
        allFeatures: 'Zobrazit všechny funkce',
      },
    },

    // Feature: Migration
    migration: {
      badge: 'Kvalita a validace dat',
      title: 'Nástroje pro migraci dat',
      subtitle: 'Zajistěte úspěšnou migraci dat pomocí komplexních nástrojů pro validaci, kontrolu kvality a rekonciliaci. Odchyťte problémy dříve, než se stanou problémy při go-live.',
      screenshotTitle: 'Dashboard validace dat',
      screenshotSubtitle: 'Analýza míry shody v reálném čase',
      keyFeatures: {
        catalog: { title: 'Katalog dat', desc: 'Centrální repozitář pro všechny migrační objekty. Definujte mapování polí, datové typy a transformační pravidla na jednom místě.' },
        validation: { title: 'Validační engine', desc: 'Automatizovaná validace shody dat zdroj-cíl, kontroly úplnosti a dodržování obchodních pravidel.' },
        dashboard: { title: 'Dashboard kvality', desc: 'Přehled metrik kvality dat v reálném čase. Sledujte míry shody, počty chyb a postup řešení.' },
      },
      workflow: {
        title: 'Workflow migrace dat',
        steps: {
          define: { title: 'Definovat', desc: 'Nastavit datový katalog s objekty a poli' },
          map: { title: 'Mapovat', desc: 'Vytvořit mapování polí a transformační pravidla' },
          extract: { title: 'Extrahovat', desc: 'Nahrát nebo se připojit ke zdrojovým datům' },
          validate: { title: 'Validovat', desc: 'Spustit automatizované kontroly kvality' },
          reconcile: { title: 'Rekonciliovat', desc: 'Porovnat a ověřit cílová data' },
        },
      },
      validationTypes: {
        title: 'Validační schopnosti',
        keyField: {
          title: 'Validace klíčových polí',
          desc: 'Ověřte, že všechny záznamy mohou být spárovány mezi zdrojovým a cílovým systémem pomocí definovaných klíčových polí.',
          items: ['Detekce chybějících zdrojových záznamů', 'Detekce chybějících cílových záznamů', 'Identifikace duplicitních klíčů'],
        },
        fieldLevel: {
          title: 'Validace na úrovni pole',
          desc: 'Porovnejte jednotlivé hodnoty polí mezi zdrojem a cílem, abyste identifikovali problémy s transformací.',
          items: ['Detekce neshody hodnot', 'Validace datového typu', 'Kontroly formátu a délky'],
        },
        rules: {
          title: 'Migrační pravidla',
          desc: 'Definujte komplexní validační pravidla, která jdou nad rámec jednoduchého párování polí.',
          items: ['Tabulky mapování hodnot', 'Podmíněné transformace', 'Pravidla pro ignorování systémových polí', 'Podpora párování se zástupnými znaky'],
        },
        quality: {
          title: 'Kontroly kvality dat',
          desc: 'Hodnocení kvality dat před migrací pro identifikaci problémů ve zdrojových datech.',
          items: ['Kontroly úplnosti', 'Referenční integrita', 'Validace obchodních pravidel', 'Detekce odlehlých hodnot'],
        },
      },
      statistics: {
        title: 'Statistiky a reporting',
        matchRate: { title: 'Dashboard míry shody', desc: 'Vizuální zobrazení postupu validace a míry shody v reálném čase na objekt a pole' },
        errorDownload: { title: 'Stažení chyb', desc: 'Export validačních chyb do CSV/Excelu pro offline analýzu a sledování řešení' },
        fieldStats: { title: 'Statistiky pole', desc: 'Analýza na úrovni pole ukazující míry shody, typy chyb a běžné problémy' },
      },
      objects: {
        title: 'Běžné migrační objekty',
        items: [
          'Kmenová data zákazníků', 'Kmenová data dodavatelů', 'Kmenová data materiálu', 'Kusovník',
          'Účty hlavní knihy', 'Nákladová střediska', 'Zisková střediska', 'Pracoviště',
          'Postup', 'Otevřené nákupní objednávky', 'Otevřené prodejní objednávky', 'Otevřené položky',
          'Kmenová data majetku', 'Kmenová data HR', 'Kmenová data bank', 'Cenotvorba',
          'Podmínky', 'Šarže', 'Sériová čísla', 'Kóty'
        ],
        customNote: '+ Vlastní objekty definované ve vašem datovém katalogu',
      },
      cta: {
        title: 'Jste připraveni zajistit úspěch migrace dat?',
        demo: 'Naplánovat demo',
        cutover: 'Cutover Management →',
      },
    },

    // Feature: Cutover
    cutover: {
      badge: 'Připraveno na Go-Live',
      title: 'Cutover Management',
      subtitle: 'Plánujte, nacvičujte a realizujte svůj go-live s přesností. Od kontrolních seznamů pro cutover po monitorování v reálném čase – zůstaňte v kontrole během nejkritičtější fáze.',
      screenshotTitle: 'Časová osa Cutoveru',
      screenshotSubtitle: 'Sledování go-live minutu po minutě',
      keyFeatures: {
        checklists: { title: 'Kontrolní seznamy pro Cutover', desc: 'Předdefinované kontrolní seznamy pro každou fázi cutoveru. Sledujte stav dokončení a zajistěte, aby se na nic nezapomnělo během go-live.' },
        timeline: { title: 'Řízení časové osy', desc: 'Harmonogram cutoveru minutu po minutě s automatickým sledováním času. Víte přesně, kde jste oproti plánu.' },
        rehearsal: { title: 'Podpora nácviku', desc: 'Spusťte několik zkušebních provozů, abyste doladili svůj plán cutoveru. Sledujte poučení a zlepšujte se s každým nácvikem.' },
      },
      phases: {
        title: 'Řízení fází Cutoveru',
        preCutover: {
          name: 'Před Cutoverem',
          time: 'T-30 až T-0',
          tasks: ['Konečné ověření zmrazení dat', 'Validace přístupu do systému', 'Komunikace se zúčastněnými stranami', 'Příprava válečné místnosti'],
        },
        technical: {
          name: 'Technický Cutover',
          time: 'T-0 až T+12h',
          tasks: ['Vypnutí starého systému', 'Finální extrakce dat', 'Spuštění nahrávání dat', 'Technická validace'],
        },
        business: {
          name: 'Obchodní Cutover',
          time: 'T+12h až T+24h',
          tasks: ['Ověření počátečních stavů', 'Testování obchodních procesů', 'Povolení přístupu uživatelům', 'Rozhodnutí Go/No-Go'],
        },
        hypercare: {
          name: 'Hypercare',
          time: 'T+24h až T+2t',
          tasks: ['Podpora 24/7', 'Třídění a řešení problémů', 'Monitorování výkonu', 'Podpora uživatelů'],
        },
      },
      dayDashboard: {
        title: 'Dashboard dne Cutoveru',
        subtitle: 'Pohled velitelského centra v reálném čase během provádění cutoveru. Monitorujte pokrok, sledujte blokátory a koordinujte týmy na jednom místě.',
        tasksComplete: 'Dokončených úkolů',
        timeVsPlan: 'Čas vs. Plán',
        openBlockers: 'Otevřených blokátorů',
        teamMembers: 'Aktivních členů týmu',
      },
      goNoGo: {
        title: 'Podpora rozhodnutí Go/No-Go',
        items: [
          'Automatizované hodnocení připravenosti na základě dokončení kontrolního seznamu',
          'Zvýraznění stavu kritické cesty',
          'Shrnutí rizik se stavem mitigace',
          'Dokumentace rozhodnutí a auditní stopa',
        ],
      },
      rollout: {
        title: 'Plánování rolloutu',
        items: [
          'Plánování rolloutu ve více vlnách',
          'Kontrolní seznamy specifické pro danou lokalitu',
          'Replikace rolloutu na základě šablony',
          'Řízení závislostí mezi lokalitami',
        ],
      },
      communication: {
        title: 'Komunikace při Cutoveru',
        broadcasts: { title: 'Vysílání stavu', desc: 'Automatizované aktualizace stavu pro zúčastněné strany v konfigurovatelných intervalech' },
        alerts: { title: 'Eskalační upozornění', desc: 'Automatická upozornění při zpoždění úkolů nebo identifikaci blokátorů' },
        logging: { title: 'Záznam aktivit', desc: 'Kompletní auditní stopa všech aktivit a rozhodnutí při cutoveru' },
      },
      cta: {
        title: 'Jste připraveni na go-live bez stresu?',
        demo: 'Naplánovat demo',
        risks: 'Řízení rizik →',
      },
    },

    // Feature: Risks
    risks: {
      badge: 'Proaktivní řízení rizik',
      title: 'Řízení rizik a problémů',
      subtitle: 'Identifikujte, hodnoťte a zmírňujte rizika dříve, než ovlivní váš projekt. Sledujte problémy až do jejich vyřešení s plnou odpovědností a transparentností.',
      screenshotTitle: 'Tepelná mapa rizik',
      screenshotSubtitle: 'Vizuální matice hodnocení rizik',
      keyFeatures: {
        register: { title: 'Registr rizik', desc: 'Centrální repozitář pro všechna projektová rizika s hodnocením pravděpodobnosti a dopadu. Sledujte mitigační opatření a vlastníky.' },
        issues: { title: 'Sledování problémů', desc: 'Zaznamenávejte a spravujte problémy, jakmile nastanou. Definujte vlastníky, sledujte postup řešení a eskalujte v případě potřeby.' },
        heatmaps: { title: 'Tepelné mapy', desc: 'Vizuální matice rizik zobrazující pravděpodobnost vs. dopad. Rychle identifikujte kritická rizika vyžadující okamžitou pozornost.' },
      },
      matrix: {
        title: 'Matice hodnocení rizik',
        subtitle: 'Klasifikujte rizika na základě pravděpodobnosti a dopadu pro prioritizaci mitigačních snah.',
        probability: 'Pravděpodobnost',
        impact: 'Dopad',
        veryLow: 'Velmi nízká',
        low: 'Nízká',
        medium: 'Střední',
        high: 'Vysoká',
        veryHigh: 'Velmi vysoká',
        critical: 'Kritická',
      },
      categories: {
        title: 'Předdefinované kategorie rizik',
        technical: { name: 'Technické', examples: 'Výkon systému, integrace, kvalita dat' },
        resource: { name: 'Zdroje', examples: 'Závislost na klíčové osobě, mezery v dovednostech, dostupnost' },
        schedule: { name: 'Harmonogram', examples: 'Skluz v časovém plánu, zpoždění milníků' },
        budget: { name: 'Rozpočet', examples: 'Překročení nákladů, neplánované výdaje' },
        scope: { name: 'Rozsah', examples: 'Rozšiřování rozsahu, nejasné požadavky' },
        vendor: { name: 'Dodavatel', examples: 'Dodávky třetích stran, licenční problémy' },
        change: { name: 'Změna', examples: 'Přijetí uživateli, organizační odpor' },
        compliance: { name: 'Shoda', examples: 'Regulatorní, audit, bezpečnost' },
      },
      mitigation: {
        title: 'Řízení mitigace',
        items: [
          'Definujte více mitigačních opatření na jedno riziko',
          'Přiřaďte vlastníky a termíny splnění',
          'Sledujte postup a účinnost mitigace',
          'Znovu posuďte riziko po mitigaci',
          'Automatická připomenutí pro opožděná opatření',
        ],
      },
      issueWorkflow: {
        title: 'Workflow řešení problémů',
        items: [
          'Workflow stavu: Nový → V řešení → Vyřešeno → Uzavřeno',
          'Úrovně priority se sledováním SLA',
          'Eskalační cesty a oznámení',
          'Dokumentace příčiny',
          'Zachy cení poučení',
        ],
      },
      reporting: {
        title: 'Reporting rizik a problémů',
        trend: { title: 'Analýza trendů', desc: 'Sledujte, jak se rizika a problémy vyvíjejí v čase. Identifikujte vzory a opakující se témata.' },
        top10: { title: 'Top 10 reporty', desc: 'Zaměřte se na nejkritičtější rizika pro prezentace řídícímu výboru.' },
        resolution: { title: 'Metriky řešení', desc: 'Průměrná doba do vyřešení, trendy otevřených vs. uzavřených, výkon vlastníka.' },
      },
      cta: {
        title: 'Jste připraveni proaktivně řídit projektová rizika?',
        demo: 'Naplánovat demo',
        resources: 'Plánování zdrojů →',
      },
    },

    // Feature: Resources
    resources: {
      badge: 'Řízení týmu',
      title: 'Plánování zdrojů',
      subtitle: 'Optimalizujte alokaci svého týmu a zajistěte, aby správní lidé pracovali na správných úkolech. Plánujte kapacitu, sledujte využití a předcházejte konfliktům zdrojů.',
      screenshotTitle: 'Plánování kapacity týmu',
      screenshotSubtitle: 'Přehled alokace zdrojů',
      keyFeatures: {
        capacity: { title: 'Plánování kapacity', desc: 'Plánujte kapacitu zdrojů napříč fázemi projektu. Vizualizujte dostupnost a identifikujte mezery dříve, než ovlivní dodávku.' },
        balancing: { title: 'Vyvažování zátěže', desc: 'Identifikujte pře- a nedostatečně alokované zdroje. Vyvažte zátěž napříč týmem pro optimální produktivitu.' },
        time: { title: 'Sledování času', desc: 'Sledujte skutečnou pracnost oproti plánované. Integrovaná funkcionalita timesheetu pro přesné náklady na projekt.' },
      },
      teamStructure: {
        title: 'Struktura projektového týmu',
        roles: {
          pm: { role: 'Projektový manažer', responsibilities: 'Celkové dodání projektu, řízení zúčastněných stran' },
          lead: { role: 'Vedoucí pracovního proudu', responsibilities: 'Dodávka specifická pro modul, koordinace týmu' },
          consultant: { role: 'Konzultant', responsibilities: 'Konfigurace, testování, dokumentace' },
          developer: { role: 'Vývojář', responsibilities: 'Vlastní vývoj, rozhraní, reporty' },
          tester: { role: 'Tester', responsibilities: 'Provádění testů, záznam defektů, validace' },
          analyst: { role: 'Obchodní analytik', responsibilities: 'Požadavky, návrh procesů, podpora UAT' },
          change: { role: 'Manažer změn', responsibilities: 'Školení, komunikace, přijetí' },
          architect: { role: 'Architekt', responsibilities: 'Návrh řešení, technická rozhodnutí' },
        },
      },
      allocationViews: {
        title: 'Pohledy na alokaci zdrojů',
        weeklyView: 'Týdenní pohled',
        resource: 'Zdroj',
        total: 'Celkem',
      },
      skills: {
        title: 'Řízení dovedností',
        items: [
          'Definujte požadované dovednosti na roli a aktivitu',
          'Sledujte úrovně dovedností členů týmu',
          'Identifikujte mezery v dovednostech pro plánování školení',
          'Přiřaďte dovednosti k požadavkům úkolu',
        ],
      },
      external: {
        title: 'Externí zdroje',
        items: [
          'Sledujte dodavatele a konzultanty samostatně',
          'Sledování smluvních dat a obnovení',
          'Sledování denní sazby a nákladů',
          'Metriky výkonu dodavatele',
        ],
      },
      timesheet: {
        title: 'Integrovaný timesheet',
        subtitle: 'Jednoduché sledování času, které se integruje přímo s projektovými aktivitami. Není potřeba žádný samostatný systém – sledujte čas tam, kde se práce děje.',
        features: {
          activity: { title: 'Na základě aktivity', desc: 'Zaznamenávejte čas přímo proti projektovým aktivitám' },
          approval: { title: 'Workflow schvalování', desc: 'Odesílejte a schvalujte timesheety týdně' },
          comparison: { title: 'Plán vs. Skutečnost', desc: 'Porovnejte plánovanou pracnost se skutečně stráveným časem' },
          export: { title: 'Export', desc: 'Export do Excelu nebo integrace s HR systémy' },
        },
      },
      cta: {
        title: 'Jste připraveni optimalizovat svůj projektový tým?',
        demo: 'Naplánovat demo',
        pricing: 'Zobrazit ceník',
      },
    },

    harmonization: {
      badge: 'Optimalizujte kvalitu dat',
      title: 'Harmonizace dat a detekce duplicit',
      subtitle: 'Identifikujte a vyčistěte duplicity ve vašich zdrojových datech před migrací. Čistá, deduplikovaná data pro váš cílový systém.',
      screenshotTitle: 'Přehled clusteru duplicit',
      screenshotSubtitle: 'Inteligentní seskupování a výběr Zlatého záznamu',
      stats: {
        records: 'Max. záznamů',
        algorithms: 'Párovacích algoritmů',
        strategies: 'Strategií Zlatého záznamu',
        auditTrail: 'Auditní stopa',
      },
      keyFeatures: {
        config: {
          title: 'Flexibilní konfigurace',
          desc: 'Definujte sady tabulek, vztahy a filtry pro přesnou detekci duplicit.',
        },
        matching: {
          title: 'Inteligentní párování',
          desc: 'Kombinujte pravidla pro přesné, fuzzy, fonetické a N-gramové párování.',
        },
        golden: {
          title: 'Výběr Zlatého záznamu',
          desc: 'Automatické nebo manuální určení hlavního záznamu.',
        },
      },
      matchTypesTitle: 'Typy párovacích pravidel',
      matchTypes: {
        exact: 'Přesná shoda',
        exactDesc: 'Pole musí být identická',
        exactUse: 'Čísla článků, ID',
        fuzzy: 'Fuzzy shoda',
        fuzzyDesc: 'Porovnání podobnosti s prahovou hodnotou',
        fuzzyUse: 'Názvy, popisy',
        phonetic: 'Fonetická shoda',
        phoneticDesc: 'Podobnost na základě zvuku',
        phoneticUse: 'Jména osob',
        ngram: 'N-Gramové porovnání',
        ngramDesc: 'Analýza podřetězců',
        ngramUse: 'Adresy, dlouhé texty',
      },
      useCase: 'Případ užití',
      algorithmsTitle: 'Párovací algoritmy',
      algorithms: {
        levenshtein: 'Levenshteinova vzdálenost',
        levenshteinDesc: 'Vypočítá minimální editační vzdálenost mezi dvěma řetězci',
        jaroWinkler: 'Jaro-Winkler',
        jaroWinklerDesc: 'Optimalizováno pro krátké řetězce a jména',
        soundex: 'Soundex & Metaphone',
        soundexDesc: 'Fonetické porovnání pro zvukovou podobnost',
        ngram: 'N-Gramová analýza',
        ngramDesc: 'Analýza podřetězců pro dlouhé texty',
      },
      workflowTitle: 'Workflow',
      workflow: {
        config: 'Konfigurace',
        configDesc: 'Vyberte tabulky z Datového katalogu, definujte vztahy, nastavte filtry',
        rules: 'Definovat pravidla',
        rulesDesc: 'Vyberte párovací pole, nastavte algoritmus a prahovou hodnotu',
        analysis: 'Spustit analýzu',
        analysisDesc: 'Automatický výpočet blokovacích klíčů, tvorba clusterů, návrh Zlatého záznamu',
        review: 'Revize a schválení',
        reviewDesc: 'Zkontrolujte clustery, potvrďte Zlatý záznam, volitelné schválení 4 očí',
        export: 'Export',
        exportDesc: 'Vyčištěná data, mapovací tabulka, auditní zpráva',
      },
      goldenRecordTitle: 'Strategie Zlatého záznamu',
      goldenRecordSubtitle: 'Automaticky nebo manuálně určete hlavní záznam:',
      goldenRecord: {
        completeness: 'Úplnost',
        completenessDesc: 'Záznam s nejvíce vyplněnými poli',
        recency: 'Aktuálnost',
        recencyDesc: 'Nejnovější záznam podle data vytvoření',
        quality: 'Kvalita',
        qualityDesc: 'Nejvyšší skóre kvality dat',
        manual: 'Manuální',
        manualDesc: 'Žádné automatické návrhy',
      },
      reviewTitle: 'Revize a schválení',
      review: {
        clusterOverview: 'Přehled clusterů: Všechny skupiny duplicit na první pohled',
        detailCompare: 'Detailní porovnání: Porovnání záznamů pole po poli',
        matchDetails: 'Detaily shody: Transparentní zobrazení důvodů detekce',
        fourEyes: 'Princip 4 očí: Volitelné schválení druhou osobou',
      },
      useCasesTitle: 'Příklady použití',
      useCases: {
        materials: {
          title: 'Duplicity materiálu (SAP)',
          rule: 'Fuzzy shoda na popisu materiálu s 85% prahovou hodnotou',
        },
        customers: {
          title: 'Duplicity zákazníků',
          rule: 'Fonetická shoda na jméně + fuzzy shoda na adrese',
          filter: 'Zlatý záznam: Nejúplnější záznam',
        },
        vendors: {
          title: 'Vyčištění dodavatelů',
          rule: 'Přesná shoda na daňovém čísle + fuzzy shoda na jméně',
          filter: 'S schválením 4 očí',
        },
      },
      tables: 'Tabulky',
      rule: 'Pravidlo',
      filter: 'Filtr',
      exportTitle: 'Možnosti exportu',
      export: {
        cleanedData: {
          title: 'Vyčištěná data',
          desc: 'Nová verze datové sady bez duplicit jako zdroj pro migraci',
        },
        mappingTable: {
          title: 'Mapovací tabulka',
          desc: 'Staré ID → ID Zlatého záznamu pro migrační pravidla',
        },
        summary: {
          title: 'Shrnutí',
          desc: 'Statistiky a auditní stopa pro dokumentaci a shodu',
        },
      },
      benefitsTitle: 'Výhody',
      benefits: {
        earlyDetection: 'Včasná detekce: Identifikujte problémy s daty před migrací',
        flexibility: 'Flexibilita: Přizpůsobitelná pravidla pro každý případ použití',
        transparency: 'Transparentnost: Sledovatelné skóre shody a rozhodnutí',
        compliance: 'Shoda: Princip 4 očí a kompletní auditní stopa',
        integration: 'Integrace: Bezproblémové propojení s Datovým katalogem a migračními pravidly',
        scalability: 'Škálovatelnost: Optimalizováno pro velké objemy dat (až 3 miliony záznamů)',
      },
      cta: {
        title: 'Jste připraveni na čistá data?',
        subtitle: 'Zjistěte, jak CUTO optimalizuje kvalitu vašich dat před migrací.',
        demo: 'Vyžádat demo',
        migration: 'Migrace dat →',
      },
    },
  },

  pricing: {
    title: 'Jednoduchý, transparentní ceník',
    subtitle: 'Získejte doživotní přístup k CUTO během naší fáze pro první osvojitele. Žádné měsíční poplatky, žádné skryté náklady – zaplaťte jednou, používejte navždy.',
    lifetime: '/doživotně',
    oneTimePayment: 'Jednorázová platba',
    contactForPricing: 'Kontaktujte nás pro ceny',
    getStarted: 'Začít',
    contactSales: 'Kontaktovat prodej',
    mostPopular: 'Nejoblíbenější',

    plans: {
      starter: {
        name: 'Starter',
        description: 'Pro malé týmy a jednotlivé projekty',
        features: {
          projects: '1 Projekt',
          users: 'Až 5 uživatelů',
          templates: 'Všech 75+ projektových šablon',
          dashboards: '30+ Dashboardů',
          support: 'E-mailová podpora',
          updates: 'Doživotní aktualizace',
        },
      },
      professional: {
        name: 'Professional',
        description: 'Pro rostoucí týmy a více projektů',
        features: {
          projects: 'Neomezeně projektů',
          users: 'Až 25 uživatelů',
          templates: 'Všech 75+ projektových šablon',
          dashboards: 'Všech 80+ dashboardů',
          bpmn: 'BPMN Procesní editor',
          migration: 'Nástroje pro migraci dat',
          support: 'Prioritní e-mailová a chatová podpora',
          updates: 'Doživotní aktualizace',
        },
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Pro velké organizace a programy',
        price: 'Vlastní',
        features: {
          everything: 'Vše neomezeně',
          users: 'Neomezeně uživatelů',
          professional: 'Všechny funkce Professional',
          onPremise: 'Možnost nasazení on-premise',
          integrations: 'Vlastní integrace',
          successManager: 'Dedikovaný manažer úspěchu',
          sla: 'SLA a prioritní podpora',
          training: 'Školení a onboarding',
        },
      },
    },

    comparison: {
      title: 'Porovnání funkcí',
      feature: 'Funkce',
      projects: 'Projekty',
      users: 'Uživatelé',
      templates: 'Projektové šablony',
      dashboards: 'Dashboardy',
      bpmn: 'BPMN Procesní editor',
      migration: 'Nástroje pro migraci dat',
      cutover: 'Cutover Management',
      onPremise: 'Nasazení on-premise',
      api: 'Přístup k API',
      support: 'Podpora',
      values: {
        unlimited: 'Neomezeně',
        basic: 'Základní',
        full: 'Plný',
        email: 'E-mail',
        emailChat: 'E-mail a Chat',
        dedicatedSla: 'Dedikovaná + SLA',
        custom: '+ Vlastní',
      },
    },

    faq: {
      title: 'Často kladené otázky',
      questions: {
        lifetime: {
          q: 'Co znamená "doživotní přístup"?',
          a: 'Jakmile si zakoupíte CUTO, máte k němu přístup navždy. To zahrnuje všechny budoucí aktualizace a nové funkce bez dalších nákladů. Žádné předplatné, žádné obnovování.',
        },
        upgrade: {
          q: 'Mohu později upgradovat?',
          a: "Ano! Můžete kdykoli upgradovat ze Starter na Professional. Zaplatíte pouze rozdíl mezi oběma plány. Kontaktujte nás pro ceny upgradu.",
        },
        trial: {
          q: 'Existuje bezplatná zkušební verze?',
          a: 'Nabízíme osobní demo, kde vám ukážeme CUTO s vaším specifickým případem použití. Kontaktujte nás a domluvte si 30minutový demo hovor.',
        },
        payment: {
          q: 'Jaké platební metody přijímáte?',
          a: 'Přijímáme bankovní převod, kreditní kartu a PayPal. Pro zákazníky Enterprise můžeme také vyhovět nákupním objednávkám a fakturaci.',
        },
        security: {
          q: 'Jsou moje data v bezpečí?',
          a: 'Ano. CUTO používá standardní šifrování, pravidelné zálohy a zpracování dat v souladu s GDPR. Zákazníci Enterprise si mohou zvolit nasazení on-premise.',
        },
        training: {
          q: 'Nabízíte školení?',
          a: 'Plány Professional zahrnují komplexní dokumentaci a video tutoriály. Plány Enterprise zahrnují osobní onboarding a školení.',
        },
      },
    },

    cta: {
      title: 'Jste připraveni zefektivnit své SAP projekty?',
      subtitle: 'Připojte se k prvním osvojitelům, kteří již spravují své SAP projekty chytřeji s CUTO.',
      button: 'Naplánovat demo',
    },
  },

  docs: {
    badge: 'Znalostní báze',
    title: 'Dokumentace',
    subtitle: 'Vše, co potřebujete vědět, abyste úspěšně používali CUTO. Průvodci, tutoriály a osvědčené postupy.',
    searchPlaceholder: 'Hledat články, témata nebo klíčová slova...',
    noResults: 'Žádné výsledky pro "{query}"',
    popular: 'Populární články',
    browseTopics: 'Procházet témata',
    articles: 'Články',
    explore: 'Prozkoumat',
    quickAccess: 'Rychlý přístup',
    gettingStarted: 'Začínáme',
    functionsLabel: 'Funkce',
    integrations: 'Integrace',
    cta: {
      title: 'Nenašli jste, co hledáte?',
      description: 'Náš tým podpory vám rád pomůže. Kontaktujte nás pro osobní asistenci.',
      contactSupport: 'Kontaktovat podporu',
    },
  },

  partners: {
    badge: 'Partnerský program',
    title: 'Rostěte s CUTO',
    subtitle: 'Staňte se součástí našeho partnerského ekosystému a těžte z atraktivních provizí, exkluzivních zdrojů a rostoucího trhu transformace SAP.',
    stats: {
      partners: 'Partnerů po celém světě',
      countries: 'Aktivních zemí',
      satisfaction: 'Spokojenost',
      payouts: 'Vyplaceno',
    },
    cta: {
      becomePartner: 'Stát se partnerem',
      learnMore: 'Dozvědět se více',
    },
    partnerTypes: {
      title: 'Vyberte si svůj partnerský model',
      subtitle: 'Ať už jste freelancer nebo velký podnik – máme pro vás ten správný program.',
      popular: 'Populární',
      commission: 'Provizní model',
      firstYear: 'První rok',
      recurring: 'Opakující se',
      idealFor: 'Ideální pro',
      yourBenefits: 'Vaše výhody',
      requirements: 'Požadavky',
      applyAs: 'Požádat jako {type} partner',
    },
    tiers: {
      title: 'Partnerské úrovně',
      subtitle: 'Čím více prodáte, tím více získáte. Postupujte na vyšší úroveň a užívejte si další výhody.',
      recommended: 'DOPORUČENO',
      minRevenue: 'Min. obrat',
      minDeals: 'Min. obchodů',
      certified: 'Certifikováno',
      benefits: 'Výhody',
      moreBenefits: '+{count} dalších výhod',
      year: '/Rok',
    },
    whyPartner: {
      title: 'Proč se stát partnerem CUTO?',
    },
    testimonials: {
      title: 'Co říkají naši partneři',
    },
    faq: {
      title: 'Často kladené otázky',
    },
    apply: {
      title: 'Jste připraveni stát se partnerem?',
      subtitle: 'Začněte dnes a těžte z rostoucího trhu transformace SAP. Registrace trvá jen 5 minut.',
      applyButton: 'Požádat jako partner',
      consultation: 'Rezervovat konzultaci',
    },
  },

  contact: {
    title: 'Kontakt',
    subtitle: 'Spojte se s námi pro demo nebo více informací o CUTO',
    info: {
      title: 'Kontaktní informace',
      email: 'E-mail',
      phone: 'Telefon',
      phoneText: 'Prosím, kontaktujte nás e-mailem',
      demo: 'Vyžádat demo',
      demoText: 'Naplánujte si osobní demo a zjistěte, jak může CUTO podpořit váš SAP projekt.',
    },
    form: {
      title: 'Poslat zprávu',
      name: 'Jméno',
      email: 'E-mail',
      company: 'Společnost',
      message: 'Zpráva',
      submit: 'Odeslat',
      successMessage: 'Děkujeme za vaši zprávu! Brzy se vám ozveme.',
    },
  },

  about: {
    title: 'O CUTO',
    subtitle: 'CUTO je strukturované řešení pro řízení projektů SAP',
    mission: {
      title: 'Naše mise',
      p1: 'Naší misí je učinit SAP projekty úspěšnějšími. Věříme, že klíčem k úspěchu je strukturované řízení projektů. CUTO bylo vyvinuto, aby dalo projektovým manažerům a týmům nástroje, které potřebují k úspěšnému řízení komplexních SAP projektů od začátku do konce.',
      p2: 'Kombinujeme osvědčené postupy z úspěšných SAP projektů s moderní technologií, abychom vám poskytli intuitivní a výkonnou platformu. Naším cílem je zjednodušit řízení projektů a zároveň zvýšit kvalitu a úspěšnost vašich projektů.',
    },
    whatWeDo: {
      title: 'Co děláme',
      description: 'CUTO vás podporuje ve všech fázích vašeho SAP projektu - od inicializace po úspěšné dokončení. Naše služba SaaS poskytuje komplexní řešení pro strukturované řízení projektů.',
      items: {
        init: 'Inicializace projektu s osvědčenými šablonami',
        planning: 'Komplexní plánování aktivit, pracnosti a časových os',
        management: 'Průběžné řízení projektu a sledování pokroku',
        completion: 'Strukturované dokončení projektu s dokumentací',
      },
    },
    whyCuto: {
      title: 'Proč CUTO?',
      templates: {
        title: 'Osvědčené šablony',
        description: 'Začněte s osvědčenými postupy z úspěšných SAP projektů. Ušetřete čas při inicializaci projektu.',
      },
      planning: {
        title: 'Strukturované plánování',
        description: 'Plánujte aktivity, pracnost a časové osy přesně. Vytvářejte realistické a proveditelné projektové plány.',
      },
      management: {
        title: 'Průběžné řízení',
        description: 'Mějte přehled o pokroku projektu. Identifikujte rizika včas a dělejte rozhodnutí založená na datech.',
      },
      completion: {
        title: 'Úspěšné dokončení',
        description: 'Uzavírejte své projekty strukturovaně. S jasnými milníky a kompletní dokumentací.',
      },
    },
    team: {
      title: 'Náš tým',
      p1: 'CUTO bylo vyvinuto týmem s dlouholetými zkušenostmi v SAP projektech. Rozumíme výzvám, kterým čelí projektoví manažeři a týmy při transformacích, implementacích, migracích dat a cutover projektech SAP.',
      p2: 'Naším cílem je překonat tyto výzvy prostřednictvím strukturovaných procesů a moderní technologie. Jsme nadšení pro to, aby SAP projekty byly úspěšnější.',
    },
  },

  compare: {
    badge: 'Porovnat',
    title: 'CUTO vs. Alternativy',
    subtitle: 'Porovnejte CUTO s jinými nástroji pro řízení projektů a najděte nejlepší řešení pro vaše SAP projekty.',
    recommended: 'Doporučeno',
    features: 'Funkce',
    strengths: 'Silné stránky',
    limitations: 'Omezení',
    allCategories: 'Všechny kategorie',
    whyCuto: {
      title: 'Proč CUTO pro SAP projekty?',
      specialized: {
        title: 'Specializováno pro SAP',
        description: 'Na rozdíl od obecných nástrojů bylo CUTO speciálně vyvinuto pro požadavky SAP projektů.',
      },
      ready: {
        title: 'Připraveno k použití',
        description: 'Předkonfigurované šablony pro SAP Activate, Cutover a další – není nutné žádné složité nastavování.',
      },
      cutover: {
        title: 'Integrovaný Cutover',
        description: 'Unikátní řízení cutoveru pro hladký Go-Live – u jiných nástrojů je to doplněk nebo není k dispozici vůbec.',
      },
      pricing: {
        title: 'Spravedlivý ceník',
        description: 'Transparentní ceny bez skrytých nákladů za doplňky nebo podnikové funkce.',
      },
    },
    cta: {
      title: 'Přesvědčte se sami',
      description: 'Vyzkoušejte CUTO zdarma na 14 dní a zažijte, jak efektivní může být řízení SAP projektů.',
      tryFree: 'Vyzkoušet zdarma',
      requestDemo: 'Vyžádat demo',
    },
  },

  useCases: {
    badge: 'Případy užití a tutoriály',
    title: 'CUTO v praxi',
    subtitle: 'Objevte praktické průvodce a video tutoriály pro typické případy použití v SAP projektech. Od plánování projektu po Go-Live.',
    searchPlaceholder: 'Hledat případy užití...',
    featured: 'Doporučené případy užití',
    all: 'Všechny',
    allUseCases: 'Všechny případy užití',
    noResults: {
      title: 'Nebyly nalezeny žádné případy užití',
      description: 'Zkuste jiné vyhledávání nebo vyberte jinou kategorii.',
      reset: 'Resetovat filtry',
    },
    suggest: {
      title: 'Chybí vám případ užití?',
      description: 'Neustále rozšiřujeme naši knihovnu případů užití. Dejte nám vědět, která témata by vás zajímala.',
      button: 'Navrhnout případ užití',
      features: 'Objevit všechny funkce',
    },
    detail: {
      home: 'Domů',
      useCases: 'Případy užití',
      readingTime: 'doba čtení',
      videoTutorial: 'Video tutoriál',
      comingSoon: 'Již brzy',
      stepByStep: 'Průvodce krok za krokem',
      proTips: 'Profesionální tipy',
      related: 'Související případy užití',
      cta: {
        title: 'Jste připraveni vyzkoušet CUTO?',
        description: 'Začněte dnes a optimalizujte své SAP projekty.',
        start: 'Začít',
        allUseCases: '← Všechny případy užití',
      },
    },
  },

  // Legal Pages
  legal: {
    imprint: {
      title: 'Tiráž',
      subtitle: 'Právní informace',
      companyInfo: {
        title: 'Informace o společnosti',
        companyName: 'Název společnosti',
        address: 'Adresa',
        contact: 'Kontakt',
      },
      legalInfo: {
        title: 'Právní informace',
        managingDirector: 'Jednatel',
        commercialRegister: 'Obchodní rejstřík',
        registerCourt: 'Rejstříkový soud',
        registrationNumber: 'Registrační číslo',
        vatId: 'DIČ',
        vatIdText: 'Daňové identifikační číslo podle §27a zákona o DPH',
      },
      liabilityContent: {
        title: 'Odpovědnost za obsah',
        p1: 'Jako poskytovatel služeb jsme odpovědní za vlastní obsah na těchto stránkách v souladu s obecným právem podle § 7 odst. 1 německého zákona o telemédiích (TMG). Podle §§ 8 až 10 TMG však jako poskytovatel služeb nejsme povinni monitorovat námi přenášené nebo ukládané informace třetích stran ani vyšetřovat okolnosti, které naznačují nezákonnou činnost.',
        p2: 'Povinnosti odstranit nebo zablokovat používání informací podle obecného práva zůstávají nedotčeny. Odpovědnost v tomto ohledu je však možná až od okamžiku, kdy se dozvíme o konkrétním porušení zákona. Pokud se o takovém porušení dozvíme, tento obsah okamžitě odstraníme.',
      },
      liabilityLinks: {
        title: 'Odpovědnost za odkazy',
        p1: 'Naše nabídka obsahuje odkazy na externí webové stránky třetích stran, na jejichž obsah nemáme žádný vliv. Proto nemůžeme převzít žádnou odpovědnost za tento externí obsah. Za obsah odkazovaných stránek je vždy odpovědný příslušný poskytovatel nebo provozovatel stránek. Odkazované stránky byly v době propojení zkontrolovány na možné právní porušení. V době propojení nebyl rozpoznatelný žádný nezákonný obsah.',
        p2: 'Trvalá obsahová kontrola odkazovaných stránek však není rozumná bez konkrétních důkazů o porušení zákona. Pokud se o porušení dozvíme, takové odkazy okamžitě odstraníme.',
      },
      copyright: {
        title: 'Autorská práva',
        p1: 'Obsah a díla vytvořená provozovateli stránek na těchto stránkách podléhají německému autorskému právu. Množení, zpracování, distribuce a jakákoli forma komercializace takového materiálu nad rámec autorského zákona vyžaduje předchozí písemný souhlas příslušného autora nebo tvůrce.',
        p2: 'Stahování a kopie této stránky jsou povoleny pouze pro soukromé, nekomerční použití. Pokud obsah na této stránce nebyl vytvořen provozovatelem, jsou dodržována autorská práva třetích stran. Zejména je obsah třetích stran jako takový označen. Pokud si přesto všimnete porušení autorských práv, informujte nás prosím. Pokud se o porušení dozvíme, takový obsah okamžitě odstraníme.',
      },
    },
    privacy: {
      title: 'Zásady ochrany osobních údajů',
      subtitle: 'Informace o ochraně údajů',
      intro: {
        title: '1. Úvod',
        p1: 'Ochranu vašich osobních údajů bereme velmi vážně. Tyto zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme a chráníme vaše osobní údaje, když používáte naše webové stránky a služby.',
        p2: 'Odpovědnou stranou za zpracování údajů na této webové stránce je:',
      },
      dataCollection: {
        title: '2. Shromažďování a zpracování údajů',
        autoTitle: '2.1 Automaticky shromažďované údaje',
        autoIntro: 'Při návštěvě našich webových stránek automaticky shromažďujeme určité informace, včetně:',
        autoItems: ['IP adresa', 'Typ a verze prohlížeče', 'Operační systém', 'Datum a čas přístupu', 'Navštívené stránky', 'Referrer URL'],
        autoP: 'Tato data jsou zpracovávána za účelem zajištění bezpečnosti a funkčnosti našich webových stránek a ke zlepšení našich služeb.',
      },
      contactForm: {
        title: '3. Kontaktní formulář a e-mail',
        p1: 'Když nás kontaktujete prostřednictvím kontaktního formuláře nebo e-mailu, zpracováváme následující údaje:',
        items: ['Jméno', 'E-mailová adresa', 'Obsah zprávy', 'Jakékoli další informace, které dobrovolně poskytnete'],
        p2: 'Tato data jsou zpracovávána za účelem odpovědi na váš dotaz a jsou uložena po dobu nezbytnou k vyřízení vašeho požadavku nebo jak vyžaduje zákon.',
      },
      cookies: {
        title: '4. Cookies',
        p1: 'Naše webové stránky používají soubory cookie ke zlepšení uživatelského zážitku a analýze používání webových stránek. Cookies jsou malé textové soubory uložené na vašem zařízení.',
        p2: 'Soubory cookie můžete ovládat a spravovat v nastavení svého prohlížeče. Deaktivace souborů cookie však může omezit funkčnost našich webových stránek.',
        p3: 'Podrobné informace o souborech cookie, které používáme, naleznete v našich',
        cookiePolicy: 'Zásadách používání souborů cookie',
      },
      dataSharing: {
        title: '5. Sdílení údajů',
        p1: 'Vaše osobní údaje neprodáváme, neobchodujeme s nimi ani je nepronajímáme třetím stranám. Vaše údaje můžeme sdílet pouze za následujících okolností:',
        items: [
          'S poskytovateli služeb, kteří nám pomáhají s provozem našich webových stránek a služeb (za přísných dohod o mlčenlivosti)',
          'Když to vyžaduje zákon nebo k ochraně našich práv a bezpečnosti',
          'S vaším výslovným souhlasem',
        ],
      },
      dataSecurity: {
        title: '6. Zabezpečení údajů',
        p1: 'Zavádíme vhodná technická a organizační opatření k ochraně vašich osobních údajů před neoprávněným přístupem, ztrátou, zničením nebo změnou. Tato opatření zahrnují:',
        items: ['Šifrování SSL/TLS pro přenos dat', 'Pravidelné bezpečnostní aktualizace', 'Kontroly přístupu a autentizace', 'Pravidelné zálohy'],
      },
      yourRights: {
        title: '7. Vaše práva',
        p1: 'Podle Obecného nařízení o ochraně osobních údajů (GDPR) máte následující práva:',
        items: {
          access: 'Právo na přístup: Můžete požadovat informace o svých osobních údajích, které zpracováváme',
          rectification: 'Právo na opravu: Můžete požadovat opravu nepřesných údajů',
          erasure: 'Právo na výmaz: Můžete požadovat výmaz svých osobních údajů',
          restriction: 'Právo na omezení: Můžete požadovat omezení zpracování údajů',
          portability: 'Právo na přenositelnost údajů: Můžete požadovat přenos svých údajů',
          objection: 'Právo vznést námitku: Můžete vznést námitku proti určitým typům zpracování údajů',
          withdrawal: 'Právo odvolat souhlas: Svůj souhlas můžete kdykoli odvolat',
        },
        p2: 'Pro uplatnění těchto práv nás prosím kontaktujte na',
      },
      dataRetention: {
        title: '8. Uchovávání údajů',
        p1: 'Vaše osobní údaje uchováváme pouze po dobu nezbytnou k naplnění účelů, pro které byly shromážděny, nebo jak vyžadují příslušné zákony a předpisy.',
        p2: 'Když data již nejsou potřeba, budou bezpečně smazána nebo anonymizována.',
      },
      changes: {
        title: '9. Změny těchto zásad ochrany osobních údajů',
        p1: 'Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat, aby odrážely změny v našich postupech nebo právních požadavcích. O jakýchkoli významných změnách vás budeme informovat zveřejněním nových zásad ochrany osobních údajů na této stránce a aktualizací data "Poslední aktualizace".',
      },
      contact: {
        title: '10. Kontakt',
        p1: 'Máte-li jakékoli dotazy nebo obavy týkající se těchto zásad ochrany osobních údajů nebo našich postupů zpracování údajů, kontaktujte nás:',
        email: 'E-mail',
        address: 'Adresa',
      },
    },
    terms: {
      title: 'Obchodní podmínky',
      subtitle: 'Podmínky pro používání CUTO',
      scope: {
        title: '1. Rozsah a přijetí',
        p1: 'Tyto Obchodní podmínky ("Podmínky") upravují váš přístup a používání služby CUTO ("Služba") poskytované společností benX AG ("my", "nás" nebo "naše"). Přístupem nebo používáním naší Služby souhlasíte s tím, že budete vázáni těmito Podmínkami.',
        p2: 'Pokud s těmito Podmínkami nesouhlasíte, nesmíte k Službě přistupovat ani ji používat.',
      },
      serviceDescription: {
        title: '2. Popis služby',
        p1: 'CUTO je platforma Software-as-a-Service (SaaS) navržená k podpoře strukturovaného řízení projektů pro SAP projekty, včetně:',
        items: [
          'Inicializace projektu pomocí šablon',
          'Plánování aktivit, pracnosti a časových os',
          'Řízení projektu a sledování pokroku',
          'Dokončení projektu a dokumentace',
        ],
      },
      registration: {
        title: '3. Registrace a účet',
        p1: 'Chcete-li používat Službu, musíte si vytvořit účet a poskytnout přesné, úplné a aktuální informace. Jste odpovědní za:',
        items: [
          'Udržování důvěrnosti přihlašovacích údajů k vašemu účtu',
          'Všechny aktivity, které se uskuteční pod vaším účtem',
          'Okamžité informování nás o jakémkoli neoprávněném použití vašeho účtu',
        ],
        p2: 'Musíte být starší 18 let, abyste si mohli vytvořit účet a používat Službu.',
      },
      acceptableUse: {
        title: '4. Přijatelné použití',
        p1: 'Souhlasíte, že nebudete:',
        items: [
          'Používat Službu k jakémukoli nezákonnému nebo neoprávněnému účelu',
          'Porušovat jakékoli zákony ve vaší jurisdikci',
          'Přenášet jakékoli viry, malware nebo škodlivý kód',
          'Pokoušet se získat neoprávněný přístup ke Službě nebo jejím souvisejícím systémům',
          'Zasahovat do Služby nebo serverů připojených ke Službě nebo je narušovat',
          'Kopírovat, upravovat nebo vytvářet odvozená díla Služby',
          'Zpětně analyzovat, dekompilovat nebo rozebírat Službu',
          'Používat Službu k ukládání nebo přenosu porušujícího, urážlivého nebo jinak nezákonného materiálu',
        ],
      },
      subscription: {
        title: '5. Předplatné a platba',
        p1: 'Služba je poskytována na základě předplatného. Předplacením souhlasíte s placením příslušných poplatků, jak je uvedeno ve vašem plánu předplatného.',
        p2: 'Poplatky za předplatné jsou účtovány předem na měsíční nebo roční bázi, jak je vybráno. Všechny poplatky jsou nevratné, s výjimkou případů, kdy to vyžaduje zákon.',
        p3: 'Vyhrazujeme si právo kdykoli změnit naše ceny. Změny cen vám budou sděleny předem a budou se vztahovat na následující fakturační období.',
        p4: 'Pokud platba není přijata nebo selže, můžeme pozastavit nebo ukončit váš přístup ke Službě.',
      },
      intellectualProperty: {
        title: '6. Duševní vlastnictví',
        p1: 'Služba, včetně jejího původního obsahu, funkcí a funkčnosti, je majetkem společnosti benX AG a je chráněna mezinárodními autorskými právy, ochrannými známkami a dalšími zákony o duševním vlastnictví.',
        p2: 'Zůstáváte vlastníkem jakýchkoli dat, obsahu nebo materiálů, které nahráváte nebo vytváříte pomocí Služby ("Váš obsah"). Používáním Služby nám udělujete licenci k používání, ukládání a zpracování Vašeho obsahu výhradně za účelem poskytování Služby vám.',
        p3: 'Nesmíte používat naše ochranné známky, loga nebo jiné proprietární informace bez našeho předchozího písemného souhlasu.',
      },
      dataPrivacy: {
        title: '7. Data a soukromí',
        p1: 'Vaše používání Služby se také řídí našimi',
        privacyPolicy: 'Zásadami ochrany osobních údajů',
        p2: '. Přečtěte si prosím naše Zásady ochrany osobních údajů, abyste pochopili, jak shromažďujeme, používáme a chráníme vaše údaje.',
        p3: 'Zavádíme vhodná bezpečnostní opatření k ochraně vašich údajů, ale nemůžeme zaručit absolutní bezpečnost. Jste odpovědní za udržování bezpečnosti přihlašovacích údajů k vašemu účtu.',
      },
      serviceAvailability: {
        title: '8. Dostupnost služby',
        p1: 'Snažíme se poskytovat spolehlivý a nepřetržitý přístup ke Službě. Nezaručujeme však, že Služba bude dostupná po celou dobu nebo bez přerušení, chyb nebo závad.',
        p2: 'Můžeme provádět plánovanou údržbu nebo aktualizace, které mohou dočasně přerušit přístup ke Službě. Budeme se snažit vás o plánované údržbě informovat předem.',
      },
      termination: {
        title: '9. Ukončení',
        p1: 'Své předplatné můžete kdykoli zrušit prostřednictvím nastavení svého účtu nebo nás kontaktovat. Po zrušení bude váš přístup ke Službě pokračovat až do konce vašeho aktuálního fakturačního období.',
        p2: 'Váš přístup ke Službě můžeme pozastavit nebo ukončit okamžitě, pokud:',
        items: [
          'Porušíte tyto Podmínky',
          'Nezaplatíte příslušné poplatky',
          'Jsme k tomu povinni zákonem',
          'Přestaneme Službu poskytovat',
        ],
        p3: 'Po ukončení vaše právo používat Službu okamžitě zanikne. Váš účet a data můžeme smazat po přiměřené době uchovávání, pokud nejsme povinni je uchovávat zákonem.',
      },
      liability: {
        title: '10. Omezení odpovědnosti',
        p1: 'V maximálním rozsahu povoleném zákonem nenese společnost benX AG odpovědnost za žádné nepřímé, náhodné, zvláštní, následné nebo represivní škody, ani za žádnou ztrátu zisku nebo příjmů, ať už vznikly přímo nebo nepřímo, ani za žádnou ztrátu dat, použití, dobrého jména nebo jiných nehmotných ztrát.',
        p2: 'Naše celková odpovědnost za jakékoli nároky vyplývající z nebo související se Službou nepřesáhne částku, kterou jste nám zaplatili za dvanáct (12) měsíců předcházejících nároku.',
      },
      changes: {
        title: '11. Změny Podmínek',
        p1: 'Vyhrazujeme si právo kdykoli změnit tyto Podmínky. O jakýchkoli podstatných změnách vás budeme informovat zveřejněním aktualizovaných Podmínek na této stránce a aktualizací data "Poslední aktualizace". Vaše další používání Služby po takových změnách představuje přijetí upravených Podmínek.',
      },
      governingLaw: {
        title: '12. Rozhodné právo',
        p1: 'Tyto Podmínky se řídí a vykládají v souladu se zákony Německa, bez ohledu na jeho kolizní ustanovení. Jakékoli spory vyplývající z těchto Podmínek nebo Služby podléhají výlučné jurisdikci soudů v Německu.',
      },
      contact: {
        title: '13. Kontakt',
        p1: 'Máte-li jakékoli dotazy k těmto Podmínkám, kontaktujte nás:',
        email: 'E-mail',
        address: 'Adresa',
      },
    },
    cookies: {
      title: 'Zásady používání souborů cookie',
      subtitle: 'Informace o našem používání souborů cookie',
      whatAreCookies: {
        title: '1. Co jsou soubory cookie?',
        p1: 'Soubory cookie jsou malé textové soubory, které se umisťují na vaše zařízení (počítač, tablet nebo mobil), když navštívíte webovou stránku. Soubory cookie se hojně používají k tomu, aby webové stránky fungovaly efektivněji a aby poskytovaly informace vlastníkům webových stránek.',
        p2: 'Soubory cookie umožňují webové stránce rozpoznat vaše zařízení a uložit některé informace o vašich preferencích nebo minulých akcích. To nám pomáhá poskytovat vám lepší zážitek, když procházíte naše webové stránky, a také nám umožňuje zlepšovat naše služby.',
      },
      howWeUse: {
        title: '2. Jak používáme soubory cookie',
        p1: 'Soubory cookie používáme k následujícím účelům:',
        essential: 'Nezbytné soubory cookie: Nutné pro správné fungování webových stránek',
        analytics: 'Analytické soubory cookie: Pomáhají nám pochopit, jak návštěvníci interagují s našimi webovými stránkami',
        functional: 'Funkční soubory cookie: Pamatují si vaše preference a nastavení',
        performance: 'Výkonnostní soubory cookie: Shromažďují informace o výkonu webových stránek',
      },
      types: {
        title: '3. Typy souborů cookie, které používáme',
        essential: {
          title: '3.1 Nezbytné soubory cookie',
          p1: 'Tyto soubory cookie jsou nezbytné pro fungování webových stránek a nelze je v našich systémech vypnout. Obvykle se nastavují pouze v reakci na vámi provedené akce, jako je nastavení vašich preferencí soukromí, přihlášení nebo vyplňování formulářů.',
          p2: 'Příklady: Soubory cookie relace, autentizační soubory cookie, bezpečnostní soubory cookie',
        },
        analytics: {
          title: '3.2 Analytické soubory cookie',
          p1: 'Tyto soubory cookie nám umožňují počítat návštěvy a zdroje provozu, abychom mohli měřit a zlepšovat výkon našich webových stránek. Pomáhají nám pochopit, které stránky jsou nejoblíbenější a jak se návštěvníci po webu pohybují.',
          p2: 'Příklady: Soubory cookie Google Analytics (pokud se používají)',
        },
        functional: {
          title: '3.3 Funkční soubory cookie',
          p1: 'Tyto soubory cookie umožňují webové stránce poskytovat vylepšenou funkčnost a personalizaci. Mohou být nastaveny námi nebo poskytovateli třetích stran, jejichž služby jsme přidali na naše stránky.',
          p2: 'Příklady: Jazykové preference, nastavení regionu, preference uživatelského rozhraní',
        },
        performance: {
          title: '3.4 Výkonnostní soubory cookie',
          p1: 'Tyto soubory cookie nám pomáhají pochopit, jak návštěvníci interagují s našimi webovými stránkami, anonymním shromažďováním a hlášením informací. To nám pomáhá zlepšovat způsob, jakým naše webové stránky fungují.',
        },
      },
      thirdParty: {
        title: '4. Soubory cookie třetích stran',
        p1: 'Kromě našich vlastních souborů cookie můžeme také používat různé soubory cookie třetích stran k hlášení statistik používání Služby, doručování reklam atd. Tyto soubory cookie třetích stran mohou zahrnovat:',
        items: ['Analytické služby (např. Google Analytics)', 'Reklamní sítě', 'Platformy sociálních médií'],
        p2: 'Tyto soubory cookie třetích stran podléhají příslušným zásadám ochrany osobních údajů třetích stran. Tyto soubory cookie nekontrolujeme a pro více informací o jejich postupech s cookies byste měli zkontrolovat webové stránky třetích stran.',
      },
      duration: {
        title: '5. Doba trvání souborů cookie',
        p1: 'Soubory cookie mohou být buď "relační" nebo "trvalé":',
        session: 'Relační soubory cookie: Jedná se o dočasné soubory cookie, které se smažou po zavření prohlížeče. Umožňují webové stránce propojit vaše akce během relace prohlížeče.',
        persistent: 'Trvalé soubory cookie: Zůstávají na vašem zařízení po stanovenou dobu nebo dokud je nesmažete. Aktivují se pokaždé, když navštívíte webovou stránku, která je vytvořila.',
      },
      managing: {
        title: '6. Správa souborů cookie',
        p1: 'Máte právo přijmout nebo odmítnout soubory cookie. Většina webových prohlížečů soubory cookie automaticky přijímá, ale obvykle můžete upravit nastavení svého prohlížeče tak, abyste soubory cookie odmítli, pokud si to přejete.',
        p2: 'Pokud se však rozhodnete soubory cookie odmítnout, možná nebudete moci plně využívat interaktivní funkce našich webových stránek nebo některé naše služby nemusí fungovat správně.',
        p3: 'Soubory cookie můžete spravovat prostřednictvím nastavení svého prohlížeče. Zde jsou odkazy na pokyny pro populární prohlížeče:',
      },
      consent: {
        title: '7. Souhlas se soubory cookie',
        p1: 'Při první návštěvě našich webových stránek vás můžeme požádat o souhlas s používáním určitých souborů cookie. Svůj souhlas můžete kdykoli odvolat úpravou preferencí souborů cookie v nastavení svého prohlížeče nebo nás kontaktovat.',
        p2: 'Nezbytné soubory cookie nevyžadují souhlas, protože jsou nutné pro fungování webových stránek.',
      },
      updates: {
        title: '8. Aktualizace těchto Zásad používání souborů cookie',
        p1: 'Tyto Zásady používání souborů cookie můžeme čas od času aktualizovat, aby odrážely změny v našich postupech nebo z jiných provozních, právních nebo regulačních důvodů. O jakýchkoli významných změnách vás budeme informovat zveřejněním nových Zásad používání souborů cookie na této stránce a aktualizací data "Poslední aktualizace".',
      },
      contact: {
        title: '9. Kontakt',
        p1: 'Máte-li jakékoli dotazy k našemu používání souborů cookie nebo k těmto Zásadám používání souborů cookie, kontaktujte nás:',
        email: 'E-mail',
        address: 'Adresa',
      },
    },
  },
};
