import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

function Item({game}) {
    return (
    <div className='cardItem'>
        <img src={game.img} alt="Imagen del juego" className="itemImg"/>
        <div className='detailItem'>
            <h3 className='itemName'>{game.title}</h3>
            <p className='itemPrecio'>${game.price}</p>
            <Link to={`/detail/${game.id}`} className="btnItem">More Info</Link>
        </div>
    </div>
    )
}

export default Item