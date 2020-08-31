import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px 45px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.6em 0;
`;

export const ListItem = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.img`
  height: 8em;
  width: 14em;
  margin-right: 0.3em;
  cursor: pointer;

  :hover{
      transition: transform 300ms ease-in-out;
      transform: scale(1.5);  
  }
`;