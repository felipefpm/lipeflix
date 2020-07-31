import React from 'react';
import {Link} from 'react-router-dom'

import Logo from '../../Assets/logo01.png'
import {ButtonLink, MenuWrapper, LogoImg} from '../styled'

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImg className="Logo" src={Logo} alt="LIPEFLIX logo" />
            </Link>
            <ButtonLink as={Link} to="cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}


export default Menu;