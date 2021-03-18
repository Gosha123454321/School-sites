document.addEventListener ('DOMContentLoaded', function(){

	let form = document.getElementById('form')

	form.addEventListener ('submit', function(event){
		event.preventDefault ()

		let number = document.getElementById ('inputForm').value
		number = Number.parseInt (number)

		const div = document.getElementById ('change')
		div.innerHTML = ' '

		let sum = 0
		for (let i = 1; i < number; i++){
			if (number % i == 0){
				sum += i
			}
		}
		if (sum === number){
			div.innerHTML = 'Да. Число является совершенным'
		}else{
			div.innerHTML = 'Нет. Число не является совершенным'
		}
	})
})