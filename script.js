const parent = document.querySelector('.parent');
const btn = document.querySelector('.btn-p');
const btnRetour = document.querySelector('.btn-retour');
const svgContainer = document.querySelector('.svg-container');
const h1 = document.querySelector('.final-h1');
const final = document.querySelector('.final-parent');
const vermicellesDiv = document.querySelector('.vermicelles-div');
const riceDiv = document.querySelector('.rice-div');
const friesDiv = document.querySelector('.fries-div');
const whateverDiv = document.querySelector('.whatever-div');

const vermicelleArr = ['PAD THAÏ', 'NOUILLES TERIYAKI', 'NOUILLES PANANG', 'MIEL ET AIL'];
const riceArr = ['GÉNÉRAL TAO', 'GÉNÉRAL K.O.', 'RIZ FRIT', 'BOEUF À L’ORANGE', 'SAUTÉ AUX ARACHIDES', 'SAUTÉ THAÏ', 'CURRY ROUGE', 'CURRY JAUNE'];
const fritesArr = ['POUTINE TAO', 'POUTINE K.O.', 'POUTINE CHOU-FLEUR', 'POUTINE BOEUF THAI'];
const allArr = ['GÉNÉRAL TAO', 'RIZ FRIT', 'PAD THAÏ', 'BOEUF À L’ORANGE', 'SAUTÉ AUX ARACHIDES', 'SAUTÉ THAÏ', 'NOUILLES TERIYAKI', 'CHOP SUEY', 'CURRY ROUGE', 'CURRY JAUNE', 'NOUILLES PANANG', 'SALADE TAO', 'MIEL ET AIL', 'GÉNÉRAL K.O.', 'POUTINE TAO', 'POUTINE K.O.', 'POUTINE CHOU-FLEUR', 'POUTINE BOEUF THAI'];

const vermicelle = () => {
	svgContainer.style.display = 'none';
	final.style.display = 'flex';
	const randomNumber = Math.floor(Math.random() * vermicelleArr.length);
	switch (randomNumber) {
		case 0:
			h1.innerHTML = vermicelleArr[0];
			break;
		case 1:
			h1.innerHTML = vermicelleArr[1];
			break;
		case 2:
			h1.innerHTML = vermicelleArr[2];
			break;
		case 3:
			h1.innerHTML = vermicelleArr[3];
			break;
	}
};

const rice = () => {
	svgContainer.style.display = 'none';
	final.style.display = 'flex';
	const randomNumber = Math.floor(Math.random() * riceArr.length);
	switch (randomNumber) {
		case 0:
			h1.innerHTML = riceArr[0];
			break;
		case 1:
			h1.innerHTML = riceArr[1];
			break;
		case 2:
			h1.innerHTML = riceArr[2];
			break;
		case 3:
			h1.innerHTML = riceArr[3];
			break;
		case 4:
			h1.innerHTML = riceArr[4];
			break;
		case 5:
			h1.innerHTML = riceArr[5];
			break;
		case 6:
			h1.innerHTML = riceArr[6];
			break;
		case 7:
			h1.innerHTML = riceArr[7];
			break;
	}
};

const fries = () => {
	svgContainer.style.display = 'none';
	final.style.display = 'flex';
	const randomNumber = Math.floor(Math.random() * fritesArr.length);
	switch (randomNumber) {
		case 0:
			h1.innerHTML = fritesArr[0];
			break;
		case 1:
			h1.innerHTML = fritesArr[1];
			break;
		case 2:
			h1.innerHTML = fritesArr[2];
			break;
		case 3:
			h1.innerHTML = fritesArr[3];
			break;
	}
};

const all = () => {
	svgContainer.style.display = 'none';
	final.style.display = 'flex';
	const randomNumber = Math.floor(Math.random() * allArr.length);
	switch (randomNumber) {
		case 0:
			h1.innerHTML = allArr[0];
			break;
		case 1:
			h1.innerHTML = allArr[1];
			break;
		case 2:
			h1.innerHTML = allArr[2];
			break;
		case 3:
			h1.innerHTML = allArr[3];
			break;
		case 4:
			h1.innerHTML = allArr[4];
			break;
		case 5:
			h1.innerHTML = allArr[5];
			break;
		case 6:
			h1.innerHTML = allArr[6];
			break;
		case 7:
			h1.innerHTML = allArr[7];
			break;
		case 8:
			h1.innerHTML = allArr[8];
			break;
		case 9:
			h1.innerHTML = allArr[9];
			break;
		case 10:
			h1.innerHTML = allArr[10];
			break;
		case 11:
			h1.innerHTML = allArr[11];
			break;
		case 12:
			h1.innerHTML = allArr[12];
			break;
		case 13:
			h1.innerHTML = allArr[13];
			break;
		case 14:
			h1.innerHTML = allArr[14];
			break;
		case 15:
			h1.innerHTML = allArr[15];
			break;
		case 16:
			h1.innerHTML = allArr[16];
			break;
		case 17:
			h1.innerHTML = allArr[17];
			break;
	}
};

// Event Listeners
btn.addEventListener('click', () => {
	parent.style.display = 'none';
	svgContainer.style.display = 'flex';
});

vermicellesDiv.addEventListener('click', vermicelle);
riceDiv.addEventListener('click', rice);
friesDiv.addEventListener('click', fries);
whateverDiv.addEventListener('click', all);

btnRetour.addEventListener('click', () => {
	final.style.display = 'none';
	parent.style.display = 'flex';
});