import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import{Routes, Route, BrowserRouter} from 'react-router-dom'
import ShopProvider from './Components/Context/ShopProvider';
import Cart from './Components/CartContainer/index';
import Landing from './Containers/Landing/Index';

function App() {
  return (  
    <ShopProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing/>}/> 
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='*' element={<h2>Ruta no encontrada</h2>}/> 
        </Routes>   
      </BrowserRouter>  
      </ShopProvider>
  );
}

export default App;
