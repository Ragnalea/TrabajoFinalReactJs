import React from 'react'
import bienvenida from '../../imgLanding/bienvenida.jpg'
import './style.css'

const landing = () => {

return (

    <div className='landingImg'>
        <img src={bienvenida} alt="presentacion"/>
    </div>

)
}

export default landing