let rock=document.getElementById("rock");
let  paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");
let btnReset=document.getElementById("btnReset");
let user=document.getElementById("user");
let ordinateur=document.getElementById("ordinateur");
let scoreOrdinateur=document.getElementById("score-ordinateur")
let scoreUser=document.getElementById("score-User");
let chose=document.querySelector('.chose')
let userScore=0;
let computerScore=0;

/******* chose computer ******/
function choseComputer (){
    const chose=["rock","paper","scissor"];
    const randomChose=Math.floor(Math.random() * chose.length);
    return chose[randomChose];
}
console.log(choseComputer())
function jouer(userSelection,computerSection){
    chose.style.display='flex';
    user.src=`img/${userSelection}.jpg`;
    user.alt=userSelection;
    ordinateur.src=`img/${computerSection}.jpg`;
    ordinateur.alt=computerSection;
    if( userSelection === computerSection){
        alert("Egalité");
    }else if (
        (userSelection==="rock" && computerSection==="scissor") ||
        (userSelection==="paper" && computerSection==="rock") ||
        (userSelection==="scissor" && computerSection==="paper")
    ){
        userScore++;
    } else {
        computerScore++;
    }
    scoreUser.textContent=userScore;
    scoreOrdinateur.textContent=computerScore;

}

function resetGame(){
    
    chose.style.display='none';
    scoreUser.textContent=0;
    scoreOrdinateur.textContent=0;

}

rock.addEventListener('click', () => jouer('rock', choseComputer()));
paper.addEventListener('click', () => jouer('paper',choseComputer()));
scissor.addEventListener('click', () => jouer('scissor' , choseComputer()));
btnReset.addEventListener('click', resetGame);