document.addEventListener ('DOMContentLoaded', function () {

	let form = document.getElementById('number')

	form.addEventListener ('submit', function (event){
		event.preventDefault()

		let number = document.getElementById('inputForm').value
		number = Number.parseInt(number)

		const div = document.getElementById('change')
		div.innerHTML = ' '

		for (let i = number; i > 0; i--){
			let tmpi = i
			let isDel = true
			while (tmpi != 0){
				if (tmpi % 10 === 0 || i % (tmpi % 10) != 0){
					isDel = false
				}
				tmpi /= 10
				tmpi = Math.floor(tmpi) // округление до целого
			}
			
			if (isDel){
				div.innerHTML += `${i} `
			}
		}


	})
})
