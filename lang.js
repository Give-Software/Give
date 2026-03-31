/* ═══════════════════════════════════════════════════════
   Give Software 2.0  —  Language Switcher (PT / EN)
   Estratégia: elementos-chave recebem data-i18n="key"
   O padrão é PT. EN é carregado ao alternar.
   CSS Premium injetado automaticamente — não duplicar nos HTMLs.
═══════════════════════════════════════════════════════ */

/* ─── INJECT PREMIUM LANG TOGGLE CSS ─── */
(function injectLangStyles() {
  const style = document.createElement('style');
  style.id = 'gs-lang-styles';
  style.textContent = `
    /* ══ PREMIUM LANGUAGE TOGGLE ══ */
    .lang-toggle {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0;
      padding: 4px;
      border-radius: 100px;
      border: 1px solid rgba(46,196,165,0.2);
      background: rgba(46,196,165,0.04);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      cursor: pointer;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
      outline: none;
      user-select: none;
    }
    .lang-toggle:hover {
      border-color: rgba(46,196,165,0.55);
      box-shadow: 0 0 18px rgba(46,196,165,0.15), inset 0 0 10px rgba(46,196,165,0.04);
    }
    .lang-toggle:focus-visible {
      box-shadow: 0 0 0 2px rgba(46,196,165,0.5);
    }

    /* Sliding ink pill */
    .lt-slider {
      position: absolute;
      top: 4px;
      left: 4px;
      height: calc(100% - 8px);
      width: calc(50% - 4px);
      border-radius: 100px;
      background: linear-gradient(135deg, #2ec4a5, #1a9982);
      box-shadow: 0 2px 12px rgba(46,196,165,0.45), inset 0 1px 0 rgba(255,255,255,0.15);
      transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), width 0.38s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 0;
      pointer-events: none;
    }
    .lang-toggle[data-lang="en"] .lt-slider {
      transform: translateX(100%);
    }

    /* Globe icon */
    .lt-globe {
      position: relative;
      z-index: 1;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-right: 2px;
      transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
      color: rgba(46,196,165,0.7);
    }
    .lang-toggle:hover .lt-globe {
      transform: rotate(20deg);
      color: rgba(46,196,165,1);
    }
    .lang-toggle[data-lang="en"] .lt-globe {
      transform: rotate(180deg);
    }
    .lang-toggle[data-lang="en"]:hover .lt-globe {
      transform: rotate(200deg);
    }

    /* Labels */
    .lt-pt, .lt-en {
      position: relative;
      z-index: 1;
      font-family: 'DM Sans', monospace, sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      padding: 5px 14px;
      border-radius: 100px;
      transition: color 0.35s ease;
      text-transform: uppercase;
    }
    .lt-pt { color: #fff; }
    .lt-en { color: rgba(255,255,255,0.4); }

    .lang-toggle[data-lang="en"] .lt-pt { color: rgba(255,255,255,0.4); }

    /* Separator dot — hidden now (replaced by slider) */
    .lt-sep, .lt-dot { display: none; }

    /* Nav right spacing */
    .nav-right { display: flex; align-items: center; gap: 1rem; }

    /* --- GLOBAL MOBILE ERRORS FIX --- */
    @media (max-width: 900px) {
      .nav-right { gap: 0.8rem; }
      .mobile-menu-btn { 
        display: flex !important; justify-content: center; align-items: center; 
        width: 44px; height: 44px; cursor: pointer; z-index: 10001; 
        margin-right: -10px;
      }
      .mobile-menu-btn span { width: 24px; height: 2px; background: #fff; transition: 0.3s; }
      .mobile-menu-btn span:nth-child(2) { margin: 6px 0; }
      .mobile-menu-overlay { z-index: 100000 !important; }
    }
    
    /* Hide custom cursor on touch devices to prevent interaction blocking */
    @media (hover: none) and (pointer: coarse) {
      #cursor-dot, #cursor-ring { display: none !important; opacity: 0 !important; pointer-events: none !important; }
      * { cursor: auto !important; }
    }
  `;
  document.head.insertBefore(style, document.head.firstChild);
})();

const TRANSLATIONS = {
  pt: {
    /* ── NAV ── */
    'nav.home'        : 'Início',
    'nav.projects'    : 'Projetos',
    'nav.services'    : 'Serviços',
    'nav.about'       : 'Sobre nós',
    'nav.cta'         : 'Iniciar Projeto',

    /* ── INDEX HERO ── */
    'hero.tag'        : 'GIVE SOFTWARE // 2026',
    'hero.h1a'        : 'Construímos',
    'hero.h1b'        : 'o futuro',
    'hero.h1c'        : 'digital.',
    'hero.sub'        : 'Produtos de software premium para empresas que querem liderar. Web. Mobile. IA. Do conceito ao deploy.',
    'hero.btn.start'  : 'Iniciar Projeto',
    'hero.btn.work'   : 'Ver Projetos',
    'hero.badge.title': 'Entregas em dia',
    'hero.badge.sub'  : 'Taxa de sucesso 100%',

    /* ── TRUSTED ── */
    'trusted.label'   : 'Confiado por empresas que constroem o amanhã',

    /* ── PROCESS ── */
    'process.pre'     : 'Como trabalhamos',
    'process.title'   : 'O Processo Give',
    'process.s1.title': 'Briefing & Escopo',
    'process.s1.desc' : 'Analisamos profundamente o seu desafio e retornamos uma proposta técnica detalhada em até 24h.',
    'process.s2.title': 'Design de Arquitetura',
    'process.s2.desc' : 'Nossa equipe define a stack ideal, a arquitetura e o roadmap de entrega antes de escrever uma linha de código.',
    'process.s3.title': 'Build & Entrega',
    'process.s3.desc' : 'Sprints semanais, total transparência. Você acompanha cada etapa em tempo real até o deploy final.',

    /* ── SERVICES ── */
    'services.pre'    : 'O que entregamos',
    'services.title'  : 'Serviços',
    'service.web.label'   : 'Web Platform',
    'service.web.title'   : 'Desenvolvimento Web',
    'service.web.desc'    : 'Plataformas web de alta performance, escaláveis e otimizadas para SEO — de landing pages a ERPs.',
    'service.mobile.label': 'Mobile App',
    'service.mobile.title': 'Apps Mobile',
    'service.mobile.desc' : 'Apps nativos e híbridos para iOS/Android com UX fluida e performance de nível enterprise.',
    'service.ai.label'    : 'AI & Automação',
    'service.ai.title'    : 'Inteligência Artificial',
    'service.ai.desc'     : 'Agentes inteligentes, automações de processos e integração de LLMs no seu fluxo operacional.',
    'service.cloud.label' : 'Cloud Infra',
    'service.cloud.title' : 'Infraestrutura Cloud',
    'service.cloud.desc'  : 'Arquiteturas cloud-native na AWS, GCP e Azure. Escalabilidade automática e uptime de 99,99%.',
    'service.design.label': 'UX/UI Design',
    'service.design.title': 'Design de Produto',
    'service.design.desc' : 'Interfaces que combinam estética premium com usabilidade impecável. Do wireframe ao design system.',

    /* ── JOURNEY ── */
    'journey.pre'     : 'Nossa capacidade',
    'journey.web.title'   : 'Plataformas Web de Próxima Geração',
    'journey.web.desc'    : 'Aplicações rápidas, seguras e escaláveis que crescem com seu negócio. Arquitetura de microsserviços.',
    'journey.mobile.title': 'Experiências Mobile Nativas',
    'journey.mobile.desc' : 'Apps iOS e Android que rivalizam com os maiores produtos do mercado. Flutter & React Native.',
    'journey.ai.title'    : 'Automação & Agentes de IA',
    'journey.ai.desc'     : 'Eliminate processos manuais. Treine agentes de IA no seu fluxo operacional existente.',

    /* ── ECOSYSTEM ── */
    'eco.pre'         : 'Integrações nativas',
    'eco.title'       : 'Ecossistema de Tecnologias',
    'eco.sub'         : 'Trabalhamos com as melhores ferramentas de cada categoria para garantir desempenho máximo.',

    /* ── NUMBERS ── */
    'numbers.pre'     : 'Resultados comprovados',
    'numbers.title'   : 'Give em Números',
    'numbers.p1.lbl'  : 'Projetos entregues',
    'numbers.p2.lbl'  : 'Engenheiros especialistas',
    'numbers.p3.lbl'  : 'Retenção de clientes',
    'numbers.p4.lbl'  : 'No prazo',

    /* ── CTA ── */
    'cta.status'      : 'Abertos para novos projetos — Q2 2026',
    'cta.h2a'         : 'Pronto para construir',
    'cta.h2b'         : 'algo real?',
    'cta.sub'         : 'Compartilhe sua ideia. Retornamos com uma proposta técnica em até 24 horas. Sem enrolação.',
    'cta.btn.start'   : 'Iniciar um Projeto',
    'cta.btn.call'    : 'Agendar uma Conversa',
    'cta.trust.t1'    : 'Tempo de resposta',
    'cta.trust.t2'    : 'Kickoff',
    'cta.trust.t3'    : 'Disponível',
    'cta.trust.t4'    : 'No prazo',
    'cta.card.label'  : 'O que acontece depois',
    'cta.step1.title' : 'Você envia um brief',
    'cta.step1.desc'  : 'Nos fale sua ideia, prazo e orçamento. Sem papelada.',
    'cta.step2.title' : 'Nós definimos o escopo',
    'cta.step2.desc'  : 'Nossa equipe analisa e retorna uma proposta técnica detalhada em 24h.',
    'cta.step3.title' : 'Construímos e entregamos',
    'cta.step3.desc'  : 'Entrega no prazo, total transparência, updates semanais, sem surpresas.',

    /* ── FOOTER ── */
    'footer.desc'     : 'Construímos todo tipo de solução. Web. Mobile. Automação. Tudo.',
    'footer.copy'     : '© 2026 Give Software. Construído com propósito.',

    /* ── MODAL BRIEFING ── */
    'modal.close'      : '[ ESC ] FECHAR',
    'modal.s1.label'   : '01 // O CONCEITO',
    'modal.s1.title'   : 'O que vamos construir?',
    'modal.s1.ph'      : 'Um app fintech, um agente de IA, um SaaS...',
    'modal.s1.hint'    : 'Pressione Enter ↵ para continuar.',
    'modal.s2.label'   : '02 // ECOSSISTEMA',
    'modal.s2.title'   : 'Selecione a plataforma.',
    'modal.s2.opt1'    : 'PLATAFORMA WEB',
    'modal.s2.opt2'    : 'APP MOBILE',
    'modal.s2.opt3'    : 'IA & AUTOMAÇÃO',
    'modal.s2.opt4'    : 'FULL STACK (TUDO)',
    'modal.s3.label'   : '03 // PRAZO',
    'modal.s3.title'   : 'Quando lançamos?',
    'modal.s3.opt1'    : 'O QUANTO ANTES',
    'modal.s3.opt2'    : '1-3 MESES',
    'modal.s3.opt3'    : '3-6 MESES',
    'modal.s3.opt4'    : 'FLEXÍVEL',
    'modal.s4.label'   : '04 // CONTATO',
    'modal.s4.title'   : 'Para onde enviamos a proposta?',
    'modal.s4.ph'      : 'email@empresa.com',
    'modal.submit'     : 'INICIAR SEQUÊNCIA',
    'modal.success'    : '[ STATUS: BRIEF RECEBIDO. NOSSOS ENGENHEIROS ESTÃO ANALISANDO. ]',

    /* ── SOBRE ── */
    'sobre.hero.tag'   : 'GIVE SOFTWARE // EST. 2025',
    'sobre.hero.h1a'   : 'Construindo o',
    'sobre.hero.h1b'   : 'Futuro.',
    'sobre.hero.desc'  : 'Somos um coletivo de desenvolvedores obcecados em transformar desafios técnicos em soluções de alto impacto.',
    'sobre.m1.lbl'     : 'Anos de Atuação',
    'sobre.m2.lbl'     : 'Engenheiros de Elite',
    'sobre.m3.lbl'     : 'Retenção de Clientes',
    'sobre.traj.pre'   : 'Nossa trajetória',
    'sobre.traj.title' : 'A Origem Give',
    'sobre.mile1.year' : '2025 — The Beginning',
    'sobre.mile1.title': '3 Developers. One Vision.',
    'sobre.mile1.p'    : 'A Give nasceu da união de três amigos com habilidades complementares: Eduardo Pimentel (Automação), Victor Menezes (Mobile/UX) e Guilherme Bomfim (Web/Backend). O que começou como parceria evoluiu para a missão de criar soluções que realmente impactam pessoas.',
    'sobre.mile2.year' : 'Abril 2025 — The Creation',
    'sobre.mile2.title': 'From Projects to a Software House',
    'sobre.mile2.p'    : 'Com o crescimento das demandas, nasce a Give Software House. Nosso propósito: transformar conhecimento técnico em soluções personalizadas, resolvendo problemas reais de pessoas e empresas.',
    'sobre.mile3.year' : 'Novembro 2025 — First Major Delivery',
    'sobre.mile3.title': 'E-commerce Parafina Bronze',
    'sobre.mile3.p'    : 'Entregamos nosso primeiro grande projeto: o e-commerce premium da Parafina Bronze. Lançado estrategicamente na Black Friday, consolidou nossa expertise em performance e experiência do usuário.',
    'sobre.mile4.year' : '2026 — Agora',
    'sobre.mile4.title': 'Building the Future',
    'sobre.mile4.p'    : 'Evoluímos para uma software house focada em inovação. Atuamos em sistemas personalizados, apps, automações e plataformas escaláveis. Nosso foco é gerar resultado e eficiência.',
    'sobre.why.pre'    : 'Por que a Give?',
    'sobre.why.title'  : 'O Protocolo Give',
    'sobre.team.pre'   : 'Os Cérebros',
    'sobre.team.title' : 'Conheça o Time Central',
    'sobre.cta.h2a'    : 'Agora que nos conhece,',
    'sobre.cta.h2b'    : 'vamos construir juntos.',
    'sobre.cta.sub'    : 'Você viu nossa metodologia e conheceu o time. Pronto para deixar a Give Software transformar sua visão em realidade?',

    /* ── PROJETOS ── */
    'proj.hero.tag'    : 'MAIS RECENTE // Q1 2026',
    'proj.hero.desc'   : 'Escalando uma plataforma bancária descentralizada para 2M de usuários com latência ultra-baixa e protocolos de segurança bancária.',
    'proj.m1.lbl'      : 'Uptime Alcançado',
    'proj.m2.lbl'      : 'Tempo Médio de Resposta',
    'proj.m3.lbl'      : 'Retenção de Usuários',
    'proj.port.pre'    : 'O Portfólio',
    'proj.port.title'  : 'Trabalhos\nSelecionados.',
    'proj.filter.all'  : 'Todos',
    'proj.filter.sites': 'Sites',
    'proj.filter.apps' : 'Aplicativos',
    'proj.filter.auto' : 'Automação',
    'proj.filter.ai'   : 'Sistemas IA',
    'proj.filter.ecommerce': 'Ecommerce',
    'proj.p1.exc'      : 'Interface de trading de alta frequência com sistemas de feedback líquido em tempo real.',
    'proj.p2.exc'      : 'Experiência de compra de nova geração com visualização de produto em AR.',
    'proj.p3.exc'      : 'Plataforma de diagnósticos preditivos usando arquiteturas LLM proprietárias.',
    'proj.p4.exc'      : 'Gerenciamento automatizado de infraestrutura para redes de energia em grande escala.',
    'proj.p5.exc'      : 'Digitalização completa do pilar de análise, reduzindo tempo de preenchimento em 67%.',

    /* ── SERVIÇOS ── */
    'serv.hero.tag'    : 'NOSSAS CAPACIDADES // 2026',
    'serv.hero.h1a'    : 'Excelência em',
    'serv.hero.h1b'    : 'Engenharia.',
    'serv.hero.desc'   : 'Hub interativo de expertise. Explore nossas capacidades principais, de automações inteligentes a plataformas web de alta performance.',
    'serv.m1.lbl'      : 'Projetos Entregues',
    'serv.m2.lbl'      : 'Qualidade de Código',
    'serv.m3.lbl'      : 'Meta de Escalabilidade',
    'serv.method.pre'  : 'O que fazemos',
    'serv.method.title': 'Nossos Serviços',
    'serv.s1.num'      : '01 // CORE',
    'serv.s1.title'    : 'Desenvolvimento Web',
    'serv.s1.desc'     : 'Construímos plataformas web de alto desempenho, escaláveis e totalmente otimizadas para SEO.',
    'serv.s2.num'      : '02 // NATIVE',
    'serv.s2.title'    : 'Desenvolvimento Mobile',
    'serv.s2.desc'     : 'Criamos aplicativos nativos e híbridos para iOS e Android com experiências fluidas e intuitivas.',
    'serv.s3.num'      : '03 // INTELLIGENCE',
    'serv.s3.title'    : 'Automação',
    'serv.s3.desc'     : 'Eliminamos processos manuais repetitivos através de fluxos inteligentes e integração de IA.',
    'serv.s4.num'      : '04 // INTERFACE',
    'serv.s4.title'    : 'UX e UI Design',
    'serv.s4.desc'     : 'Design centrado no usuário que combina estética premium com usabilidade impecável.',
    'serv.s5.num'      : '05 // COMMERCE',
    'serv.s5.title'    : 'E-commerce',
    'serv.s5.desc'     : 'Plataformas de vendas robustas focadas em conversão com checkout rápido e pagamentos integrados.',
    'serv.funnel.pre'  : 'Monte seu projeto',
    'serv.funnel.title': 'Arquiteto de Soluções',
    'serv.funnel.sub'  : 'Responda 3 perguntas rápidas e receba uma recomendação de tecnologia personalizada.',
    'serv.q1.title'    : 'Qual é seu objetivo principal?',
    'serv.q1.opt1'     : 'Velocidade ao Mercado',
    'serv.q1.opt2'     : 'Escala Extrema',
    'serv.q1.opt3'     : 'UX Premiado',
    'serv.q2.title'    : 'Qual setor estamos entrando?',
    'serv.q2.opt1'     : 'Fintech / Banco',
    'serv.q2.opt2'     : 'E-commerce / Varejo',
    'serv.q2.opt3'     : 'SaaS / B2B',
    'serv.q2.back'     : '← Voltar',
    'serv.q3.title'    : 'Tamanho esperado do projeto?',
    'serv.q3.opt1'     : 'MVP Startup',
    'serv.q3.opt2'     : 'App em Crescimento',
    'serv.q3.opt3'     : 'Suite Enterprise',
    'serv.q3.back'     : '← Voltar',
    'serv.result.title': 'Arquitetura Gerada',
    'serv.result.new'  : 'Nova Sessão',
  },
  en: {
    /* ── NAV ── */
    'nav.home'        : 'Home',
    'nav.projects'    : 'Projects',
    'nav.services'    : 'Services',
    'nav.about'       : 'About us',
    'nav.cta'         : 'Start a Project',

    /* ── INDEX HERO ── */
    'hero.tag'        : 'GIVE SOFTWARE // 2026',
    'hero.h1a'        : 'We build',
    'hero.h1b'        : 'the digital',
    'hero.h1c'        : 'future.',
    'hero.sub'        : 'Premium software products for companies that want to lead. Web. Mobile. AI. From concept to deploy.',
    'hero.btn.start'  : 'Start a Project',
    'hero.btn.work'   : 'View Projects',
    'hero.badge.title': 'On-time delivery',
    'hero.badge.sub'  : '100% success rate',

    /* ── TRUSTED ── */
    'trusted.label'   : 'Trusted by companies building tomorrow',

    /* ── PROCESS ── */
    'process.pre'     : 'How we work',
    'process.title'   : 'The Give Process',
    'process.s1.title': 'Briefing & Scope',
    'process.s1.desc' : 'We deeply analyze your challenge and return a detailed technical proposal within 24h.',
    'process.s2.title': 'Architecture Design',
    'process.s2.desc' : 'Our team defines the ideal stack, architecture and delivery roadmap before writing a single line of code.',
    'process.s3.title': 'Build & Delivery',
    'process.s3.desc' : 'Weekly sprints, full transparency. You follow every step in real-time until final deployment.',

    /* ── SERVICES ── */
    'services.pre'    : 'What we deliver',
    'services.title'  : 'Services',
    'service.web.label'   : 'Web Platform',
    'service.web.title'   : 'Web Development',
    'service.web.desc'    : 'High-performance, scalable, SEO-optimized web platforms — from landing pages to ERPs.',
    'service.mobile.label': 'Mobile App',
    'service.mobile.title': 'Mobile Apps',
    'service.mobile.desc' : 'Native and hybrid iOS/Android apps with fluid UX and enterprise-level performance.',
    'service.ai.label'    : 'AI & Automation',
    'service.ai.title'    : 'Artificial Intelligence',
    'service.ai.desc'     : 'Intelligent agents, process automation and LLM integration into your operational flow.',
    'service.cloud.label' : 'Cloud Infra',
    'service.cloud.title' : 'Cloud Infrastructure',
    'service.cloud.desc'  : 'Cloud-native architectures on AWS, GCP and Azure. Autoscaling and 99.99% uptime.',
    'service.design.label': 'UX/UI Design',
    'service.design.title': 'Product Design',
    'service.design.desc' : 'Interfaces combining premium aesthetics with flawless usability. From wireframe to design system.',

    /* ── JOURNEY ── */
    'journey.pre'     : 'Our capability',
    'journey.web.title'   : 'Next-Gen Web Platforms',
    'journey.web.desc'    : 'Fast, secure, scalable applications that grow with your business. Microservices architecture.',
    'journey.mobile.title': 'Native Mobile Experiences',
    'journey.mobile.desc' : 'iOS and Android apps that rival the biggest products on the market. Flutter & React Native.',
    'journey.ai.title'    : 'Automation & AI Agents',
    'journey.ai.desc'     : 'Eliminate manual processes. Train AI agents into your existing operational flow.',

    /* ── ECOSYSTEM ── */
    'eco.pre'         : 'Native integrations',
    'eco.title'       : 'Technology Ecosystem',
    'eco.sub'         : 'We work with the best tools in each category to ensure maximum performance.',

    /* ── NUMBERS ── */
    'numbers.pre'     : 'Proven results',
    'numbers.title'   : 'Give by the Numbers',
    'numbers.p1.lbl'  : 'Projects delivered',
    'numbers.p2.lbl'  : 'Expert engineers',
    'numbers.p3.lbl'  : 'Client retention',
    'numbers.p4.lbl'  : 'On schedule',

    /* ── CTA ── */
    'cta.status'      : 'Open for new projects — Q2 2026',
    'cta.h2a'         : 'Ready to build',
    'cta.h2b'         : 'something real?',
    'cta.sub'         : 'Share your idea. We return with a technical proposal within 24 hours. No fluff.',
    'cta.btn.start'   : 'Start a Project',
    'cta.btn.call'    : 'Schedule a Call',
    'cta.trust.t1'    : 'Response time',
    'cta.trust.t2'    : 'Kickoff',
    'cta.trust.t3'    : 'Available',
    'cta.trust.t4'    : 'On-time',
    'cta.card.label'  : 'What happens next',
    'cta.step1.title' : 'You send a brief',
    'cta.step1.desc'  : 'Tell us your idea, timeline and budget. No fluff needed.',
    'cta.step2.title' : 'We scope it out',
    'cta.step2.desc'  : 'Our team analyses and returns a detailed technical proposal within 24h.',
    'cta.step3.title' : 'We build & ship it',
    'cta.step3.desc'  : 'On-spec delivery, full transparency, weekly updates, zero surprises.',

    /* ── FOOTER ── */
    'footer.desc'     : 'We build every kind of solution. Web. Mobile. Automation. All of it.',
    'footer.copy'     : '© 2026 Give Software. Built with purpose.',

    /* ── MODAL BRIEFING ── */
    'modal.close'      : '[ ESC ] CLOSE',
    'modal.s1.label'   : '01 // THE CONCEPT',
    'modal.s1.title'   : 'What are we building?',
    'modal.s1.ph'      : 'A fintech app, an AI agent, a new SaaS...',
    'modal.s1.hint'    : 'Press Enter ↵ to continue.',
    'modal.s2.label'   : '02 // ECOSYSTEM',
    'modal.s2.title'   : 'Select your platform.',
    'modal.s2.opt1'    : 'WEB PLATFORM',
    'modal.s2.opt2'    : 'MOBILE APP',
    'modal.s2.opt3'    : 'AI & AUTOMATION',
    'modal.s2.opt4'    : 'FULL STACK (ALL)',
    'modal.s3.label'   : '03 // TIMELINE',
    'modal.s3.title'   : 'When do we launch?',
    'modal.s3.opt1'    : 'ASAP (RUSH)',
    'modal.s3.opt2'    : '1-3 MONTHS',
    'modal.s3.opt3'    : '3-6 MONTHS',
    'modal.s3.opt4'    : 'FLEXIBLE',
    'modal.s4.label'   : '04 // COMMS',
    'modal.s4.title'   : 'Where do we send the proposal?',
    'modal.s4.ph'      : 'email@company.com',
    'modal.submit'     : 'INITIATE SEQUENCE',
    'modal.success'    : '[ STATUS: BRIEF SECURED. OUR ENGINEERS ARE ANALYZING. ]',

    /* ── SOBRE ── */
    'sobre.hero.tag'   : 'GIVE SOFTWARE // EST. 2025',
    'sobre.hero.h1a'   : 'Building the',
    'sobre.hero.h1b'   : 'Future.',
    'sobre.hero.desc'  : 'We are a collective of developers obsessed with transforming technical challenges into high-impact solutions.',
    'sobre.m1.lbl'     : 'Years of Experience',
    'sobre.m2.lbl'     : 'Elite Engineers',
    'sobre.m3.lbl'     : 'Client Retention',
    'sobre.traj.pre'   : 'Our trajectory',
    'sobre.traj.title' : 'The Give Origin',
    'sobre.mile1.year' : '2025 — The Beginning',
    'sobre.mile1.title': '3 Developers. One Vision.',
    'sobre.mile1.p'    : 'Give was born from the union of three friends with complementary skills: Eduardo Pimentel (Automation), Victor Menezes (Mobile/UX) and Guilherme Bomfim (Web/Backend). What started as a partnership evolved into a mission to create solutions that truly impact people.',
    'sobre.mile2.year' : 'April 2025 — The Creation',
    'sobre.mile2.title': 'From Projects to a Software House',
    'sobre.mile2.p'    : 'With growing demands, Give Software House was born. Our purpose: transforming technical knowledge into personalized solutions, solving real-world problems for people and companies.',
    'sobre.mile3.year' : 'November 2025 — First Major Delivery',
    'sobre.mile3.title': 'E-commerce Parafina Bronze',
    'sobre.mile3.p'    : 'We delivered our first major project: the premium e-commerce for Parafina Bronze. Strategically launched on Black Friday, it consolidated our expertise in performance and user experience.',
    'sobre.mile4.year' : '2026 — Now',
    'sobre.mile4.title': 'Building the Future',
    'sobre.mile4.p'    : 'We evolved into a software house focused on innovation. We operate in custom systems, apps, automations and scalable platforms. Our focus is generating results and efficiency.',
    'sobre.why.pre'    : 'Why Give?',
    'sobre.why.title'  : 'The Give Protocol',
    'sobre.team.pre'   : 'The Brains',
    'sobre.team.title' : 'Meet the Core Unit',
    'sobre.cta.h2a'    : 'Now that you know us,',
    'sobre.cta.h2b'    : 'let\'s build together.',
    'sobre.cta.sub'    : 'You\'ve seen our methodology and met the team. Ready to let Give Software transform your vision into an unparalleled digital reality?',

    /* ── PROJETOS ── */
    'proj.hero.tag'    : 'MOST RECENT // Q1 2026',
    'proj.hero.desc'   : 'Scaling a decentralized banking platform for 2M users with ultra-low latency and bank-grade security protocols.',
    'proj.m1.lbl'      : 'Uptime Achieved',
    'proj.m2.lbl'      : 'Avg. Response Time',
    'proj.m3.lbl'      : 'User Retention',
    'proj.port.pre'    : 'The Portfolio',
    'proj.port.title'  : 'Selected Works.',
    'proj.filter.all'  : 'All',
    'proj.filter.sites': 'Websites',
    'proj.filter.apps' : 'Apps',
    'proj.filter.auto' : 'Automation',
    'proj.filter.ai'   : 'AI Systems',
    'proj.filter.ecommerce': 'Ecommerce',
    'proj.p1.exc'      : 'High-frequency trading interface with real-time liquid feedback systems.',
    'proj.p2.exc'      : 'Next-gen shopping experience with AR product previewing.',
    'proj.p3.exc'      : 'Predictive diagnostics platform using proprietary LLM architectures.',
    'proj.p4.exc'      : 'Automated infrastructure management for large-scale energy grids.',
    'proj.p5.exc'      : 'Complete digitization of the analysis pillar, reducing filling time by 67%.',

    /* ── SERVIÇOS ── */
    'serv.hero.tag'    : 'OUR CAPABILITIES // 2026',
    'serv.hero.h1a'    : 'Engineering',
    'serv.hero.h1b'    : 'Excellence.',
    'serv.hero.desc'   : 'Interactive expertise hub. Explore our core capabilities from intelligent automations to high-performance web platforms.',
    'serv.m1.lbl'      : 'Projects Delivered',
    'serv.m2.lbl'      : 'Code Quality Score',
    'serv.m3.lbl'      : 'Scalability Target',
    'serv.method.pre'  : 'What we do',
    'serv.method.title': 'Our Services',
    'serv.s1.num'      : '01 // CORE',
    'serv.s1.title'    : 'Web Development',
    'serv.s1.desc'     : 'We build high-performance, scalable, fully SEO-optimized web platforms.',
    'serv.s2.num'      : '02 // NATIVE',
    'serv.s2.title'    : 'Mobile Development',
    'serv.s2.desc'     : 'We craft native and hybrid apps for iOS and Android with fluid, intuitive experiences.',
    'serv.s3.num'      : '03 // INTELLIGENCE',
    'serv.s3.title'    : 'Automation',
    'serv.s3.desc'     : 'We eliminate repetitive manual processes through intelligent flows and AI integration.',
    'serv.s4.num'      : '04 // INTERFACE',
    'serv.s4.title'    : 'UX & UI Design',
    'serv.s4.desc'     : 'User-centered design combining premium aesthetics with impeccable usability.',
    'serv.s5.num'      : '05 // COMMERCE',
    'serv.s5.title'    : 'Ecommerce',
    'serv.s5.desc'     : 'Robust sales platforms focused on conversion with fast checkout and full payment integration.',
    'serv.funnel.pre'  : 'Build your project',
    'serv.funnel.title': 'Solution Architect',
    'serv.funnel.sub'  : 'Answer 3 quick questions and receive a custom technology recommendation.',
    'serv.q1.title'    : 'What\'s your primary goal?',
    'serv.q1.opt1'     : 'Speed to Market',
    'serv.q1.opt2'     : 'Extreme Scale',
    'serv.q1.opt3'     : 'Award-Winning UX',
    'serv.q2.title'    : 'Which industry are we entering?',
    'serv.q2.opt1'     : 'Fintech / Banking',
    'serv.q2.opt2'     : 'E-commerce / Retail',
    'serv.q2.opt3'     : 'SaaS / B2B',
    'serv.q2.back'     : '← Back',
    'serv.q3.title'    : 'Project expected size?',
    'serv.q3.opt1'     : 'Startup MVP',
    'serv.q3.opt2'     : 'Growing App',
    'serv.q3.opt3'     : 'Enterprise Suite',
    'serv.q3.back'     : '← Back',
    'serv.result.title': 'Generated Architecture',
    'serv.result.new'  : 'Start New Session',
  }
};

/* ─── ENGINE ─── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  // Update html lang attr
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  // Update toggle button — CSS handles all visual via [data-lang] attribute
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.dataset.lang = lang;
    // Update aria-label for accessibility
    toggle.setAttribute('aria-label', lang === 'pt'
      ? 'Mudar para Inglês'
      : 'Switch to Portuguese');
    toggle.setAttribute('title', lang === 'pt'
      ? 'Switch to English'
      : 'Mudar para Português');
  }
}

function toggleLang() {
  const current = localStorage.getItem('gs-lang') || 'pt';
  const next = current === 'pt' ? 'en' : 'pt';
  localStorage.setItem('gs-lang', next);
  applyLang(next);
}

/* ─── GLOBAL MOBILE MENU ENGINE ─── */
function initMobileMenu() {
  const btn = document.getElementById('mobile-btn');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-close');
  
  if (!btn || !menu) return;

  const toggle = (e) => {
    if (e) e.preventDefault();
    menu.classList.toggle('active');
  };

  // Dual event strategy for zero-latency touch
  btn.addEventListener('click', toggle);
  btn.addEventListener('touchstart', toggle, {passive: false});

  if (close) {
    close.addEventListener('click', () => menu.classList.remove('active'));
    close.addEventListener('touchstart', () => menu.classList.remove('active'), {passive: true});
  }

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('active'));
  });
}

/* ─── INIT ─── */
(function() {
  const lang = localStorage.getItem('gs-lang') || 'pt';
  // Apply immediately on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyLang(lang);
      initMobileMenu();
    });
  } else {
    applyLang(lang);
    initMobileMenu();
  }
})();

