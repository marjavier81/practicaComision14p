//Creación del Array del Menú de Cafetería

const menuCafeteria = [
  "Café Espresso Clásico",
  "Café Doble Ristretto",
  "Café Americano Intenso",
  "Café Espresso Macchiato",
  "Café Cappuccino Italiano",
  "Café Latte Saborizado Vainilla",
  "Café Flat White Doble Shot",
  "Café Mocha ChocoBlanco",
  "Café Cold Brew Artesanal 24hs",
  "Té Hebras Verde Matcha Premium",
  "Té Hebras Chai Latte Especiado",
  "Té Hebras Earl Grey Bergamota",
  "Submarino Chocolate Artesanal",
  "Medialuna de Manteca Tradicional",
  "Medialuna de Grasa Crocante",
  "Croissant Relleno Nutella",
  "Croissant Jamón y Queso Horneado",
  "Tostado Mixto en Pan de Campo",
  "Avocado Toast Huevo Poché",
  "Muffin de Arándanos y Limón",
  "Muffin Chocolate con Chips",
  "Scone Tradicional de Vainilla",
  "Tarta Carrot Cake Nuez",
  "Tarta Cheesecake de Frutos Rojos",
  "Tarta Lemon Pie Merengue",
  "Alfajor Artesanal de Dulce de Leche",
  "Cookie de Avena y Pasas",
  "Cookie Red Velvet Rellena",
  "Jugo Natural Naranja Exprimido",
  "Jugo Licuado Frutilla y Banana"
];

// Punto 1: Visualización del Menú

function mostrarMenu() {
    menuCafeteria.forEach((product, index) => {
        console.log(`${index + 1} - ${product}`);
    });
}

mostrarMenu();

// Punto 2: Códigos de Menú y Precios Estimados

function generarCodigosMenu() {
    return menuCafeteria.map((product, index) => {
        // Prefijo: primeras 3 letras sin tildes, en mayúsculas (Café -> CAF)
        const prefijo = product
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ")[0]        // primera palabra
            .slice(0, 3)
            .toUpperCase();
        
        //Número único: base 101 + índice
        const numero = 101 + index;

        return `${prefijo}-${numero} - ${product}`;
    });
}

const menuConCodigos = generarCodigosMenu();
console.log(menuConCodigos);

// Punto 3: Incorporación de Nuevos Productos

function agregarAlFinal(product) {
    menuCafeteria.push(product);
    console.log(menuCafeteria);
}

agregarAlFinal("Latte Mochiatto");

function agregarAlInicio(product) {
    menuCafeteria.unshift(product);
    console.log(menuCafeteria);
}

agregarAlInicio("Té Verde");

function insertarEnPosicion(index, product) {
    menuCafeteria.splice(index, 0, product);
    console.log(menuCafeteria);
}

insertarEnPosicion(1, "Té de Frutos Rojos");

//Punto 4: Actualización de Elemento del Menú

function actualizarProducto(nombreBuscado, nuevoNombre) {
    const indice = menuCafeteria.findIndex(
        (product) => product.toLowerCase() === nombreBuscado.toLowerCase()
    );

    if (indice === -1) {
        console.log(`No se encontró el producto ${nombreBuscado} en el menú.`);
        return;
    }

    const anterior = menuCafeteria.splice(indice, 1, nuevoNombre);
    console.log(`Se reemplazó ${anterior[0]} por ${nuevoNombre}.`)
    console.log(menuCafeteria);
}

actualizarProducto("café doble ristretto", "Latte Caramel Mochiatto");
actualizarProducto("hamburguesa","Té de Hierbas");

