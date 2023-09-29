const imageDiv = document.getElementsByClassName('image')[0]; 
const button = document.getElementsByClassName('button1')[0]; 

function getimage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      if (data && data.status === 'success') { //SI SE OBTIENE LA IMAGEN
        const imagen = document.createElement('img');
        imagen.src = data.message;

        imageDiv.innerHTML = ''; // LIMPIAR
        imageDiv.appendChild(imagen); // AGREGAR IMG

      } else {//SI NO SE OBTIENE IMAGEN
        console.error('Error al obtener la imagen');
      }
    })
    .catch(error => { //EN CASO DE ERROR
      console.error('Error de red:', error);
    });
}

button.addEventListener('click', getimage); //FUNCION QUE INDICA CUANDO EJECUTAR GETIMAGE






