const pizarra = document.querySelectorAll(".caja");


pizarra.forEach(pizarra => {
    var pincel = pizarra.getContext("2d");
    pincel.fillStyle="blue";
    pincel.fillRect(0,0,100,200);
});

// function crearCaja(){

//     pincel.fillStyle = "black"
//     pincel.fillRect(0,0,100,200);
// }
// crearCaja();


