import React from 'react';
import Logo from '../../Assets/logo01.png'
import {ButtonLink, MenuWrapper, LogoImg} from '../styled'

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImg className="Logo" src={Logo} alt="LIPEFLIX logo" />
            </a>
            <ButtonLink href="/">
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}


export default Menu;