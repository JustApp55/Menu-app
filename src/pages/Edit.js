import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useParams } from 'react-router-dom'
import {React, useState, useEffect} from 'react'
import { editProduct, getProduct } from '../services/getRequests'

export default function Edit() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getProduct(id)
        .then(res => setData(res.data))
    }, [])
    //console.log(data)

    const editTheProduct = e => {
        e.preventDefault()
        console.log("editProduct")
        let updatedProduct = {
            title: e.target.title.value,
            category: e.target.category.value,
            price: e.target.price.value,
            img: e.target.img.value,
            desc: e.target.desc.value
        }
        console.log(updatedProduct)
        editProduct(id, updatedProduct)
        nav(`/${id}`)
    }


    return (
        <div className="edit">
            <h1 className="efi">Edit Food Item</h1>
            <form onSubmit={editTheProduct} id="edprod">
                Title: <input type='text' name='title' defaultValue={data.title} /> <br/>
                Category: <input type='text' name='category' defaultValue={data.category} /> <br/>
                Price: <input type='text' name='price' defaultValue={data.price} /> <br/>
                Image: <input type='text' name='img' defaultValue={data.img} /> <br/>
                Description: <input type='text' name='desc' defaultValue={data.desc} /> <br/> <br/>
                  <input type='submit' value='update product' />
            </form>
            
        </div>
    )
}
