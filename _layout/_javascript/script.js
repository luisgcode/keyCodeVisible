'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const insert = document.querySelector('.insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class="key">
        ${e.key}
        <small>event.key</small>
      </div>

      <div class="key">
      ${e.keyCode}
        <small>event.keyCode</small>
      </div>

      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>
  `;
});
