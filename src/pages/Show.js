import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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


const deleteTheProduct = () => {
    deleteProduct(id)
    nav('/')
}

    return (
        <div >
        <div className="show text-center">
            <h1 className="one">Show Page</h1>
          <div className=" row col d-flex justify-content-center" >
              <div className="col-sm-3">
                <div className=" ">
                  <div className="card ax-auto" >

              <img  src={order.img} className="card-img-top" alt=" "/> <br/>
              <div className="card-body">
                <h3 className="card-title">{order.title}</h3> 
                <h3 className="card-price">{order.price}</h3> 
                 <p className="card-text">{order.desc}</p> <br/>

                    
                 <button onClick={() => {nav(`/${id}/edit`)}} className="ed mb-3">Edit Order</button>
                 <button onClick={deleteTheProduct} className="del mb-3">Delete</button>
             </div>
                 </div>
                   </div>
                </div>
          </div>
        </div>
        </div>
    )
}

