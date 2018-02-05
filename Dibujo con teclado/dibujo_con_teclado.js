var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var area = document.getElementById("area_de_dibujo");
var cuadrito = area.getContext("2d");
var x = 150;
var y = 150;

document.addEventListener("keydown", dibujoTeclado);

dibujarLinea("blue", 149, 149, 151, 151, cuadrito);

function dibujoTeclado(evento)
{

  var colorsote = "red";
  var valor = 2;
  	switch (evento.keyCode)
  	{
  		case (teclas.DOWN):
  			dibujarLinea(colorsote, x, y, x, y + valor, cuadrito);
        y = y + valor;
  		break;

  		case (teclas.UP):
      dibujarLinea(colorsote, x, y, x, y - valor, cuadrito);
      y = y - valor;
  		break;

  		case (teclas.LEFT):
      dibujarLinea(colorsote, x, y, x - valor, y, cuadrito);
      x = x - valor;
  		break;

  		case (teclas.RIGHT):
      dibujarLinea(colorsote, x, y, x + valor, y, cuadrito);
      x = x + valor;
  		break;

  		default:
  			alert("otra tecla");
  	}

}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 3;
lienzo.moveTo(x_inicial, y_inicial);
lienzo.lineTo(x_final, y_final);
lienzo.stroke();
lienzo.closePath();
}
