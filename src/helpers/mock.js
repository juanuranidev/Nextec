// Base de datos de productos
const productos = [
    {"id": 1, "titulo" : "producto1", "foto": "test.jpg", "stock" : 1},
    {"id": 2, "titulo" : "producto2", "foto": "test.jpg", "stock" : 2},
    {"id": 3, "titulo" : "producto3", "foto": "test.jpg", "stock" : 4},
    {"id": 4, "titulo" : "producto4", "foto": "test.jpg", "stock" : 12},
    {"id": 5, "titulo" : "producto5", "foto": "test.jpg", "stock" : 4},
    {"id": 6, "titulo" : "producto6", "foto": "test.jpg", "stock" : 2} 
]


// Promesa, nos simula la sincronicidad y el retardo de la red para devolvernos los productos de una base de datos. mock:simulación
export const getFetch = new Promise((resolve, reject) => {
    
    let condicion = true
    if(condicion) {
        setTimeout(() => resolve(productos), 3000)
    } else {
        reject('error')
    }
})