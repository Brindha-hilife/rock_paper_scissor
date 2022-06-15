// To get the image
function playerSelection(param) {
    if (param.value === 'Rock') {
      document.getElementById("png").src = "assets/css/image/rock.png";
      
    } else if (param.value === 'Paper') {
      document.getElementById("png").src = "assets/css/image/paper.png";
      
    } else if (param.value === 'Scissor')  {
      document.getElementById("png").src = "assets/css/image/scissor.png";
    }
    // console.log(param.value)
    var myPix = new Array("assets/css/image/rock.png", "assets/css/image/paper.png", "assets/css/image/scissor.png");
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
  }

//     switch(playerSelection){
//         case("Rock" === 1) || ("Paper" === 2) || ("Scissor" === 3) :
//             text = "The Match is Tie";
//         case(playerSelection === "Rock" && computerSelection === 2)
//         || (playerSelection === "Paper" && computerSelection === 3)
//         || (playerSelection === "Scissor" && computerSelection === 1):
//             text = "Computer Won The Game";
//         case(playerSelection === "Paper" && computerSelection === 1) 
//         || (playerSelection === "Rock" && computerSelection === 3)
//         || (playerSelection === "Scissor" && computerSelection === 2):
//             text = "You Won The Game";
//             break;
//     }
    
//   }
// document.getElementById('result').innerHTML = text;

// Game Start
function game(){
	var playerScore = 0;
	var computerScore = 0;
	var moves = 0;


	function myGame() {
		var rockBtn = document.querySelector('.rock');
		var paperBtn = document.querySelector('.paper');
		var scissorBtn = document.querySelector('.scissor');
		var playerOptions = [rockBtn,paperBtn,scissorBtn];
		var computerOptions = ['rock','paper','scissors'];

		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				var movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5-moves}`;
				

				var choiceNumber = Math.floor(Math.random()*3);
				var computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 10 moves
				if(moves == 5){
					endgame(playerOptions,movesLeft);
				}
			})
		})
		
	}


	function winner(player,computer){
		var result = document.querySelector('.result');
		var playerScoreBoard = document.querySelector('.demo');
		var computerScoreBoard = document.querySelector('.demo1');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
    // var text;

    // switch(player,computer){
    //     case(player === computer):
    //       result.textContent = 'Tie';
    //       break;
    //     case(player == 'rock' && computer == 'paper'):
    //       text = 'Computer Won';
    //       computerScore++;
    //       computerScoreBoard.text = computerScore;
       
    // }
		if(player == computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock')
      {
        document.getElementById("png").src = "assets/css/image/rock.png";
			if(computer == 'paper'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
      document.getElementById("png").src = "assets/css/image/scissor.png";
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
      document.getElementById("png").src = "assets/css/image/paper.png";
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}


	function endgame(playerOptions,movesLeft){

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
	
		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

		chooseMove.innerText = 'Game Over!!' 
		movesLeft.style.display = 'none';

		switch(playerScore,computerScore){
      case(playerScore > computerScore):
      result.textContent = 'You Won The Game';
      break;
      case(playerScore < computerScore):
      result.textContent = 'You Lost The Game';
      break;
      case(playerScore == computerScore):
      result.textContent = 'Tie';
      break;
    }
	}
	myGame();
}
game();
