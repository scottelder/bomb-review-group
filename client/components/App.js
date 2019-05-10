import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: 'surya',
      text: "",
      messages: ['placeholder']
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    axios.post('/', {
      text: this.state.text,
      user: this.state.user
    })
    .then((response) => {
      this.setState({text : ""});
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      text: event.target.value
    })
  }

  componentDidMount() {
    axios.get('/msg')
    .then( (response) => this.setState({messages: response.data}))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <>
      <h1>THIS IS MY BOMB APP</h1>
      <input type="text" onChange={this.handleChange}></input>
      <button onClick={this.handleClick} >THIS IS MY BOMB BUTTON!!</button>
      {this.state.messages.map(msg => <p>{Object.values(msg)}</p>)}
      </>
    );
  }
}

export default App;