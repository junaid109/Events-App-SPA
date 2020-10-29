import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Header, Icon, List} from 'semantic-ui-react';

class App extends Component {
  
   state = {
    values: [
    ]
  }


  componentDidMount() {
    axios.get("https://localhost:44346/values")
    .then((response) => {
      console.log(response);
      this.setState({
        values: response.data,
      })
    });

    // this.setState({
    //   values: [
    //     {id: 1, name: "Value 1"},
    //     {id: 2, name: "Value 2"},
    //     {id: 3, name: "Value 3"}
    //   ]
    // })
  }  

  render() {
    return (
      <div className="App">
          <Header as='h2'>
            <Icon name="users">
              <Header.Content>Reactivities</Header.Content>
            </Icon>
          </Header>
          <List>
          {this.state.values.map((value: any) => (
              <List.Item key={value.id}> {value.name}</List.Item>
            ))
            }
          </List>
      </div>
    );
  }
}

export default App;
