/* The Broke Student's Cheat Code — small enhancements.
   Everything still works without JavaScript. */

// Runs immediately (script is in <head>) so the mobile menu doesn't flash open.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // ---------- Mobile menu ----------
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ---------- Missing photos -> dashed placeholder box ----------
  function showPlaceholder(img) {
    var box = document.createElement('div');
    box.className = 'photo-placeholder' + (img.classList.contains('round') ? ' round' : '');
    box.setAttribute('role', 'img');
    box.setAttribute('aria-label', img.alt);
    box.textContent = 'PHOTO: ' + img.getAttribute('data-photo');
    img.replaceWith(box);
  }
  document.querySelectorAll('img[data-photo]').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) {
      showPlaceholder(img);
    } else {
      img.addEventListener('error', function () { showPlaceholder(img); });
    }
  });

  // ---------- Perk Finder filters ----------
  var filterButtons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.card[data-tags]');
  var count = document.getElementById('results-count');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      filterButtons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      var shown = 0;
      cards.forEach(function (card) {
        var tags = card.getAttribute('data-tags').split(' ');
        var match = filter === 'all' || tags.indexOf(filter) !== -1;
        card.hidden = !match;
        if (match) shown++;
      });
      if (count) {
        count.textContent = 'Showing ' + shown + ' of ' + cards.length + ' perks' +
          (filter === 'all' ? '.' : ' in “' + btn.textContent.trim() + '”.');
      }
    });
  });

  // ---------- Print tracker ----------
  var printBtn = document.querySelector('.print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }
});
