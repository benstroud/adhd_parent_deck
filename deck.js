/* Raises the deck from content.js. Pure helpers exported for tests. */

(function () {
  "use strict";

  /* ---------- pure helpers (exported for node --test) ---------- */

  function toText(node) {
    var out = [];
    node.childNodes.forEach(function (n) {
      if (n.nodeType === 3) out.push(n.textContent);
      else if (n.nodeType === 1) out.push(toText(n));
    });
    return out.join(" ").replace(/\s+/g, " ").trim();
  }

  /* ---------- DOM build ---------- */

  function quoteBlock(slide) {
    var block = document.createElement("blockquote");
    block.className = "slide__quote";

    var p = document.createElement("p");
    p.textContent = slide.quote;

    var cite = document.createElement("cite");
    if (slide.cite) {
      var link = document.createElement("a");
      link.href = slide.cite.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "— Barkley, " + slide.cite.talk + " @ " + slide.cite.ts;
      cite.appendChild(link);
    }
    block.appendChild(p);
    block.appendChild(cite);
    return block;
  }

  function slideEl(slide, index, meta) {
    var article = document.createElement("article");
    article.className = "slide" + (slide.placeholder ? " slide--placeholder" : "");
    article.id = slide.id || "slide-" + (index + 1);
    article.dataset.index = index;
    article.setAttribute("tabindex", "-1");

    if (slide.id === "title") {
      article.classList.add("slide--title");

      var kicker = document.createElement("p");
      kicker.className = "slide__kicker";
      kicker.textContent = slide.kicker || "Presentation";

      var h2 = document.createElement("h2");
      h2.className = "slide__title";
      h2.innerHTML = slide.title; // title text may carry <em>

      var sub = document.createElement("p");
      sub.className = "slide__sub";
      sub.textContent = meta.subtitle;

      var sources = document.createElement("ul");
      sources.className = "slide__sources";
      meta.sources.forEach(function (s) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = s.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = s.label;
        li.appendChild(a);
        sources.appendChild(li);
      });

      article.appendChild(kicker);
      article.appendChild(h2);
      article.appendChild(sub);
      article.appendChild(sources);

      if (slide.quote) {
        var tb = quoteBlock(slide);
        tb.classList.add("slide__quote--title");
        article.appendChild(tb);
      }

      return article;
    }

    var k = document.createElement("p");
    k.className = "slide__kicker";
    k.textContent = slide.kicker || "";

    var h = document.createElement("h2");
    h.className = "slide__title";
    h.innerHTML = slide.title;

    var body = document.createElement("ul");
    body.className = "slide__body";
    slide.body.forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      body.appendChild(li);
    });

    article.appendChild(k);
    article.appendChild(h);
    article.appendChild(body);

    if (slide.quote) {
      article.appendChild(quoteBlock(slide));
    }

    return article;
  }

  function build(deck) {
    var root = document.getElementById("deck");
    deck.slides.forEach(function (s, i) {
      root.appendChild(slideEl(s, i, deck.meta));
    });
    document.getElementById("slideTotal").textContent = deck.slides.length;
    return root;
  }

  /* ---------- navigation ---------- */

  function slides() {
    return Array.prototype.slice.call(document.querySelectorAll(".slide"));
  }

  function currentIndex() {
    var els = slides();
    var mid = window.innerHeight / 2;
    for (var i = 0; i < els.length; i++) {
      var r = els[i].getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) return i;
    }
    return 0;
  }

  function goTo(index, opts) {
    var els = slides();
    if (index < 0) index = 0;
    if (index > els.length - 1) index = els.length - 1;
    els[index].scrollIntoView({ behavior: (opts && opts.instant) ? "auto" : "smooth", block: "start" });
    els[index].focus({ preventScroll: true });
    var params = new URLSearchParams(window.location.search);
    params.set("slide", String(index + 1));
    history.replaceState(null, "", "?" + params.toString() + "#" + els[index].id);
  }

  function next() { goTo(currentIndex() + 1); }
  function prev() { goTo(currentIndex() - 1); }

  function onKey(e) {
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || e.metaKey || e.ctrlKey) return;
    switch (e.key) {
      case "ArrowRight": case "ArrowDown": case "PageDown": case " ": e.preventDefault(); next(); break;
      case "ArrowLeft": case "ArrowUp": case "PageUp": e.preventDefault(); prev(); break;
      case "Home": e.preventDefault(); goTo(0); break;
      case "End": e.preventDefault(); goTo(slides().length - 1); break;
      default: break;
    }
  }

  function updateProgress() {
    var idx = currentIndex();
    var total = slides().length;
    var pct = (total <= 1) ? 0 : (idx / (total - 1)) * 100;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressCursor").style.left = pct + "%";
    document.getElementById("slideIndex").textContent = idx + 1;
  }

  /* ---------- boot ---------- */

  function boot() {
    build(DECK);
    var params = new URLSearchParams(window.location.search);
    var target = parseInt(params.get("slide"), 10);
    if (!isNaN(target) && target >= 1) {
      // wait a tick so fonts/layout settle; instant jump
      setTimeout(function () { goTo(target - 1, { instant: true }); }, 0);
    }
    updateProgress();

    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", boot);
    } else {
      boot();
    }
  }

  /* expose for tests */
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { toText: toText, slideEl: slideEl };
  }
})();
