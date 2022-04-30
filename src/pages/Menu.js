import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import {getProducts} from '../services/getRequests'
import {useNavigate} from 'react-router-dom'
//import {filterItems} from '../pages/Order'
import {products} from '../components/Data'

    

export default function Menu() {
   const nav = useNavigate()
   const [foods, setFoods] = useState([])
   const [data, setData] = useState(products)

   const filterItems= (cartItem) => {
        const results = products.filter((curData) => {
            return curData.category === cartItem;
    })
    setData(results)
}
    // const [categories, setCategories] = useState(allcategories)
    // const [dish, setDish] = useState(foods)
    

    useEffect(() => {
        getProducts()
        .then(res => setFoods(res.data))
    }, [])
    console.log(foods)


    return (
        <div className="menu text-center"><br/> <br/> 
            {/* <section> */} 
                   <h1 className="index">Menu Items</h1>  <br/> <br/> <br/> <br/> 
                 
           <div className="container-fluid mx-2">
            <div className="fill col-md-3">
                <button className="btn btn-secondary w-50 mb-4" onClick={() =>setData(products)} >All</button> <br/> 
                <button className="btn btn-secondary w-50 mb-4" onClick={() => filterItems('Breakfast')}>Breakfast</button> <br/> 
                <button className="btn btn-secondary w-50 mb-4" onClick={() => filterItems('Lunch')}>Lunch</button> <br/> 
                <button className="btn btn-secondary w-50 mb-4" onClick={() => filterItems('Dinner')}>Dinner</button> <br/> 
                <button className="btn btn-secondary w-50 mb-4" onClick={() => filterItems('Drinks')}>Drinks</button> <br/> 
                <button className="btn btn-secondary w-50 mb-4" onClick={() => filterItems('Dessert')}>Dessert</button> <br/> 
            </div>
          </div>

                <nav id="new" >
                   <button type="button" className="btn btn-secondary pull-right"  onClick={()=> {nav("/create")}} >New Menu</button>
                </nav> <br/> <br/> <br/> 

                 {/* <Order /> */}
            {/* <div>
            <Order categories={categories} filterItems={filterItems} />
                <Menu foods={dish}/>
            </div> */}
                
            {/* </section> */}

                 {foods.map((food) => {
                  const {id, title, price, img, desc} = food;
                  return(
                    <article key={id} className="food-item ">
                    {/* <div className=" row"> */}
                      {/* <div className=" col-sm-3">  */}
                        
                          {/* <a href={`/${food._id}`} ><img src={img} alt=" " className="image"/></a> */}
                 <div className="menu" >
                    <div className=" ">
                       <div className=" mb-4">
                       <div className=" ">
                    <div className="card" >
                            <a href={`/${food._id}`} ><img src={img} className="card-img-top" alt=" " /></a>
                           <div className="card-body">
                               <h3 className="card-title">{title}</h3>
                               <h3 className="card-price">${price}</h3> <br/>
                               <p className="card-text">{desc}</p>
                               {/* <a href="#cart" className="btn btn-primary ">Add Item</a> */}
                           </div>
                    </div>
                      </div>
                      </div>
                    </div>
                 </div>

                      {/* </div> */}
                          {/* <div className="item-info col-sm-1">
                            <header className="card-block">
                                <h3 className="title">{title}</h3>
                                <h3 className="price">${price}</h3>
                            </header>
                                <p className="desc">{desc}</p>
                          </div> */}
                      {/* </div> */}

                   </article>
                  )
              })}
              
             
            
           
        </div>
    )
}



