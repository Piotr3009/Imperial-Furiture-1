/* ============================================================
   IMPERIAL FURNITURE — footer.js
   Zmień tu: adres, email, telefon, kolumny stopki
   ============================================================ */
(function () {
  const FOOTER_COLS = [
    {
      heading: 'Navigation',
      links: [
        { label: 'Home',       href: 'index.html' },
        { label: 'About',      href: 'index.html#about' },
        { label: 'Shop',       href: 'shop.html' },
        { label: 'Gallery',    href: 'gallery.html' },
        { label: 'Contact',    href: 'index.html#contact' },
      ]
    },
    {
      heading: 'Collections',
      links: [
        { label: 'Noir',         href: 'shop.html' },
        { label: 'Blanc Ivoire', href: 'shop.html' },
        { label: 'Grand Salon',  href: 'shop.html' },
        { label: 'Bespoke',      href: 'shop.html' },
      ]
    },
    {
      heading: 'Address',
      links: [
        { label: '14 Chiltern Street',              href: '#' },
        { label: 'London W1U 7PY',                  href: '#' },
        { label: '+44 20 7123 4567',                href: 'tel:+442071234567' },
        { label: 'atelier@imperialfurniture.co.uk', href: 'mailto:atelier@imperialfurniture.co.uk' },
      ]
    },
  ];

  const ft = document.getElementById('if-footer');
  if (!ft) return;

  ft.innerHTML = `
    <div class="ft-top-line"></div>
    <div class="ft-grid">
      <div>
        <div class="ft-logo-block">
          <div class="silver-line"></div>
          <span class="ft-logo">Imperial Furniture</span>
          <div class="silver-line"></div>
        </div>
        <p class="ft-brand-text">Luxury furniture born from a passion for craft.<br/>Every project unique. Every piece — for a lifetime.</p>
      </div>
      ${FOOTER_COLS.map(col => `
      <div class="ft-col">
        <h4>${col.heading}</h4>
        <ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
      </div>`).join('')}
    </div>
    <div class="ft-bottom">
      <p>&copy; ${new Date().getFullYear()} Imperial Furniture. All rights reserved.</p>
      <p>Privacy Policy &nbsp;&middot;&nbsp; Portfolio</p>
    </div>
  `;
})();
