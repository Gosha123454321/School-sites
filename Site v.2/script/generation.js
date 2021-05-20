//Генерация текстов для задач
//===========================

//Первый тип
//==========

let getTextFirstType = (dataFirstType) => {
	return `
	<div class="task">
		<p>Все ${dataFirstType.length}-буквенные слова, составленные из букв ${dataFirstType.text}записаны в алфавитном порядке и пронумерованы. Вот начало списка:</p>
		${dataFirstType.examples}
		<p>……</p>
		<p>Запишите слово, которое стоит на ${dataFirstType.placeWord}-м месте от начала списка.</p>
		<div class="bar"></div>
		Ответ:
	</div>
	`
}

//Второй тип
//==========

let getTextSecondType = (dataSecondType) => {
	return `
	<div class="task">
		<p>Все ${dataSecondType.length}-буквенные слова, составленные из ${dataSecondType.count} букв ${dataSecondType.text}записаны в алфавитном порядке.
		Вот начало списка:
		${dataSecondType.examples}
		……
		На каком месте от начала списка стоит слово ${dataSecondType.quest}? 
		</p>
		<div class="bar"></div>
		Ответ:
	</div>
	`
}

//Третий тип
//==========

let getTextThirdType = (dataThirdType) => {
	return `
	<div class="col s12 m6 l6 xl4">
		<div class="task">
			<p>Сколько слов длины ${dataThirdType.length}, начинающихся с ${dataThirdType.sound} буквы, можно составить из букв ${dataThirdType.stringThird}? Каждая буква может входить в слово несколько раз. Слова не обязательно должны быть осмысленными словами русского языка.
			</p>
			<div class="bar"></div>
			Ответ:
		</div>
	</div>
	`
}
