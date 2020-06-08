import React from 'react';

class Form extends React.Component {
  state = { itemName: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
    this.setState({ itemName: ""})
  }

  handleChange = (e) => {
    this.setState({ itemName: e.target.value });
  }
  
  render() {
    const { itemName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={itemName}
          name="itemName"
          onChange={this.handleChange}
          required 
          placeholder="Add an Item" 
          />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;