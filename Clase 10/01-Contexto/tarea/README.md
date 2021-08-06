
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cual es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
>> Se convierte en una variable global.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { // 8,9,10
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) { //8,9,10
    b = a; 
    console.log(b); //8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //undefined por que la declaracion queda debajo de todas formas
console.log(baz); //error, dice que la variable no está definida.
foo();            // Hola
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2; //no lo lleva arriba, quiza por no tener el keyword de var, let o const.
```

```javascript
var instructor = "Nahuel";
if(true) {
    var instructor = "Cristian";
}
console.log(instructor); //Cristian, parece que el var dentro del if no crea un nuevo contexto.
```

```javascript
var instructor = "Nahuel";
console.log(instructor); //Nahuel
(function() {
   if(true) {
      var instructor = "Cristian";
      console.log(instructor); // Cristian, porque la variable se crea en un nuevo contexto de ejecucion.
   }
})();
console.log(instructor); // Nahuel
```
```javascript
var instructor = "Nahuel";
let pm = "Cristian";
if (true) {
    var instructor = "Fernando";
    let pm = "Alejandra";        //Se crea una variable interna en el if
    console.log(instructor);     // Fernando
    console.log(pm);             // Alejandra
}
console.log(instructor);         //Fernando
console.log(pm);                 //Cristian 
```
### Coerción de Datos

¿Qué crees que van dar estas operaciones?:

```javascript
console.log(6 / "3")        //2
console.log("2" * "3")      //6
console.log(4 + 5 + "px")   //9px
console.log("$" + 4 + 5)    //$45
console.log("4" - 2)       //2
console.log("4px" - 2)      //NaN
console.log(7 / 0)          //Infinity
console.log({}[0])          //undefined
console.log(parseInt("09")) //9
console.log(5 && 2)         //2
console.log(2 && 5)         //5
console.log(5 || 0)        //5
console.log(0 || 5)         //4
console.log([3]+[3]-[10])   //23 la suma parece concatena los array y la resta los transforma  en numero (esto ultimo solo si tiene 1 solo elemento, de lo contrario devulve NaN)
console.log(3>2>1)          //false
console.log([] == ![])      //true, nose porque
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output que vemos en consola luego de ejecutar este código? Explicar porque es así:

```javascript
function test() {
   console.log(a);      //undefined porque si bien el compilador sube las declaracion, las variables no se puede usar hasta su inicializacion.
   console.log(foo());  //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este:

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);   //al hacerle console.log retorna undefined, porque la keyword var del snack dentro del if es
                  // cargada en memoria al leer la funcion getFood. Pero no puede ser usada hasta
                  //que no sea declarada. Entonces al no acceder al if, el return final devuelve el valor de la
                  //variable snack que  fue creada dentro de la funcoins getFood.
                  //El comportamiento que solucionaria usando la keyword let ya que estas tienen scope de bloque.
```               


### This

¿Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Carlos Garcia',
   prop: {
      fullname: 'Pedro Guimenez',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //'Pedro Guimenez' porque en su contexto la propiedad está dentro de prop.

var test = obj.prop.getFullname;

console.log(test());                //'Juan Perez' ya que es ejecutada afuera del objeto y su contexto pasa a ser el mismo que donde es ejecutada la funcion.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden del ouput? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();  //1, 4, 3, 2. Aunque el segundo setTimeout tenga 0 igual pasa al stack con el de 1s
```
