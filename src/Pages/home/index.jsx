import React from 'react';
import styled from "styled-components";

import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer'

const AppWrapper = styled.div`
    background: var(--grayDark);
`;

function Home(){
    return (
        <AppWrapper>
            <Menu />
            <Footer />
        </AppWrapper>
    )
}

export default Home;