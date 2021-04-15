document.addEventListener('DOMContentLoaded', function () {
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

	document.getElementById('firstType__minLenght').addEventListener('change', event => {
		// console.log(event.target.value)
		if (event.target.value > 0) {
			console.log(data.firstType)
			data.firstType.minLength = event.target.value
			console.log(data.firstType)
			
		} else {
			
		}
	})

	// Переход: Интро -> Первый тип
	//=============================
	let introButton = document.getElementById('introButton')
	let firstTypeDiv = document.getElementById('firstTypeDiv')
	let firstSwitcher = document.getElementById('firstSwitcher')
	introButton.addEventListener('click', function (event) {
		event.preventDefault()
		let divIntro = document.getElementById('divIntro')
		divIntro.style.display = 'none'
		firstTypeDiv.style.display = 'flex'
		firstSwitcher.style.background = '#fff'
	})



	// ==========  
	// Первый тип 
	// ========== 

	// Ввод значений для задач первого типа
	//=====================================
	let firstType_nextButton = document.getElementById('firstType_nextButton')
	firstType_nextButton.addEventListener('click', function (event) {
		event.preventDefault()

		let isChoice = document.getElementById('isChoice').querySelector('input')
		if (isChoice.checked){
			data.firstType.minLength = document.getElementById('firstType__minLenght').value
			data.firstType.maxLength = document.getElementById('firstType__maxLenght').value

			data.firstType.minCountLetters = document.getElementById('firstType__minCountLetters').value
			data.firstType.maxCountLetters = document.getElementById('firstType__maxCountLetters').value

			data.firstType.minPlaceWord = document.getElementById('firstType__minPlaceWord').value
			data.firstType.maxPlaceWord = document.getElementById('firstType__maxPlaceWord').value

			data.firstType.countTasks = document.getElementById('firstType__countTasks').value
		}
		

		// console.log(data.firstType)
		// // Проверка вводимых значения для первого типа
		// if (data.firstType.countTasks != 0) {
		// 	alert('Thats correct')
		// }
	})






































})