let checkAdditionalParameters = (element, min, max, defaultValue) => {
	element.addEventListener('change', e => {
		let value = e.target.value
		value = Number.parseInt(value)
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

let inputCount = (element, isChoose) => {
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
	})
}


document.addEventListener('DOMContentLoaded', function () {

	let minLength = document.getElementById('minLength')
	let maxLength = document.getElementById('maxLength')
	let countTasksFirstType = document.getElementById('countTasksFirstType')

	checkAdditionalParameters(minLength, 3, 6, 3)
	checkAdditionalParameters(maxLength, 3, 6, 6)
	checkParameters(countTasksFirstType, 0, 100)

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

	//Переход от ввода параметров к результату
	//========================================

	document.getElementById('doGenerateButton').addEventListener('click', event => {
		event.preventDefault()

		// Берем значения из объекта, генерируем задания, добавляем в pageResult

		document.getElementById('slideBar').classList.add('hide');
		document.getElementById('resultPage').classList.remove('hide');
	})

	//Переход от результата к начальному экрану
	//================================================

	document.getElementById('titleResult').addEventListener('click', event => {
		event.preventDefault()
		document.getElementById('wrapper').classList.add('content-wrapper')
		document.getElementById('resultPage').classList.add('hide');
		document.getElementById('introPage').classList.remove('hide');
	})


	//Ввод количества задача первого типа  
	//===================================

	let isChooseFirstType = false
	let chooseFirstTypeButton = document.getElementById('chooseFirstTypeButton')

	inputCount(chooseFirstTypeButton, isChooseFirstType)

	//Ввод количества задача второго типа
	//===================================

	let isChooseSecondType = false
	let chooseSecondTypeButton = document.getElementById('chooseSecondTypeButton')

	inputCount(chooseSecondTypeButton, isChooseSecondType)

	//Ввод количества задача третьего типа
	//====================================

	let isChooseThirdType = false
	let chooseThirdTypeButton = document.getElementById('chooseThirdTypeButton')

	inputCount(chooseThirdTypeButton, isChooseThirdType)

})
