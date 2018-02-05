//DECLARACIÓN DE VARIABLES *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
var canvas = document.getElementById("dibujo");
var elArea = canvas.getContext("2d");

var color = "blue";
var estado = 0;
var x;
var y;

//DIBUJANDO EL AREA DE TRABAJO *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
dibujarLinea("blue", 0, 0, 0, 500, elArea);
dibujarLinea("blue", 0, 0, 500, 0, elArea);
dibujarLinea("blue", 500, 0, 500, 500, elArea);
dibujarLinea("blue", 0, 500, 500, 500, elArea);
//CUERPO DEL PROYECTO *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
document.addEventListener("mousedown", presionar);
document.addEventListener("mouseup", levantar);
document.addEventListener("mousemove", trazo);

function presionar(evento)
{
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function levantar(evento)
{
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}

function trazo(evento)
{
  if (x < 500 && y < 500)
  {
    if (estado == 1)
    {
    dibujarLinea(color, x, y, evento.layerX, evento.layerY, elArea);
    }
  }
  x = evento.layerX;
  y = evento.layerY;
}

//_*_*_*_*_*_*_DECLARACIÓN DE FUNCIONES *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 2;
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.closePath();
}
