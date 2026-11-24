/* Helpers ─────────────────────────────────────────────── */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer  = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const store = {
  get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};

/* ── I18N ─────────────────────────────────────────────── */
const t = {
  en: {
    'nav.home': 'HOME', 'nav.about': 'ABOUT', 'nav.exp': 'EXP', 'nav.proj': 'PROJ',
    'nav.skills': 'SKILLS', 'nav.edu': 'EDU', 'nav.contact': 'CONTACT',
    'boot.1': 'loading user profile', 'boot.2': 'mounting homelab cluster', 'boot.3': 'starting portfolio.service',
    'hero.scroll': '▼ SCROLL ▼',
    'stat.tests': 'automated tests<br>in production SaaS', 'stat.nodes': 'node Proxmox<br>cluster', 'stat.agents': 'AI agent profiles<br>self-hosted',
    'sec.about': 'ABOUT_ME.TXT', 'sec.exp': 'EXPERIENCE.LOG', 'sec.proj': 'PROJECTS.SH',
    'sec.skills': 'SKILLS.INI', 'sec.edu': 'EDUCATION.DAT', 'sec.contact': 'CONTACT.SH',
    'about.cmd': 'cat profile.txt',
    'about.p1': 'Network Operations Specialist supporting <span class="ha">Linux-based hosting, server and network infrastructure</span> in a managed services environment.',
    'about.p2': 'Daily work across <span class="ha">DNS</span>, <span class="ha">email delivery</span>, <span class="ha">server troubleshooting</span>, <span class="ha">backups</span>, virtualization and monitoring.',
    'about.p3': 'I also build and run my own infrastructure (<span class="hc">Proxmox, Docker, Kubernetes</span>) and ship full-stack products — heading toward <span class="hp">cloud infrastructure, infrastructure as code and platform engineering</span>.',
    'badge.active': '● ACTIVE', 'badge.done': '✓ COMPLETED', 'badge.live': '● IN PRODUCTION',
    'exp.1.title': 'Network Operations Specialist', 'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitor Linux-based hosting, server and network infrastructure for a managed services provider, keeping customer environments and hosted services available.',
    'exp.1.b2': 'Troubleshoot production incidents across DNS, email delivery, connectivity, SSL/TLS and server-level issues using SSH, cPanel, BitNinja, Exim, Dovecot and Acronis.',
    'exp.1.b3': 'Find root causes through service logs, DNS records, mail-flow analysis and network diagnostics; document resolutions and escalate complex cases to engineering with technical evidence.',
    'exp.1.b4': 'Support backup and recovery, investigate backup failures, and assist with bare-metal assembly, rack mounting and routine datacenter operations.',
    'exp.2.title': 'Affirm Support & Customer Service Agent', 'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Tier 1 technical support for Affirm: account access, payments, authentication and transaction issues, diagnosed across mobile and web with browser and device reproduction.',
    'exp.2.b2': 'Handled high volumes of concurrent interactions while keeping consistent Salesforce CRM documentation, follow-up and escalation quality.',
    'proj.cmd': 'cat README.md',
    'proj2.title': 'TapGoCR — SaaS NFC & QR Platform',
    'proj2.b1': 'Multi-tenant SaaS in production connecting NFC and QR tags to dynamic business landing pages, customer-managed links and usage analytics.',
    'proj2.b2': 'Internal API that lets a team of AI agents (management, sales, operations, web studio) run lead follow-up, quotes, orders and email triage — with scoped per-agent keys, rate limiting, idempotent task intake and an owner-approval gate on anything involving money, customers or publishing.',
    'proj2.b3': 'Owner back office with batch-approval queue, quote-to-order tracking with required evidence at each stage, and agent health monitoring that alerts via Discord.',
    'proj2.b4': 'Abuse protection with spam scoring and quarantine, Cloudflare Turnstile and a retention policy for stored emails.',
    'proj2.b5': 'Rollback-safe queued deploys, schema migrations and automated backups with daily restore verification.',
    'svc.tests': '385 automated tests',
    'proj.title': 'Homelab — Infrastructure & Systems Lab', 'proj.type': 'SELF-HOSTED',
    'hl.b1': '3-node Proxmox VE cluster on HP t610 thin clients and Debian Linux for hands-on virtualization, networking and storage.',
    'hl.b2': 'LXC services: Pi-hole (DNS), Vaultwarden, Forgejo (git), MediaMTX (RTSP) and MariaDB.',
    'hl.b3': 'Hermes: self-hosted multi-agent AI platform with six profiles (NOC, monitoring, development, research, job search, trading analysis) orchestrated via Telegram.',
    'hl.b4': 'ZFS pool + NFS backup target with automated nightly vzdump snapshots and retention policies.',
    'hl.b5': 'Tailscale mesh with exit node for secure remote administration; GitHub Actions for deployment automation.',
    'sk.infra': 'LINUX_&_INFRASTRUCTURE', 'sk.net': 'NETWORKING_&_HOSTING', 'sk.store': 'STORAGE_&_BACKUP',
    'sk.cont': 'CONTAINERS_&_MONITORING', 'sk.dev': 'DEVELOPMENT_&_AUTOMATION', 'sk.lang': 'LANGUAGES',
    'tag.backup': 'Backup & recovery', 'tag.ai': 'AI-assisted development', 'tag.test': 'Functional testing',
    'tag.english': 'English (C1)', 'tag.spanish': 'Spanish (native)', 'tag.cantonese': 'Cantonese (native)',
    'edu.name': 'Fidélitas University', 'edu.sub': 'B.S. in Systems Engineering — Santa Marta, CR', 'edu.date': 'Jan 2023 → PRESENT',
    'cert.1': 'Web Development', 'cert.2': 'Network Defense', 'cert.3': 'Introduction to Networks',
    'contact.cmd': './reach_out.sh', 'contact.line1': '// All systems nominal. Ready for connection.',
    'contact.cta': '[ SEND_EMAIL ]', 'contact.loc': 'LOCATION', 'foot': 'OPEN TO OPPORTUNITIES',
    'typer': ['Network Operations Specialist', 'Linux & Networking', 'Hosting & Infrastructure Support', 'Homelab & Automation'],
  },
  es: {
    'nav.home': 'INICIO', 'nav.about': 'SOBRE MÍ', 'nav.exp': 'EXP', 'nav.proj': 'PROY',
    'nav.skills': 'HABIL.', 'nav.edu': 'EDU', 'nav.contact': 'CONTACTO',
    'boot.1': 'cargando perfil de usuario', 'boot.2': 'montando clúster homelab', 'boot.3': 'iniciando portfolio.service',
    'hero.scroll': '▼ SCROLL ▼',
    'stat.tests': 'tests automatizados<br>en SaaS en producción', 'stat.nodes': 'nodos en clúster<br>Proxmox', 'stat.agents': 'perfiles de agentes IA<br>auto-alojados',
    'sec.about': 'SOBRE_MI.TXT', 'sec.exp': 'EXPERIENCIA.LOG', 'sec.proj': 'PROYECTOS.SH',
    'sec.skills': 'HABILIDADES.INI', 'sec.edu': 'EDUCACION.DAT', 'sec.contact': 'CONTACTO.SH',
    'about.cmd': 'cat perfil.txt',
    'about.p1': 'Especialista en operaciones de red que da soporte a <span class="ha">infraestructura de hosting, servidores y redes basada en Linux</span> en un entorno de servicios administrados.',
    'about.p2': 'Trabajo diario en <span class="ha">DNS</span>, <span class="ha">entrega de correo</span>, <span class="ha">diagnóstico de servidores</span>, <span class="ha">backups</span>, virtualización y monitoreo.',
    'about.p3': 'También construyo y opero mi propia infraestructura (<span class="hc">Proxmox, Docker, Kubernetes</span>) y lanzo productos full-stack — rumbo a <span class="hp">infraestructura cloud, infraestructura como código e ingeniería de plataformas</span>.',
    'badge.active': '● ACTIVO', 'badge.done': '✓ COMPLETADO', 'badge.live': '● EN PRODUCCIÓN',
    'exp.1.title': 'Especialista en Operaciones de Red', 'exp.1.co': '@ RackNation — San José, Costa Rica',
    'exp.1.b1': 'Monitoreo de infraestructura de hosting, servidores y red basada en Linux para un proveedor de servicios administrados, manteniendo disponibles los entornos y servicios de los clientes.',
    'exp.1.b2': 'Diagnóstico de incidentes en producción de DNS, entrega de correo, conectividad, SSL/TLS y servidores con SSH, cPanel, BitNinja, Exim, Dovecot y Acronis.',
    'exp.1.b3': 'Identificación de causas raíz mediante logs, registros DNS, análisis de flujo de correo y diagnósticos de red; documentación de resoluciones y escalamiento a ingeniería con evidencia técnica.',
    'exp.1.b4': 'Soporte en backup y recuperación, investigación de fallos de backup y apoyo en ensamblaje bare-metal, montaje en rack y operaciones de datacenter.',
    'exp.2.title': 'Agente de Soporte y Servicio al Cliente (Affirm)', 'exp.2.co': '@ Bill Gosling Outsourcing — Heredia, Costa Rica',
    'exp.2.b1': 'Soporte técnico Tier 1 para Affirm: acceso a cuentas, pagos, autenticación y transacciones, diagnosticados en móvil y web con reproducción por navegador y dispositivo.',
    'exp.2.b2': 'Gestión de altos volúmenes de interacciones simultáneas con documentación consistente en Salesforce CRM, seguimiento y calidad de escalamiento.',
    'proj.cmd': 'cat README.md',
    'proj2.title': 'TapGoCR — Plataforma SaaS NFC y QR',
    'proj2.b1': 'SaaS multi-tenant en producción que conecta etiquetas NFC y QR con páginas de aterrizaje dinámicas, enlaces administrados por el cliente y analítica de uso.',
    'proj2.b2': 'API interna que permite a un equipo de agentes IA (gestión, ventas, operaciones, estudio web) manejar seguimiento de leads, cotizaciones, pedidos y triage de correo — con llaves por agente, rate limiting, ingreso idempotente y aprobación del dueño para todo lo que involucre dinero, clientes o publicación.',
    'proj2.b3': 'Back office del dueño con cola de aprobación por lotes, seguimiento de cotización a pedido con evidencia obligatoria en cada etapa y monitoreo de salud de agentes con alertas por Discord.',
    'proj2.b4': 'Protección contra abuso con detección de spam y cuarentena, Cloudflare Turnstile y política de retención de correos.',
    'proj2.b5': 'Despliegues en cola con rollback seguro, migraciones de esquema y backups automáticos con verificación diaria de restauración.',
    'svc.tests': '385 tests automatizados',
    'proj.title': 'Homelab — Laboratorio de Infraestructura y Sistemas', 'proj.type': 'AUTO-ALOJADO',
    'hl.b1': 'Clúster Proxmox VE de 3 nodos sobre thin clients HP t610 y Debian Linux para práctica real de virtualización, redes y almacenamiento.',
    'hl.b2': 'Servicios LXC: Pi-hole (DNS), Vaultwarden, Forgejo (git), MediaMTX (RTSP) y MariaDB.',
    'hl.b3': 'Hermes: plataforma de IA multi-agente auto-alojada con seis perfiles (NOC, monitoreo, desarrollo, investigación, búsqueda de empleo, análisis de trading) orquestada vía Telegram.',
    'hl.b4': 'Pool ZFS + destino de backup NFS con snapshots vzdump nocturnos automáticos y políticas de retención.',
    'hl.b5': 'Malla Tailscale con exit node para administración remota segura; GitHub Actions para automatizar despliegues.',
    'sk.infra': 'LINUX_E_INFRAESTRUCTURA', 'sk.net': 'REDES_Y_HOSTING', 'sk.store': 'ALMACENAMIENTO_Y_BACKUP',
    'sk.cont': 'CONTENEDORES_Y_MONITOREO', 'sk.dev': 'DESARROLLO_Y_AUTOMATIZACIÓN', 'sk.lang': 'IDIOMAS',
    'tag.backup': 'Backup y recuperación', 'tag.ai': 'Desarrollo asistido por IA', 'tag.test': 'Pruebas funcionales',
    'tag.english': 'Inglés (C1)', 'tag.spanish': 'Español (nativo)', 'tag.cantonese': 'Cantonés (nativo)',
    'edu.name': 'Universidad Fidélitas', 'edu.sub': 'Ing. en Sistemas Computacionales — Santa Marta, CR', 'edu.date': 'Ene 2023 → PRESENTE',
    'cert.1': 'Desarrollo Web', 'cert.2': 'Defensa de Redes', 'cert.3': 'Introducción a Redes',
    'contact.cmd': './contactar.sh', 'contact.line1': '// Todos los sistemas nominales. Listo para conectar.',
    'contact.cta': '[ ENVIAR_CORREO ]', 'contact.loc': 'UBICACIÓN', 'foot': 'DISPONIBLE PARA NUEVAS OPORTUNIDADES',
    'typer': ['Especialista en Operaciones de Red', 'Linux y Redes', 'Soporte de Hosting e Infraestructura', 'Homelab y Automatización'],
  },
};

let currentLang = store.get('lang', 'en');
if (!t[currentLang]) currentLang = 'en';

(function lang() {
  const btn = document.getElementById('lang-btn');
  const apply = l => {
    currentLang = l;
    document.documentElement.lang = l;
    btn.classList.toggle('active', l === 'es');
    const tr = t[l];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = tr[el.dataset.i18n];
      if (v === undefined) return;
      if (v.includes('<')) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = tr[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });
  };
  apply(currentLang);
  btn.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'es' : 'en';
    apply(next);
    store.set('lang', next);
  });
})();

/* ── THEME ────────────────────────────────────────────── */
(function theme() {
  const h = document.documentElement, btn = document.getElementById('theme-btn');
  const apply = th => { h.dataset.theme = th; btn.textContent = th === 'light' ? '◑ MODE' : '◐ MODE'; };
  apply(store.get('theme', 'dark'));
  btn.addEventListener('click', () => {
    const next = h.dataset.theme === 'light' ? 'dark' : 'light';
    apply(next); store.set('theme', next);
  });
})();

/* ── HAMBURGER ────────────────────────────────────────── */
(function hamburger() {
  const btn = document.getElementById('nav-hamburger'), links = document.getElementById('nav-links');
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.textContent = open ? '✕ CLOSE' : '☰ MENU';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); btn.textContent = '☰ MENU';
  }));
})();

/* ── CLOCK ────────────────────────────────────────────── */
(function clock() {
  const el = document.getElementById('clock'), p = x => String(x).padStart(2, '0');
  const tick = () => { const n = new Date(); el.textContent = `${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`; };
  tick(); setInterval(tick, 1000);
})();

/* ── MATRIX RAIN (canvas, paused offscreen) ───────────── */
(function rain() {
  const cv = document.getElementById('rain');
  if (!cv || reduceMotion) return;
  const ctx = cv.getContext('2d');
  const hero = document.getElementById('hero');
  const chars = '01░▒▓█▄▀■□┌┐└┘├┤┬┴┼─│◆◇○●';
  const size = 14;
  let cols, drops, w, h, visible = true, last = 0;

  const color = () => getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#00ff41';
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.clientWidth; h = hero.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / size);
    drops = Array.from({ length: cols }, () => Math.random() * -h / size);
    ctx.clearRect(0, 0, w, h);
  }
  function frame(ts) {
    requestAnimationFrame(frame);
    if (!visible || ts - last < 55) return;       // ~18fps: subtle, cheap
    last = ts;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,.14)';            // fade trails
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = `${size - 2}px "Share Tech Mono", monospace`;
    ctx.fillStyle = color();
    ctx.globalAlpha = document.documentElement.dataset.theme === 'light' ? .16 : .13;
    for (let i = 0; i < cols; i++) {
      if (drops[i] > 0) ctx.fillText(chars[(Math.random() * chars.length) | 0], i * size, drops[i] * size);
      if (drops[i] * size > h && Math.random() > .975) drops[i] = Math.random() * -20;
      drops[i] += .6 + (i % 5) * .08;
    }
    ctx.globalAlpha = 1;
  }
  resize();
  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
  new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(hero);
  requestAnimationFrame(frame);
})();

/* ── NAME SCRAMBLE + TYPEWRITER ───────────────────────── */
(function heroText() {
  const name = document.getElementById('hero-name');
  const final = name.dataset.text;
  if (!reduceMotion) {
    const glyphs = '01#$%&@*+=<>/\\░▒▓';
    const start = performance.now() + 500, dur = 1100;
    name.classList.add('scrambling');
    name.textContent = ' '.repeat(final.length);
    (function step(now) {
      const p = Math.min(Math.max((now - start) / dur, 0), 1);
      const reveal = Math.floor(p * final.length);
      let s = '';
      for (let i = 0; i < final.length; i++)
        s += final[i] === ' ' ? ' ' : (now < start ? ' ' : i < reveal ? final[i] : glyphs[(Math.random() * glyphs.length) | 0]);
      name.textContent = s;
      if (p < 1) requestAnimationFrame(step);
      else { name.textContent = final; name.classList.remove('scrambling'); }
    })(performance.now());
  }

  const el = document.getElementById('typer');
  const phrases = () => t[currentLang].typer;
  if (reduceMotion) { el.textContent = phrases()[0]; return; }
  let pi = 0, ci = 0, del = false;
  (function tick() {
    const list = phrases(), p = list[pi % list.length];
    if (!del) {
      el.textContent = p.slice(0, ++ci);
      if (ci >= p.length) { del = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = p.slice(0, --ci);
      if (ci <= 0) { del = false; pi = (pi + 1) % list.length; }
    }
    setTimeout(tick, del ? 34 : 64);
  })();
})();

/* ── COUNT-UP STATS ───────────────────────────────────── */
(function counters() {
  const nums = document.querySelectorAll('[data-count]');
  const easeOut = x => 1 - Math.pow(1 - x, 4);
  nums.forEach(el => {
    const target = +el.dataset.count;
    if (reduceMotion) { el.textContent = target; return; }
    const delay = 1300, dur = 1400, t0 = performance.now() + delay;
    (function step(now) {
      const p = Math.min(Math.max((now - t0) / dur, 0), 1);
      el.textContent = Math.round(easeOut(p) * target);
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  });
})();

/* ── REVEAL / STAGGER / SCROLL-SPY ────────────────────── */
(function observe() {
  document.querySelectorAll('[data-stagger]').forEach(g =>
    [...g.children].forEach((c, i) => c.style.setProperty('--i', i)));

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, [data-stagger]').forEach(el => io.observe(el));

  const ids = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
  const links = document.querySelectorAll('.nav-links a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  ids.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });
})();

/* ── SCROLL PROGRESS ──────────────────────────────────── */
(function progress() {
  const bar = document.getElementById('progress');
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();

/* ── CURSOR SPOTLIGHT ─────────────────────────────────── */
(function spotlight() {
  if (!finePointer || reduceMotion) return;
  document.addEventListener('pointermove', e => {
    const el = e.target.closest && e.target.closest('.spot');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
})();

/* ── HEADING GLITCH (subtle, visible headers only) ────── */
(function headGlitch() {
  if (reduceMotion) return;
  const heads = document.querySelectorAll('.sec-head');
  (function trigger() {
    const vis = [...heads].filter(h => {
      const r = h.getBoundingClientRect();
      return r.top > 40 && r.bottom < window.innerHeight && h.closest('.reveal.in');
    });
    if (vis.length) {
      const h = vis[(Math.random() * vis.length) | 0];
      h.classList.add('glitching');
      setTimeout(() => h.classList.remove('glitching'), 400);
    }
    setTimeout(trigger, 6000 + Math.random() * 8000);
  })();
})();
