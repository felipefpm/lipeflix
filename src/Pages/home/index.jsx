import React from "react";
import { HomeWrapper } from "../styled";
import dadosIniciais from "../../Data/dados_iniciais.json";

import Menu from "../../Components/Menu";
import BannerMain from "../../Components/BannerMain";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <HomeWrapper>
      <Menu />
      <BannerMain />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
