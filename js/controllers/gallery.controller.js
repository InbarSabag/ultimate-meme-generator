'use strict'

//**** FUNCTIONS: *********************************************//
function onInit() {
    // renderSearchMap()
    createGallery()
    renderGallery(gImgs)
}

function renderGallery(imgs) {   
    let galleryArray = imgs.map(img => `<img src="${img.url}" id=${img.id} onclick="setImg(this)">`)
    let elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = galleryArray.join('')
    renderKeywords() 
}

function renderKeywords() {
    let elKeywordsList = document.querySelector('.keywords-list')
    let strHtml = ''
    for (const key in gKeywordSearchCountMap) {
        const value = gKeywordSearchCountMap[key]
        strHtml += `<li class="key1 flex align-center justify-center" style="font-size:${value * 2 + 12}px"  
        onclick="onKeywordSearch('${key}')" value="${key}">${key}</li>&nbsp`
    }
    elKeywordsList.innerHTML = strHtml
}

function onFlexible() {
    console.log('🚀 ~ onFlexible ~ ')
    // todo
}

function onKeywordSearch(keyword) {
    updateKeywordsList(keyword)
    renderKeywords()
    let elSearch = document.querySelector('.search-input')
    elSearch.setAttribute('value', keyword)
    // elSearch.setAttribute('placeholder', keyword)
    // elSearch.innerText = keyword
    onSearch(keyword)
}

function onSearch(searchValue) {
    const imgsToRender = gImgs.filter(img => img.keywords.some(key => key.includes(searchValue)))
    renderGallery(imgsToRender)
}