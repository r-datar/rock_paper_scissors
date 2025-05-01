// Implementing rock paper scissors

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

function getHumanChoice() {
    return prompt("Enter your choice: rock / paper / scissors ",)
}



function playGame() {
    let humanScore = 0, computerScore = 0
    let numberofGames = 5;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()
        console.log(`Human selected ${humanChoice} and Comp generated ${computerChoice}`)
    
        switch(humanChoice) {
            case 'paper' : if (computerChoice == 'scissors') {
                console.log('You lose! Scissors beat paper')
                console.log(`Scores: Human: ${humanScore} and Computer: ${++computerScore}`) ;
                
                }
                else if (computerChoice == 'rock') {
                    console.log('You win! Paper beats rock')
                    console.log(`Scores: Human: ${++humanScore} and Computer: ${computerScore}`) ;
                }
                else if (computerChoice == 'paper') {
                    console.log('It is a tie!')
                    console.log(`Scores: Human: ${humanScore} and Computer: ${computerScore}`) ;   
                }
            break;
            
            case 'scissors' : if (computerChoice == 'rock') {
                console.log('You lose! Rock beats scissors')
                console.log(`Scores: Human: ${humanScore} and Computer: ${++computerScore}`) ;
                
                }
                else if (computerChoice == 'paper') {
                    console.log('You win! Scissors beats paper')
                    console.log(`Scores: Human: ${++humanScore} and Computer: ${computerScore}`) ;
                }
                else if (computerChoice == 'scissors') {
                    console.log('It is a tie!')
                    console.log(`Scores: Human: ${humanScore} and Computer: ${computerScore}`) ;   
                }
            break;
            
            case 'rock' : if (computerChoice == 'paper') {
                console.log('You lose! Paper beats rock')
                console.log(`Scores: Human: ${humanScore} and Computer: ${++computerScore}`) ;
                
                }
                else if (computerChoice == 'scissors') {
                    console.log('You win! Rock beats scissors')
                    console.log(`Scores: Human: ${++humanScore} and Computer: ${computerScore}`) ;
                }
                else if (computerChoice == 'rock') {
                    console.log('It is a tie!')
                    console.log(`Scores: Human: ${humanScore} and Computer: ${computerScore}`) ;   
                }
            break;

        }
    }

    for(let i = 0; i < numberofGames; i++) {
    
        
        const computerSelection = getComputerChoice()

        const humanSelection = getHumanChoice()

        playRound(humanSelection,computerSelection)

    }
    


}

playGame()



