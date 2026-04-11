/* unav.js v3 — 産業技術アカデミー 共通ナビ拡張 + GA4 + フッター年自動更新
 * インラインnavがフォールバック。本JSは色定義とGA4計測を一元管理。
 * 更新時は index.html の ?v=3 を ?v=4 にバンプするとキャッシュが確実に切れる。
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

  // 2) GA4 gtag.js 注入（クロスドメイン計測）
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

  // 3) フッター著作権年の自動更新（更新漏れ防止）
  function updateFooterYear(){
    var currentYear = new Date().getFullYear();
    var footers = document.querySelectorAll('footer');
    if (!footers.length) return;
    var pattern = /((?:©|\(c\)|Copyright)\s*)20\d{2}/gi;
    footers.forEach(function(f){
      var walker = document.createTreeWalker(f, NodeFilter.SHOW_TEXT, null, false);
      var node;
      var updates = [];
      while ((node = walker.nextNode())){
        pattern.lastIndex = 0;
        if (pattern.test(node.nodeValue)) updates.push(node);
      }
      updates.forEach(function(n){
        pattern.lastIndex = 0;
        n.nodeValue = n.nodeValue.replace(pattern, '$1' + currentYear);
      });
    });
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', updateFooterYear);
  } else {
    updateFooterYear();
  }
})();
