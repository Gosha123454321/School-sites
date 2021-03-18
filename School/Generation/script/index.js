function getData(){
	let t = Math.floor (20 + (Math.random() * 100) % (90 - 20 + 1))
	let p = Math.floor (100 + (Math.random() * 100) % (150 - 100 + 1))
	let w = Math.floor (120 + (Math.random() * 100) % (900 - 120 + 1))
	let h = Math.floor (120 + (Math.random() * 100) % (900 - 120 + 1))
	return {
		t: t,
		p: p,
		w: w,
		h: h
	}
}

function generateText(data){
	return `<p>Автоматическая фотокамера каждые ${data.t} с создаёт черно-белое растровое изображение, содержащее ${data.p} оттенков. Размер изображения – ${data.w}×${data.h} пикселей. Все полученные изображения и коды пикселей внутри одного изображения записываются подряд, никакая дополнительная информация не сохраняется, данные не сжимаются. Сколько Мбайтов нужно выделить для хранения всех изображений, полученных за сутки?</p>`
}

document.addEventListener ('DOMContentLoaded', function(){

	let container = document.getElementById ('change')
	
	for (let i = 0; i <= 5000; i++){
		let data = getData()
		let text = generateText(data)
		
		container.innerHTML += text
	}
})
