import React, { ReactPropTypes } from 'react';
import { Title, Content, ListItem, Item } from './styles';

interface Props{
    title: string;
    films: { image: string; }[];
};


const Section: React.FC<Props> = (props) => {
    

    return (
      <Content>
          <Title>{props.title}</Title>
          <ListItem>
            {
               props.films.map(item => (
                   <Item src={item.image}/>
               ))
            }
          </ListItem>
      </Content>
  );
}

export default Section;