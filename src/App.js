import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Menu from './pages/Menu'
import Show from './pages/Show'
import Edit from './pages/Edit'
import Create from './pages/Create'
import Order from './components/Order'
import {lists} from './pages/Data'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Router className="Ap">
         
      <Navbar className="navbar navbar-custom" 
        sticky="top" expand="md" collapseOnSelect>
        <div id="home">
           <Link to='/' className="link">Home</Link>
         </div>

         {/* <div>
            <Link to="/checkout">
              <button className="btn btn-success float-right">Checkout</button>
            </Link>
            <Link to="/cart">
              <button className="btn btn-primary float-right" style={{marginRight: "10px"}}>View Cart</button>
            </Link>
          </div> */}

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="nav-item nav-link px-5">
            <NavDropdown title="Products" >
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#blog" className="nav-item nav-link px-5">Donation</Nav.Link>
              <Nav.Link href="#about-us" className="nav-item nav-link px-5">About Us</Nav.Link>
              <Nav.Link href="#contact-us" className="nav-item nav-link px-5">Contact Us</Nav.Link>
              {/* <Nav.Link href="#cart" className="nav-item nav-link px-5">Cart</Nav.Link> */}
              {/* <Nav.Link href="#create" className="nav-item nav-link px-5">New Menu</Nav.Link> */}
          </Nav>
          <Nav>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <Routes>
        <Route  path='/' element={<Menu />} />
        <Route  path='/category' element={<lists />} />
        <Route  path='/:id' element={<Show />} />
        <Route  path='/:id/edit' element={<Edit />} />
        <Route  path='/create' element={<Create />} />
      </Routes>

    </Router>
    </div>
  );
}


export default App;
