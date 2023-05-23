//PLAYER PET SELECTION FUNCTION

const playerCandidateSelection = ()=> { 
    let spanPlayerCandidate = document.getElementById("player_candidate");
   

    document.getElementById("Pao").checked ? spanPlayerCandidate.innerHTML="Zulo":
    document.getElementById("Zule").checked ? spanPlayerCandidate.innerHTML="Zule":
    document.getElementById("Angie").checked ? spanPlayerCandidate.innerHTML="Zuli":
    alert("Choose a candidate"); 

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

function combate (user1,user2){
    let spanPlayerLifes = document.getElementById("player_lifes");
    let spanEnemyLifes = document.getElementById("enemy_lifes");

    let resta = attackNumber - randomAttack;
    console.log(resta)
    resta == 0? message = "It's a tie":
    resta == 1 || resta == -2 ? (message = "You won!", enemyLifes--, spanEnemyLifes.innerHTML=enemyLifes):(message = "You Lost",playerLifes--, spanPlayerLifes.innerHTML=playerLifes);

    createMessage();
} 
 

//CREANDO EL MENSAJE

const createMessage = ()=>{
   let sectionMessage =document.getElementById("messages")

   let pharagraph = document.createElement('p');
   pharagraph.innerHTML = `Your candidate attacked with ${playerAttack}, and the enemy attack was ${enemyAttack}.${message} `

   sectionMessage.appendChild(pharagraph);
}

 


let buttonCandidate = document.getElementById("button_candidate");
buttonCandidate.addEventListener("click", playerCandidateSelection );

//Botones de Acción del juego
let playerAttack;
let enemyAttack;
let attackNumber;
let message="";
let randomAttack;
let playerLifes =3;
let enemyLifes =3;

let buttonFire = document.getElementById("button_fire");
buttonFire.addEventListener("click",fireAttack);

let buttonWater = document.getElementById("button_water" );
buttonWater.addEventListener("click",waterAttack);

let buttonEarth = document.getElementById("button_earth");
buttonEarth.addEventListener("click",earthAttack);




// window.addEventListener("load", startGame) (Otra forma, mejor usar defer)