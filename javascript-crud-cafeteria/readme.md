# ☕ CRUD de Menú de Cafetería

Aplicación de consola en **JavaScript (ES6+)** para gestionar el menú de una cafetería especializada. El proyecto implementa las operaciones CRUD y otras utilidades de consulta, ordenamiento y transformación, usando exclusivamente **métodos de arrays**.

> Trabajo Práctico Integrador · Gestión e iteración de arrays de strings.

---

## 📋 Tabla de contenidos

- [Objetivo](#-objetivo)
- [Restricción clave](#-restricción-clave)
- [Tecnologías](#-tecnologías)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Estructura de datos](#-estructura-de-datos)
- [Funcionalidades](#-funcionalidades)
- [Métodos de array utilizados](#-métodos-de-array-utilizados)
- [Ejemplos de uso](#-ejemplos-de-uso)
- [Autor](#-autor)

---

## 🎯 Objetivo

Afianzar el dominio práctico de los arrays en JavaScript mediante una aplicación que permite:

- Visualizar el menú y generar códigos de producto.
- Agregar, actualizar y eliminar productos.
- Buscar y filtrar productos por término o categoría.
- Ordenar la carta, crear copias de respaldo y fusionar menús especiales.
- Validar el contenido del menú con métodos de orden superior.

## 🚫 Restricción clave

**No se utilizan objetos (`{}`) para modelar los datos.** Todo el menú se mantiene en un único array unidimensional de strings (`string[]`).

## 🛠️ Tecnologías

- JavaScript estándar (ES6+)
- [Node.js](https://nodejs.org/) para ejecutar el código desde la consola

## 🚀 Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone <https://github.com/marjavier81/practicaComision14p/tree/main/javascript-crud-cafeteria>

# 2. Entrar a la carpeta del proyecto
cd <javascript-crud-cafeteria>

# 3. Ejecutar el archivo principal
node app.js
```

## 🗂️ Estructura de datos

El menú base es un array de 30 productos:

```javascript
const menuCafeteria = [
  "Café Espresso Clásico",
  "Café Doble Ristretto",
  // ...
  "Jugo Licuado Frutilla y Banana"
];
```

Además, se define un menú de temporada que se fusiona con el principal:

```javascript
const menuTemporada = [
  "Smoothie Menta y Limón",
  "Frappé Caramelo Crocante",
  "Waffle con Dulce de Leche"
];
```

## ✨ Funcionalidades

### 1. Visualización del menú (Read)

| Función | Método | Descripción |
|---------|--------|-------------|
| `mostrarMenu()` | `forEach` | Imprime cada producto numerado según su índice. |
| `generarCodigosMenu()` | `map` | Devuelve un nuevo array con un código único por producto (ej.: `CAF-101 - Café Cappuccino Italiano`). |

### 2. Alta de productos (Create)

| Función | Método | Descripción |
|---------|--------|-------------|
| `agregarAlFinal(item)` | `push` | Agrega un producto al final del menú. |
| `agregarAlInicio(item)` | `unshift` | Agrega un producto al inicio del menú. |
| `insertarEnPosicion(indice, item)` | `splice` | Inserta un producto en una posición específica. |

### 3. Actualización de productos (Update)

| Función | Método | Descripción |
|---------|--------|-------------|
| `actualizarProducto(nombreBuscado, nuevoNombre)` | `findIndex` + `splice` | Busca el producto sin distinguir mayúsculas/minúsculas y reemplaza su nombre. Informa si no se encontró. |

### 4. Baja de productos (Delete)

| Función | Método | Descripción |
|---------|--------|-------------|
| `eliminarUltimo()` | `pop` | Elimina el último producto. |
| `eliminarPrimero()` | `shift` | Elimina el primer producto. |
| `eliminarPorNombre(nombreBuscado)` | `findIndex` + `splice` | Elimina exactamente un producto según su nombre. |

### 5. Búsqueda y filtrado

| Función | Método | Descripción |
|---------|--------|-------------|
| `buscarPrimerMatch(termino)` | `find` | Devuelve la primera coincidencia que contenga el término buscado. |
| `filtrarPorCategoria(categoria)` | `filter` | Devuelve los productos de una categoría (`Café`, `Té`, `Tarta`, `Croissant`, `Muffin`), ignorando mayúsculas/minúsculas. |

### 6. Ordenamiento

| Función | Método | Descripción |
|---------|--------|-------------|
| `ordenarCarta(modo)` | `sort` / `sort` + `reverse` | Ordena el menú de A a Z o de Z a A y muestra el resultado por consola. |

### 7. Resumen e integración de menús

| Operación | Método | Descripción |
|-----------|--------|-------------|
| Copia de seguridad | `slice` | Genera una copia independiente del menú. |
| Unión con el menú de temporada | `concat` | Combina `menuCafeteria` y `menuTemporada` en un nuevo array. |
| Resumen en texto | `reduce` | Genera un único string con todos los productos separados por comas o saltos de línea. |

### 8. Validaciones

| Operación | Método | Descripción |
|-----------|--------|-------------|
| Existe algún producto "Artesanal" | `some` | Devuelve `true` si al menos un producto contiene la palabra buscada. |
| Todos los nombres tienen más de 4 caracteres | `every` | Devuelve `true` si todos los productos cumplen la condición. |

## 🧰 Métodos de array utilizados

| Operación | Métodos |
|-----------|---------|
| **Create** | `push()`, `unshift()`, `splice()` |
| **Read** | `forEach()`, `map()`, `find()`, `filter()` |
| **Update** | `findIndex()`, `splice()` |
| **Delete** | `pop()`, `shift()`, `splice()` |
| **Utilidades** | `sort()`, `reverse()`, `reduce()`, `slice()`, `concat()`, `some()`, `every()` |

## 💡 Ejemplos de uso

```javascript
mostrarMenu();
// 1 - Café Espresso Clásico
// 2 - Café Doble Ristretto
// ...

filtrarPorCategoria('tarta');
// ['Tarta Carrot Cake Nuez', 'Tarta Cheesecake de Frutos Rojos', 'Tarta Lemon Pie Merengue']

ordenarCarta('asc');   // A → Z
ordenarCarta('desc');  // Z → A

const menuCompleto = menuCafeteria.concat(menuTemporada);
console.log(menuCompleto.length); // 33
```

## 👤 Autor

**Martin Javier Veliz**
[GitHub](https://github.com/marjavier81) · [LinkedIn](https://www.linkedin.com/in/martin-javier-veliz)

---

*Proyecto realizado con fines educativos como Trabajo Práctico Integrador.*