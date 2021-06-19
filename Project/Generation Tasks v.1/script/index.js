//=====================================
// Генерация данных для 3-х типов задач
//=====================================

//Первый тип
//==========
function getDataFirstType(minLength, maxLength, minCountLetters, maxCountLetters, minPlaceWord, maxPlaceWord) {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я']

    let length = Math.floor(minLength + (Math.random() * 100) % (maxLength - minLength + 1))
    let countFirst = Math.floor(2 + (Math.random() * 100) % (length - 2 + 1))

    let maxRealPlaceWord = Math.pow(countFirst, length)
    if (maxPlaceWord >= maxRealPlaceWord) {
        maxPlaceWord = maxRealPlaceWord
    }
    minRealPlaceWord = countFirst + 2
    if (minPlaceWord < minRealPlaceWord) {
        minPlaceWord = minRealPlaceWord
    }
    let placeWord = Math.floor(minPlaceWord + (Math.random() * 100) % (maxRealPlaceWord - minPlaceWord + 1))

    let placedLetters = []
    let x = 29
    for (let i = 1; i <= countFirst; i++) {
        letterFirst = Math.floor(0 + (Math.random() * 100) % (x - 0 + 1))
        placedLetters.push(letters[letterFirst])
        letters.splice(letterFirst, 1)
        x--
    }
    placedLetters.sort()
    let text = ''
    for (let i = 0; i < placedLetters.length; i++) {
        text += placedLetters[i] + ', '
    }


    let a = []
    for (let i = 1; i <= length; i++) {
        a.push(0)
    }

    let examples = ''
    for (let i = 1; i <= countFirst + 1; i++) {
        let string = ''

        for (let j = 0; j < length; j++) {
            string += placedLetters[a[j]]
        }

        if (a[a.length - 1] + 1 < countFirst) {
            a[a.length - 1] = a[a.length - 1] + 1
        } else {
            a[a.length - 1] = a[0]
            a[a.length - 2] = a[a.length - 2] + 1
        }
        examples += `<p>` + i + '. ' + string + `</p>`
    }


    return {
        length: length,
        text: text,
        examples: examples,
        placeWord: placeWord
    }
}

//Второй тип
//==========
function getDataSecondType(minLength, maxLength, minCountLetters, maxCountLetters) {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я']


    let length = Math.floor(minLength + (Math.random() * 100) % (maxLength - minLength + 1))
    let count = Math.floor(2 + (Math.random() * 100) % (length - 2 + 1))

    let placedLetters = []
    let x = 29
    for (let i = 1; i <= count; i++) {
        letterSecond = Math.floor(0 + (Math.random() * 100) % (x - 0 + 1))
        placedLetters.push(letters[letterSecond])
        letters.splice(letterSecond, 1)
        x--
    }
    placedLetters.sort()
    let text = ''
    for (let i = 0; i < placedLetters.length; i++) {
        text += placedLetters[i] + ', '
    }


    let a = []
    for (let i = 1; i <= length; i++) {
        a.push(0)
    }

    let examples = ''
    for (let i = 1; i <= count + 1; i++) {
        let string = ''

        for (let j = 0; j < length; j++) {
            string += placedLetters[a[j]]
        }

        if (a[a.length - 1] + 1 < count) {
            a[a.length - 1] = a[a.length - 1] + 1
        } else {
            a[a.length - 1] = a[0]
            a[a.length - 2] = a[a.length - 2] + 1
        }
        examples += `<p>` + i + '. ' + string + `</p>`
    }

    let quest = ''
    for (let i = 0; i < length; i++) {
        letterSecond = Math.floor(0 + (Math.random() * 100) % (placedLetters.length))
        quest += placedLetters[letterSecond]
    }

    return {
        length: length,
        count: count,
        text: text,
        examples: examples,
        quest: quest
    }
}

//Третий тип
//==========
function getDataThirdType(minLength, maxLength, minCountLetters, maxCountLetters) {
    let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я']

    let length = Math.floor(minLength + (Math.random() * 100) % (maxLength - minLength + 1))
    let countThird = Math.floor(minCountLetters + (Math.random() * 100) % (maxCountLetters - minCountLetters + 1))
    let sound = Math.floor(0 + (Math.random() * 100) % (1 - 0 + 1))

    if (sound === 1) {
        sound = 'согласной'
    } else {
        sound = 'гласной'
    }

    let stringThird = ''
    let x = 29
    for (let i = 1; i <= countThird; i++) {
        letterThird = Math.floor(0 + (Math.random() * 100) % (x - 0 + 1))
        if (i === 1) {
            stringThird += letters[letterThird]
            letters.splice(letterThird, 1)
        } else {
            stringThird += ', ' + letters[letterThird]
            letters.splice(letterThird, 1)
        }
        x--
    }

    return {
        length: length,
        sound: sound,
        stringThird: stringThird
    }
}

//======================================
// Генерация текстов для задач 3-х типов
//======================================
//Первый тип
//==========
function generateFirstType(dataFirstType) {
    return `
    <div class="resultTask">
        <p>Все ${dataFirstType.length}-буквенные слова, составленные из букв ${dataFirstType.text}записаны в алфавитном порядке и пронумерованы. Вот начало списка:</p>
        ${dataFirstType.examples}
        <p>……</p>
        <p>Запишите слово, которое стоит на ${dataFirstType.placeWord}-м месте от начала списка.</p>
    </div>
    `
}

//Второй тип
//==========
function generateSecondType(dataSecondType) {
    return `
    <div class="resultTask">
        <p>Все ${dataSecondType.length}-буквенные слова, составленные из ${dataSecondType.count} букв ${dataSecondType.text}записаны в алфавитном порядке.
        Вот начало списка:
        ${dataSecondType.examples}
        ……
        На каком месте от начала списка стоит слово ${dataSecondType.quest}? 
        </p>
    </div>
    `
}

//Третий тип
//==========
function generateThirdType(dataThirdType) {

    return `
    <div class="resultTask">
        <p>Сколько слов длины ${dataThirdType.length}, начинающихся с ${dataThirdType.sound} буквы, можно составить из букв ${dataThirdType.stringThird}? Каждая буква может входить в слово несколько раз. Слова не обязательно должны быть осмысленными словами русского языка.
        </p>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', function () {

    let attentionParametersDivFirst = document.getElementById('attentionInputParametersFirst')
    let attentionParametersDivSecond = document.getElementById('attentionInputParametersSecond')
    let attentionParametersDivThird = document.getElementById('attentionInputParametersThird')

    let attentionCountDivFirst = document.getElementById('attentionInputCountFirst')
    let attentionCountDivSecond = document.getElementById('attentionInputCountSecond')
    let attentionCountDivThird = document.getElementById('attentionInputCountThird')

    let resultDiv = document.getElementById('result')

    let parameters = document.getElementById('selectParameters')

    parameters.addEventListener('submit', function (event) {
        event.preventDefault()

        //Очистака всех изменяющихся блоков
        //=================================
        attentionParametersDivFirst.innerHTML = ""
        attentionParametersDivSecond.innerHTML = ""
        attentionParametersDivThird.innerHTML = ""

        attentionCountDivFirst.innerHTML = ""
        attentionCountDivSecond.innerHTML = ""
        attentionCountDivThird.innerHTML = ""

        resultDiv.innerHTML = ""

        //======================
        // Объявление параметров 
        //======================

        let minLength = document.getElementById('minLength').value
        let maxLength = document.getElementById('maxLength').value

        let minCountLetters = document.getElementById('minCountLetters').value
        let maxCountLetters = document.getElementById('maxCountLetters').value

        let minPlaceWord = document.getElementById('minPlaceWord').value
        let maxPlaceWord = document.getElementById('maxPlaceWord').value

        //=================================
        // Объявление параметров количетсва 
        //=================================

        let countFirstType = document.getElementById('countFirstType').value
        let countSecondType = document.getElementById('countSecondType').value
        let countThirdType = document.getElementById('countThirdType').value

        //========================================
        // Проверка на корректность ввода значений (upd параметры ввода)
        //========================================

        //Проверка на корректность ввода значений длины слова
        //===================================================
        if (minLength === '') {
            attentionParametersDivFirst.innerHTML += `<p class="attention">Значение минимальной длины слова указано некорректно. Проверьте его.`
        } else {
            minLength = parseInt(minLength)
        }
        if (maxLength === '') {
            attentionParametersDivFirst.innerHTML += `<p class="attention">Значение максимальной длины слова указано некорректно. Проверьте его.`
        } else {
            maxLength = parseInt(maxLength)
        }
        if (minLength > maxLength && minLength != '' && maxLength != '') {
            attentionParametersDivFirst.innerHTML += `<p class="attention">Значение "ОТ" больше, чем значение "ДО". Проверьте его.`
        }

        //Проверка на корректность ввода значений количества букв
        //=======================================================
        if (minCountLetters === '') {
            attentionParametersDivSecond.innerHTML += `<p class="attention">Значение минимального количества букв указано некорректно. Проверьте его.`
        } else {
            minCountLetters = parseInt(minCountLetters)
        }
        if (maxCountLetters === '') {
            attentionParametersDivSecond.innerHTML += `<p class="attention">Значение максимального количетсва бук указано некорректно. Проверьте его.`
        } else {
            maxCountLetters = parseInt(maxCountLetters)
        }
        if (minCountLetters > maxCountLetters && minCountLetters != '' && maxCountLetters != '') {
            attentionParametersDivSecond.innerHTML += `<p class="attention">Значение "ОТ" больше, чем значение "ДО". Проверьте его.`
        }

        //Проверка на корректность ввода значений места слова
        //===================================================
        if (minPlaceWord === '') {
            attentionParametersDivThird.innerHTML += `<p class="attention">Значение минимального места слова указано некорректно. Проверьте его.`
        } else {
            minPlaceWord = parseInt(minPlaceWord)
        }
        if (maxPlaceWord === '') {
            attentionParametersDivThird.innerHTML += `<p class="attention">Значение максимального места слова указано некорректно. Проверьте его.`
        } else {
            maxPlaceWord = parseInt(maxPlaceWord)
        }
        if (minPlaceWord > maxPlaceWord && minPlaceWord != '' && maxPlaceWord != '') {
            attentionParametersDivThird.innerHTML += `<p class="attention">Значение "ОТ" больше, чем значение "ДО". Проверьте его.`
        }

        //Проверка на корректность ввода значений количества выводимых задач
        //==================================================================

        //Первый тип
        if (countFirstType === '') {
            countFirstType = 0
        } else {
            countFirstType = parseInt(countFirstType)
        }

        if (countFirstType > 50 || countFirstType < 0) {
            attentionCountDivFirst.innerHTML += `<p class="attention">Значение количества генерируемых задач некорректно. Проверьте его.</p>`
            isAttention = true
        }

        //Второй тип
        if (countSecondType === '') {
            countSecondType = 0
        } else {
            countSecondType = parseInt(countSecondType)
        }

        if (countSecondType > 50 || countSecondType < 0) {
            attentionCountDivSecond.innerHTML += `<p class="attention">Значение количества генерируемых задач некорректно. Проверьте его.</p>`
            isAttention = true
        }

        //Третий тип
        if (countThirdType === '') {
            countThirdType = 0
        } else {
            countThirdType = parseInt(countThirdType)
        }

        if (countThirdType > 50 || countThirdType < 0) {
            attentionCountDivThird.innerHTML += `<p class="attention">Значение количества генерируемых задач некорректно. Проверьте его.</p>`
            isAttention = true
        }

        //==========================
        // Вывод и генерация заданий
        //==========================

        //Проверка, что все значения введены верно
        if (attentionParametersDivFirst.innerHTML === "" && attentionParametersDivSecond.innerHTML === "" && attentionParametersDivThird.innerHTML === "" && attentionCountDivFirst.innerHTML === "" && attentionCountDivSecond.innerHTML === "" && attentionCountDivThird.innerHTML === "") {

            let checkFirst = 0
            for (let count = 1; count <= countFirstType; count++) {
                if (checkFirst === 0) {
                    resultDiv.innerHTML += `<h2>Первый тип:</h2>`
                    checkFirst++
                }

                let dataFirstType = getDataFirstType(minLength, maxLength, minCountLetters, maxCountLetters, minPlaceWord, maxPlaceWord)
                let textFirstType = generateFirstType(dataFirstType)

                resultDiv.innerHTML += textFirstType

            }

            let checkSecond = 0
            for (let count = 1; count <= countSecondType; count++) {
                if (checkSecond === 0) {
                    resultDiv.innerHTML += `<h2>Второй тип:</h2>`
                    checkSecond++
                }
                let dataSecondType = getDataSecondType(minLength, maxLength, minCountLetters, maxCountLetters)
                let textSecondType = generateSecondType(dataSecondType)

                resultDiv.innerHTML += textSecondType
            }


            let checkThird = 0
            for (let count = 1; count <= countThirdType; count++) {
                if (checkThird === 0) {
                    resultDiv.innerHTML += `<h2>Третий тип:</h2>`
                    checkThird++
                }

                let dataThirdType = getDataThirdType(minLength, maxLength, minCountLetters, maxCountLetters)
                let textThirdType = generateThirdType(dataThirdType)

                resultDiv.innerHTML += textThirdType
            }
        }

    })

})