document.addEventListener('DOMContentLoaded', function(){
	let form = document.getElementById('form')

	form.addEventListener('submit', function(event){
		event.preventDefault()

		const div = document.getElementById('change')
		div.innerHTML = ""

		let number = document.getElementById('inputForm').value
		number = Number.parseInt(number)
		let sum = 0

		while (number != 0){
			sum += number % 10
			number = Math.floor(number / 10) 
		}
		div.innerHTML = sum 
	})
})