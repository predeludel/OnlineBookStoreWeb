import React from "react";
import { Button, Navbar, NavbarBrand, Image} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import heart from './Icon/ICONS.svg' ;
import login from './Icon/ICONS_1.svg';
import {Link} from 'react-router-dom';

function NaviBar() {
  return (
    <Navbar className="justify-content-center" collapseOnSelect expand="lg" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
    
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav className="justify-content-center">
        <NavbarBrand className="m-2 font-alcotton justify-content-center ms-auto text-center" style={{fontSize: 32, background:'#EBEACA'}}><Link to="/home" className="text-dark" style={{textDecoration: 'none'}}>кънига</Link></NavbarBrand>
            <Nav.Link className="m-2 font-Dimica-Light" style={{fontSize: 32}}><Link to="/catalog" className="text-dark" style={{textDecoration: 'none'}}>Каталог</Link></Nav.Link>
            <Nav.Link  className="m-2 font-Dimica-Light" style={{fontSize: 32}}><Link to="/search"  className="text-dark" style={{textDecoration: 'none'}}>Поиск</Link></Nav.Link>
            <Nav.Link  className="m-2 font-Dimica-Light" style={{fontSize: 32}}><Link to="/compilation"  className="text-dark" style={{textDecoration: 'none'}}>Подборка</Link></Nav.Link>
        </Nav>
        <Nav>
            <Button href="/basket" variant="outline-dark m-2 font-Dimica-Light" style={{fontSize: 24, borderRadius: '60px', fontFamily:'Dimica-Light'}}>Корзина</Button>
            <Image className="m-2"src={heart} alt={"heart"} style={{width: 40, height: 40}} ></Image>
            <Image className="m-2" src={login} alt={"login"}></Image>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NaviBar;