// Implementing rock paper scissors

// Function to randomly generate rock / paper / scissors
function getComputerChoice ()  {
    let randomNumber = Math.floor(Math.random()* 100) + 1;
    
    if (randomNumber % 2 == 0) {
        return('rock')
    }
    else if (randomNumber % 3 == 0) {
        return('paper')
    }
    else {
        return('scissors')
    }
}

// Function to declare the winner
function finalMessage() {
    // Allow game till any player reaches 5 points
    if (humanScore == 5 || computerScore == 5) {
        const final_message = document.createElement("div");
        final_message.className = "final";

        if (humanScore > computerScore) {
            final_message.innerText = 'You win the game! Refresh page to restart';
        } 
        else if (computerScore > humanScore) {
            final_message.innerText = 'Computer wins the game! Refresh page to restart';
        }
        else {
            final_message.innerText = 'It is a tie! Refresh page to restart';
        }
        const result_div = document.querySelector(".result");
        result_div.appendChild(final_message);

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
    

    
}    
    // function to play a round 
    function playRound(humanChoice, computerChoice) {
        
            
            const result_div = document.querySelector(".result");
            
            const separator = document.createElement("p");
            separator.className = "separator";
            result_div.appendChild(separator);

            const choice_message = document.createElement("div");
            choice_message.className = "choice";
            choice_message.innerText = `Human selected ${humanChoice} and computer generated ${computerChoice}`  ;
            result_div.appendChild(choice_message);

            const win_message = document.createElement("div");
            win_message.className = "win";
            
            const score_message = document.createElement("div");
            score_message.className = "score";

            switch(humanChoice) {
                case 'paper' : if (computerChoice == 'scissors') {
                    win_message.innerText = 'You lose this round! Scissors beat paper';
                    score_message.innerText = `Scores: Human: ${humanScore} and Computer: ${++computerScore}`;
                    
                    }
                    else if (computerChoice == 'rock') {
                        win_message.innerText = 'You win this round! Paper beats rock';
                        score_message.innerText = `Scores: Human: ${++humanScore} and Computer: ${computerScore}`;
                    }
                    else if (computerChoice == 'paper') {
                        win_message.innerText = 'It is a tie!';
                        score_message.innerText = `Scores: Human: ${humanScore} and Computer: ${computerScore}`;   
                    }
                break;
                
                case 'scissors' : if (computerChoice == 'rock') {
                    win_message.innerText = 'You lose this round! Rock beats scissors';
                    score_message.innerText = `Scores: Human: ${humanScore} and Computer: ${++computerScore}`;
                    
                    }
                    else if (computerChoice == 'paper') {
                        win_message.innerText = 'You win this round! Scissors beats paper';
                        score_message.innerText = `Scores: Human: ${++humanScore} and Computer: ${computerScore}`;
                    }
                    else if (computerChoice == 'scissors') {
                        win_message.innerText = 'It is a tie!';
                        score_message.innerText = `Scores: Human: ${humanScore} and Computer: ${computerScore}`;   
                    }
                break;
                
                case 'rock' : if (computerChoice == 'paper') {
                    win_message.innerText = 'You lose this round! Paper beats rock';
                    score_message.innerText = `Scores: Human: ${humanScore} and Computer: ${++computerScore}`;
                    
                    }
                    else if (computerChoice == 'scissors') {
                        win_message.innerText = 'You win this round! Rock beats scissors';
                        score_message.innerText = `Scores: Human: ${++humanScore} and Computer: ${computerScore}`;
                    }
                    else if (computerChoice == 'rock') {
                        win_message.innerText = 'It is a tie!';
                        score_message.innerText = `Scores: Human: ${humanScore} and Computer: ${computerScore}`;   
                    }
                break;

            }
            result_div.appendChild(win_message);
            result_div.appendChild(score_message);  
    }


let humanScore = 0, computerScore = 0
let btn = document.querySelector('ul');

btn.addEventListener('click', function (event) {
  
    let humanSelection = event.target.id;

    // Weed out clicks around the button
    if (humanSelection !== "") {

        const computerSelection = getComputerChoice()

        playRound(humanSelection,computerSelection)


        finalMessage();
    }
        
});



