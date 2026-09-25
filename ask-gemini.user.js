// ==UserScript==
// @name         Ask Gemini
// @namespace    https://github.com/thekingofspain/userscripts
// @version      2026-09-23
// @description  try to take over the world!
// @author       thekingofspain
// @match        https://gemini.google.com/glic*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @homepageURL  https://github.com/thekingofspain/userscripts
// @supportURL   https://github.com/thekingofspain/userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/thekingofspain/userscripts/main/ask-gemini.user.js
// @updateURL    https://raw.githubusercontent.com/thekingofspain/userscripts/main/ask-gemini.user.js
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        /* 1. Remove the max-width constraint on the message containers */
        .conversation-container,
        .markdown-main-panel,
        .message-content {
            max-width: none !important;
            width: 100% !important;
        }

        /* 2. Allow the table block to expand and provide horizontal scrolling if needed */
        .table-block {
            max-width: 100% !important;
            overflow-x: auto !important;
        }

        /* 3. Apply your desired width and padding to the table cells */
        .table-block td,
        .markdown td {
            max-width: none !important;
            width: 20dvw !important;
            min-width: 150px; /* Optional: prevents cells from becoming too narrow on small screens */
            padding: 12px 16px !important;
        }

        /* 4. Ensure the table itself isn't collapsing */
        .table-block table {
            width: 100% !important;
            table-layout: auto !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.append(style);
    }
})();
