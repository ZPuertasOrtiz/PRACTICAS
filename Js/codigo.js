// 1 es piedra,2 es papel, 3 es tijera
let jugador = 0;
let pc = Math.ceil(Math.random()*3);
let ganadas =0;
let perdidas = 0;
let resta = 0;

//ASIGNAR VALOR A LA JUGADA
function election(jugada){
  let resultado=""
  switch (jugada){
    case 1:
      resultado ="✊";
    break;
    case 2:
      resultado ="✋";
    break;
    case 3:
      resultado ="✌";
    break;
    default:
      resultado = "Inserte válido"
  }
  return resultado;
}
//COMBATE
function combate (user1,user2){
  let mensaje = "";
  resta = jugador - pc;
  resta == 0? mensaje= "It's a tie":
  resta == 1 || resta == -2 ? (mensaje = "You won!", ganadas++):(mensaje = "You Lost", perdidas++);
  return mensaje;
}
//LOOP Para jugar tres veces:
while (ganadas <3 && perdidas <3){
  jugador = parseInt(prompt("Elige: 1 es piedra, 2 es papel, 3 es tijera"));
  alert ("PC elige: " + election(pc));
  alert ("tú eliges:" + election(jugador));
  alert (combate(jugador, pc));
  
}

alert ("Ganaste " + ganadas + " veces. Perdiste " + perdidas + " veces.")