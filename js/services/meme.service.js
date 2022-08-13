'use strict'

//**** VARIABLES: *********************************************//
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 40,
        align: 'left',
        font: 'impact',
        outlineClr: 'black',
        color: 'white'
    }]
}
var gElCanvas
var gCtx
var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

//**** FUNCTIONS: *********************************************//
function getMeme(){
    return gMeme

}

function setLineTxt(txt){
console.log('🤔 ~ file: meme.service.js ~ setLineTxt ~ txt', txt)

    gMeme.lines[selectedLineIdx].txt = txt
}

function setImg(img){
    gMeme.selectedImgId = img.id,
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme(gMeme,img )

}