// var player = document.getElementById('player');
// var computer = document.getElementById('computer');

// var player = document.getElementById("myBtn");
// var player = document.getElementById("myBtn1");
// var player = document.getElementById("myBtn2");

// player.addEventListener("click", myFunction);
// player.addEventListener("click", myFunction2);
// player.addEventListener("click", myFunction3);

// function myFunction() {
//     document.getElementById("first").style.display ='block';
//     document.getElementById("second").style.display ='none'
//     document.getElementById("third").style.display ='none'
// }
  
// function myFunction2() {
//     document.getElementById("second").style.display ='block'
//     document.getElementById("first").style.display ='none'
//     document.getElementById("third").style.display ='none'
// }
  
// function myFunction3() {
//     document.getElementById("third").style.display ='block'
//     document.getElementById("first").style.display ='none'
//     document.getElementById("second").style.display ='none'
// }
function playerSelection(param) {
    if (param.value === 'Rock') {
      document.getElementById("png").src = "/assets/css/image/rock.png";
      
    } else if (param.value === 'Paper') {
      document.getElementById("png").src = "/assets/css/image/paper.png";
      
    } else if (param.value === 'Scissor')  {
      document.getElementById("png").src = "/assets/css/image/scissor.png";
    }
    // console.log(param.value)

  }

//   var myPix = new Array("/assets/css/image/rock.png", "/assets/css/image/paper.png", "/assets/css/image/scissor.png");
function computerSelection(){
let x = Math.floor((Math.random() * 3) + 1);

document.getElementById("computer").innerHTML = x;
}

//   function computerSelection(){
//   var randomNum = Math.floor(Math.random() * myPix.length);
//   document.getElementById("myPicture").src = myPix[randomNum];

//   }
var text;

for (let i=0; i<5; i++){
    switch(playerSelection,computerSelection){
        case(playerSelection === computerSelection):
        text = "The Match is Tie"

    }

}
