let carrito = ["Pan", "Leche", "Café"];
function agregarAlCarrito(producto) {
    carrito.push(producto);
    let cantidad = carrito.length
    console.log(`El producto ${producto} fué agregado al carrito. Total de productos: ${cantidad}.`);
}

agregarAlCarrito("Queso");

