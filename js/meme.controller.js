'use strict'
//**** VARIABLES: *********************************************//


//**** FUNCTIONS: *********************************************//


function renderMeme(meme,img) {
    console.log('🚀 ~ renderMeme ~ meme', meme)
    drawImg(img)
    drawText(meme.lines[0], 10, 25)
    document.querySelector('.meme-editor').removeAttribute("hidden")
    document.querySelector('.images-Gallery').setAttribute("hidden", "hidden")

}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function drawText(line , x , y) {
    const {txt,size,align,font,outlineClr,color} = line
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = align;
    gCtx.lineWidth = 1;
    gCtx.font = size+"px "+font;
    gCtx.fillStyle = color;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = outlineClr;
    gCtx.strokeText(txt, x , y);
    gCtx.closePath()
}

function onTxtType(txt) {
    // let meme = getMeme()
    console.log('🚀 ~ onTxtType ~ txt', txt)
    gMeme.lines[lines.length-1].txt = txt
    drawText(gMeme.lines[lines.length-1])
}

function onSwitchLine() {
    console.log('🚀 ~ onSwitchLine ~ ')
    // todo
}

function onAddTxtBox() {
    console.log('🚀 ~ onAddTxtBox ~ ')
    // todo
}

function onDeleteTxtBox() {
    console.log('🚀 ~ onDeleteTxtBox ~ ')
    // todo
}

function onTxtSize(size) {
    console.log('🚀 ~ onTxtSize ~ size', size)
    // todo
}

function onTxtAlign(side) {
    console.log('🚀 ~ onTxtAlign ~ side', side)
    // todo
}

function onFontChange(font) {
    console.log('🚀 ~ onFontChange ~ font', font)
    // todo
}

function onChangeStrokeClr(color) {
    console.log('🚀 ~ onChangeStrokeClr ~ color', color)

    // todo
}

function onChangeFillClr(color) {
    console.log('🚀 ~ onChangeFillClr ~ color', color)

    // todo
}

function onStickerGrab(sticker) {
    console.log('🚀 ~ onStickerGrab ~ sticker', sticker)
    // todo
}

function onShare() {
    console.log('🚀 ~ onShare ~ ')
    // todo
}