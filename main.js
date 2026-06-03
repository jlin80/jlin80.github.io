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
    'about.p1': 'Systems Engineering student currently working in network operations<br>at a managed services data center.',
    'about.p2': 'Hands-on background in <span class="ha">infrastructure troubleshooting</span>,<br><span class="ha">server monitoring</span>, and <span class="ha">technical support</span>.',
    'about.p3': 'Focused on growing toward <span class="hc">cloud infrastructure</span>,<br><span class="hc">server administration</span>, and <span class="hp">web development</span>.',
    // Badges
    'badge.active': '● ACTIVE', 'badge.done': '✓ COMPLETED',
    // Experience
    'exp.1.title': 'Network Operations Specialist',
    'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitor hosting and network infrastructure for a managed services provider, ensuring uptime of servers, hosted applications, and network services across customer environments.',
    'exp.1.b2': 'Troubleshoot infrastructure incidents including DNS failures, email delivery issues, and connectivity outages using cPanel, BitNinja, and Acronis.',
    'exp.1.b3': 'Escalate complex networking incidents to engineering teams with detailed diagnostic reports and full troubleshooting documentation.',
    'exp.1.b4': 'Assist in server assembly and rack mounting; perform routine system checks and maintain accurate incident records in the ticketing platform.',
    'exp.2.title': 'Affirm Support & Customer Service Agent',
    'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Provided Tier 1 support for Affirm, a large-scale fintech SaaS platform, resolving user inquiries related to account access, payments, and transaction issues.',
    'exp.2.b2': 'Guided customers through troubleshooting across mobile and web platforms, including app reinstalls, browser compatibility testing, and device-specific issue reproduction.',
    'exp.2.b3': 'Escalated unresolved cases to specialized teams with complete interaction documentation in Salesforce CRM, ensuring accurate handoff.',
    'exp.2.b4': 'Managed high volumes of concurrent customer interactions while maintaining consistent quality and follow-up on open cases.',
    // Education
    'edu.head': 'TYPE       INSTITUTION                                  DATE',
    'edu.1.name': 'Fidélitas University', 'edu.1.sub': 'B.S. in Systems Engineering — Santa Marta, CR', 'edu.1.date': 'Jan 2023<br>→ PRESENT',
    'edu.2.name': 'Colegio Victoria Bilingüe', 'edu.2.sub': 'Highschool Diploma in General Education — Tres Ríos, CR', 'edu.2.date': 'Jan 2010<br>→ Dec 2022',
    // Certs
    'cert.1.name': 'Web Development', 'cert.2.name': 'Web Development',
    'cert.3.name': 'Intro to Cybersecurity', 'cert.4.name': 'Introduction to IoT',
    'cert.5.name': 'AI Fundamentals', 'cert.6.name': 'Introduction to Modern AI',
    'cert.7.name': 'Linux Unhatched', 'cert.8.name': 'Network Defense',
    'cert.9.name': 'JavaScript', 'cert.10.name': 'CSS Bootstrap', 'cert.11.name': 'HTML5 y CSS',
    // Projects
    'proj.cmd': 'cat README.md', 'proj.title': 'Personal Homelab Infrastructure',
    'proj.type': 'SELF-HOSTED', 'proj.planned': '// PLANNED_SERVICES',
    'spec.hw': 'HARDWARE: ', 'spec.up': 'UPGRADE:  ', 'spec.net': 'NETWORK:  ', 'spec.hv': 'HYPERVISOR:',
    'svc.nas': 'NAS · Local Backups', 'svc.pihole': 'Pi-hole · DNS Filtering', 'svc.mc': 'Minecraft · Game Server',
    'proj3.cmd': 'cat README.md', 'proj3.title': 'Personal Portfolio Website',
    'proj3.type': 'WEB APP', 'proj3.features': '// FEATURES',
    'spec3.stack': 'STACK:    ', 'spec3.i18n': 'I18N:     ', 'spec3.theme': 'THEME:    ', 'spec3.deploy': 'DEPLOY:   ',
    'svc3.glitch': 'Glitch & ASCII Rain', 'svc3.typewriter': 'Typewriter Effect',
    'svc3.bilingual': 'Bilingual EN/ES', 'svc3.darkmode': 'Dark/Light Mode',
    'proj2.cmd': 'cat README.md', 'proj2.title': 'Desserts In A Cup — E-commerce Web App',
    'proj2.type': 'WEB APP', 'proj2.features': '// FEATURES',
    'spec2.stack': 'STACK:    ', 'spec2.auth': 'AUTH:     ', 'spec2.db': 'DB:       ', 'spec2.order': 'ORDER:    ',
    'svc2.cart': 'Shopping Cart', 'svc2.checkout': 'Checkout Flow', 'svc2.admin': 'Admin Dashboard', 'svc2.responsive': 'Responsive Layout',
    // Skills filter
    'filter.all': 'ALL', 'filter.support': 'SUPPORT', 'filter.infra': 'INFRA',
    'filter.os': 'OS', 'filter.tools': 'TOOLS', 'filter.code': 'CODE', 'filter.lang': 'LANGUAGES',
    // Skill categories
    'sk.support': 'TECHNICAL_SUPPORT', 'sk.infra': 'INFRASTRUCTURE_&_NETWORKING',
    'sk.os': 'OPERATING_SYSTEMS', 'sk.tools': 'TOOLS_&_PLATFORMS',
    'sk.code': 'PROGRAMMING', 'sk.lang': 'LANGUAGES',
    // Skill tags
    'tag.tier1': 'Tier 1 Troubleshooting', 'tag.noc': 'NOC Operations',
    'tag.monitoring': 'Infrastructure Monitoring', 'tag.reproduction': 'Issue Reproduction',
    'tag.escalation': 'Escalation Workflows', 'tag.custSupport': 'Customer-facing Support',
    'tag.dns': 'DNS Troubleshooting', 'tag.connectivity': 'Connectivity Diagnostics',
    'tag.serverMon': 'Server Monitoring', 'tag.backup': 'Backup & Recovery',
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
    'typer': ['Systems Engineering Student', 'NOC Specialist', 'Cloud Infrastructure Learner', 'Linux & Homelab Enthusiast', 'Web Developer in Training'],
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
    'about.p1': 'Estudiante de Ingeniería en Sistemas trabajando en operaciones de red<br>en un centro de datos de servicios administrados.',
    'about.p2': 'Experiencia práctica en <span class="ha">resolución de problemas de infraestructura</span>,<br><span class="ha">monitoreo de servidores</span> y <span class="ha">soporte técnico</span>.',
    'about.p3': 'Enfocado en crecer hacia <span class="hc">infraestructura cloud</span>,<br><span class="hc">administración de servidores</span> y <span class="hp">desarrollo web</span>.',
    // Badges
    'badge.active': '● ACTIVO', 'badge.done': '✓ COMPLETADO',
    // Experience
    'exp.1.title': 'Especialista en Operaciones de Red',
    'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitorear infraestructura de hosting y red para un proveedor de servicios administrados, asegurando el tiempo activo de servidores, aplicaciones y servicios de red en entornos de clientes.',
    'exp.1.b2': 'Diagnosticar incidentes de infraestructura como fallos de DNS, problemas de entrega de correo y cortes de conectividad usando cPanel, BitNinja y Acronis.',
    'exp.1.b3': 'Escalar incidentes de red complejos a equipos de ingeniería con informes de diagnóstico detallados y documentación completa de resolución de problemas.',
    'exp.1.b4': 'Asistir en el ensamblaje y montaje en rack de servidores; realizar revisiones rutinarias del sistema y mantener registros precisos de incidentes en la plataforma de tickets.',
    'exp.2.title': 'Agente de Soporte y Servicio al Cliente (Affirm)',
    'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Brindar soporte Tier 1 para Affirm, una plataforma SaaS fintech a gran escala, resolviendo consultas sobre acceso a cuentas, pagos y problemas de transacciones.',
    'exp.2.b2': 'Guiar a clientes en resolución de problemas en plataformas móviles y web, incluyendo reinstalación de apps, pruebas de compatibilidad de navegadores y reproducción de errores por dispositivo.',
    'exp.2.b3': 'Escalar casos sin resolver a equipos especializados con documentación completa en Salesforce CRM, garantizando una transferencia precisa.',
    'exp.2.b4': 'Gestionar altos volúmenes de interacciones simultáneas con clientes, manteniendo calidad constante y seguimiento en casos abiertos.',
    // Education
    'edu.head': 'TIPO       INSTITUCIÓN                                  FECHA',
    'edu.1.name': 'Universidad Fidélitas', 'edu.1.sub': 'Ing. en Sistemas Computacionales — Santa Marta, CR', 'edu.1.date': 'Ene 2023<br>→ PRESENTE',
    'edu.2.name': 'Colegio Victoria Bilingüe', 'edu.2.sub': 'Bachillerato en Educación General — Tres Ríos, CR', 'edu.2.date': 'Ene 2010<br>→ Dic 2022',
    // Certs
    'cert.1.name': 'Desarrollo Web', 'cert.2.name': 'Desarrollo Web',
    'cert.3.name': 'Intro a Ciberseguridad', 'cert.4.name': 'Introducción a IoT',
    'cert.5.name': 'Fundamentos de IA', 'cert.6.name': 'Introducción a la IA Moderna',
    'cert.7.name': 'Linux Unhatched', 'cert.8.name': 'Defensa de Redes',
    'cert.9.name': 'JavaScript', 'cert.10.name': 'CSS Bootstrap', 'cert.11.name': 'HTML5 y CSS',
    // Projects
    'proj.cmd': 'cat README.md', 'proj.title': 'Infraestructura Homelab Personal',
    'proj.type': 'AUTO-ALOJADO', 'proj.planned': '// SERVICIOS_PLANEADOS',
    'spec.hw': 'HARDWARE: ', 'spec.up': 'MEJORA:   ', 'spec.net': 'RED:      ', 'spec.hv': 'HIPERVISOR:',
    'svc.nas': 'NAS · Copias de Seguridad', 'svc.pihole': 'Pi-hole · Filtrado DNS', 'svc.mc': 'Minecraft · Servidor de Juego',
    'proj3.cmd': 'cat README.md', 'proj3.title': 'Portafolio Personal',
    'proj3.type': 'APP WEB', 'proj3.features': '// FUNCIONALIDADES',
    'spec3.stack': 'STACK:    ', 'spec3.i18n': 'I18N:     ', 'spec3.theme': 'TEMA:     ', 'spec3.deploy': 'DEPLOY:   ',
    'svc3.glitch': 'Glitch y Lluvia ASCII', 'svc3.typewriter': 'Efecto Máquina de Escribir',
    'svc3.bilingual': 'Bilingüe ES/EN', 'svc3.darkmode': 'Modo Oscuro/Claro',
    'proj2.cmd': 'cat README.md', 'proj2.title': 'Desserts In A Cup — App Web de E-commerce',
    'proj2.type': 'APP WEB', 'proj2.features': '// FUNCIONALIDADES',
    'spec2.stack': 'STACK:    ', 'spec2.auth': 'AUTH:     ', 'spec2.db': 'BD:       ', 'spec2.order': 'PEDIDO:   ',
    'svc2.cart': 'Carrito de Compras', 'svc2.checkout': 'Flujo de Pago', 'svc2.admin': 'Panel de Admin', 'svc2.responsive': 'Diseño Responsivo',
    // Skills filter
    'filter.all': 'TODO', 'filter.support': 'SOPORTE', 'filter.infra': 'INFRA',
    'filter.os': 'OS', 'filter.tools': 'HERRAM.', 'filter.code': 'CÓDIGO', 'filter.lang': 'IDIOMAS',
    // Skill categories
    'sk.support': 'SOPORTE_TÉCNICO', 'sk.infra': 'INFRAESTRUCTURA_Y_REDES',
    'sk.os': 'SISTEMAS_OPERATIVOS', 'sk.tools': 'HERRAMIENTAS_Y_PLATAFORMAS',
    'sk.code': 'PROGRAMACIÓN', 'sk.lang': 'IDIOMAS',
    // Skill tags
    'tag.tier1': 'Soporte Tier 1', 'tag.noc': 'Operaciones NOC',
    'tag.monitoring': 'Monitoreo de Infraestructura', 'tag.reproduction': 'Reproducción de Errores',
    'tag.escalation': 'Flujos de Escalación', 'tag.custSupport': 'Soporte al Cliente',
    'tag.dns': 'Diagnóstico DNS', 'tag.connectivity': 'Diagnóstico de Conectividad',
    'tag.serverMon': 'Monitoreo de Servidores', 'tag.backup': 'Backup y Recuperación',
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
    'typer': ['Estudiante de Ingeniería en Sistemas', 'Especialista NOC', 'Aprendiz de Infraestructura Cloud', 'Entusiasta de Linux y Homelab', 'Desarrollador Web en Formación'],
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

  apply(localStorage.getItem('skillFilter') || 'all');

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
