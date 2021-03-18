document.addEventListener ('DOMContentLoaded', function (){
	let form = document.getElementById('form')

	form.addEventListener('submit', function (event){
		event.preventDefault()

		let number = document.getElementById('inputForm').value
		number = Number.parseInt(number)

		const div = document.getElementById('change')
		div.innerHTML = ' '

		let isRepeat = false

		while (number != 0){
			if (number % 10 === Math.floor(number / 10) % 10){
				isRepeat = true
			}
			number = Math.floor (number / 10)
		}	
		if (isRepeat){
			div.innerHTML = "Встречается"
		}else{
			div.innerHTML = "Не встречается"
		}
	})
})