{
		function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function playGame(playerInput){
		function clearMessages(){
			document.getElementById('messages').innerHTML = '';
		}
		clearMessages();
		const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1)),
			  playerMove = getMoveName(playerInput);

		function getMoveName(argMoveId){
			if(argMoveId == 1){
			return 'kamień';
			}else if(argMoveId == 2){
				return 'papier'
			}else {
				return 'nożyce'
			}
		}

		function displayResult(argComputerMove, argPlayerMove){
			printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		
			if(( argComputerMove == 'kamień' && argPlayerMove == 'papier')||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')||(argComputerMove == 'papier' && argPlayerMove == 'nożyce')){
				return printMessage('Ty wygrywasz!');
			}else if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień')||(argComputerMove == 'papier' && argPlayerMove == 'papier')||(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
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

}