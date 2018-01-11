import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


import CamperTable from './components/CamperTable'

class App extends Component {
  constructor(props){
    super(props);

    const allTime = `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`;
    const thirtyDays = `https://fcctop100.herokuapp.com/api/fccusers/top/recent`;

    this.state = {
      users: [],
    }

    this.getData(thirtyDays)
    
  }


  getData(url){
    return axios.get(url)
      .then(res => {
        const users = res.data;
        console.log(users);
        this.setState({
          users: users
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to FCC Camper leader board</h1>

        </header>
        <h1>{this.allTime}</h1>
        <table>
          <tbody>
          <tr>
            <th>data</th>
            <th>Camper</th>
            <th onClick={() => this.getData(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)}>30-days</th>
            <th onClick={() => this.getData(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`)}>All time</th>
          </tr>
          <CamperTable users={this.state.users} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
