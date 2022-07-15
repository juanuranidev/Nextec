import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesContextProvider } from './components/Context/FavoritesContext';
import { ToastContainer, Zoom } from 'react-toastify';
import { CartContextProvider } from './components/Context/CartContext';
import { getFirestoreApp } from './components/Firebase/dbConfig';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import Navbar from './components/Navbar/Navbar2'
import PageNotFound from './components/Views/PageNotFound/PageNotFound';
import MainContainer from './components/Views/Main/Main';
import CartContainer from './components/Views/CartContainer/CartContainer';
import AboutContainer from './components/Views/AboutContainer/AboutContainer';
import PaymentContainer from './components/Views/PaymentContainer/PaymentContainer';
import ContactContainer from './components/Views/ContactContainer/ContactContainer'
import CategoryContainer from './components/Views/CategoryContainer/CategoryContainer';
import FavoritesContainer from './components/Views/FavoritesContainer/FavoritesContainer';
import ItemDetailContainer from './components/Views/ItemDetailContainer/ItemDetailContainer';
import './styles/_base.scss';
import 'react-toastify/dist/ReactToastify.css';

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