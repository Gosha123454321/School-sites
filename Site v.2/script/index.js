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

let changeChooseButton = (element, isChoose) => {
	element.addEventListener('click', e => {
		if (!isChoose) {
			element.classList.add('active__button');
			element.classList.remove('choice__button');

			isChoose = true
		} else {
			element.classList.add('choice__button');
			element.classList.remove('active__button');

			isChoose = false
		}
		return isChoose
	})
	return isChoose
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
			minLength: 0,
			maxLength: 0,
			minCountLetters: 0,
			maxCountLetters: 0,
			countTasks: 0
		},
		thirdType: {
			minLength: 0,
			maxLength: 0,
			minCountLetters: 0,
			maxCountLetters: 0,
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

	// //Переход от ввода параметров к результату
	// //========================================

	// document.getElementById('doGenerateButton').addEventListener('click', event => {
	// 	event.preventDefault()

	// 	// Берем значения из объекта, генерируем задания, добавляем в pageResult

	// 	document.getElementById('slideBar').classList.add('hide');
	// 	document.getElementById('resultPage').classList.remove('hide');
	// })

	//Переход от результата к начальному экрану
	//================================================

	document.getElementById('titleResult').addEventListener('click', event => {
		event.preventDefault()
		document.getElementById('wrapper').classList.add('content-wrapper')
		document.getElementById('resultPage').classList.add('hide');
		document.getElementById('introPage').classList.remove('hide');
	})

	//Изменение кнопки выбора задачи
	//==============================

	//Первый тип
	//==========

	let isChooseFirstType = false
	let chooseFirstTypeButton = document.getElementById('chooseFirstTypeButton')

	isChooseFirstType = changeChooseButton(chooseFirstTypeButton, isChooseFirstType)

	//Второй тип
	//==========

	let isChooseSecondType = false
	let chooseSecondTypeButton = document.getElementById('chooseSecondTypeButton')

	isChooseSecondType = changeChooseButton(chooseSecondTypeButton, isChooseSecondType)


	//Третий тип
	//==========

	let isChooseThirdType = false
	let chooseThirdTypeButton = document.getElementById('chooseThirdTypeButton')

	isChooseThirdType = changeChooseButton(chooseThirdTypeButton, isChooseThirdType)


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

	let countTasksFirstType = document.getElementById('countTasksFirstType')

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

	let countTasksSecondType = document.getElementById('countTasksSecondType')

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

	let countTasksThirdType = document.getElementById('countTasksThirdType')

	checkAdditionalParameters(minLengthThirdType, 3, 6, 3)
	checkAdditionalParameters(maxLengthThirdType, 3, 6, 6)

	checkAdditionalParameters(minCountLettersThirdType, 2, 4, 2)
	checkAdditionalParameters(maxCountLettersThirdType, 2, 4, 4)

	checkParameters(countTasksThirdType, 0, 100)

	//Проверка на правильность заполнения форм и генерация
	//====================================================

	document.getElementById('doGenerateButton').addEventListener('click', e => {
		console.log(isChooseFirstType)
		if (isChooseFirstType) {
			let test = Number.parseInt(countTasksFirstType.value)
			console.log(test)
			if (Number.isNaN(test)) {
				console.log('vvedite kolvo 1 type')
			}
		}
		if (isChooseSecondType) {

		}
		if (isChooseThirdType) {

		}
	})







})
