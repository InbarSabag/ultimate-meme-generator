'use strict'

//**** VARIABLES: *********************************************//
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

//**** FUNCTIONS: *********************************************//
function getMeme(){
    return gMeme

}

function setLineTxt(){
    // todo: update the gMeme
}

function setImg(){
    // todo: onImgSelect – call the memeService's setImg() and then renderMeme()
}