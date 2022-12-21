import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (  
    <>
      <NavBar/>   
      <ItemListContainer greeting={"Bienvenido al Mundo Gamer"}/>
    </>  
  );
}

export default App;
