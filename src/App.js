import React from 'react';
import { getFirestoreApp } from './components/Firebase/dbConfig';
import { CartContextProvider } from './components/Context/CartContext';
import { FavoritesContextProvider } from './components/Context/FavoritesContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import NavBar from './components/Navbar/NavBar';
import MainContainer from './components/Pages/MainContainer/MainContainer';
import CategoryContainer from './components/Pages/CategoryContainer/CategoryContainer';
import AboutContainer from './components/Pages/AboutContainer/AboutContainer';
import ContactContainer from './components/Pages/ContactContainer/ContactContainer'
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import FavoritesContainer from './components/Pages/FavoritesContainer/FavoritesContainer';
import CartContainer from './components/Pages/CartContainer/CartContainer';
import PaymentContainer from './components/Pages/PaymentContainer/PaymentContainer';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import './styles/_base.scss';
import 'react-toastify/dist/ReactToastify.css';

getFirestoreApp()

function App() {
  return (
    <FavoritesContextProvider>
      <CartContextProvider >
        <BrowserRouter>
          <NavBar />
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
        <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="colored" transition={Zoom} limit={3}/> 
      </CartContextProvider>
    </FavoritesContextProvider>
  )
}

export default App; 