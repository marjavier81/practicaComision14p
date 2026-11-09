let filaBanco = ["Ana", "Carlos", "Beatriz"];
function atenderCliente() {
    let eliminado = filaBanco.shift();
    console.log(`Atendiendo a ${eliminado}`);
}

function colarClienteUrgente(nombre) {
    filaBanco.unshift(nombre);
}

colarClienteUrgente("Julieta");
atenderCliente();
atenderCliente();