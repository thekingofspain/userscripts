// ==UserScript==
// @name         Make All Textareas Resizable
// @namespace    https://github.com/thekingofspain/userscripts
// @version      2026-09-25.1
// @description  Forces all textarea elements on any website to be freely resizable.
// @author       thekingofspain
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-start
// @homepageURL  https://github.com/thekingofspain/userscripts
// @supportURL   https://github.com/thekingofspain/userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/thekingofspain/userscripts/main/make-all-textareas-resizable.user.js
// @updateURL    https://raw.githubusercontent.com/thekingofspain/userscripts/main/make-all-textareas-resizable.user.js
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        textarea {
            resize: both !important;
            overflow: auto !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
    }
})();
