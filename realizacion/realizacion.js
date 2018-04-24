
var canvas, contenedor, video;
var barra,volumbar;
var cameras = [];

function main() {
  canvas = document.getElementById("canvas");
  contenedor = canvas.getContext("2d");
  inicio();
  console.log(video);
  /*canvas.width = video.width;
  canvas.height = video.height;
  */
  console.log(video.width, video.height);
  contenedor.drawImage(video, 0, 0, canvas.width, canvas.height);
  video.addEventListener('play', render);
  barra.addEventListener('change', barra);
  volumbar.addEventListener('change', VolumeControl);

}
// function bucle(){
//     console.log(start + ": "+ end);
// }

function inicio() {
  barra = document.getElementById("seek-bar"); //Buscamos la barra
  barra.value = 0; // Y la ponemos a cero.
  volumbar = document.getElementById("volume-bar"); //Buscamos el volumen
  volumbar.value = 1; //Y lo ponemos a tope.
  Cameras();
  ChooseCam(1); //Elegimos la camara 1 por defecto.
}

function render() { // Funcion que refresca.
  contenedor.drawImage(video, 0, 0, canvas.width, canvas.height); //Lo que le metes, donde se coloca y tamaño de canvas.
  barra_desliza();
  Refreshclock();
  requestAnimationFrame(render);
}

function barra() { //Sincronización de los videos.
  var time = barra.value * (video.duration/barra.max);
  for (var i = 0; i < cameras.length; i++) {
    cameras[i].currentTime = time;
  }
}
function barra_desliza() {
  var value = video.currentTime * (barra.max/video.duration)
  barra.value = value;
}
function VolumeControl() {
  video.volume = volumbar.value;
}
function Mute() {
  if (video.muted) {
    video.muted = false;
    document.getElementById("mute").innerHTML = "Q" //POR EL SIMBOLO DE LA FUENTE.
  }else {
    video.muted = true;
    document.getElementById("mute").innerHTML = "g";
  }
}
function Play() {
  if (video.paused || video.ended) {
    document.getElementById("play-pause").innerHTML = "u"; // POR EL SIMBOLO DE LA FUENTE.
    for (var i = 0; i < cameras.length; i++) {
      cameras[i].play();
    }
  }else {
    document.getElementById("play-pause").innerHTML = "P";
    for (var i = 0; i < cameras.length; i++) {
      cameras[i].pause();
    }
  }console.log(video.currentTime);
}
function Refreshclock() {
  var s;
  s = Math.round(video.currentTime);
  if (s >= 10) {
      document.getElementById("Clock").innerHTML = "00:" + s;
  }else {
      document.getElementById("Clock").innerHTML = "00:0" + s;
  }

}
function Cameras() {
  var c1 = document.getElementById("aux1");
  var c2 = document.getElementById("aux2"); // Cargamos todas las camaras.
  var c3 = document.getElementById("aux3");
  var c4 = document.getElementById("aux4");

  cameras.push(c1,c2,c3,c4); // En este array de camaras.
}

//-------------------------REALIZADOR----------------------------//


function ChooseCam(x) {

    if (x == 1){Select(1);}
    else if(x == 2){Select(2);}
    else if(x == 3){Select(3);}
    else if(x == 4){Select(4);}

  function Select(y) {
    if (video != undefined){video.muted = true;}

    video = document.getElementById("aux" + y);
    video.muted = false;
    for (var i = 1; i <= 4; i++) {
      if (i == y) {
          //Con este comando ponemos el marco al video seleccionado.
          document.getElementById("aux" + i).style.border = "thick solid #0000FF";
      }else {
        document.getElementById("aux" + i).style.border = "none";

      }
    }
  }
}
