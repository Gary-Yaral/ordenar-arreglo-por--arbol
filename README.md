# Libreria que ordena un arreglo usando arboles binarios

Esta libreria te permite organizar un arreglo segun los parametros que le pases, todo esto gracias a la recursividad que tienen los arboles binarios, además te permite quitar todos los elementos repetidos del arreglo

Aqui te muestro como usarla

``` javascript
 const data = [
  {name: "Maria"},
  {name: "Pedro"},
  {name: "Carlos"},
  {name: "Rodrigo"},
 ]
 
 /* Usamos la función orderArray el cual devuelve un arbol binario */
 const tree = orderArray(data, "minmax", "reverse", (value, root) => [
  value.name,
  root.name
])

// Obtenemos el arreglo ordenado
const array = tree.getArray("inOrder")
```
