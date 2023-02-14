import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesContextProvider } from './Context/FavoritesContext';
import { ToastContainer, Zoom } from 'react-toastify';
import { CartContextProvider } from './Context/CartContext';
import { getFirestoreApp } from './Firebase/dbConfig';
import About from './Views/AboutContainer/About';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import PageNotFound from './Views/PageNotFound/PageNotFound';
import MainContainer from './Views/Main/Main';
import CartContainer from './Views/CartContainer/CartContainer';
import PaymentContainer from './Views/PaymentContainer/PaymentContainer';
import ContactContainer from './Views/ContactContainer/ContactContainer'
import CategoryContainer from './Views/CategoryContainer/CategoryContainer';
import FavoritesContainer from './Views/FavoritesContainer/FavoritesContainer';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import Products from './Views/Products/Products';
import './styles/_base.scss';
import 'react-toastify/dist/ReactToastify.css';

getFirestoreApp()

function App() {
  return (
    <FavoritesContextProvider>
      <CartContextProvider >
        <BrowserRouter>
          <Navbar/>
          <Routes> 
            <Route exact path='/' element={<MainContainer />}/>
            <Route exact path='/products' element={<Products />}/>
            <Route exact path='/category/:idCategory' element={ <CategoryContainer />}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<ContactContainer />}/>
            <Route exact path='/products/:idItem' element={<ItemDetailContainer />}/>
            <Route exact path='/favorites' element={<FavoritesContainer />}/>
            <Route exact path='/cart' element={<CartContainer />}/> 
            <Route exact path='/payment' element={<PaymentContainer />} />
            <Route exact path='/*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer 
          position="bottom-right" 
          autoClose={4000} 
          hideProgressBar={true} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover={false} 
          theme="colored" 
          transition={Zoom} 
          limit={3}
        /> 
      </CartContextProvider>
    </FavoritesContextProvider>
  )
}

export default App; 