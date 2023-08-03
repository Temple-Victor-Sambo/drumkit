
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimattion(buttonInnerHTML);

        document.addEventListener("keypress", function (event) {
          makeSound(event.key)
          
          buttonAnimattion(event.key)
        })

    });


        function makeSound(key){
            switch (key) {
                case "S":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;
            
                    case "O":
                        var tom1 = new Audio('sounds/tom-1.mp3');
                        tom1.play();
                        break;
    
                    case "T":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;
    
                    case "R":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                   tom3.play();
                    break;
    
                    case "F":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;
    
                    case "K":
                        var kick = new Audio('sounds/kick-bass.mp3');
                        kick.play();
                        break;
    
                        case "C":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;
    
    
                default: console.log(buttonInnerHTML);
                    
            }
        }



}

function buttonAnimattion(curentKey){
  var activeButton =  document.querySelector("." + curentKey);
    activeButton.classList.add("pressed");
}




