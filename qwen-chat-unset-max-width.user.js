// ==UserScript==
// @name         Qwen Chat - Unset Max-Width
// @namespace    https://github.com/thekingofspain/userscripts
// @version      2026-09-25.2
// @description  Removes the max-width restriction on chat messages in Qwen.
// @author       thekingofspain
// @match        https://chat.qwen.ai/*
// @grant        GM_addStyle
// @run-at       document-start
// @homepageURL  https://github.com/thekingofspain/userscripts
// @supportURL   https://github.com/thekingofspain/userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/thekingofspain/userscripts/main/qwen-chat-unset-max-width.user.js
// @updateURL    https://raw.githubusercontent.com/thekingofspain/userscripts/main/qwen-chat-unset-max-width.user.js
// ==/UserScript==

(function() {
    'use strict';

    // GM_addStyle reliably injects CSS at the extension level, bypassing most site CSP restrictions.
    GM_addStyle(`
        .qwen-chat-message {
            max-width: none !important;
        }
    `);
})();
