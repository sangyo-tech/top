/* unav.js v1 — 産業技術アカデミー 共通ナビ拡張
 * インラインnavがフォールバック。本JSは色定義を一元管理。
 * 更新時は index.html の ?v=1 を ?v=2 に上げてキャッシュ破棄。
 */
(function(){
  'use strict';
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
})();
