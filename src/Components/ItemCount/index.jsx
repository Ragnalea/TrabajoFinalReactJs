import React, { useState } from "react";
import './style.css';

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onSubtract = () => {
        if (count > initial) setCount(count - 1);
    }; 
    
    return (
        <div>
            <button className="btn" onClick={onSubtract}>-</button>
            <span>{count}</span>
            <button className="btn" onClick={onPlus}>+</button>
            <button className="btn" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount