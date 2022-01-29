import React from 'react'
import { getFirestoreApp } from './components/firebase/dbConfig';
import { CartContextProvider } from './components/context/CarContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import NavBar from './components/navbar/NavBar';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import PaymentContainer from './components/PaymentContainer/PaymentContainer';

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
          <Route exact path='/cart' element={<Cart />}/> 
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