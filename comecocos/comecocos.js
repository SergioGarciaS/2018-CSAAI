function GameMapConstructor(wallSrc, cocoSrc, floorSrc, fruitSrc) {
    this.gameAreaMatrix = [                                                       // límite horizontal
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 2, 2, 3, 4, 1],
        [1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 4, 4, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 2, 2, 3, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1],
        [1, 4, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 2, 2, 2, 4, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    this.numColumns = 25;
    this.numRows = 17;
    //Parámetros que determinan anchura/altura del rectángulo basico para dibujar el mapa
    this.basicWidth = gameArea.canvas.width/this.numColumns;
    this.basicHeight = gameArea.canvas.height/this.numRows;
    this.basicColor = "green"
    this.wall = new Image();
    this.wall.src = wallSrc;
    this.coco = new Image();
    this.coco.src = cocoSrc;
    this.cocoStyle = "yellow";
    this.floor = new Image();
    this.floor.src = floorSrc;
    this.fruit = new Image();
    this.fruit.src = fruitSrc;
    this.updateMap = function(ctx) {
        ctx.drawImage(this.floor, j*Math.floor(this.basicWidth), i*Math.floor(this.basicHeight), this.basicWidth, this.basicHeight);
        for(var i=0; i<this.numRows; i++){
            for(var j=0; j<this.numColumns; j++){
                if(this.gameAreaMatrix[i][j]==1){ //dibujamos pared
                    ctx.fillStyle = this.basicColor;
                    ctx.drawImage(this.wall, j*Math.floor(this.basicWidth), i*Math.floor(this.basicHeight), this.basicWidth, this.basicHeight);
                    //ctx.fillRect(j*Math.floor(this.basicWidth), i*Math.floor(this.basicHeight), this.basicWidth, this.basicHeight);
                }else if (this.gameAreaMatrix[i][j]==2) {//coco pequeño
                    ctx.fillStyle =this.cocoStyle;
                    ctx.fillRect(j*Math.floor(this.basicWidth)+8, i*Math.floor(this.basicHeight)+8, this.basicWidth/4, this.basicHeight/4);
                }else if (this.gameAreaMatrix[i][j]==3) {//cocazo
                    ctx.fillStyle =this.cocoStyle;
                    ctx.fillRect(j*Math.floor(this.basicWidth)+4, i*Math.floor(this.basicHeight)+4, this.basicWidth/2, this.basicHeight/2);
                }else if (this.gameAreaMatrix[i][j]==4) {//sandiita rica
                    ctx.fillStyle =this.cocoStyle;
                    ctx.drawImage(this.fruit, j*Math.floor(this.basicWidth)-40, i*Math.floor(this.basicHeight)-40, 70, 70);
                }
            }
        }
    }
}

function Sound(src) {
    this.Sound = document.createElement("audio");
    this.Sound.src = src;
    this.Sound.setAttribute("preload", "auto");
    this.Sound.setAttribute("controls", "none");
    this.Sound.style.display = "none";
    document.body.appendChild(this.Sound);
    this.play = function(){
        this.Sound.play();
    }
    this.stop = function(){
        this.Sound.pause();
    }
}

var change = "";
var pacman;
var seconds = 0;
var minutes = 0;
var hours = 0;
var countingInterval = 0;
var totaltime = 0;
var pause = false;
var start = 0;
var random;
var mansana;
var maxTime = 300;



function buttonPause (){
    if (!pause){
      pause = true;
    }else{
      pause = false;
    }
}

function start_counting(){
  totaltime = seconds + 60*minutes + 3600*hours;
  var counter = hours + ":" + minutes + ":" + seconds;
  seconds += 1;
  if (seconds == 60) {
    minutes += 1;
    seconds = 0;
    if (minutes == 60){
      hours += 1;
      minutes = 0;
    }
  }
  document.getElementById("counter").innerHTML = counter;
};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}


function TextComponent(size, font, x , y, color) {
    this.size = size; // en pixeles
    this.font = font;
    this.x = x;
    this.y = y;
    this.text = "";
    this.update = function() {
        gameArea.ctx.font = this.size + " " + this.font;
        gameArea.ctx.fillStyle = color;
        gameArea.ctx.fillText(this.text, this.x, this.y);
    }
}

function DynamicElemt(width, height, x , y) {
    this.gameElement = new Image();
    this.gameElement.src = "nave.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.acceleration = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.maxSpeed = 6;
    this.minSpeed = -6;
    this.angle = 0;
    this.viewAngle = 0;
    this.vectorX = Math.cos(this.angle);
    this.vectorY = Math.sin(-this.angle);
    this.update = function() {
        gameArea.ctx.save();
        gameArea.ctx.translate(this.x, this.y);
        gameArea.ctx.rotate(this.viewAngle);
        gameArea.ctx.drawImage(this.gameElement, this.width / -2, this.height / -2, this.width, this.height);
        gameArea.ctx.restore();
    }
    this.move = function() {
        this.x += this.speed * this.vectorX;
        this.y += this.speed * this.vectorY;
    }
    this.rote = function() {
        this.vectorX = Math.cos(this.angle);
        this.vectorY = Math.sin(-this.angle); //seno es impar
    }
}
function startGame(){
    gameArea.stop();
}
// ATENSION AQUI LO PETAMOS CON ESTO
var gameArea = {

    canvas:  document.getElementById("game"),
    start: function() {

        //Contexto, control movimiento player, y creacion de objeto para mapa del juego
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener("keydown", function(event){keyHandler(event, pacman)}, false);
        var gameMatrix = new GameMapConstructor("vaporWall.jpg", "cocoNeon.png", "vaporFloor.jpeg", "sandia.png");
        //Creamos pacman a partir de Dynamic element y completamos su objeto con funciones específicas
        pacman = new DynamicElemt(27, 27, 100, 100);
        pacman.gameElement.src = "pacman.png"
        pacman.fruit = false; //control poder de fruta

        pacman.closeMouth = function() {
            pacman.gameElement.src = "pacman2.png"
            if (change!=""){
              pacman.gameElement.src = change + ".png";
            }
            setTimeout(pacman.openMouth, 300)
        }
        pacman.openMouth = function() {
            pacman.gameElement.src = "pacman.png"
            if (change!=""){
              pacman.gameElement.src = change + "2.png";
            }
            setTimeout(pacman.closeMouth, 300)
        }
        pacman.closeMouth();

        //Parte dedicada a la creación de los fantasmas a partir de DynamicElemt
        //Tomamos posición central mapa
        var mapWidthCenter = gameMatrix.numColumns*gameMatrix.basicWidth/2;
        var mapHeightCenter = gameMatrix.numRows*gameMatrix.basicHeight/2;
        var blueGhost = new DynamicElemt(32, 32, 250, 328);
        blueGhost.gameElement.src = "blueGhost.png";
        var redGhost = new DynamicElemt(32, 32, 80, 220);
        redGhost.angle = Math.PI/2; //Math.PI/2 para movimiento hacia arriba y abajo
        redGhost.gameElement.src = "redGhost.png";
        var pinkGhost = new DynamicElemt(32, 32, 154, 154);
        pinkGhost.gameElement.src = "pinkGhost.png";
        var clydeGhost = new DynamicElemt(32, 32, 500, 50);
        clydeGhost.angle = Math.PI/2;
        clydeGhost.gameElement.src = "clydeGhost.png";
        var ghostsArray = [blueGhost, redGhost, pinkGhost, clydeGhost];
        ghostsArray.forEach(function(element){
            element.speed = 1.5;
            element.weak = false; //control de debilidad
            element.alive = true; // ¿se lo comieron?
        });

        // var openingSound = new Sound("pacManStart.mp3");
        // openingSound.play();

        var score = new TextComponent("30px", "Arial", 0, 27, "pink");
        pacman.scoreCount = 0; //añadimos scoreCount a pacman, facilidad posterior en choques
        score.text = "SCORE: " + pacman.scoreCount;
        // if (window.confirm("VAMOS A EMPEZAR A JUGAR O NO CARATUERCA?") == true) {
        //     openingSound.stop();
            var soundtrack = new Sound("PacmanDubstepRemix.mp3");
            soundtrack.play();
            this.updateGamupdateGameeInterval = setInterval(function(){if (!pause){updateGame(gameMatrix, pacman, ghostsArray, score)}}, 20);
            countingInterval = setInterval(function(){if (!pause){start_counting()}}, 1000);

        // }
    },
    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        console.log("PASO POR EL STOP AUNQUE HAGO LO QUE QUIERO:")
        clearInterval(this.updateGameInterval);
        clearInterval(countingInterval);
        totaltime = 0;
        seconds = 0;
        hours = 0;
        minutes = 0;
    }
}
function leerpuntuaciones(){
  if (typeof(Storage) !== "undefined"){
    if (sessionStorage.key(0)!= null ){
      document.getElementById("Session_HC").innerHTML = sessionStorage.key(0) + "->" + sessionStorage.getItem(sessionStorage.key(0));

    }else{
      document.getElementById("Session_HC").innerHTML = "No hay datos";
    }
    if (localStorage.key(0)!= null ){
      document.getElementById("Local_HC").innerHTML = localStorage.key(0) + "->" + localStorage.getItem(localStorage.key(0));
    }else{
      document.getElementById("Local_HC").innerHTML = "No hay datos";
    }

  }else{
    document.getElementById("Local_HC").innerHTML = "Tu navegador no lo soporta";
  }

}

function buttonStart(){
    // gameArea.clear();
    leerpuntuaciones();
    if (start > 0){
      location.reload(true);
    }else{
      gameArea.stop();
      gameArea.start();
    }
    start +=1;


}


function keyHandler(event, pacman) {

    switch(event.key) {
        case "ArrowUp":
            pacman.speed = 2;
            pacman.angle = Math.PI/2;
            pacman.viewAngle = -Math.PI/2;
            pacman.rote();
            break;
        case "ArrowDown":
            pacman.speed = 2;
            pacman.angle = -Math.PI/2;
            pacman.viewAngle = Math.PI/2;
            pacman.rote()
            break;
        case "ArrowLeft":
            pacman.speed = 2;
            pacman.angle = Math.PI;
            pacman.viewAngle = Math.PI;
            pacman.rote()
            break;
        case "ArrowRight":
            pacman.speed = 2;
            pacman.angle = 0;
            pacman.viewAngle = 0;
            pacman.rote()
            break;
        case "ñ":
            localStorage.clear();
            sessionStorage.clear();
        case " ":
            break;
        default:
            console.log("Key not handled");
    }
}

function crash(whoCrash, theCrashed) {
    var myleft = whoCrash.x;
    var myright = whoCrash.x + (whoCrash.width/1.35);
    var mytop = whoCrash.y;
    var mybottom = whoCrash.y + (whoCrash.height/1.35);
    var otherleft = theCrashed.x;
    var otherright = theCrashed.x + (theCrashed.width/1.35);
    var othertop = theCrashed.y;
    var otherbottom = theCrashed.y + (theCrashed.height/1.35);
    var crash = true;
    if ((mybottom < othertop) ||
           (mytop > otherbottom) ||
           (myright < otherleft) ||
           (myleft > otherright)) {
       crash = false;
    }
    return crash;
}

function crashWithMapControl(mapa, obj, isPlayer) {
    /*
    Controla si el objeto dinámico pasado por parámetro ha colisionado con mapa
    y toma medidas al respecto para su control. Además devuelve boolean para
    indicar si se produjo choque y poder tomar otras acciones extra.
    */
    var crashed = false;
    var mapValue = mapa.gameAreaMatrix[Math.floor((obj.y+5)/mapa.basicHeight)][Math.floor((obj.x)/mapa.basicWidth)];
    if(mapValue == 1){
        obj.speed *= -1;
        obj.move();
        obj.speed *= -1;

        crashed = true;
    }else if((mapValue == 2 || mapValue == 3) && isPlayer) {
        mapa.gameAreaMatrix[Math.floor((obj.y+5)/mapa.basicHeight)][Math.floor((obj.x)/mapa.basicWidth)] = 0;
        obj.scoreCount += 10;
        if (mapValue == 3){
            obj.scoreCount += 20;
            var points = new TextComponent("45px", "italic", obj.x, obj.y, "yellow");
            points.text = "+30";
            for (var i=0; i<1550; i++){
                points.update();
            }
        }
    }
    if(mapValue == 4 && isPlayer) {
        var altura = Math.floor((obj.y+5)/mapa.basicHeight);
        var anchura = Math.floor((obj.x)/mapa.basicWidth);
        mapa.gameAreaMatrix[Math.floor((obj.y+5)/mapa.basicHeight)][Math.floor((obj.x)/mapa.basicWidth)] = 0;
        obj.fruit = true;
        var eat = new Sound("chewbacca2.mp3");
        eat.play();
        random = Math.round(Math.random()*5);
        setTimeout(function(){mapa.gameAreaMatrix[altura][anchura]=4;},(1000*random))
    }
    return crashed;
}
function paco (a){ // ESTO VUELVE AL ESTADO ORIGINAL LOS PHANTASMAS
  mansana = window.setTimeout(function jejejej(){
    a[0].gameElement.src = "./blueGhost.png";
    a[1].gameElement.src = "./redGhost.png";
    a[2].gameElement.src = "./pinkGhost.png";
    a[3].gameElement.src = "./clydeGhost.png";
    a[0].weak = false;
    a[1].weak = false;
    a[2].weak = false;
    a[3].weak = false;
  },5000);

  //return a;
}
function hideimage(id){
  //alert("VAMOOOOOOH")
  var hijo = "",padre = "";
  console.log("VIDAAAAAAAAAAAAAa")
  var cell = document.getElementById("General");

  if ( cell.hasChildNodes() )
  {
    while ( cell.childNodes.length >= 1 )
    {
      cell.removeChild( cell.firstChild );
    }
  }

  if (window.confirm("VOLVER A EMPEZAR A JUGAR O NO CARATUERCA?") == true) {
      location.reload(true);
    }
}
function updateGame(mapa, pacman, ghostsArray, score) {
    //Actualizamos fondo, mapa y score
    var fondo = new component(gameArea.canvas.width, gameArea.canvas.height, "black", 0,0);
    fondo.update(gameArea.ctx);
    gameArea.ctx.drawImage(mapa.floor, 0,0, gameArea.canvas.width, gameArea.canvas.height);
    mapa.updateMap(gameArea.ctx);
    score.text = "SCORE: " + pacman.scoreCount;
    score.update()
    if (pacman.scoreCount == 70){

       var puntuacionextra = maxTime - totaltime;
       pacman.scoreCount += puntuacionextra;
       var nickname = prompt("New Highscore! Write your name", "Your Name");

     if (localStorage.getItem(localStorage.key(0)) < pacman.scoreCount){
       localStorage.setItem(nickname, pacman.scoreCount);
       document.getElementById("Local_HC").innerHTML = localStorage.key(0) + "·····>" + localStorage.getItem(nickname);
     }
     if (sessionStorage.getItem(sessionStorage.key(0)) < pacman.scoreCount){
       sessionStorage.setItem(nickname, pacman.scoreCount);
       document.getElementById("Session_HC").innerHTML = sessionStorage.key(0) + "·····>" + sessionStorage.getItem(nickname);
      }
        var win = document.createElement("img");
        win.src = "winner.gif";
        win.id = "winner";
        win.width = window.innerWidth;
        win.height = window.innerHeight;
        win.setAttribute("onclick", "hideimage(winner)");
        document.getElementById("General").appendChild(win);
        console.log(ghostsArray)

        // hideimage(win);


    }
    if (totaltime >= 1000){ //PONER EL TIEMPO QUE QUERAMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOS
      gameArea.stop()
      ghostsArray.forEach(function(element){
          element.src = "";
          element.speed = 0;
          element.angle = 0;
          element.x = 0;
          element.y = 0;
          element.width = 0;
          element.height = 0;
          element.weak = false; //control de debilidad
          element.alive = false; // ¿se lo comieron?
      });

      if (window.confirm("Perdiste CARASTACA!, ¿juegas maś?") == true) {
          location.reload(true);
          console.log(ghostsArray);
      }
    }

    //movimiento y dibujado pacman
    pacman.move();
    crashWithMapControl(mapa, pacman, true); // MIRAR AQUI PARA QUE NO SE COMA LA PARED:
    pacman.update();
    //control y dibujado de los fantasmas
    ghostsArray.forEach(function(element){
        element.move()
         console.log(pacman.fruit + " " + element.weak);


        if (crashWithMapControl(mapa, element, false)) {
            var direction = Math.floor(Math.random() * 4)
            element.angle += Math.PI/2 * direction;
            element.rote();
        }
        if (pacman.fruit && element.weak){
            console.log("ESTAS ENTRANDO EN LA LOCURA EXTREMA")
            element.angle += Math.PI; // cambio de sentido
            element.rote();
            element.gameElement.src = "oldGhost.gif";
            element.weak = true;
            window.clearTimeout(mansana);
            paco(ghostsArray);

        }
        if (pacman.fruit && !element.weak){
            element.angle += Math.PI; // cambio de sentido
            element.rote();
            element.gameElement.src = "oldGhost.gif";
            element.weak = true;
            paco(ghostsArray);
        }

        if (crash(element, pacman)){
            if (element.weak){
                element.alive = false;
            }else{
                gameArea.stop()
                if (window.confirm("Perdiste, ¿juegas maś?") == true) {
                    location.reload(true);
                    gameArea.start();
                }
            }
        }
        if (element.alive){
            element.update();
        }
    });
    pacman.fruit = false;
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    var anterior = document.getElementById("drag4").src;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    change = ev.target.appendChild(document.getElementById(data)).src;
    document.getElementById("drag4").src = change;
    change = change.split("/");
      change = change[change.length-1].split(".")[0];
    document.getElementById(data).src = anterior;
    var input = document.createElement("img");
    input.setAttribute("id", data);
    input.setAttribute("draggable", "true");
    input.setAttribute("ondragstart", "drag(event)");
    input.setAttribute("src", anterior);
    input.setAttribute("width", "100px");
    input.setAttribute("height", "100px");
    $(".añadidos").appendChild(input);
    function $ (selector){
      return document.querySelector(selector);
    }
}
