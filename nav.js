/* ============================================================
   IMPERIAL FURNITURE — nav.js
   Zmień tu: linki menu, logo tekst
   ============================================================ */
(function () {
  const NAV_LINKS = [
    { label: 'Home',       href: 'index.html' },
    { label: 'About',      href: 'index.html#about' },
    { label: 'Shop',       href: 'shop.html' },
    { label: 'Gallery',    href: 'gallery.html' },
    { label: 'Contact',    href: 'index.html#contact' },
  ];

  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const nav = document.getElementById('if-nav');
  if (!nav) return;

  nav.innerHTML = `
    <a href="index.html" class="logo-wrap">
      <div class="silver-line"></div>
      <span class="logo">Imperial</span>
      <span class="logo">Furniture</span>
      <div class="silver-line"></div>
    </a>

    <ul class="nav-links">
      ${NAV_LINKS.map(l => {
        const active = currentPage === l.href.split('#')[0] ? ' class="active"' : '';
        return `<li><a href="${l.href}"${active}>${l.label}</a></li>`;
      }).join('\n      ')}
    </ul>

    <div class="hamburger" id="ham">
      <span></span><span></span><span></span>
    </div>
  `;

  // Mobile menu
  const mob = document.getElementById('mob-menu');
  if (mob) {
    mob.innerHTML = NAV_LINKS.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join('\n');
  }

  document.getElementById('ham').addEventListener('click', () => {
    mob && mob.classList.toggle('open');
  });
  mob && mob.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mob.classList.remove('open'))
  );
})();
