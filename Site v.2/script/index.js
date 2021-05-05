document.addEventListener('DOMContentLoaded', function () {


	let el = document.querySelector(".tabs")
	let instance = M.Tabs.init(el)
	// не робит
	// let instance = M.Tabs.init(el, { swipeable: true })

	// Переход от начального экрана к вводу параметров
	//================================================
	let introButton = document.getElementById('introButton')

	introButton.addEventListener('click', function (event) {
		event.preventDefault()
		document.getElementById('wrapper').classList.remove('content-wrapper')
		document.getElementById('introPage').classList.add('hide');
		document.getElementById('slideBar').classList.remove('hide');

	})

	//Переход от ввода параметров к начальному экрану
	//================================================
	let titleInput = document.getElementById('titleInput')

	titleInput.addEventListener('click', function (event) {
		event.preventDefault()
		document.getElementById('wrapper').classList.add('content-wrapper')
		document.getElementById('slideBar').classList.add('hide');
		document.getElementById('introPage').classList.remove('hide');
	})

	//Переход от ввода параметров к результату
	//========================================

	let doGenerateButton = document.getElementById('doGenerateButton')

	doGenerateButton.addEventListener('click', function (event) {
		event.preventDefault()
		document.getElementById('slideBar').classList.add('hide');
		document.getElementById('resultPage').classList.remove('hide');
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

	// document.getElementById('firstType__minLenght').addEventListener('change', event => {
	// 	// console.log(event.target.value)
	// 	if (event.target.value > 0) {
	// 		console.log(data.firstType)
	// 		data.firstType.minLength = event.target.value
	// 		console.log(data.firstType)

	// 	} else {

	// 	}
	// })

	// ==========  
	// Первый тип 
	// ========== 

	// Ввод значений для задач первого типа
	//=====================================
	// let firstType_nextButton = document.getElementById('firstType_nextButton')
	// firstType_nextButton.addEventListener('click', function (event) {
	// 	event.preventDefault()

	// 	let isChoice = document.getElementById('isChoice').querySelector('input')
	// 	if (isChoice.checked) {
	// 		data.firstType.minLength = document.getElementById('firstType__minLenght').value
	// 		data.firstType.maxLength = document.getElementById('firstType__maxLenght').value

	// 		data.firstType.minCountLetters = document.getElementById('firstType__minCountLetters').value
	// 		data.firstType.maxCountLetters = document.getElementById('firstType__maxCountLetters').value

	// 		data.firstType.minPlaceWord = document.getElementById('firstType__minPlaceWord').value
	// 		data.firstType.maxPlaceWord = document.getElementById('firstType__maxPlaceWord').value

	// 		data.firstType.countTasks = document.getElementById('firstType__countTasks').value
	// 	}


	// console.log(data.firstType)
	// // Проверка вводимых значения для первого типа
	// if (data.firstType.countTasks != 0) {
	// 	alert('Thats correct')
	// }
})





























