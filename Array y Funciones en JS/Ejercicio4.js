let catalogo = ["Remera", "Pantalón", "Campera", "Buzo"];

function actualizarPrenda(posicion, cantidadBorrar, nuevaPrenda) {
    if (posicion >= 0 && posicion < catalogo.length) {
        catalogo.splice(posicion, cantidadBorrar, nuevaPrenda);
    } else {
        console.log("La posición indicada está fuera del rango de la lista");
    }
}

actualizarPrenda(2, 1, "Vestido"); // Prueba: Reemplazar "Campera" (índice 2) por "Vestido"
actualizarPrenda(5, 2, "Corbata");
console.log(catalogo);