/*
Ejercicio 1 - Strings
Crea un script JS que declare una variable y asígnale un string que sea una palabra en minúsculas.

Haz que el script ponga la primera letra de esa palabra en mayúsculas.
*/
let palabra = "michael";
console.log(palabra.charAt(0).toUpperCase() + palabra.slice(1));