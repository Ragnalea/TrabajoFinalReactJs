import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList';
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore"; 
const ItemListContainer = ({greeting}) => {

    const [games, setGames] = useState([])

    const {categoryId}  = useParams()

    useEffect(()=> {

    const getGame = async() => { 
        let querySnapshot
        if (categoryId) {
            const q = query(collection(db, "games"), where("category", "==", categoryId));
            querySnapshot = await getDocs(q);
        }else{
            querySnapshot = await getDocs(collection(db,"games"));
        }
            const fireGames = [];
            querySnapshot.forEach((doc) => {
            const game ={
                id: doc.id,
                ...doc.data()
            }
            fireGames.push(game)
        });
        setGames(fireGames)
    }
    getGame();
}, [categoryId])

return (
    <div>
        <ItemList productos={games}/>
    </div>

)}

export default ItemListContainer