import Notebook1 from '../images/productos/notebooks/1.png'
import Notebook2 from '../images/productos/notebooks/2.png'
import Notebook3 from '../images/productos/notebooks/3.png'
import Notebook4 from '../images/productos/notebooks/4.png'
import Notebook5 from '../images/productos/notebooks/5.png'
import PlacaDeVideo6 from '../images/productos/placas de video/6.png'
import PlacaDeVideo7 from '../images/productos/placas de video/7.png'
import PlacaDeVideo8 from '../images/productos/placas de video/8.png'
import PlacaDeVideo9 from '../images/productos/placas de video/9.png'
import PlacaDeVideo10 from '../images/productos/placas de video/10.png'
import Computadora11 from '../images/productos/computadoras/11.png'
import Computadora12 from '../images/productos/computadoras/12.png'
import Computadora13 from '../images/productos/computadoras/13.png'
import Computadora14 from '../images/productos/computadoras/14.png'
import Computadora15 from '../images/productos/computadoras/15.png'





const products = [
    {id: "1",
    name : "NOTEBOOK HP 240 G8 I3 1005G1",
    price : 70000,
    stock : 10,
    categoria: "notebooks",
    image : Notebook1}, 

    {id: "2",
    name : "NOTEBOOK LENOVO V15 I3 7020U",
    price : 60000,
    stock : 7,
    categoria: "notebooks", 
    image : Notebook2},

    {id: "3",
    name : "NOTEBOOK APPLE MACBOOK PRO M1",
    price : 270000,
    stock : 4,
    categoria: "notebooks",
    image : Notebook3},
    
    {id: "4",
    name : "NOTEBOOK BANGHO MAX L4 I5",
    price : 85000,
    stock : 12,
    categoria: "notebooks",
    image : Notebook4},

    {id: "5",
    name : "NOTEBOOK ASUS ZENBOOK 14 I5",
    price : 150000,
    stock : 4,
    categoria: "notebooks",
    image : Notebook5},

    {id: "6",
    name: "Placa de video MSI Geforce GTX 1660",
    price: 145000,
    stock : 8,
    categoria: "placasdevideo",
    image : PlacaDeVideo6},

    {id: "7",
    name: "Placa de video MSI Geforce RTX 3060ti",
    price: 225000,
    stock : 14,
    categoria: "placasdevideo",
    image : PlacaDeVideo7},

    {id: "8",
    name: "Placa de video Palit Geforce RTX 3070",
    price: 235000,
    stock : 5,
    categoria: "placasdevideo",
    image : PlacaDeVideo8},

    {id: "9",
    name: "Placa de video Gigabyte Geforce RTX 3080ti",
    price: 455000,
    stock : 19,
    categoria: "placasdevideo",
    image : PlacaDeVideo9},

    {id: "10",
    name: "Placa de video Palit Geforce RTX 3080",
    price: 500000,
    stock : 27,
    categoria: "placasdevideo",
    image : PlacaDeVideo10},

    {id: "11",
    name: "PC INTEL CORE I3 9100 - SSD 240GB 8GB DDR4",
    price: 45000,
    stock : 5,
    categoria: "computadoras",
    image : Computadora11},
    
    {id: "12",
    name: "PC INTEL CORE I7 9700 - 8GB - 1TB - SSD 240GB",
    price: 80000,
    stock : 7,
    categoria: "computadoras",
    image : Computadora12},

    {id: "13",
    name: "PC AMD RYZEN 7 5700G 8GB SSD 240GB",
    price: 85000,
    stock : 8,
    categoria: "computadoras",
    image : Computadora13},

    {id: "14",
    name: "PC INTEL I7 10700K SSD 240GB 8GB + MONITOR 22'",
    price: 100000,
    stock : 3,
    categoria: "computadoras",
    image : Computadora14},

    {id: "15",
    name: "PC AMD GAMER RYZEN 3 3200G SSD 240GB 8GB",
    price: 55000,
    stock : 6,
    categoria: "computadoras",
    image : Computadora15},
]

 // Promesa simulando una api
 export const getFetch = new Promise((resolve, reject) => {
    let condicion = true
    if(condicion) {
        setTimeout(() => resolve(products), 1000)
    } else {
        reject('error')
    }
})