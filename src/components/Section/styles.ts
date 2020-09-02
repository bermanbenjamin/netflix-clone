import styled from 'styled-components';

export const Content = styled.div`
  height: 30vh;
  padding: 20px 45px;

  display: flex;
  flex-direction: column;
  justify-content: space-between
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.6em 0;
`;

export const ListItem = styled.ul`
  display: flex;

  &::-webkit-scrollbar{
    display: none;
  }
`;

export const Item = styled.img`
  height: 8em;
  max-height: 12em;
  width: 14em;
  margin-right: 0.3em;
  cursor: pointer;

  :hover{
      transition:  all 300ms ease-in-out;
      transform: scale(1.3);  
      margin: 0 2.5vw;
  }
`;