import React from 'react';
import'./style.css';
import Button from '../ButtonLink'
import Logo from '../../Assets/logo01.png'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="LIPEFLIX logo" />
            </a>
            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}


export default Menu;