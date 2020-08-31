import React from 'react';

import LogoImage from '../../assets/Logo.png';
import { Content, Logo, NaviBar, Utilities, SearchIcon, GiftIcon, ProfileIcon, BellIcon } from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
      <Content>
          <Logo src={LogoImage} alt="Benjaflix" />
          <NaviBar>
            <Link to="/">Início</Link>
            <Link to="/series">Séries</Link>
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