import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import{Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (  
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h2>Ruta no encontrada</h2>}/> 
      </Routes>   
    </BrowserRouter>  
  );
}

export default App;
