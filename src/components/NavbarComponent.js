import {useState} from 'react';
import {Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap';

export default function NavbarComponent(){
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
	<>
	  <Navbar color="primary" dark>
        <NavbarBrand href="/" className="mr-auto">ReactCrud</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Homes</NavLink>
            </NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
	</>
  )
}
