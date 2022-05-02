import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {lists} from '../pages/Data'
import {useState} from 'react'


export default function Order({categories}) {
    // const [data, setData] = useState(lists)

    // const filterItems= (catItem) => {
    //     const results = lists.filter((curInfo) => {
    //         return curInfo.category === catItem;
    //  })
    //  setData(results)
    // }

    return (

        <div className="row margin-auto" >
        {/* //     <div className="fill  btn-group" >
        //         <button className="btn btn-secondary w-25 mb-3"  onClick={() =>setData(lists)} >All</button>  
        //         <button className="btn btn-secondary w-25 mb-3" onClick={() => filterItems('Breakfast')}>Breakfast</button> 
        //         <button className="btn btn-secondary w-25 mb-3" onClick={() => filterItems('Lunch')}>Lunch</button> 
        //         <button className="btn btn-secondary w-25 mb-3" onClick={() => filterItems('Dinner')}>Dinner</button>
        //         <button className="btn btn-secondary w-25 mb-3" onClick={() => filterItems('Drinks')}>Drinks</button> 
        //         <button className="btn btn-secondary w-25 mb-3" onClick={() => filterItems('Dessert')}>Dessert</button> 
        //     </div>
         

        // <div>
        //     {categories.map((category, i) => { */}
        {/* //         return (
        //             <button type="button" className="filter-btn" key={i} onClick={() => filterItems(category)}>
        //                     {category}
        //             </button>
        //         )
        //     })}
        // </div> */}
        </div>
    )
}
