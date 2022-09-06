// ==UserScript==
// @name         github extension
// @namespace    https://github.com/gaoyang/tampermonkey-scripts
// @version      0.1
// @description  github extension. github 扩展
// @author       gaoyang
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @require      https://raw.githubusercontents.com/gaoyang/tampermonkey-scripts/main/GitHub/github.js
// ==/UserScript==

;(function () {
  'use strict'

  // 添加 Repositories 快捷入口
  const add_repo_nav = () => {
    if (document.getElementById('my_repo_nav')) return
    const nav = document.querySelector('#global-nav')
    const username = document.querySelector('meta[name="user-login"]')?.content
    if (nav && username) {
      for (let index = 0; index < nav.children.length; index++) {
        const element = nav.children[index]
        const style = window.getComputedStyle(element)
        if (style.display === 'block') {
          const newNode = element.cloneNode()
          newNode.id = 'my_repo_nav'
          newNode.href = `/${username}?tab=repositories`
          newNode.innerText = 'Repositories'
          nav.appendChild(newNode)
          break
        }
      }
    }
    history.replaceState = add_repo_nav
  }

  add_repo_nav()
})()
