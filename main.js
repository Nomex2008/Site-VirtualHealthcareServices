"use strict"

const burger = document.getElementById('burger')
const nav = document.getElementById('nav')
const main = document.getElementById('main')
const bodyClassList = document.body.classList
//console.log(burger)
//console.log(nav)
//console.log(main)
//console.log(bodyClassList)

burger.addEventListener('click',burgerClick)

function burgerClick() {
    bodyClassList.toggle('hidden')
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    main.classList.toggle('active')
}