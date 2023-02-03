import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/index';
import './style.css';
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    const getGame = async () => {
      const docRef = doc(db, "games", id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const gameDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(gameDetail);
      } else {
        // doc.data() will be undefined in this case
        console.log("¡No existe el producto!");
      }
    }
    getGame();
  }, [id])

  return (
    <div>
      {
        Object.keys(detail).length=== 0
        ? <h3>Loading...</h3>
        :<ItemDetail detail={detail}/> 
      }      
    </div>
  )
}
export default ItemDetailContainer