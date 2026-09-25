// ==UserScript==
// @name         Qwen Chat - Unset Max-Width
// @namespace    https://github.com/thekingofspain/userscripts
// @version      1.1
// @description  Removes the max-width restriction on chat messages in Qwen.
// @author       thekingofspain
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chat.qwen.ai
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
