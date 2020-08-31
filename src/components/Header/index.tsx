import React from 'react';

import LogoImage from '../../assets/Logo.png';
import { Content, Logo, NaviBar, Utilities, SearchIcon, GiftIcon, ProfileIcon, BellIcon } from './styles';

const Header: React.FC = () => {
  return (
      <Content>
          <Logo src={LogoImage} alt="Benjaflix" />
          <NaviBar>
            <a href="/">Início</a>
            <a href="/">Séries</a>
            <a href="/">Filmes</a>
            <a href="/">Mais recomendados</a>
            <a href="/">Minha lista</a>
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