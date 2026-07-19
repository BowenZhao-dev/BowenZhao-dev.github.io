/* ============================================
   Bowen Zhao — Portfolio
   EN / ES translation dictionary
   ============================================ */

const I18N = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.infra": "Infra",
    "nav.experience": "Experience", "nav.projects": "Projects", "nav.contact": "Contact",
    "nav.resume": "Resume",

    "hero.eyebrow": "ALL SYSTEMS OPERATIONAL",
    "hero.h1": "Hi, I'm <span class=\"highlight\">Bowen Zhao</span>",
    "hero.h2a": "Backend Developer",
    "hero.h2b": "Systems &amp; Infrastructure Engineer",
    "hero.p": "I move comfortably between the code and the infrastructure underneath it — from Java/Spring Boot backends to Active Directory, Docker, and the network that keeps it all breathing.",
    "hero.cta1": "View My Work",
    "hero.cta2": "Contact Me",
    "hero.meta1": "San Juan, Alicante, España",
    "hero.meta2": "中文 · Español · English",
    "hero.meta3": "Open to relocation",

    "term.out1": "bowen-zhao — hybrid dev/ops profile",
    "term.out2": "12+ months, 0 data loss",

    "stat.label1": "applications sent",
    "stat.label2": "same-day tickets",
    "stat.label3": "services self-hosted",

    "about.tag": "// ABOUT",
    "about.title": "About Me",
    "about.p1": "I'm a hybrid IT profile — half backend developer, half sysadmin — trained through Spain's vocational track: SMR → ASIR → DAM. That progression means I've spent as much time inside Active Directory and PowerShell as I have inside Spring Boot and REST APIs, and I genuinely enjoy both sides.",
    "about.p2": "My homelab is where that hybrid identity actually lives: a Linux server running a *arr automation stack, Docker containers, Tailscale VPN, and an Oracle Cloud instance, all monitored through a JavaFX dashboard I built myself. It's been running 12+ months without losing data — which is basically my resume in one sentence.",
    "about.p3": "Native in Mandarin and Cantonese, professional in Spanish and English — I've used that directly to support international users, including remote English-language IT support for teams in the Netherlands.",
    "about.p4": "Currently deep in an active job search across IT support, sysadmin, and junior backend roles — direct and honest in how I present my experience, no inflated titles.",

    "skills.title": "Skills",
    "skill.docker": "Docker &amp; Infra (Proxmox, Linux)",
    "skill.spring": "Spring Boot &amp; REST APIs",
    "skill.ad": "Windows Server &amp; Active Directory",
    "skill.sql": "SQL &amp; Databases",
    "skill.js": "JavaScript / React",

    "spec.k1": "hostname", "spec.k2": "role", "spec.k3": "location",
    "spec.k4": "languages", "spec.k5": "education", "spec.k6": "status",
    "spec.v2": "Backend Dev / Systems Engineer",
    "spec.v4": "中文 (native) · Español (C1) · English (B2)",
    "spec.v6": "actively interviewing",

    "infra.tag": "// INFRASTRUCTURE",
    "infra.title": "Homelab Status",
    "infra.sub": "Real services I run and maintain, day to day — not a demo.",
    "infra.d1": "Media automation stack",
    "infra.d2": "Self-hosted media server",
    "infra.d3": "Download client, containerized",
    "infra.d4": "Remote mesh access, any network",
    "infra.d5": "Ubuntu, 24GB RAM — Syncplay server",
    "infra.d6": "PoE camera bridge + motionEye",
    "infra.d7": "6+ containerized services in production",
    "infra.t8": "Backups",
    "infra.d8": "Automated via Bash — 0 data loss, 12+ months",

    "exp.tag": "// EXPERIENCE",
    "exp.title": "Work Experience",

    "exp1.duration": "Mar 2025 – Jun 2025 · 4 mos",
    "exp1.position": "Full Stack Developer — Internship",
    "exp1.b1": "Improved backend reliability and performance ~40% through debugging, refactoring, REST integration, and Git/Maven workflows in an agile team.",
    "exp1.b2": "Led migration of a business-critical warehouse system from legacy Visual Basic to a modern C#/Java stack.",
    "exp1.b3": "Deployed and managed containerized dev/QA environments with Docker on Proxmox, folding the workflow into CI/CD.",
    "exp1.b4": "Kept zero unplanned connectivity interruptions for 4 months by configuring network infrastructure and firewall rules.",

    "exp2.duration": "Mar 2023 – Aug 2023 · 6 mos",
    "exp2.position": "IT Support &amp; Systems Technician",
    "exp2.onsite": "on-site at",
    "exp2.b1": "Resolved N1/N2 incidents end-to-end via Jira ITSM — over 90% same-day resolution, averaging 15–20 tickets/day, consistently meeting SLAs.",
    "exp2.b2": "Administered Active Directory for 100+ users across logistics, design, and operations — account provisioning, group policy, access management.",
    "exp2.b3": "Automated routine Windows administration with PowerShell scripts, cutting manual effort on repetitive checks.",
    "exp2.b4": "Diagnosed and resolved LAN, DNS, and DHCP issues across a multi-department warehouse network.",
    "exp2.b5": "Provided remote IT support to stores in the Netherlands, coordinating diagnostics across the language barrier with zero escalations.",

    "exp3.duration": "Jan 2021 – Jun 2024 · 3 yrs 6 mos",
    "exp3.position": "Store Operations &amp; Retail Assistant",
    "exp3.b1": "Handled customer service, inventory management, and daily incident resolution in a fast-paced retail environment — organizational and problem-solving skills that transfer directly to IT incident management.",

    "edu.tag": "// EDUCATION",
    "edu.title": "Education",
    "edu1.p": "OOP, database design, web/mobile development and software engineering in Java, C#, JavaScript and Android. TFG: a JavaFX + Spring Boot dashboard monitoring Docker containers via WebSocket.",
    "edu2.p": "Windows/Linux server administration, Active Directory, TCP/IP, VLANs, VPNs, firewalls, PowerShell scripting, virtualization and IT infrastructure management.",
    "edu3.p": "Hardware assembly and repair, OS installation and configuration, basic networking, and end-user technical support.",

    "lang.tag": "// LANGUAGES",
    "lang.title": "Languages",
    "lang1.name": "Chinese", "lang1.level": "Native", "lang1.desc": "Mandarin &amp; Cantonese — mother tongue",
    "lang2.name": "Spanish", "lang2.level": "C1 · Professional", "lang2.desc": "Fluent in speaking, reading and writing",
    "lang3.name": "English", "lang3.level": "B2 · Intermediate-High", "lang3.desc": "Verified by official test, July 2026 — used daily for remote international IT support",

    "proj.tag": "// PROJECTS",
    "proj.title": "My Projects",
    "filter.all": "All", "filter.web": "Web", "filter.desktop": "Desktop",
    "filter.extension": "Extension", "filter.tools": "Tools",

    "p1.desc": "JavaFX + Spring Boot dashboard for Docker containers and the *arr stack — real-time updates, resource metrics, container controls. My DAM final project.",
    "p2.desc": "Cross-platform JavaFX client that drives MPV over IPC to keep video playback in sync across users. Integrates Jellyfin session reporting and AniList progress tracking, with CI/CD across Windows/Linux/macOS.",
    "p3.desc": "PySide6 desktop app for real-time manga OCR and translation via a local LLM through Ollama, with a dual-strategy bubble detector and a debug window for tuning the pipeline.",
    "p4.title": "Self-Hosted Manga Reader",
    "p4.desc": "Full-stack reader (Go backend, React frontend) with SQLite, AniList OAuth2, a concurrent CBZ downloader, and a scraper handling Cloudflare and custom chapter decryption.",
    "p5.desc": "Chrome extension linking external sources to AniList anime, manga, or novel pages, with local storage and easy retrieval.",
    "p6.desc": "A collection of Svelte-built tools for Genshin Impact, including wish history tracking and other game-related utilities.",
    "p7.title": "Personal Portfolio Website",
    "p7.desc": "This site — a status-page-themed portfolio showing real numbers from the homelab, projects, and job search.",

    "link.frontend": "Frontend", "link.code": "Code", "link.live": "Live Site",
    "gh.more": "See More on GitHub",
    "gh.desc1": "Main Projects &amp; Development",
    "gh.desc2": "Personal Portfolio &amp; Web Projects",

    "contact.tag": "// CONTACT",
    "contact.title": "Get In Touch",
    "contact.email": "Email", "contact.phone": "Phone", "contact.location": "Location",
    "contact.relocate": "Open to relocation for the right role",
    "contact.gh1": "Professional work, school-related",
    "contact.gh2": "Personal projects",

    "footer.rights": "All Rights Reserved."
  },

  es: {
    "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.infra": "Infra",
    "nav.experience": "Experiencia", "nav.projects": "Proyectos", "nav.contact": "Contacto",
    "nav.resume": "CV",

    "hero.eyebrow": "TODOS LOS SISTEMAS OPERATIVOS",
    "hero.h1": "Hola, soy <span class=\"highlight\">Bowen Zhao</span>",
    "hero.h2a": "Desarrollador Backend",
    "hero.h2b": "Ingeniero de Sistemas e Infraestructura",
    "hero.p": "Me muevo con soltura entre el código y la infraestructura que lo sostiene — de backends en Java/Spring Boot a Active Directory, Docker y la red que mantiene todo funcionando.",
    "hero.cta1": "Ver mi trabajo",
    "hero.cta2": "Contactar",
    "hero.meta1": "San Juan, Alicante, España",
    "hero.meta2": "中文 · Español · Inglés",
    "hero.meta3": "Disponible para cambio de residencia",

    "term.out1": "bowen-zhao — perfil híbrido dev/ops",
    "term.out2": "12+ meses, 0 pérdida de datos",

    "stat.label1": "solicitudes enviadas",
    "stat.label2": "tickets resueltos el mismo día",
    "stat.label3": "servicios autoalojados",

    "about.tag": "// SOBRE MÍ",
    "about.title": "Sobre Mí",
    "about.p1": "Soy un perfil de IT híbrido — mitad desarrollador backend, mitad sysadmin — formado a través del itinerario de FP en España: SMR → ASIR → DAM. Esa progresión significa que he pasado tanto tiempo dentro de Active Directory y PowerShell como dentro de Spring Boot y APIs REST, y disfruto genuinamente de ambos lados.",
    "about.p2": "Mi homelab es donde esa identidad híbrida realmente vive: un servidor Linux con un stack de automatización *arr, contenedores Docker, VPN Tailscale y una instancia en Oracle Cloud, todo monitorizado a través de un dashboard en JavaFX que construí yo mismo. Lleva más de 12 meses funcionando sin perder datos — que es básicamente mi currículum en una frase.",
    "about.p3": "Nativo en mandarín y cantonés, con nivel profesional en español e inglés — lo he usado directamente para dar soporte a usuarios internacionales, incluido soporte IT remoto en inglés para equipos en los Países Bajos.",
    "about.p4": "Actualmente inmerso en una búsqueda de empleo activa en soporte IT, sysadmin y puestos junior de backend — directo y honesto en cómo presento mi experiencia, sin títulos inflados.",

    "skills.title": "Habilidades",
    "skill.docker": "Docker e Infraestructura (Proxmox, Linux)",
    "skill.spring": "Spring Boot y APIs REST",
    "skill.ad": "Windows Server y Active Directory",
    "skill.sql": "SQL y Bases de Datos",
    "skill.js": "JavaScript / React",

    "spec.k1": "hostname", "spec.k2": "rol", "spec.k3": "ubicación",
    "spec.k4": "idiomas", "spec.k5": "formación", "spec.k6": "estado",
    "spec.v2": "Desarrollador Backend / Ingeniero de Sistemas",
    "spec.v4": "中文 (nativo) · Español (C1) · Inglés (B2)",
    "spec.v6": "en búsqueda activa",

    "infra.tag": "// INFRAESTRUCTURA",
    "infra.title": "Estado del Homelab",
    "infra.sub": "Servicios reales que gestiono y mantengo día a día — no es una demo.",
    "infra.d1": "Stack de automatización de medios",
    "infra.d2": "Servidor de medios autoalojado",
    "infra.d3": "Cliente de descargas, en contenedor",
    "infra.d4": "Acceso remoto en malla, desde cualquier red",
    "infra.d5": "Ubuntu, 24GB RAM — servidor de Syncplay",
    "infra.d6": "Puente de cámaras PoE + motionEye",
    "infra.d7": "6+ servicios en contenedores en producción",
    "infra.t8": "Copias de seguridad",
    "infra.d8": "Automatizadas con Bash — 0 pérdida de datos, 12+ meses",

    "exp.tag": "// EXPERIENCIA",
    "exp.title": "Experiencia Laboral",

    "exp1.duration": "Mar 2025 – Jun 2025 · 4 meses",
    "exp1.position": "Desarrollador Full Stack — Prácticas",
    "exp1.b1": "Mejoró la fiabilidad y el rendimiento del backend ~40% mediante depuración, refactorización, integración REST y flujos de Git/Maven en un equipo ágil.",
    "exp1.b2": "Lideró la migración de un sistema de almacén crítico para el negocio desde Visual Basic legado a un stack moderno en C#/Java.",
    "exp1.b3": "Desplegó y gestionó entornos de desarrollo/QA en contenedores con Docker sobre Proxmox, integrando el flujo en CI/CD.",
    "exp1.b4": "Mantuvo cero interrupciones de conectividad no planificadas durante 4 meses configurando infraestructura de red y reglas de firewall.",

    "exp2.duration": "Mar 2023 – Ago 2023 · 6 meses",
    "exp2.position": "Técnico de Soporte IT y Sistemas",
    "exp2.onsite": "en las instalaciones de",
    "exp2.b1": "Resolvió incidencias N1/N2 de principio a fin mediante ITSM en Jira — más del 90% resueltas el mismo día, 15–20 tickets/día de media, cumpliendo SLAs de forma constante.",
    "exp2.b2": "Administró Active Directory para 100+ usuarios de logística, diseño y operaciones — alta de cuentas, políticas de grupo, gestión de accesos.",
    "exp2.b3": "Automatizó tareas rutinarias de administración de Windows con scripts de PowerShell, reduciendo el esfuerzo manual en comprobaciones repetitivas.",
    "exp2.b4": "Diagnosticó y resolvió incidencias de LAN, DNS y DHCP en una red de almacén multidepartamental.",
    "exp2.b5": "Proporcionó soporte IT remoto a tiendas en los Países Bajos, coordinando diagnósticos superando la barrera del idioma, sin incidencias escaladas.",

    "exp3.duration": "Ene 2021 – Jun 2024 · 3 años 6 meses",
    "exp3.position": "Dependiente y Operaciones de Tienda",
    "exp3.b1": "Atención al cliente, gestión de inventario y resolución de incidencias diarias en un entorno minorista de ritmo elevado — habilidades organizativas y de resolución de problemas transferibles a la gestión de incidencias IT.",

    "edu.tag": "// FORMACIÓN",
    "edu.title": "Formación",
    "edu1.p": "Programación orientada a objetos, diseño de bases de datos, desarrollo web/móvil e ingeniería de software en Java, C#, JavaScript y Android. TFG: dashboard en JavaFX + Spring Boot para monitorización de contenedores Docker vía WebSocket.",
    "edu2.p": "Administración de servidores Windows/Linux, Active Directory, TCP/IP, VLANs, VPNs, firewalls, scripting en PowerShell, virtualización y gestión de infraestructura IT.",
    "edu3.p": "Montaje y reparación de hardware, instalación y configuración de sistemas operativos, redes básicas y soporte técnico a usuarios.",

    "lang.tag": "// IDIOMAS",
    "lang.title": "Idiomas",
    "lang1.name": "Chino", "lang1.level": "Nativo", "lang1.desc": "Mandarín y cantonés — lengua materna",
    "lang2.name": "Español", "lang2.level": "C1 · Profesional", "lang2.desc": "Fluido hablando, leyendo y escribiendo",
    "lang3.name": "Inglés", "lang3.level": "B2 · Intermedio-Alto", "lang3.desc": "Verificado por examen oficial, julio de 2026 — usado a diario en soporte IT internacional remoto",

    "proj.tag": "// PROYECTOS",
    "proj.title": "Mis Proyectos",
    "filter.all": "Todos", "filter.web": "Web", "filter.desktop": "Escritorio",
    "filter.extension": "Extensión", "filter.tools": "Herramientas",

    "p1.desc": "Dashboard en JavaFX + Spring Boot para contenedores Docker y el stack *arr — actualizaciones en tiempo real, métricas de recursos, control de contenedores. Mi proyecto final de DAM.",
    "p2.desc": "Cliente multiplataforma en JavaFX que controla MPV vía IPC para sincronizar la reproducción de vídeo entre usuarios. Integra reporte de sesión con Jellyfin y seguimiento de progreso con AniList, con CI/CD en Windows/Linux/macOS.",
    "p3.desc": "App de escritorio en PySide6 para OCR y traducción de manga en tiempo real mediante un LLM local vía Ollama, con detector de bocadillos de doble estrategia y una ventana de depuración para ajustar el pipeline.",
    "p4.title": "Lector de Manga Autoalojado",
    "p4.desc": "Lector full-stack (backend en Go, frontend en React) con SQLite, OAuth2 de AniList, un descargador concurrente de CBZ y un scraper que gestiona Cloudflare y desencriptación de capítulos.",
    "p5.desc": "Extensión de Chrome que vincula fuentes externas a páginas de anime, manga o novelas en AniList, con almacenamiento local y recuperación sencilla.",
    "p6.desc": "Una colección de herramientas construidas con Svelte para Genshin Impact, incluyendo seguimiento del historial de deseos y otras utilidades relacionadas con el juego.",
    "p7.title": "Sitio Web Portfolio Personal",
    "p7.desc": "Este sitio — un portfolio con temática de página de estado, mostrando números reales del homelab, los proyectos y la búsqueda de empleo.",

    "link.frontend": "Frontend", "link.code": "Código", "link.live": "Sitio en Vivo",
    "gh.more": "Ver más en GitHub",
    "gh.desc1": "Proyectos principales y desarrollo",
    "gh.desc2": "Portfolio personal y proyectos web",

    "contact.tag": "// CONTACTO",
    "contact.title": "Contacto",
    "contact.email": "Correo", "contact.phone": "Teléfono", "contact.location": "Ubicación",
    "contact.relocate": "Disponible para cambio de residencia si el puesto se ajusta",
    "contact.gh1": "Trabajo profesional, relacionado con estudios",
    "contact.gh2": "Proyectos personales",

    "footer.rights": "Todos los derechos reservados."
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.setAttribute('aria-pressed', lang === 'es');
}

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  const toggle = document.getElementById('langToggle');
  toggle?.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyLanguage(currentLang);
  });
});
