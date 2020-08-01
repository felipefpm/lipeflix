import React from 'react';
import {HomeWrapper} from "../styled";

import Menu from '../../Components/Menu';
import BannerMain from '../../Components/BannerMain'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'

function Home(){
    return (
        <HomeWrapper>
            <Menu />
            <BannerMain />
            <Carousel />
            <Footer />
        </HomeWrapper>
    )
}

export default Home;