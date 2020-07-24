import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {/* <Route path='/' extact component={} /> */}
        </Switch>
        <Header />
      </HashRouter>
    </div>
  );
}

export default App;
