let playGame=confirm("Shall we start the game");
if(playGame){
    let playerChoice=prompt("Please enter rock,paper or scissor");
    if(playerChoice){
        let playerOne=playerChoice.trim().toLowerCase();
        if(playerOne==="rock"||playerOne==="scissors"||playerOne==="paper"){
            let computerChoice=Math.floor(Math.random()*3+1);
            let computer=computerChoice===1?"rock"
                :computerChoice===2?"paper"
                :"scissors";
            let result = 
                playerOne === computer 
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper" 
                ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `Player: ${playerOne}\nComputer: ${computer}\nPlayer wins!`;
            
            alert(result);

            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing!");
        }
        else{
            alert("You didn't enter rock, paper, or scissors.");
        }
    }
    else{
        alert("You have changed you mind. May be next time.")
    }
}
else {
    alert("Ok, maybe next time!");
}