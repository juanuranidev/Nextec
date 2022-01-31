import React from 'react'
import { getFirestoreApp } from './components/Firebase/dbConfig'
import { CartContextProvider } from './components/Context/CarContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer'
import CategoryContainer from './components/Pages/CategoryContainer/CategoryContainer'
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/Pages/CartContainer/CartContainer'
import PaymentContainer from './components/Pages/PaymentContainer/PaymentContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"/> 
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