/* Boz City launch page. One constant, a reader toggle, a scroll reveal. No dependencies. */
(function () {
  "use strict";
  var root = document.documentElement;

  // The city's name lives in one place: <html data-name="...">. Every slot and the title read it.
  var SITE_NAME = root.getAttribute("data-name") || "Boz City";
  document.title = SITE_NAME;
  Array.prototype.forEach.call(document.querySelectorAll("[data-name-slot]"), function (el) {
    el.textContent = SITE_NAME;
  });

  // Human / Agent reader mode: CSS hides [data-for] blocks meant for the other reader.
  var buttons = document.querySelectorAll("[data-reader-set]");
  function setReader(mode) {
    root.setAttribute("data-reader", mode);
    Array.prototype.forEach.call(buttons, function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-reader-set") === mode ? "true" : "false");
    });
    try { localStorage.setItem("reader", mode); } catch (e) { /* storage may be unavailable */ }
  }
  Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener("click", function () { setReader(b.getAttribute("data-reader-set")); });
  });
  var saved = null;
  try { saved = localStorage.getItem("reader"); } catch (e) { /* ignore */ }
  if (saved === "agent" || saved === "human") setReader(saved);

  // Scroll reveal. Reduced motion: show everything at once.
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
  Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
})();
