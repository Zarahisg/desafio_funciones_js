# desafio_funciones_js

Requerimientos
1. Transforma esta declaración de función a una función de expresión. El ejercicio debe quedar en un archivo nombrado `1 funcion.js` (1 Punto)
2. Transforma las siguiente función a una arrow function de una línea. Este ejercicio debe quedar en un archivo llamado `2 arrow.js` (1 Punto)
3. Se tiene como base el siguiente ejercicio que cambia el color de un elemento de HTML al hacerle click (Total: 3 Puntos)
_1
function example(a, b, c){ return a+b+c
}
suma = function(a, b){ return a + b
}
 www.desafiolatam.com
   <div id="ele1"> hello </div>
<script>
function pintar(){
  ele = document.getElementById("ele1")
  ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1") ele.addEventListener("click", pintar); </script>
3.1. Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo nuevamente dentro de la función (1 Punto). Para obtener el puntaje debes entregar el 3 pintar.html válido funcionando en conjunto con el código modificado.
Tip: revisa en la guía las funciones anónimas
3.2. Modifica el código anterior para poder pasarle un color como argumento a la función pintar. El color debe ser verde (green) por defecto, al hacer clic en el párrafo se debe pasar amarillo como color. (1 Punto).
3.3. Separa el código en 2 archivos: 3 pintar.html y script.js. El script js debe estar dentro de la carpeta assets/js (1 Punto). Para obtener el puntaje debes entregar los archivos cumplimiento la estructura pedida en conjunto con los requerimientos de 3.1 y 3.2
4. Construye una página web con las siguientes características (Total: 5 puntos)
● Crea 4 divs que tengan alto y ancho de 200px y de distintos colores de fondo usando el atributo style. Cada uno de los divs debe tener un identificador único.
● Crea un script que guarde dentro de una variable global un color dependiendo de la letra del teclado presionada. (2 Puntos).
○ Al presionar la letra a un color a tu elección.
○ Al presionar la letra s un segundo color a tu elección.
○ Al presionar la letra d un tercer color al presionar la letra d.
○ Para guardar el color revisa el tip al final del enunciado.
_2
  www.desafiolatam.com

 ● Dentro del script agrega el evento que al hacerle click a uno de los divs, este cambie de color al color seleccionado. Utiliza addEventListener para agregar el evento. (3 Puntos)
Tip: El siguiente script te ayudará a realizar acciones en función de que se presione una tecla
 
document.addEventListener('keydown', function (event) { if (event.key === 'a') {
    /* Cambiar a color 1 */
} else if (event.key === 's') { /* Cambiar a color 2 */
} })
