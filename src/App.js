import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route exact path='/' element={<ItemListContainer titulo="Nuestros Productos" />}/>
        <Route exact path='/categoria/:idCategoria' element={ <ItemListContainer titulo = "Nuestros Productos" />}/>
        <Route exact path='/item/:idItem' element={<ItemDetailContainer />}/>
        <Route exact path='/cart' element={<Cart />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
