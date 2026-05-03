/* ============================================================
   La Petite — Gallery filter (Past bakes section)
   ------------------------------------------------------------
   Wires the .gallery-filters chips to filter .mini-gallery items
   by data-cat. Reads ?cat=... from the URL so service cards on
   index.html / menu.html can deep-link straight to a category.
   ============================================================ */
(function () {
  const gallery = document.querySelector('.mini-gallery');
  const filters = document.querySelector('.gallery-filters');
  if (!gallery || !filters) return;

  const empty   = document.querySelector('.gallery-empty');
  const items   = Array.from(gallery.querySelectorAll('a[data-cat]'));
  const buttons = Array.from(filters.querySelectorAll('button[data-filter]'));

  function apply(cat) {
    cat = (cat || 'all').toLowerCase();
    if (!buttons.some(b => b.dataset.filter === cat)) cat = 'all';

    let visible = 0;
    items.forEach(el => {
      const match = cat === 'all' || el.dataset.cat === cat;
      el.classList.toggle('is-hidden', !match);
      if (match) visible++;
    });
    buttons.forEach(b => b.classList.toggle('is-active', b.dataset.filter === cat));
    if (empty) empty.classList.toggle('is-hidden', visible > 0);
  }

  function getCat() {
    const params = new URLSearchParams(window.location.search);
    return (params.get('cat') || 'all').toLowerCase();
  }

  buttons.forEach(b => {
    b.addEventListener('click', () => {
      const cat = b.dataset.filter;
      const url = new URL(window.location.href);
      if (cat === 'all') url.searchParams.delete('cat');
      else url.searchParams.set('cat', cat);
      url.hash = 'gallery';
      window.history.replaceState(null, '', url);
      apply(cat);
    });
  });

  apply(getCat());
})();
