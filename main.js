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
    'about.p1': 'Systems engineering student and infrastructure professional with hands-on production<br>experience in network, server, and hosting operations.',
    'about.p2': 'Design, build, and monitor infrastructure across <span class="ha">Linux</span>, <span class="ha">networking</span>, <span class="ha">virtualization</span>, and the <span class="ha">cloud</span> —<br>using <span class="ha">infrastructure as code</span>, containers, and <span class="ha">CI/CD</span> automation.',
    'about.p3': 'Day-to-day production work spans <span class="hc">monitoring and observability</span>, <span class="hc">incident response</span>,<br><span class="hc">backup &amp; recovery</span>, and <span class="hp">secure access and network defense</span>.',
    // Badges
    'badge.active': '● ACTIVE', 'badge.done': '✓ COMPLETED',
    // Experience
    'exp.1.title': 'Network Operations Specialist',
    'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitor Linux-based hosting and network infrastructure for a managed services provider, safeguarding uptime across customer environments.',
    'exp.1.b2': 'Troubleshoot infrastructure incidents — DNS, email delivery, and connectivity — using cPanel, BitNinja, Acronis, and SSH on production servers.',
    'exp.1.b3': 'Escalate complex networking incidents to engineering teams with detailed diagnostic reports and full documentation.',
    'exp.1.b4': 'Assist with bare-metal server assembly and rack mounting, run routine health checks, and maintain incident records in the ticketing platform.',
    'exp.2.title': 'Affirm Support & Customer Service Agent',
    'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Provided Tier 1 support for Affirm, a large-scale fintech SaaS platform — account access, payments, and transaction issues.',
    'exp.2.b2': 'Guided customers through troubleshooting across mobile and web platforms.',
    'exp.2.b3': 'Escalated unresolved cases to specialized teams with complete documentation in Salesforce CRM.',
    'exp.2.b4': 'Managed high volumes of concurrent interactions while maintaining consistent quality and follow-up.',
    // Education
    'edu.head': 'TYPE       INSTITUTION                                  DATE',
    'edu.1.name': 'Fidélitas University', 'edu.1.sub': 'B.S. in Systems Engineering — Santa Marta, CR', 'edu.1.date': 'Jan 2023<br>→ PRESENT',
    'edu.2.name': 'Colegio Victoria Bilingüe', 'edu.2.sub': 'Highschool Diploma in General Education — Tres Ríos, CR', 'edu.2.date': 'Jan 2010<br>→ Dec 2022',
    // Certs
    'cert.1.name': 'Web Development',
    'cert.7.name': 'Linux Unhatched', 'cert.8.name': 'Network Defense',
    'cert.9.name': 'Introduction to Networks',
    // Projects
    'proj.cmd': 'cat README.md', 'proj.title': 'Homelab — Cloud Engineer Portfolio',
    'proj.type': 'SELF-HOSTED', 'proj.planned': '// SERVICES',
    'spec.hw': 'HARDWARE: ', 'spec.net': 'NETWORK:  ', 'spec.hv': 'HYPERVISOR:',
    'svc.pihole': 'Pi-hole · DNS Filtering', 'svc.docker': 'Docker · Containers',
    'svc.terraform': 'Terraform · IaC', 'svc.grafana': 'Grafana · Dashboards',
    'svc.prometheus': 'Prometheus · Metrics', 'svc.homepage': 'Homepage · Dashboard',
    'svc.nextcloud': 'Nextcloud · Storage', 'svc.backups': 'ZFS + NFS · Backups',
    'svc.n8n': 'n8n · Automation',
    'spec.iac': 'IaC:      ', 'spec.repo': 'REPO:     ',
    'spec.k8s': 'ORCHESTR: ', 'spec.cicd': 'CI/CD:    ',
    'proj3.cmd': 'cat README.md', 'proj3.title': 'Personal Portfolio Website',
    'proj3.type': 'WEB APP', 'proj3.features': '// FEATURES',
    'spec3.stack': 'STACK:    ', 'spec3.i18n': 'I18N:     ', 'spec3.theme': 'THEME:    ', 'spec3.deploy': 'DEPLOY:   ',
    'svc3.glitch': 'Glitch & ASCII Rain', 'svc3.typewriter': 'Typewriter Effect',
    'svc3.bilingual': 'Bilingual EN/ES', 'svc3.darkmode': 'Dark/Light Mode',
    'proj2.cmd': 'cat README.md', 'proj2.title': 'Desserts In A Cup — Serverless E-commerce Platform',
    'proj2.type': 'SERVERLESS', 'proj2.features': '// FEATURES',
    'spec2.stack': 'STACK:    ', 'spec2.cloud': 'CLOUD:    ', 'spec2.db': 'DB:       ', 'spec2.order': 'ORDERS:   ',
    'svc2.cart': 'Client-side Cart', 'svc2.checkout': 'Automated Order Pipeline', 'svc2.admin': 'Role-gated Admin Dashboard', 'svc2.rules': 'Least-privilege Security Rules', 'svc2.responsive': 'Responsive Layout',
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
    'tag.incident': 'Incident Response', 'tag.netdef': 'Network Defense', 'tag.leastpriv': 'Least-privilege Access',
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
    'typer': ['Network Operations Specialist', 'Infrastructure & Systems Engineer', 'Linux & Networking', 'Security-minded Operations', 'Automation & IaC Practitioner'],
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
    'about.p1': 'Estudiante de ingeniería en sistemas y profesional de infraestructura con experiencia práctica<br>en operaciones de red, servidores y hosting en producción.',
    'about.p2': 'Diseño, construyo y monitoreo infraestructura en <span class="ha">Linux</span>, <span class="ha">redes</span>, <span class="ha">virtualización</span> y la <span class="ha">nube</span> —<br>usando <span class="ha">infraestructura como código</span>, contenedores y automatización <span class="ha">CI/CD</span>.',
    'about.p3': 'El trabajo diario en producción abarca <span class="hc">monitoreo y observabilidad</span>, <span class="hc">respuesta a incidentes</span>,<br><span class="hc">backup y recuperación</span>, y <span class="hp">acceso seguro y defensa de redes</span>.',
    // Badges
    'badge.active': '● ACTIVO', 'badge.done': '✓ COMPLETADO',
    // Experience
    'exp.1.title': 'Especialista en Operaciones de Red',
    'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitoreo de infraestructura de hosting y red basada en Linux para un proveedor de servicios administrados, resguardando el uptime en entornos de clientes.',
    'exp.1.b2': 'Diagnóstico de incidentes de infraestructura — DNS, entrega de correo y conectividad — usando cPanel, BitNinja, Acronis y SSH en servidores de producción.',
    'exp.1.b3': 'Escalamiento de incidentes de red complejos a equipos de ingeniería con informes de diagnóstico y documentación completa.',
    'exp.1.b4': 'Apoyo en ensamblaje y montaje en rack de servidores bare-metal, revisiones rutinarias de salud y registro de incidentes en la plataforma de tickets.',
    'exp.2.title': 'Agente de Soporte y Servicio al Cliente (Affirm)',
    'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Soporte Tier 1 para Affirm, plataforma SaaS fintech a gran escala — acceso a cuentas, pagos y transacciones.',
    'exp.2.b2': 'Guía a clientes en resolución de problemas en plataformas móviles y web.',
    'exp.2.b3': 'Escalamiento de casos sin resolver a equipos especializados con documentación completa en Salesforce CRM.',
    'exp.2.b4': 'Gestión de altos volúmenes de interacciones simultáneas manteniendo calidad y seguimiento.',
    // Education
    'edu.head': 'TIPO       INSTITUCIÓN                                  FECHA',
    'edu.1.name': 'Universidad Fidélitas', 'edu.1.sub': 'Ing. en Sistemas Computacionales — Santa Marta, CR', 'edu.1.date': 'Ene 2023<br>→ PRESENTE',
    'edu.2.name': 'Colegio Victoria Bilingüe', 'edu.2.sub': 'Bachillerato en Educación General — Tres Ríos, CR', 'edu.2.date': 'Ene 2010<br>→ Dic 2022',
    // Certs
    'cert.1.name': 'Desarrollo Web',
    'cert.7.name': 'Linux Unhatched', 'cert.8.name': 'Defensa de Redes',
    'cert.9.name': 'Introducción a Redes',
    // Projects
    'proj.cmd': 'cat README.md', 'proj.title': 'Homelab — Portafolio de Ingeniería Cloud',
    'proj.type': 'AUTO-ALOJADO', 'proj.planned': '// SERVICIOS',
    'spec.hw': 'HARDWARE: ', 'spec.net': 'RED:      ', 'spec.hv': 'HIPERVISOR:',
    'svc.pihole': 'Pi-hole · Filtrado DNS', 'svc.docker': 'Docker · Contenedores',
    'svc.terraform': 'Terraform · IaC', 'svc.grafana': 'Grafana · Dashboards',
    'svc.prometheus': 'Prometheus · Métricas', 'svc.homepage': 'Homepage · Dashboard',
    'svc.nextcloud': 'Nextcloud · Almacenamiento', 'svc.backups': 'ZFS + NFS · Backups',
    'svc.n8n': 'n8n · Automatización',
    'spec.iac': 'IaC:      ', 'spec.repo': 'REPO:     ',
    'spec.k8s': 'ORQUESTR: ', 'spec.cicd': 'CI/CD:    ',
    'proj3.cmd': 'cat README.md', 'proj3.title': 'Portafolio Personal',
    'proj3.type': 'APP WEB', 'proj3.features': '// FUNCIONALIDADES',
    'spec3.stack': 'STACK:    ', 'spec3.i18n': 'I18N:     ', 'spec3.theme': 'TEMA:     ', 'spec3.deploy': 'DEPLOY:   ',
    'svc3.glitch': 'Glitch y Lluvia ASCII', 'svc3.typewriter': 'Efecto Máquina de Escribir',
    'svc3.bilingual': 'Bilingüe ES/EN', 'svc3.darkmode': 'Modo Oscuro/Claro',
    'proj2.cmd': 'cat README.md', 'proj2.title': 'Desserts In A Cup — Plataforma E-commerce Serverless',
    'proj2.type': 'SERVERLESS', 'proj2.features': '// FUNCIONALIDADES',
    'spec2.stack': 'STACK:    ', 'spec2.cloud': 'CLOUD:    ', 'spec2.db': 'BD:       ', 'spec2.order': 'PEDIDOS:  ',
    'svc2.cart': 'Carrito en el Cliente', 'svc2.checkout': 'Pipeline de Pedidos Automatizado', 'svc2.admin': 'Panel de Admin por Roles', 'svc2.rules': 'Reglas de Seguridad Mínimas', 'svc2.responsive': 'Diseño Responsivo',
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
    'tag.incident': 'Respuesta a Incidentes', 'tag.netdef': 'Defensa de Redes', 'tag.leastpriv': 'Acceso de Mínimo Privilegio',
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
    'typer': ['Especialista en Operaciones de Red', 'Ingeniero de Infraestructura y Sistemas', 'Linux y Redes', 'Operaciones con Enfoque en Seguridad', 'Automatización e IaC'],
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
