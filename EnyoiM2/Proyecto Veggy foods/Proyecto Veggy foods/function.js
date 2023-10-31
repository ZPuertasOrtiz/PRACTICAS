let profile = document.querySelector("#imageProfile");
profile.setAttribute("src", "Profileuser.png");

let botonApagado = document.querySelectorAll("i.bi.bi-circle");
let botonEncendido = document.querySelectorAll("i.bi.bi-circle-fill");
let colorDocumento = document.querySelector("link.tema");
let temaEstilo = colorDocumento.getAttribute('#href'); 


let botonRedInactivo = document.querySelector(".colorRed i.bi.bi-circle");
let botonRedActivo = document.querySelector(".colorRed i.bi.bi-circle-fill");
function colorRed() {
	let hojaEstilo = colorDocumento.getAttribute('href');
	switch (hojaEstilo) {
	case 'style.css':
	colorDocumento.setAttribute('href','styleRed.css');
	botonRedInactivo.style.display = "none";
	botonRedActivo.style.display = "block";
	break;
	case 'styleBlue.css':
	colorDocumento.setAttribute('href','styleRed.css');
	botonRedInactivo.style.display = "none";
	botonRedActivo.style.display = "block";
	break;
	case 'styleYellow.css':
	colorDocumento.setAttribute('href','styleRed.css');
	botonRedInactivo.style.display = "none";
	botonRedActivo.style.display = "block";
	break;
	default:
	colorDocumento.setAttribute('href', 'style.css');
	botonRedInactivo.style.display = "block";
	botonRedActivo.style.display = "none";
	}

	botonBlueInactivo.style.display = "block";
	botonBlueActivo.style.display = "none";
	botonYellowInactivo.style.display = "block";
	botonYellowActivo.style.display = "none";
}

let botonBlueInactivo = document.querySelector(".colorBlue i.bi.bi-circle");
let botonBlueActivo = document.querySelector(".colorBlue i.bi.bi-circle-fill");

function colorBlue() {

	let hojaEstilo = colorDocumento.getAttribute('href');
	switch (hojaEstilo) {
	case 'styleBlue.css':
	colorDocumento.setAttribute('href','styleBlue.css');
	botonBlueInactivo.style.display = "none";
	botonBlueActivo.style.display = "block";
	break;
	case 'styleRed.css':
	colorDocumento.setAttribute('href','styleBlue.css');
	botonBlueInactivo.style.display = "none";
	botonBlueActivo.style.display = "block";
	break;
	case 'styleYellow.css':
	colorDocumento.setAttribute('href','styleBlue.css');
	botonBlueInactivo.style.display = "none";
	botonBlueActivo.style.display = "block";
	default:
	colorDocumento.setAttribute('href', 'style.css');
	botonBlueInactivo.style.display = "block";
	botonBlueActivo.style.display = "none";
	}
	botonRedInactivo.style.display = "block";
	botonRedActivo.style.display = "none";
	botonYellowInactivo.style.display = "block";
	botonYellowActivo.style.display = "none";
}

let botonYellowInactivo = document.querySelector(".colorYellow i.bi.bi-circle");
let botonYellowActivo = document.querySelector(".colorYellow i.bi.bi-circle-fill");

function colorYellow() {
	let hojaEstilo = colorDocumento.getAttribute('href');
		switch (hojaEstilo) {
	case 'style.css':
	colorDocumento.setAttribute('href','styleYellow.css');
	botonYellowInactivo.style.display = "none";
	botonYellowActivo.style.display = "block";
	break;
	case 'styleRed.css':
	colorDocumento.setAttribute('href','styleYellow.css');
	botonYellowInactivo.style.display = "none";
	botonYellowActivo.style.display = "block";
	break;
	case 'styleBlue.css':
	colorDocumento.setAttribute('href','styleYellow.css');
	botonYellowInactivo.style.display = "none";
	botonYellowActivo.style.display = "block";
	default:
	colorDocumento.setAttribute('href', 'style.css');
	botonYellowInactivo.style.display = "block";
	botonYellowActivo.style.display = "none";
	}
	botonRedInactivo.style.display = "block";
	botonRedActivo.style.display = "none";
	botonBlueInactivo.style.display = "block";
	botonBlueActivo.style.display = "none";
}

document.querySelector(".colorYellow").addEventListener("click", colorYellow);


// Reserva

document.getElementById("reservaForm").addEventListener("submit", function(event) {
	event.preventDefault(); 
  
	// Captura los valores del formulario
	const nombre = document.getElementById("nombre").value;
	const fecha = document.getElementById("fecha").value;
	const hora = document.getElementById("hora").value;
	const personas = document.getElementById("personas").value;
  
	if (nombre && fecha && hora && personas) {
		
		const mensaje = `Reserva confirmada para ${nombre}. Fecha: ${fecha}, Hora: ${hora}, Número de personas: ${personas}.`;
		document.getElementById("popupContent").textContent = mensaje;
		document.getElementById("popup").style.display = "block";
	  } else {
		alert("Por favor, complete todos los campos.");
	}
});

document.getElementById("closePopup").addEventListener("click", function() {
document.getElementById("popup").style.display = "none";
});
  
