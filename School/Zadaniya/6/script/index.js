document.addEventListener ('DOMContentLoaded', function(){
	let form = document.getElementById ('form')

	form.addEventListener('submit', function(event){
		event.preventDefault()

		const div = document.getElementById ('change')
		div.innerHTML = ' '

		let number = document.getElementById('inputForm').value
		number = Number.parseInt(number)
		let count = 0

		while (number != 0){
			if ((number % 10) % 2 === 0){
				count++;
			}
			number = Math.floor(number / 10)
		}

		div.innerHTML = count

	})
})