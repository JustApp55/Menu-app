import '../App.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, deleteProduct } from '../services/getRequests'


export default function Show() {
const nav = useNavigate()
const {id} = useParams()
const [order, setOrder] = useState({})

useEffect(() => {
    getProduct(id)
    .then(res => setOrder(res.data))
}, [])
//console.log(order)

const deleteTheProduct = () => {
    deleteProduct(id)
    nav('/')
}

    return (
        <div className="show">
            <h1 className="order">Your Order</h1>
                   {/* <div className="showd"> */}

              <img style={{height:'400px', width: '400px'}} src={order.img} alt=""/> <br/>
              <h3 className="ot">{order.title}</h3> 
              <h3 className="op">{order.price}</h3> <br/>

                    {/* </div> */}
            <button onClick={() => {nav(`/${id}/edit`)}} className="ed">Edit Order</button>
            <button onClick={deleteTheProduct} className="del">Delete</button>
        </div>
    )
}

