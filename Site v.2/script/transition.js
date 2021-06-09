//Переход от начального экрана к вводу параметров
//================================================

document.getElementById('introButton').addEventListener('click', event => {
    event.preventDefault()
    document.getElementById('wrapper').classList.remove('content-wrapper')
    document.getElementById('introPage').classList.add('hide');
    document.getElementById('slideBar').classList.remove('hide');

})

//Переход от ввода параметров к начальному экрану
//================================================

document.getElementById('titleInput').addEventListener('click', event => {
    event.preventDefault()
    document.getElementById('wrapper').classList.add('content-wrapper')
    document.getElementById('slideBar').classList.add('hide');
    document.getElementById('introPage').classList.remove('hide');
})

//Переход от ввода параметров к результату
//========================================

document.getElementById('doGenerateButton').addEventListener('click', event => {
    event.preventDefault()
    if (data.firstType.isChoosen || data.secondType.isChoosen || data.thirdType.isChoosen) {
        document.getElementById('slideBar').classList.add('hide')
        document.getElementById('resultPage').classList.remove('hide')
    }
})

//Переход от результата к начальному экрану
//================================================

document.getElementById('titleResult').addEventListener('click', event => {
    event.preventDefault()
    document.getElementById('wrapper').classList.add('content-wrapper')
    document.getElementById('resultPage').classList.add('hide');
    document.getElementById('introPage').classList.remove('hide');
})

