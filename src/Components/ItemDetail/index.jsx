import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../Context/ShopProvider";
import ItemCount from "../ItemCount";
import './style.css';

const ItemDetail = ({detail}) => {

    const [quantity, setQuantity] = useState(0)

    const {addGame} = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`Se agregó una cantidad de productos: ${cantidad}`)
        setQuantity(cantidad);
        addGame({...detail, quantity: cantidad})
        
    }

    return (
        <div className='cardItem'>
        <img src={detail.img} alt="Imagen del juego" className="itemImg"/>
        <div className='detailItem'>
            <h3 className='itemName'>{detail.nombre}</h3>
            <h3 className='itemDesc'>{detail.description}</h3>
            <p className='itemPrecio'>{detail.precio}</p>
            <h2> EN STOCK: {detail.cant}</h2>
            {
                    quantity === 0 ?
                    <ItemCount 
                        stock={detail.cant}
                        initial={0}                        
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn">
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