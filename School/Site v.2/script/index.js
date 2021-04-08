document.addEventListener('DOMContentLoaded', function () {
	
	document.getElementById('firstType__minLenght').addEventListener('change', event => {
		console.log(event.target.value)
	})

	let introButton = document.getElementById('introButton')
	introButton.addEventListener('click', function (event) {
		event.preventDefault()

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

	// Ввод значений для задач первого типа
	//=====================================
	let firstType_nextTask = document.getElementById('firstType_nextTask')
	firstType_nextTask.addEventListener('click', function(event){
		event.preventDefault()

		data.firstType.minLength = document.getElementById('firstType__minLenght').value
		data.firstType.maxLenght = document.getElementById('firstType__maxLenght').value

		data.firstType.minCountLetters = document.getElementById('firstType__minCountLetters').value
		data.firstType.maxCountLetters = document.getElementById('firstType__maxCountLetters').value

		data.firstType.minPlaceWord = document.getElementById('firstType__minPlaceWord').value
		data.firstType.maxPlaceWord = document.getElementById('firstType__maxPlaceWord').value

		data.firstType.countTasks = document.getElementById('firstType__countTasks').value	
	})

	
































})