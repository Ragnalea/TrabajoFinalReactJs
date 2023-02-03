import React, { useContext, useState } from 'react'
import { Shop } from '../Context/ShopProvider';
import generateOrder from '../Service/generateOrder';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import FormComp from '../../Components/Form/index';
import TableRow from './TableProduct'
import './style.css';

const Cart = () => {

  const {games, total, cleanCart} = useContext(Shop);

  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  const confirmPurchase = async (dataDelFormulario) => {
    const {phone, nombre, email} = dataDelFormulario
    try {
    setLoader(true);

    const order = generateOrder({
        nombre,
        email,
        phone,
        cart: games,
        total: total()
    })

    const docRef = await addDoc(collection(db, "orders"), order);
    cleanCart()

    for (const gameCart of games) {
        const productRef = doc(db, "games", gameCart.id);
        await updateDoc(productRef, {
        cant: gameCart.cant - gameCart.quantity
        });
    }

    alert("Su codigo de orden es: " + docRef.id);
    
    } catch (error) {
        console.log(error)
    } 
    setLoader(false);
    }

return (
    <>
    {   
        games.length !==0?
        <>
        <table className='table'>
          <thead>
            <tr>
                <th className='col'>id</th>
                <th className='col'>img</th>
                <th className='col'>title</th>
                <th className='col'>price</th>
                <th className='col'>quantity</th>
                <th className='col center'>remove</th>
            </tr>
          </thead>
            <tbody>
              {games.map(product => {
                return <TableRow key={product.id} games={product}/>
              })}
            </tbody>
        </table>
        {
            loader ?
            <h2>Loading...</h2>
            :
            <button onClick={()=> setFormVis(true)} className='btnBuy'>Confirm purchase</button>
          }
        </>
        :
        <>
          <h1>No hay productos en el carrito.</h1>
          <button>
            <Link to = "/">Home</Link>
          </button>
        </>
      }
      { formVis ? 
        <FormComp 
          confirmPurchase = {confirmPurchase}
          formVis = {formVis}
          setFormVis = {setFormVis}
        />
        : null
      }
    </>
  )
}
export default Cart