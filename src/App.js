import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './styles'
import Routing from "./core/Routing";
import UserProvider from "./contexts/UserProvider";
import UriProvider from "./contexts/UriProvider";
import LocaleProvider from "./contexts/locale/LocaleProvider";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LocaleProvider>
          <UriProvider>
            <UserProvider>
              <Routing/>
            </UserProvider>
          </UriProvider>
        </LocaleProvider>
      </BrowserRouter>
    )
  }
}

export default App
