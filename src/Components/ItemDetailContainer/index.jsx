import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/index';
import juegos from '../../Data/games.json';
import './style.css';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const {id} = useParams()
  useEffect(()=> {
      const obtainGame = () => {

      const juegoObtenido = new Promise((res, rej) => {
      setTimeout(()=> {
          res(juegos)
      }, 3000)
      })

      juegoObtenido
      .then( response => {
          if (id) { 
          const gamebyCategory = response.find(response => response.id === parseInt(id)) 
          console.log(gamebyCategory) 
          setDetail(gamebyCategory) 
      }
      })
      .catch(error => 
          console.log(error)
          )
  }
  obtainGame()
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