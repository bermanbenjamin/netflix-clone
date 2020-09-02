import React, { useState, useEffect } from 'react';

import LogoImage from '../../assets/Logo.png';
import { Content, Logo, NaviBar, Utilities, SearchIcon, GiftIcon, ProfileIcon, BellIcon } from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        setShow(true);
      }else setShow(false);
    })
  }, [])


  return (
      <Content className={`${show && "black"}`}>
          <Logo src={LogoImage} alt="Benjaflix" />
          <NaviBar>
            <Link to="/">Início</Link>
            <Link to="/">Séries</Link>
            <Link to="/">Filmes</Link>
            <Link to="/">Mais recomendados</Link>
            <Link to="/">Minha lista</Link>
          </NaviBar>
          <Utilities>
            <SearchIcon to=""/>
            <GiftIcon to=""/>
            <BellIcon to=""/>
            <ProfileIcon> 
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" alt="Perfil"/>
            </ProfileIcon>
          </Utilities>
      </Content>
  );
}

export default Header;