// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.direquotidianshop.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.direquotidianshop.com/","title_tag":"Faith-based books & inspiring reads | Dire Quotidian Shop","meta_description":"Online bookshop offering uplifting stories and spiritual inspiration in multiple languages. Explore Christian literature and devotional books that deepen daily faith insights."},{"page_url":"https://www.direquotidianshop.com/shop","title_tag":"Faith-based books online bookshop | Dire Quotidian Shop","meta_description":"Shop faith-based books and inspiring reads from Dire Quotidian Shop’s online bookshop. Discover uplifting stories and Christian literature to strengthen your daily faith journey."},{"page_url":"https://www.direquotidianshop.com/blog","title_tag":"Faith-based book reviews & inspiring reads | Dire Quotidian","meta_description":"Find faith-based book reviews, uplifting stories, and spiritual inspiration. Discover devotional books, Christian literature, and daily faith insights from Dire Quotidian Shop’s blog."},{"page_url":"https://www.direquotidianshop.com/copy-of-shipping-returns-2","title_tag":"Contact online bookshop support | Dire Quotidian Shop","meta_description":"Contact Dire Quotidian Shop, your online bookshop for faith-based books and inspiring reads. Get support with orders, book inquiries, and Christian literature recommendations."},{"page_url":"https://www.direquotidianshop.com/shipping-returns","title_tag":"Shipping for faith-based books | Dire Quotidian Shop","meta_description":"View shipping and returns details for Dire Quotidian Shop, your online bookshop for faith-based books and uplifting stories. Learn delivery options for Christian literature orders."},{"page_url":"https://www.direquotidianshop.com/copy-of-shipping-returns","title_tag":"Store policy for online bookshop | Dire Quotidian Shop","meta_description":"Read Dire Quotidian Shop’s store policy. Learn terms for purchasing faith-based books and devotional titles from our online bookshop and how we protect your personal information."},{"page_url":"https://www.direquotidianshop.com/copy-of-shipping-returns-1","title_tag":"FAQ on digital faith-based books | Dire Quotidian Shop","meta_description":"Frequently asked questions on digital faith-based books at Dire Quotidian Shop. Learn about our online bookshop products, sequels, and support for uplifting Christian literature."},{"page_url":"https://www.direquotidianshop.com/product-page/a-force-to-be-reckoned-with","title_tag":"A Force To Reckon With faith-based book | Dire Quotidian","meta_description":"Discover A Force To Reckon With, a powerful faith-based book filled with uplifting stories and spiritual inspiration. Buy this inspiring read from Dire Quotidian Shop online."},{"page_url":"https://www.direquotidianshop.com/product-page/a-force-to-be-reckoned-with-digital","title_tag":"A Force To Be Reckoned With eBook | Dire Quotidian Shop","meta_description":"Explore A Force To Be Reckoned With eBook, a faith-based book offering spiritual inspiration and uplifting stories. Purchase this inspiring read from Dire Quotidian’s online bookshop."}],"keywords":["faith-based books","spiritual inspiration","christian literature","uplifting stories","online bookshop","daily faith insights","book reviews","inspiring reads","local bookshop","devotional books"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.direquotidianshop.com/#organization",
  "name": "DIRE QUOTIDIAN SHOP LLC",
  "url": "https://www.direquotidianshop.com/",
  "description": "DIRE QUOTIDIAN SHOP LLC is an online faith-based bookstore in the United States offering inspiring Christian literature and spiritual growth books, including the title \"A Force To Reckon With!\", with editions available on Amazon in multiple languages.",
  "logo": "https://static.wixstatic.com/media/5cd0dc_65580eb001184e7db0d3fa1ea39da817%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/5cd0dc_65580eb001184e7db0d3fa1ea39da817%7Emv2.jpg",
  "image": [
    "https://static.wixstatic.com/media/5cd0dc_65580eb001184e7db0d3fa1ea39da817~mv2.jpg/v1/fill/w_147,h_198,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/5cd0dc_65580eb001184e7db0d3fa1ea39da817~mv2.jpg",
    "https://static.wixstatic.com/media/5cd0dc_d6d74565b3f7492cbc57c0be22a77250~mv2.png/v1/fill/w_70,h_56,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/5cd0dc_d6d74565b3f7492cbc57c0be22a77250~mv2.png"
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://twitter.com",
    "https://www.linkedin.com",
    "https://www.instagram.com"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "sherley2direquotidianinc@gmail.com",
      "availableLanguage": [
        "English",
        "French",
        "Dutch",
        "Spanish",
        "Italian",
        "Chinese",
        "Portuguese"
      ]
    },
    {
      "@type": "ContactPoint",
      "contactType": "wholesale",
      "email": "sblaise@direquotidianshop.com",
      "availableLanguage": [
        "English",
        "French",
        "Dutch",
        "Spanish",
        "Italian",
        "Chinese",
        "Portuguese"
      ]
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Sherley L. Blaise"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Springfield Blvd",
    "addressLocality": "Queens",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "knowsAbout": [
    "faith-based books",
    "Christian literature",
    "spiritual growth books",
    "online faith book shopping",
    "faith book reviews"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
