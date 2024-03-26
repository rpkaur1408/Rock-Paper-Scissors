let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options =["rock" , "paper" , "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}
const drawGame = () => {
   
    mssg.innerText="The Game was a Draw... Play again to Win!";
    mssg.style.backgroundColor = "#4CB5AE";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if (userWin){
        userscore++;
        userScorePara.innerText = userscore;
       
        mssg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
       
        mssg.innerText = `You Lose!! ${compChoice} beats ${userChoice}`;
        mssg.style.backgroundColor = "#D33F49";
    }
}
const playGame = (userChoice) => {    
    console.log("User choice = ",userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if ( userChoice === compChoice ){
        drawGame();
    }
    else{ 
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;

        }
        else if (userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice is clicked!!!",userChoice);
        playGame(userChoice);
    })
})