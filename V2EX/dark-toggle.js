// ==UserScript==
// @name         v2ex 夜间模式跟随系统自动切换
// @namespace    https://github.com/gaoyang/tampermonkey-scripts
// @version      1.0
// @description  v2ex 夜间模式跟随系统自动切换，需要先登录才能拥有夜间模式!
// @author       gaoyang
// @match        https://www.v2ex.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=v2ex.com
// @grant        none
// @license      MIT
// ==/UserScript==

;(function () {
  'use strict'
  
  const toggleBtn = document.getElementsByClassName('light-toggle')[0]
  if(!toggleBtn) return
  const isLight = toggleBtn.children[0].src.includes('light')

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const callback = e => {
    const prefersDarkMode = e.matches
    if ((prefersDarkMode && isLight) || (!prefersDarkMode && !isLight)) {
      toggleBtn.click()
    }
  }
  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', callback)
  } else if (typeof media.addListener === 'function') {
    media.addListener(callback)
  }
  callback(media)
})()
