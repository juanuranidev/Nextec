import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return <>
    <Header />
    <ItemListContainer titulo = "Nuestros Productos" />
    <ItemDetailContainer />
  </>
}

export default App;
