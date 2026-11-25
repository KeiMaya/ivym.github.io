(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function effective() {
    return root.dataset.theme || (mq.matches ? 'dark' : 'light');
  }
  function sync() { root.dataset.themeEffective = effective(); }
  sync();
  mq.addEventListener && mq.addEventListener('change', sync);

  document.querySelector('.theme-toggle').addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Highlight the nav link for the section in view
  var links = {};
  document.querySelectorAll('.nav a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && links[e.target.id]) {
          Object.values(links).forEach(function (l) { l.classList.remove('active'); });
          links[e.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(function (s) { navObs.observe(s); });

    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section').forEach(function (s) {
      s.classList.add('reveal'); revealObs.observe(s);
    });
  }
})();
