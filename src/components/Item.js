import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from '../pages/Menu'
import Order from './Order'
import foods from './Data'
import {React, useState, useEffect} from 'react'
//import {getProducts} from '../services/getRequests'

const allcategories = ['all', ...new Set(foods.map((food) => food.category))];

export default function Item() {
    const [dish, setDish] = useState(foods)
    const [categories, setCategories] = useState(allcategories)

    // useEffect(() => {
    //     getProducts()
    //     .then(res => setDish(res, data))
    // }, [])
    //     console.log(dish)


    const filterItems = (category) => {
        if (category === allcategories) {
            setDish(foods)
            return;
        }
        const newFoods = foods.filter((food) => food.category === category)
        setDish(newFoods)
    }

    return (
        <div>
            <section>
                <div>
                    <h2>Our Menu</h2>
                    <div> </div>
                </div>
                <Order categories={categories} filterItems={filterItems} />
                <Menu foods={dish}/>
            </section>
        </div>
    )
}
