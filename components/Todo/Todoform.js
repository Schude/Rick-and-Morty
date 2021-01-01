import React from "react";
import shortid from 'shortid'
export default class TodoForm extends React.Component {
  state = {
    text: '',
    complete:false
  };

  handleChange = (event) => {
    this.setState({
     
      [event.target.name]: event.target.value})

  }
  handleSubmit = event =>{
   
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete:false
    });
    this.setState({
      text:''
    })
  };

  render() {
    return (
      <form>
        <input name = "text" onChange={this.handleChange} value={this.state.text} placeholder="todo..." />
        <button onClick={this.handleSubmit}>EKLE</button>
      </form>
    );
  }
}
