var image = new Image();
var c2,ctx1,ctx2;

function CargarCanvas() {
  c2 = document.getElementById("c2");
  ctx2 = c2.getContext("2d");
  image.src = "sol.jpg"
  console.log(image);
}

function cargar() { //FUNCIÓN PRINCIPAL DEL PROGRAMA.
    CargarCanvas();
}
function select_photo(x) { // ESTE ES EL SELECTOR: COLOCA LA IMAGEN EN EL CANVAS.
    if (x == 1){
        marco(1);
        c2.style.background = "url('sol.jpg')";
        c2.style.backgroundSize="250px 240px" ;
    }else if(x == 2){
        marco(2);
        c2.style.background = "url('Cuenca.jpg')";
        c2.style.backgroundSize="250px 240px" ;
    }else if(x == 3){
        marco(3);
        c2.style.background = "url('donosti.jpg')";
        c2.style.backgroundSize="250px 240px" ;
    }else if(x == 4){
        marco(4);
        c2.style.background = "url('sevilla.jpg')";
        c2.style.backgroundSize="250px 240px" ;
    }

  function marco(y) { // ESTA FUNCION ES COMO EL DEL REALIZADOR BORDE.
    for (var i = 1; i <= 4; i++) {
      if (i == y) {
          document.getElementById("img" + i).style.border = "thick solid #0000FF";
      }else {
        document.getElementById("img" + i).style.border = "none";

      }
    }
  }
}
