/* ЗАГРАНЬ — общий скрипт: шапка, подвал, хранилище, билеты, поиск, страницы */
(function () {
"use strict";

const UNIS = window.UNIS || [];
const ARTICLES = window.ARTICLES || [];
const TERMS = window.TERMS || [];
const DIRS = window.DIRS || {};
const byId = Object.fromEntries(UNIS.map(u => [u.id, u]));
const artById = Object.fromEntries(ARTICLES.map(a => [a.id, a]));
const termByKey = {};
TERMS.forEach(t => { termByKey[t.id] = t; if (t.alias) termByKey[t.alias] = t; });

/* ---------- вспомогательные функции ---------- */
// статья-пример лежит отдельным файлом в pages/articles/, остальные открываются через шаблон pages/article.html
const STATIC_ARTICLES = ["free-europe"];
const artHref = id => STATIC_ARTICLES.includes(id) ? `${ROOT}pages/articles/${id}.html` : `${url("article.html")}?id=${id}`;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const params = new URLSearchParams(location.search);
// страницы лежат на разной глубине (index.html, pages/, pages/articles/), поэтому пути считаем от корня сайта
const ROOT = document.body.dataset.root || "";
const PAGES = {"index.html": "index.html", "universities.html": "pages/universities.html", "university.html": "pages/university.html", "articles.html": "pages/articles.html", "article.html": "pages/article.html", "glossary.html": "pages/glossary.html", "tests.html": "pages/tests.html", "match.html": "pages/tests/match.html", "quiz.html": "pages/tests/quiz.html", "compare.html": "pages/compare.html", "saved.html": "pages/saved.html", "about.html": "pages/about.html"};
const url = file => ROOT + (PAGES[file] || file);
const nbsp = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const fee = u => u.feeYear == null ? "см. сайт" : u.feeYear <= 1000 ? (u.feeYear === 0 ? "€0" : "≈ €" + nbsp(u.feeYear)) : "≈ €" + nbsp(Math.round(u.feeYear / 100) * 100);
const ielts = u => u.ielts == null ? "—" : u.ielts.toFixed(1);
const shortDeadline = u => u.deadline.split(/[(;]/)[0].trim().replace(/[,.]$/, "");
const uniImg = id => `${ROOT}images/unis/${id}.jpg`;
const artImg = a => a.photo.uni ? uniImg(a.photo.uni) : `${ROOT}images/photos/${a.photo.file}`;
const artCredit = a => {
  const c = a.photo.uni ? (byId[a.photo.uni] || {}).photo : (window.PHOTO_CREDITS || {})[a.photo.file.replace(/\.\w+$/, "")];
  return c ? `Фото: ${c.author}, ${c.license}` : "";
};
const uniCredit = u => u.photo ? `Фото: ${u.photo.author}, ${u.photo.license}` : "";
const fmtDate = d => new Date(d).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
const plural = (n, a, b, c) => { const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? a : m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? b : c; };

/* ---------- хранилище ---------- */
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem("zagran:" + k)) || []; } catch (e) { return []; } },
  set(k, v) { try { localStorage.setItem("zagran:" + k, JSON.stringify(v)); } catch (e) {} },
  has(k, id) { return this.get(k).includes(id); },
  toggle(k, id, max) {
    const list = this.get(k); const i = list.indexOf(id);
    if (i >= 0) list.splice(i, 1);
    else { if (max && list.length >= max) return null; list.push(id); }
    this.set(k, list); return i < 0;
  }
};

/* ---------- иконки (рисованные линии) ---------- */
const ICONS = {
  search: '<path d="M10.6 4.2c3.6-.2 6.4 2.6 6.3 6.2-.1 3.4-2.9 6.1-6.3 6.1-3.5 0-6.3-2.8-6.2-6.3.1-3.3 2.8-5.9 6.2-6z" /><path d="M15.4 15.3c1.5 1.4 2.9 2.9 4.4 4.4" />',
  heart: '<path d="M12 19.6c-3.3-2.4-7.6-5.6-7.9-9.4-.2-2.8 1.8-4.9 4.2-4.8 1.6.1 2.9 1 3.7 2.4.8-1.5 2.2-2.4 3.8-2.4 2.4 0 4.3 2.1 4.1 4.8-.3 3.8-4.6 7-7.9 9.4z" />',
  compare: '<path d="M7.2 4.6c0 4.9.1 9.9-.1 14.8M16.9 4.7c0 4.9-.1 9.8 0 14.7M3.7 8.2c1.2-1.2 2.3-2.3 3.5-3.6 1.2 1.3 2.3 2.4 3.4 3.5M13.4 15.9c1.2 1.2 2.3 2.4 3.5 3.5 1.1-1.1 2.3-2.3 3.4-3.4" />',
  arrow: '<path d="M4.4 12.1c4.9-.1 9.9 0 14.9-.1M13.6 6.4c1.9 1.9 3.8 3.8 5.7 5.7-1.9 1.9-3.8 3.8-5.6 5.6" />',
  back: '<path d="M19.6 12.1c-4.9-.1-9.9 0-14.9-.1M10.4 6.4C8.5 8.3 6.6 10.2 4.7 12.1c1.9 1.9 3.8 3.8 5.6 5.6" />',
  close: '<path d="M6 6.2c4 3.9 8 7.8 11.9 11.8M18 6.1c-4 4-7.9 7.9-11.9 11.9" />',
  plus: '<path d="M12 5c.1 4.7 0 9.4 0 14M5 12.1c4.7-.1 9.3 0 14 0" />',
  check: '<path d="M5 12.6c1.6 1.6 3.3 3.2 4.9 4.9 3-3.6 6-7.3 9.1-10.9" />',
  ext: '<path d="M13.5 4.6h5.9v5.8M19.3 4.7c-3.6 3.6-7.2 7.2-10.7 10.7M10.4 5.3H5.1v13.6h13.6v-5.3" />'
};
const icon = (n, cls = "icon") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

/* ---------- штрихкод ---------- */
function barcode(seed, w = 64, h = 160, vertical = true, light = false) {
  let x = 0, s = 0; for (const c of String(seed)) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  const rnd = () => (s = (s * 1103515245 + 12345) >>> 0) / 4294967296;
  const len = vertical ? h : w, thick = vertical ? w : h; let bars = "";
  while (x < len) {
    const b = 1 + Math.floor(rnd() * 3.2), g = 1 + Math.floor(rnd() * 2.6);
    if (x + b > len) break;
    bars += vertical ? `<rect x="0" y="${x}" width="${thick}" height="${b}"/>` : `<rect x="${x}" y="0" width="${b}" height="${thick}"/>`;
    x += b + g;
  }
  const svg = `<svg class="barcode${vertical ? " barcode--v" : ""}${light ? " barcode--light" : ""}" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="currentColor" aria-hidden="true">${bars}</svg>`;
  // на телефоне корешки горизонтальные — отдаём горизонтальный двойник
  return vertical ? svg + barcode(seed + "m", Math.min(220, h), 36, false, light).replace('class="barcode', 'class="barcode barcode--m') : svg;
}

/* ---------- логотип ---------- */
const LOGO = window.LOGO_SVG || '<span style="font:900 24px/1 Golos Text">ЗАГРАНЬ</span>';

/* ---------- шапка и подвал ---------- */
const NAV = [
  ["universities.html", "Вузы", ["universities", "university"]],
  ["articles.html", "Статьи", ["articles", "article"]],
  ["glossary.html", "Словарь", ["glossary"]],
  ["tests.html", "Тесты", ["tests", "match", "quiz"]],
  ["compare.html", "Сравнение", ["compare"]],
  ["about.html", "О нас", ["about"]]
];
const page = document.body.dataset.page;

function renderChrome() {
  // шапка и подвал уже прописаны в HTML (ссылки видны без JS); строим их только если их нет
  let header = $(".header");
  if (!header) {
  header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `<div class="container header__inner">
    <a class="logo" href="${url("index.html")}" aria-label="ЗАГРАНЬ — на главную">${LOGO}</a>
    <nav class="nav">${NAV.map(([h, t, p]) => `<a href="${url(h)}"${p.includes(page) ? ' class="is-active"' : ""}>${t}</a>`).join("")}</nav>
    <div class="header__tools">
      <button class="icon-btn" data-action="search" aria-label="Поиск">${icon("search")}</button>
      <a class="icon-btn" href="${url("compare.html")}" aria-label="Сравнение">${icon("compare")}<span class="badge" data-badge="compare"></span></a>
      <a class="icon-btn" href="${url("saved.html")}" aria-label="Сохранённое">${icon("heart")}<span class="badge" data-badge="saved"></span></a>
      <a class="btn btn--primary header__cta" href="${url("match.html")}">Подобрать вуз</a>
      <button class="icon-btn burger" data-action="menu" aria-label="Меню" aria-expanded="false"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/></svg></button>
    </div></div>`;
  document.body.prepend(header);
  }
  const mnav = document.createElement("div");
  mnav.className = "mnav"; mnav.setAttribute("data-mnav", "");
  mnav.innerHTML = `<div class="mnav__top"><a class="logo" href="${url("index.html")}" aria-label="ЗАГРАНЬ">${LOGO}</a>
      <button class="icon-btn" data-action="menu-close" aria-label="Закрыть меню">${icon("close")}</button></div>
    <nav class="mnav__links">${NAV.map(([h, t, p]) => `<a href="${url(h)}"${p.includes(page) ? ' class="is-active"' : ""}>${t}${h === "compare.html" ? '<span class="badge badge--inline" data-badge="compare"></span>' : ""}</a>`).join("")}</nav>
    <div class="mnav__btns"><a class="btn btn--primary btn--block" href="${url("match.html")}">Подобрать вуз</a><a class="btn btn--paper btn--block" href="${url("saved.html")}">Сохранённое</a>
      <button class="mnav__search" data-action="search">${icon("search")}<span>Вуз, город или термин</span></button></div>`;
  header.after(mnav);

  if (!$(".footer")) {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `<div class="container">
    <div class="footer__top">
      <a class="logo" href="${url("index.html")}" aria-label="ЗАГРАНЬ">${LOGO}</a>
      <nav class="footer__nav">${NAV.map(([h, t]) => `<a href="${url(h)}">${t}</a>`).join("")}</nav>
      <form class="footer__form" data-form="subscribe" novalidate>
        <input type="email" placeholder="Почта для рассылки" aria-label="Почта" required>
        <button type="submit">${icon("arrow")}</button>
      </form>
    </div>
    <div class="footer__bottom">
      <span>© 2026 ЗАГРАНЬ</span>
      <span>Фатикова Кристина, Шиян Валерия</span>
    </div></div>`;
  document.body.append(footer);
  }

  const extra = document.createElement("div");
  extra.innerHTML = `
    <div class="tray" aria-live="polite"></div>
    <div class="overlay" data-overlay>
      <div class="overlay__box" role="dialog" aria-label="Поиск">
        <label class="search">${icon("search")}<input type="search" placeholder="Вуз, город, статья или термин" data-search-input></label>
        <div class="overlay__results" data-search-results></div>
      </div>
    </div>
    <div class="toast" role="status"></div>
    <div class="sheet-backdrop"></div>`;
  document.body.append(...extra.children);
  updateBadges();
}

function updateBadges() {
  $$("[data-badge]").forEach(b => {
    const n = b.dataset.badge === "saved" ? store.get("unis").length + store.get("articles").length : store.get("compare").length;
    if (b.dataset.count !== undefined && +b.dataset.count !== n) { b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
    b.textContent = n || ""; b.dataset.count = n;
  });
  renderTray();
}

let toastTimer;
function toast(msg) {
  const t = $(".toast"); if (!t) return;
  t.textContent = msg; t.classList.add("is-visible");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2200);
}

/* ---------- панель сравнения ---------- */
function renderTray() {
  const tray = $(".tray"); if (!tray) return;
  const list = store.get("compare");
  const show = list.length && page !== "compare";
  document.body.classList.toggle("has-tray", !!show);
  if (!show) { tray.classList.remove("is-visible"); return; }
  const slots = [0, 1, 2].map(i => {
    const u = byId[list[i]];
    return u ? `<div class="tray__slot"><span>${esc(u.name)}</span><button data-compare="${u.id}" aria-label="Убрать">${icon("close")}</button></div>`
             : `<div class="tray__slot tray__slot--empty">Добавь ещё вуз</div>`;
  }).join("");
  tray.innerHTML = `<div class="tray__label"><b>${list.length}/3</b>сравнение</div>${slots}
    <a class="btn btn--primary" href="${url("compare.html")}"${list.length < 2 ? " disabled" : ""}>Сравнить</a>`;
  tray.classList.add("is-visible");
}

/* ---------- билет вуза ---------- */
function ticket(u, row = false) {
  const saved = store.has("unis", u.id), cmp = store.has("compare", u.id);
  const data = `<dl class="ticket__data">
      <div><dt>Плата в год</dt><dd>${fee(u)}</dd></div>
      <div><dt>IELTS</dt><dd>${ielts(u)}</dd></div>
      ${row ? `<div><dt>Дедлайн</dt><dd class="ticket__dl">${esc(shortDeadline(u))}</dd></div>` : ""}
    </dl>`;
  const actions = `<div class="ticket__actions">
      <button class="toggle-compare" data-compare="${u.id}">${icon(cmp ? "check" : "plus")}${cmp ? "В сравнении" : "Сравнить"}</button>
      <button class="toggle-save${saved ? " is-on" : ""}" data-save="${u.id}" aria-label="Сохранить">${icon("heart")}</button>
    </div>`;
  const tags = `<div class="tags">${u.english ? '<span class="tag tag--accent">На английском</span>' : ""}${u.feeYear != null && u.feeYear <= 1000 ? '<span class="tag">Без платы</span>' : ""}${u.dirs.slice(0, row ? 3 : 0).map(d => `<span class="tag">${DIRS[d]}</span>`).join("")}</div>`;
  if (row) return `<article class="ticket ticket--row${saved ? " is-saved" : ""}" data-uni="${u.id}">
    <a class="ticket__main" href="${url("university.html")}?id=${u.id}">
      <div class="ticket__photo" style="background-image:url(${uniImg(u.id)})"></div>
      <div class="ticket__info"><div class="ticket__city">${esc(u.city)} · ${esc(u.country)}</div><h3 class="ticket__name">${esc(u.name)}</h3>${tags}</div>
    </a>
    <div class="ticket__stub">${data}${actions}</div></article>`;
  return `<article class="ticket${saved ? " is-saved" : ""}" data-uni="${u.id}">
    <a class="ticket__main" href="${url("university.html")}?id=${u.id}">
      <div class="ticket__top"><span>${esc(u.country)}</span><span>${esc(u.city)}</span></div>
      <div class="ticket__photo" style="background-image:url(${uniImg(u.id)})"><span class="credit">${esc(uniCredit(u))}</span></div>
      <h3 class="ticket__name">${esc(u.name)}</h3>${tags}
    </a>
    <div class="ticket__stub">${data}${actions}</div></article>`;
}

function refreshTickets() {
  $$("[data-uni]").forEach(el => {
    const id = el.dataset.uni;
    el.classList.toggle("is-saved", store.has("unis", id));
  });
  $$("[data-save]").forEach(b => b.classList.toggle("is-on", store.has(b.dataset.saveKind || "unis", b.dataset.save)));
  $$(".toggle-compare[data-compare]").forEach(b => {
    const on = store.has("compare", b.dataset.compare);
    b.innerHTML = icon(on ? "check" : "plus") + (on ? "В сравнении" : "Сравнить");
  });
  $$("[data-save-label]").forEach(b => { b.lastChild.textContent = store.has(b.dataset.saveKind || "unis", b.dataset.save) ? "Сохранено" : "Сохранить"; });
  updateBadges();
}

/* ---------- общие события ---------- */
document.addEventListener("click", e => {
  const save = e.target.closest("[data-save]");
  if (save) {
    e.preventDefault();
    const kind = save.dataset.saveKind || "unis";
    const on = store.toggle(kind, save.dataset.save);
    toast(on ? "Сохранено" : "Убрано из сохранённого");
    refreshTickets(); document.dispatchEvent(new Event("zagran:change")); return;
  }
  const cmp = e.target.closest("[data-compare]");
  if (cmp) {
    e.preventDefault();
    const on = store.toggle("compare", cmp.dataset.compare, 3);
    if (on === null) toast("Сравнивать можно до трёх вузов");
    else toast(on ? "Добавлено в сравнение" : "Убрано из сравнения");
    refreshTickets(); document.dispatchEvent(new Event("zagran:change")); return;
  }
  if (e.target.closest('[data-action="menu"]')) { setMenu(true); return; }
  if (e.target.closest('[data-action="menu-close"]') || e.target.closest(".mnav__links a")) { setMenu(false); if (!e.target.closest(".mnav__links a")) return; }
  if (e.target.closest('[data-action="search"]')) { setMenu(false); openSearch(); return; }
  if (e.target.closest(".filter-open")) { document.body.classList.add("filters-open"); return; }
  if (e.target.closest("[data-filters-close]") || e.target.matches(".sheet-backdrop")) { document.body.classList.remove("filters-open"); return; }
  if (e.target.matches("[data-overlay]")) closeSearch();
});

document.addEventListener("submit", e => {
  if (e.target.dataset.form !== "subscribe") return;
  e.preventDefault();
  const inp = $("input", e.target);
  if (!/^\S+@\S+\.\S+$/.test(inp.value)) { toast("Проверь почту"); inp.focus(); return; }
  inp.value = ""; toast("Готово — первое письмо придёт в пятницу");
});

/* ---------- мобильное меню ---------- */
function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  const b = $(".burger"); if (b) b.setAttribute("aria-expanded", String(open));
}

/* ---------- поиск ---------- */
function openSearch() {
  const o = $("[data-overlay]"); o.classList.add("is-open");
  const i = $("[data-search-input]"); i.value = ""; renderSearch(""); setTimeout(() => i.focus(), 10);
}
function closeSearch() { $("[data-overlay]").classList.remove("is-open"); }
const norm = s => s.toLowerCase().replace(/ё/g, "е");
function renderSearch(q) {
  const box = $("[data-search-results]"); q = norm(q.trim());
  if (!q) { box.innerHTML = `<div class="overlay__group">Например: Делфт, IELTS, бесплатно</div>`; return; }
  const unis = UNIS.filter(u => norm([u.name, u.city, u.country].join(" ")).includes(q)).slice(0, 6);
  const arts = ARTICLES.filter(a => norm(a.title + " " + a.lead).includes(q)).slice(0, 4);
  const terms = TERMS.filter(t => norm([t.term, t.ru, t.full].join(" ")).includes(q)).slice(0, 4);
  let h = "";
  if (unis.length) h += `<div class="overlay__group">Вузы</div>` + unis.map(u => `<a href="${url("university.html")}?id=${u.id}"><span>${esc(u.name)}</span><span class="muted">${esc(u.city)}</span></a>`).join("");
  if (arts.length) h += `<div class="overlay__group">Статьи</div>` + arts.map(a => `<a href="${artHref(a.id)}"><span>${esc(a.title)}</span><span class="muted">${a.rubric}</span></a>`).join("");
  if (terms.length) h += `<div class="overlay__group">Словарь</div>` + terms.map(t => `<a href="${url("glossary.html")}#${t.id}"><span>${esc(t.term)}</span><span class="muted">${esc(t.ru)}</span></a>`).join("");
  box.innerHTML = h || `<div class="overlay__group">Ничего не нашлось</div>`;
}
document.addEventListener("input", e => { if (e.target.matches("[data-search-input]")) renderSearch(e.target.value); });
document.addEventListener("keydown", e => {
  const o = $("[data-overlay]"); if (!o) return;
  if (e.key === "Escape") { closeSearch(); setMenu(false); document.body.classList.remove("filters-open"); }
  if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
  if (o.classList.contains("is-open") && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter")) {
    const links = $$("[data-search-results] a"); if (!links.length) return;
    let i = links.findIndex(a => a.classList.contains("is-focus"));
    if (e.key === "Enter") { e.preventDefault(); location.href = (links[i] || links[0]).href; return; }
    e.preventDefault(); links.forEach(a => a.classList.remove("is-focus"));
    i = e.key === "ArrowDown" ? (i + 1) % links.length : (i - 1 + links.length) % links.length;
    links[i].classList.add("is-focus"); links[i].scrollIntoView({ block: "nearest" });
  }
});

/* ---------- подсказки к терминам ---------- */
function enhanceTerms(root) {
  $$(".term", root).forEach(el => {
    const t = termByKey[el.dataset.term]; if (!t) return;
    el.tabIndex = 0;
    el.insertAdjacentHTML("beforeend", `<span class="term__tip" role="tooltip"><b>${esc(t.term)}</b>${esc(t.short)}</span>`);
    el.addEventListener("click", () => location.href = url("glossary.html") + "#" + t.id);
  });
}

/* ---------- общие блоки ---------- */
const photoTicket = (img, inner, stub, cls = "", credit = "") =>
  `<div class="tphoto ${cls}"><div class="tphoto__img" style="background-image:url(${img})">${inner || ""}${credit ? `<span class="credit">${esc(credit)}</span>` : ""}</div><div class="tphoto__stub">${stub || ""}</div></div>`;
const articleRow = a => `<a class="rowlist__item" href="${artHref(a.id)}">
  <span class="rowlist__meta muted">${a.rubric}</span>
  <span class="rowlist__title h3">${esc(a.title)}</span>
  <span class="muted small">${a.read} мин</span>
  <span class="rowlist__thumb" style="background-image:url(${artImg(a)})"></span></a>`;
const articleCard = (a, big) => `<a class="acard" href="${artHref(a.id)}">
  <div class="acard__photo" style="background-image:url(${artImg(a)})${big ? ";aspect-ratio:4/3" : ""}"></div>
  <span class="muted small">${a.rubric} · ${a.read} мин</span>
  <h3 class="${big ? "h2" : "h3"}">${esc(a.title)}</h3></a>`;

/* =====================================================================
   СТРАНИЦЫ
   ===================================================================== */
const pages = {};

/* ---------- главная ---------- */
pages.home = () => {
  const pick = ["eth", "tudelft", "bocconi", "aalto", "kuleuven", "uva", "polimi", "tum", "edinburgh", "cuni", "lund", "epfl"].map(id => byId[id]).filter(Boolean);
  const all = $("[data-all-unis]"); if (all) all.textContent = `Все ${UNIS.length}`;
  $("#home-unis").innerHTML = pick.map(u => ticket(u)).join("");
  const [first, ...rest] = ARTICLES;
  $("#home-articles").innerHTML = `<div class="mosaic">${articleCard(first, true)}<div class="stack gap-32">${rest.slice(0, 3).map(a => articleCard(a)).join("")}</div></div>`;
  $$("[data-barcode]").forEach(el => { const [w, h, v, l] = el.dataset.barcode.split(","); el.innerHTML = barcode(el.dataset.seed || "z", +w, +h, v === "v", l === "l"); });
  const form = $("#matchbar");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const p = new URLSearchParams(new FormData(form));
    for (const [k, v] of [...p]) if (!v) p.delete(k);
    location.href = url("match.html") + "?" + p.toString();
  });
};

/* ---------- каталог ---------- */
pages.universities = () => {
  const countries = [...new Set(UNIS.map(u => u.country))].sort((a, b) => a.localeCompare(b, "ru"));
  const count = (f) => UNIS.filter(f).length;
  const st = {
    q: params.get("q") || "", countries: new Set(params.getAll("country")), regions: new Set(params.getAll("region")),
    dirs: new Set(params.getAll("dir")), budget: +(params.get("budget") || 60000), english: params.get("english") === "1",
    free: params.get("free") === "1", ielts: params.get("ielts") || "", sort: "name", view: "card", shown: 12
  };
  const checks = (name, items, set) => items.map(([v, t, n]) => `<label class="check"><input type="checkbox" name="${name}" value="${esc(v)}"${set.has(v) ? " checked" : ""}><span class="check__label">${esc(t)}</span><span class="check__count">${n}</span></label>`).join("");
  $("#filters").innerHTML = `
    <details class="filter-group" open><summary>Регион</summary>${checks("region", Object.entries(REGIONS).map(([k, t]) => [k, t, count(u => u.region === k)]), st.regions)}</details>
    <details class="filter-group" open><summary>Направление</summary>${checks("dir", Object.entries(DIRS).map(([k, t]) => [k, t, count(u => u.dirs.includes(k))]), st.dirs)}</details>
    <details class="filter-group" open><summary>Плата в год</summary>
      <input class="range" type="range" min="0" max="60000" step="1000" value="${st.budget}" name="budget" aria-label="Бюджет в год">
      <div class="range-value"><span>€0</span><span data-budget-out></span></div>
      <label class="check"><input type="checkbox" name="free"${st.free ? " checked" : ""}><span class="check__label">Без платы за обучение</span><span class="check__count">${count(u => u.feeYear != null && u.feeYear <= 1000)}</span></label>
    </details>
    <details class="filter-group" open><summary>Язык</summary>
      <label class="check"><input type="checkbox" name="english"${st.english ? " checked" : ""}><span class="check__label">Есть программы на английском</span><span class="check__count">${count(u => u.english)}</span></label>
      <div class="field" style="margin-top:8px"><span class="field__label">Мой IELTS</span>
        <select class="select" name="ielts" aria-label="Балл IELTS"><option value="">Не важно</option>${["5.5", "6", "6.5", "7", "7.5"].map(v => `<option value="${v}"${st.ielts === v ? " selected" : ""}>${(+v).toFixed(1)}</option>`).join("")}</select></div>
    </details>
    <details class="filter-group"${st.countries.size ? " open" : ""}><summary>Страна</summary>${checks("country", countries.map(c => [c, c, count(u => u.country === c)]), st.countries)}</details>`;
  const search = $("#cat-search"); search.value = st.q;

  const apply = () => {
    const q = norm(st.q.trim());
    let list = UNIS.filter(u =>
      (!q || norm(u.name + " " + u.city + " " + u.country).includes(q)) &&
      (!st.countries.size || st.countries.has(u.country)) &&
      (!st.regions.size || st.regions.has(u.region)) &&
      (!st.dirs.size || [...st.dirs].some(d => u.dirs.includes(d))) &&
      (st.budget >= 60000 || (u.feeYear != null && u.feeYear <= st.budget)) &&
      (!st.free || (u.feeYear != null && u.feeYear <= 1000)) &&
      (!st.english || u.english) &&
      (!st.ielts || u.ielts == null || u.ielts <= +st.ielts));
    const f = u => u.feeYear == null ? Infinity : u.feeYear;
    const sorters = {
      name: (a, b) => a.name.localeCompare(b.name),
      cheap: (a, b) => f(a) - f(b),
      expensive: (a, b) => (b.feeYear || 0) - (a.feeYear || 0),
      ielts: (a, b) => (a.ielts || 0) - (b.ielts || 0),
      country: (a, b) => a.country.localeCompare(b.country, "ru") || a.name.localeCompare(b.name)
    };
    list.sort(sorters[st.sort]);
    $("[data-budget-out]").textContent = st.budget >= 60000 ? "любая" : "до €" + nbsp(st.budget);
    $("#cat-count").textContent = list.length;
    $("#cat-count-label").textContent = plural(list.length, "вуз", "вуза", "вузов");
    const cm = $("#cat-count-m"); if (cm) cm.textContent = `${list.length} из ${UNIS.length}`;
    const sc = $("[data-show-count]"); if (sc) sc.textContent = `Показать ${list.length} ${plural(list.length, "вуз", "вуза", "вузов")}`;
    const active = st.countries.size + st.regions.size + st.dirs.size + (st.budget < 60000) + st.free + st.english + !!st.ielts;
    const fc = $("[data-filter-count]"); if (fc) fc.textContent = active ? ` · ${active}` : "";
    const grid = $("#cat-list");
    grid.className = st.view === "row" ? "stack gap-16" : "grid-3";
    grid.innerHTML = list.length ? list.slice(0, st.shown).map(u => ticket(u, st.view === "row")).join("")
      : `<div class="empty" style="grid-column:1/-1"><h3 class="h3">Ничего не нашлось</h3><button class="btn btn--secondary" data-reset>Сбросить фильтры</button></div>`;
    const more = $("#cat-more");
    more.classList.toggle("is-hidden", list.length <= st.shown);
    more.textContent = `Показать ещё ${Math.min(12, list.length - st.shown)}`;
    const p = new URLSearchParams();
    if (st.q) p.set("q", st.q);
    st.countries.forEach(v => p.append("country", v)); st.regions.forEach(v => p.append("region", v)); st.dirs.forEach(v => p.append("dir", v));
    if (st.budget < 60000) p.set("budget", st.budget); if (st.free) p.set("free", 1); if (st.english) p.set("english", 1); if (st.ielts) p.set("ielts", st.ielts);
    history.replaceState(null, "", "?" + p.toString());
  };
  $("#filters").addEventListener("input", e => {
    const t = e.target, sets = { country: st.countries, region: st.regions, dir: st.dirs };
    if (sets[t.name]) t.checked ? sets[t.name].add(t.value) : sets[t.name].delete(t.value);
    if (t.name === "budget") st.budget = +t.value;
    if (t.name === "free") st.free = t.checked;
    if (t.name === "english") st.english = t.checked;
    if (t.name === "ielts") st.ielts = t.value;
    st.shown = 12; apply();
  });
  search.addEventListener("input", () => { st.q = search.value; st.shown = 12; apply(); });
  $("#cat-sort").addEventListener("change", e => { st.sort = e.target.value; apply(); });
  $$("[data-view]").forEach(b => b.addEventListener("click", () => {
    st.view = b.dataset.view; $$("[data-view]").forEach(x => x.classList.toggle("is-active", x === b)); apply();
  }));
  $("#cat-more").addEventListener("click", () => { st.shown += 12; apply(); });
  document.addEventListener("click", e => {
    if (!e.target.closest("[data-reset]")) return;
    st.q = ""; search.value = ""; st.countries.clear(); st.regions.clear(); st.dirs.clear(); st.budget = 60000; st.free = st.english = false; st.ielts = "";
    $$("#filters input[type=checkbox]").forEach(c => c.checked = false);
    $("#filters [name=budget]").value = 60000; $("#filters [name=ielts]").value = ""; st.shown = 12; apply();
  });
  $("#cat-barcode").innerHTML = barcode("catalog", 240, 44, false);
  apply();
};

/* ---------- страница вуза ---------- */
pages.university = () => {
  const u = byId[params.get("id")] || UNIS[0];
  document.title = u.name + " — ЗАГРАНЬ";
  const host = s => { try { return new URL(s).hostname.replace(/^www\./, ""); } catch (e) { return s; } };
  $("#uni-panel").innerHTML = `
    <div class="muted">${esc(u.city)} · ${esc(u.country)}</div>
    <h1 class="h2">${esc(u.name)}</h1>
    <div class="tags">${u.english ? '<span class="tag tag--accent">На английском</span>' : ""}${u.feeYear != null && u.feeYear <= 1000 ? '<span class="tag">Без платы</span>' : ""}</div>
    <dl class="facts">
      <div><dt>Плата в год</dt><dd>${fee(u)}</dd></div>
      <div><dt>IELTS</dt><dd>${u.ielts == null ? "по программе" : ielts(u)}</dd></div>
      <div><dt>Язык</dt><dd>${esc(u.lang)}</dd></div>
    </dl>
    <div class="row gap-12">
      <button class="btn btn--primary toggle-compare-btn" data-compare="${u.id}">${icon("compare")}<span></span></button>
      <button class="btn btn--secondary" data-save="${u.id}" data-save-label>${icon("heart")}<span>Сохранить</span></button>
    </div>
    <div class="panel__stub row between">
      <a class="link" href="${esc(u.src[0])}" target="_blank" rel="noopener">${esc(host(u.src[0]))}</a>
      ${barcode(u.id, 120, 40, false)}
    </div>`;
  const syncBtn = () => {
    const b = $(".toggle-compare-btn span"); if (b) b.textContent = store.has("compare", u.id) ? "В сравнении" : "Сравнить";
    const s = $("[data-save-label] span"); if (s) s.textContent = store.has("unis", u.id) ? "Сохранено" : "Сохранить";
  };
  document.addEventListener("zagran:change", syncBtn); syncBtn();

  const mentions = ARTICLES.filter(a => a.unis.includes(u.id));
  const similar = UNIS.filter(x => x.id !== u.id && (x.country === u.country || x.region === u.region) && x.dirs.some(d => u.dirs.includes(d)))
    .sort((a, b) => (b.country === u.country) - (a.country === u.country) || Math.abs((a.feeYear || 0) - (u.feeYear || 0)) - Math.abs((b.feeYear || 0) - (u.feeYear || 0))).slice(0, 3);
  $("#uni-main").innerHTML = `
    ${photoTicket(uniImg(u.id), "", barcode(u.id + "v", 44, 300, true), "uni-photo", uniCredit(u))}
    <section class="band band--compact"><div class="band__body">
      <div><div class="band__num">${u.feeYear == null ? "?" : u.feeYear <= 1000 ? "€0" : "€" + Math.round(u.feeYear / 1000) + "k"}</div><div class="band__label">${u.feeYear != null && u.feeYear <= 1000 ? "плата за обучение" : "плата в год, примерно"}</div></div>
      <div><div class="band__num accent">${u.ielts == null ? "—" : ielts(u)}</div><div class="band__label">${u.ielts == null ? "IELTS по программе" : "минимум IELTS"}</div></div>
      <div><div class="band__num band__num--sm">${esc(shortDeadline(u))}</div><div class="band__label">дедлайн</div></div>
    </div><div class="band__stub">${barcode(u.id + "b", 40, 150, true, true)}</div></section>
    <section class="grid-2">
      <div class="card"><div class="muted small">Плата</div><div class="h4">${esc(u.tuition)}</div></div>
      <div class="card"><div class="muted small">Дедлайн</div><div class="h4">${esc(u.deadline)}</div></div>
      ${u.note ? `<div class="card" style="grid-column:1/-1"><div class="muted small">Важно</div><div>${esc(u.note)}</div></div>` : ""}
    </section>
    <section><div class="section-head"><h2 class="h2">Направления</h2></div>
      <div class="chips">${u.dirs.map(d => `<a class="chip" href="${url("universities.html")}?dir=${d}">${DIRS[d]}</a>`).join("")}</div></section>
    ${mentions.length ? `<section><div class="section-head"><h2 class="h2">В статьях</h2></div><div class="rowlist">${mentions.map(articleRow).join("")}</div></section>` : ""}
    <section><div class="section-head"><h2 class="h2">Похожие</h2><a class="btn btn--ghost" href="${url("universities.html")}?country=${encodeURIComponent(u.country)}">Все в стране</a></div>
      <div class="grid-3">${similar.map(x => ticket(x)).join("")}</div></section>
    <section class="sources"><div>Источники</div>${u.src.map(s => `<div><a href="${esc(s)}" target="_blank" rel="noopener">${esc(s)}</a></div>`).join("")}
      <div style="margin-top:8px">${u.photo ? `Фото: <a href="${esc(u.photo.url)}" target="_blank" rel="noopener">${esc(u.photo.author)}</a>, ${esc(u.photo.license)}` : ""}</div></section>`;
};

/* ---------- статьи ---------- */
pages.articles = () => {
  const rubrics = ["Все", ...new Set(ARTICLES.map(a => a.rubric))];
  let cur = params.get("rubric") || "Все";
  const chips = $("#rubrics");
  const render = () => {
    chips.innerHTML = rubrics.map(r => `<button class="chip${r === cur ? " is-active" : ""}" data-rubric="${r}">${r}</button>`).join("");
    const list = ARTICLES.filter(a => cur === "Все" || a.rubric === cur);
    const [lead, ...rest] = list;
    $("#lead-story").innerHTML = lead ? `<a href="${artHref(lead.id)}" class="lead-story">
      ${photoTicket(artImg(lead), `<div class="tphoto__caption"><span class="small">${lead.rubric} · ${lead.read} мин</span><h2 class="h1">${esc(lead.title)}</h2></div>`, barcode(lead.id, 44, 260, true), "tphoto--hero", artCredit(lead))}</a>` : "";
    $("#article-list").innerHTML = rest.map(articleRow).join("");
  };
  chips.addEventListener("click", e => { const b = e.target.closest("[data-rubric]"); if (!b) return; cur = b.dataset.rubric; render(); });
  render();
};

/* ---------- статья ---------- */
pages.article = () => {
  const a = artById[params.get("id") || document.body.dataset.article] || ARTICLES[0];
  document.title = a.title + " — ЗАГРАНЬ";
  $("#art-head").innerHTML = `
    <div class="muted">${a.rubric} · ${fmtDate(a.date)} · ${a.read} мин</div>
    <h1 class="h1 art-title">${esc(a.title)}</h1>
    <p class="lead art-lead">${esc(a.lead)}</p>
    ${photoTicket(artImg(a), "", barcode(a.id, 44, 300, true), "art-photo", artCredit(a))}`;
  const prose = $("#art-body");
  prose.innerHTML = a.html;
  $$("h2", prose).forEach((h, i) => h.id = "s" + (i + 1));
  enhanceTerms(prose);
  $("#art-toc").innerHTML = $$("h2", prose).map(h => `<a href="#${h.id}">${esc(h.textContent)}</a>`).join("");
  $("#art-save").dataset.save = a.id;
  const tocLinks = $$("#art-toc a");
  const io = new IntersectionObserver(ents => ents.forEach(en => {
    if (en.isIntersecting) tocLinks.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-100px 0px -70% 0px" });
  $$("h2", prose).forEach(h => io.observe(h));
  const unis = a.unis.map(id => byId[id]).filter(Boolean);
  $("#art-unis").innerHTML = unis.length ? `<div class="section-head"><h2 class="h2">Вузы из статьи</h2><span class="muted">${unis.length}</span></div><div class="grid-3">${unis.slice(0, 6).map(u => ticket(u)).join("")}</div>
     ${unis.length > 6 ? `<div class="stack gap-12" style="margin-top:16px">${unis.slice(6).map(u => `<a class="link" href="${url("university.html")}?id=${u.id}">${esc(u.name)}</a>`).join("")}</div>` : ""}` : "";
  const i = ARTICLES.indexOf(a);
  const next = [1, 2, 3].map(k => ARTICLES[(i + k) % ARTICLES.length]);
  $("#art-next").innerHTML = `<div class="section-head"><h2 class="h2">Читать дальше</h2><a class="btn btn--ghost" href="${url("articles.html")}">Все статьи</a></div><div class="grid-3 gap-24">${next.map(x => articleCard(x)).join("")}</div>`;
  $("#art-progress-bar") && window.addEventListener("scroll", () => {
    const r = prose.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (innerHeight * 0.4 - r.top) / r.height));
    $("#art-progress-bar").style.width = (p * 100) + "%";
  }, { passive: true });
  refreshTickets();
};

/* ---------- словарь ---------- */
pages.glossary = () => {
  const sorted = [...TERMS].sort((x, y) => x.term.localeCompare(y.term));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const has = new Set(sorted.map(t => t.term[0].toUpperCase()));
  let letter = "", q = "";
  $("#alphabet").innerHTML = letters.map(l => `<button data-letter="${l}"${has.has(l) ? "" : " disabled"}>${l}</button>`).join("");
  const list = $("#terms");
  list.innerHTML = sorted.map(t => `<details class="termcard" id="${t.id}" data-l="${t.term[0].toUpperCase()}">
    <summary><span class="termcard__term">${esc(t.term)}</span><span class="stack gap-8"><span class="termcard__ru">${esc(t.ru)}</span><span class="muted">${esc(t.short)}</span></span><span class="termcard__toggle"></span></summary>
    <div class="termcard__body"><div class="stack gap-12"><div class="muted small">${esc(t.full)}</div><div>${esc(t.body)}</div></div>
      <div class="stack gap-12"><div class="tip small">${esc(t.example)}</div>
      ${t.articles.length ? `<div class="stack gap-8">${t.articles.map(id => artById[id]).filter(Boolean).map(a => `<a class="link" href="${artHref(a.id)}">${esc(a.title)}</a>`).join("")}</div>` : ""}</div></div></details>`).join("");
  const filter = () => {
    let n = 0;
    $$(".termcard", list).forEach(c => {
      const t = TERMS.find(x => x.id === c.id);
      const ok = (!letter || c.dataset.l === letter) && (!q || (hay => hay.includes(q) || (q.length > 3 && hay.includes(q.slice(0, -1))))(norm([t.term, t.ru, t.full, t.short, t.body, t.example].join(" "))));
      c.classList.toggle("is-hidden", !ok); if (ok) n++;
    });
    $("#terms-empty").classList.toggle("is-hidden", n > 0);
    $("#terms-count").textContent = n;
  };
  $("#alphabet").addEventListener("click", e => {
    const b = e.target.closest("[data-letter]"); if (!b) return;
    letter = letter === b.dataset.letter ? "" : b.dataset.letter;
    $$("#alphabet button").forEach(x => x.classList.toggle("is-active", x.dataset.letter === letter)); filter();
  });
  $("#term-search").addEventListener("input", e => { q = norm(e.target.value.trim()); filter(); });
  const openHash = () => {
    const el = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el && el.classList.contains("termcard")) { el.open = true; setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 50); }
  };
  window.addEventListener("hashchange", openHash); openHash(); filter();
};

/* ---------- подбор вуза ---------- */
function scoreUni(u, ans) {
  const W = { dir: 3, budget: 3, region: 2, lang: 2, ielts: 1.5, city: 1 };
  if (ans.prio && W[ans.prio]) W[ans.prio] *= 2;
  let sum = 0, tot = 0; const reasons = [];
  const add = (k, v, okText, noText) => { sum += W[k] * v; tot += W[k]; if (v >= 0.7) reasons.push([true, okText]); else if (noText) reasons.push([false, noText]); };
  if (ans.dir) add("dir", u.dirs.includes(ans.dir) ? 1 : 0, DIRS[ans.dir], "нет направления «" + DIRS[ans.dir] + "»");
  if (ans.budget) {
    const b = ans.budget === "any" ? Infinity : +ans.budget;
    let v = u.feeYear == null ? 0.5 : u.feeYear <= b ? 1 : u.feeYear <= b * 1.5 ? 0.4 : 0;
    add("budget", v, b === Infinity ? "бюджет не важен" : "в бюджете", u.feeYear == null ? "цена — на сайте" : "дороже бюджета");
  }
  if (ans.region) add("region", ans.region === "any" || u.region === ans.region ? 1 : 0, u.country, "другой регион");
  if (ans.lang) add("lang", ans.lang === "local" ? 1 : u.english ? 1 : 0, u.english ? "есть на английском" : "язык: " + u.lang, "только " + u.lang);
  if (ans.ielts) {
    const s = +ans.ielts;
    let v = s === 0 ? 0.5 : u.ielts == null ? 0.8 : s >= u.ielts ? 1 : s + 0.5 >= u.ielts ? 0.4 : 0;
    if (ans.lang === "local" && !u.english) v = 1;
    add("ielts", v, u.ielts && s ? `IELTS ${u.ielts.toFixed(1)} — хватает` : "IELTS по программе", s === 0 ? "нужен IELTS" : `нужен IELTS ${u.ielts ? u.ielts.toFixed(1) : ""}`);
  }
  if (ans.city) add("city", ans.city === "any" || u.citySize === ans.city ? 1 : 0.3, u.citySize === "big" ? "большой город" : "студенческий город", u.citySize === "big" ? "город большой" : "город небольшой");
  return { u, pct: tot ? Math.round(sum / tot * 100) : 0, reasons };
}

pages.match = () => {
  const STEPS = window.MATCH_STEPS;
  const ans = {}; let step = 0;
  STEPS.forEach(s => { const v = params.get(s.key); if (v && s.options.some(o => o.v === v)) ans[s.key] = v; });
  while (step < STEPS.length - 1 && ans[STEPS[step].key]) step++;
  const label = s => { const o = s.options.find(o => o.v === ans[s.key]); return o ? o.t.split(" — ")[0] : ""; };
  const stepsEl = $("#match-steps"), main = $("#match-main");

  const renderSteps = (done) => {
    stepsEl.innerHTML = STEPS.map((s, i) => `<li class="${!done && i === step ? "is-current" : ans[s.key] ? "is-done" : ""}" data-goto="${i}" style="cursor:${ans[s.key] || i === step ? "pointer" : "default"}">
      <span class="dot">${ans[s.key] && (done || i !== step) ? "✓" : i + 1}</span>${s.short}<span class="ans">${esc(label(s))}</span></li>`).join("");
  };
  const renderQ = () => {
    const s = STEPS[step];
    renderSteps(false);
    main.innerHTML = `<div class="stack gap-32 quiz-card">
      <div class="progress">${STEPS.map((_, i) => `<span class="${i < step ? "is-done" : i === step ? "is-current" : ""}"></span>`).join("")}</div>
      <div class="stack gap-12"><div class="muted">Шаг ${step + 1} из ${STEPS.length}</div><h1 class="h1">${s.q}</h1></div>
      <div class="options">${s.options.map((o, i) => `<button class="option${ans[s.key] === o.v ? " is-selected" : ""}" data-v="${o.v}"><span class="option__letter">${"АБВГДЕЖЗИК"[i]}</span>${esc(o.t)}</button>`).join("")}</div>
      <div class="row between">
        <button class="btn btn--secondary" data-prev${step === 0 ? " disabled" : ""}>${icon("back")}Назад</button>
        <button class="btn btn--primary" data-next${ans[s.key] ? "" : " disabled"}>${step === STEPS.length - 1 ? "Показать вузы" : "Дальше"}${icon("arrow")}</button>
      </div></div>`;
  };
  const renderResult = () => {
    renderSteps(true);
    const res = UNIS.map(u => scoreUni(u, ans)).sort((a, b) => b.pct - a.pct || (a.u.feeYear || 99999) - (b.u.feeYear || 99999));
    let shown = 10;
    const draw = () => {
      main.innerHTML = `<div class="stack gap-24">
        <div class="row between"><div class="stack gap-8"><div class="muted">Готово</div><h1 class="h1">Твои вузы</h1></div>
          <div class="row gap-12"><button class="btn btn--secondary" data-restart>Пройти заново</button><a class="btn btn--primary" href="${url("compare.html")}">Сравнить</a></div></div>
        ${res.slice(0, shown).map(r => `<article class="result">
          <div class="result__top">
            <div class="match${r.pct < 75 ? " match--mid" : ""}">${r.pct}%</div>
            <a class="result__photo" href="${url("university.html")}?id=${r.u.id}" style="background-image:url(${uniImg(r.u.id)})"></a>
            <div class="stack gap-8" style="flex:1;min-width:0"><span class="muted small">${esc(r.u.city)} · ${esc(r.u.country)}</span><a class="h3" href="${url("university.html")}?id=${r.u.id}">${esc(r.u.name)}</a>
              <div class="row gap-24 small"><span>Плата: <b>${fee(r.u)}</b></span><span>IELTS: <b>${ielts(r.u)}</b></span></div></div>
            <div class="stack gap-8" style="align-items:flex-end"><button class="toggle-compare" data-compare="${r.u.id}"></button><button class="toggle-save" data-save="${r.u.id}" aria-label="Сохранить">${icon("heart")}</button></div>
          </div>
          <div class="tags">${r.reasons.map(([ok, t]) => `<span class="reason${ok ? "" : " reason--no"}">${ok ? "✓" : "✕"} ${esc(t)}</span>`).join("")}</div>
        </article>`).join("")}
        ${shown < res.length ? `<button class="btn btn--secondary" data-more>Показать ещё 10</button>` : ""}
      </div>`;
      refreshTickets(); countUp($$(".match", main));
      $("[data-more]") && $("[data-more]").addEventListener("click", () => { shown += 10; draw(); });
    };
    draw();
    const p = new URLSearchParams(ans); p.set("done", 1); history.replaceState(null, "", "?" + p);
    scrollTo({ top: 0, behavior: "smooth" });
  };
  main.addEventListener("click", e => {
    const opt = e.target.closest(".option");
    if (opt) {
      ans[STEPS[step].key] = opt.dataset.v;
      if (step < STEPS.length - 1) { step++; renderQ(); } else renderResult();
      return;
    }
    if (e.target.closest("[data-prev]") && step > 0) { step--; renderQ(); }
    if (e.target.closest("[data-next]") && ans[STEPS[step].key]) { if (step < STEPS.length - 1) { step++; renderQ(); } else renderResult(); }
    if (e.target.closest("[data-restart]")) { for (const k in ans) delete ans[k]; step = 0; history.replaceState(null, "", "?"); renderQ(); }
  });
  stepsEl.addEventListener("click", e => {
    const li = e.target.closest("[data-goto]"); if (!li) return;
    const i = +li.dataset.goto; if (ans[STEPS[i].key] || i <= Object.keys(ans).length) { step = i; renderQ(); }
  });
  $("#match-barcode").innerHTML = barcode("match", 240, 44, false);
  if (params.get("done") && STEPS.every(s => ans[s.key])) renderResult(); else renderQ();
};

/* ---------- тесты: страна, IELTS, Foundation ---------- */
pages.quiz = () => {
  const id = params.get("id") || "country";
  const main = $("#quiz-main"), side = $("#quiz-side");
  const titles = { country: "Какая страна — твоя?", ielts: "Хватит ли IELTS 6.5?", foundation: "Foundation или сразу?" };
  document.title = (titles[id] || titles.country) + " — ЗАГРАНЬ";
  $$("[data-quiz-link]").forEach(a => a.classList.toggle("is-active", a.dataset.quizLink === id));
  $("#quiz-barcode").innerHTML = barcode(id, 240, 44, false);

  if (id === "ielts") {
    let score = 6.5;
    const withNum = UNIS.filter(u => u.ielts != null);
    const SCALE = [...new Set(withNum.map(u => u.ielts))].sort((a, b) => a - b);
    side.innerHTML = `<div class="stack gap-8"><div class="muted">Твой балл</div><div class="ielts-big" id="ielts-out">6.5</div></div>
      <input class="range" type="range" min="4" max="9" step="0.5" value="6.5" id="ielts-range" aria-label="Балл IELTS">
      <div class="range-value"><span>4.0</span><span>9.0</span></div>
      <div class="chips">${[5.5, 6, 6.5, 7, 7.5].map(v => `<button class="chip" data-score="${v}">${v.toFixed(1)}</button>`).join("")}</div>`;
    const draw = () => {
      const out = $("#ielts-out"); if (out.textContent !== score.toFixed(1)) { out.classList.remove("bump"); void out.offsetWidth; out.classList.add("bump"); }
      out.textContent = score.toFixed(1);
      $("#ielts-range").value = score;
      $$("[data-score]").forEach(b => b.classList.toggle("is-active", +b.dataset.score === score));
      const ok = withNum.filter(u => u.ielts <= score).sort((a, b) => b.ielts - a.ielts || a.name.localeCompare(b.name));
      const near = withNum.filter(u => u.ielts > score && u.ielts <= score + 0.5);
      const pct = Math.round(ok.length / withNum.length * 100);
      main.innerHTML = `<div class="stack gap-32">
        <div class="stack gap-12"><div class="muted">Хватит ли IELTS ${score.toFixed(1)}?</div><h1 class="h1">${pct >= 90 ? "Хватит почти везде" : pct >= 50 ? "Хватит для многих" : pct > 0 ? "Хватит не везде" : "Пока не хватит"}</h1></div>
        <section class="band band--compact"><div class="band__body">
          <div><div class="band__num accent">${ok.length}</div><div class="band__label">из ${withNum.length} вузов с единым минимумом</div></div>
          <div><div class="band__num">${near.length}</div><div class="band__label">не хватает 0.5</div></div>
          <div><div class="band__num">${UNIS.length - withNum.length}</div><div class="band__label">смотрят по программе</div></div>
        </div><div class="band__stub">${barcode("ielts" + score, 40, 150, true, true)}</div></section>
        <div class="stack gap-8"><div class="ielts-scale">${SCALE.map(v => { const n = withNum.filter(u => u.ielts === v).length, mx = Math.max(...SCALE.map(x => withNum.filter(u => u.ielts === x).length)); return `<div class="${v <= score ? "is-ok" : ""}"><span style="height:${Math.max(8, Math.round(n / mx * 130))}px"></span><b>${v.toFixed(1)}</b><small>${n} ${plural(n, "вуз", "вуза", "вузов")}</small></div>`; }).join("")}</div></div>
        ${near.length ? `<section class="stack gap-16"><h2 class="h2">Чуть-чуть не хватает</h2><div class="grid-3">${near.map(u => ticket(u)).join("")}</div></section>` : ""}
        ${ok.length ? `<section class="stack gap-16"><h2 class="h2">Хватает</h2><div class="stack gap-16">${ok.map(u => ticket(u, true)).join("")}</div></section>` : ""}
        <div class="tip">Минимум по каждой части тоже важен — часто это 6.0. <a class="link" href="${url("article.html")}?id=ielts">Читать про IELTS</a></div>
      </div>`;
      refreshTickets();
    };
    $("#ielts-range").addEventListener("input", e => { score = +e.target.value; draw(); });
    side.addEventListener("click", e => { const b = e.target.closest("[data-score]"); if (b) { score = +b.dataset.score; draw(); } });
    draw(); return;
  }

  const Q = window.QUIZZES[id] || window.QUIZZES.country;
  const answers = []; let i = 0;
  const drawSide = () => {
    side.innerHTML = `<ol class="steps">${Q.questions.map((q, k) => `<li class="${k === i ? "is-current" : k < answers.length ? "is-done" : ""}"><span class="dot">${k < answers.length && k !== i ? "✓" : k + 1}</span>Вопрос ${k + 1}</li>`).join("")}</ol>`;
  };
  const drawQ = () => {
    drawSide();
    const q = Q.questions[i];
    main.innerHTML = `<div class="stack gap-32 quiz-card">
      <div class="progress">${Q.questions.map((_, k) => `<span class="${k < i ? "is-done" : k === i ? "is-current" : ""}"></span>`).join("")}</div>
      <div class="stack gap-12"><div class="muted">${Q.title} · ${i + 1} из ${Q.questions.length}</div><h1 class="h1">${esc(q.q)}</h1></div>
      <div class="options">${q.options.map((o, k) => `<button class="option${answers[i] === k ? " is-selected" : ""}" data-k="${k}"><span class="option__letter">${"АБВГД"[k]}</span>${esc(o.t)}</button>`).join("")}</div>
      <div class="row between"><button class="btn btn--secondary" data-prev${i === 0 ? " disabled" : ""}>${icon("back")}Назад</button><span class="muted small">Нажми на ответ</span></div>
    </div>`;
  };
  const drawResult = () => {
    i = -1; drawSide();
    if (id === "foundation") {
      const s = answers.reduce((acc, k, n) => acc + Q.questions[n].options[k].s, 0);
      const v = Q.verdicts.find(x => s <= x.max);
      main.innerHTML = `<div class="stack gap-32">
        ${photoTicket(ROOT + Q.photo, `<div class="tphoto__caption"><span class="small">Результат</span><h1 class="h1">${v.title}</h1></div>`, barcode("f" + s, 44, 240, true), "tphoto--hero")}
        <p class="lead">${v.text}</p>
        <div class="row gap-12"><a class="btn btn--primary" href="${url("article.html")}?id=foundation">Что такое Foundation</a><a class="btn btn--secondary" href="${url("glossary.html")}#studienkolleg">Studienkolleg</a><button class="btn btn--ghost" data-restart>Пройти заново</button></div>
      </div>`;
      return;
    }
    const pts = {};
    answers.forEach((k, n) => Object.entries(Q.questions[n].options[k].p).forEach(([c, v]) => pts[c] = (pts[c] || 0) + v));
    const rank = Object.keys(Q.results).map(c => [c, pts[c] || 0]).sort((a, b) => b[1] - a[1]);
    const max = rank[0][1] || 1;
    const r = Q.results[rank[0][0]];
    const unis = UNIS.filter(u => u.country === r.country).slice(0, 3);
    const photo = unis[0] ? uniImg(unis[0].id) : ROOT + Q.photo;
    main.innerHTML = `<div class="stack gap-32">
      ${photoTicket(photo, `<div class="tphoto__caption"><span class="small">Твоя страна</span><h1 class="h1">${r.name}</h1></div>`, barcode(r.name, 44, 240, true), "tphoto--hero")}
      <p class="lead">${r.text}</p>
      <div class="stack gap-12">${rank.slice(0, 4).map(([c, v]) => `<div class="scorebar"><span>${Q.results[c].name}</span><div class="bar"><span class="${c === rank[0][0] ? "is-best" : ""}" style="width:${Math.round(v / max * 100)}%"></span></div><b>${Math.round(v / max * 100)}%</b></div>`).join("")}</div>
      <div class="grid-3">${unis.map(u => ticket(u)).join("")}</div>
      <div class="row gap-12"><a class="btn btn--primary" href="${url("universities.html")}?country=${encodeURIComponent(r.country)}">Все вузы страны</a><a class="btn btn--secondary" href="${artHref(r.article)}">Читать статью</a><button class="btn btn--ghost" data-restart>Пройти заново</button></div>
    </div>`;
  };
  main.addEventListener("click", e => {
    const o = e.target.closest(".option");
    if (o) { answers[i] = +o.dataset.k; answers.length = i + 1; if (i < Q.questions.length - 1) { i++; drawQ(); } else drawResult(); return; }
    if (e.target.closest("[data-prev]") && i > 0) { i--; drawQ(); }
    if (e.target.closest("[data-restart]")) { answers.length = 0; i = 0; drawQ(); }
  });
  drawQ();
};

/* ---------- тесты: хаб ---------- */
pages.tests = () => {
  $$("[data-barcode]").forEach(el => { const [w, h, v, l] = el.dataset.barcode.split(","); el.innerHTML = barcode(el.dataset.seed || "t", +w, +h, v === "v", l === "l"); });
};

/* ---------- сравнение ---------- */
pages.compare = () => {
  const root = $("#cmp");
  const draw = () => {
    const list = store.get("compare").map(id => byId[id]).filter(Boolean);
    const addSel = list.length < 3 ? `<div class="cmp-add"><select class="select" id="cmp-add"><option value="">Добавить вуз…</option>${UNIS.filter(u => !list.includes(u)).sort((a, b) => a.name.localeCompare(b.name)).map(u => `<option value="${u.id}">${esc(u.name)} — ${esc(u.city)}</option>`).join("")}</select></div>` : "";
    if (!list.length) {
      root.innerHTML = `<div class="empty"><h2 class="h2">Пока пусто</h2><p class="muted">Добавь до трёх вузов из каталога</p><div class="row gap-12"><a class="btn btn--primary" href="${url("universities.html")}">В каталог</a></div>${addSel}</div>`;
      bindAdd(); return;
    }
    const cols = n => `style="grid-template-columns:repeat(${Math.max(list.length, 1)},1fr)"`;
    const nums = (get, lower = true) => {
      const vals = list.map(get), real = vals.filter(v => v != null);
      const best = real.length > 1 ? (lower ? Math.min(...real) : Math.max(...real)) : null;
      const max = Math.max(...real, 1);
      return { vals, best, max };
    };
    const feeN = nums(u => u.feeYear), ieN = nums(u => u.ielts);
    const row = (label, cells) => `<div class="cmp-row"><div class="cmp-row__label">${label}</div><div class="cmp-cols" ${cols()}>${cells.join("")}</div></div>`;
    root.innerHTML = `
      <div class="cmp-cols cmp-head" ${cols()}>${list.map(u => `<div class="cmp-uni">
        <a class="ticket__photo" href="${url("university.html")}?id=${u.id}" aria-label="${esc(u.name)}" style="background-image:url(${uniImg(u.id)})"></a>
        <div class="row between gap-12" style="align-items:flex-start"><div class="stack gap-8"><span class="muted small">${esc(u.city)} · ${esc(u.country)}</span><a class="h3" href="${url("university.html")}?id=${u.id}">${esc(u.name)}</a></div>
        <button class="icon-btn" data-compare="${u.id}" aria-label="Убрать">${icon("close")}</button></div></div>`).join("")}</div>
      ${row("Плата в год", list.map((u, k) => `<div><div class="cmp-val${feeN.vals[k] != null && feeN.vals[k] === feeN.best ? " is-best" : ""}">${fee(u)}</div><div class="bar"><span class="${feeN.vals[k] === feeN.best ? "is-best" : ""}" style="width:${u.feeYear == null ? 0 : Math.max(3, u.feeYear / feeN.max * 100)}%"></span></div></div>`))}
      ${row("Минимум IELTS", list.map((u, k) => `<div><div class="cmp-val${ieN.vals[k] != null && ieN.vals[k] === ieN.best ? " is-best" : ""}">${u.ielts == null ? "по программе" : ielts(u)}</div><div class="bar"><span class="${ieN.vals[k] === ieN.best ? "is-best" : ""}" style="width:${u.ielts == null ? 0 : u.ielts / 9 * 100}%"></span></div></div>`))}
      ${row("Плата подробно", list.map(u => `<div>${esc(u.tuition)}</div>`))}
      ${row("Дедлайн", list.map(u => `<div>${esc(u.deadline)}</div>`))}
      ${row("Язык", list.map(u => `<div>${esc(u.lang)}${u.english ? ' <span class="tag tag--accent">EN</span>' : ""}</div>`))}
      ${row("Направления", list.map(u => `<div class="tags">${u.dirs.map(d => `<span class="tag">${DIRS[d]}</span>`).join("")}</div>`))}
      ${row("Город", list.map(u => `<div>${esc(u.city)} · ${u.citySize === "big" ? "большой" : "студенческий"}</div>`))}
      ${addSel ? `<div class="row gap-16">${addSel}</div>` : ""}
      <div class="row gap-12"><button class="btn btn--secondary" data-clear>Очистить сравнение</button></div>`;
    bindAdd();
    const clr = $("[data-clear]");
    clr && clr.addEventListener("click", () => { store.set("compare", []); updateBadges(); draw(); });
  };
  const bindAdd = () => {
    const s = $("#cmp-add"); if (!s) return;
    s.addEventListener("change", () => { if (s.value) { store.toggle("compare", s.value, 3); updateBadges(); draw(); } });
  };
  document.addEventListener("zagran:change", draw);
  draw();
};

/* ---------- сохранённое ---------- */
pages.saved = () => {
  const draw = () => {
    const unis = store.get("unis").map(id => byId[id]).filter(Boolean);
    const arts = store.get("articles").map(id => artById[id]).filter(Boolean);
    $("#saved-unis").innerHTML = unis.length ? `<div class="grid-3">${unis.map(u => ticket(u)).join("")}</div>`
      : `<div class="empty"><h3 class="h3">Нет сохранённых вузов</h3><a class="btn btn--primary" href="${url("universities.html")}">В каталог</a></div>`;
    $("#saved-arts").innerHTML = arts.length ? `<div class="rowlist">${arts.map(articleRow).join("")}</div>`
      : `<div class="empty"><h3 class="h3">Нет сохранённых статей</h3><a class="btn btn--primary" href="${url("articles.html")}">К статьям</a></div>`;
    $("#saved-count").textContent = unis.length + arts.length;
  };
  document.addEventListener("zagran:change", draw);
  draw();
};

/* ---------- о медиа ---------- */
pages.about = () => {
  $$("[data-barcode]").forEach(el => { const [w, h, v, l] = el.dataset.barcode.split(","); el.innerHTML = barcode(el.dataset.seed || "a", +w, +h, v === "v", l === "l"); });
  $("#about-count").textContent = UNIS.length;
  $("#about-countries").textContent = new Set(UNIS.map(u => u.country)).size;
};


/* ---------- анимации ---------- */
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
function countUp(els) {
  if (reduced) return;
  els.forEach((el, i) => {
    const m = el.textContent.match(/^(\d+)%$/); if (!m) return;
    const to = +m[1], t0 = performance.now() + i * 60, dur = 700;
    const step = now => { const k = Math.min(1, Math.max(0, (now - t0) / dur)); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + "%"; if (k < 1) requestAnimationFrame(step); };
    el.textContent = "0%"; requestAnimationFrame(step);
  });
}
function splitFlap(el) {
  const final = el.textContent; if (reduced || !final.trim() || /[a-zа-яё]{3,}/i.test(final)) return;
  const pool = "0123456789";
  el.innerHTML = [...final].map(ch => `<span class="flap">${ch === " " ? "&nbsp;" : ch}</span>`).join("");
  [...el.children].forEach((sp, i) => {
    const ch = final[i]; if (!/\d/.test(ch)) return;
    sp.classList.add("is-flipping");
    const stop = 500 + i * 180; const t0 = performance.now();
    const tick = () => {
      if (performance.now() - t0 >= stop) { sp.textContent = ch; sp.classList.remove("is-flipping"); return; }
      sp.textContent = pool[Math.floor(Math.random() * 10)]; setTimeout(tick, 55);
    };
    tick();
  });
}
function initAnimations() {
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
  if (reduced || !("IntersectionObserver" in window)) return;
  const sel = ".section-head, .ticket, .acard, .rowlist__item, .band, .promo, .card, .termcard, .test-card, .cmp-row, .cmp-uni, .author, .empty, .tip, .lead-story, .prose > *, .ielts-scale, .scorebar, #art-unis, #art-next, .uni-photo, .art-photo";
  const els = $$(sel).filter(el => !el.closest(".hero, .art-head, .tray, .overlay, .panel") && el.getBoundingClientRect().top > innerHeight * 0.85);
  const show = t => {
    if (!t.classList.contains("reveal") || t.classList.contains("is-in")) return;
    t.classList.add("is-in");
    $$(".band__num", t).forEach(splitFlap);
    setTimeout(() => { t.classList.remove("reveal", "is-in"); t.style.removeProperty("--d"); }, 1600);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { io.unobserve(en.target); show(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
  els.forEach(el => {
    const sibs = [...el.parentElement.children].filter(c => c.matches(sel));
    el.style.setProperty("--d", (Math.min(sibs.indexOf(el), 5) * 0.07) + "s");
    el.classList.add("reveal"); io.observe(el);
  });
  // запасной вариант: проверка при прокрутке
  const check = () => { const lim = innerHeight * 0.95; $$(".reveal:not(.is-in)").forEach(el => { if (el.getBoundingClientRect().top < lim) show(el); }); };
  addEventListener("scroll", check, { passive: true });
  addEventListener("resize", check);
  // цифры, видные сразу, тоже перелистываются
  $$(".band").filter(b => !b.classList.contains("reveal")).forEach(b => $$(".band__num", b).forEach(splitFlap));
}

/* ---------- запуск ---------- */
renderChrome();
if (pages[page]) pages[page]();
refreshTickets();
initAnimations();
})();
