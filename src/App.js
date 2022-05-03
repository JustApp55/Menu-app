import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Menu from './pages/Menu'
import Show from './pages/Show'
import Edit from './pages/Edit'
import Create from './pages/Create'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Cart from './components/Cart'



function App() {
  return (
    <div className="App">
      <Router className="Ap">
         
      <Navbar className="navbar navbar-custom" 
        sticky="top" expand="md" collapseOnSelect>
        <div id="home">
           <Link to='/' className="link">Home</Link>
         </div>

         

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="nav-item nav-link px-3">
            <NavDropdown title="Products" >
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
          
            <Nav.Link href="#donation" className="nav-item nav-link px-2">Donation</Nav.Link>
              <Nav.Link href="#order" className="nav-item nav-link px-2">Order</Nav.Link>
              <Nav.Link href="#contact-us" className="nav-item nav-link px-2">Contact Us</Nav.Link>
              <Nav.Link ><a href="#" id="cart"><i className="fa fa-shopping-cart px-1"></i> Cart <span class="badge"></span></a></Nav.Link>             
          </Nav>
        
        </Navbar.Collapse>

      </Navbar>

      <Routes>
        <Route  path='/' element={<Menu />} />
        <Route  path='/category' element={<lists />} />
        <Route  path='/:id' element={<Show />} />
        <Route  path='/:id/edit' element={<Edit />} />
        <Route  path='/create' element={<Create />} />
        <Route path='/cart' component={Cart} />
      </Routes>

    </Router>
    </div>
  );
}


export default App;
