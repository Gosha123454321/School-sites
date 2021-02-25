Document.AddEventListener ('DOMContentLoaded', function (){

	let form = document.getElemetnById('number')

	form.AddEventListener('submit', function (event){
		event.preventDefault()

		let number = document.getElemetnById('inputNumber').value
		number = Number.parseInt(number)

		const div = dociment.getElementById('change')
		div.innerHTML = ' '

		





	})


})