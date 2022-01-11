import Notebook1 from '../images/productos/notebookhp.png'

const products = [
    {id: "1", name : "Notebook HP 240 G8", price : 70000, categoria: "notebooks", stock : 10, image : Notebook1},
    {id: "2", name : "Notebook HP 240 G8", price : 60000, categoria: "notebooks", stock : 7, image : Notebook1},
    {id: "3", name : "Notebook HP 240 G8", price : 78000, categoria: "celulares", stock : 4, image : Notebook1},
    {id: "4", name : "Notebook HP 240 G8", price : 32000, categoria: "celulares", stock : 12, image : Notebook1},
    {id: "5", name : "Notebook HP 240 G8", price : 29000, categoria: "computadoras", stock : 4, image : Notebook1},
    {id: "6", name : "Notebook HP 240 G8", price : 20000, categoria: "computadoras", stock : 20, image : Notebook1} 
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