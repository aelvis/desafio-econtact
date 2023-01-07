/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

function largoDelNombre(nombre = 123) {
  if(typeof nombre === 'string' || nombre instanceof String){
    let contarNombre = nombre.length;
    if((contarNombre <= 5)&&(contarNombre >= 0)){
      return console.log("Es un nombre corto. Su largo es de: " + contarNombre);
    }else{
        return console.log("Es un nombre largo. Su largo es de: " + contarNombre);
    }   
  }else{
    return console.log("El parámetro recibido es invalido");
  }
}
//largoDelNombre();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = ["Casa", 45, true, 20, undefined, 3]) {
  numeroTotal = arreglo.length;
  var contador = 0;
  for(var i = 0; i < numeroTotal; i++){
    if (typeof arreglo[i] === 'number') {
      contador = contador + 1;
    }
  }
  return console.log("Valores tipo number dentro del arreglo: " + contador);
}
//contarTipoNumber();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona = { nombre: "Elvis", edad: 31, altura : 1.63 }) {
  const { nombre, edad, altura } = persona;
  return console.log(`Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`);
}
//datosPersona();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1 = 0, numero2= 6) {
  sumatoriaNPares = 0;
  for(var i = numero1; i < numero2; i++){
    if (i % 2 == 0) {
      sumatoriaNPares = sumatoriaNPares + 1;
    }
  }
  return console.log("La cantidad de números pares obtenido fue de: "+sumatoriaNPares);
}
//obtenerCantidadDePares();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

function obtenerCantidadDeSedes(econtact = objetoFijo) {
  totalDeSedes = Object.keys(econtact["datos"]["sedes"])
  for(var i = 0; i < totalDeSedes.length; i++){
    console.log(totalDeSedes[i]);
  }
  return console.log("Cantidad: " +i);
}
//obtenerCantidadDeSedes();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

function obtenerTelefonoPeru(econtact = objetoFijo,pais="Peru") {
  totalDeSedes = Object.keys(econtact["datos"]["sedes"])
  verificarExistencia = 0;
  for(var i = 0; i < totalDeSedes.length; i++){
    if(totalDeSedes[i] === pais){
      verificarExistencia = verificarExistencia + 1;
    }
  }
  if(verificarExistencia == 0){
    return console.log("No existe el País: " +pais);
  }
  let variableComparar = econtact["datos"]["sedes"][pais]["telefono"];
  console.log();
  if(variableComparar == null || variableComparar == undefined){
    return console.log(pais+" no tiene asignado un teléfono");
    }else{
      return console.log("Teléfono de " +pais+": "+variableComparar);
    }
}

//obtenerTelefonoPeru();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = objetoFijo) {
  let variableComparar = econtact["datos"]["sedes"];
  totalDeSedes = Object.keys(econtact["datos"]["sedes"])
  verificarExistenciaNoPaises = 0;
  for(var i = 0; i < totalDeSedes.length; i++){
    if(variableComparar[totalDeSedes[i]]["telefono"]  == null || variableComparar[totalDeSedes[i]]["telefono"] == undefined){
      verificarExistenciaNoPaises = verificarExistenciaNoPaises + 1;
    }
  }
  totalDePaises = totalDeSedes.length;
  calcular = totalDePaises-verificarExistenciaNoPaises;
  return console.log("La cantidad de Países que cuentan con teléfono son: "+calcular);
}

//obtenerPaisesConTelefono();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion="+", numero1=7, numero2=2) {
  if (typeof numero1 === 'number') {
    if (typeof numero2 === 'number') {
      switch (operacion) {
        case "+":
          total = numero1 + numero2;
          break;
        case "-":
          total = numero1 - numero2;
          break;
        case "*":
          total = numero1 * numero2;
          break;
        case "/":
          total = numero1 / numero2;
          break;
        default:
          return console.log("La operación matemática que intenta realizar es inexistente");
      }
      return console.log("La operación es: " +total);
    }
  }
  return console.log("No es un número");
}

//calculoMatematico();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero=5) {
  if( (!isNaN(parseFloat(numero))) && (isFinite(numero)) && (typeof numero === 'number') && (numero>0) ){
      const numerosArray = [];
      hasta = (numero*2)+1;
      contador= 0;
      while (numero < hasta) {
        numerosArray.push(numero);
        numero++;
      }
      return console.log(numerosArray);
    }else{
        return console.log("El número ingresado debe ser mayor a 0");
    }
}
//cargarArreglo();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = numerosReales) {
  sumatoriaNDivisibleCinco = 0;
  for(var i = 0; i < numeros.length; i++){
    if (numeros[i] % 5 == 0) {
      sumatoriaNDivisibleCinco = sumatoriaNDivisibleCinco + 1;
    }
    console.log(numeros[i] % 5);
  }
  return console.log("La cantidad de número divisible por 5 es: "+sumatoriaNDivisibleCinco);
}

//divisiblesPorCinco();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = arregloFijo) {
  contador = 0;
  for(var i = 0; i < numeros.length; i++){
    contador = contador +numeros[i];
  }
  return console.log("La sumatoria de los número es: " +contador);
}

//sumatoria();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function verificarCantidadEmpleadosA(econtact = objetoFijo) {
  let variableCompararEmpleados = econtact["datos"]["empleados"];
  let variableComparar = econtact["datos"]["sedes"];
  totalDeSedes = Object.keys(econtact["datos"]["sedes"])
  sumatoriaEmpleadosSedes = 0;
    for(var i = 0; i < totalDeSedes.length; i++){
      sumatoriaEmpleadosSedes = sumatoriaEmpleadosSedes + variableComparar[totalDeSedes[i]]["empleados"];
    }
    if(sumatoriaEmpleadosSedes === variableCompararEmpleados){
        return console.log("True");
    }else{
        return console.log("False");
    }
  }
//verificarCantidadEmpleadosA();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo = arregloFijo) {
  let arregloNuevo = [];
  for(var i = 0; i < arreglo.length; i++){
    arregloNuevo.push(arreglo[i]**2);
  }
  return console.log(arregloNuevo);
}

//calcularCuadrados();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

const arregloPrueba = [1, 3, 4, 7, 12, 50, 60];
function validarArreglo(numeros = arregloPrueba) {
  if(numeros.length >= 6){
    contador = 0;
    for(var i = 0; i < numeros.length; i++){
      contador = contador +numeros[i];
    }
    if(contador > 100){
      return console.log("True");
    }else{
      return console.log("False");
    }
  }else{
    return console.log("False");
  }
}
//validarArreglo();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres = ["Elvis","Wilson","Raquel","Abigail","Rufino","Irma"], nombre="Wilson") {
  comparar = 0;
  for(var i = 0; i < nombres.length; i++){
    if(nombres[i] == nombre){
      comparar = comparar + 1;
    }
  }
  if(comparar === 0){
    return console.log("False");
  }else{
    return console.log("True");
  }
}
//validarNombre();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros = arregloFijo, numero=7) {
  comparar = 0;
  for(var i = 0; i < numeros.length; i++){
    if(numeros[i] == numero){
      comparar = comparar + i;
    }
  }
  return console.log(comparar);
}
//devolverPosicion();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

function verificarSector(econtact = objetoFijo, sector="Atención al público") {
  sectoresArreglo = econtact["datos"]["sectores"];
  comparar = 0;
  for(var i = 0; i < sectoresArreglo.length; i++){
    console.log(sectoresArreglo[i] + " : " +sector);
    if(sectoresArreglo[i] == sector){
      comparar = comparar + 1;
    }
  }
  if(comparar === 0){
    return console.log("False");
  }else{
    return console.log("True");
  }
}
//verificarSector();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleados(econtact = objetoFijo, cantidad=40) {
  let variableComparar = econtact["datos"]["sedes"];
  totalDeSedes = Object.keys(econtact["datos"]["sedes"])
  sumatoriaEmpleadosSedes = 0;
    for(var i = 0; i < totalDeSedes.length; i++){
      if(cantidad > variableComparar[totalDeSedes[i]]["empleados"]){
        sumatoriaEmpleadosSedes = sumatoriaEmpleadosSedes + 1;
      }
      
    }
    return console.log("La cantidad de sedes menor son: "+sumatoriaEmpleadosSedes);
}
verificarCantidadEmpleados();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */
const alumnoEjemplo = { nombre: 'Juan', edad: 35, profesion: 'programador' }
function verificarClave(objeto = alumnoEjemplo, clave="altura") {
  totalObjetos = Object.keys(objeto)
  comparar = 0;
  for(var i = 0; i < totalObjetos.length; i++){
    if(totalObjetos[i] == clave){
      comparar = comparar + 1;
    }
  }
  if(comparar === 0){
    return console.log("False");
  }else{
    return console.log("True");
  }
}
//verificarClave();
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(arregloNumerosReales = numerosReales) {
  let arregloNuevo = [];
  for(var i = 0; i < arregloNumerosReales.length; i++){
    arregloNuevo.push(Math.trunc(arregloNumerosReales[i]));
  }
  return console.log(arregloNuevo);
}
//quitarParteDecimal();
