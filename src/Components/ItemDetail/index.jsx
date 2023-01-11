import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import './style.css';

const ItemDetail = ({detail}) => {

    const [quantity, setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        console.log(`Se agregó una cantidad de productos: ${cantidad}`)
        setQuantity(cantidad)
    }

    return (
        <div className='cardItem'>
        <img src={detail.img} alt="Imagen del juego" className="itemImg"/>
        <div className='detailItem'>
            <h3 className='itemName'>{detail.nombre}</h3>
            <p className='itemPrecio'>{detail.precio}</p>
            {
                    quantity === 0 ?
                    <ItemCount 
                        stock={20} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-primary p-2">
                        <Link to="/cart">
                            Go cart
                        </Link>
                    </button>
                }
        </div>
    </div>
    )
}

export default ItemDetail