let nombre = prompt("Cuál es tu nombre?")
while (nombre.length < 3) {
  nombre = prompt("Demasiado corto. Escribe tu real nombre");
}

let edad = parseFloat(prompt("Cual es tu edad?"))
while (edad == null || /\D/.test(edad) || edad == "") {
  edad = prompt("Ingrese un número VÁLIDO: ");
};

let num = edad;
let bottomBuy = document.querySelectorAll(".bottomBuy");

if (num < 18) {
  alert("Lo siento, solo los mayores de edad pueden comprar tickets.");
  bottomBuy.forEach(element => {
    element.style.display = "none";
  });
  
} else {
  alert ("Hola " + nombre + ", te interesaría adquirir tickects?");
}

const span = document.querySelector("#welcome");
let i = 0;

let tickets = {
  "Heaven Stadium": 2,
  "Hells Stadium": 2,
  "Earth Stadium": 2,
  "Las Vegas": 1,
}

function getTickets(evento) {
  if (tickets[evento]>=1) {
    swal("Sold", "You have tickets to the " + evento, "success")
    tickets[evento]--;
    
  } else if (tickets[evento]==0) {
    disableSoldOutButtons(evento);
    swal('Lo sentimos...','Los tickets para ' + evento + ' se agotaron','warining');
  }
}

function disableSoldOutButtons() {
  for (let evento in tickets) {
      let button = document.getElementById(evento.replace(/\s+/g, ''));
      if (tickets[evento] === 0) {
          button.disabled = true;
          button.textContent = "AGOTADOS";
          button.style.backgroundColor = "red";
      }
     }
   }

