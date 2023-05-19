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

var imag = [
    "./Imagenes/God1.gif",
    "./Imagenes/God2.gif",
    "./Imagenes/God3.gif",
    "./Imagenes/God4.gif",
    "./Imagenes/God5.gif"
  ];  
  var fotoActual = 0;
  
  function mostrarImagen() {
    var imagen = document.getElementById("imagen");
    imagen.src = imag[fotoActual]; 
  }
  
  
    function siguienteImagen() {
         
   if (fotoActual < imag.length - 1) {
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
      fotoActual = imag.length - 1;
    }
    mostrarImagen();
  }

//<!--   Esconder texto    -->
function ocultarMensaje() {
  document.getElementById("mensaje").innerHTML = "";
   
      }

      //<!--   Generar un Texto    -->
      function escribirTexto(){
  
        document.getElementById("miDiv").innerHTML = "<h1>Este texto no lo escribió Uriel, lo escribió JavaScript</h1>";
        
      
      
       }
