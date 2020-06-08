import React from 'react';
import './App.css';
import List from './List';
import Form from './Form';
import Grocery from './Grocery';

class App extends React.Component {
  state = {
    groceries: [
      {id: 1, name: "cheese", complete: false },
      {id: 2, name: "chocolate", complete: true },
      {id: 3, name: "bread", complete: false },
    ]
  };

  handleClick = (id) => {
    const { groceries } = this.state;
    const newItems = groceries.map(item => {
      if(item.id !== id) return item
      return { ...item, complete: !item.complete}
    })
      this.setState({
        groceries: newItems,
    })
  };

  addItem = (itemName) => {
    const { groceries } = this.state;
    const newItem = { 
      id: `${Math.random()}`, 
      name: itemName, 
      complete:false};
    const newItems = [newItem, ...groceries];
    this.setState({
      groceries: newItems,
    });
  };

  render(){
    const { groceries } = this.state;
    
    return (
      <div>
        <ul>
          <Form addItem={this.addItem} />
          <List 
            itemClick={this.handleClick}
            name="Grocery List" 
            groceries={groceries}
          />
        </ul>
      </div>
    );
  }
}

export default App;
