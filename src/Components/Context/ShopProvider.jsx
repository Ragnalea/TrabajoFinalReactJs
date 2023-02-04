import React, { useState } from 'react'
import { createContext } from "react";

export const Shop = createContext()

const ShopProvider = ({children}) => {

    const [games, setGames] = useState([])
    
    const addGame = (game) =>{
        const gameCart = gameInCart(game.id)
        if(gameCart){
            const updateCount= games.find(x => x.id === game.id)
            updateCount.quantity += game.quantity
            setGames([...games])
        }else{   
            setGames([...games, game])
            
        }
    }

const countGame = () => {
    let cantTot = 0;
    for (const juego of games){
        cantTot += juego.quantity
    }
    return cantTot
}

const gameInCart = (id) => {
    return games.some(x => x.id === id)
}

const total = () => {
    let total = 0;
    for (const detail of games) {
        total += detail.price * detail.quantity
    }
    return total;
}
const
cleanCart = () => {
    setGames([])
}

const removeGame = (id) => {
    const productsFiltered = games.filter(product => product.id !== id);
    setGames(productsFiltered)
}

return (
    <Shop.Provider value = {{games, addGame, countGame, total, cleanCart, removeGame}}>
        {children}
    </Shop.Provider>
    )
}

export default ShopProvider