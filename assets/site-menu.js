/* RealAwake mobile menu: toggles the dropdown box. Links stay in the HTML. */
(function (d) {
  d.documentElement.classList.add('ra-js');
  function init() {
    var b = d.querySelector('.ra-toggle'), m = d.getElementById('ra-menu');
    if (!b || !m) return;
    function set(open) {
      m.classList.toggle('open', open);
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    b.addEventListener('click', function (e) { e.stopPropagation(); set(!m.classList.contains('open')); });
    m.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    d.addEventListener('click', function (e) { if (!m.contains(e.target) && !b.contains(e.target)) set(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && m.classList.contains('open')) { set(false); b.focus(); } });
    if (window.matchMedia) {
      var mq = window.matchMedia('(min-width: 721px)');
      var close = function (e) { if (e.matches) set(false); };
      if (mq.addEventListener) mq.addEventListener('change', close); else if (mq.addListener) mq.addListener(close);
    }
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init); else init();
})(document);
