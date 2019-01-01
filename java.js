document.addEventListener("mousedown",empezarDibujo);//falta definir duncion empezar dibujo
document.addEventListener("mouseup",finalizarDibujo);//falta definir duncion finalizar dibujo dibujo



var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var colorMouse="blue";

function empezarDibujo(evento){
  if(evento.target.id == "area_de_dibujo"){
    document.addEventListener("mousemove", dibujarSobre);
  }
}

function finalizarDibujo(evento){
    document.removeEventListener("mousemove",dibujarSobre)
}

function dibujarSobre(evento){
    if (evento.target.id == "area_de_dibujo"){
        console.log(evento)

        x = evento.clientX - 5;
        y = evento.clientY - 5;
        dibujarLinea(colorMouse, x-1, y-1, x+1, y+1, papel);
    }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth=4;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();

}
