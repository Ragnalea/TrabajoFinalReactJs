import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList';
import juegos from '../../Data/games.json';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const {categoryId}  = useParams()
    useEffect(()=> {


        const obtainGame = () => {

        const juegosObtenidos = new Promise((res, rej) => {
        setTimeout(()=> {
            res(juegos)
        }, 3000)
        })

        juegosObtenidos
        .then( response => {
            if (categoryId) { 
            const gameForCategory = response.filter(response => response.category === categoryId)
            setProducts(gameForCategory) 
        } else { 
            setProducts(response) 
        }
        })
        .catch(error => 
            console.log(error)
            )
    }
    obtainGame()

    }, [categoryId])

    console.log(products)
return (
    <div>
        <ItemList productos={products}/>
    </div>

)}

export default ItemListContainer