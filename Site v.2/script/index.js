
document.addEventListener('DOMContentLoaded', function () {


	let el = document.querySelector(".tabs")
	let instance = M.Tabs.init(el)
	// не робит
	// let instance = M.Tabs.init(el, { swipeable: true })

	// Переход от начального экрана к вводу параметров
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


	//Глобальный объект данных
	//========================

	let data = {
		firstType: {
			minLength: 0,
			maxLength: 0,
			minCountLetters: 0,
			maxCountLetters: 0,
			minPlaceWord: 0,
			maxPlaceWord: 0,
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

	// Ввод параметров для первого типа 
	//=====================================

	let isSaveFirstType = false

	document.getElementById('chooseFirstType').addEventListener('click', event => {
		if (!isSaveFirstType) {
			//Поменять цвет
			document.getElementById('chooseFirstType').style.background = '#fff'
			document.getElementById('chooseFirstType').style.color = '#1c8af9'

			isSaveFirstType = true
			let minLength = document.getElementById('minLength').value
			let maxLength = document.getElementById('maxLength').value

			let minCountLetters = document.getElementById('minCountLetters').value
			let maxCountLetters = document.getElementById('maxCountLetters').value

			let minPlaceWord = document.getElementById('minPlaceWord').value
			let maxPlaceWord = document.getElementById('maxPlaceWord').value

			let countTasks = document.getElementById('countTasks').value
		} else {
			document.getElementById('chooseFirstType').style.background = '#1c8af9'
			document.getElementById('chooseFirstType').style.color = '#fff'

			isSaveFirstType = false

			data.firstType.minLength = 0
			data.firstType.maxLength = 0

			data.firstType.minCountLetters = 0
			data.firstType.maxCountLetters = 0

			data.firstType.minPlaceWord = 0
			data.firstType.maxPlaceWord = 0

			data.firstType.countTasks = 0
		}

	})

})
