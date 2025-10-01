// js/settings.js — Settings controller (Custom unlocked, Normal locked)

(function () {
  const K = {
    TAB_TITLE: 'ba_tab_title',
    TAB_ICON: 'ba_tab_icon',
    PRESET: 'ba_preset',
    SPECIAL_ENABLED: 'ba_special_enabled',
    SPECIAL_KEY: 'ba_special_key',
    SPECIAL_URL: 'ba_special_url'
  };

  const DEFAULTS = {
    [K.PRESET]: 'none',
    [K.TAB_TITLE]: '',
    [K.TAB_ICON]: '',
    [K.SPECIAL_ENABLED]: '0',
    [K.SPECIAL_KEY]: '`',
    [K.SPECIAL_URL]: 'https://classroom.google.com'
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const titleEl = $('#tabTitle');
  const iconEl  = $('#tabIcon');
  const specialEnabledEl = $('#specialEnabled');
  const specialKeyEl = $('#specialKey');
  const specialUrlEl = $('#specialUrl');
  const saveBtn = $('#saveBtn');
  const resetBtn = $('#resetBtn');
  const presetCards = $$('#presetGrid .preset-card');

  const get = (k) => localStorage.getItem(k) ?? DEFAULTS[k];
  const set = (k, v) => localStorage.setItem(k, v);

  function setFieldsEnabled(enabled) {
    [titleEl, iconEl].forEach(el => {
      el.disabled = !enabled;
      if (!enabled) {
        el.blur();
      }
    });
  }

  function activatePresetCard(val) {
    presetCards.forEach(card => {
      card.classList.toggle('is-active', card.dataset.preset === val);
      const input = $('input[type="radio"]', card);
      if (input) input.checked = (card.dataset.preset === val);
    });

    // Lock behavior
    if (val === 'none') {           // Normal → lock inputs
      setFieldsEnabled(false);
      // Clear UI so saving reverts disguise fields
      titleEl.value = '';
      iconEl.value  = '';
    } else if (val === 'custom') {  // Custom → unlock inputs
      setFieldsEnabled(true);
    } else if (val === 'gclassroom') {
      setFieldsEnabled(true);
      // Suggest defaults (user can overwrite)
      if (!titleEl.value) titleEl.value = 'Home';
      if (!iconEl.value)  iconEl.value  = 'assets/classroom.ico';
    }
  }

  function loadToUI() {
    const preset = get(K.PRESET);
    titleEl.value = get(K.TAB_TITLE);
    iconEl.value  = get(K.TAB_ICON);

    specialEnabledEl.checked = get(K.SPECIAL_ENABLED) === '1';
    specialKeyEl.value = get(K.SPECIAL_KEY) || '`';
    specialUrlEl.value = get(K.SPECIAL_URL) || 'https://classroom.google.com';

    activatePresetCard(preset);
  }

  function saveFromUI() {
    const active = presetCards.find(c => c.classList.contains('is-active'));
    const preset = active?.dataset.preset || 'none';

    // For Normal, we hard-clear disguise overrides when saving
    const isNormal = (preset === 'none');
    const titleToSave = isNormal ? '' : titleEl.value.trim();
    const iconToSave  = isNormal ? '' : iconEl.value.trim();

    set(K.PRESET, preset);
    set(K.TAB_TITLE, titleToSave);
    set(K.TAB_ICON, iconToSave);
    set(K.SPECIAL_ENABLED, specialEnabledEl.checked ? '1' : '0');
    set(K.SPECIAL_KEY, (specialKeyEl.value || '`').slice(0, 2));
    set(K.SPECIAL_URL, specialUrlEl.value || 'https://classroom.google.com');

    // Apply immediately in this tab (site-settings.js updates others)
    if (preset === 'gclassroom') {
      if (!titleToSave) document.title = 'Home';
      if (!iconToSave) {
        let link = document.querySelector('link[rel="icon"]');
        if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
        link.href = 'assets/classroom.ico';
      }
    } else {
      if (titleToSave) document.title = titleToSave;
      if (iconToSave) {
        let link = document.querySelector('link[rel="icon"]');
        if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
        link.href = iconToSave;
      }
    }
  }

  function resetAll() {
    Object.keys(DEFAULTS).forEach(k => localStorage.removeItem(k));
    loadToUI();
    location.reload();
  }

  // Interactions
  presetCards.forEach(card => {
    card.addEventListener('click', () => {
      activatePresetCard(card.dataset.preset);
    });
  });

  saveBtn.addEventListener('click', () => {
    saveFromUI();
    saveBtn.textContent = 'Saved ✔';
    setTimeout(() => saveBtn.textContent = 'Save', 1100);
  });

  resetBtn.addEventListener('click', resetAll);

  loadToUI();
})();
