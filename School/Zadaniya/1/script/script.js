document.addEventListener ('DOMContentLoaded', function (){

	let form = document.getElementById('numbers')

	form.addEventListener ('submit', function (event) {
		event.preventDefault()

		let numberFirst = document.getElementById('formInput_1').value
		let numberSecond = document.getElementById('formInput_2').value

		numberFirst = Number.parseInt(numberFirst)
		numberSecond = Number.parseInt(numberSecond)

		const div = document.getElementById('change')
		div.innerHTML = ' '

		for (let i = numberFirst; i <= numberSecond; i++){
			let count = 0
			for (let j = 1; j <= i; j++){
				if (i % j === 0){
					count++
				}
			}
			if (count === 2){
				div.innerHTML += `${i} `
			}	
		}
	})

})