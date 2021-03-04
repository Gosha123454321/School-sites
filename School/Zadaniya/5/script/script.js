document.addEventListener ('DOMContentLoaded', function (){

	let form = document.getElementById('number')

	form.addEventListener('submit', function (event){
		event.preventDefault()

		let number = document.getElementById('inputNumber').value
		number = Number.parseInt(number)

		const div = document.getElementById('change')
		div.innerHTML = ' '

		
		for (let i = 1; i <= number; i++) {
			let digit = 0, x = i;

			while (x != 0) { 
				digit++;
				x = Math.floor(x / 10);

			}

			if (i === Math.pow(i, 2) % Math.pow(10, digit)) {
				div.innerHTML += `${i} `
			}
		}

	})


})