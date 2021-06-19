let checkAdditionalParameters = (element, min, max, defaultValue) => {
    element.addEventListener('change', e => {
        let value = e.target.value
        value = Number.parseInt(value)
        // if (Number.isNaN(value)) {
        // 	e.target.value = defaultValue
        // 	return
        // }
        if (value > max) {
            e.target.value = defaultValue
            return
        }
        if (value < min) {
            e.target.value = defaultValue
            return
        }
    })
}

let checkParameters = (element, min, max) => {
    element.addEventListener('change', e => {
        let value = e.target.value
        value = Number.parseInt(value)
        // if (Number.isNaN(value)) {
        // 	e.target.value = 0
        // 	return
        // }
        if (value > max) {
            e.target.value = max
            return
        }
        if (value < min) {
            e.target.value = min
            return
        }
    })
}


//Объект параметров для всех типов
//================================

let data = {
    firstType: {
        minLength: 3,
        maxLength: 6,
        minCountLetters: 4,
        maxCountLetters: 8,
        minPlaceWord: 10,
        maxPlaceWord: 262144,
        countTasks: 0,
        isChoosen: false
    },
    secondType: {
        minLength: 3,
        maxLength: 6,
        minCountLetters: 4,
        maxCountLetters: 8,
        countTasks: 0,
        isChoosen: false
    },
    thirdType: {
        minLength: 3,
        maxLength: 6,
        minCountLetters: 2,
        maxCountLetters: 4,
        countTasks: 0,
        isChoosen: false
    },

    isGenerateAnswers: false
}

//Проверка диапазона вводимых параметров
//======================================

//Первый тип
//==========

let minLengthFirstType = document.getElementById('minLengthFirstType')
let maxLengthFirstType = document.getElementById('maxLengthFirstType')

let minCountLettersFirstType = document.getElementById('minCountLettersFirstType')
let maxCountLettersFirstType = document.getElementById('maxCountLettersFirstType')

let minPlaceWordFirstType = document.getElementById('minPlaceWordFirstType')
let maxPlaceWordFirstType = document.getElementById('maxPlaceWordFirstType')

checkAdditionalParameters(minLengthFirstType, 3, 6, 3)
checkAdditionalParameters(maxLengthFirstType, 3, 6, 6)

checkAdditionalParameters(minCountLettersFirstType, 4, 8, 4)
checkAdditionalParameters(maxCountLettersFirstType, 4, 8, 8)

checkAdditionalParameters(minPlaceWordFirstType, 10, 262144, 10)
checkAdditionalParameters(maxPlaceWordFirstType, 10, 262144, 262144)

checkParameters(countTasksFirstType, 0, 100)

//Второй тип
//==========

let minLengthSecondType = document.getElementById('minLengthSecondType')
let maxLengthSecondType = document.getElementById('maxLengthSecondType')

let minCountLettersSecondType = document.getElementById('minCountLettersSecondType')
let maxCountLettersSecondType = document.getElementById('maxCountLettersSecondType')

checkAdditionalParameters(minLengthSecondType, 3, 6, 3)
checkAdditionalParameters(maxLengthSecondType, 3, 6, 6)

checkAdditionalParameters(minCountLettersSecondType, 4, 8, 4)
checkAdditionalParameters(maxCountLettersSecondType, 4, 8, 8)

checkParameters(countTasksSecondType, 0, 100)

//Третий тип
//==========

let minLengthThirdType = document.getElementById('minLengthThirdType')
let maxLengthThirdType = document.getElementById('maxLengthThirdType')

let minCountLettersThirdType = document.getElementById('minCountLettersThirdType')
let maxCountLettersThirdType = document.getElementById('maxCountLettersThirdType')

checkAdditionalParameters(minLengthThirdType, 3, 6, 3)
checkAdditionalParameters(maxLengthThirdType, 3, 6, 6)

checkAdditionalParameters(minCountLettersThirdType, 2, 4, 2)
checkAdditionalParameters(maxCountLettersThirdType, 2, 4, 4)

checkParameters(countTasksThirdType, 0, 100)