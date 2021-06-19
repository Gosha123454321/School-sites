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

	// if (data.isGenerateAnswers === true) {

	// }

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