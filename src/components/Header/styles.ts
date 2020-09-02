import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineGift } from 'react-icons/ai';
import { GoBell } from "react-icons/go";

export const Content = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding:  0 45px;
  background-color: transparent;


  display: flex;
  align-items:center;

  .black{
    background-color: #141414;
  }


`;

export const Logo = styled.img`
    padding: 10px 0;
    width: 7vw;
    height: 7vh;
    cursor: pointer;
`;

export const NaviBar = styled.nav`
    flex-grow: 2;

    a{
      margin-left: 1.3vw;
      color: white;
      text-decoration: none;
      cursor: pointer;
    }

    @media (max-width: 700px) {
    display: none;
  }
`;

export const Utilities = styled.div`
  width: 15vw;
  
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const SearchIcon = styled(AiOutlineSearch)`
    
    height: 5vh;
    width: 1.5vw;
    cursor: pointer;
    
`;

export const GiftIcon = styled(AiOutlineGift)`
    
    height: 5vh;
    width: 1.5vw;
    cursor: pointer;
`;

export const BellIcon = styled(GoBell)`
    height: 5vh;
    width: 1.5vw;
    cursor: pointer;
`;

export const ProfileIcon = styled.div`
    cursor: pointer;  
    img{
    height: 4.5vh;
      width: 2.5vw;
    }
`;
