var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "imagenes/tile.png";

var fondo = new Image();
fondo.src = mapa;

fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = imagenes/vaca.png;
vaca.addEventListener("load", dibujarVaca);

var cerdo = new Image();
cerdo.src = imagenes/cerdo.png;
cerdo.addEventListener("load", dibujarCerdo);

var pollo = new Image();
pollo.src = imagenes/pollo.png;
pollo.addEventListener("load", dibujarPollo);

function dibujar()
{
  papel.drawImage(fondo, 0, 0);
}

function aleatorio (maxi, min)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1) + min);
  return resultado;
}
