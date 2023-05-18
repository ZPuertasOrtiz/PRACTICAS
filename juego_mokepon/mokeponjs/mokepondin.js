//PLAYER PET SELECTION FUNCTION
const playerPetSelection = ()=> { 
    let spanPlayerPet = document.getElementById("player_pet");
   

    document.getElementById("hipodoge").checked ? spanPlayerPet.innerHTML="Hipodoge":
    document.getElementById("capipepo").checked ? spanPlayerPet.innerHTML="Capipero":
    document.getElementById("ratigueya").checked ? spanPlayerPet.innerHTML="Ratigueya":
    alert("Choose a pet"); 

    randomEnemy();

} 

//RANDOM NUMBER SELECTOR FUNCTION
const randomNumber = (min,max)=> Math.ceil(Math.random()*(max-min+1));

//RANDOM ENEMY SELECTOR FUNCTION
const randomEnemy = () => {
    let randomAttack = randomNumber(1,3);
    let spanEnemyPet = document.getElementById("enemy_pet");

    randomAttack == 1? spanEnemyPet.innerHTML = "Hipodoge":
    randomAttack == 2? spanEnemyPet.innerHTML = "Capipepo":
    spanEnemyPet.innerHTML = "Ratigueya";
}

    


let buttonPet = document.getElementById("button_pet");
buttonPet.addEventListener("click", playerPetSelection ) 

// window.addEventListener("load", startGame) (Otra forma, mejor usar defer)