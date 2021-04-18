document.addEventListener ('DOMContentLoaded', function() {
	
	const div = document.getElementById('change')
	div.innerHTML = ' '

	for (let i = 100; i < 10000; i++){
		let tmpi = i, count = 0, sum = 0;
		while (tmpi != 0){
			count++
			tmpi /= 10
			tmpi = Math.floor(tmpi)
		}
		
		tmpi = i
		while (tmpi != 0){
			sum += Math.pow(tmpi % 10, count)
			tmpi /= 10
			tmpi = Math.floor(tmpi)
		}

		if (sum === i){
			div.innerHTML += `${i} `
		}
	}



})