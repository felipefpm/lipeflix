import React from 'react';
import {Main} from '../styled'

import Menu from '../Menu';
import Footer from '../Footer';


function Template(props){
    return(
        <>
            <Menu />
                <Main>
                    {props.children}
                </Main>
            <Footer />
        </>
    )
}

export default Template;