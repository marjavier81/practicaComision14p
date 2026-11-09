const depositoA = ["Silla", "Mesa"];
const depositoB = ["Lámpara", "Sillón", "Placar"];

function unirYGuardarTop3(array1, array2) {
    const resultado = array1.concat(array2);
    const top3 = resultado.slice(0, 3);
    return top3;
}

const resultado = unirYGuardarTop3(depositoA, depositoB);
console.log(resultado);