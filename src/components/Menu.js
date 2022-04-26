import '../App.css'
import {useState, useEffect} from 'react'
import {getProducts} from '../services/getRequests'
import {useNavigate} from 'react-router-dom'

export default function Menu() {
    const nav = useNavigate()
    const [foods, setfoods] = useState([])

    useEffect(() => {
        getProducts()
        .then(res => setfoods(res.data))
    }, [])
    console.log(foods)

    return (
        <div className="menu">
            <h1 className="index">Menu Items</h1>
               <nav id="btn" >
                 <button onClick={()=> {nav("/create")}} >New Menu</button>
               </nav>
              <ul></ul>
              {foods.map((food) => {
                //   const {id, title, price, image, desc} = food;
                  return(
                    // <article key={id} className="food-item">
                    <article className="food-item">
                          <a href={`/${food._id}`}><img style={{height:'300px',  width: '300px'}} src={food.img} alt=" "/></a>
                      <div className="item-info">
                        <header>
                            <h3 className="title">{food.title}</h3>
                            <h3 className="price">${food.price}</h3>
                        </header>
                          <p className="desc">{food.desc}</p>
                      </div>
                    </article>
                  )
              })}
         
        </div>
    )
}
