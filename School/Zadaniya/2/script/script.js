document.addEventListener ('DOMContentLoaded', function () {

	let form = document.getElementById('numbers')

	form.addEventListener ('submit', function (event) {
		event.preventDefault()

		let numberFirst = document.getElementById('formInput_1').value
		let numberSecond = document.getElementById('formInput_2').value
		let numberThird = document.getElementById('formInput_3').value

		numberFirst = Number.parseInt(numberFirst)
		numberSecond = Number.parseInt(numberSecond)
		numberThird = Number.parseInt(numberThird)

		const div = document.getElementById('change')
		div.innerHTML = ' '
		
		for (let i = numberFirst; i <= numberSecond; i++){
			if (i % numberThird === 0){
				div.innerHTML += `${i} `	
			}
		}
	})
})