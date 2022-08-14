'use strict'

function saveMemeToStorage(meme) {
    let memes = []
    memes.push(loadMemesFromStorage())
    memes.push(meme)
    saveToStorage('savedMemes', memes)
}

function loadMemesFromStorage() {
    return loadFromStorage('savedMemes')
}

function showSavedMemes(){
    const memes = loadMemesFromStorage()
    console.log('🚀 ~ showSavedMemes ~ memes ', memes )
    memes.forEach(meme => renderMeme(meme))
    renderGallery(memes)
    document.querySelector('.images-Gallery').removeAttribute("hidden")
    document.querySelector('.meme-editor').setAttribute("hidden", "hidden")
}

