'use strict'
//**** VARIABLES: *********************************************//
var gMemes = []

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I love coding!',
        size: 40,
        align: 'center',
        font: 'impact',
        outlineClr: 'black',
        color: 'white',
        posX: 250,
        posY: 25
    }]
}

var gElCanvas
var gCtx
var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

//**** FUNCTIONS: *********************************************//

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[selectedLineIdx].txt = txt
}

function setImg(img) {
    gMeme.selectedImgId = img.id,
        gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    initMeme(gMeme)
}

function setNewLine() {
    const y = gMeme.selectedLineIdx === 1 ? gElCanvas.height/2 : gElCanvas.height -25 
    const newLine = {
        txt: 'but this is too much!',
        size: 40,
        align: 'center',
        font: 'impact',
        outlineClr: 'black',
        color: 'white',
        posX: gElCanvas.width / 2,
        posY: y
    }
    gMeme.selectedLineIdx++
    gMeme.lines.push(newLine)
}

