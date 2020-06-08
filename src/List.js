import React from 'react';
import Grocery from './Grocery'

const List = (props) => (
  <div>
    <h1 className='title'>{props.name}</h1>
    <ul>
      { props.groceries.map( (i) => (
        <Grocery
         key={i.id}
         name={i.name}
         id={i.id}
         complete={i.complete}
         itemClick={props.itemClick}
         deleteItem={props.deleteItem}
         />
      ))}
    </ul>
  </div>
);

export default List;