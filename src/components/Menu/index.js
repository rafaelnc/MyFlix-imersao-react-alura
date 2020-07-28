import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
function Menu() {
    return (
        <header>
           <nav className="Menu">
               <Link to="/">
                    <img className="Logo" src={Logo} alt="My FLix" />
               </Link>
            
                <Button as={Link}className="ButtonLink" to="/cadastro/video">
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    )
}

export default Menu;