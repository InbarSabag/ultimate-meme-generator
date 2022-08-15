'use strict'
//**** VARIABLES: *********************************************//



//**** FUNCTIONS: *********************************************//

function initMeme(meme) {
    renderMeme(meme)
    document.querySelector('.meme-editor').removeAttribute("hidden")
    document.querySelector('.images-Gallery').setAttribute("hidden", "hidden")
    document.querySelector('.about-container').style.display = 'none'
}

function renderMeme(meme) {
    const img = new Image
    img.src = getImg(meme.selectedImgId).url
    drawImg(img)
    meme.lines.forEach(line => drawText(line))
}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(line) {
    const { txt, size, align, font, outlineClr, color, posX, posY } = line
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = align
    gCtx.lineWidth = 2
    gCtx.font = size + "px " + font
    gCtx.fillStyle = color
    gCtx.fillText(txt, posX, posY)
    gCtx.strokeStyle = outlineClr
    gCtx.strokeText(txt, posX, posY)
    gCtx.closePath()
}

function onTxtType(txt) {
    let line = gMeme.lines[gMeme.selectedLineIdx]
    line.txt = txt
    renderMeme(getMeme())
}

function onSwitchLine() {
    gMeme.selectedLineIdx < gMeme.lines.length ? gMeme.selectedLineIdx++ : gMeme.selectedLineIdx = 0
}

function onAddTxtBox() {
    setNewLine()
    renderMeme(getMeme())
}

function onDeleteTxtBox() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    renderMeme(getMeme())
}

function onTxtSize(size) {
    let newSize = gMeme.lines[gMeme.selectedLineIdx].size
    if (size === '+' && newSize < 60) newSize += 2
    else if (size === '-' && newSize > 30) newSize -= 2
    gMeme.lines[gMeme.selectedLineIdx].size = newSize
    renderMeme(getMeme())
}

function onTxtAlign(side) {
    gMeme.lines[gMeme.selectedLineIdx].align = side
    switch (side) {
        case 'start':
        gMeme.lines[gMeme.selectedLineIdx].posX = 10
            break;
        case 'center':
        gMeme.lines[gMeme.selectedLineIdx].posX = gElCanvas.width/2
            break;
        case 'end':
        gMeme.lines[gMeme.selectedLineIdx].posX = gElCanvas.width-10
            break;
    
        default:
            break;
    }

    renderMeme(getMeme())
}

function onFontChange(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
    renderMeme(getMeme())
}

function onChangeStrokeClr(color) {
    gMeme.lines[gMeme.selectedLineIdx].outlineClr = color
    renderMeme(getMeme())
}

function onChangeFillClr(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme(getMeme())
}

function onStickerGrab(sticker) { // todo
    console.log('🚀 ~ onStickerGrab ~ sticker', sticker)
}

function onSave() {
    saveMemeToStorage(gMeme)
}

function onShare() { // todo
    console.log('🚀 ~ onShare ~ ')

}