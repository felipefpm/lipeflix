import styled from 'styled-components';
import Button from './ButtonLink';


export const LogoImg = styled.img`
    max-width: 168px;

    @media (max-width: 800px){
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0%;
    padding-left: 5%;
    padding-right: 5%;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);
    @media (max-width: 800px){
        height: 40px;
        justify-content: center;
    }
`;

export const ButtonLink = styled(Button)`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
    }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        outline: 0;
        border: 0;
        border: 0;
        text-align: center;
    }
`;

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 94px;
`;