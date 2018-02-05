var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var yi;
var xf;
var colorDeLinea = "blue";

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho/lineas;

  figurita1(lineas, espacio);
}

  function figurita1(cantidad_lineas, espacio_lineas)
{
  for (l = 0; l < cantidad_lineas; l++)
  {
    yi = espacio_lineas * l;
    xf = espacio_lineas * (l + 1);
    dibujarLinea(colorDeLinea, 0, yi, xf, 300);
    dibujarLinea(colorDeLinea, 300, yi, xf, 0);
  }

  for (l = 0; l < cantidad_lineas; l++)
  {
    yini = (l + 1) * espacio_lineas;
    xfin = 300 - ((l +1) * espacio_lineas);
    dibujarLinea(colorDeLinea, 300, yini, xfin, 300);
    dibujarLinea(colorDeLinea, 0, yini, xfin, 0);
  }
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.closePath();
}
