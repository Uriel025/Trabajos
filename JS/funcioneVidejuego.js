//     Cambiar Fondo  
function cambiarFondo1() {
    document.body.style.backgroundColor =  "#185A3F";
         }
          function cambiarFondo2() {
    document.body.style.backgroundColor =  "#3B807B";
         }


//         Cambiar texto 

function cambiarTexto() {
    document.getElementById("texto").innerHTML = "<strong><h2>  Año de publicacion: 2022</h2></strong>";
    document.getElementById("texto2").innerHTML = "<strong><h2>Productor: SIE Santa Monica Studio</h2></strong>";
    
}

// MOSTRAR IMAGENES

var imagenes = [
    "./imagenes/God1.gif",
    "./imagenes/God2.gif",
    "./imagenes/God3.gif",
    "./imagenes/God4.gif",
    "./imagenes/God5.gif"
  ];  
  var fotoActual = 0;
  
  function mostrarImagen() {
    var imagen = document.getElementById("imagen");
    imagen.src = imagenes[fotoActual]; 
  }
  
  
    function siguienteImagen() {
         
   if (fotoActual < imagenes.length - 1) {
      fotoActual++;
      } else {
      fotoActual = 0;
      }
    mostrarImagen();
      }
  
  
      
  function imagenAnterior() {
  
      if (fotoActual > 0) {
      fotoActual--;
    } else {
      fotoActual = imagenes.length - 1;
    }
    mostrarImagen();
  }


