import {typeList} from "./data.js"

const containerCard = document.querySelector('.row');
const selectEl = document.getElementById("type-icon");
console.log(selectEl.value)

let cardEl;

typeList.forEach (function (element) {

	cardEl = generateCard(element);
	
	containerCard.append (cardEl);

	if (selectEl.value === "animal") {
		console.log(this)
	}
});

function generateCard (type) {
	const col = document.createElement('div');
	col.classList.add('col');
	col.dataset.typeCard = `${type.type}`
	
	const card = document.createElement('div');
	card.classList.add('card');
	card.style.color = (`${type.color}`)
	card.innerHTML = `<i class="fa-solid ${type.prefix}${type.name}"></i>
						<div>${type.name}</div>`
	
	
	col.append(card);

	return col
};
