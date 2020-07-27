import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <header>
           <nav className="Menu">
               <a href="/">
                    <img className="Logo" src={Logo} alt="My FLix" />
               </a>
            
                <Button as="a" className="ButtonLink" href="/">
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    )
}

export default Menu;