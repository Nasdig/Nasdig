
const pizarra = document.querySelector("canvas");
const pincel = pizarra.getContext("2d");

pincel.fillStyle = "red";
pincel.fillRect (0,0,600,600);

function dibujarCirculo(evento){
    var x = evento.pageX - pizarra.offsetLeft;
    var y = evento.pageY - pizarra.offsetTop;

    pincel.fillStyle ="blue";
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();

}

pizarra.onclick = dibujarCirculo;