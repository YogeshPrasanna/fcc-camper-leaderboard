import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header'
import CamperDisplayArea from "./components/CamperDisplayArea";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }

    this.getData(this.props.thirtyDays)
  }

  getData(url) {
    return axios.get(url)
      .then(res => {
        const users = res.data;
        this.setState({
          users: users
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header welcome="Welcome to FCC Camper Leader Board" />
        <CamperDisplayArea
          users={this.state.users}
          thirtyDays={this.props.thirtyDays}
          allTime={this.props.allTime}
        />
      </div>
    );
  }
}

export default App;
