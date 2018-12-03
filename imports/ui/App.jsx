import React, {Component} from 'react';
import Customers from './Customers';
import Nav from './Nav';
import About from './About';
import Dashboard from './Dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AccountsUIWrapper from './AccountsUIWrapper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>      
          <AccountsUIWrapper />
          <Nav/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/customers/" component={Customers}/>
            <Route path="/customers/:name/:id" component={Customers}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

