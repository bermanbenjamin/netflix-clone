import React from 'react';
import { Content, Title, Button, AsideArea, ButtonsArea } from './styles';

import {FaPlay} from 'react-icons/fa'



const Banner: React.FC = () => {
  
  return (
    <Content >
      <AsideArea>
        <Title src="https://occ-0-1422-3851.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfJ69fSwtC2mVWAsZhaBff0xu-pGVG4PK4nLQjzPdHZd15tWWGdmp5ADBZbK03F7N-HWGVGWbyDZZxvMUzAHyxWt72hxk9jOgABhZYjhcF6rk23NAwc3rQZSZZw6OrNjsdXfdn3z_yGJhLhwcmKckQCi_H3VwU5vD7qfxc00Mu2jEg.webp?r=812"/>
        
        <ButtonsArea>
            <Button type="button" className="play">
              <FaPlay/>
              <span>Assistir</span>
            </Button>
            <Button type="button" >
              <span>Mais inforamações</span>
            </Button>
        </ButtonsArea>
      </AsideArea>
    </Content>
  );
}

export default Banner;