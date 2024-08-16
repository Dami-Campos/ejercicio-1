

  
  const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ]
  
  const li = document.getElementById("lista-de-productos")//se cambia el getElementbyName
  const $i = document.querySelector('.input');
  
  function displayProductos(productos) {//se envuelve el for dentro de una funcion
    for (let i = 0; i < productos.length; i++) {
      let d = document.createElement("div");
      d.classList.add("producto");
  
      let ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = productos[i].nombre;
  
      let imagen = document.createElement("img");
      imagen.setAttribute('src', productos[i].img);
  
      d.appendChild(ti);
      d.appendChild(imagen);
  
      li.appendChild(d);
    }
  }
  
  function filtrado(productos = [], texto) {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto)); //esta parte del codigo de cambia de posicion
  }
  
  // Mostrar productos inicialmente
  displayProductos(productos);
  
  const botonDeFiltro = document.querySelector(".button"); //se debe agregar la clase al html, y agregar un punto aqui

  
  botonDeFiltro.addEventListener('click', function() { //se meten los elementos dentro del evento
    const texto = $i.value;
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto);
  
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
  
    for (let i = 0; i < productosFiltrados.length; i++) {
      let d = document.createElement("div");
      d.classList.add("producto");
  
      let ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = productosFiltrados[i].nombre;
  
      let imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);
  
      d.appendChild(ti);
      d.appendChild(imagen);
  
      li.appendChild(d);
    }
  });