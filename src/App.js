import React from 'react'
import { getFirestoreApp } from './components/firebase/dbConfig'
import { CartContextProvider } from './components/Context/CarContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import CartContainer from './components/Pages/CartContainer/CartContainer'
import CategoryContainer from './components/Pages/CategoryContainer/CategoryContainer'
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer'
import PaymentContainer from './components/Pages/PaymentContainer/PaymentContainer'

getFirestoreApp()

function App() {
  return (
    <CartContextProvider >
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/categoria/:idCategoria' element={ <CategoryContainer />}/>
          <Route exact path='/item/:idItem' element={<ItemDetailContainer />}/>
          <Route exact path='/cart' element={<CartContainer />}/> 
          <Route exact path='/payment' element={<PaymentContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App; 

/*
Falta
- Categorías, Nosotros, Contacto, Finalizar compra
- Cargar más productos
- Filtros en los productos
- Favoritos
*/