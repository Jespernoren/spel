// Liten hem-knapp tillbaka till spelhallen. Läggs in i äldre fristående spel med:
// <script src="../../delat/hem.js"></script>
(function () {
  const a = document.createElement('a');
  a.href = '../../index.html';
  a.title = 'Till spelhallen';
  a.textContent = '🏠';
  a.style.cssText = [
    'position:fixed', 'left:max(10px, env(safe-area-inset-left))', 'bottom:max(10px, env(safe-area-inset-bottom))',
    'z-index:2147483647', 'width:40px', 'height:40px', 'border-radius:50%',
    'display:flex', 'align-items:center', 'justify-content:center', 'font-size:20px',
    'text-decoration:none', 'background:rgba(10,15,36,.55)', 'box-shadow:0 2px 8px rgba(0,0,0,.3)',
    'opacity:.7', 'transition:opacity .15s', '-webkit-tap-highlight-color:transparent',
  ].join(';');
  a.onmouseenter = () => (a.style.opacity = '1');
  a.onmouseleave = () => (a.style.opacity = '.7');
  const satt = () => document.body.appendChild(a);
  document.body ? satt() : addEventListener('DOMContentLoaded', satt);
})();
