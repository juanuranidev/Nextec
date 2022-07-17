import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesContextProvider } from './Components/Context/FavoritesContext';
import { ToastContainer, Zoom } from 'react-toastify';
import { CartContextProvider } from './Components/Context/CartContext';
import { getFirestoreApp } from './Components/Firebase/dbConfig';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/NavBar';
import Navbar from './Components/Navbar/Navbar2'
import PageNotFound from './Components/Views/PageNotFound/PageNotFound';
import MainContainer from './Components/Views/Main/Main';
import CartContainer from './Components/Views/CartContainer/CartContainer';
import AboutContainer from './Components/Views/AboutContainer/AboutContainer';
import PaymentContainer from './Components/Views/PaymentContainer/PaymentContainer';
import ContactContainer from './Components/Views/ContactContainer/ContactContainer'
import CategoryContainer from './Components/Views/CategoryContainer/CategoryContainer';
import FavoritesContainer from './Components/Views/FavoritesContainer/FavoritesContainer';
import ItemDetailContainer from './Components/Views/ItemDetailContainer/ItemDetailContainer';
import './styles/_base.scss';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Components/Views/Products/Products';

getFirestoreApp()

function App() {
  return (
    <FavoritesContextProvider>
      <CartContextProvider >
        <BrowserRouter>
          {/* <NavBar /> */}
          <Navbar/>
          <Routes> 
            <Route exact path='/' element={<MainContainer />}/>
            <Route exact path='/products' element={<Products />}/>
            <Route exact path='/category/:idCategory' element={ <CategoryContainer />}/>
            <Route exact path='/about' element={<AboutContainer/>}/>
            <Route exact path='/contact' element={<ContactContainer />}/>
            <Route exact path='/item/:idItem' element={<ItemDetailContainer />}/>
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