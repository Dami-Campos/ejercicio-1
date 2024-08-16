
/*const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); // se agrega . en lugar de # porque es una clase y no un id
const $l = document.querySelector('.location');


async function  displayUser(username) { //se agrega async al inicio de la funcion 
   $n.textContent = 'cargando...';
   const data =  await fetch(`${usersEndpoint}/${username}`)
 
    console.log(data)
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location; 
  }






displayUser("eduardojesus12"); // se llama a la función 




function displayUser(username) {
  $n.textContent = 'cargando...';
  const data = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);*/

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');  // se agrega . en lugar de # porque es una clase y no un id
const $l = document.querySelector('.location');

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

async function displayUser(username) { //se agrega async al inicio de la funcion
  $n.textContent = 'cargando...';
  try { //se agrega el try para darle sentido al async function
    const response = await fetch(`${usersEndpoint}/${username}`);
  
    const data = await response.json(); //se le da formato al response
    
    console.log(data);
    
    $n.textContent = data.name || 'No disponible'; //se agrega No disponible porque algunos datos no los tienen todas las cuentas git
    $b.textContent = data.blog || 'No disponible'; //se agrega No disponible porque algunos datos no los tienen todas las cuentas git
    $l.textContent = data.location || 'No disponible'; //se agrega No disponible porque algunos datos no los tienen todas las cuentas git
  } catch (error) { // se agrega el catch para meter el handleError
    handleError(error);
  }
}

displayUser("Dami-Campos"); // se llama a la función 

