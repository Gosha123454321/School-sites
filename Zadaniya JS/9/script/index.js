document.addEventListener ('DOMContentLoaded', function(){
	let form = document.getElementById('form')

	form.addEventListener('submit', function(event){
		event.preventDefault()

		let number = document.getElementById('inputForm').value
		number = Number.parseInt(number)

		let div = document.getElementById ('change')
		div.innerHTML = ' '


		let last = number % 10
		while (number != 0){
			if (last != number % 10){
				div.innerHTML = "Нет. Число состоит из разных цифр"
				return
			}
			number = Math.floor(number / 10)
		}
		div.innerHTML = "Да. Число состоит из одинаковых цифр"
	})
})