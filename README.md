# Libreria que ordena un arreglo usando arboles binarios

Con esta pequeña libreria podrás organizar un arreglo según los parametros que le pases. Todo esto es gracias a la recursividad que tienen los arboles binarios, ya que no solo ordena el array sino que tambien te permite quitar todos los elementos repetidos.

### Aqui te muestro como usarla

``` javascript
 const data = [
  {name: "Maria"},
  {name: "Pedro"},
  {name: "Carlos"},
  {name: "Rodrigo"},
 ]
 
 /* Usamos la función orderArray la cual devuelve un arbol binario */
 const tree = orderArray(data, "normal", (value, root) => [
  value.name,
  root.name
])

/* Obtenemos el arreglo ordenado */
const array = tree.getArray("inOrder")

/* Hacemos un console.log() */
console.log(array)
```
En consola se debe mostrar los siguiente:

```console
[
  { name: 'Carlos' },
  { name: 'Karen' },
  { name: 'Maria' },
  { name: 'Pedro' },
  { name: 'Rodrigo' }
]
```

### Que parámetros recibe la función orderArray()
**PRIMERO:** El array que se ordenará
**SEGUNDO:** El tipo de ordanamiento del árbol, los cuales pueden ser ``` "normal" ``` y ``` "reverse" ```. Cuando asignamos ``` "normal" ``` el arbol se irá llenando siempre de izquierda a derecha y en caso de que sea "reverse" entonces se llenará de derecha a izquierda. Hay que tener en cuenta que el ordenamiento influye en el ordanamiento del array que generará el árbol. 
**TERCERO:** Se debe pasar un callback (el cual recibe dos parámetros) que retorne un arreglo con los valores a comparar, en caso de que el arreglo contenga objetos se debe retornar la propiedad a comparar. 
**CUARTO:** Este parametro es un booleano, dicho booleano servirá para indicar si se desea generar un arreglo con valores repetidos o no, por defecto este valor está en false, por lo que se si no desea eliminar los repetidos no es necesario pasarlo, pero si desea eliminarlos, entonces debe pasar un ``` true ```

### Valores que recibe el método getArray()
 "minmax": Ordenar de menor a mayor.
 "maxmin": Ordenar de mayor a menor.
 "inOrden": Aplica el ordenamiento inOrder de un árbol binario.
 "preOrder": Aplica el ordenamiento preOrder de un árbol binario.
 "postOrder": Aplica el ordenamiento postOrder de un árbol binario.

Si deseas que el arreglo que se generará no tenga valores repetidos aquí tienes un ejemplo:

``` javascript
 const data = [
  {name: "Maria"},
  {name: "Pedro"},
  {name: "Maria"},
  {name: "Carlos"},
  {name: "Rodrigo"},
  {name: "Maria"},
  {name: "Rodrigo"},
  {name: "Karen"},
 ]
 
 /* Usamos la función orderArray el cual devuelve un arbol binario, pero esta vez pasamos el último parámetro en true */
 const tree = orderArray(data, "normal", (value, root) => [
  value.name,
  root.name
], true)

/* Obtenemos el arreglo ordenado */
const array = tree.getArray("inOrder")

/* Hacemos un console.log() */
console.log(array)
```
En consola se debe mostrar los siguiente:

```console
 [
  { name: 'Carlos' },
  { name: 'Maria' },
  { name: 'Pedro' },
  { name: 'Rodrigo' }
]
```



