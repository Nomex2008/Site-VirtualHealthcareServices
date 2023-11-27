"use strict"

const burger = document.getElementById('burger')
const bodyClassList = document.body.classList
//console.log(burger)
//console.log(bodyClassList)

burger.addEventListener('click',burgerClick)

function burgerClick() {
    bodyClassList.toggle('hidden')
    burger.classList.toggle('active')
}