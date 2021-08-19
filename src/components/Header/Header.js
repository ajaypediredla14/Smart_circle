import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {NavLink} from 'react-router-dom';
import {GitHub,WhatsApp,LinkedIn,Instagram} from '@material-ui/icons';

const Header = () =>{
	return (
		<>
		  <Navbar collapseonselect="true" expand="lg" variant="dark" className="header" fixed="top">
		      <Navbar.Brand href="#home" className="navbrand">
		      <span>S</span>mart<span>C</span>ircle
		      </Navbar.Brand>
		      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			 <Navbar.Collapse>
			 	<Nav className="me-auto header_middle">
			 	<Nav.Link as={NavLink} exact to="/" className= "header_link" activeClassName="header_link_active">
			 	Home
			 	</Nav.Link>
			 	<Nav.Link as={NavLink} exact to="/SmartDeal" className="header_link"  activeClassName="header_link_active">
			 	SmartDeal
			 	</Nav.Link>
			 	<Nav.Link as={NavLink} exact to="/Contact" className= "header_link" activeClassName="header_link_active">
			 	SIC
			 	</Nav.Link>
			 	</Nav>
			 	<div className="header_right">
			 				<a href="https://github.com/jay-498" target='_blank' rel="noreferrer">
			 					<GitHub />
			 				</a>
			 				<a href=" " target='_blank'>
			 					<WhatsApp />
			 				</a>
			 				<a href="https://www.linkedin.com/in/ajay-pediredla-125887191" rel="noreferrer" target='_blank'>
			 					<LinkedIn />
			 				</a>
			 				<a href="https://www.instagram.com/_ajay_pediredla__/" target='_blank' rel="noreferrer">
			 					<Instagram />
			 				</a>
			 	</div>
			 </Navbar.Collapse>
		  </Navbar>
		</>
		);
};

export default Header;