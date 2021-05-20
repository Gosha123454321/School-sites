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
	let stringThird = ''

	let lettersSogl = ['Б', 'В', 'Г', 'Д', 'Ж', 'З', 'К', 'Л', 'М', 'Н', 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ']
	let lettersGlas = ['А','Е', 'И','О', 'У', 'Ы', 'Э', 'Ю', 'Я']

	let length = Math.floor(data.thirdType.minLength + (Math.random() * 100) % (data.thirdType.maxLength - data.thirdType.minLength + 1))
	let countThird = Math.floor(data.thirdType.minCountLetters + (Math.random() * 100) % (data.thirdType.maxCountLetters - data.thirdType.minCountLetters + 1))
	let sound = Math.floor(0 + (Math.random() * 100) % (1 - 0 + 1))

	let countSogl = 20
	let countGlas = 9

	if (sound === 1) {
		sound = 'согласной'

		let letterThird = Math.floor(0 + (Math.random() * 100) % (countSogl - 0 + 1))
		stringThird += lettersGlas[letterThird]
		lettersSogl.splice(letterThird, 1)

		countSogl--;
	} else {
		sound = 'гласной'

		let letterThird = Math.floor(0 + (Math.random() * 100) % (countGlas - 0 + 1))
		stringThird += lettersGlas[letterThird]
		lettersGlasn.splice(letterThird, 1)

		countGlas--;
	}

	for (let i = 1; i <= countThird - 1; i++) {
		let letterThird = Math.floor(0 + (Math.random() * 100) % (x - 0 + 1))
		let whichSound = Math.floor(0 + (Math.random() * 100) % 2)
	
		
		stringThird += ', ' + letters[letterThird]
		letters.splice(letterThird, 1)
	
	}

	return {
		length: length,
		sound: sound,
		stringThird: stringThird
	}
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

	//тест
	//==========

	let testEventAdd = (typeObject, buttonName, countInputName, messageTest) => {
		typeObject.isChoosen = false
		let chooseTypeButton = document.getElementById(buttonName)
		let countTasks = document.getElementById(countInputName)

		chooseTypeButton.addEventListener('click', e => {
			e.preventDefault()
			if (!typeObject.isChoosen) {
				if (checkIsNaN(countTasks.value)) {
					//Потом добавить блок для ошибок
					console.log(messageTest)
				} else {
					typeObject.countTasks = Number.parseInt(countTasks.value)
					typeObject.isChoosen = true

					chooseTypeButton.classList.add('active__button');
					chooseTypeButton.classList.remove('choice__button');
				}
			} else {
				typeObject.countTasks = 0
				countTasks.value = ""
				typeObject.isChoosen = false

				chooseTypeButton.classList.remove('active__button');
				chooseTypeButton.classList.add('choice__button');
			}
		})
	}

	//==========


	//Первый тип
	//==========
	testEventAdd(
		data.firstType,
		'chooseFirstTypeButton',
		'countTasksFirstType',
		'Введите количество задач первого типа'
	)

	//Второй тип
	//==========

	testEventAdd(
		data.secondType,
		'chooseSecondTypeButton',
		'countTasksSecondType',
		'Введите количество задач второго типа'
	)

	//Третий тип
	//==========

	testEventAdd(
		data.thirdType,
		'chooseThirdTypeButton',
		'countTasksThirdType',
		'Введите количество задач третьего типа'
	)

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
		if (data.firstType.isChoosen) {
			document.getElementById('resultFirstType').classList.remove('hide');

			for (let c = 1; c <= data.firstType.countTasks; c++) {
				let dataFirstType = getDataFirstType()
				let textFirstType = getTextFirstType(dataFirstType)

				document.getElementById('resultFirstType') += textFirstType
			}
		}

		// Генерация задач для второго типа
		//=================================
		if (data.secondType.isChoosen) {
			document.getElementById('resultSecondType').classList.remove('hide');

			for (let c = 1; c <= data.secondType.countTasks; c++) {
				let dataSecondType = getDataSecondType()
				let textSecondType = getTextSecondType(dataSecondType)

				document.getElementById('resultSecondType') += textSecondType
			}
		}

		// Генерация задач для третьего типа
		//==================================
		if (data.thirdType.isChoosen) {
			document.getElementById('resultThirdType').classList.remove('hide')

			for (let c = 1; c <= data.thirdType.countTasks; c++) {
				let dataThirdType = getDataThirdType(data)
				let textThirdType = getTextThirdType(dataThirdType)

				document.getElementById('thirdTasks').innerHTML += textThirdType
			}
		}

		//Переход от ввода параметров к результату
		//========================================
		if (isChooseFirstType || isChooseSecondType || isChooseThirdType){
			document.getElementById('slideBar').classList.add('hide')
			document.getElementById('resultPage').classList.remove('hide')
		}
		
	})
})
