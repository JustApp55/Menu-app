import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import {getProducts} from '../services/getRequests'
import {useNavigate} from 'react-router-dom'
import Order from '../components/Order'
import {lists} from './Data'

    
export default function Menu() {
   const nav = useNavigate()
   const [foods, setFoods] = useState([])
   const [data, setData] = useState(lists)

    
    useEffect(() => {
        getProducts()
        .then(res => setFoods(res.data))
    }, [])
    console.log(foods)

    const filterItems= (catItem) => {
        const results = lists.filter((curInfo) => {
            return curInfo.category === catItem;
     })
     setFoods(results)
    }


    return (
        <div className="menu text-center"><br/> <br/> 
            {/* <section> */} 
                   
            <h1 className="index">Menu Items</h1>  <br/> <br/> <br/> <br/> 
                <nav id="new" >
                   <button type="button" className="btn btn-secondary pull-right"  onClick={()=> {nav("/create")}} >New Menu</button>
                </nav> <br/> <br/> <br/>             
                 
          <div className="row" >
            <div className="fill  btn-group" >
                <button className="btn btn-secondary w-40 mb-3"  onClick={() =>setFoods(lists)} >All</button>  
                <button className="btn btn-secondary w-40 mb-3" onClick={() => filterItems('Breakfast')}>Breakfast</button> 
                <button className="btn btn-secondary w-40 mb-3" onClick={() => filterItems('Lunch')}>Lunch</button> 
                <button className="btn btn-secondary w-40 mb-3" onClick={() => filterItems('Dinner')}>Dinner</button>
                <button className="btn btn-secondary w-40 mb-3" onClick={() => filterItems('Drinks')}>Drinks</button> 
                <button className="btn btn-secondary w-40 mb-3" onClick={() => filterItems('Dessert')}>Dessert</button> 
            </div>
          </div>


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
                    <div className="col-md-12 ">
                       <div className="row">
                       <div className="col-md-12 mb-3">
                        <div className="card" >
                            <a href={`/${food._id}`} ><img src={img} className="card-img-top" alt=" " /></a>
                           <div className="card-body">
                               <h3 className="card-title">{title}</h3>
                               <h3 className="card-price">${price}</h3> <br/>
                               <p className="card-text">{desc}</p> <br/>
                               <a href="#cart" className="btn btn-primary ">Add Item</a>
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



