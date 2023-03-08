import React from "react";
import { getFirestoreApp } from "./Firebase/dbConfig";
import { CartContextProvider } from "./Context/CartContext";
import { ToastContainer, Zoom } from "react-toastify";
import { FavoritesContextProvider } from "./Context/FavoritesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentContainer from "./Views/PaymentContainer/PaymentContainer";
import MainContainer from "./Views/Main/Main";
import PageNotFound from "./Views/PageNotFound/PageNotFound";
import ItemDetail from "./Views/ItemDetail/ItemDetail";
import Favorites from "./Views/Favorites/Favorites";
import Products from "./Views/Products/Products";
import Contact from "./Views/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Views/Cart/Cart";
import "./Assets/Scss/Base.scss";
import "react-toastify/dist/ReactToastify.css";

getFirestoreApp();

function App() {
  return (
    <FavoritesContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<MainContainer />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/products/:idItem" element={<ItemDetail />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/payment" element={<PaymentContainer />} />
            <Route exact path="/*" element={<PageNotFound />} />
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
  );
}

export default App;
