// ==UserScript==
// @name         v2ex dark toggle
// @namespace    https://github.com/gaoyang/tampermonkey-scripts
// @version      0.1
// @description  v2ex dark toggle! v2ex 夜间模式自动切换
// @author       gaoyang
// @match        https://www.v2ex.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=v2ex.com
// @grant        none
// @require      https://raw.githubusercontents.com/gaoyang/tampermonkey-scripts/main/V2EX/dark-toggle.js
// ==/UserScript==

(function() {
    'use strict';

    let toggleBtn = document.getElementsByClassName('light-toggle')[0];
    let isLight = toggleBtn.children[0].src.includes('light');

    let media = window.matchMedia('(prefers-color-scheme: dark)');
    let callback = (e) => {
        let prefersDarkMode = e.matches;
        if ((prefersDarkMode && isLight) || (!prefersDarkMode && !isLight)) {
            toggleBtn.click();
        }
    };
    if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', callback);
    } else if (typeof media.addListener === 'function') {
        media.addListener(callback);
    }
    callback(media);
})();