function ageInDays() {
	var yourBirthday = prompt('Tahun berapa anda lahir?');
	var ageInDayss = (2020 - yourBirthday) * 365;
	// Create new element in challenge.html
	var newElementH1 = document.createElement('h1');
	// create ansswer text
	var textAnswer = document.createTextNode('You are '+ageInDayss+' Days Old.');
	// Create id for new element in challenge.html
	newElementH1.setAttribute('id', 'ageInDays');
	newElementH1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(newElementH1);

}

function reset(){
	document.getElementById('ageInDays').remove();
}

function generateCat(){
	var imgElemant = document.createElement('img');
	imgElemant.setAttribute('id', 'imgCat');
	var divElement = document.getElementById('flex-gen-cat');
	imgElemant.src='https://cdn2.thecatapi.com/images/cuo.gif';
	divElement.appendChild(imgElemant);
}

function delete_img(){
	document.getElementById('imgCat').remove();
}

function rpsGame(yourChoice){
	console.log(yourChoice);
	var humanChoice, botChoice;

	humanChoice = yourChoice.id;
	botChoice=numberToChoice(randToRpsInt());

	console.log('Computer choice : '+botChoice);

	results = decideWinner(humanChoice,botChoice);
	console.log('The result is : '+results);

	message = finalResult(results);
	console.log(message);

	rpsFrontEnd(humanChoice, botChoice, message);



}

function randToRpsInt(){
	return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
	return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
	var rpsDatabase = {
		'rock' : { 'scissors': 1, 'rock' : 0.5, 'paper' : 0},
		'paper' : { 'scissors': 0, 'paper' : 0.5, 'rock' : 1},
		'scissors' : { 'scissors': 0.5, 'rock' : 0, 'paper' : 1}

	}

	var yourScore = rpsDatabase[yourChoice][computerChoice];
	var computerScore = rpsDatabase[computerChoice][yourChoice];

	return [yourScore,computerScore];
}

function finalResult([yourScore, computerScore]){
	if (yourScore === 0) {
		return {'message': 'You Lost!', 'color': 'red'};
	}else if(yourScore === 0.5 ){
		return {'message': 'You Tied!', 'color': 'yellow'};
	}else{
		return {'message': 'You Win!', 'color': 'green'};
	}
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
	var imageDatabase = {
		'rock' : document.getElementById('rock').src,
		'paper' : document.getElementById('paper').src,
		'scissors' : document.getElementById('scissors').src
	}
	// console.log('Halo : '+humanImageChoice);

	// Let's remove all the image
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	humanDiv = document.createElement('div');
	botDiv = document.createElement('div');
	messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150px widht=150px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
	botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150px widht=150px style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
	messageDiv.innerHTML = "<h2 style='color:"+finalMessage['color']+" ; font-size: 60px'; padding: 30px>"+ finalMessage['message'] +"</h2>"

	document.getElementById('flex-box-rps-div').appendChild(humanDiv);
	document.getElementById('flex-box-rps-div').appendChild(messageDiv);
	document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

var all_buttons = document.getElementsByTagName('button');

var coppyAllButton = [];
for(let i=0; i < all_buttons.length; i++){
	coppyAllButton.push(all_buttons[i].classList[1]);
}

console.log(coppyAllButton);

function buttonColorChange(colorThingy){
	if (colorThingy.value === 'red') {
		buttonsRed()
	} else if(colorThingy.value === 'green'){
		buttonsGreen()
	} else if(colorThingy.value === 'reset'){
		buttonsReset();
	} else if(colorThingy.value == 'random'){
		buttonsRandom();
	}
}

function buttonsRed(){
	for(let x=0; x<all_buttons.length; x++){
		all_buttons[x].classList.remove(all_buttons[x].classList[1]);
		all_buttons[x].classList.add('btn-danger');
	}
}

function buttonsGreen(){
	for(let x=0; x<all_buttons.length; x++){
		all_buttons[x].classList.remove(all_buttons[x].classList[1]);
		all_buttons[x].classList.add('btn-success');
	}
}

function buttonsReset(){
	for(let x=0; x<all_buttons.length; x++){
		// for(let i=0; i<all_buttons.length; i++){
		// 	all_buttons[x].classList.remove(all_buttons[])
		// }
		let vvv=coppyAllButton[x];
		all_buttons[x].classList.remove(all_buttons[x].classList[1]);
		all_buttons[x].classList.add(vvv.toString());
	}
}

function buttonsRandom(){
	var choices = ['btn-primary','btn-success','btn-danger','btn-warning'];
	for(let i=0; i<all_buttons.length; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(choices[Math.floor(Math.random()*4)]);
	}
}

// Challenge 5 : Blackjack
let blackjackGame = {
	'you' : {'scoreSpan' : '#your-blackjack-result', 'div' : '#your-box', 'score' : 0},
	'dealer' : {'scoreSpan' : '#dealer-blackjack-result', 'div' : '#dealer-box', 'score' : 0},
	'cards' : ['2','3','4','5','6','7','8','9','10','A','K','J','Q'],
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
var hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
	let card = randomCard();
	showCard(card,YOU);
}

function randomCard(){
	let randomIndex = Math.floor(Math.random() * 13);
	return blackjackGame['cards'][randomIndex]; 
}

function showCard(card,activePlayer){
	// alert('Ouch, you clicked me!');
	let cardImage = document.createElement('img');
	cardImage.src=`static/images/${card}.png`;
	document.querySelector(activePlayer['div']).appendChild(cardImage);
	hitSound.play();
}

function blackjackDeal(){
	let yourImage = document.querySelector('#your-box').querySelectorAll('img');
	let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
	
	for(let i = 0; i<yourImage.length; i++){
		yourImage[i].remove();
	}

	for(let i = 0; i<dealerImage.length; i++){
		dealerImage[i].remove();
	}
}







