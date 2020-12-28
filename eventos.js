document.addEventListener("mousemove", dibujarMouse)
var areaDePizarra = document.getElementById("area_de_pizarra")
var papel = areaDePizarra.getContext("2d");

dibujarLinea("red", 150 - 1, 150 - 1, 150 + 1, 150 + 1, papel);

var color = document.getElementById("colorcito")


function dibujarMouse(evento)
{
    if(evento.buttons == 1)
    {
        colorcito = color.value;
        x= evento.layerX;
        y= evento.layerY;
        dibujarLinea(colorcito, x - 1, y - 1, x + 2, y + 2, papel);
    }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}