// Spanish Translations
import { TranslationKeys } from './de';

export const es: TranslationKeys = {
  // Navigation
  nav: {
    home: 'Inicio',
    features: 'Características',
    pricing: 'Precios',
    useCases: 'Casos de uso',
    caseStudies: 'Casos de éxito',
    compare: 'Comparar',
    partners: 'Socios',
    about: 'Acerca de',
    contact: 'Contacto',
    docs: 'Documentación',
    status: 'Estado',
    changelog: 'Registro de cambios',
    login: 'Iniciar sesión',
    requestDemo: 'Solicitar demo',
    password: 'Contraseña',
    allFeaturesOverview: 'Vista general de todas las funciones',
    featureLabels: {
      dashboards: '80+ Paneles de control',
      templates: '75+ Plantillas',
      bpmn: 'Editor de procesos BPMN',
      migration: 'Migración de datos',
      harmonization: 'Armonización de datos',
      cutover: 'Gestión de cutover',
      risks: 'Gestión de riesgos y problemas',
      resources: 'Planificación de recursos',
    },
  },
  
  // Common
  common: {
    learnMore: 'Más información',
    getStarted: 'Comenzar',
    readMore: 'Leer más',
    viewAll: 'Ver todo',
    back: 'Atrás',
    next: 'Siguiente',
    submit: 'Enviar',
    cancel: 'Cancelar',
    save: 'Guardar',
    search: 'Buscar',
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    yes: 'Sí',
    no: 'No',
    close: 'Cerrar',
    download: 'Descargar',
    subscribe: 'Suscribirse',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    name: 'Nombre',
    company: 'Empresa',
    message: 'Mensaje',
  },

  // Cookie Consent Banner
  cookies: {
    title: '🍪 Valoramos su privacidad',
    description: 'Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar todo", acepta el uso de cookies. También puede personalizar sus preferencias.',
    learnMore: 'Más información',
    customize: 'Personalizar',
    hideDetails: 'Ocultar detalles',
    rejectAll: 'Rechazar todo',
    acceptAll: 'Aceptar todo',
    savePreferences: 'Guardar preferencias',
    preferencesTitle: 'Preferencias de cookies',
    necessary: {
      title: 'Necesarias',
      description: 'Esenciales para el funcionamiento del sitio web. No se pueden desactivar.',
      badge: 'Siempre activo',
    },
    analytics: {
      title: 'Analíticas',
      description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.',
    },
    functional: {
      title: 'Funcionales',
      description: 'Recuerdan sus preferencias y personalizan su experiencia.',
    },
    marketing: {
      title: 'Marketing',
      description: 'Muestran anuncios relevantes y miden la efectividad de las campañas publicitarias.',
    },
  },
  
  // Homepage
  home: {
    hero: {
      badge: 'Gestión de proyectos SAP reinventada',
      title: 'Planifica, gestiona y ejecuta proyectos SAP de forma más inteligente – con CUTO',
      subtitle: 'Acelera los proyectos SAP con plantillas preconfiguradas, estimación realista del esfuerzo y paneles inteligentes — todo en una plataforma.',
      cta: {
        primary: 'Obtener acceso de por vida',
        secondary: 'Ver cómo funciona',
      },
    },
    stats: {
      projects: 'Proyectos exitosos',
      timeSaved: 'Tiempo ahorrado',
      satisfaction: 'Satisfacción del cliente',
      countries: 'Países en el mundo',
    },
    features: {
      title: 'Todo lo que necesitas para proyectos SAP exitosos',
      subtitle: 'CUTO combina métodos probados con tecnología moderna para máxima transparencia del proyecto.',
    },
    problem: {
      title: 'Los proyectos SAP son complejos',
      subtitle: 'Muchos proyectos fracasan por falta de estructura, responsabilidades poco claras y falta de transparencia.',
      problems: [
        'Falta de estandarización',
        'Responsabilidades poco claras',
        'Falta de transparencia',
        'Retrasos y sobrecostes',
      ],
    },
    solution: {
      title: 'CUTO resuelve estos problemas',
      subtitle: 'Con procesos estructurados, roles claros e información en tiempo real.',
    },
    targetAudience: {
      title: 'Para cada grupo objetivo',
      subtitle: 'CUTO apoya a todos los que quieren gestionar con éxito proyectos SAP',
      tabs: {
        customers: {
          label: 'Clientes SAP',
          title: 'Para clientes SAP',
          description: 'CUTO te apoya como cliente SAP en la gestión profesional e implementación exitosa de tus proyectos SAP internos.',
          whyTitle: '¿Por qué CUTO para clientes SAP?',
          benefits: [
            'Gestión de proyectos estructurada sin costes de consultoría externa',
            'Plantillas probadas para proyectos SAP típicos de tu empresa',
            'Control total sobre el progreso del proyecto, esfuerzos y riesgos',
            'Estructuras de proyecto reutilizables para iniciativas futuras',
            'Comunicación transparente con stakeholders internos'
          ]
        },
        consultancies: {
          label: 'Consultorías SAP',
          title: 'Para consultorías SAP',
          description: 'Aumenta la eficiencia de tus proyectos de consultoría y entrega resultados estructurados y trazables a tus clientes.',
          whyTitle: '¿Por qué CUTO para consultorías SAP?',
          benefits: [
            'Inicialización de proyectos más rápida con plantillas preconfiguradas',
            'Presentaciones de proyecto profesionales para clientes',
            'Procesos estandarizados para una ejecución de proyecto consistente',
            'Mejor planificación de recursos y estimación de esfuerzos',
            'Mejores prácticas reutilizables para proyectos similares'
          ]
        },
        freelancers: {
          label: 'Freelancers',
          title: 'Para freelancers',
          description: 'Como freelancer, te beneficias de herramientas profesionales de gestión de proyectos que destacan tu experiencia.',
          whyTitle: '¿Por qué CUTO para freelancers?',
          benefits: [
            'Gestión de proyectos profesional incluso como individuo',
            'Inicio rápido en nuevos proyectos con plantillas',
            'Estimaciones de esfuerzo creíbles para tus clientes',
            'Documentación estructurada de tu trabajo',
            'Estructuras de proyecto reutilizables para trabajos similares'
          ]
        },
        users: {
          label: 'Usuarios SAP',
          title: 'Para usuarios SAP',
          description: 'Como usuario SAP, obtienes las herramientas para gestionar tus proyectos SAP de forma independiente y exitosa.',
          whyTitle: '¿Por qué CUTO para usuarios SAP?',
          benefits: [
            'Gestión de proyectos independiente sin soporte externo',
            'Mejores prácticas para proyectos típicos de usuarios SAP',
            'Estructuración clara incluso para proyectos pequeños',
            'Soporte de aprendizaje a través de plantillas predefinidas',
            'Documentación trazable para tu equipo'
          ]
        }
      }
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Descubre cómo CUTO transforma los proyectos SAP.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Encuentra respuestas a las preguntas más importantes sobre CUTO.',
    },
    cta: {
      title: '¿Listo para una gestión de proyectos SAP estructurada?',
      subtitle: 'Contáctanos para una demo y descubre cómo CUTO puede apoyar tu próximo proyecto SAP.',
      button: 'Solicitar demo',
    },
    newsletter: {
      title: 'Lista de verificación de proyectos SAP',
      subtitle: 'Obtén nuestra lista de verificación completa que cubre todas las fases de implementación SAP. Utilizada por más de 500 gerentes de proyecto en todo el mundo.',
      placeholder: 'Tu correo electrónico de trabajo',
      button: 'Descargar lista gratuita',
      disclaimer: 'Al suscribirte, aceptas recibir actualizaciones ocasionales. Puedes darte de baja en cualquier momento.',
      freeDownload: 'Descarga gratuita',
      checklistItems: [
        'Criterios de evaluación pre-proyecto',
        'Lista de preparación para go-live',
        'Marco de identificación de riesgos',
        'Plantilla de planificación de cutover',
      ],
      checklistCount: 'Elementos de la lista',
      successMessage: '🎉 ¡Gracias! Revisa tu correo para la lista de verificación SAP.',
      errorMessage: 'Por favor, introduce tu dirección de correo electrónico.',
      sending: 'Enviando...',
      checkEmail: '✓ ¡Revisa tu correo!',
      footerTitle: 'Mantente informado',
      footerSubtitle: 'Recibe consejos SAP y novedades de CUTO.',
      footerPlaceholder: 'Tu correo',
      subscribing: 'Suscribiendo...',
      subscribed: '✓ ¡Suscrito!',
      subscribe: 'Suscribirse',
      compactTitle: 'Consejos para proyectos SAP',
      compactSubtitle: 'Perspectivas semanales para proyectos SAP exitosos.',
    },
    explainerVideo: {
      title: 'Ver CUTO en acción',
      subtitle: 'Descubre en 90 segundos cómo CUTO transforma tus proyectos SAP.',
      comingSoon: 'Video próximamente',
      badge: 'Ver demo',
    },
    trustBadges: {
      gdpr: 'Compatible RGPD',
      madeInGermany: 'Made in Germany',
      euHosting: 'Alojamiento UE',
      sapCertified: 'Certificado SAP',
    },
    socialProof: {
      title: 'Confiado por profesionales SAP en empresas líderes',
    },
    statsLabels: {
      dashboards: 'Paneles',
      templates: 'Plantillas',
      dashboardCategories: 'Categorías de paneles',
      processLevels: 'Niveles de proceso',
    },
    problemStatement: {
      title: 'Los proyectos SAP son complejos. Tus herramientas no deberían serlo.',
      subtitle: 'Entendemos tus desafíos – y creamos CUTO para resolverlos.',
      problem: 'El problema',
      problems: {
        pmoOverhead: {
          title: 'Alta carga PMO',
          description: 'El seguimiento manual, las hojas de Excel interminables y la información dispersa drenan la productividad de tu equipo.',
        },
        doubleEntry: {
          title: 'Doble entrada de datos',
          description: 'Mantener múltiples sistemas lleva a datos inconsistentes, tiempo perdido y errores costosos.',
        },
        noDashboard: {
          title: 'Sin panel central',
          description: 'Sin visibilidad en tiempo real, los riesgos pasan desapercibidos y las decisiones se basan en información desactualizada.',
        },
      },
      solution: 'CUTO resuelve los tres – en una plataforma unificada',
    },
    howItWorks: {
      title: 'Cómo funciona – Cómo CUTO te apoya',
      subtitle: 'CUTO.ai te guía a través de todo el ciclo del proyecto SAP – desde la primera idea hasta el go-live. En cuatro pasos, la complejidad se convierte en un plan de proyecto claro y manejable.',
      steps: {
        templates: {
          title: '75+ Plantillas',
          description: 'Captura tu proyecto SAP en minutos. Elige entre plantillas predefinidas para tipos de proyectos SAP típicos. CUTO reconoce automáticamente las fases, actividades y roles relevantes y establece la base para tu plan de proyecto estructurado.',
        },
        planning: {
          title: 'Planificación completa',
          description: 'Estimaciones de esfuerzo realistas. Basado en tus entradas (alcance, sistemas, tamaño del equipo), CUTO.ai crea una estimación de esfuerzo sólida – basada en datos, trazable y ajustable. Sin más conjeturas, sino bases de planificación confiables.',
        },
        control: {
          title: 'Control total',
          description: 'Mantén el control total en todo momento. Los paneles te muestran el progreso, los riesgos y las dependencias en tiempo real. Las actualizaciones automáticas y las alertas te ayudan a establecer prioridades correctamente – antes de que surjan problemas.',
        },
        goLive: {
          title: 'Go-Live exitoso',
          description: 'De la planificación a la ejecución – sin estrés hasta el go-live. CUTO.ai te acompaña hasta el final: con recomendaciones de acción claras, informes de estado automatizados y documentación de lecciones aprendidas. Así, los proyectos no solo se completan con éxito sino que se mejoran de forma sostenible.',
        },
      },
    },
    screenshot: {
      title: 'Panel de CUTO',
      subtitle: 'Gestión de proyectos completa de un vistazo',
    },
    integrations: {
      title: 'Integraciones perfectas',
      subtitle: 'Conecta CUTO con tus herramientas existentes. Importa datos, sincroniza el progreso y mantén todo coordinado.',
      tools: {
        jira: 'Jira',
        sapAlm: 'SAP ALM',
        msProject: 'MS Project',
        slack: 'Slack',
        teams: 'Teams',
        excel: 'Excel/CSV',
      },
      apiAvailable: 'API REST disponible',
      requestIntegration: 'Solicitar integración personalizada →',
    },
    useCases: {
      title: 'Para todos los tipos de proyectos SAP',
      subtitle: 'CUTO te apoya con varios tipos de proyectos SAP',
      items: {
        greenfield: {
          title: 'Greenfield, Brownfield o Híbrido',
          description: 'Ya sea Greenfield, Brownfield o Híbrido – para transformación empresarial.',
        },
        implementation: {
          title: 'Implementación, Migración o Cutover',
          description: 'Gestión de proyectos profesional para implementaciones SAP. Planificación, gestión y control en una sola herramienta.',
        },
        methodology: {
          title: 'SAP Activate, Híbrido, ASAP, Agile, Cascada',
          description: 'Migración de datos segura y estructurada. Planifica cada paso y minimiza riesgos.',
        },
        scope: {
          title: 'Programa, Roadmap, Portfolio o Proyecto único',
          description: 'Planificación y ejecución precisa del cutover. Desde la preparación hasta el go-live exitoso.',
        },
      },
    },
    testimonialsList: [
      {
        quote: 'CUTO transformó cómo gestionamos nuestro despliegue de S/4HANA. Las plantillas nos ahorraron semanas de planificación, y los paneles nos dan visibilidad en tiempo real que nunca habíamos tenido.',
        author: 'Michael Krüger',
        role: 'SAP Program Manager, Acme Corp',
        initials: 'MK',
      },
      {
        quote: '¡Por fin una herramienta que entiende la complejidad de los proyectos SAP! La función de estimación de esfuerzo sola pagó toda la inversión. Altamente recomendado para cualquier consultoría SAP.',
        author: 'Sarah Weber',
        role: 'Partner, TechGlobal Consulting',
        initials: 'SW',
      },
      {
        quote: 'Redujimos nuestra carga PMO en un 40% después de cambiar a CUTO. La gestión del cutover es excepcional – nuestro último go-live fue el más fluido que hemos tenido.',
        author: 'Thomas Bauer',
        role: 'CIO, InnoSystems GmbH',
        initials: 'TB',
      },
    ],
    faqList: [
      {
        question: '¿Qué diferencia a CUTO de JIRA o SAP Cloud ALM?',
        answer: 'CUTO está diseñado específicamente para proyectos SAP. Mientras JIRA es una herramienta genérica y SAP ALM se enfoca en aspectos técnicos, CUTO proporciona gestión de proyectos de extremo a extremo con plantillas específicas de SAP, estimación de esfuerzo basada en datos de proyectos SAP reales, e integración perfecta con ambas herramientas.',
      },
      {
        question: '¿Puedo migrar mis datos de proyecto existentes a CUTO?',
        answer: '¡Sí! CUTO soporta importación de datos desde Excel, JIRA y SAP Cloud ALM. Nuestro equipo de onboarding te ayudará a migrar tus proyectos existentes y personalizar las plantillas según tu flujo de trabajo actual.',
      },
      {
        question: '¿Es CUTO adecuado para pequeños proyectos SAP?',
        answer: 'Absolutamente. CUTO escala desde implementaciones de proyecto único hasta programas complejos multi-sistema. Nuestro plan Starter es perfecto para proyectos más pequeños, mientras que los planes Professional y Enterprise soportan complejidad ilimitada.',
      },
      {
        question: '¿Cuánto tiempo toma empezar?',
        answer: 'La mayoría de los equipos están funcionando en un día. Simplemente elige una plantilla, personaliza los parámetros de tu proyecto, y CUTO genera tu estructura de proyecto completa. Sin configuración prolongada requerida.',
      },
      {
        question: '¿Ofrecen integraciones con otras herramientas?',
        answer: '¡Sí! CUTO se integra con JIRA, SAP Cloud ALM, Microsoft Project, y herramientas de comunicación comunes como Slack y Teams. Los planes Enterprise incluyen acceso API personalizado para integraciones adicionales.',
      },
      {
        question: '¿Qué tipo de soporte ofrecen?',
        answer: 'Todos los planes incluyen soporte por email y acceso a nuestra base de conocimientos. Los planes Professional añaden soporte por chat, mientras que los clientes Enterprise obtienen un success manager dedicado y tiempos de respuesta respaldados por SLA.',
      },
    ],
  },
  
  // Footer
  footer: {
    description: 'Gestión de proyectos estructurada para proyectos SAP. Desde la transformación hasta el cutover exitoso.',
    navigation: 'Navegación',
    contact: 'Contacto',
    legal: 'Legal',
    imprint: 'Aviso legal',
    privacy: 'Política de privacidad',
    terms: 'Términos de servicio',
    cookies: 'Política de cookies',
    stayUpdated: 'Mantente actualizado',
    newsletterText: 'Recibe consejos de proyectos SAP y novedades de CUTO.',
    copyright: '© {year} CUTO. Todos los derechos reservados.',
    madeWith: 'Hecho con ❤️ para la gestión de proyectos SAP',
  },
  
  // Status Page
  status: {
    title: 'Estado de CUTO',
    operational: 'Operativo',
    degraded: 'Rendimiento degradado',
    partialOutage: 'Interrupción parcial',
    majorOutage: 'Interrupción mayor',
    maintenance: 'En mantenimiento',
    lastUpdated: 'Última actualización',
    liveStats: {
      title: 'Estadísticas en vivo',
      projects: 'Proyectos',
      workstreams: 'Workstreams',
      tasks: 'Tareas',
      users: 'Usuarios',
      completedToday: 'Completadas hoy',
      activeProjects: 'Proyectos activos',
      updateInfo: 'Estadísticas actualizadas cada 5 segundos',
    },
    uptime: {
      title: 'Tiempo de actividad últimos 90 días',
      overall: 'Disponibilidad general',
    },
    components: {
      title: 'Componentes del servicio',
    },
    incidents: {
      title: 'Incidentes pasados',
      noIncidents: 'Sin incidentes',
      noIncidentsDesc: 'No ha habido incidentes significativos en los últimos 90 días.',
    },
    subscribe: {
      title: 'Recibir actualizaciones',
      subtitle: 'Recibe notificaciones inmediatas cuando haya interrupciones o mantenimientos programados.',
      button: 'Suscribirse a actualizaciones',
    },
  },
  
  // Language
  language: {
    select: 'Seleccionar idioma',
    current: 'Idioma actual',
  },

  // Features
  features: {
    overview: {
      title: 'Todo lo que necesitas para proyectos SAP',
      subtitle: 'CUTO proporciona un kit de herramientas completo para la gestión de proyectos SAP – desde la planificación inicial hasta el go-live y más allá. Descubre cómo cada función te ayuda a entregar proyectos exitosos.',
      screenshotTitle: 'Vista general de la plataforma CUTO',
      screenshotSubtitle: 'Gestión de proyectos completa de un vistazo',
      additionalCapabilities: 'Capacidades adicionales',
      cta: {
        title: '¿Listo para ver CUTO en acción?',
        subtitle: 'Programa una demo personalizada y descubre cómo CUTO puede transformar tu gestión de proyectos SAP.',
        demo: 'Programar una demo',
        pricing: 'Ver precios',
      },
    },
    categories: {
      dashboards: {
        name: '80+ Paneles',
        description: 'Visibilidad en tiempo real de cada aspecto de tu proyecto SAP. Desde resúmenes ejecutivos hasta análisis técnicos profundos.',
        highlights: ['KPIs Ejecutivos', 'Mapas de riesgo', 'Seguimiento de progreso', 'Monitoreo Cutover'],
      },
      templates: {
        name: '75+ Plantillas',
        description: 'Plantillas de proyecto probadas basadas en la metodología SAP Activate y experiencia real de implementación.',
        highlights: ['Implementación S/4HANA', 'Migración de datos', 'Plantillas de módulos', 'Planes Cutover'],
      },
      bpmn: {
        name: 'Editor de procesos BPMN',
        description: 'Documenta tus procesos de negocio con nuestro editor BPMN 2.0 integrado. Trazabilidad completa a las actividades del proyecto.',
        highlights: ['Editor Drag & Drop', 'Jerarquía de 6 niveles', 'Control de versiones', 'Exportación BPMN 2.0'],
      },
      migration: {
        name: 'Migración de datos',
        description: 'Herramientas completas de validación y calidad de datos. Detecta problemas antes de que se conviertan en problemas de go-live.',
        highlights: ['Catálogo de datos', 'Motor de validación', 'Controles de calidad', 'Reconciliación'],
      },
      harmonization: {
        name: 'Armonización de datos',
        description: 'Identifica y limpia duplicados en tus datos de origen antes de la migración. Algoritmos de matching inteligentes y selección de Golden Record.',
        highlights: ['Detección de duplicados', 'Matching difuso', 'Golden Record', 'Aprobación 4 ojos'],
      },
      cutover: {
        name: 'Gestión de Cutover',
        description: 'Planifica, ensaya y ejecuta tu go-live con precisión. Monitoreo en tiempo real y soporte de decisiones.',
        highlights: ['Checklists', 'Seguimiento Timeline', 'Soporte Go/No-Go', 'Hypercare'],
      },
      risks: {
        name: 'Gestión de riesgos y problemas',
        description: 'Identificación proactiva de riesgos y seguimiento de problemas. Mantén tu proyecto en camino con visibilidad completa.',
        highlights: ['Registro de riesgos', 'Mapa de calor', 'Seguimiento de medidas', 'Flujo de escalada'],
      },
      resources: {
        name: 'Planificación de recursos',
        description: 'Optimiza la asignación del equipo y realiza seguimiento de la capacidad. Hoja de tiempo integrada para un costeo preciso del proyecto.',
        highlights: ['Planificación de capacidad', 'Matriz de habilidades', 'Hoja de tiempo', 'Seguimiento de utilización'],
      },
    },
    additionalCapabilities: {
      gantt: { title: 'Diagramas de Gantt & Timeline', desc: 'Línea de tiempo visual del proyecto con dependencias, hitos y resaltado de ruta crítica.' },
      budget: { title: 'Seguimiento de presupuesto', desc: 'Seguimiento de costos planificados vs reales, análisis de tasa de consumo y pronóstico hasta finalización.' },
      notifications: { title: 'Notificaciones y alertas', desc: 'Notificaciones por correo electrónico para asignaciones de tareas, elementos vencidos y recordatorios de hitos.' },
      export: { title: 'Exportación y Reporting', desc: 'Exportación a Excel, PDF o PowerPoint. Generación automatizada de informes de estado.' },
      access: { title: 'Acceso basado en roles', desc: 'Controla quién ve qué con permisos granulares para roles de equipo.' },
      integrations: { title: 'Integraciones', desc: 'Acceso API para integración con Jira, ServiceNow y otras herramientas empresariales.' },
    },
    // Feature: Dashboards
    dashboards: {
      badge: 'Paneles preconfigurados',
      title: 'Paneles y Reportes Ejecutivos',
      subtitle: 'Toma decisiones basadas en datos con nuestra biblioteca completa de paneles. Desde resúmenes ejecutivos hasta análisis técnicos – todas las métricas de un vistazo.',
      screenshotTitle: 'Panel Ejecutivo',
      screenshotSubtitle: 'Vista general del estado del proyecto en tiempo real',
      stats: {
        dashboards: 'Paneles',
        categories: 'Categorías',
        customizable: 'Personalizable',
        realtime: 'Tiempo real',
      },
      keyBenefits: {
        realtime: { title: 'Actualizaciones en tiempo real', desc: 'Todos los paneles se actualizan automáticamente cuando cambian los datos del proyecto' },
        mobile: { title: 'Optimizado para móvil', desc: 'Accede al estado de tu proyecto desde cualquier dispositivo' },
        export: { title: 'Exportar y Compartir', desc: 'Exporta a PDF, Excel o comparte enlaces en vivo con interesados' },
      },
      categoriesLabel: 'Categorías',
      dashboardsLabel: 'paneles',
      categories: {
        executive: {
          name: 'Ejecutivo y Estratégico',
          dashboards: [
            { id: 'EXE-001', name: 'Panel de salud del proyecto', desc: 'Estado general del proyecto con sistema de semáforo para el Comité Directivo' },
            { id: 'EXE-002', name: 'Resumen ejecutivo', desc: 'KPIs de alto nivel, estado de hitos, principales riesgos para nivel C' },
            { id: 'EXE-003', name: 'Alineación estratégica', desc: 'Alineación de resultados del proyecto con objetivos estratégicos' },
            { id: 'EXE-004', name: 'Realización de valor', desc: 'Seguimiento del business case, medición de ROI' },
            { id: 'EXE-005', name: 'Portfolio', desc: 'Vista general multi-proyecto para programas' },
          ]
        },
        time: {
          name: 'Gestión de tiempo y Planificación',
          dashboards: [
            { id: 'TIM-001', name: 'Vista Gantt', desc: 'Línea de tiempo visual con hitos y dependencias' },
            { id: 'TIM-002', name: 'Seguimiento de hitos', desc: 'Estado de hitos y análisis de tendencias' },
            { id: 'TIM-003', name: 'Ruta crítica', desc: 'Visualización de actividades críticas' },
            { id: 'TIM-004', name: 'Análisis de retrasos', desc: 'Análisis de causa raíz para retrasos del cronograma' },
            { id: 'TIM-005', name: 'Progreso por fase', desc: 'Progreso por fase del proyecto' },
            { id: 'TIM-006', name: 'Comparación de línea base', desc: 'Comparación plan vs real' },
          ]
        },
        budget: {
          name: 'Presupuesto y Finanzas',
          dashboards: [
            { id: 'BUD-001', name: 'Vista de presupuesto', desc: 'Presupuesto total con comparación plan/real' },
            { id: 'BUD-002', name: 'Tasa de consumo', desc: 'Consumo de presupuesto en el tiempo' },
            { id: 'BUD-003', name: 'Costos por workstream', desc: 'Distribución de costos por workstream' },
            { id: 'BUD-004', name: 'Pronóstico', desc: 'Proyección de costos hasta fin del proyecto' },
            { id: 'BUD-005', name: 'Viajes y Gastos', desc: 'Control de gastos de viaje' },
            { id: 'BUD-006', name: 'Seguimiento costos proveedores', desc: 'Costos externos y gastos de contratistas' },
            { id: 'BUD-007', name: 'Análisis de variaciones', desc: 'Análisis de desviaciones con causas' },
          ]
        },
        resources: {
          name: 'Recursos y Equipo',
          dashboards: [
            { id: 'RES-001', name: 'Asignación de recursos', desc: 'Vista general de asignación de miembros del equipo' },
            { id: 'RES-002', name: 'Matriz de habilidades', desc: 'Habilidades y competencias en el equipo' },
            { id: 'RES-003', name: 'Planificación de capacidad', desc: 'Disponibilidad y utilización' },
            { id: 'RES-004', name: 'Estado de onboarding', desc: 'Integración de nuevos miembros del equipo' },
            { id: 'RES-005', name: 'Conflictos de recursos', desc: 'Sobreasignación y conflictos' },
            { id: 'RES-006', name: 'Recursos externos', desc: 'Vista de contratistas y consultores' },
            { id: 'RES-007', name: 'Rendimiento del equipo', desc: 'Métricas de productividad' },
          ]
        },
        risks: {
          name: 'Riesgos y Problemas',
          dashboards: [
            { id: 'RSK-001', name: 'Registro de riesgos', desc: 'Todos los riesgos con probabilidad e impacto' },
            { id: 'RSK-002', name: 'Mapa de calor de riesgos', desc: 'Matriz visual de riesgos' },
            { id: 'RSK-003', name: 'Seguimiento de problemas', desc: 'Problemas abiertos y escalaciones' },
            { id: 'RSK-004', name: 'Tendencia de riesgos', desc: 'Desarrollo de riesgos en el tiempo' },
            { id: 'RSK-005', name: 'Estado de mitigación', desc: 'Estado de medidas de mitigación de riesgos' },
            { id: 'RSK-006', name: 'Top 10 riesgos', desc: 'Enfoque en riesgos críticos' },
          ]
        },
        scope: {
          name: 'Alcance y Requisitos',
          dashboards: [
            { id: 'SCO-001', name: 'Vista de alcance', desc: 'Alcance del proyecto dentro/fuera de alcance' },
            { id: 'SCO-002', name: 'Estado de requisitos', desc: 'Cumplimiento de requisitos' },
            { id: 'SCO-003', name: 'Registro de cambios', desc: 'Cambios de alcance y su impacto' },
            { id: 'SCO-004', name: 'Análisis Fit-Gap', desc: 'Estándar vs personalización' },
            { id: 'SCO-005', name: 'Progreso de User Stories', desc: 'Para proyectos ágiles' },
          ]
        },
        quality: {
          name: 'Calidad y Pruebas',
          dashboards: [
            { id: 'QUA-001', name: 'Progreso de pruebas', desc: 'Estado de ejecución de casos de prueba' },
            { id: 'QUA-002', name: 'Panel de defectos', desc: 'Bugs y problemas de las pruebas' },
            { id: 'QUA-003', name: 'Cobertura de pruebas', desc: 'Cobertura de pruebas por módulo' },
            { id: 'QUA-004', name: 'Estado UAT', desc: 'Estado de pruebas de aceptación de usuario' },
            { id: 'QUA-005', name: 'Quality Gates', desc: 'Logro de puertas de calidad' },
            { id: 'QUA-006', name: 'Estado de regresión', desc: 'Resultados de pruebas de regresión' },
            { id: 'QUA-007', name: 'Pruebas de rendimiento', desc: 'Pruebas de carga y rendimiento' },
            { id: 'QUA-008', name: 'Seguimiento de aprobaciones', desc: 'Aprobaciones de release' },
          ]
        },
        workstream: {
          name: 'Workstream y Módulo',
          dashboards: [
            { id: 'WRK-001', name: 'Estado de workstream', desc: 'Progreso por módulo SAP/workstream' },
            { id: 'WRK-002', name: 'Dependencias cross-workstream', desc: 'Dependencias entre workstreams' },
            { id: 'WRK-003', name: 'Puntos de integración', desc: 'Estado de todos los puntos de integración' },
            { id: 'WRK-004', name: 'Progreso de configuración', desc: 'Progreso de configuración por módulo' },
            { id: 'WRK-005', name: 'Progreso BPML', desc: 'Progreso de Business Process Master List' },
            { id: 'WRK-006', name: 'Cobertura BPMN', desc: 'Documentación BPMN por nivel de proceso' },
          ]
        },
        technical: {
          name: 'Técnico',
          dashboards: [
            { id: 'TEC-001', name: 'Landscape de sistemas', desc: 'Vista general del landscape SAP' },
            { id: 'TEC-002', name: 'Estado de interfaces', desc: 'Desarrollo y pruebas de interfaces' },
            { id: 'TEC-003', name: 'Estado de migración', desc: 'Progreso de migración de datos' },
            { id: 'TEC-004', name: 'Gestión de transportes', desc: 'Releases y estado de transportes' },
            { id: 'TEC-005', name: 'Matriz de autorización', desc: 'Vista de roles y autorizaciones' },
            { id: 'TEC-006', name: 'Backlog de desarrollo', desc: 'Estado de desarrollo ABAP/Fiori' },
            { id: 'TEC-007', name: 'Calidad de código', desc: 'Métricas de calidad de código' },
            { id: 'TEC-008', name: 'Rendimiento del sistema', desc: 'Métricas de rendimiento del sistema' },
            { id: 'TEC-009', name: 'Estado de seguridad', desc: 'Verificaciones de seguridad y cumplimiento' },
            { id: 'TEC-010', name: 'Preparación Cloud', desc: 'Preparación para migración a cloud' },
          ]
        },
        change: {
          name: 'Gestión del cambio',
          dashboards: [
            { id: 'OCM-001', name: 'Mapa de interesados', desc: 'Análisis y compromiso de interesados' },
            { id: 'OCM-002', name: 'Progreso de formación', desc: 'Finalización de formación' },
            { id: 'OCM-003', name: 'Plan de comunicación', desc: 'Estado de actividades de comunicación' },
            { id: 'OCM-004', name: 'Evaluación de preparación', desc: 'Preparación organizacional' },
            { id: 'OCM-005', name: 'Métricas de adopción', desc: 'Adopción de usuarios después del go-live' },
            { id: 'OCM-006', name: 'Panel de feedback', desc: 'Comentarios y satisfacción de usuarios' },
          ]
        },
        golive: {
          name: 'Go-Live y Cutover',
          dashboards: [
            { id: 'GLV-001', name: 'Checklist Cutover', desc: 'Estado de checklist de go-live' },
            { id: 'GLV-002', name: 'Estado Hypercare', desc: 'Soporte post-go-live' },
            { id: 'GLV-003', name: 'Cuenta regresiva Go-Live', desc: 'Días hasta go-live con tareas críticas' },
            { id: 'GLV-004', name: 'Plan de despliegue', desc: 'Estado de despliegue multi-sitio' },
            { id: 'GLV-005', name: 'Timeline Cutover', desc: 'Cronograma detallado de cutover' },
          ]
        },
        governance: {
          name: 'Gobernanza',
          dashboards: [
            { id: 'GOV-001', name: 'Comité Directivo', desc: 'Decisiones y elementos de acción' },
            { id: 'GOV-002', name: 'Pista de auditoría', desc: 'Cambios y aprobaciones' },
            { id: 'GOV-003', name: 'Estado de cumplimiento', desc: 'Cumplimiento regulatorio' },
            { id: 'GOV-004', name: 'Calendario de reuniones', desc: 'Reuniones y talleres del proyecto' },
            { id: 'GOV-005', name: 'Estado de documentación', desc: 'Progreso de documentación del proyecto' },
          ]
        },
        vendor: {
          name: 'Gestión de Proveedores',
          dashboards: [
            { id: 'VEN-001', name: 'Rendimiento de proveedores', desc: 'Rendimiento de socios externos' },
            { id: 'VEN-002', name: 'Estado de contratos', desc: 'Vista de contratos y fechas límite' },
            { id: 'VEN-003', name: 'Monitoreo SLA', desc: 'Cumplimiento de niveles de servicio' },
          ]
        },
        communication: {
          name: 'Comunicación',
          dashboards: [
            { id: 'COM-001', name: 'Generador de reportes', desc: 'Reportes de estado automatizados' },
            { id: 'COM-002', name: 'Estado de newsletter', desc: 'Actividades de comunicación interna' },
            { id: 'COM-003', name: 'Registro de escalaciones', desc: 'Escalaciones y su resolución' },
            { id: 'COM-004', name: 'Actas de reuniones', desc: 'Documentación de reuniones' },
          ]
        },
      },
      cta: {
        title: '¿Listo para ver estos paneles en acción?',
        demo: 'Programar una demo',
        allFeatures: 'Ver todas las funciones',
      },
    },

    // Feature: Templates (ES)
    templates: {
      badge: 'Plantillas de proyecto',
      title: 'Plantillas de proyecto preconfiguradas',
      subtitle: 'Inicia tu proyecto SAP con plantillas probadas. Cada plantilla contiene actividades, hitos, dependencias y estimaciones de esfuerzo predefinidas basadas en experiencia real.',
      screenshotTitle: 'Selección de plantilla',
      screenshotSubtitle: 'Elige entre 75+ plantillas preconfiguradas',
      stats: { templates: 'Plantillas', categories: 'Categorías', activities: 'Actividades', customizable: 'Personalizable' },
      keyBenefits: {
        quickStart: { title: 'Inicio rápido', desc: 'Configura tu proyecto en minutos, no días' },
        bestPractices: { title: 'Mejores prácticas', desc: 'Basado en SAP Activate y metodologías probadas' },
        estimates: { title: 'Estimaciones precisas', desc: 'Estimaciones realistas de proyectos reales' },
        customizable: { title: 'Totalmente personalizable', desc: 'Adapta cada plantilla a tus necesidades' },
      },
      howItWorks: {
        title: 'Cómo funcionan las plantillas',
        steps: {
          select: { title: 'Seleccionar plantilla', desc: 'Elige de nuestra biblioteca según tu tipo de proyecto' },
          configure: { title: 'Configurar alcance', desc: 'Define módulos, ubicaciones y factores de complejidad' },
          generate: { title: 'Auto-generación', desc: 'CUTO genera tu plan de proyecto con actividades' },
          customize: { title: 'Personalizar', desc: 'Ajusta fechas, recursos y dependencias' },
        },
      },
      categories: {
        s4hana: {
          name: 'Implementación SAP S/4HANA',
          templates: [
            { name: 'Implementación Greenfield', desc: 'Nueva implementación con metodología SAP Activate', activities: '500+' },
            { name: 'Conversión Brownfield', desc: 'Conversión de SAP ECC a S/4HANA', activities: '350+' },
          ],
        },
        modules: {
          name: 'Módulos SAP',
          templates: [
            { name: 'FI/CO Finance & Controlling', desc: 'Libro mayor, acreedores, deudores, centros de costos', activities: '180+' },
            { name: 'MM Gestión de Materiales', desc: 'Compras, gestión de inventario, MRP', activities: '150+' },
          ],
        },
        migration: {
          name: 'Migración de datos',
          templates: [
            { name: 'Migración de datos maestros', desc: 'Migración de clientes, proveedores, materiales', activities: '80+' },
            { name: 'Migración de datos transaccionales', desc: 'Partidas abiertas, pedidos', activities: '60+' },
          ],
        },
        cutover: {
          name: 'Cutover & Go-Live',
          templates: [
            { name: 'Cutover estándar', desc: 'Go-Live de un solo sitio con fases estándar', activities: '150+' },
            { name: 'Big Bang Cutover', desc: 'Todos los sitios simultáneamente', activities: '200+' },
          ],
        },
        testing: {
          name: 'Testing',
          templates: [
            { name: 'Unit Testing', desc: 'Tests de configuración y desarrollo', activities: '100+' },
            { name: 'Integration Testing', desc: 'Tests de procesos end-to-end', activities: '120+' },
          ],
        },
        change: {
          name: 'Gestión del cambio',
          templates: [
            { name: 'Gestión de Stakeholders', desc: 'Análisis y plan de engagement', activities: '50+' },
            { name: 'Programa de formación', desc: 'Formación de usuarios finales y key users', activities: '70+' },
          ],
        },
        cloud: {
          name: 'Soluciones SAP Cloud',
          templates: [
            { name: 'SAP SuccessFactors', desc: 'Implementación HCM Cloud', activities: '180+' },
            { name: 'SAP Ariba', desc: 'Implementación Procurement Cloud', activities: '150+' },
          ],
        },
        integration: {
          name: 'Integración & Interfaces',
          templates: [
            { name: 'Integración EDI', desc: 'Configuración Electronic Data Interchange', activities: '40+' },
            { name: 'Desarrollo API', desc: 'Desarrollo de interfaces REST/SOAP', activities: '50+' },
          ],
        },
      },
      activitiesLabel: 'Actividades',
      templatesLabel: 'Plantillas',
      customTemplate: {
        title: '¿Necesitas una plantilla personalizada?',
        desc: 'Nuestro equipo puede crear plantillas adaptadas a tus necesidades y metodologías específicas.',
        button: 'Contáctanos',
      },
      cta: { title: 'Inicia tu proyecto con la base correcta', demo: 'Programar una demo', pricing: 'Ver precios' },
    },

    bpmn: {
      badge: 'Compatible BPMN 2.0',
      title: 'Editor de procesos BPMN',
      subtitle: 'Documenta tus procesos de negocio visualmente con nuestro editor BPMN 2.0 integrado. Vincula diagramas de procesos directamente con las actividades de tu proyecto.',
      screenshotTitle: 'Editor de procesos BPMN',
      screenshotSubtitle: 'Modelado de procesos por arrastrar y soltar',
      keyFeatures: {
        modeling: { title: 'Modelado visual de procesos', desc: 'Interfaz drag-and-drop para diagramas BPMN profesionales. Soporte de todos los elementos BPMN 2.0.' },
        linking: { title: 'Vinculación de actividades', desc: 'Vincula procesos BPMN directamente con actividades BPML. Cada elemento puede conectarse con actividades del proyecto.' },
        coverage: { title: 'Seguimiento de cobertura', desc: 'Rastrea la cobertura de documentación BPMN en todos los niveles de proceso.' },
      },
      processArchitecture: {
        title: 'Arquitectura de procesos de 6 niveles',
        subtitle: 'CUTO soporta la jerarquía de procesos estándar de SAP desde procesos end-to-end hasta pasos de trabajo detallados.',
        levels: {
          l1: { name: 'Proceso End-to-End', example: 'ej. Order to Cash (O2C)' },
          l2: { name: 'Grupo de procesos', example: 'ej. Procesamiento de pedidos' },
          l3: { name: 'Proceso principal', example: 'ej. Entrada de pedido estándar' },
          l4: { name: 'Subproceso', example: 'ej. Validación de cliente' },
          l5: { name: 'Actividad', example: 'ej. Verificar límite de crédito' },
          l6: { name: 'Paso de trabajo', example: 'ej. Enviar alerta de crédito' },
        },
      },
      elements: {
        title: 'Elementos BPMN soportados',
        events: { title: 'Eventos', items: ['Evento de inicio', 'Evento de fin', 'Evento intermedio', 'Evento de temporizador', 'Evento de mensaje', 'Evento de error'] },
        tasks: { title: 'Tareas', items: ['User Task', 'Service Task', 'Script Task', 'Manual Task', 'Business Rule Task', 'Sub-Process'] },
        gateways: { title: 'Gateways', items: ['Gateway exclusivo (XOR)', 'Gateway paralelo (AND)', 'Gateway inclusivo (OR)', 'Gateway basado en eventos', 'Gateway complejo'] },
        containers: { title: 'Contenedores', items: ['Pool', 'Lane', 'Sub-Process', 'Transacción', 'Call Activity'] },
      },
      extendedProperties: {
        title: 'Propiedades extendidas de elementos',
        subtitle: 'Más allá de las propiedades BPMN estándar, puedes capturar metadatos adicionales para cada elemento.',
        effort: { title: 'Esfuerzo estimado', desc: 'Define la duración esperada en minutos, horas o días para cada tarea' },
        systems: { title: 'Sistemas involucrados', desc: 'Vincula tareas con sistemas y módulos SAP de tu landscape' },
        transactions: { title: 'Transacciones', desc: 'Documenta códigos de transacción SAP relevantes (ej. VA01, ME21N)' },
        helpText: { title: 'Texto de ayuda', desc: 'Añade descripciones detalladas e instrucciones para cada paso' },
      },
      importExport: {
        title: 'Importar y Exportar',
        items: [
          'Importar archivos BPMN 2.0 XML existentes',
          'Exportar a formato BPMN 2.0 estándar',
          'Exportar como imágenes PNG/SVG para documentación',
          'Compatible con Signavio, Aris y otras herramientas',
        ],
      },
      versioning: {
        title: 'Versionado e historial',
        items: [
          'Historial de versiones automático para cada cambio',
          'Comparar versiones lado a lado',
          'Restaurar versiones anteriores con un clic',
          'Flujo de estados: Borrador → Revisión → Aprobado → Archivado',
        ],
      },
      cta: { title: '¿Listo para documentar tus procesos?', demo: 'Programar una demo', allFeatures: 'Ver todas las funciones' },
    },

    migration: {
      badge: 'Calidad y Validación de datos',
      title: 'Herramientas de migración de datos',
      subtitle: 'Asegura el éxito de la migración con validación completa, controles de calidad y herramientas de reconciliación.',
      screenshotTitle: 'Panel de validación',
      screenshotSubtitle: 'Análisis de tasas de coincidencia en tiempo real',
      keyFeatures: {
        catalog: { title: 'Catálogo de datos', desc: 'Repositorio central para todos los objetos de migración. Define mappings, tipos de datos y reglas de transformación.' },
        validation: { title: 'Motor de validación', desc: 'Validación automatizada de datos fuente-destino, verificaciones de completitud y cumplimiento de reglas de negocio.' },
        dashboard: { title: 'Dashboard de calidad', desc: 'Vista en tiempo real de métricas de calidad de datos. Rastrea tasas de coincidencia y progreso de resolución.' },
      },
      workflow: {
        title: 'Flujo de migración de datos',
        steps: {
          define: { title: 'Definir', desc: 'Configurar catálogo de datos con objetos y campos' },
          map: { title: 'Mapear', desc: 'Crear mappings de campos y reglas de transformación' },
          extract: { title: 'Extraer', desc: 'Cargar o conectar datos fuente' },
          validate: { title: 'Validar', desc: 'Ejecutar verificaciones de calidad automatizadas' },
          reconcile: { title: 'Reconciliar', desc: 'Comparar y verificar datos destino' },
        },
      },
      validationTypes: {
        title: 'Capacidades de validación',
        keyField: { title: 'Validación de campo clave', desc: 'Verifica que todos los registros puedan coincidir entre sistemas fuente y destino.', items: ['Detectar registros fuente faltantes', 'Detectar registros destino faltantes', 'Identificar claves duplicadas'] },
        fieldLevel: { title: 'Validación a nivel de campo', desc: 'Compara valores de campos individuales entre fuente y destino.', items: ['Detectar discrepancias de valores', 'Validación de tipos de datos', 'Verificaciones de formato y longitud'] },
        rules: { title: 'Reglas de migración', desc: 'Define reglas de validación complejas más allá de la coincidencia simple.', items: ['Tablas de mapeo de valores', 'Transformaciones condicionales', 'Reglas de ignorar para campos del sistema', 'Soporte de coincidencia con comodines'] },
        quality: { title: 'Verificaciones de calidad de datos', desc: 'Evaluación de calidad de datos pre-migración.', items: ['Verificaciones de completitud', 'Integridad referencial', 'Validación de reglas de negocio', 'Detección de outliers'] },
      },
      statistics: {
        title: 'Estadísticas y reportes',
        matchRate: { title: 'Dashboard de tasa de coincidencia', desc: 'Visualización en tiempo real del progreso de validación y tasas de coincidencia' },
        errorDownload: { title: 'Descargas de errores', desc: 'Exportar errores de validación a CSV/Excel para análisis offline' },
        fieldStats: { title: 'Estadísticas de campos', desc: 'Análisis por campo con tasas de coincidencia y tipos de errores' },
      },
      objects: {
        title: 'Objetos de migración comunes',
        items: ['Maestro clientes', 'Maestro proveedores', 'Maestro materiales', 'Listas de materiales', 'Cuentas contables', 'Centros de costo', 'Centros de beneficio', 'Puestos de trabajo', 'Hojas de ruta', 'Pedidos abiertos', 'Órdenes abiertas', 'Partidas abiertas', 'Activos fijos', 'Maestro personal', 'Maestro bancos', 'Precios', 'Condiciones', 'Lotes', 'Números de serie', 'Cuotas'],
        customNote: '+ Objetos personalizados de tu catálogo de datos',
      },
      cta: { title: '¿Listo para una migración exitosa?', demo: 'Programar una demo', cutover: 'Gestión de Cutover →' },
    },

    cutover: {
      badge: 'Listo para Go-Live',
      title: 'Gestión de Cutover',
      subtitle: 'Planifica, ensaya y ejecuta tu go-live con precisión. Desde checklists de cutover hasta monitoreo en tiempo real.',
      screenshotTitle: 'Timeline de Cutover',
      screenshotSubtitle: 'Seguimiento go-live minuto a minuto',
      keyFeatures: {
        checklists: { title: 'Checklists de Cutover', desc: 'Checklists predefinidas para cada fase del cutover. Asegúrate de no olvidar nada en el go-live.' },
        timeline: { title: 'Gestión de Timeline', desc: 'Planificación de cutover al minuto con seguimiento automático de tiempo.' },
        rehearsal: { title: 'Soporte de ensayos', desc: 'Ejecuta múltiples dry runs para perfeccionar tu plan de cutover.' },
      },
      phases: {
        title: 'Gestión de fases de Cutover',
        preCutover: { name: 'Pre-Cutover', time: 'T-30 a T-0', tasks: ['Verificación final de bloqueo de datos', 'Validación de acceso al sistema', 'Comunicación a stakeholders', 'Configuración War Room'] },
        technical: { name: 'Cutover Técnico', time: 'T-0 a T+12h', tasks: ['Apagado sistema legacy', 'Extracción final de datos', 'Ejecución de carga de datos', 'Validación técnica'] },
        business: { name: 'Cutover de Negocio', time: 'T+12h a T+24h', tasks: ['Verificación saldos de apertura', 'Pruebas de procesos de negocio', 'Activación acceso usuarios', 'Decisión Go/No-Go'] },
        hypercare: { name: 'Hypercare', time: 'T+24h a T+2s', tasks: ['Soporte 24/7', 'Triage y resolución de issues', 'Monitoreo de rendimiento', 'Soporte a usuarios'] },
      },
      dayDashboard: {
        title: 'Dashboard del día de Cutover',
        subtitle: 'Centro de comando en tiempo real durante la ejecución del cutover.',
        tasksComplete: 'Tareas completadas',
        timeVsPlan: 'Tiempo vs. Plan',
        openBlockers: 'Bloqueadores abiertos',
        teamMembers: 'Miembros del equipo activos',
      },
      goNoGo: { title: 'Soporte de decisión Go/No-Go', items: ['Evaluación automatizada de preparación', 'Destacado de estado de ruta crítica', 'Resumen de riesgos con estado de acciones', 'Documentación de decisiones y audit trail'] },
      rollout: { title: 'Planificación de Rollout', items: ['Planificación de rollout multi-wave', 'Checklists específicas por ubicación', 'Replicación de rollout basada en templates', 'Gestión de dependencias entre ubicaciones'] },
      communication: {
        title: 'Comunicación de Cutover',
        broadcasts: { title: 'Broadcasts de estado', desc: 'Actualizaciones automáticas a stakeholders en intervalos configurables' },
        alerts: { title: 'Alertas de escalación', desc: 'Notificaciones automáticas por retrasos o bloqueadores identificados' },
        logging: { title: 'Registro de actividades', desc: 'Audit trail completo de todas las actividades y decisiones del cutover' },
      },
      cta: { title: '¿Listo para un go-live sin estrés?', demo: 'Programar una demo', risks: 'Gestión de riesgos →' },
    },

    risks: {
      badge: 'Gestión proactiva de riesgos',
      title: 'Gestión de riesgos y problemas',
      subtitle: 'Identifica, evalúa y mitiga riesgos antes de que impacten tu proyecto. Rastrea issues hasta su resolución con total responsabilidad.',
      screenshotTitle: 'Mapa de calor de riesgos',
      screenshotSubtitle: 'Matriz de evaluación visual de riesgos',
      keyFeatures: {
        register: { title: 'Registro de riesgos', desc: 'Repositorio central para todos los riesgos del proyecto con evaluación de probabilidad e impacto.' },
        issues: { title: 'Tracker de Issues', desc: 'Captura y gestiona issues cuando surgen. Define responsables y rastrea el progreso de resolución.' },
        heatmaps: { title: 'Heatmaps', desc: 'Matriz visual de riesgos con probabilidad vs. impacto. Identifica rápidamente los riesgos críticos.' },
      },
      matrix: {
        title: 'Matriz de evaluación de riesgos',
        subtitle: 'Clasifica riesgos por probabilidad e impacto para priorizar acciones.',
        probability: 'Probabilidad',
        impact: 'Impacto',
        veryLow: 'Muy bajo',
        low: 'Bajo',
        medium: 'Medio',
        high: 'Alto',
        veryHigh: 'Muy alto',
        critical: 'Crítico',
      },
      categories: {
        title: 'Categorías de riesgo predefinidas',
        technical: { name: 'Técnico', examples: 'Rendimiento del sistema, integración, calidad de datos' },
        resource: { name: 'Recursos', examples: 'Dependencia de personas clave, brechas de habilidades, disponibilidad' },
        schedule: { name: 'Calendario', examples: 'Retraso en timeline, retrasos en hitos' },
        budget: { name: 'Presupuesto', examples: 'Sobrecostos, gastos no planificados' },
        scope: { name: 'Alcance', examples: 'Scope creep, requisitos poco claros' },
        vendor: { name: 'Proveedores', examples: 'Entrega de terceros, problemas de licencias' },
        change: { name: 'Cambio', examples: 'Aceptación de usuarios, resistencia organizacional' },
        compliance: { name: 'Cumplimiento', examples: 'Regulatorio, auditoría, seguridad' },
      },
      mitigation: { title: 'Gestión de mitigación', items: ['Definir múltiples acciones por riesgo', 'Asignar responsables y fechas límite', 'Rastrear progreso y efectividad de acciones', 'Reevaluar riesgo después de acciones', 'Recordatorios automáticos para acciones vencidas'] },
      issueWorkflow: { title: 'Flujo de resolución de Issues', items: ['Flujo de estados: Nuevo → En Progreso → Resuelto → Cerrado', 'Niveles de prioridad con seguimiento SLA', 'Rutas de escalación y notificaciones', 'Documentación de causa raíz', 'Captura de lecciones aprendidas'] },
      reporting: {
        title: 'Reporting de riesgos e Issues',
        trend: { title: 'Análisis de tendencias', desc: 'Rastrea cómo evolucionan los riesgos e issues en el tiempo. Identifica patrones y temas recurrentes.' },
        top10: { title: 'Reportes Top 10', desc: 'Enfócate en los riesgos más críticos para presentaciones al Steering Committee.' },
        resolution: { title: 'Métricas de resolución', desc: 'Tiempo promedio de resolución, tendencias abiertos vs. cerrados, rendimiento por responsable.' },
      },
      cta: { title: '¿Listo para gestionar riesgos proactivamente?', demo: 'Programar una demo', resources: 'Planificación de recursos →' },
    },

    resources: {
      badge: 'Gestión de equipo',
      title: 'Planificación de recursos',
      subtitle: 'Optimiza la asignación de tu equipo y asegúrate de que las personas adecuadas trabajen en las tareas correctas. Planifica capacidad y evita conflictos.',
      screenshotTitle: 'Planificación de capacidad del equipo',
      screenshotSubtitle: 'Vista general de asignación de recursos',
      keyFeatures: {
        capacity: { title: 'Planificación de capacidad', desc: 'Planifica capacidad de recursos en las fases del proyecto. Visualiza disponibilidad e identifica brechas.' },
        balancing: { title: 'Balanceo de carga', desc: 'Identifica recursos sobre y subutilizados. Balancea la carga de trabajo del equipo para productividad óptima.' },
        time: { title: 'Seguimiento de tiempo', desc: 'Rastrea esfuerzo real vs. planificado. Funcionalidad de timesheet integrada para cálculo preciso de costos.' },
      },
      teamStructure: {
        title: 'Estructura del equipo de proyecto',
        roles: {
          pm: { role: 'Director de proyecto', responsibilities: 'Entrega general del proyecto, gestión de stakeholders' },
          lead: { role: 'Líder de Workstream', responsibilities: 'Entrega específica del módulo, coordinación del equipo' },
          consultant: { role: 'Consultor', responsibilities: 'Configuración, testing, documentación' },
          developer: { role: 'Desarrollador', responsibilities: 'Desarrollo custom, interfaces, reportes' },
          tester: { role: 'Tester', responsibilities: 'Ejecución de tests, logging de defectos, validación' },
          analyst: { role: 'Analista de negocio', responsibilities: 'Requisitos, diseño de procesos, soporte UAT' },
          change: { role: 'Gestor de cambio', responsibilities: 'Formación, comunicación, adopción' },
          architect: { role: 'Arquitecto', responsibilities: 'Diseño de solución, decisiones técnicas' },
        },
      },
      allocationViews: { title: 'Vistas de asignación de recursos', weeklyView: 'Vista semanal', resource: 'Recurso', total: 'Total' },
      skills: { title: 'Gestión de skills', items: ['Definir skills requeridos por rol y actividad', 'Rastrear niveles de skill de miembros del equipo', 'Identificar brechas de skills para planificación de formación', 'Hacer matching de skills con requisitos de tareas'] },
      external: { title: 'Recursos externos', items: ['Rastrear contractors y consultores por separado', 'Fechas de contrato y seguimiento de renovaciones', 'Seguimiento de tarifa diaria y costos', 'Métricas de rendimiento de proveedores'] },
      timesheet: {
        title: 'Timesheet integrado',
        subtitle: 'Seguimiento de tiempo sencillo integrado directamente con actividades del proyecto.',
        features: {
          activity: { title: 'Basado en actividades', desc: 'Registrar tiempo directamente contra actividades del proyecto' },
          approval: { title: 'Flujo de aprobación', desc: 'Enviar y aprobar timesheets semanalmente' },
          comparison: { title: 'Plan vs. Real', desc: 'Comparar esfuerzo planificado con tiempo real' },
          export: { title: 'Exportar', desc: 'Exportar a Excel o integrar con sistemas HR' },
        },
      },
      cta: { title: '¿Listo para optimizar tu equipo de proyecto?', demo: 'Programar una demo', pricing: 'Ver precios' },
    },

    harmonization: {
      badge: 'Optimizar calidad de datos',
      title: 'Armonización de datos & Detección de duplicados',
      subtitle: 'Identifique y limpie duplicados en sus datos de origen antes de la migración. Datos limpios y deduplicados para su sistema de destino.',
      screenshotTitle: 'Vista general de clusters de duplicados',
      screenshotSubtitle: 'Agrupación inteligente y selección de Golden Record',
      stats: {
        records: 'Registros máx.',
        algorithms: 'Algoritmos de matching',
        strategies: 'Estrategias Golden Record',
        auditTrail: 'Pista de auditoría',
      },
      keyFeatures: {
        config: {
          title: 'Configuración flexible',
          desc: 'Defina conjuntos de tablas, relaciones y filtros para una detección precisa de duplicados.',
        },
        matching: {
          title: 'Matching inteligente',
          desc: 'Combine reglas de matching exacto, difuso, fonético y N-gram.',
        },
        golden: {
          title: 'Selección de Golden Record',
          desc: 'Determinación automática o manual del registro maestro.',
        },
      },
      matchTypesTitle: 'Tipos de reglas de matching',
      matchTypes: {
        exact: 'Match exacto',
        exactDesc: 'Los campos deben ser idénticos',
        exactUse: 'Números de artículo, IDs',
        fuzzy: 'Match difuso',
        fuzzyDesc: 'Comparación de similitud con umbral',
        fuzzyUse: 'Nombres, descripciones',
        phonetic: 'Match fonético',
        phoneticDesc: 'Similitud basada en sonido',
        phoneticUse: 'Nombres de personas',
        ngram: 'Comparación N-Gram',
        ngramDesc: 'Análisis de subcadenas',
        ngramUse: 'Direcciones, textos largos',
      },
      useCase: 'Caso de uso',
      algorithmsTitle: 'Algoritmos de matching',
      algorithms: {
        levenshtein: 'Distancia de Levenshtein',
        levenshteinDesc: 'Calcula la distancia mínima de edición entre dos cadenas',
        jaroWinkler: 'Jaro-Winkler',
        jaroWinklerDesc: 'Optimizado para cadenas cortas y nombres',
        soundex: 'Soundex & Metaphone',
        soundexDesc: 'Comparación fonética para similitud de sonido',
        ngram: 'Análisis N-Gram',
        ngramDesc: 'Análisis de subcadenas para textos largos',
      },
      workflowTitle: 'Flujo de trabajo',
      workflow: {
        config: 'Configuración',
        configDesc: 'Seleccionar tablas del Data Catalog, definir relaciones, configurar filtros',
        rules: 'Definir reglas',
        rulesDesc: 'Seleccionar campos de match, establecer algoritmo y umbral',
        analysis: 'Iniciar análisis',
        analysisDesc: 'Cálculo automático de claves de bloqueo, formación de clusters, sugerencia de Golden Record',
        review: 'Revisión y aprobación',
        reviewDesc: 'Revisar clusters, confirmar Golden Record, aprobación opcional de 4 ojos',
        export: 'Exportar',
        exportDesc: 'Datos limpios, tabla de mapeo, informe de auditoría',
      },
      goldenRecordTitle: 'Estrategias de Golden Record',
      goldenRecordSubtitle: 'Determine automática o manualmente el registro maestro:',
      goldenRecord: {
        completeness: 'Completitud',
        completenessDesc: 'Registro con más campos completados',
        recency: 'Actualidad',
        recencyDesc: 'Registro más reciente por fecha de creación',
        quality: 'Calidad',
        qualityDesc: 'Puntuación de calidad de datos más alta',
        manual: 'Manual',
        manualDesc: 'Sin sugerencias automáticas',
      },
      reviewTitle: 'Revisión y aprobación',
      review: {
        clusterOverview: 'Vista de clusters: Todos los grupos de duplicados de un vistazo',
        detailCompare: 'Comparación detallada: Comparación campo por campo de registros',
        matchDetails: 'Detalles del match: Visualización transparente de los motivos de detección',
        fourEyes: 'Principio de 4 ojos: Aprobación opcional por segunda persona',
      },
      useCasesTitle: 'Ejemplos de uso',
      useCases: {
        materials: {
          title: 'Duplicados de materiales (SAP)',
          rule: 'Match difuso en descripción de material con umbral del 85%',
        },
        customers: {
          title: 'Duplicados de clientes',
          rule: 'Match fonético en nombre + match difuso en dirección',
          filter: 'Golden Record: Registro más completo',
        },
        vendors: {
          title: 'Limpieza de proveedores',
          rule: 'Match exacto en número fiscal + match difuso en nombre',
          filter: 'Con aprobación de 4 ojos',
        },
      },
      tables: 'Tablas',
      rule: 'Regla',
      filter: 'Filtro',
      exportTitle: 'Opciones de exportación',
      export: {
        cleanedData: {
          title: 'Datos limpios',
          desc: 'Nueva versión del dataset sin duplicados como fuente de migración',
        },
        mappingTable: {
          title: 'Tabla de mapeo',
          desc: 'ID antiguo → ID Golden Record para reglas de migración',
        },
        summary: {
          title: 'Resumen',
          desc: 'Estadísticas y pista de auditoría para documentación y cumplimiento',
        },
      },
      benefitsTitle: 'Beneficios',
      benefits: {
        earlyDetection: 'Detección temprana: Identificar problemas de datos antes de la migración',
        flexibility: 'Flexibilidad: Reglas personalizables para cada caso de uso',
        transparency: 'Transparencia: Puntuaciones de match y decisiones trazables',
        compliance: 'Cumplimiento: Principio de 4 ojos y pista de auditoría completa',
        integration: 'Integración: Conexión fluida con Data Catalog y reglas de migración',
        scalability: 'Escalabilidad: Optimizado para grandes volúmenes de datos (hasta 3 millones de registros)',
      },
      cta: {
        title: '¿Listo para datos limpios?',
        subtitle: 'Descubra cómo CUTO optimiza la calidad de sus datos antes de la migración.',
        demo: 'Solicitar demo',
        migration: 'Migración de datos →',
      },
    },
  },

  pricing: {
    title: 'Precios simples y transparentes',
    subtitle: 'Obtenga acceso de por vida a CUTO durante nuestra fase de early adopter. Sin cuotas mensuales, sin costos ocultos – pague una vez, use para siempre.',
    lifetime: '/de por vida',
    oneTimePayment: 'Pago único',
    contactForPricing: 'Contáctenos para precios',
    getStarted: 'Comenzar',
    contactSales: 'Contactar ventas',
    mostPopular: 'Más popular',

    plans: {
      starter: {
        name: 'Starter',
        description: 'Para equipos pequeños y proyectos únicos',
        features: {
          projects: '1 Proyecto',
          users: 'Hasta 5 usuarios',
          templates: 'Todas las 75+ plantillas de proyecto',
          dashboards: '30+ Paneles',
          support: 'Soporte por correo electrónico',
          updates: 'Actualizaciones de por vida',
        },
      },
      professional: {
        name: 'Professional',
        description: 'Para equipos en crecimiento y múltiples proyectos',
        features: {
          projects: 'Proyectos ilimitados',
          users: 'Hasta 25 usuarios',
          templates: 'Todas las 75+ plantillas de proyecto',
          dashboards: 'Todos los 80+ paneles',
          bpmn: 'Editor de procesos BPMN',
          migration: 'Herramientas de migración de datos',
          support: 'Soporte prioritario por correo y chat',
          updates: 'Actualizaciones de por vida',
        },
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Para grandes organizaciones y programas',
        price: 'Personalizado',
        features: {
          everything: 'Todo ilimitado',
          users: 'Usuarios ilimitados',
          professional: 'Todas las funciones Professional',
          onPremise: 'Opción de despliegue on-premise',
          integrations: 'Integraciones personalizadas',
          successManager: 'Gerente de éxito dedicado',
          sla: 'SLA y soporte prioritario',
          training: 'Capacitación y onboarding',
        },
      },
    },

    comparison: {
      title: 'Comparación de características',
      feature: 'Característica',
      projects: 'Proyectos',
      users: 'Usuarios',
      templates: 'Plantillas de proyecto',
      dashboards: 'Paneles',
      bpmn: 'Editor de procesos BPMN',
      migration: 'Herramientas de migración de datos',
      cutover: 'Gestión de cutover',
      onPremise: 'Despliegue on-premise',
      api: 'Acceso API',
      support: 'Soporte',
      values: {
        unlimited: 'Ilimitado',
        basic: 'Básico',
        full: 'Completo',
        email: 'Correo electrónico',
        emailChat: 'Correo y Chat',
        dedicatedSla: 'Dedicado + SLA',
        custom: '+ Personalizado',
      },
    },

    faq: {
      title: 'Preguntas frecuentes',
      questions: {
        lifetime: {
          q: '¿Qué significa "acceso de por vida"?',
          a: 'Una vez que compra CUTO, tiene acceso para siempre. Esto incluye todas las actualizaciones futuras y nuevas características sin costo adicional. Sin suscripciones, sin renovaciones.',
        },
        upgrade: {
          q: '¿Puedo actualizar más tarde?',
          a: '¡Sí! Puede actualizar de Starter a Professional en cualquier momento. Solo pagará la diferencia entre los dos planes. Contáctenos para precios de actualización.',
        },
        trial: {
          q: '¿Hay una prueba gratuita?',
          a: 'Ofrecemos una demostración personalizada donde le mostramos CUTO con su caso de uso específico. Contáctenos para programar una llamada de demostración de 30 minutos.',
        },
        payment: {
          q: '¿Qué métodos de pago aceptan?',
          a: 'Aceptamos transferencia bancaria, tarjeta de crédito y PayPal. Para clientes Enterprise, también podemos acomodar órdenes de compra y facturación.',
        },
        security: {
          q: '¿Están seguros mis datos?',
          a: 'Sí. CUTO utiliza encriptación estándar de la industria, copias de seguridad regulares y manejo de datos conforme al RGPD. Los clientes Enterprise pueden elegir despliegue on-premise.',
        },
        training: {
          q: '¿Ofrecen capacitación?',
          a: 'Los planes Professional incluyen documentación completa y tutoriales en video. Los planes Enterprise incluyen onboarding personalizado y sesiones de capacitación.',
        },
      },
    },

    cta: {
      title: '¿Listo para optimizar sus proyectos SAP?',
      subtitle: 'Únase a los early adopters que ya están gestionando sus proyectos SAP de manera más inteligente con CUTO.',
      button: 'Programar una demo',
    },
  },

  docs: {
    badge: 'Base de conocimientos',
    title: 'Documentación',
    subtitle: 'Todo lo que necesita saber para usar CUTO con éxito. Guías, tutoriales y mejores prácticas.',
    searchPlaceholder: 'Buscar artículos, temas o palabras clave...',
    noResults: 'No hay resultados para "{query}"',
    popular: 'Artículos populares',
    browseTopics: 'Explorar temas',
    articles: 'Artículos',
    explore: 'Explorar',
    quickAccess: 'Acceso rápido',
    gettingStarted: 'Primeros pasos',
    functionsLabel: 'Funciones',
    integrations: 'Integraciones',
    cta: {
      title: '¿No encontró lo que busca?',
      description: 'Nuestro equipo de soporte está aquí para ayudar. Contáctenos para asistencia personalizada.',
      contactSupport: 'Contactar soporte',
    },
  },

  partners: {
    badge: 'Programa de Socios',
    title: 'Crece con CUTO',
    subtitle: 'Únete a nuestro ecosistema de socios y benefíciate de comisiones atractivas, recursos exclusivos y un mercado de transformación SAP en crecimiento.',
    stats: {
      partners: 'Socios en el mundo',
      countries: 'Países activos',
      satisfaction: 'Satisfacción',
      payouts: 'Pagados',
    },
    cta: {
      becomePartner: 'Hazte socio',
      learnMore: 'Saber más',
    },
    partnerTypes: {
      title: 'Elige tu modelo de socio',
      subtitle: 'Ya seas freelancer o gran empresa – tenemos el programa adecuado para ti.',
      popular: 'Popular',
      commission: 'Modelo de comisión',
      firstYear: 'Primer año',
      recurring: 'Recurrente',
      idealFor: 'Ideal para',
      yourBenefits: 'Tus beneficios',
      requirements: 'Requisitos',
      applyAs: 'Aplicar como socio {type}',
    },
    tiers: {
      title: 'Niveles de socio',
      subtitle: 'Cuanto más vendas, más te beneficias. Sube de nivel y disfruta de beneficios adicionales.',
      recommended: 'RECOMENDADO',
      minRevenue: 'Ingresos mín.',
      minDeals: 'Deals mín.',
      certified: 'Certificados',
      benefits: 'Beneficios',
      moreBenefits: '+{count} beneficios más',
      year: '/Año',
    },
    whyPartner: {
      title: '¿Por qué ser socio de CUTO?',
    },
    testimonials: {
      title: 'Lo que dicen nuestros socios',
    },
    faq: {
      title: 'Preguntas frecuentes',
    },
    apply: {
      title: '¿Listo para ser socio?',
      subtitle: 'Empieza hoy y benefíciate del creciente mercado de transformación SAP. El registro solo toma 5 minutos.',
      applyButton: 'Solicitar como socio',
      consultation: 'Reservar consulta',
    },
    types: {
      referral: {
        name: 'Socio Referral',
        shortName: 'Referral',
        description: 'Recomienda CUTO a tu red y gana comisiones atractivas por cada acuerdo exitoso.',
        targetAudience: 'Freelancers SAP, consultores independientes, gestores de proyectos',
        idealFor: [
          'Consultores SAP con amplia red de clientes',
          'Freelancers en la comunidad SAP',
          'Ex empleados SAP',
          'Gestores de proyectos con contactos en grandes empresas',
        ],
        requirements: [
          'Sin requisitos mínimos',
          'Registro online simple',
          'Comprensión básica de proyectos SAP',
        ],
        benefits: [
          '20% de comisión sobre ingresos del primer año',
          '10% de participación en ingresos recurrentes (Año 2+)',
          'Enlace de seguimiento personal',
          'Pagos mensuales',
          'Acceso al portal de socios',
          'Materiales de marketing co-branded',
        ],
        commission: {
          firstYear: '20%',
          recurring: '10%',
          bonus: 'Bonus de €1.000 desde 3 acuerdos/trimestre',
        },
      },
      reseller: {
        name: 'Socio Revendedor',
        shortName: 'Reseller',
        description: 'Vende CUTO como parte de tu portafolio y benefíciate de márgenes atractivos e ingresos recurrentes.',
        targetAudience: 'Pequeñas y medianas empresas de consultoría SAP',
        idealFor: [
          'Consultorías SAP con 5-50 consultores',
          'Integradores de sistemas IT con enfoque SAP',
          'Proveedores de servicios SAP regionales',
          'Consultorías boutique para mercado medio',
        ],
        requirements: [
          'Al menos 2 consultores CUTO certificados',
          'Prueba de experiencia en proyectos SAP',
          'Compromiso de ingresos anuales',
          'Participación en onboarding de socios',
        ],
        benefits: [
          'Margen del 25-30% en licencias',
          '15% de participación en ingresos recurrentes',
          'Registro de acuerdos con protección de precios',
          'Contratos propios con clientes',
          'Opciones white-label disponibles',
          'Soporte prioritario (< 4h de respuesta)',
          'Acceso a funciones beta',
        ],
        commission: {
          firstYear: '25-30%',
          recurring: '15%',
          bonus: 'Bonus de registro de acuerdos hasta €5.000',
        },
        highlight: true,
      },
      solution: {
        name: 'Socio de Soluciones',
        shortName: 'Solution',
        description: 'Asociación estratégica para grandes empresas de consultoría con actividades conjuntas go-to-market y co-selling.',
        targetAudience: 'Grandes empresas de consultoría SAP e integradores de sistemas',
        idealFor: [
          'Consultorías SAP de primer nivel',
          'Integradores de sistemas globales',
          'Big 4 consulting firms',
          'SAP Gold Partners',
        ],
        requirements: [
          'Al menos 10 consultores CUTO certificados',
          'Experiencia comprobada en proyectos S/4HANA',
          'Compromiso de ingresos anuales desde €100k',
          'Plan de negocio conjunto',
          'Patrocinio ejecutivo',
        ],
        benefits: [
          'Modelo de participación en ingresos individual',
          'Co-selling con el equipo de ventas CUTO',
          'Campañas de marketing conjuntas',
          'Soporte RFP',
          'Gerente de socios dedicado',
          'Revisión trimestral de negocios',
          'Acceso anticipado a funciones roadmap',
          'Casos de estudio y PR conjuntos',
          'Precios preferenciales para grandes proyectos',
        ],
        commission: {
          firstYear: 'Individual',
          recurring: 'Revenue Share',
          bonus: 'Acelerador co-selling',
        },
      },
      technology: {
        name: 'Socio Tecnológico',
        shortName: 'Technology',
        description: 'Integra tu solución con CUTO y abran juntos nuevos mercados a través de sinergias tecnológicas.',
        targetAudience: 'Proveedores de software en el ecosistema SAP',
        idealFor: [
          'Proveedores de add-ons SAP',
          'Fabricantes de herramientas de gestión de proyectos',
          'Plataformas DevOps & ALM',
          'Proveedores de datos y analytics',
        ],
        requirements: [
          'Oferta de productos complementarios',
          'Equipo de integración técnica',
          'Audiencia objetivo compartida',
          'Capacidad de integración API',
        ],
        benefits: [
          'Compartición de leads bidireccional',
          'Presupuesto co-marketing',
          'Listado en marketplace',
          'Acceso API y soporte técnico',
          'Webinars y eventos conjuntos',
          'Showcase de integración',
          'Cross-promoción en newsletter',
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
          'Acceso al portal de socios',
          'Materiales de formación básicos',
          'Soporte estándar',
          'Newsletter de socios',
        ],
      },
      silver: {
        name: 'Silver',
        minRevenue: '€25.000',
        minDeals: 2,
        certifiedConsultants: 2,
        benefits: [
          'Todos los beneficios Registered',
          '+5% de margen adicional',
          'Soporte prioritario (< 8h)',
          'Llamadas trimestrales de socios',
          'Paquete de materiales de marketing',
          'Listado en directorio de socios',
        ],
      },
      gold: {
        name: 'Gold',
        minRevenue: '€75.000',
        minDeals: 5,
        certifiedConsultants: 5,
        benefits: [
          'Todos los beneficios Silver',
          '+10% de margen adicional',
          'Soporte prioritario (< 4h)',
          'Gerente de socios dedicado',
          'Presupuesto co-marketing (€5k/año)',
          'Acceso a funciones beta',
          'Webinars conjuntos',
        ],
      },
      platinum: {
        name: 'Platinum',
        minRevenue: '€150.000',
        minDeals: 10,
        certifiedConsultants: 10,
        benefits: [
          'Todos los beneficios Gold',
          '+15% de margen adicional',
          'Soporte premium (< 2h, 24/7)',
          'Patrocinador ejecutivo en CUTO',
          'Presupuesto co-marketing (€15k/año)',
          'Acceso anticipado a roadmap',
          'Comunicados de prensa conjuntos',
          'Eventos exclusivos de socios',
          'Solicitudes de funciones personalizadas',
        ],
      },
    },
    generalBenefits: [
      {
        icon: '💰',
        title: 'Comisiones atractivas',
        description: 'Hasta 30% de margen en acuerdos y participación en ingresos recurrentes para ingresos a largo plazo.',
      },
      {
        icon: '📈',
        title: 'Mercado en crecimiento',
        description: 'El mercado de transformación SAP S/4HANA está creciendo rápidamente – posiciona como experto.',
      },
      {
        icon: '🎓',
        title: 'Certificaciones gratuitas',
        description: 'Conviértete en consultor certificado CUTO con nuestro programa de formación completo.',
      },
      {
        icon: '🛠️',
        title: 'Soporte de ventas y marketing',
        description: 'Presentaciones listas, casos de estudio y materiales co-branded para tus presentaciones.',
      },
      {
        icon: '🤝',
        title: 'Soporte dedicado',
        description: 'Tu gerente de socios personal te apoya con acuerdos y preguntas estratégicas.',
      },
      {
        icon: '🚀',
        title: 'Onboarding rápido',
        description: 'En solo 2 semanas desde la solicitud hasta socio activo – te lo hacemos fácil.',
      },
    ],
    partnerTestimonials: [
      {
        quote: 'Como freelancer he ganado más de €45.000 en comisiones en los últimos 12 meses – simplemente a través de recomendaciones en mi red. CUTO prácticamente se vende solo.',
        author: 'Thomas Müller',
        role: 'SAP Senior Consultant (Freelancer)',
        company: 'Independiente',
        partnerType: 'referral',
      },
      {
        quote: 'La asociación con CUTO ha complementado perfectamente nuestro portafolio de servicios. Ahora ofrecemos soluciones end-to-end de transformación SAP y hemos aumentado nuestros ingresos en un 40%.',
        author: 'Dr. Sandra Weber',
        role: 'Managing Partner',
        company: 'Alpine Consulting GmbH',
        partnerType: 'reseller',
      },
      {
        quote: 'El modelo de co-selling funciona excelentemente. Para RFPs complejos trabajamos mano a mano con el equipo CUTO – esto convence a los clientes y acelera el ciclo de ventas.',
        author: 'Michael Hoffmann',
        role: 'Director SAP Practice',
        company: 'Global Systems AG',
        partnerType: 'solution',
      },
    ],
    faqItems: [
      {
        question: '¿Qué tan rápido puedo empezar a ganar?',
        answer: 'Después del registro recibirás inmediatamente tu enlace de seguimiento personal. Tan pronto como un cliente recomendado por ti firma un contrato y se realiza el primer pago, tu comisión se hace efectiva. Para acuerdos enterprise el ciclo de ventas puede tomar 3-6 meses.',
      },
      {
        question: '¿Hay una duración mínima del contrato?',
        answer: 'No, como Socio Referral puedes dejar en cualquier momento sin previo aviso. Para Socios Revendedores y de Soluciones se aplican acuerdos individuales, típicamente con una duración anual.',
      },
      {
        question: '¿Cómo funciona el registro de acuerdos?',
        answer: 'Los Socios Revendedores y de Soluciones pueden registrar acuerdos potenciales a través del portal de socios. Esto te da protección de precios por 90 días y evita que otros socios trabajen en el mismo lead.',
      },
      {
        question: '¿Qué formación se requiere?',
        answer: 'Los Socios Referral no requieren certificación formal. Para Socios Revendedores y de Soluciones ofrecemos un programa de certificación online gratuito (aprox. 8 horas) además de formación presencial opcional.',
      },
      {
        question: '¿Puedo convertirme en Revendedor más tarde como freelancer?',
        answer: 'Sí, muchos de nuestros socios más exitosos comenzaron como Socios Referral y crecieron. Una vez que cumplas los requisitos, puedes hacer upgrade y beneficiarte de mejores condiciones.',
      },
      {
        question: '¿Hay territorios de venta exclusivos?',
        answer: 'Para Socios Platinum podemos hacer acuerdos exclusivos en ciertas regiones o industrias. Esto se negocia individualmente y requiere compromisos de ingresos correspondientes.',
      },
    ],
  },

  contact: {
    title: 'Contacto',
    subtitle: 'Contáctenos para una demo o más información sobre CUTO',
    info: {
      title: 'Información de contacto',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      phoneText: 'Por favor contáctenos por correo electrónico',
      demo: 'Solicitar demo',
      demoText: 'Programe una demo personalizada y descubra cómo CUTO puede apoyar su proyecto SAP.',
    },
    form: {
      title: 'Enviar mensaje',
      name: 'Nombre',
      email: 'Correo electrónico',
      company: 'Empresa',
      message: 'Mensaje',
      submit: 'Enviar',
      successMessage: '¡Gracias por su mensaje! Nos pondremos en contacto pronto.',
    },
  },

  about: {
    title: 'Acerca de CUTO',
    subtitle: 'CUTO es la solución estructurada para la gestión de proyectos SAP',
    mission: {
      title: 'Nuestra Misión',
      p1: 'Nuestra misión es hacer que los proyectos SAP sean más exitosos. Creemos que la gestión estructurada de proyectos es la clave del éxito. CUTO fue desarrollado para dar a los gerentes de proyecto y equipos las herramientas que necesitan para gestionar con éxito proyectos SAP complejos de principio a fin.',
      p2: 'Combinamos las mejores prácticas de proyectos SAP exitosos con tecnología moderna para proporcionarle una plataforma intuitiva y potente. Nuestro objetivo es simplificar la gestión de proyectos mientras aumentamos la calidad y el éxito de sus proyectos.',
    },
    whatWeDo: {
      title: 'Lo que hacemos',
      description: 'CUTO le apoya en todas las fases de su proyecto SAP - desde la inicialización hasta la finalización exitosa. Nuestro servicio SaaS proporciona una solución integral para la gestión estructurada de proyectos.',
      items: {
        init: 'Inicialización de proyectos con plantillas probadas',
        planning: 'Planificación integral de actividades, esfuerzos y cronogramas',
        management: 'Gestión continua de proyectos y seguimiento del progreso',
        completion: 'Cierre estructurado de proyectos con documentación',
      },
    },
    whyCuto: {
      title: '¿Por qué CUTO?',
      templates: {
        title: 'Plantillas probadas',
        description: 'Comience con las mejores prácticas de proyectos SAP exitosos. Ahorre tiempo en la inicialización del proyecto.',
      },
      planning: {
        title: 'Planificación estructurada',
        description: 'Planifique actividades, esfuerzos y cronogramas con precisión. Cree planes de proyecto realistas y ejecutables.',
      },
      management: {
        title: 'Gestión continua',
        description: 'Mantenga un seguimiento del progreso del proyecto. Identifique riesgos tempranamente y tome decisiones basadas en datos.',
      },
      completion: {
        title: 'Cierre exitoso',
        description: 'Cierre sus proyectos de manera estructurada. Con hitos claros y documentación completa.',
      },
    },
    team: {
      title: 'Nuestro Equipo',
      p1: 'CUTO fue desarrollado por un equipo con años de experiencia en proyectos SAP. Entendemos los desafíos que enfrentan los gerentes de proyecto y los equipos en transformaciones SAP, implementaciones, migraciones de datos y proyectos de cutover.',
      p2: 'Nuestro objetivo es superar estos desafíos a través de procesos estructurados y tecnología moderna. Nos apasiona hacer que los proyectos SAP sean más exitosos.',
    },
  },

  compare: {
    badge: 'Comparación',
    title: 'CUTO vs. Alternativas',
    subtitle: 'Compare CUTO con otras herramientas de gestión de proyectos y encuentre la mejor solución para sus proyectos SAP.',
    recommended: 'Recomendado',
    features: 'Características',
    strengths: 'Fortalezas',
    limitations: 'Limitaciones',
    allCategories: 'Todas las categorías',
    whyCuto: {
      title: '¿Por qué CUTO para proyectos SAP?',
      specialized: {
        title: 'Especializado en SAP',
        description: 'A diferencia de las herramientas genéricas, CUTO fue desarrollado específicamente para los requisitos de proyectos SAP.',
      },
      ready: {
        title: 'Listo para usar',
        description: 'Plantillas preconfiguradas para SAP Activate, Cutover y más – sin necesidad de configuración compleja.',
      },
      cutover: {
        title: 'Cutover integrado',
        description: 'Gestión de cutover única para un Go-Live sin problemas – un complemento o no disponible en otras herramientas.',
      },
      pricing: {
        title: 'Precios justos',
        description: 'Precios transparentes sin costos ocultos para complementos o características enterprise.',
      },
    },
    cta: {
      title: 'Compruébelo usted mismo',
      description: 'Pruebe CUTO gratis durante 14 días y experimente lo eficiente que puede ser la gestión de proyectos SAP.',
      tryFree: 'Probar gratis',
      requestDemo: 'Solicitar demo',
    },
  },

  useCases: {
    badge: 'Casos de uso y tutoriales',
    title: 'CUTO en la práctica',
    subtitle: 'Descubra guías prácticas y tutoriales en video para casos de uso típicos en proyectos SAP. Desde la planificación del proyecto hasta el Go-Live.',
    searchPlaceholder: 'Buscar casos de uso...',
    featured: 'Casos de uso destacados',
    all: 'Todos',
    allUseCases: 'Todos los casos de uso',
    noResults: {
      title: 'No se encontraron casos de uso',
      description: 'Pruebe con otra búsqueda o seleccione otra categoría.',
      reset: 'Restablecer filtros',
    },
    suggest: {
      title: '¿Falta algún caso de uso?',
      description: 'Estamos ampliando continuamente nuestra biblioteca de casos de uso. Cuéntenos qué temas le interesarían.',
      button: 'Sugerir un caso de uso',
      features: 'Descubrir todas las funciones',
    },
    detail: {
      home: 'Inicio',
      useCases: 'Casos de uso',
      readingTime: 'tiempo de lectura',
      videoTutorial: 'Tutorial en video',
      comingSoon: 'Próximamente',
      stepByStep: 'Guía paso a paso',
      proTips: 'Consejos profesionales',
      related: 'Casos de uso relacionados',
      cta: {
        title: '¿Listo para probar CUTO?',
        description: 'Comience hoy y optimice sus proyectos SAP.',
        start: 'Empezar',
        allUseCases: '← Todos los casos de uso',
      },
    },
    // Categories
    categories: {
      'project-planning': {
        name: 'Planificación de proyectos',
        description: 'Planificar fases, sprints e hitos',
      },
      'templates': {
        name: 'Plantillas',
        description: 'Crear y usar plantillas',
      },
      'dashboards': {
        name: 'Paneles',
        description: 'Visualizar KPIs e informes',
      },
      'migration': {
        name: 'Migración de datos',
        description: 'Migrar datos de forma estructurada',
      },
      'cutover': {
        name: 'Cutover',
        description: 'Ejecutar Go-Live con éxito',
      },
      'risk-management': {
        name: 'Gestión de riesgos',
        description: 'Identificar y gestionar riesgos',
      },
      'team-management': {
        name: 'Equipo y Recursos',
        description: 'Gestionar equipos y roles',
      },
      'reporting': {
        name: 'Informes',
        description: 'Crear informes y exportaciones',
      },
    },
    // Use Case Items
    items: {
      'phase-in-sprints-aufteilen': {
        title: '¿Cómo dividir una fase en sprints?',
        description: 'Aprenda a dividir eficazmente una fase de proyecto SAP en sprints manejables, para una mejor visión general y un trabajo ágil.',
        content: `## Visión general

En proyectos SAP complejos, una sola fase puede volverse rápidamente confusa. La división en sprints ayuda a seguir mejor el progreso y a mantener al equipo enfocado.

## ¿Por qué sprints en proyectos SAP?

- **Mejor visión general**: Los paquetes de trabajo más pequeños son más fáciles de gestionar
- **Feedback regular**: Después de cada sprint se pueden revisar los resultados
- **Flexibilidad**: Se pueden realizar ajustes más rápidamente
- **Motivación**: Progreso visible en períodos cortos

## Requisitos

Antes de comenzar, asegúrese de que:
- La fase ya está creada en CUTO
- Las actividades de la fase están definidas
- El equipo está asignado a la fase`,
        steps: [
          { title: 'Seleccionar fase', description: 'Navegue a la fase deseada en su proyecto. Haga clic en el menú de la fase y seleccione "Planificación de Sprint".' },
          { title: 'Establecer duración del sprint', description: 'Defina la duración estándar del sprint (típicamente: 2-4 semanas). CUTO calcula automáticamente el número de sprints posibles basándose en la duración de la fase.' },
          { title: 'Asignar actividades', description: 'Arrastre y suelte las actividades en los sprints correspondientes. CUTO le muestra la carga de trabajo por sprint.' },
          { title: 'Comprobar dependencias', description: 'CUTO le advierte automáticamente si las actividades con dependencias se planifican en el orden incorrecto.' },
          { title: 'Definir objetivos del sprint', description: 'Añada un objetivo claro para cada sprint. Esto ayuda al equipo a mantenerse enfocado.' },
        ],
        proTips: [
          'Planifique un colchón del 10-15% para tareas imprevistas.',
          'Mantenga las planificaciones de sprint cortas – máximo 2 horas por sprint.',
          'Utilice las retrospectivas de sprint para mejorar continuamente.',
          'Evite los sprints durante días festivos o períodos de vacaciones.',
        ],
        author: { name: 'Dr. Michael Schmidt', role: 'Experto en proyectos SAP' },
        readingTime: '8 min',
      },
      'sap-activate-template-nutzen': {
        title: 'Crear plantilla de SAP Activate automáticamente',
        description: 'Aprenda a crear un proyecto SAP Activate completo con todas las fases y actividades con un solo clic.',
        content: `## ¿Qué es SAP Activate?

SAP Activate es la metodología oficial de proyectos de SAP para implementaciones de S/4HANA. CUTO ofrece plantillas predefinidas que contienen todas las fases y mejores prácticas.

## Fases incluidas

1. **Discover** - Inicialización y alcance del proyecto
2. **Prepare** - Configuración del proyecto y formación del equipo
3. **Explore** - Análisis Fit-Gap y diseño
4. **Realize** - Configuración y desarrollo
5. **Deploy** - Pruebas y Go-Live
6. **Run** - Hypercare y optimización`,
        steps: [
          { title: 'Crear nuevo proyecto', description: 'Haga clic en "Nuevo proyecto" y seleccione "Crear desde plantilla".' },
          { title: 'Seleccionar SAP Activate', description: 'Seleccione "SAP Activate for S/4HANA" de las plantillas disponibles.' },
          { title: 'Introducir datos del proyecto', description: 'Introduzca el nombre del proyecto, la fecha de inicio y el Go-Live planificado. CUTO calcula automáticamente la duración de las fases.' },
          { title: 'Personalizar plantilla', description: 'Adapte la plantilla a sus necesidades: elimine actividades que no necesite o añada las suyas.' },
        ],
        proTips: [
          'Guarde las plantillas personalizadas para proyectos futuros.',
          'Utilice los valores estimados como punto de partida y ajústelos según su experiencia.',
          'Vincule la plantilla con sus roles estándar para una planificación de recursos más rápida.',
        ],
        author: { name: 'Sarah Weber', role: 'Consultora SAP' },
        readingTime: '5 min',
      },
      'management-dashboard-erstellen': {
        title: 'Crear panel de KPIs para la dirección',
        description: 'Cree paneles significativos que ofrezcan a la dirección una visión general rápida del estado del proyecto.',
        content: `## ¿Por qué paneles para la dirección?

La dirección necesita una visión diferente del proyecto que el equipo de proyecto. Un buen panel de dirección muestra:

- **Estado del proyecto de un vistazo** (sistema de semáforos)
- **Presupuesto vs. costes reales**
- **Resumen de hitos**
- **Principales riesgos**
- **Utilización de recursos**

## Mejores prácticas

- Menos es más: Máximo 6-8 KPIs por panel
- Use los colores de forma consistente (Rojo/Amarillo/Verde)
- Muestre tendencias, no solo valores actuales
- Actualice los paneles regularmente`,
        steps: [
          { title: 'Abrir área de paneles', description: 'Navegue a "Paneles" y haga clic en "Crear nuevo panel".' },
          { title: 'Elegir diseño', description: 'Seleccione un diseño predefinido o cree su propia cuadrícula.' },
          { title: 'Añadir widgets', description: 'Arrastre los widgets deseados al panel: estado del proyecto, gráfico de presupuesto, hitos, etc.' },
          { title: 'Configurar filtros', description: 'Configure filtros globales por período, proyectos o equipos.' },
          { title: 'Compartir', description: 'Comparta el panel con el equipo de dirección o expórtelo como PDF.' },
        ],
        proTips: [
          'Cree paneles separados para diferentes grupos de stakeholders.',
          'Utilice la actualización automática para presentaciones en vivo.',
          'Exporte los paneles como PDF para reuniones sin conexión.',
        ],
        author: { name: 'Thomas Müller', role: 'Líder de PMO' },
        readingTime: '7 min',
      },
      'go-live-checkliste': {
        title: 'Crear y gestionar la lista de verificación de Go-Live',
        description: 'Una lista de verificación de Go-Live estructurada es crucial para un cutover exitoso. Aprenda a crearla en CUTO.',
        content: `## La importancia de una lista de Go-Live

El Go-Live es el momento más crítico de un proyecto SAP. Una lista bien estructurada ayuda a:

- No olvidar nada
- Definir claramente las responsabilidades
- Seguir el progreso en tiempo real
- Reaccionar rápidamente a los problemas

## Áreas típicas de la lista

1. **Pre-Go-Live** (T-7 a T-1)
2. **Fin de semana del Cutover** (T-0)
3. **Post-Go-Live / Hypercare** (T+1 a T+14)`,
        steps: [
          { title: 'Abrir módulo de Cutover', description: 'Navegue al área de Cutover de su proyecto.' },
          { title: 'Crear lista desde plantilla', description: 'Seleccione una lista de Go-Live predefinida o cree una nueva.' },
          { title: 'Añadir tareas', description: 'Añada todas las tareas necesarias con plazos y responsables.' },
          { title: 'Definir dependencias', description: 'Vincule tareas que dependen unas de otras (p. ej., "Apagar sistema" antes de "Iniciar migración de datos").' },
          { title: 'Generar runbook', description: 'Exporte la lista como un runbook detallado para el equipo de cutover.' },
        ],
        proTips: [
          'Realice un simulacro de cutover antes del Go-Live real.',
          'Defina criterios y procedimientos de rollback claros.',
          'Planifique un colchón suficiente para problemas imprevistos.',
          'Asegúrese de que todos los stakeholders conocen las vías de escalación.',
        ],
        author: { name: 'Dr. Michael Schmidt', role: 'Experto en proyectos SAP' },
        readingTime: '6 min',
      },
      'risiken-identifizieren-tracken': {
        title: 'Identificar y seguir los riesgos del proyecto',
        description: 'Una gestión proactiva de riesgos es clave para el éxito del proyecto. Aprenda a registrar y monitorear riesgos en CUTO.',
        content: `## ¿Por qué la gestión de riesgos?

Los proyectos SAP son complejos y tienen muchas fuentes potenciales de riesgo:

- Riesgos técnicos (integración, rendimiento)
- Riesgos organizativos (gestión del cambio, recursos)
- Riesgos de cronograma (retrasos, dependencias)
- Riesgos presupuestarios (scope creep, costes imprevistos)

## Matriz de riesgos

CUTO utiliza una matriz de riesgos estandarizada:
- **Probabilidad**: Baja / Media / Alta
- **Impacto**: Bajo / Medio / Alto / Crítico
- **Puntuación de riesgo**: Calculada automáticamente`,
        steps: [
          { title: 'Abrir registro de riesgos', description: 'Navegue a "Riesgos y problemas" en su proyecto.' },
          { title: 'Registrar nuevo riesgo', description: 'Haga clic en "Añadir riesgo" y describa el riesgo detalladamente.' },
          { title: 'Realizar evaluación', description: 'Evalúe la probabilidad y el impacto. CUTO calcula la puntuación de riesgo.' },
          { title: 'Definir medidas', description: 'Añada medidas preventivas y reactivas y asigne responsables.' },
          { title: 'Revisar regularmente', description: 'Utilice la función de revisión de riesgos para actualizarlos periódicamente.' },
        ],
        proTips: [
          'Realice un taller de riesgos con todos los stakeholders al inicio del proyecto.',
          'Priorice los 10 principales riesgos y céntrese en ellos.',
          'Vincule los riesgos con las actividades afectadas para una mejor transparencia.',
          'Utilice el panel de riesgos para las reuniones del comité de dirección.',
        ],
        author: { name: 'Sarah Weber', role: 'Consultora SAP' },
        readingTime: '5 min',
      },
      'datenmigration-planen': {
        title: 'Planificar la migración de datos de forma estructurada',
        description: 'Una migración de datos exitosa requiere una planificación cuidadosa. Descubra cómo CUTO le apoya en ello.',
        content: `## Desafíos de la migración de datos

La migración de datos es a menudo la parte subestimada de un proyecto SAP:

- **Calidad de los datos**: Los datos heredados suelen ser inconsistentes
- **Mapeo**: Asignar estructuras antiguas a nuevas
- **Volumen**: Migrar grandes volúmenes de datos de manera eficiente
- **Validación**: Asegurarse de que todos los datos son correctos

## Módulo de migración de CUTO

CUTO ofrece funciones especializadas para:
- Planificación y seguimiento de la migración
- Gestión del catálogo de objetos
- Documentación de ciclos de prueba
- Coordinación del Cut-Over`,
        steps: [
          { title: 'Registrar objetos de migración', description: 'Cree un catálogo de todos los objetos a migrar (clientes, proveedores, materiales, etc.).' },
          { title: 'Asignar responsabilidades', description: 'Asigne un responsable funcional y técnico para cada objeto.' },
          { title: 'Planificar ciclos de prueba', description: 'Planifique varias migraciones de prueba antes de la definitiva.' },
          { title: 'Seguir el progreso', description: 'Utilice el panel de migración para supervisar el estado de todos los objetos.' },
          { title: 'Integración del Cutover', description: 'Vincule las actividades de migración con su lista de Go-Live.' },
        ],
        proTips: [
          'Comience pronto con la limpieza de datos, suele llevar más tiempo de lo previsto.',
          'Documente todas las reglas de mapeo para una trazabilidad posterior.',
          'Planifique al menos 3 migraciones de prueba completas.',
          'Involucre a los departamentos funcionales desde el principio en la validación de datos.',
        ],
        author: { name: 'Thomas Müller', role: 'Líder de PMO' },
        readingTime: '9 min',
      },
    },
  },

  // Legal Pages
  legal: {
    imprint: {
      title: 'Aviso legal',
      subtitle: 'Información legal',
      companyInfo: {
        title: 'Información de la empresa',
        companyName: 'Nombre de la empresa',
        address: 'Dirección',
        contact: 'Contacto',
      },
      legalInfo: {
        title: 'Información legal',
        managingDirector: 'Director general',
        commercialRegister: 'Registro mercantil',
        registerCourt: 'Tribunal de registro',
        registrationNumber: 'Número de registro',
        vatId: 'NIF-IVA',
        vatIdText: 'Número de identificación fiscal según §27a de la Ley del IVA',
      },
      liabilityContent: {
        title: 'Responsabilidad por el contenido',
        p1: 'Como proveedor de servicios, somos responsables de nuestro propio contenido en estas páginas de acuerdo con la legislación general en virtud del artículo 7, párrafo 1, de la Ley alemana de medios telemáticos (TMG). Sin embargo, según los artículos 8 a 10 del TMG, no estamos obligados a supervisar la información de terceros transmitida o almacenada por nosotros ni a investigar circunstancias que indiquen actividad ilegal.',
        p2: 'Las obligaciones de eliminar o bloquear el uso de información según la legislación general permanecen inalteradas. Sin embargo, la responsabilidad a este respecto solo es posible a partir del momento en que se conoce una infracción concreta de la ley. Si tenemos conocimiento de tales infracciones, eliminaremos este contenido de inmediato.',
      },
      liabilityLinks: {
        title: 'Responsabilidad por enlaces',
        p1: 'Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos ninguna influencia. Por lo tanto, no podemos asumir ninguna responsabilidad por estos contenidos externos. El proveedor u operador respectivo de las páginas siempre es responsable del contenido de las páginas enlazadas. Las páginas enlazadas fueron verificadas en busca de posibles infracciones legales en el momento del enlace. No se reconocieron contenidos ilegales en el momento del enlace.',
        p2: 'Sin embargo, un control permanente del contenido de las páginas enlazadas no es razonable sin pruebas concretas de una infracción de la ley. Si tenemos conocimiento de infracciones, eliminaremos dichos enlaces de inmediato.',
      },
      copyright: {
        title: 'Derechos de autor',
        p1: 'El contenido y las obras creadas por los operadores del sitio en estas páginas están sujetos a la ley alemana de derechos de autor. La reproducción, procesamiento, distribución y cualquier forma de comercialización de dicho material más allá del alcance de la ley de derechos de autor requerirá el consentimiento previo por escrito de su respectivo autor o creador.',
        p2: 'Las descargas y copias de este sitio solo están permitidas para uso privado y no comercial. En la medida en que el contenido de este sitio no fue creado por el operador, se respetan los derechos de autor de terceros. En particular, los contenidos de terceros se identifican como tales. Si tiene conocimiento de una infracción de derechos de autor, le rogamos que nos informe. Si tenemos conocimiento de infracciones, eliminaremos dicho contenido de inmediato.',
      },
    },
    privacy: {
      title: 'Política de privacidad',
      subtitle: 'Información sobre protección de datos',
      intro: {
        title: '1. Introducción',
        p1: 'Tomamos muy en serio la protección de sus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.',
        p2: 'El responsable del tratamiento de datos en este sitio web es:',
      },
      dataCollection: {
        title: '2. Recopilación y procesamiento de datos',
        autoTitle: '2.1 Datos recopilados automáticamente',
        autoIntro: 'Cuando visita nuestro sitio web, recopilamos automáticamente cierta información, incluyendo:',
        autoItems: ['Dirección IP', 'Tipo y versión del navegador', 'Sistema operativo', 'Fecha y hora de acceso', 'Páginas visitadas', 'URL de referencia'],
        autoP: 'Estos datos se procesan para garantizar la seguridad y funcionalidad de nuestro sitio web y para mejorar nuestros servicios.',
      },
      contactForm: {
        title: '3. Formulario de contacto y correo electrónico',
        p1: 'Cuando nos contacta a través del formulario de contacto o por correo electrónico, procesamos los siguientes datos:',
        items: ['Nombre', 'Dirección de correo electrónico', 'Contenido del mensaje', 'Cualquier otra información que proporcione voluntariamente'],
        p2: 'Estos datos se procesan para responder a su consulta y se almacenan durante el tiempo necesario para gestionar su solicitud o según lo exija la ley.',
      },
      cookies: {
        title: '4. Cookies',
        p1: 'Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el uso del sitio web. Las cookies son pequeños archivos de texto almacenados en su dispositivo.',
        p2: 'Puede controlar y gestionar las cookies en la configuración de su navegador. Sin embargo, desactivar las cookies puede limitar la funcionalidad de nuestro sitio web.',
        p3: 'Para obtener información detallada sobre las cookies que utilizamos, consulte nuestra',
        cookiePolicy: 'Política de cookies',
      },
      dataSharing: {
        title: '5. Compartición de datos',
        p1: 'No vendemos, intercambiamos ni alquilamos sus datos personales a terceros. Solo podemos compartir sus datos en las siguientes circunstancias:',
        items: [
          'Con proveedores de servicios que nos ayudan a operar nuestro sitio web y servicios (bajo estrictos acuerdos de confidencialidad)',
          'Cuando la ley lo exija o para proteger nuestros derechos y seguridad',
          'Con su consentimiento explícito',
        ],
      },
      dataSecurity: {
        title: '6. Seguridad de datos',
        p1: 'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la pérdida, la destrucción o la alteración. Estas medidas incluyen:',
        items: ['Cifrado SSL/TLS para la transmisión de datos', 'Actualizaciones de seguridad regulares', 'Controles de acceso y autenticación', 'Copias de seguridad regulares'],
      },
      yourRights: {
        title: '7. Sus derechos',
        p1: 'Bajo el Reglamento General de Protección de Datos (RGPD), tiene los siguientes derechos:',
        items: {
          access: 'Derecho de acceso: Puede solicitar información sobre sus datos personales que procesamos',
          rectification: 'Derecho de rectificación: Puede solicitar la corrección de datos inexactos',
          erasure: 'Derecho de supresión: Puede solicitar la eliminación de sus datos personales',
          restriction: 'Derecho de limitación: Puede solicitar la limitación del procesamiento de datos',
          portability: 'Derecho a la portabilidad: Puede solicitar la transferencia de sus datos',
          objection: 'Derecho de oposición: Puede oponerse a ciertos tipos de procesamiento de datos',
          withdrawal: 'Derecho a retirar el consentimiento: Puede retirar su consentimiento en cualquier momento',
        },
        p2: 'Para ejercer estos derechos, contáctenos en',
      },
      dataRetention: {
        title: '8. Retención de datos',
        p1: 'Conservamos sus datos personales solo durante el tiempo necesario para cumplir los fines para los que fueron recopilados, o según lo exijan las leyes y reglamentos aplicables.',
        p2: 'Cuando los datos ya no sean necesarios, se eliminarán de forma segura o se anonimizarán.',
      },
      changes: {
        title: '9. Cambios en esta política de privacidad',
        p1: 'Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en nuestras prácticas o requisitos legales. Le notificaremos cualquier cambio significativo publicando la nueva política de privacidad en esta página y actualizando la fecha "Última actualización".',
      },
      contact: {
        title: '10. Contacto',
        p1: 'Si tiene alguna pregunta o inquietud sobre esta política de privacidad o nuestras prácticas de procesamiento de datos, contáctenos:',
        email: 'Correo electrónico',
        address: 'Dirección',
      },
    },
    terms: {
      title: 'Términos de servicio',
      subtitle: 'Términos y condiciones para el uso de CUTO',
      scope: {
        title: '1. Alcance y aceptación',
        p1: 'Estos Términos de servicio ("Términos") rigen su acceso y uso del servicio CUTO ("Servicio") proporcionado por benX AG ("nosotros", "nuestro"). Al acceder o utilizar nuestro Servicio, acepta estar vinculado por estos Términos.',
        p2: 'Si no acepta estos Términos, no puede acceder ni utilizar el Servicio.',
      },
      serviceDescription: {
        title: '2. Descripción del servicio',
        p1: 'CUTO es una plataforma Software-as-a-Service (SaaS) diseñada para apoyar la gestión estructurada de proyectos SAP, incluyendo:',
        items: [
          'Inicialización de proyectos con plantillas',
          'Planificación de actividades, esfuerzos y cronogramas',
          'Gestión de proyectos y seguimiento del progreso',
          'Cierre del proyecto y documentación',
        ],
      },
      registration: {
        title: '3. Registro y cuenta',
        p1: 'Para utilizar el Servicio, debe crear una cuenta y proporcionar información precisa, completa y actual. Usted es responsable de:',
        items: [
          'Mantener la confidencialidad de sus credenciales de cuenta',
          'Todas las actividades que ocurran bajo su cuenta',
          'Notificarnos inmediatamente de cualquier uso no autorizado de su cuenta',
        ],
        p2: 'Debe tener al menos 18 años para crear una cuenta y utilizar el Servicio.',
      },
      acceptableUse: {
        title: '4. Uso aceptable',
        p1: 'Acepta no:',
        items: [
          'Utilizar el Servicio para cualquier propósito ilegal o no autorizado',
          'Violar las leyes de su jurisdicción',
          'Transmitir virus, malware o código dañino',
          'Intentar obtener acceso no autorizado al Servicio o sus sistemas relacionados',
          'Interferir o interrumpir el Servicio o los servidores conectados al Servicio',
          'Copiar, modificar o crear obras derivadas del Servicio',
          'Realizar ingeniería inversa, descompilar o desensamblar el Servicio',
          'Utilizar el Servicio para almacenar o transmitir material infractor, difamatorio o ilegal',
        ],
      },
      subscription: {
        title: '5. Suscripción y pago',
        p1: 'El Servicio se proporciona mediante suscripción. Al suscribirse, acepta pagar las tarifas aplicables según se especifica en su plan de suscripción.',
        p2: 'Las tarifas de suscripción se facturan por adelantado de forma mensual o anual, según se seleccione. Todas las tarifas no son reembolsables excepto según lo exija la ley.',
        p3: 'Nos reservamos el derecho de cambiar nuestros precios en cualquier momento. Los cambios de precio se le comunicarán por adelantado y se aplicarán a los períodos de facturación posteriores.',
        p4: 'Si el pago no se recibe o falla, podemos suspender o terminar su acceso al Servicio.',
      },
      intellectualProperty: {
        title: '6. Propiedad intelectual',
        p1: 'El Servicio, incluyendo su contenido original, características y funcionalidad, es propiedad de benX AG y está protegido por derechos de autor internacionales, marcas registradas y otras leyes de propiedad intelectual.',
        p2: 'Usted conserva la propiedad de cualquier dato, contenido o material que cargue o cree utilizando el Servicio ("Su contenido"). Al utilizar el Servicio, nos otorga una licencia para usar, almacenar y procesar Su contenido únicamente con el propósito de proporcionarle el Servicio.',
        p3: 'No puede utilizar nuestras marcas, logotipos u otra información propietaria sin nuestro consentimiento previo por escrito.',
      },
      dataPrivacy: {
        title: '7. Datos y privacidad',
        p1: 'Su uso del Servicio también se rige por nuestra',
        privacyPolicy: 'Política de privacidad',
        p2: '. Revise nuestra Política de privacidad para comprender cómo recopilamos, utilizamos y protegemos sus datos.',
        p3: 'Implementamos medidas de seguridad apropiadas para proteger sus datos, pero no podemos garantizar seguridad absoluta. Usted es responsable de mantener la seguridad de sus credenciales de cuenta.',
      },
      serviceAvailability: {
        title: '8. Disponibilidad del servicio',
        p1: 'Nos esforzamos por proporcionar acceso confiable y continuo al Servicio. Sin embargo, no garantizamos que el Servicio esté disponible en todo momento o esté libre de interrupciones, errores o defectos.',
        p2: 'Podemos realizar mantenimiento programado o actualizaciones que pueden interrumpir temporalmente el acceso al Servicio. Haremos esfuerzos razonables para notificarle con anticipación sobre el mantenimiento planificado.',
      },
      termination: {
        title: '9. Terminación',
        p1: 'Puede cancelar su suscripción en cualquier momento a través de la configuración de su cuenta o contactándonos. Tras la cancelación, su acceso al Servicio continuará hasta el final de su período de facturación actual.',
        p2: 'Podemos suspender o terminar su acceso al Servicio inmediatamente si:',
        items: [
          'Viola estos Términos',
          'No paga las tarifas aplicables',
          'Estamos obligados a hacerlo por ley',
          'Descontinuamos el Servicio',
        ],
        p3: 'Tras la terminación, su derecho a utilizar el Servicio cesará inmediatamente. Podemos eliminar su cuenta y datos después de un período de retención razonable, a menos que estemos obligados a retenerlos por ley.',
      },
      liability: {
        title: '10. Limitación de responsabilidad',
        p1: 'En la máxima medida permitida por la ley, benX AG no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, ni de ninguna pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, ni de ninguna pérdida de datos, uso, buena voluntad u otras pérdidas intangibles.',
        p2: 'Nuestra responsabilidad total por cualquier reclamación que surja de o esté relacionada con el Servicio no excederá la cantidad que nos pagó en los doce (12) meses anteriores a la reclamación.',
      },
      changes: {
        title: '11. Cambios en los términos',
        p1: 'Nos reservamos el derecho de modificar estos Términos en cualquier momento. Le notificaremos cualquier cambio material publicando los Términos actualizados en esta página y actualizando la fecha "Última actualización". Su uso continuado del Servicio después de dichos cambios constituye la aceptación de los Términos modificados.',
      },
      governingLaw: {
        title: '12. Ley aplicable',
        p1: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes de Alemania, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja de estos Términos o del Servicio estará sujeta a la jurisdicción exclusiva de los tribunales de Alemania.',
      },
      contact: {
        title: '13. Contacto',
        p1: 'Si tiene alguna pregunta sobre estos Términos, contáctenos:',
        email: 'Correo electrónico',
        address: 'Dirección',
      },
    },
    cookies: {
      title: 'Política de cookies',
      subtitle: 'Información sobre nuestro uso de cookies',
      whatAreCookies: {
        title: '1. ¿Qué son las cookies?',
        p1: 'Las cookies son pequeños archivos de texto que se colocan en su dispositivo (ordenador, tableta o móvil) cuando visita un sitio web. Las cookies se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios de sitios web.',
        p2: 'Las cookies permiten que un sitio web reconozca su dispositivo y almacene cierta información sobre sus preferencias o acciones pasadas. Esto nos ayuda a proporcionarle una mejor experiencia cuando navega por nuestro sitio web y también nos permite mejorar nuestros servicios.',
      },
      howWeUse: {
        title: '2. Cómo utilizamos las cookies',
        p1: 'Utilizamos cookies para los siguientes propósitos:',
        essential: 'Cookies esenciales: Necesarias para el correcto funcionamiento del sitio web',
        analytics: 'Cookies analíticas: Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web',
        functional: 'Cookies funcionales: Recuerdan sus preferencias y configuraciones',
        performance: 'Cookies de rendimiento: Recopilan información sobre el rendimiento del sitio web',
      },
      types: {
        title: '3. Tipos de cookies que utilizamos',
        essential: {
          title: '3.1 Cookies esenciales',
          p1: 'Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Generalmente solo se establecen en respuesta a acciones realizadas por usted, como establecer sus preferencias de privacidad, iniciar sesión o rellenar formularios.',
          p2: 'Ejemplos: Cookies de sesión, cookies de autenticación, cookies de seguridad',
        },
        analytics: {
          title: '3.2 Cookies analíticas',
          p1: 'Estas cookies nos permiten contar visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio web. Nos ayudan a saber qué páginas son las más populares y ver cómo los visitantes se mueven por el sitio.',
          p2: 'Ejemplos: Cookies de Google Analytics (si se utilizan)',
        },
        functional: {
          title: '3.3 Cookies funcionales',
          p1: 'Estas cookies permiten que el sitio web proporcione funcionalidad mejorada y personalización. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.',
          p2: 'Ejemplos: Preferencias de idioma, configuración regional, preferencias de interfaz de usuario',
        },
        performance: {
          title: '3.4 Cookies de rendimiento',
          p1: 'Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando e informando información de forma anónima. Esto nos ayuda a mejorar el funcionamiento de nuestro sitio web.',
        },
      },
      thirdParty: {
        title: '4. Cookies de terceros',
        p1: 'Además de nuestras propias cookies, también podemos utilizar varias cookies de terceros para informar estadísticas de uso del Servicio, entregar anuncios, etc. Estas cookies de terceros pueden incluir:',
        items: ['Servicios de análisis (p. ej., Google Analytics)', 'Redes publicitarias', 'Plataformas de redes sociales'],
        p2: 'Estas cookies de terceros están sujetas a las respectivas políticas de privacidad de los terceros. No controlamos estas cookies y debe consultar los sitios web de terceros para obtener más información sobre sus prácticas de cookies.',
      },
      duration: {
        title: '5. Duración de las cookies',
        p1: 'Las cookies pueden ser cookies "de sesión" o "persistentes":',
        session: 'Cookies de sesión: Son cookies temporales que se eliminan cuando cierra su navegador. Permiten que el sitio web vincule sus acciones durante una sesión del navegador.',
        persistent: 'Cookies persistentes: Permanecen en su dispositivo durante un período establecido o hasta que las elimine. Se activan cada vez que visita el sitio web que las creó.',
      },
      managing: {
        title: '6. Gestión de cookies',
        p1: 'Tiene derecho a aceptar o rechazar las cookies. La mayoría de los navegadores web aceptan cookies automáticamente, pero generalmente puede modificar la configuración de su navegador para rechazar cookies si lo prefiere.',
        p2: 'Sin embargo, si elige rechazar las cookies, es posible que no pueda experimentar completamente las funciones interactivas de nuestro sitio web o que algunos de nuestros servicios no funcionen correctamente.',
        p3: 'Puede gestionar las cookies a través de la configuración de su navegador. Aquí hay enlaces a instrucciones para navegadores populares:',
      },
      consent: {
        title: '7. Consentimiento de cookies',
        p1: 'Cuando visite nuestro sitio web por primera vez, podemos solicitarle su consentimiento para utilizar ciertas cookies. Puede retirar su consentimiento en cualquier momento ajustando sus preferencias de cookies en la configuración de su navegador o contactándonos.',
        p2: 'Las cookies esenciales no requieren consentimiento ya que son necesarias para que el sitio web funcione.',
      },
      updates: {
        title: '8. Actualizaciones de esta política de cookies',
        p1: 'Podemos actualizar esta Política de cookies de vez en cuando para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias. Le notificaremos cualquier cambio significativo publicando la nueva Política de cookies en esta página y actualizando la fecha "Última actualización".',
      },
      contact: {
        title: '9. Contacto',
        p1: 'Si tiene alguna pregunta sobre nuestro uso de cookies o esta Política de cookies, contáctenos:',
        email: 'Correo electrónico',
        address: 'Dirección',
      },
    },
  },
};

