(() => {
  if (document.getElementById('lh-accessibility-loader')) return;
  const source = document.currentScript?.src;
  const style = document.createElement('link');
  style.id = 'lh-accessibility-loader'; style.rel = 'stylesheet';
  style.href = new URL('preferences.css', source || location.href).href;
  document.head.append(style);
  const key = 'lh_high_contrast';
  let enabled = false;
  try { enabled = localStorage.getItem(key) === 'on'; } catch {}
  const sharedChoice = document.cookie.split('; ').find(c => c.startsWith(key + '='));
  if (sharedChoice) enabled = sharedChoice.split('=')[1] === 'on';
  function apply(value) {
    enabled = value;
    document.documentElement.toggleAttribute('data-lh-high-contrast', value);
  }
  apply(enabled);
  function start() {
    const launcher = document.createElement('button');
    launcher.id = 'lh-accessibility-launcher'; launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Accessibility options');
    launcher.title = 'Accessibility options';
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24'); icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<circle cx="12" cy="4" r="2"/><path d="M4 8l8 2 8-2M12 10v5m0 0-4 6m4-6 4 6"/>';
    launcher.append(icon); launcher.setAttribute('aria-haspopup', 'dialog');
    launcher.setAttribute('aria-controls', 'lh-accessibility-dialog');
    const dialog = document.createElement('dialog');
    dialog.id = 'lh-accessibility-dialog'; dialog.setAttribute('aria-labelledby', 'lh-accessibility-title');
    const heading = document.createElement('h2'); heading.id = 'lh-accessibility-title'; heading.textContent = 'Accessibility options';
    const intro = document.createElement('p'); intro.textContent = 'Choose the presentation that works for you. Content and services stay the same.';
    const contrast = document.createElement('button'); contrast.type = 'button'; contrast.textContent = 'High contrast';
    contrast.setAttribute('aria-pressed', String(enabled));
    contrast.onclick = () => {
      apply(!enabled); contrast.setAttribute('aria-pressed', String(enabled));
      try { localStorage.setItem(key, enabled ? 'on' : 'off'); } catch {}
      if (location.hostname === 'localhandyman.com' || location.hostname.endsWith('.localhandyman.com')) {
        document.cookie = key + '=' + (enabled ? 'on' : 'off') + '; Max-Age=31536000; Path=/; Domain=localhandyman.com; SameSite=Lax; Secure';
      }
    };
    const cookies = document.createElement('button'); cookies.type = 'button'; cookies.textContent = 'Cookie preferences';
    cookies.hidden = !document.documentElement.hasAttribute('data-lh-cookie-preferences');
    const close = document.createElement('button'); close.type = 'button'; close.textContent = 'Close';
    close.onclick = () => dialog.close();
    cookies.onclick = () => {
      dialog.close(); launcher.focus();
      setTimeout(() => document.dispatchEvent(new Event('lh:open-cookie-preferences')), 0);
    };
    dialog.append(heading, intro, contrast, cookies, close);
    document.body.prepend(launcher);
    document.body.append(dialog);
    launcher.onclick = () => {
      cookies.hidden = !document.documentElement.hasAttribute('data-lh-cookie-preferences');
      dialog.showModal(); contrast.focus();
    };
    dialog.addEventListener('close', () => launcher.focus({ preventScroll: true }));
    // Preserve current labels; name only the previously unnamed Video.js quality control.
    function labelPlayers() {
      document.querySelectorAll('button.vjs-menu-button').forEach(button => {
        if (button.querySelector('.vjs-icon-hd') && !button.getAttribute('aria-label')?.trim() && !button.getAttribute('aria-labelledby')?.trim() && !button.textContent.trim()) button.setAttribute('aria-label', 'Video quality');
      });
    }
    labelPlayers();
    new MutationObserver(labelPlayers).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
