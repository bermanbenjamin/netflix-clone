import styled from 'styled-components';

export const Content = styled.div`
  height: 80vh;
  font-size: 100%;
  background-image:
    linear-gradient(to bottom, transparent, #141414),
    url("https://occ-0-1422-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZVN0OkZ74pl_XQapA3Jt-L2jQSikcWUDJNWcsHasuAneIL2pss0xzJikI3G32wU52eSB15AbDIgaYuR2vui7IgNCBc1.webp?r=b3b");
  background-size: 100% 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

  
export const AsideArea = styled.div`
    height: 40%;
  
    align-self: center;
    display: flex;
    flex-direction: column;
  `;

export const Title = styled.img`
  width: 30vw;
  margin-left: 6vw;
`;

export const ButtonsArea = styled.div`
  padding: 5rem;

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 0 1em;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &.play{
    height: 6vh;
    width: 10vw;
    background-color: white;
    color: black;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;
  }

    height: 6vh;
    width: 15vw;
    background-color: grey;
    color: white;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;

`;
