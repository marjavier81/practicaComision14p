let listaDeSuper = ["Galletas", "Jugo", "Yogur", "Frutas"];

function reemplazarElemento(lista, indice, nuevoValor) {
    if (indice < lista.length && indice >= 0) {
        lista[indice] = nuevoValor;
        console.log(lista);
        }
    else {
        console.log("Indice fuera de rango");
    }
}
reemplazarElemento(listaDeSuper, 1, "Agua Mineral"); // Reemplaza "Jugo" por "Agua Mineral"
reemplazarElemento(listaDeSuper, 10, "Chocolate"); // Muestra: "Indice fuera de rango"
console.log(listaDeSuper);
