//PLAYER PET SELECTION FUNCTION

const playerCandidateSelection = ()=> { 

    let spanPlayerCandidate = document.getElementById("player_candidate");
    let sectionPlayerCandidate = document.getElementById("candidate-select");
    sectionPlayerCandidate.style.display = "none"
    sectionAttackSelection.style.display ="block"
   

    document.getElementById("Pao").checked ? spanPlayerCandidate.innerHTML="Zulo":
    document.getElementById("Zule").checked ? spanPlayerCandidate.innerHTML="Zule":
    document.getElementById("Angie").checked ? spanPlayerCandidate.innerHTML="Zuli":
    alert("Choose a candidate"); 

    spanPlayerLifes.innerHTML=playerLifes;
    spanEnemyLifes.innerHTML=enemyLifes;

    randomEnemy();

} 

//RANDOM NUMBER SELECTOR FUNCTION
const randomNumber = (min,max)=> Math.ceil(Math.random()*(max-min+1));

//RANDOM ENEMY SELECTOR FUNCTION
const randomEnemy = () => {
    let randomEnemy = randomNumber(1,3);
    let spanEnemyCandidate = document.getElementById("enemy_candidate");

    randomEnemy == 1? spanEnemyCandidate.innerHTML = "JS":
    randomEnemy == 2? spanEnemyCandidate.innerHTML = "Python":
    spanEnemyCandidate.innerHTML = "Binarios";
}

//ATTACK FUNTIONS
const fireAttack = ()=> {
    playerAttack = "🔥";
    attackNumber =1;
    enemyRandomAttack();
} 

const waterAttack = ()=> {
    playerAttack = "💧";
    attackNumber =2;
    enemyRandomAttack();
}

const earthAttack = ()=> {
    playerAttack = "🌱";
    attackNumber =3;
    enemyRandomAttack();
} 

const enemyRandomAttack = ()=>{
    randomAttack = randomNumber(1,3);
    randomAttack == 1? enemyAttack="🔥":
    randomAttack == 2? enemyAttack = "💧":
    enemyAttack = "🌱";

    combate();

}

//MOMENTO DE PELEAR
function combate (user1,user2){
    
    let resta = attackNumber - randomAttack;
  
    resta == 0? createMessage("It's a tie"):
    resta == 1 || resta == -2 ? (enemyLifes--,spanEnemyLifes.innerHTML=enemyLifes,createMessage("You won!")):
    (playerLifes--,spanPlayerLifes.innerHTML=playerLifes,createMessage("You Lost")); 

    checkLifes();

    
} 

//REVISANDO LAS VIDAS

 const checkLifes =()=>{
    if (playerLifes ==0) createFinalMessage("DEFEAT😢");
    if (enemyLifes ==0) createFinalMessage("🎊🎊YOU'RE THE WINNER🎊🎊")
 }

//CREANDO EL MENSAJE

const createMessage = (result)=>{
   let sectionMessage =document.getElementById("messages")

   let pharagraph = document.createElement('p');
   pharagraph.innerHTML = `Your candidate attacked with ${playerAttack}, and the enemy attack was ${enemyAttack}.${result} `

   sectionMessage.appendChild(pharagraph);
}

const createFinalMessage = (finalResult)=>{
    let sectionMessage =document.getElementById("messages")
 
    let pharagraph = document.createElement('p');
    pharagraph.innerHTML = `${finalResult}`
 
    sectionMessage.appendChild(pharagraph);

        let buttonFire = document.getElementById("button_fire");
    buttonFire.disabled = true;

    let buttonWater = document.getElementById("button_water" );
    buttonWater.disabled = true;

    let buttonEarth = document.getElementById("button_earth");
    buttonEarth.disabled = true;
    }

 const restartGame = () =>{
    location.reload();
 }


let buttonCandidate = document.getElementById("button_candidate");
buttonCandidate.addEventListener("click", playerCandidateSelection );

//Botones de Acción del juego
let playerAttack;
let enemyAttack;
let attackNumber;
let randomAttack;
let playerLifes =3;
let enemyLifes =3;
let spanPlayerLifes = document.getElementById("player_lifes");
let spanEnemyLifes = document.getElementById("enemy_lifes");

let sectionAttackSelection =document.getElementById("attack-selection");
sectionAttackSelection.style.display ="none"

let buttonFire = document.getElementById("button_fire");
buttonFire.addEventListener("click",fireAttack);

let buttonWater = document.getElementById("button_water" );
buttonWater.addEventListener("click",waterAttack);

let buttonEarth = document.getElementById("button_earth");
buttonEarth.addEventListener("click",earthAttack);

let buttonRestart = document.getElementById("button_restart");
buttonRestart.addEventListener("click", restartGame)




// window.addEventListener("load", startGame) (Otra forma, mejor usar defer)