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

let checkIsNaN = (element) => {
	if (Number.isNaN(Number.parseInt(element))) {
		return true
	}
	return false
}

//Генерация данных для задач
//==========================

//Первый тип
//==========

let getDataFirstType = () => {

}

//Второй тип
//==========

let getDataSecondType = () => {

}

//Третий тип
//==========


let getDataThirdType = (data) => {
	let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я']

	let length = Math.floor(data.thirdType.minLength + (Math.random() * 100) % (data.thirdType.maxLength - data.thirdType.minLength + 1))
	let countThird = Math.floor(data.thirdType.minCountLetters + (Math.random() * 100) % (data.thirdType.maxCountLetters - data.thirdType.minCountLetters + 1))
	let sound = Math.floor(0 + (Math.random() * 100) % (1 - 0 + 1))

	if (sound === 1) {
		sound = 'согласной'
	} else {
		sound = 'гласной'
	}

	let stringThird = ''
	let x = 29
	for (let i = 1; i <= countThird; i++) {
		let letterThird = Math.floor(0 + (Math.random() * 100) % (x - 0 + 1))
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


//Генерация текстов для задач
//===========================

//Первый тип
//==========

let getTextFirstType = (dataFirstType) => {
	return `
	<div class="task">
		<p>Все ${dataFirstType.length}-буквенные слова, составленные из букв ${dataFirstType.text}записаны в алфавитном порядке и пронумерованы. Вот начало списка:</p>
		${dataFirstType.examples}
		<p>……</p>
		<p>Запишите слово, которое стоит на ${dataFirstType.placeWord}-м месте от начала списка.</p>
		<div class="bar"></div>
		Ответ:
	</div>
	`
}

//Второй тип
//==========

let getTextSecondType = (dataSecondType) => {
	return `
	<div class="task">
		<p>Все ${dataSecondType.length}-буквенные слова, составленные из ${dataSecondType.count} букв ${dataSecondType.text}записаны в алфавитном порядке.
		Вот начало списка:
		${dataSecondType.examples}
		……
		На каком месте от начала списка стоит слово ${dataSecondType.quest}? 
		</p>
		<div class="bar"></div>
		Ответ:
	</div>
	`
}

//Третий тип
//==========

let getTextThirdType = (dataThirdType) => {
	return `
	<div class="col s12 m6 l6 xl4 task">
		<p>Сколько слов длины ${dataThirdType.length}, начинающихся с ${dataThirdType.sound} буквы, можно составить из букв ${dataThirdType.stringThird}? Каждая буква может входить в слово несколько раз. Слова не обязательно должны быть осмысленными словами русского языка.
		</p>
		<div class="bar"></div>
		Ответ:
	</div>
	`
}

document.addEventListener('DOMContentLoaded', function () {

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
			countTasks: 0
		},
		secondType: {
			minLength: 3,
			maxLength: 6,
			minCountLetters: 4,
			maxCountLetters: 8,
			countTasks: 0
		},
		thirdType: {
			minLength: 3,
			maxLength: 6,
			minCountLetters: 2,
			maxCountLetters: 4,
			countTasks: 0
		}
	}




	//Инициализация для materialize
	//=============================

	let el = document.querySelector(".tabs")
	let instance = M.Tabs.init(el)
	// не робит
	// let instance = M.Tabs.init(el, { swipeable: true })


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

	//Переход от результата к начальному экрану
	//================================================

	document.getElementById('titleResult').addEventListener('click', event => {
		event.preventDefault()
		document.getElementById('wrapper').classList.add('content-wrapper')
		document.getElementById('resultPage').classList.add('hide');
		document.getElementById('introPage').classList.remove('hide');
	})

	//Выбор задачи
	//============

	//Первый тип
	//==========

	let isChooseFirstType = false
	let chooseFirstTypeButton = document.getElementById('chooseFirstTypeButton')

	let countTasksFirstType = document.getElementById('countTasksFirstType')

	chooseFirstTypeButton.addEventListener('click', e => {
		if (!isChooseFirstType) {
			if (checkIsNaN(countTasksFirstType.value)) {
				//Потом добавить блок для ошибок
				console.log('Введите количество задач первого типа')
			} else {
				data.firstType.countTasks = Number.parseInt(countTasksFirstType.value)
				isChooseFirstType = true

				chooseFirstTypeButton.classList.add('active__button');
				chooseFirstTypeButton.classList.remove('choice__button');
			}
		} else {
			data.firstType.countTasks = 0
			countTasksFirstType.value = ""
			isChooseFirstType = false

			chooseFirstTypeButton.classList.remove('active__button');
			chooseFirstTypeButton.classList.add('choice__button');
		}
	})

	//Второй тип
	//==========

	let isChooseSecondType = false
	let chooseSecondTypeButton = document.getElementById('chooseSecondTypeButton')

	let countTasksSecondType = document.getElementById('countTasksSecondType')

	chooseSecondTypeButton.addEventListener('click', e => {
		if (!isChooseSecondType) {
			if (checkIsNaN(countTasksSecondType.value)) {
				//Потом добавить блок для ошибок
				console.log('Введите количество задач второго типа')
			} else {
				data.secondType.countTasks = Number.parseInt(countTasksSecondType.value)
				isChooseSecondType = true

				chooseSecondTypeButton.classList.add('active__button');
				chooseSecondTypeButton.classList.remove('choice__button');
			}
		} else {
			data.secondType.countTasks = 0
			countTasksSecondType.value = ""
			isChooseSecondType = false

			chooseSecondTypeButton.classList.remove('active__button');
			chooseSecondTypeButton.classList.add('choice__button');
		}
	})

	//Третий тип
	//==========

	let isChooseThirdType = false
	let chooseThirdTypeButton = document.getElementById('chooseThirdTypeButton')

	let countTasksThirdType = document.getElementById('countTasksThirdType')

	chooseThirdTypeButton.addEventListener('click', e => {
		if (!isChooseThirdType) {
			if (checkIsNaN(countTasksThirdType.value)) {
				//Потом добавить блок для ошибок
				console.log('Введите количество задач третьего типа')
			} else {
				data.thirdType.countTasks = Number.parseInt(countTasksThirdType.value)
				isChooseThirdType = true

				chooseThirdTypeButton.classList.add('active__button');
				chooseThirdTypeButton.classList.remove('choice__button');
			}
		} else {
			data.thirdType.countTasks = 0
			countTasksThirdType.value = ""
			isChooseThirdType = false

			chooseThirdTypeButton.classList.remove('active__button');
			chooseThirdTypeButton.classList.add('choice__button');
		}
	})


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

	//Генерация задач
	//===============

	document.getElementById('doGenerateButton').addEventListener('click', e => {
		//Посмотреть возможность добавления помощника подкрутки до заголовков  
		// document.getElementById('tasks').innerHTML = ""
		// Генерация задач для первого типа
		//=================================
		if (isChooseFirstType) {
			document.getElementById('resultFirstType').classList.remove('hide');

			for (let c = 1; c <= data.firstType.countTasks; c++) {
				let dataFirstType = getDataFirstType()
				let textFirstType = getTextFirstType(dataFirstType)

				document.getElementById('resultFirstType') += textFirstType
			}
		}

		// Генерация задач для второго типа
		//=================================
		if (isChooseSecondType) {
			document.getElementById('resultSecondType').classList.remove('hide');

			for (let c = 1; c <= data.secondType.countTasks; c++) {
				let dataSecondType = getDataSecondType()
				let textSecondType = getTextSecondType(dataSecondType)

				document.getElementById('resultSecondType') += textSecondType
			}
		}

		// Генерация задач для третьего типа
		//==================================
		if (isChooseThirdType) {
			document.getElementById('resultThirdType').classList.remove('hide')

			for (let c = 1; c <= data.thirdType.countTasks; c++) {
				let dataThirdType = getDataThirdType(data)
				let textThirdType = getTextThirdType(dataThirdType)

				document.getElementById('thirdTasks').innerHTML += textThirdType
			}
		}

		//Переход от ввода параметров к результату
		//========================================

		document.getElementById('slideBar').classList.add('hide')
		document.getElementById('resultPage').classList.remove('hide')
	})







})
