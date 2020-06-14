import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

import './index.css';
import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={Signin} path='/signin' />
        <Route component={Signup} path='/signup' />
        <Route component={Checkout} path='/checkout' />
      </Switch>
    </React.Fragment>
  </Router>
);
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
