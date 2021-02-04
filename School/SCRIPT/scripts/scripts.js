document.addEventListener ('DOMContentLoaded', function (){
	let elem = document.getElementById('showblock')
	let isOpen = false

	elem.addEventListener ('click', function (event) {
		event.preventDefault()
		let block = document.getElementById('block')
		if (!isOpen) {
			block.style.display = 'block'
			isOpen = true
		}
	})

	let elem1 = document.getElementById('closeblock')

	elem1.addEventListener ('click', function (event) {
		event.preventDefault()
		let block = document.getElementById('block')
		if (isOpen){
			block.style.display = 'none'
			isOpen = false
		}
	})

	let form = document.getElementById('answer')

	form.addEventListener ('submit', function (event) {
		event.preventDefault()
	 	let input = document.getElementById('forms_input')
	 	if (input.value == 'Сортавала'){
	 		alert ('Правильно')
	 	}else{
	 		alert ('Неправильно')
	 	}
	})

})


