// Rendering-cost fixes. Android Chromium can't composite SVG animation,
// backdrop-filter over moving content, mix-blend layers or large animated
// blur filters cheaply, so on Android those are swapped for look-alikes that
// the GPU can move without repainting. Desktop and iPhone keep the originals.
(function () {
  var html = document.documentElement;
  var android = /Android/i.test(navigator.userAgent);
  if (android) html.classList.add("ch-android");

  var css =
    // Everywhere: banners slide on their own layer instead of being repainted.
    ".animate-marquee{will-change:transform;backface-visibility:hidden}" +

    // Colour blobs: a soft radial mask replaces the 100px+ blur filter, so the
    // layer is rasterised once and only its transform animates.
    ".ch-android .animate-blob{filter:none!important;will-change:transform;" +
    "-webkit-mask-image:radial-gradient(closest-side,#000 0%,rgba(0,0,0,.55) 50%,transparent 100%);" +
    "mask-image:radial-gradient(closest-side,#000 0%,rgba(0,0,0,.55) 50%,transparent 100%)}" +

    // Frosted glass: no live background blur; a slightly denser tint keeps the look.
    ".ch-android .backdrop-blur,.ch-android .backdrop-blur-md{-webkit-backdrop-filter:none!important;backdrop-filter:none!important}" +
    ".ch-android .backdrop-blur.bg-white\\/8{background-color:rgba(255,255,255,.13)}" +
    ".ch-android .backdrop-blur.bg-white\\/10{background-color:rgba(255,255,255,.15)}" +
    ".ch-android .backdrop-blur.bg-white\\/12{background-color:rgba(255,255,255,.17)}" +
    ".ch-android .backdrop-blur.bg-white\\/15{background-color:rgba(255,255,255,.2)}" +
    ".ch-android .backdrop-blur.bg-white\\/25{background-color:rgba(255,255,255,.3)}" +
    ".ch-android .backdrop-blur-md.bg-ink\\/90{background-color:rgba(20,16,32,.96)}" +

    // Grain and bubbles: plain alpha instead of per-frame blending.
    ".ch-android .grain{mix-blend-mode:normal!important;opacity:.05!important}" +
    ".ch-android .animate-bubble{mix-blend-mode:normal!important}" +

    // Molecule glow: the SVG blur filters are re-run on every frame of the spin.
    ".ch-android svg [filter]{filter:none!important}" +

    // Gradient buttons: slide a double-width gradient with transform instead of
    // animating background-position (which repaints every frame).
    ".ch-android a.animate-gradient-shift{animation:none!important;position:relative;isolation:isolate;overflow:hidden}" +
    ".ch-android a.animate-gradient-shift::before{content:'';position:absolute;top:0;bottom:0;left:0;width:200%;z-index:-1;pointer-events:none;" +
    "background-image:inherit;background-size:100% 100%;background-repeat:no-repeat;will-change:transform;animation:ch-gshift 8s ease-in-out infinite}" +
    "@keyframes ch-gshift{0%,to{transform:translateX(0)}50%{transform:translateX(-50%)}}" +

    // Sections scrolled out of view stop animating until they come back.
    ".ch-android .ch-off,.ch-android .ch-off *{animation-play-state:paused!important}";

  var st = document.createElement("style");
  st.textContent = css;
  (document.head || html).appendChild(st);

  if (!android || !("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var sec = entries[i].target, on = entries[i].isIntersecting;
      if (!sec.isConnected) { io.unobserve(sec); continue; }
      sec.classList.toggle("ch-off", !on);
      var svgs = sec.getElementsByTagName("svg");
      for (var j = 0; j < svgs.length; j++) {
        var s = svgs[j];
        if (s.ownerSVGElement || !s.pauseAnimations) continue;
        try { on ? s.unpauseAnimations() : s.pauseAnimations(); } catch (e) {}
      }
    }
  }, { rootMargin: "200px 0px" });

  var seen = typeof WeakSet === "function" ? new WeakSet() : null;
  function scan() {
    var list = document.querySelectorAll("section");
    for (var i = 0; i < list.length; i++) {
      if (seen && seen.has(list[i])) continue;
      if (seen) seen.add(list[i]);
      io.observe(list[i]);
    }
  }
  var pending = 0;
  function start() {
    scan();
    new MutationObserver(function () {
      if (pending) return;
      pending = requestAnimationFrame(function () { pending = 0; scan(); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
