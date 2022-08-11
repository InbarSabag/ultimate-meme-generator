'use strict'

//**** FUNCTIONS: *********************************************//
function onInit() {
    // renderSearchMap()
    createGallery()
    renderGallery()
}

function renderGallery() {
    let galleryStr = ''

    gImgs.forEach(img => galleryStr += `<img src="${img.url}" onclick="renderMeme(this)">`)
    let elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = galleryStr
}

function renderSearchMap(){
    let wordMap = ''
    for (let key in gKeywordSearchCountMap){

    }
    

    
}

