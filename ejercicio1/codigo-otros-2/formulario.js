let formulario = document.querySelector(".formulario") //se cambia el # por un . y form se modifica a formulario

formulario.addEventListener('submit', function(event) { //se mete dentro de un addEventListener y la e que estaba como parametro se modifica a event

  event.preventDefault(); //Se cambia el e por un event
  
  let n = formulario.elements[0]
  let e = formulario.elements[1]
  let na = formulario.elements[2]

  let nombre = n.value
  let edad = e.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
})

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados") //se tiene que agregar el id en el html

let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") //se cambia added por add
lista.appendChild(elementoLista)


function crearElemento(descripcion, valor) { //arriba de este codigo se eliminó un codigo practicamente identico pero sin la función
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
  botonBorrar.addEventListener('click',  function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
      })
}