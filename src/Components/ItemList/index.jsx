import React from 'react'
import Item from '../Item'
import './style.css';

const ItemList = ({productos}) => {
return (
    <div className='pagina'>
        {productos.map(producto => {
            return <Item game={producto} key={producto.id}/>
        })}
    </div>
)
}

export default ItemList