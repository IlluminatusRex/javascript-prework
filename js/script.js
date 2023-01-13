function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function playGame(playerInput){
	clearMessages();
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	console.log('Gracz wpisał: ' + playerInput);

	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);

	//kamień = 1; papier=2; nożyce=3
	/*
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
	*/
	function getMoveName(argMoveId){
		if(argMoveId == 1){
		return 'kamień';
		}else if(argMoveId == 2){
			return 'papier'
		}else if(argMoveId == 3) {
			return 'nożyce'
		}else{
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
		}
	}

	function displayResult(argComputerMove, argPlayerMove){
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	
		if(( argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')|| (argComputerMove == 'papier' && argPlayerMove == 'nożyce')){
			return printMessage('Ty wygrywasz!');
		}else if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
			return printMessage('Remis!');
		}else {
			return printMessage('Tym razem przegrywasz');
		}
	}
	
	displayResult(computerMove, playerMove);
}



document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
  });
