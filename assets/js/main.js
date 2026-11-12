/* ==========================================================================
   MAIN  ·  渲染与交互
   ========================================================================== */
(function () {
  'use strict';

  var CFG = window.SITE_CONFIG;
  var D   = window.SITE_DATA;

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // 语言优先级：URL 参数 ?lang=zh / ?lang=en  >  本地记忆  >  配置默认值
  var urlLang = new URLSearchParams(window.location.search).get('lang');
  var lang = (urlLang === 'en' || urlLang === 'zh')
    ? urlLang
    : (localStorage.getItem('academic-lang') || CFG.defaultLang || 'en');
  if (lang !== 'en' && lang !== 'zh') lang = 'en';

  var state = { filter: 'all', query: '', showAll: false };

  /* ------------------------------------------------------------- helpers */
  function L(v) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'object' && !Array.isArray(v) && ('en' in v || 'zh' in v)) {
      return v[lang] !== undefined ? v[lang] : (v.en || '');
    }
    return v;
  }
  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function highlightAuthors(s) {
    return esc(s)
      .replace(/Xulong Li/g, '<strong>Xulong Li</strong>')
      .replace(/李旭龙/g, '<strong>李旭龙</strong>');
  }
  function isPlaceholder(v) { return /YOUR_/.test(String(v || '')); }

  var ICONS = {
    mail:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    scholar:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 2 9l10 5 10-5-10-5Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg>',
    github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.76-.24.76-.53v-2.05c-3.08.67-3.73-1.31-3.73-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.07 5.47.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/></svg>',
    cv:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
    link:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/></svg>',
    phone:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z"/></svg>',
    uav:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="6" height="6" rx="1.5"/><path d="M3 4h5M3 4v4M21 4h-5M21 4v4M3 20h5M3 20v-4M21 20h-5M21 20v-4M9 12H6M18 12h-3"/></svg>',
    shield:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    pulse:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l3-7 4 14 3-7h6"/></svg>',
    layers:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5M3 17l9 5 9-5"/></svg>',
    network:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 6v5M12 11 5 17M12 11l7 6"/></svg>'
  };

  function toast(msg) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.setAttribute('style', 'position:fixed;left:50%;bottom:28px;transform:translate(-50%,10px);z-index:99;' +
      'background:#1b2430;color:#fff;padding:10px 18px;border-radius:6px;font-size:12.5px;' +
      'box-shadow:0 6px 24px rgba(0,0,0,.18);opacity:0;transition:opacity .2s,transform .2s;max-width:88vw;text-align:center;');
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.style.opacity = '1'; t.style.transform = 'translate(-50%,0)'; });
    setTimeout(function () { t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 220); }, 2600);
  }

  function guardPlaceholder(e) {
    var a = e.target.closest('a.is-placeholder');
    if (!a) return;
    e.preventDefault();
    toast(lang === 'zh'
      ? '请先在 assets/js/config.js 中替换占位符，再发布主页。'
      : 'Please replace the placeholders in assets/js/config.js before publishing.');
  }

  /* -------------------------------------------------------------- profile */
  function renderProfile() {
    $('#profile-name').textContent   = L(D.identity.name);
    $('#profile-title').textContent  = L(D.identity.title);
    $('#profile-affil').textContent  = L(D.identity.affiliation);

    var lab = CFG.lab ? L(CFG.lab) : '';
    var labEl = $('#profile-lab');
    labEl.textContent = lab;
    labEl.hidden = !lab;

    $('#profile-meta').innerHTML = [L(D.identity.location), L(D.identity.birth), L(D.identity.party)]
      .filter(Boolean).map(esc).join('<br>');

    document.querySelector('.avatar').alt = L(D.identity.name) + ' — portrait';
  }

  function link(labelKey, href, icon, opts) {
    opts = opts || {};
    var ph = isPlaceholder(href) || /YOUR_/.test(href);
    return '<a class="icon-link' + (opts.primary ? ' primary' : '') + (ph ? ' is-placeholder' : '') + '"' +
      ' href="' + esc(href) + '"' +
      (opts.download ? '' : ' target="_blank" rel="noopener noreferrer"') +
      (opts.download ? ' download' : '') +
      (ph ? ' title="Placeholder — edit assets/js/config.js"' : '') +
      '>' + (ICONS[icon] || '') + '<span>' + esc(labelKey) + '</span></a>';
  }

  function renderLinks() {
    var h = '';
    h += link(lang === 'zh' ? '邮箱' : 'Email', 'mailto:' + CFG.emailPrimary, 'mail', { primary: true });
    h += link('Google Scholar', 'https://scholar.google.com/citations?user=' + CFG.scholarId, 'scholar');
    h += link('GitHub', 'https://github.com/' + CFG.githubUser, 'github');
    if (CFG.cvUrl) h += link(lang === 'zh' ? '简历' : 'CV', CFG.cvUrl, 'cv', { download: true });
    if (CFG.orcid)    h += link('ORCID', 'https://orcid.org/' + CFG.orcid, 'link');
    if (CFG.dblp)     h += link('DBLP', CFG.dblp, 'link');
    if (CFG.homepage) h += link(lang === 'zh' ? '机构主页' : 'Homepage', CFG.homepage, 'link');
    if (CFG.phone)    h += link(CFG.phone, 'tel:' + CFG.phone.replace(/[^0-9+]/g, ''), 'phone');
    $('#profile-links').innerHTML = h;
  }

  /* ---------------------------------------------------------------- about */
  function renderAbout() {
    $('#about-body').innerHTML = D.about.paragraphs.map(function (p) {
      return '<p>' + esc(L(p)) + '</p>';
    }).join('');

    var firstPapers = D.publications.filter(function (p) { return p.role === 'first'; }).length;
    var q1Papers    = D.publications.filter(function (p) {
      return p.role === 'first' && (p.tags || []).some(function (t) { return t.kind === 'q1'; });
    }).length;
    var granted     = D.patents.filter(function (p) { return p.status === 'granted'; }).length;

    var stats = [
      { n: firstPapers,                    en: 'First-author papers', zh: '第一作者论文' },
      { n: D.publications.length,          en: 'Total publications',   zh: '论文总数' },
      { n: q1Papers,                       en: 'CAS Q1 Top journals',  zh: '中科院一区 Top' },
      { n: granted + '/' + D.patents.length, en: 'Patents granted',    zh: '已授权 / 总专利' },
      { n: D.projects.length,              en: 'National projects',    zh: '国家级项目' }
    ];
    $('#stats').innerHTML = stats.map(function (s) {
      return '<div class="stat"><span class="stat-num">' + esc(s.n) + '</span>' +
        '<span class="stat-label">' + esc(s[lang]) + '</span></div>';
    }).join('');

    $('#interest-tags').innerHTML = D.about.interestsShort[lang].map(function (t) {
      return '<span class="chip">' + esc(t) + '</span>';
    }).join('');

    $('#news-list').innerHTML = D.news.map(function (n) {
      return '<li><span class="news-date">' + esc(L(n.date)) + '</span><span>' + esc(L(n.text)) + '</span></li>';
    }).join('');

    var all = D.appointments.concat(D.education);
    $('#timeline').innerHTML = all.map(function (e) {
      return '<div class="tl-item">' +
        '<div class="tl-period">' + esc(L(e.period)) + '</div>' +
        '<div class="tl-degree">' + esc(L(e.degree)) + '</div>' +
        '<div class="tl-school">' + esc(L(e.school)) + (L(e.major) ? ' · ' + esc(L(e.major)) : '') + '</div>' +
        (L(e.extra) ? '<div class="tl-extra">' + esc(L(e.extra)) + '</div>' : '') +
        '</div>';
    }).join('');
  }

  /* ------------------------------------------------------------- research */
  function renderResearch() {
    $('#research-grid').innerHTML = D.research.map(function (r) {
      return '<article class="research-card">' +
        '<div class="rc-head"><span class="rc-icon">' + (ICONS[r.icon] || ICONS.network) + '</span>' +
        '<h3 class="rc-title">' + esc(L(r.title)) + '</h3></div>' +
        '<p class="rc-desc">' + esc(L(r.desc)) + '</p>' +
        '<div class="rc-keywords">' + r.keywords[lang].map(function (k) {
          return '<span>' + esc(k) + '</span>';
        }).join('') + '</div>' +
        '</article>';
    }).join('');
  }

  /* --------------------------------------------------------- publications */
  function both(v) {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return [v.en, v.zh].filter(Boolean).join(' ');
  }
  function pubHaystack(p) {
    return [both(p.title), p.authors, both(p.venue), both(p.detail),
            p.year, p.algo, both(p.note)].join(' ').toLowerCase();
  }

  function renderPublications() {
    var q = state.query.trim().toLowerCase();
    var filtered = D.publications.filter(function (p) {
      if (state.filter === 'first' && p.role !== 'first') return false;
      if (state.filter === 'co' && p.role !== 'co') return false;
      if (state.filter === 'journal' && p.type !== 'journal') return false;
      if (state.filter === 'conf' && p.type === 'journal') return false;
      if (q && pubHaystack(p).indexOf(q) === -1) return false;
      return true;
    }).sort(function (a, b) { return a.rank - b.rank; });

    var browseAll = (state.filter === 'all' && !q);
    var limit = CFG.publicationPreviewCount || 8;
    var list = (browseAll && !state.showAll) ? filtered.slice(0, limit) : filtered;

    $('#pub-count').textContent = lang === 'zh'
      ? '显示 ' + list.length + ' / ' + filtered.length + ' 篇论文'
      : 'Showing ' + list.length + ' of ' + filtered.length + ' publications';

    if (!list.length) {
      $('#pub-list').innerHTML = '<li class="pub-empty">' +
        (lang === 'zh' ? '没有匹配的论文，请调整筛选条件或关键词。' : 'No matching publications. Try another filter or keyword.') +
        '</li>';
    } else {
      $('#pub-list').innerHTML = list.map(function (p) {
        var tags = (p.tags || []).map(function (t) {
          return '<span class="tag ' + esc(t.kind || '') + '">' + esc(L(t)) + '</span>';
        }).join('');
        var roleTag = p.role === 'first'
          ? '<span class="tag role">' + (lang === 'zh' ? '第一作者' : 'First author') + '</span>'
          : '<span class="tag role">' + esc(L(p.authorPos)) + '</span>';
        return '<li class="pub-item">' +
          '<div class="pub-year">' + p.year + '</div>' +
          '<div class="pub-body">' +
            '<h3 class="pub-title">' + esc(L(p.title)) +
              (p.algo ? '<span class="pub-algo">' + esc(p.algo) + '</span>' : '') + '</h3>' +
            '<p class="pub-authors">' + highlightAuthors(p.authors) + '</p>' +
            '<p class="pub-venue">' + esc(L(p.venue)) + '</p>' +
            (L(p.detail) ? '<p class="pub-detail">' + esc(L(p.detail)) + '</p>' : '') +
            '<div class="pub-tags">' + roleTag + tags + '</div>' +
            (L(p.note) ? '<p class="pub-note">' + esc(L(p.note)) + '</p>' : '') +
          '</div></li>';
      }).join('');
    }

    var more = $('#pub-more');
    more.hidden = !browseAll;
    more.textContent = state.showAll
      ? (lang === 'zh' ? '收起' : 'Show fewer')
      : (lang === 'zh' ? '显示全部 ' + filtered.length + ' 篇论文' : 'Show all ' + filtered.length + ' publications');

    var nFirst = D.publications.filter(function (p) { return p.role === 'first'; }).length;
    var nCo = D.publications.length - nFirst;
    var nQ1 = D.publications.filter(function (p) {
      return p.role === 'first' && (p.tags || []).some(function (t) { return t.kind === 'q1'; });
    }).length;
    var nQ2 = D.publications.filter(function (p) {
      return p.role === 'first' && (p.tags || []).some(function (t) { return t.kind === 'q2'; });
    }).length;
    $('#pub-summary').textContent = lang === 'zh'
      ? '以第一作者发表 SCI/EI 论文 ' + nFirst + ' 篇（中科院一区 Top ' + nQ1 + ' 篇、二区 Top ' + nQ2 +
        ' 篇，含 ESI 高被引论文 1 篇），合作发表论文 ' + nCo + ' 篇。可按类别筛选，或按标题、作者、期刊、年份检索。'
      : nFirst + ' first-author SCI/EI papers (' + nQ1 + ' in CAS Q1 Top journals, ' + nQ2 +
        ' in CAS Q2 Top journals, including one ESI Highly Cited Paper) plus ' + nCo +
        ' co-authored papers. Filter by category or search across titles, authors, venues and years.';
  }

  /* -------------------------------------------------------------- patents */
  function renderPatents() {
    var granted = D.patents.filter(function (p) { return p.status === 'granted'; }).length;
    var pending = D.patents.length - granted;
    $('#patent-summary').textContent = lang === 'zh'
      ? '博士在读期间申请专利 ' + D.patents.length + ' 项，其中已授权 ' + granted + ' 项、申请受理 ' + pending + ' 项，集中于无人机安全通信、通感一体化资源分配与强化学习网络配置。'
      : D.patents.length + ' patents filed during doctoral study: ' + granted + ' granted and ' + pending +
        ' under examination, covering UAV secure communications, ISAC resource allocation and RL-based network configuration.';

    $('#patent-list').innerHTML = D.patents.map(function (p) {
      return '<li class="patent-item">' +
        '<span class="patent-num"></span>' +
        '<div><p class="patent-title">' + esc(L(p.title)) + '</p>' +
        '<p class="patent-meta">' + esc(p.number) + ' · ' + esc(p.date) + '</p></div>' +
        '<span class="patent-status ' + p.status + '">' +
          (p.status === 'granted'
            ? (lang === 'zh' ? '已授权' : 'Granted')
            : (lang === 'zh' ? '受理中' : 'Pending')) +
        '</span></li>';
    }).join('');
  }

  /* ------------------------------------------------------------- projects */
  function renderProjects() {
    $('#project-list').innerHTML = D.projects.map(function (p) {
      return '<article class="project-card">' +
        '<div class="project-top"><span class="project-role">' + esc(L(p.role)) + '</span></div>' +
        '<h3 class="project-name">' + esc(L(p.name)) + '</h3>' +
        '<p class="project-duty">' + esc(L(p.duty)) + '</p>' +
        '</article>';
    }).join('');
  }

  /* ------------------------------------------------- honors / service / teaching */
  function renderHonors() {
    $('#award-list').innerHTML = D.awards.map(function (a) {
      return '<li><span class="award-year">' + esc(a.year) + '</span><span>' + esc(L(a.text)) + '</span></li>';
    }).join('');

    $('#service-grid').innerHTML =
      '<div class="service-card"><h4>' + (lang === 'zh' ? '期刊审稿' : 'Journal Reviewing') + '</h4><p>' +
        esc(L(D.service.review)) + '</p></div>' +
      '<div class="service-card"><h4>' + (lang === 'zh' ? '会议报告' : 'Conference Presentations') + '</h4><p>' +
        esc(L(D.service.talks)) + '</p></div>';

    $('#teaching-grid').innerHTML = D.teaching.map(function (t) {
      return '<div class="service-card"><h4>' + esc(L(t.title)) + '</h4><p>' + esc(L(t.desc)) + '</p></div>';
    }).join('');
  }

  /* --------------------------------------------------------------- footer */
  function renderChrome() {
    var year = CFG.copyrightYear || new Date().getFullYear();
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = L(CFG.siteTitle);
    var md = $('meta[name="description"]');
    if (md) md.content = L(CFG.siteDescription);
    var ogt = $('meta[property="og:title"]');
    if (ogt) ogt.content = L(CFG.siteTitle);
    var ogd = $('meta[property="og:description"]');
    if (ogd) ogd.content = L(CFG.siteDescription);

    $('#copyright').textContent = '© ' + year + ' Xulong Li · 李旭龙';
    $('#footer-line').textContent = lang === 'zh'
      ? '© ' + year + ' 李旭龙 · 太原理工大学人工智能学院'
      : '© ' + year + ' Xulong Li · College of Artificial Intelligence, Taiyuan University of Technology';
    $('#lang-btn-text').textContent = lang === 'zh' ? 'EN' : '中文';
    $('#lang-btn').setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
  }

  /* --------------------------------------------------------- static text */
  function applyStaticText() {
    $$('[data-en][data-zh]').forEach(function (el) {
      el.textContent = lang === 'zh' ? el.dataset.zh : el.dataset.en;
    });
    var input = $('#pub-search');
    if (input) input.placeholder = lang === 'zh' ? input.dataset.zhPlaceholder : input.dataset.enPlaceholder;
  }

  function renderAll() {
    applyStaticText();
    renderChrome();
    renderProfile();
    renderLinks();
    renderAbout();
    renderResearch();
    renderPublications();
    renderPatents();
    renderProjects();
    renderHonors();
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem('academic-lang', lang);
    // 让当前语言可以复制成链接分享，例如 .../?lang=zh
    try {
      var u = new URL(window.location.href);
      u.searchParams.set('lang', lang);
      window.history.replaceState(null, '', u.toString());
    } catch (e) { /* file:// 等环境下忽略 */ }
    renderAll();
  }

  /* --------------------------------------------------------------- events */
  function bindEvents() {
    $('#lang-btn').addEventListener('click', function () { setLang(lang === 'en' ? 'zh' : 'en'); });
    document.addEventListener('click', guardPlaceholder);

    $$('#pub-filters .filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('#pub-filters .filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        state.filter = btn.dataset.filter;
        state.showAll = false;
        renderPublications();
      });
    });

    $('#pub-search').addEventListener('input', function (e) {
      state.query = e.target.value;
      renderPublications();
    });

    $('#pub-more').addEventListener('click', function () {
      state.showAll = !state.showAll;
      renderPublications();
      if (!state.showAll) $('#publications').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    $('#back-to-top').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var btn = $('#back-to-top');
        btn.classList.toggle('visible', window.scrollY > 420);
        ticking = false;
      });
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          $$('#site-nav .nav-link').forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
          });
        });
      }, { rootMargin: '-12% 0px -72% 0px', threshold: 0 });
      $$('main section.section').forEach(function (s) { obs.observe(s); });
    }

    $$('#site-nav .nav-link').forEach(function (a) {
      a.addEventListener('click', function () {
        $$('#site-nav .nav-link').forEach(function (x) { x.classList.remove('active'); });
        a.classList.add('active');
      });
    });
  }

  /* ------------------------------------------------------------ JSON-LD */
  function injectStructuredData() {
    try {
      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Xulong Li',
        alternateName: '李旭龙',
        jobTitle: 'Lecturer',
        affiliation: { '@type': 'CollegeOrUniversity', name: 'Taiyuan University of Technology' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Science and Technology Beijing' },
        email: CFG.emailPrimary,
        knowsAbout: [
          'Multi-agent deep reinforcement learning', 'UAV-assisted industrial Internet of Things',
          'Physical-layer security', 'Mobile edge computing', 'Age of Information', 'Network slicing'
        ]
      });
      document.head.appendChild(s);
    } catch (e) { /* noop */ }
  }

  /* ----------------------------------------------------------------- init */
  renderAll();
  bindEvents();
  injectStructuredData();
})();
