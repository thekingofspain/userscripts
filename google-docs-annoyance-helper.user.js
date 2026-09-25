// ==UserScript==
// @name         Google Docs Annoyance Helper
// @namespace    https://github.com/thekingofspain/userscripts
// @version      2026-09-25.1
// @description  Automates "Cancel" on Google Docs paste nags and removes account modals.
// @author       thekingofspain
// @match        https://docs.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=docs.google.com
// @grant        none
// @run-at       document-end
// @homepageURL  https://github.com/thekingofspain/userscripts
// @supportURL   https://github.com/thekingofspain/userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/thekingofspain/userscripts/main/google-docs-annoyance-helper.user.js
// @updateURL    https://raw.githubusercontent.com/thekingofspain/userscripts/main/google-docs-annoyance-helper.user.js
// ==/UserScript==

(function() {
    'use strict';

    /**
     * Handle the "Active Account" modal using a polling interval.
     * Stops once found or after 60 attempts (approx 6 seconds).
     */
    const initAccountModalRemover = () => {
        let tries = 0;
        const intervalId = window.setInterval(() => {
            let modal = null;

            modal = accountModalRemover();
            if (!modal) {
                 modal = accountSurfaceRemover();
            }

            if (modal || ++tries > 60) {
                window.clearInterval(intervalId);
            }
        }, 100);
    }


    const accountModalRemover = () => {
        const modal = document.querySelector('.modal-dialog.active-account-dialog');
        if (modal) {
            modal.remove();
            console.log("Account modal removed.");
        }
        return modal;
}

 const accountSurfaceRemover = () => {
     const modal = document.querySelector('.docssharedActiveAccountSurfaceActiveAccountSurface');
     if (modal) {
         modal.parentNode.parentNode.parentNode.remove()
         console.log("Account modal removed.");
     }
     return modal;

}
/**
     * Handle the "Paste Nag" dialog using a MutationObserver.
     * Persistent because this popup recurs on context menu usage.
     */
    const initPasteNagHandler = () => {
        const observer = new MutationObserver(() => {
            const dialog = document.querySelector('.javascriptMaterialdesignGm3WizDialog-dialog--open');

            if (dialog && dialog.innerText.includes("Enable copy, cut, and paste?")) {
                const buttons = dialog.querySelectorAll('button');
                const cancelButton = Array.from(buttons).find(btn =>
                    btn.innerText.includes('Cancel')
                );

                if (cancelButton) {
                    cancelButton.click();

                    // Small delay to let the UI clear before triggering paste
                   setTimeout(() => {
                    console.log("Sending Ctrl+V...");
                    document.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'v',
                        keyCode: 86,
                        ctrlKey: true,
                        bubbles: true,
                        metaKey: false // Set to true if on Mac
                    }));
                }, 50);
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    };

    // Initialize both functional listeners
    initAccountModalRemover();
    initPasteNagHandler();

})();
