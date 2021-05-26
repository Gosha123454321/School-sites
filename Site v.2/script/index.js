

let checkIsNaN = (element) => {
	if (Number.isNaN(Number.parseInt(element))) {
		return true
	}
	return false
}

document.addEventListener('DOMContentLoaded', function () {

	//Инициализация для materialize
	//=============================

	let el = document.querySelector(".tabs")
	let instance = M.Tabs.init(el)
	// не робит
	// let instance = M.Tabs.init(el, { swipeable: true })


	let ChangeButtonParammeters = (typeObject, buttonName, countInputName, messageTest) => {
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

	//Первый тип
	//==========
	ChangeButtonParammeters(
		data.firstType,
		'chooseFirstTypeButton',
		'countTasksFirstType',
		'Введите количество задач первого типа'
	)

	//Второй тип
	//==========

	ChangeButtonParammeters(
		data.secondType,
		'chooseSecondTypeButton',
		'countTasksSecondType',
		'Введите количество задач второго типа'
	)

	//Третий тип
	//==========

	ChangeButtonParammeters(
		data.thirdType,
		'chooseThirdTypeButton',
		'countTasksThirdType',
		'Введите количество задач третьего типа'
	)

	//Генерация задач
	//===============

	document.getElementById('doGenerateButton').addEventListener('click', e => {
		//Посмотреть возможность добавления помощника подкрутки до заголовков  

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
		if (data.firstType.isChoosen || data.secondType.isChoosen || data.thirdType.isChoosen) {
			document.getElementById('slideBar').classList.add('hide')
			document.getElementById('resultPage').classList.remove('hide')
		}

	})
})
