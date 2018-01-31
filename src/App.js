import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header'
import CamperTable from './components/CamperTable'

//import CamperDisplayArea from "./components/CamperDisplayArea";

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

    const style = {
      "backgroundColor": "#FFF1EC",
      "display": "inline-block",
      "margin": "0 auto"
    }

    const tableRowStyle = {
      "background": "orange",
      "cursor": "pointer"
    }

    return (
      <div className="App">
        <Header welcome="Welcome to FCC Camper Leader Board" />
        <table style={style}>
          <tbody>
            <tr style={tableRowStyle}>
              <th>#</th>
              <th>Camper</th>
              <th onClick={() => this.getData(this.props.thirtyDays)}>30-days</th>
              <th onClick={() => this.getData(this.props.allTime)}>All time</th>
            </tr>
            <CamperTable users={this.state.users} />
          </tbody>
        </table>
        {/* <CamperDisplayArea
          getData = {this.getData} 
          users={this.state.users}
          thirtyDays={this.props.thirtyDays}
          allTime={this.props.allTime}
        /> */}
      </div>
    );
  }
}

export default App;
