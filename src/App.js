import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './styles'
import Routing from "./core/Routing";
import UserProvider from "./contexts/UserProvider";
import UriProvider from "./contexts/UriProvider";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UriProvider>
          <UserProvider>
            <Routing/>
          </UserProvider>
        </UriProvider>
      </BrowserRouter>
    )
  }
}

export default App
