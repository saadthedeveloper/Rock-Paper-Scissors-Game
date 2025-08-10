choices = document.querySelectorAll(".choice");
uScore = document.querySelector("#user-score");
cScore = document.querySelector("#computer-score");
messageBox = document.querySelector("#message-container");

let userScore = 0;
let computerScore = 0;
let userWin = true;

function getComputerChoice(){
     let choices = ["rock", "paper", "scissors"];
     randomNumber = Math.floor(Math.random() * 3);
     return(choices[randomNumber]);

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    console.log(userChoice);

    let computerChoice = getComputerChoice();
    if(computerChoice === userChoice)
        {
            messageBox.innerText = `It's A Draw\n\nComputer Chose ${computerChoice}`;
    }
    else if(computerChoice === "rock" && userChoice === "scissors")
    {
        userWin = false;
        computerScore++;
        messageBox.innerText = `You Lose!\n\nComputer Chose ${computerChoice}`;
    }
    else if(computerChoice === "paper" && userChoice === "rock")
        {
            userWin = false;
            computerScore++;
            messageBox.innerText = `You Lose!\n\nComputer Chose ${computerChoice}`;
        }
        else if(computerChoice === "scissors" && userChoice === "paper")
            {
                userWin = false;
                computerScore++;
                messageBox.innerText = `You Lose!\n\nComputer Chose ${computerChoice}`;
            }
            else
                {
                    userWin = true;
                    userScore++;
                    messageBox.innerText = `You Win!\n\nComputer Chose ${computerChoice}`;
    }
    cScore.innerText = computerScore;
    uScore.innerText = userScore;
    
})

});



