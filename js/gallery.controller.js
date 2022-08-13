'use strict'

//**** FUNCTIONS: *********************************************//
function onInit() {
    // renderSearchMap()
    createGallery()
    renderGallery()
}

function renderGallery() {
    let galleryStr = ''

    gImgs.forEach(img => galleryStr += `<img src="${img.url}" id=${img.id} onclick="setImg(this)">`)
    let elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = galleryStr
    renderKeywords()
}

function renderKeywords(){
    let elKeywordsList = document.querySelector('.keywords-list')
    let strHtml =''
    for (const key in gKeywordSearchCountMap){
        const value = gKeywordSearchCountMap[key]
        strHtml += `<li class="key1 flex align-center justify-center" style="font-size:${value*2 + 12}px"  onclick="onSearchMeme(value)" value="${key}">${key}</li>&nbsp` 
    }
    elKeywordsList.innerHTML =strHtml
    }

function renderSearchMap() {
    let wordMap = ''
    for (let key in gKeywordSearchCountMap) {

    }
}

function onFlexible() {
    console.log('🚀 ~ onFlexible ~ ')
    // todo
}


