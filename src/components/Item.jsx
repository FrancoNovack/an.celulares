import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Item = ({producto}) => {
  const navegar = useNavigate()
  return (
    <div>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.name}</p>
        <p>${producto.price},00</p>
        <Link className='btn btn-primary' to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  )
}

export default Item