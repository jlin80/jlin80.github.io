/* ── HAMBURGER MENU ─────────────────────────────────── */
(function hamburger() {
  const btn   = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.textContent = open ? '✕ CLOSE' : '☰ MENU';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.textContent = '☰ MENU';
    });
  });
})();

/* ── CLOCK ─────────────────────────────────────────── */
(function clock() {
  const el = document.getElementById('clock');
  setInterval(() => {
    const n = new Date(), p = x => String(x).padStart(2, '0');
    el.textContent = `${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
  }, 1000);
})();

/* ── THEME ─────────────────────────────────────────── */
(function theme() {
  const h   = document.documentElement;
  const btn = document.getElementById('theme-btn');

  const apply = t => {
    h.dataset.theme = t;
    btn.textContent = t === 'light' ? '◑ MODE' : '◐ MODE';
  };

  apply(localStorage.getItem('theme') || 'dark');

  btn.addEventListener('click', () => {
    const next = h.dataset.theme === 'light' ? 'dark' : 'light';
    apply(next);
    localStorage.setItem('theme', next);
  });
})();

/* ── LANGUAGE ──────────────────────────────────────── */
const t = {
  en: {
    // Nav
    'nav.home': 'HOME', 'nav.about': 'ABOUT', 'nav.exp': 'EXP',
    'nav.edu': 'EDU', 'nav.certs': 'CERTS', 'nav.proj': 'PROJ',
    'nav.skills': 'SKILLS', 'nav.contact': 'CONTACT',
    // Hero
    'hero.sys': '// SYSTEM BOOT — USER PROFILE LOADED //',
    'hero.scroll': '▼ SCROLL ▼',
    // Sections
    'sec.about': 'ABOUT_ME.TXT', 'sec.exp': 'EXPERIENCE.LOG',
    'sec.edu': 'EDUCATION.DIR', 'sec.certs': 'CERTIFICATIONS.DAT',
    'sec.proj': 'PROJECTS.SH', 'sec.skills': 'SKILLS.INI', 'sec.contact': 'CONTACT.SH',
    // About
    'about.cmd': 'cat profile.txt',
    'about.p1': 'Network Operations Specialist with hands-on experience supporting Linux-based hosting, server, and network<br>infrastructure in a managed services environment.',
    'about.p2': 'Experienced in <span class="ha">DNS</span>, <span class="ha">email delivery</span>, <span class="ha">server troubleshooting</span>, hosting platforms,<br><span class="ha">backups</span>, <span class="ha">virtualization</span>, and infrastructure monitoring.',
    'about.p3': 'Build and operate personal infrastructure (<span class="hc">Proxmox, Docker, Kubernetes</span>) and full-stack projects,<br>working toward <span class="hp">cloud infrastructure, infrastructure as code, and platform engineering</span>.',
    // Badges
    'badge.active': '● ACTIVE', 'badge.done': '✓ COMPLETED',
    // Experience
    'exp.1.title': 'Network Operations Specialist',
    'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitor Linux-based hosting, server, and network infrastructure for a managed services provider, supporting the availability of customer environments and hosted services.',
    'exp.1.b2': 'Troubleshoot production incidents involving DNS, email delivery, connectivity, SSL/TLS, hosting services, and server-level issues using SSH, cPanel, BitNinja, Exim, Dovecot, and Acronis.',
    'exp.1.b3': 'Investigate infrastructure incidents using service logs, DNS records, mail-flow analysis, network diagnostics, and system checks to identify root causes and appropriate remediation steps.',
    'exp.1.b4': 'Document troubleshooting procedures, findings, and resolutions in the ticketing system and escalate complex incidents to engineering teams with relevant technical evidence.',
    'exp.1.b5': 'Assist with bare-metal server assembly, rack mounting, hardware checks, system health monitoring, and routine datacenter operations.',
    'exp.1.b6': 'Support backup and recovery operations and investigate failures affecting customer infrastructure.',
    'exp.2.title': 'Affirm Support & Customer Service Agent',
    'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Provided Tier 1 technical and customer support for Affirm, resolving account access, payment, authentication, and transaction-related issues.',
    'exp.2.b2': 'Diagnosed issues across mobile and web platforms through browser compatibility testing, device-specific reproduction, and structured troubleshooting.',
    'exp.2.b3': 'Managed high volumes of concurrent interactions while maintaining consistent Salesforce CRM documentation, follow-up, and escalation quality.',
    // Education
    'edu.head': 'TYPE       INSTITUTION                                  DATE',
    'edu.1.name': 'Fidélitas University', 'edu.1.sub': 'B.S. in Systems Engineering — Santa Marta, CR', 'edu.1.date': 'Jan 2023<br>→ PRESENT',
    'edu.2.name': 'Colegio Victoria Bilingüe', 'edu.2.sub': 'Highschool Diploma in General Education — Tres Ríos, CR', 'edu.2.date': 'Jan 2010<br>→ Dec 2022',
    // Certs
    'cert.1.name': 'Web Development',
    'cert.8.name': 'Network Defense',
    'cert.9.name': 'Introduction to Networks',
    // Projects
    'proj.cmd': 'cat README.md', 'proj.title': 'Homelab — Infrastructure & Systems Lab',
    'proj.type': 'SELF-HOSTED', 'proj.planned': '// SERVICES',
    'spec.hw': 'HARDWARE: ', 'spec.net': 'NETWORK:  ', 'spec.hv': 'HYPERVISOR:',
    'hl.pve': 'Proxmox VE · LXC containers', 'hl.pihole': 'Pi-hole · DNS & ad-blocking', 'hl.vault': 'Vaultwarden · Password manager', 'hl.forgejo': 'Forgejo · Git hosting', 'hl.mtx': 'MediaMTX · RTSP streaming', 'hl.maria': 'MariaDB · Database', 'hl.hermes': 'Hermes · Multi-agent AI (6 profiles)', 'hl.k3s': 'k3s · Kubernetes', 'hl.docker': 'Docker · Containers', 'hl.zfs': 'ZFS + NFS · Nightly vzdump backups', 'hl.ts': 'Tailscale · Mesh VPN + exit node', 'hl.gha': 'GitHub Actions · Automation',
    'spec.iac': 'STORAGE:  ', 'spec.repo': 'REPO:     ',
    'spec.k8s': 'ORCHESTR: ', 'spec.cicd': 'CI/CD:    ',
    'proj3.cmd': 'cat README.md', 'proj3.title': 'Personal Portfolio Website',
    'proj3.type': 'WEB APP', 'proj3.features': '// FEATURES',
    'spec3.stack': 'STACK:    ', 'spec3.i18n': 'I18N:     ', 'spec3.theme': 'THEME:    ', 'spec3.deploy': 'DEPLOY:   ',
    'svc3.glitch': 'Glitch & ASCII Rain', 'svc3.typewriter': 'Typewriter Effect',
    'svc3.bilingual': 'Bilingual EN/ES', 'svc3.darkmode': 'Dark/Light Mode',
    'proj2.cmd': 'cat README.md', 'proj2.title': 'TapGoCR — SaaS NFC & QR Platform',
    'proj2.type': 'SaaS', 'proj2.features': '// FEATURES',
    'spec2.stack': 'STACK:    ', 'spec2.cloud': 'UI/AUTH:  ', 'spec2.db': 'DB:       ', 'spec2.order': 'DEPLOY:   ',
    'proj2.desc': 'Multi-tenant SaaS in production that connects NFC and QR tags to dynamic business landing pages, customer-managed links, and usage analytics. Includes an internal API that lets a team of AI agents (management, sales, operations, web studio) handle lead follow-up, quotes, orders, and email triage, with scoped per-agent keys, rate limiting, idempotent task intake, and an owner-approval gate on anything involving money, customers, manufacturing, or publishing. Deployed on shared hosting with automated backups and daily restore verification. Built with AI-assisted development.', 'svc2.cart': 'Multi-tenant SaaS', 'svc2.checkout': 'NFC / QR Tap Analytics', 'svc2.admin': 'AI Agent API · Scoped keys', 'svc2.rules': 'Owner Approval Queue', 'svc2.responsive': 'Spam scoring · Turnstile CAPTCHA', 'svc2.backups': 'Backups · Daily restore checks', 'svc2.tests': '385 Automated Tests',
    // Skills filter
    'filter.all': 'ALL', 'filter.support': 'SUPPORT', 'filter.infra': 'INFRA',
    'filter.os': 'OS', 'filter.cloud': 'CLOUD', 'filter.code': 'CODE', 'filter.lang': 'LANGUAGES',
    // Skill categories
    'sk.support': 'TECHNICAL_SUPPORT', 'sk.infra': 'INFRASTRUCTURE_&_NETWORKING',
    'sk.os': 'OPERATING_SYSTEMS', 'sk.cloud': 'CLOUD_&_DEVOPS',
    'sk.code': 'PROGRAMMING', 'sk.lang': 'LANGUAGES',
    // Skill tags
    'tag.tier1': 'Tier 1 Troubleshooting', 'tag.noc': 'NOC Operations',
    'tag.monitoring': 'Infrastructure Monitoring', 'tag.reproduction': 'Issue Reproduction',
    'tag.escalation': 'Escalation Workflows', 'tag.custSupport': 'Customer-facing Support',
    'tag.dns': 'DNS Troubleshooting', 'tag.connectivity': 'Connectivity Diagnostics',
    'tag.serverMon': 'Server Monitoring', 'tag.backup': 'Backup & Recovery',
    'tag.incident': 'Incident Response', 'tag.netdef': 'Network Defense',
    'tag.sql': 'SQL (basic)', 'tag.english': 'English (C1)',
    'tag.spanish': 'Spanish (native)', 'tag.cantonese': 'Cantonese (native)',
    // Contact
    'contact.cmd': './reach_out.sh',
    'contact.line1': '// Initializing contact protocols...',
    'contact.line2': '// All systems nominal. Ready for connection.',
    'contact.loc': 'LOCATION',
    'contact.lbl.name': 'name', 'contact.lbl.email': 'email', 'contact.lbl.msg': 'message',
    'contact.ph.name': 'Your name', 'contact.ph.email': 'your@email.com', 'contact.ph.msg': 'Type your message...',
    'contact.btn': '[ SEND_MESSAGE ]',
    'contact.sending': '// Transmitting...',
    'contact.ok': '// SUCCESS: Message queued. Will respond shortly.',
    'contact.err.required': '// ERROR: All fields are required.',
    'contact.err.email': '// ERROR: Invalid email address.',
    // Typewriter
    'typer': ['Network Operations Specialist', 'Linux & Networking', 'Hosting & Infrastructure Support', 'Homelab & Automation'],
  },
  es: {
    // Nav
    'nav.home': 'INICIO', 'nav.about': 'SOBRE MÍ', 'nav.exp': 'EXP',
    'nav.edu': 'EDU', 'nav.certs': 'CERTS', 'nav.proj': 'PROY',
    'nav.skills': 'HABIL.', 'nav.contact': 'CONTACTO',
    // Hero
    'hero.sys': '// SISTEMA INICIADO — PERFIL DE USUARIO CARGADO //',
    'hero.scroll': '▼ SCROLL ▼',
    // Sections
    'sec.about': 'SOBRE_MI.TXT', 'sec.exp': 'EXPERIENCIA.LOG',
    'sec.edu': 'EDUCACION.DIR', 'sec.certs': 'CERTIFICACIONES.DAT',
    'sec.proj': 'PROYECTOS.SH', 'sec.skills': 'HABILIDADES.INI', 'sec.contact': 'CONTACTO.SH',
    // About
    'about.cmd': 'cat perfil.txt',
    'about.p1': 'Especialista en operaciones de red con experiencia práctica en soporte de infraestructura de hosting,<br>servidores y redes basada en Linux, en un entorno de servicios administrados.',
    'about.p2': 'Con experiencia en <span class="ha">DNS</span>, <span class="ha">entrega de correo</span>, <span class="ha">diagnóstico de servidores</span>, plataformas de hosting,<br><span class="ha">backups</span>, <span class="ha">virtualización</span> y monitoreo de infraestructura.',
    'about.p3': 'Construyo y opero infraestructura personal (<span class="hc">Proxmox, Docker, Kubernetes</span>) y proyectos full-stack,<br>con la meta de avanzar hacia <span class="hp">infraestructura cloud, infraestructura como código e ingeniería de plataformas</span>.',
    // Badges
    'badge.active': '● ACTIVO', 'badge.done': '✓ COMPLETADO',
    // Experience
    'exp.1.title': 'Especialista en Operaciones de Red',
    'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitoreo de infraestructura de hosting, servidores y red basada en Linux para un proveedor de servicios administrados, apoyando la disponibilidad de los entornos y servicios alojados de clientes.',
    'exp.1.b2': 'Diagnóstico de incidentes en producción de DNS, entrega de correo, conectividad, SSL/TLS, servicios de hosting y servidores usando SSH, cPanel, BitNinja, Exim, Dovecot y Acronis.',
    'exp.1.b3': 'Investigación de incidentes de infraestructura mediante logs de servicios, registros DNS, análisis de flujo de correo, diagnósticos de red y revisiones del sistema para identificar causas raíz y pasos de remediación.',
    'exp.1.b4': 'Documentación de procedimientos, hallazgos y resoluciones en el sistema de tickets y escalamiento de incidentes complejos a equipos de ingeniería con evidencia técnica relevante.',
    'exp.1.b5': 'Apoyo en ensamblaje y montaje en rack de servidores bare-metal, revisiones de hardware, monitoreo de salud del sistema y operaciones rutinarias de datacenter.',
    'exp.1.b6': 'Soporte en operaciones de backup y recuperación e investigación de fallos que afectan la infraestructura de clientes.',
    'exp.2.title': 'Agente de Soporte y Servicio al Cliente (Affirm)',
    'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Soporte técnico y de servicio al cliente Tier 1 para Affirm, resolviendo problemas de acceso a cuentas, pagos, autenticación y transacciones.',
    'exp.2.b2': 'Diagnóstico de problemas en plataformas móviles y web mediante pruebas de compatibilidad de navegadores, reproducción por dispositivo y resolución estructurada de problemas.',
    'exp.2.b3': 'Gestión de altos volúmenes de interacciones simultáneas manteniendo documentación consistente en Salesforce CRM, seguimiento y calidad de escalamiento.',
    // Education
    'edu.head': 'TIPO       INSTITUCIÓN                                  FECHA',
    'edu.1.name': 'Universidad Fidélitas', 'edu.1.sub': 'Ing. en Sistemas Computacionales — Santa Marta, CR', 'edu.1.date': 'Ene 2023<br>→ PRESENTE',
    'edu.2.name': 'Colegio Victoria Bilingüe', 'edu.2.sub': 'Bachillerato en Educación General — Tres Ríos, CR', 'edu.2.date': 'Ene 2010<br>→ Dic 2022',
    // Certs
    'cert.1.name': 'Desarrollo Web',
    'cert.8.name': 'Defensa de Redes',
    'cert.9.name': 'Introducción a Redes',
    // Projects
    'proj.cmd': 'cat README.md', 'proj.title': 'Homelab — Laboratorio de Infraestructura y Sistemas',
    'proj.type': 'AUTO-ALOJADO', 'proj.planned': '// SERVICIOS',
    'spec.hw': 'HARDWARE: ', 'spec.net': 'RED:      ', 'spec.hv': 'HIPERVISOR:',
    'hl.pve': 'Proxmox VE · Contenedores LXC', 'hl.pihole': 'Pi-hole · DNS y bloqueo de anuncios', 'hl.vault': 'Vaultwarden · Gestor de contraseñas', 'hl.forgejo': 'Forgejo · Alojamiento Git', 'hl.mtx': 'MediaMTX · Streaming RTSP', 'hl.maria': 'MariaDB · Base de datos', 'hl.hermes': 'Hermes · IA multi-agente (6 perfiles)', 'hl.k3s': 'k3s · Kubernetes', 'hl.docker': 'Docker · Contenedores', 'hl.zfs': 'ZFS + NFS · Backups vzdump nocturnos', 'hl.ts': 'Tailscale · VPN mesh + exit node', 'hl.gha': 'GitHub Actions · Automatización',
    'spec.iac': 'ALMACEN.: ', 'spec.repo': 'REPO:     ',
    'spec.k8s': 'ORQUESTR: ', 'spec.cicd': 'CI/CD:    ',
    'proj3.cmd': 'cat README.md', 'proj3.title': 'Portafolio Personal',
    'proj3.type': 'APP WEB', 'proj3.features': '// FUNCIONALIDADES',
    'spec3.stack': 'STACK:    ', 'spec3.i18n': 'I18N:     ', 'spec3.theme': 'TEMA:     ', 'spec3.deploy': 'DEPLOY:   ',
    'svc3.glitch': 'Glitch y Lluvia ASCII', 'svc3.typewriter': 'Efecto Máquina de Escribir',
    'svc3.bilingual': 'Bilingüe ES/EN', 'svc3.darkmode': 'Modo Oscuro/Claro',
    'proj2.cmd': 'cat README.md', 'proj2.title': 'TapGoCR — Plataforma SaaS NFC y QR',
    'proj2.type': 'SaaS', 'proj2.features': '// FUNCIONALIDADES',
    'spec2.stack': 'STACK:    ', 'spec2.cloud': 'UI/AUTH:  ', 'spec2.db': 'BD:       ', 'spec2.order': 'DEPLOY:   ',
    'proj2.desc': 'SaaS multi-tenant en producción que conecta etiquetas NFC y QR con páginas de aterrizaje dinámicas, enlaces administrados por el cliente y analítica de uso. Incluye una API interna que permite a un equipo de agentes de IA (gestión, ventas, operaciones, estudio web) manejar seguimiento de leads, cotizaciones, pedidos y triage de correo, con llaves por agente, rate limiting, ingreso idempotente de tareas y una aprobación del dueño para todo lo que involucre dinero, clientes, manufactura o publicación. Desplegado en hosting compartido con backups automáticos y verificación diaria de restauración. Desarrollado con asistencia de IA.', 'svc2.cart': 'SaaS Multi-tenant', 'svc2.checkout': 'Analítica de Taps NFC / QR', 'svc2.admin': 'API para Agentes IA · Llaves por agente', 'svc2.rules': 'Cola de Aprobación del Dueño', 'svc2.responsive': 'Detección de spam · Turnstile CAPTCHA', 'svc2.backups': 'Backups · Verificación diaria de restauración', 'svc2.tests': '385 Tests Automatizados',
    // Skills filter
    'filter.all': 'TODO', 'filter.support': 'SOPORTE', 'filter.infra': 'INFRA',
    'filter.os': 'OS', 'filter.cloud': 'CLOUD', 'filter.code': 'CÓDIGO', 'filter.lang': 'IDIOMAS',
    // Skill categories
    'sk.support': 'SOPORTE_TÉCNICO', 'sk.infra': 'INFRAESTRUCTURA_Y_REDES',
    'sk.os': 'SISTEMAS_OPERATIVOS', 'sk.cloud': 'CLOUD_Y_DEVOPS',
    'sk.code': 'PROGRAMACIÓN', 'sk.lang': 'IDIOMAS',
    // Skill tags
    'tag.tier1': 'Soporte Tier 1', 'tag.noc': 'Operaciones NOC',
    'tag.monitoring': 'Monitoreo de Infraestructura', 'tag.reproduction': 'Reproducción de Errores',
    'tag.escalation': 'Flujos de Escalación', 'tag.custSupport': 'Soporte al Cliente',
    'tag.dns': 'Diagnóstico DNS', 'tag.connectivity': 'Diagnóstico de Conectividad',
    'tag.serverMon': 'Monitoreo de Servidores', 'tag.backup': 'Backup y Recuperación',
    'tag.incident': 'Respuesta a Incidentes', 'tag.netdef': 'Defensa de Redes',
    'tag.sql': 'SQL (básico)', 'tag.english': 'Inglés (C1)',
    'tag.spanish': 'Español (nativo)', 'tag.cantonese': 'Cantonés (nativo)',
    // Contact
    'contact.cmd': './contactar.sh',
    'contact.line1': '// Inicializando protocolos de contacto...',
    'contact.line2': '// Todos los sistemas nominales. Listo para conectar.',
    'contact.loc': 'UBICACIÓN',
    'contact.lbl.name': 'nombre', 'contact.lbl.email': 'correo', 'contact.lbl.msg': 'mensaje',
    'contact.ph.name': 'Tu nombre', 'contact.ph.email': 'tu@correo.com', 'contact.ph.msg': 'Escribe tu mensaje...',
    'contact.btn': '[ ENVIAR_MENSAJE ]',
    'contact.sending': '// Transmitiendo...',
    'contact.ok': '// ÉXITO: Mensaje en cola. Responderé pronto.',
    'contact.err.required': '// ERROR: Todos los campos son requeridos.',
    'contact.err.email': '// ERROR: Correo electrónico inválido.',
    // Typewriter
    'typer': ['Especialista en Operaciones de Red', 'Linux y Redes', 'Soporte de Hosting e Infraestructura', 'Homelab y Automatización'],
  }
};

(function lang() {
  const btn  = document.getElementById('lang-btn');
  let current = localStorage.getItem('lang') || 'en';

  const applyLang = l => {
    current = l;
    document.documentElement.lang = l;
    btn.classList.toggle('active', l === 'es');
    const tr = t[l];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = tr[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = tr[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = tr[el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });
  };

  applyLang(current);

  btn.addEventListener('click', () => {
    const next = current === 'en' ? 'es' : 'en';
    applyLang(next);
    localStorage.setItem('lang', next);
  });
})();

/* ── ASCII BACKGROUND ──────────────────────────────── */
(function asciiRain() {
  const el = document.getElementById('ascii-rain');
  if (!el) return;
  const chars = '01░▒▓█▄▀■□┌┐└┘├┤┬┴┼─│╔╗╚╝◆◇○●';
  const cols = Math.ceil(window.innerWidth / 9);
  const rows = Math.ceil(window.innerHeight / 15);
  let t = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++)
      t += Math.random() > .89 ? chars[Math.floor(Math.random() * chars.length)] : ' ';
    t += '\n';
  }
  el.textContent = t;
})();

/* ── TYPEWRITER ────────────────────────────────────── */
(function typer() {
  let pi = 0, ci = 0, del = false;
  const el = document.getElementById('typer');
  const phrases = () => t[localStorage.getItem('lang') || 'en'].typer;
  function tick() {
    const p = phrases()[pi % phrases().length];
    if (!del) {
      el.textContent = p.slice(0, ++ci);
      if (ci === p.length) { del = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = p.slice(0, --ci);
      if (ci === 0) { del = false; pi = (pi + 1) % phrases().length; }
    }
    setTimeout(tick, del ? 38 : 68);
  }
  setTimeout(tick, 700);
})();

/* ── INTERSECTION OBSERVER (reveal + certs) ────────── */
(function observe() {
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); }
    });
  }, { threshold: .1 });

  const certObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('loaded'), 200);
        certObs.unobserve(e.target);
      }
    });
  }, { threshold: .3 });

  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
  document.querySelectorAll('.cert-card').forEach(el => certObs.observe(el));
})();

/* ── ACTIVE NAV ────────────────────────────────────── */
(function activeNav() {
  const ids = ['hero', 'about', 'experience', 'education', 'certs', 'projects', 'skills', 'contact'];
  const links = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { threshold: .35 });
  ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
})();

/* ── SKILLS FILTER ─────────────────────────────────── */
(function skillFilter() {
  const btns = document.querySelectorAll('.fbtn');
  const cats = document.querySelectorAll('.sk-cat');

  const apply = cat => {
    btns.forEach(b => b.classList.toggle('on', b.dataset.cat === cat));
    cats.forEach(c => c.classList.toggle('hide', cat !== 'all' && c.dataset.cat !== cat));
  };

  const saved = localStorage.getItem('skillFilter');
  apply([...btns].some(b => b.dataset.cat === saved) ? saved : 'all');

  btns.forEach(btn => btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    apply(cat);
    localStorage.setItem('skillFilter', cat);
  }));
})();

/* ── SCROLL POSITION ──────────────────────────────── */
(function scrollPos() {
  if (!location.hash) {
    const saved = localStorage.getItem('scrollY');
    if (saved) window.scrollTo(0, parseInt(saved, 10));
  }

  let timer;
  window.addEventListener('scroll', () => {
    clearTimeout(timer);
    timer = setTimeout(() => localStorage.setItem('scrollY', window.scrollY), 150);
  }, { passive: true });
})();

/* ── RANDOM GLITCH ─────────────────────────────────── */
(function randomGlitch() {
  const overlay = document.getElementById('glitch-overlay');
  const heads   = document.querySelectorAll('.sec-head');

  function trigger() {
    // Screen-wide color flash
    overlay.classList.remove('active');
    void overlay.offsetWidth;
    overlay.classList.add('active');

    // Glitch a random visible section header
    const visible = [...heads].filter(h => {
      const r = h.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    });
    if (visible.length) {
      const h = visible[Math.floor(Math.random() * visible.length)];
      h.classList.add('glitching');
      setTimeout(() => h.classList.remove('glitching'), 400);
    }

    setTimeout(trigger, 5000 + Math.random() * 9000);
  }

  setTimeout(trigger, 3000 + Math.random() * 4000);
})();

/* ── CONTACT FORM ──────────────────────────────────── */
(function contactForm() {
  const form = document.getElementById('cform');
  const msg  = document.getElementById('fmsg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name       = document.getElementById('fn').value.trim();
    const email      = document.getElementById('fe').value.trim();
    const text       = document.getElementById('fm').value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const tr = t[localStorage.getItem('lang') || 'en'];
    if (!name || !email || !text) {
      msg.className = 'fmsg err';
      msg.textContent = tr['contact.err.required'];
      return;
    }
    if (!validEmail) {
      msg.className = 'fmsg err';
      msg.textContent = tr['contact.err.email'];
      return;
    }
    msg.className = 'fmsg';
    msg.textContent = tr['contact.sending'];
    setTimeout(() => {
      msg.className = 'fmsg ok';
      msg.textContent = tr['contact.ok'];
      form.reset();
    }, 900);
  });
})();
