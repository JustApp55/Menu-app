import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../services/getRequests'

export default function Create() {
    const nav = useNavigate()
    const createTheProduct = e => {
        e.preventDefault()
        const product = {
            title: e.target.title.value,
            category: e.target.category.value,
            price: e.target.price.value,
            img: e.target.img.value,
            desc: e.target.desc.value
        }
        console.log(product)
        createProduct(product)
        nav('/')
    }

    return (
        <div className="create">
            <h1 className="crr">Create Food Item</h1>
            <form onSubmit={createTheProduct} id="new">
                Title: <input type='text' name='title'/> <br/>
                Category: <input type='text' name='category'/> <br/>
                Price: <input type='text' name='price'/> <br/>
                Image: <input type='text' name='img'/> <br/>
                Description: <input type='text' name='desc'/> <br/> <br/>
                    <input type='submit' value='New Product' />
            </form>
            
        </div>
    )
}
