import React, { useContext } from 'react'
import { Shop } from '../Context/ShopProvider'

const TableRow = ({games}) => {

    const {removeGame} = useContext(Shop);

return (
    <tr>
        <th className='col'>{games.id}</th>
        <td><img src={games.img} alt="img del juego" className='col imgCart'/></td>
        <td className='col title'>{games.title}</td>
        <td className='col price'>{games.price}</td>
        <td className='col quantity'>{games.quantity}</td>
<td><button onClick={()=>removeGame(games.id)} className ='col btnDel'>X</button></td>
    </tr>
)
}

export default TableRow