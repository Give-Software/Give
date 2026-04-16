/**
 * shared-components.js
 * Injeta Header, Footer e Modal em todas as páginas para facilitar a manutenção.
 */

const components = {
  header: (activePage) => `
    <div id="page-progress"></div>
    <div class="mobile-cta-bar" id="mobile-cta">
      <span class="mobile-cta-brand">GIVE <span style="color:var(--accent)">SOFTWARE</span></span>
      <a href="#cta" class="btn btn-primary" style="padding:.6rem 1.4rem;font-size:.85rem;" data-modal="start-project" data-i18n="nav.mobileCta">Iniciar Projeto →</a>
    </div>
    <nav id="main-nav">
      <a class="nav-logo" href="index.html">
        <svg width="32" height="28" viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon class="logo-poly logo-poly-1" points="0,80 30,10 50,50" fill="#2d3d4f"/>
          <polygon class="logo-poly logo-poly-2" points="100,80 70,10 50,50" fill="#2d3d4f"/>
          <polygon class="logo-poly logo-poly-1" points="30,10 50,50 50,80" fill="#233040"/>
          <polygon class="logo-poly logo-poly-2" points="70,10 50,50 50,80" fill="#233040"/>
          <polygon class="logo-poly logo-poly-center" points="50,0 62,36 50,50 38,36" fill="#2ec4a5"/>
          <polygon class="logo-poly logo-poly-center" points="50,50 60,68 50,80 40,68" fill="#1a9982"/>
        </svg>
        <span style="font-family:var(--font-display);font-weight:800;">GIVE <span style="color:var(--accent)">SOFTWARE</span></span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav.home">Início</a></li>
        <li><a href="projetos.html" class="${activePage === 'projects' ? 'active' : ''}" data-i18n="nav.projects">Projetos</a></li>
        <li><a href="servicos.html" class="${activePage === 'services' ? 'active' : ''}" data-i18n="nav.services">Serviços</a></li>
        <li><a href="sobre.html" class="${activePage === 'about' ? 'active' : ''}" data-i18n="nav.about">Sobre nós</a></li>
      </ul>
      <div class="nav-right">
        <button class="lang-toggle" id="lang-toggle" data-lang="pt" onclick="toggleLang()">
          <span class="lt-dot"></span>
          <span class="lt-pt">PT</span>
          <span class="lt-sep">|</span>
          <span class="lt-en">EN</span>
        </button>
        <a class="nav-cta" href="#cta" data-i18n="nav.cta" data-modal="start-project">Iniciar Projeto</a>
        <div class="mobile-menu-btn" id="mobile-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
    <div class="mobile-menu-overlay" id="mobile-menu">
      <div class="mobile-menu-close" id="mobile-close">&times;</div>
      <ul class="mobile-nav-links">
        <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav.home">Início</a></li>
        <li><a href="projetos.html" class="${activePage === 'projects' ? 'active' : ''}" data-i18n="nav.projects">Projetos</a></li>
        <li><a href="servicos.html" class="${activePage === 'services' ? 'active' : ''}" data-i18n="nav.services">Serviços</a></li>
        <li><a href="sobre.html" class="${activePage === 'about' ? 'active' : ''}" data-i18n="nav.about">Sobre nós</a></li>
      </ul>
      <a class="nav-cta" href="#cta" style="margin-top:3rem;" data-i18n="nav.cta" data-modal="start-project">Iniciar Projeto</a>
    </div>
  `,
  footer: `
    <footer>
      <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:.5rem;">
        <svg width="36" height="30" viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,80 30,10 50,50" fill="#2d3d4f"/>
          <polygon points="100,80 70,10 50,50" fill="#2d3d4f"/>
          <polygon points="30,10 50,50 50,80" fill="#233040"/>
          <polygon points="70,10 50,50 50,80" fill="#233040"/>
          <polygon points="50,0 62,36 50,50 38,36" fill="#2ec4a5"/>
          <polygon points="50,50 60,68 50,80 40,68" fill="#1a9982"/>
        </svg>
        <div class="footer-wordmark interactive" style="margin-bottom:0px;">GIVE <span style="color:var(--accent)">SOFTWARE</span></div>
      </div>
      <p data-i18n="footer.desc">Construímos todo tipo de solução. Web. Mobile. Automação. Tudo.</p>
      <div style="margin: 2rem 0; display: flex; gap: 2rem; justify-content: center;">
        <a href="https://www.linkedin.com/company/give-software-house/" target="_blank" class="interactive" style="color:var(--accent)">LinkedIn</a>
        <a href="https://github.com/Give-Software" target="_blank" class="interactive" style="color:var(--accent)">GitHub</a>
      </div>
      <p style="font-size: 0.85rem; font-family: 'Space Mono', monospace;" data-i18n="footer.copy">© 2026 Give Software. Construído com propósito.</p>
    </footer>

    <!-- START PROJECT MODAL -->
    <div class="sp-modal" id="sp-modal">
      <div class="sp-clip-layer" id="sp-clip">
        <div class="sp-bg-grid"></div>
      </div>
      <div class="sp-close" id="sp-close" data-i18n="modal.close">[ ESC ] FECHAR</div>
      <div class="sp-progress" id="sp-progress"></div>
      <div class="sp-content">
        <div class="sp-step active" id="sp-step-1" data-step="1">
          <div class="sp-label" data-i18n="modal.s1.label">01 // O CONCEITO</div>
          <h2 class="sp-h2" data-i18n="modal.s1.title">O que vamos construir?</h2>
          <div class="sp-input-wrap">
            <input type="text" class="sp-input" id="sp-input-concept" placeholder="Um app fintech, um agente de IA, um SaaS..." data-i18n="modal.s1.ph" autocomplete="off">
            <div class="sp-line"></div>
          </div>
          <div class="sp-hint" data-i18n="modal.s1.hint">Pressione <strong>Enter ↵</strong> para continuar.</div>
        </div>
        <div class="sp-step" id="sp-step-2" data-step="2">
          <div class="sp-label" data-i18n="modal.s2.label">02 // ECOSSISTEMA</div>
          <h2 class="sp-h2" data-i18n="modal.s2.title">Selecione a plataforma.</h2>
          <div class="sp-cards">
            <div class="sp-select-card" data-i18n="modal.s2.opt1">PLATAFORMA WEB</div>
            <div class="sp-select-card" data-i18n="modal.s2.opt2">APP MOBILE</div>
            <div class="sp-select-card" data-i18n="modal.s2.opt3">IA & AUTOMAÇÃO</div>
            <div class="sp-select-card" data-i18n="modal.s2.opt4">FULL STACK (TUDO)</div>
          </div>
        </div>
        <div class="sp-step" id="sp-step-3" data-step="3">
          <div class="sp-label" data-i18n="modal.s3.label">03 // PRAZO</div>
          <h2 class="sp-h2" data-i18n="modal.s3.title">Quando lançamos?</h2>
          <div class="sp-cards">
            <div class="sp-select-card" data-i18n="modal.s3.opt1">O QUANTO ANTES</div>
            <div class="sp-select-card" data-i18n="modal.s3.opt2">1-3 MESES</div>
            <div class="sp-select-card" data-i18n="modal.s3.opt3">3-6 MESES</div>
            <div class="sp-select-card" data-i18n="modal.s3.opt4">FLEXÍVEL</div>
          </div>
        </div>
        <div class="sp-step" id="sp-step-4" data-step="4">
          <div class="sp-label" data-i18n="modal.s4.label">04 // CONTATO</div>
          <h2 class="sp-h2" data-i18n="modal.s4.title">Para onde enviamos a proposta?</h2>
          <div class="sp-input-wrap" style="margin-bottom: 3rem;">
            <input type="email" class="sp-input" id="sp-input-email" placeholder="email@empresa.com" data-i18n="modal.s4.ph" autocomplete="off">
            <div class="sp-line"></div>
          </div>
          <button class="sp-btn-submit" id="sp-submit" data-i18n="modal.submit">INICIAR SEQUÊNCIA</button>
        </div>
        <div class="sp-step" id="sp-success" data-step="5">
          <div class="sp-launch-dot" id="sp-dot"></div>
          <div class="sp-msg" id="sp-msg"></div>
        </div>
      </div>
    </div>
  `
};

/**
 * Injeta os componentes nos placeholders definidos no HTML.
 * placeholders: <header id="shared-header"></header> e <footer id="shared-footer"></footer>
 */
function injectSharedComponents() {
  const headerPlaceholder = document.getElementById('shared-header');
  const footerPlaceholder = document.getElementById('shared-footer');

  if (headerPlaceholder) {
    const activePage = headerPlaceholder.getAttribute('data-active') || 'home';
    headerPlaceholder.innerHTML = components.header(activePage);
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = components.footer;
  }

  // Inicializa a lógica do Modal se os elementos existirem
  initModalLogic();
}

function initModalLogic() {
  const modal = document.getElementById('sp-modal');
  if (!modal) return;

  const clip = document.getElementById('sp-clip');
  const closeBtn = document.getElementById('sp-close');
  const progress = document.getElementById('sp-progress');
  const ctaBtns = document.querySelectorAll('[data-modal="start-project"]');
  let currentStep = 1;

  const goToStep = (num) => {
    const steps = document.querySelectorAll('.sp-step');
    steps.forEach(s => { s.classList.remove('fade-in'); setTimeout(() => s.classList.remove('active'), 300); });
    setTimeout(() => {
      const next = document.getElementById(num === 5 ? 'sp-success' : `sp-step-${num}`);
      if (next) {
        next.classList.add('active');
        setTimeout(() => { next.classList.add('fade-in'); }, 50);
        if (num === 1) document.getElementById('sp-input-concept').focus();
        if (num === 4) document.getElementById('sp-input-email').focus();
      }
    }, 300);
    progress.style.width = ((num - 1) / 4) * 100 + '%';
    currentStep = num;
  };

  const close = () => {
    modal.classList.remove('anim-bg');
    setTimeout(() => { modal.classList.remove('active'); currentStep = 1; }, 800);
  };

  ctaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const rect = btn.getBoundingClientRect();
      const cx = Math.round((rect.left + rect.width / 2) / window.innerWidth * 100);
      const cy = Math.round((rect.top + rect.height / 2) / window.innerHeight * 100);
      clip.style.setProperty('--cx', cx + '%');
      clip.style.setProperty('--cy', cy + '%');
      modal.classList.add('active');
      setTimeout(() => { modal.classList.add('anim-bg'); }, 50);
      setTimeout(() => { goToStep(1); }, 600);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) close(); });

  document.querySelectorAll('.sp-select-card').forEach(card => {
    card.addEventListener('click', function () {
      this.style.background = 'rgba(46,196,165,0.2)';
      this.style.borderColor = 'var(--accent)';
      setTimeout(() => { goToStep(currentStep + 1); }, 300);
    });
  });

  const submitBtn = document.getElementById('sp-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      goToStep(5);
      progress.style.width = '100%';
      const dot = document.getElementById('sp-dot');
      const msg = document.getElementById('sp-msg');
      setTimeout(() => {
        dot.style.opacity = '1';
        dot.style.transition = 'transform 1s cubic-bezier(0.5, 0, 0.2, 1)';
        dot.style.transform = 'translateY(-600px) scale(0.2)';
      }, 800);
      setTimeout(() => {
        msg.style.opacity = '1';
        const lang = localStorage.getItem('gs-lang') || 'pt';
        const successMsg = lang === 'en'
          ? '[ STATUS: BRIEF SECURED. OUR ENGINEERS ARE ANALYZING. ]'
          : '[ STATUS: BRIEF RECEBIDO. NOSSOS ENGENHEIROS ESTÃO ANALISANDO. ]';
        
        if (typeof typeWriter === 'function') {
          typeWriter(msg, successMsg, 0);
        } else {
          msg.innerHTML = successMsg;
        }
      }, 1800);
      setTimeout(close, 5000);
    });
  }
}

function typeWriter(el, txt, i) {
  if (i === 0) el.innerHTML = '';
  if (i < txt.length) {
    el.innerHTML += txt.charAt(i);
    setTimeout(() => typeWriter(el, txt, i + 1), 40);
  }
}

// Inicialização automática
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSharedComponents);
} else {
  injectSharedComponents();
}
