
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Las  declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra reservada var es su contexto de ejecución en curso, que puede ser la función que la contiene o, para las variables declaradas afuera de cualquier función, un ámbito global. Si re-declaras una variable Javascript, esta no perderá su valor.

Asignar un valor a una variable no declarada implica crearla como variable global (se convierte en una propiedad del objeto global) cuando la asignación es ejecutada. Las diferencias entre una variable declarada y otra sin declarar son:

las variables declaradas con var se limitan al contexto de ejecucion en el cual son declaradas, las variables no declaradas siempre son globales.
```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {      // aca comienza la ejecucion con argumentos
  var x = 10;                          
  console.log(x);                  =>   10                
  console.log(a);                  =>   8
  var f = function(a, b, c) {
    b = a;
    console.log(b);                =>   8
    b = c;
    var x = 5;
  }  // Cuando se termina de ejecutar esta funcion se destruye este execution context y desaparece por eso b toma el valor de 9 y no de la funcion f
  f(a,b,c);
  console.log(b);                  =>   9
}
c(8,9,10);
console.log(b);                    =>   10
console.log(x);                    =>   1
```

```javascript
console.log(bar);                   => undefined
console.log(baz);                   => baz is not defined
foo();
function foo() { console.log('Hola!'); }      => 'Hola!'
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);                               => 'Franco'
```

```javascript
var instructor = "Tony";                 
console.log(instructor);                               => 'Tony'
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);                         => 'Franco'
   }
})();          // Cuando se termina de ejecutar esta funcion se destruye este execution context y desaparece
console.log(instructor);                               => 'Tony'
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);                        => 'The Flash'
    console.log(pm);                                => 'Reverse Flash'
}
console.log(instructor);                           => 'The Flash'
console.log(pm);                                   => 'Franco'
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"                       =>   2
"2" * "3"                     =>   6
4 + 5 + "px"                  =>   9     => '9px'
"$" + 4 + 5                   =>   '$4'  => '$45' Asociatividad de izquierda a derecha
"4" - 2                       =>   2
"4px" - 2                     =>   NaN
7 / 0                         =>   Infinity
{}[0]                         =>   [ 0 ]
parseInt("09")                =>   9
5 && 2                        =>   2 Cualquier numero que se diferente de cero da true, es decir true && true => javascript devuelve el ultimo elemento evaluado
2 && 5                        =>   5
5 || 0                        =>   5   devuelve el true
0 || 5                        =>   5   devuelve el true
[3]+[3]-[10]                  =>   23  aca el signo + en arrays concatena
33 - 10 = 23                

 3 > 2 > 1                    =>   false
(true  > 1) porque true vale 1 y false vale 0 (true > true )  => false

[] == ![]                     =>   true
//El valor pasado como primer parámetro se convierte en un valor booleano, si es necesario. Si el valor se omite o es 0, -0, null, false, NaN, undefined, o la cadena vacía (""), el objeto tiene un valor inicial de false. Todos los demás valores, incluido cualquier objeto, un arreglo vacío ([]) o la cadena "false", crean un objeto con un valor inicial de true.

=> []==![]

=> []==false // Type conversion by the statement itself

=> []==0 // To number of right operand

=> ""==0 // To Primitive call for Array which will in this case convert to empty string

=> 0==0 // To number call of "" which is 0

=> true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);               //=> undefined poque no se ha declarado como
                                 //   variable antes de llamarla 
   console.log(foo());           //=>  2 porque el objeto variable (VO) guarda las
                                 //   invocaciones de funciones para mas adelante   ///   cuando encuentre la funcion definida.
   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   //var snack   el hoisting me crea esta variable al principio de la funcion pero sin ningun valor (undefined) en este contexto porque defino como variable snack dentro de este contexto de funcion dentro del if(){} ...
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);  => undefined 


// var snack = 'Meow Mix';

// function getFood(food) {
//     if (food) {
//         snack = 'Friskies';  Como no definí snack como una variable dentro de este contexto, entonces snack sale de su contexto de funcion y apunta al contexto global para ver si encuentra una variable llamada snack...
//         return snack;
//     }
//     return snack;
// }

// getFood(false);  => Meow Mix 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());  => 'Aurelio De Rosa' porque se esta
                                       invocando como metodo de un objeto.
var test = obj.prop.getFullname;

console.log(test());                => 'Juan Perez' porque el this apunta al objeto 
                                    global ya que la funcion se invoca suelta, no como metodo de un objeto...
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
// 1,4,3,2
printing();
```
// El método setTimeout() de JavaScript es un método incorporado que permite temporizar la ejecución de una determinada función . Es necesario pasar la cantidad de tiempo a esperar en milisegundos , lo que significa que para esperar un segundo, es necesario pasar mil milisegundos