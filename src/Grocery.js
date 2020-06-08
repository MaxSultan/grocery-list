import React from 'react';

const Grocery = ({ id, name, complete, itemClick, deleteItem }) => (
  <>
  <li 
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
    onClick={ () => itemClick(id)}
  >
    { name }

   
  </li>
   <div><button onClick={() => deleteItem(id)}>delete</button></div>
</>
);

const styles = {
  item: { cursor: 'pointer'},
  complete: { 
    color: 'grey', 
    textDecoration: 'line-through'
  },
};
 
export default Grocery;