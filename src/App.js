import axios from 'axios';
import React from 'react';
import Button from './ButtonAdvice';
import './App.css';

class App extends React.Component {
  state = { advice: ""};

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const advice = response.data.slip.advice;

        this.setState({
          advice: advice
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return(
      <div className="App">
        <div className="card">
          <h1 className="adviceText">{this.state.advice}</h1>
        </div>
        <Button onClick={this.fetchAdvice} />
      </div>      
    );
  }
}


export default App;
