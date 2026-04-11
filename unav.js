/* unav.js v2 — 産業技術アカデミー 共通ナビ拡張 + GA4
 * インラインnavがフォールバック。本JSは色定義とGA4計測を一元管理。
 * 更新時は index.html の ?v=X を上げてキャッシュ破棄。
 */
(function(){
  'use strict';

  // 1) ナビ色の一元管理
  var styleEl = document.createElement('style');
  styleEl.textContent = [
    '.unav-links a:nth-child(1){color:#7dd3fc}',
    '.unav-links a:nth-child(2){color:#fda4af}',
    '.unav-links a:nth-child(3){color:#fcd34d}',
    '.unav-links a:nth-child(4){color:#86efac}',
    '.unav-links a:nth-child(5){color:#c4b5fd}',
    '.unav-links a.unav-active{color:#c8a84e !important}'
  ].join('');
  document.head.appendChild(styleEl);

  // 2) GA4 gtag.js 注入（重複防止）
  var GA_ID = 'G-01642XG5SG';
  if (!window.gtag && !document.querySelector('script[src*="googletagmanager.com/gtag/js"]')){
    var gs = document.createElement('script');
    gs.async = true;
    gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(gs);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, {
      cookie_domain: 'auto',
      cookie_flags: 'SameSite=None;Secure'
    });
  }
})();
