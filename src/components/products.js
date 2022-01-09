import Notebook1 from '../images/productos/notebookhp.png'

const products = [
    {id: "1", name : "Notebook HP 240 G8", price : 70000, stock : 10, image : Notebook1},
    {id: "2", name : "producto2", price : 60000, stock : 7, image : Notebook1},
    {id: "3", name : "producto3", price : 78000, stock : 4, image : Notebook1},
    {id: "4", name : "producto4", price : 32000, stock : 12, image : Notebook1},
    {id: "5", name : "producto5", price : 29000, stock : 4, image : Notebook1},
    {id: "6", name : "producto6", price : 20000, stock : 20, image : Notebook1} 
]

 // Promesa simulando una api
 export const getFetch = new Promise((resolve, reject) => {
    let condicion = true
    if(condicion) {
        setTimeout(() => resolve(products), 3000)
    } else {
        reject('error')
    }
})