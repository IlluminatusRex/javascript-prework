function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';
let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
//kamień = 1; papier=2; nożyce=3

if(randomNumber == 1){
	computerMove = 'kamień'
}else if(randomNumber == 2){
	computerMove = 'papier'
} else{
	computerMove = 'nożyce'
}

if(playerInput == 1){
	playerMove = 'kamień'
}else if(playerInput == 2){
	playerMove = 'papier'
}else if(playerInput == 3) {
	playerMove = 'nożyce'
}else {
	printMessage('Podałeś błędną liczbę. Spróbuj jeszcze raz.');
	playerMove = 'nieznany ruch';
}

if(playerMove != 'nieznany ruch'){
	if( (computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'nożyce' && playerMove == 'kamień')|| (computerMove == 'papier' && playerMove == 'nożyce')){
		printMessage('Ty wygrywasz!');
	}else if ((computerMove == 'kamień' && playerMove == 'kamień') || (computerMove == 'papier' && playerMove == 'papier') || (computerMove == 'nożyce' && playerMove == 'nożyce')) {
		printMessage('Remis!');
	}else {
		printMessage('Przegrałeś!');
	}
	printMessage('Zagrałem ' + computerMove + '! Twój ruch to '+ playerMove +'!');
}