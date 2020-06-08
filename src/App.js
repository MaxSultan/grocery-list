import React from 'react';
import './App.css';
import List from './List';
import Form from './Form';
import Grocery from './Grocery';

class App extends React.Component {
  state = {
    groceries: [
      {id: 1, name: "bread", complete: false },
      {id: 2, name: "cheese", complete: true },
      {id: 3, name: "chocolate", complete: false },
      {id: 4, name: "eggs", complete: false },
      {id: 5, name: "milk", complete: false },
    ],
    filter: "All",
  };

  filterGroceries = () => {
    const {groceries, filter} = this.state
    switch(filter){
      case 'Active':
        return groceries.filter( (g) => !g.complete)
      case 'Complete':
        return groceries.filter( (g) => g.complete)
      default:
        return groceries
    }
  }

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

  removeItem = (id) => {
    const { groceries } = this.state;
    const filtered = groceries.filter(item => item.id !== id);
    this.setState({
      groceries: filtered,
    }); 
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
        
          <List 
            itemClick={this.handleClick}
            name="Grocery List" 
            groceries={groceries}
            deleteItem={this.removeItem}
          />
          <br/>
            <Form addItem={this.addItem} />
        </ul>
      </div>
    );
  }
}

export default App;
