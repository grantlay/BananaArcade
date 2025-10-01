// js/site-settings.js — apply Settings site-wide (with real defaults + proper revert)

(function () {
  const K = {
    TAB_TITLE: 'ba_tab_title',
    TAB_ICON: 'ba_tab_icon',
    PRESET: 'ba_preset',
    SPECIAL_ENABLED: 'ba_special_enabled',
    SPECIAL_KEY: 'ba_special_key',
    SPECIAL_URL: 'ba_special_url'
  };

  // Capture the site's REAL defaults the first time this runs
  if (!window.__BA_DEFAULTS) {
    const link = document.querySelector('link[rel="icon"]');
    window.__BA_DEFAULTS = {
      title: document.title || 'Banana Arcade',
      icon:  (link && link.href) || '' // if none, we simply won't override
    };
  }
  const DEF = window.__BA_DEFAULTS;

  const DEFAULTS = {
    [K.PRESET]: 'none',
    [K.TAB_TITLE]: '',     // empty = use default title
    [K.TAB_ICON]: '',      // empty = use default favicon
    [K.SPECIAL_ENABLED]: '0',
    [K.SPECIAL_KEY]: '`',
    [K.SPECIAL_URL]: 'https://classroom.google.com'
  };

  const get = (key) => {
    const v = localStorage.getItem(key);
    return v == null ? DEFAULTS[key] : v;
  };

  function ensureFaviconLink() {
    let link = document.querySelector('link[rel="icon"]');
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    return link;
  }

  function applyBranding() {
    const preset = get(K.PRESET);
    const titleOverride = get(K.TAB_TITLE);
    const iconOverride  = get(K.TAB_ICON);

    let titleToUse = DEF.title;
    let iconToUse  = DEF.icon;

    if (preset === 'gclassroom') {
      // Preset provides defaults; explicit overrides still win if user filled them
      titleToUse = titleOverride || 'Home';
      iconToUse  = iconOverride || 'assets/classroom.ico';
    } else if (preset === 'custom') {
      // Use custom overrides; fall back to defaults if empty
      titleToUse = titleOverride || DEF.title;
      iconToUse  = iconOverride || DEF.icon;
    } else {
      // Normal preset → force defaults unless user explicitly set overrides (kept for backwards-compat)
      titleToUse = titleOverride || DEF.title;
      iconToUse  = iconOverride || DEF.icon;
    }

    if (titleToUse) document.title = titleToUse;
    if (iconToUse)  ensureFaviconLink().href = iconToUse;
  }

  function isTypingInInput(t) {
    return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
  }

  // Special key
  if (get(K.SPECIAL_ENABLED) === '1') {
    const key = get(K.SPECIAL_KEY) || '`';
    const url = get(K.SPECIAL_URL) || 'https://classroom.google.com';
    document.addEventListener('keydown', (e) => {
      if (isTypingInInput(e.target)) return;
      if (e.key === key) window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Live updates from Settings tab
  window.addEventListener('storage', (e) => {
    if (!e.key) return;
    if ([K.PRESET, K.TAB_TITLE, K.TAB_ICON].includes(e.key)) applyBranding();
    if ([K.SPECIAL_ENABLED, K.SPECIAL_KEY, K.SPECIAL_URL].includes(e.key)) location.reload();
  });

  applyBranding();
})();
