'use strict'

//**** VARIABLES: *********************************************//
var gImgs = []
var gId = 0
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 6, 'baby': 10, 'laugh': 5, 'president': 3 }


//**** FUNCTIONS: *********************************************//

function createGallery() {
    gImgs.push(_createGalleryItem(['funny', 'explain', 'tramp', 'president']))
    gImgs.push(_createGalleryItem(['cute', 'love', 'dog', 'puppy']))
    gImgs.push(_createGalleryItem(['cute', 'sleep', 'dog', 'puppy', 'baby']))
    gImgs.push(_createGalleryItem(['cute', 'sleep', 'cat']))
    gImgs.push(_createGalleryItem(['baby', 'cute', 'funny']))
    gImgs.push(_createGalleryItem(['funny', 'explain']))
    gImgs.push(_createGalleryItem(['funny', 'baby', 'eyes']))
    gImgs.push(_createGalleryItem(['laugh', 'dream', 'funny']))
    gImgs.push(_createGalleryItem(['funny', 'baby', 'laugh']))
    gImgs.push(_createGalleryItem(['funny', 'laugh', 'obama', 'president']))
    gImgs.push(_createGalleryItem(['sport', 'kiss']))
    gImgs.push(_createGalleryItem(['what', 'would', 'you', 'do']))
    gImgs.push(_createGalleryItem(['leo', 'leonardo', 'cheers']))
    gImgs.push(_createGalleryItem(['matrix']))
    gImgs.push(_createGalleryItem(['zero', ' explain']))
    gImgs.push(_createGalleryItem(['funny', 'laugh']))
    gImgs.push(_createGalleryItem(['two', 'putin', 'president']))
    gImgs.push(_createGalleryItem(['buzz', 'woody', 'explain', 'toy story']))
    console.log("🚀 ~ file: gallery.controller.js ~ line 6 ~ gImgs", gImgs)
}

//**** INTERNAL FUNCTIONS: ************************************//

function _createGalleryItem(keywords) {
    gId++
    return {
        id: gId,
        url: `img/meme-imgs (square)/${gId}.jpg`,
        imgStr: `<img src="img/meme-imgs (square)/${gId}.jpg">`,
        keywords
    }
}

function getImg(id){
    return gImgs.find(img => img.id = id)
}