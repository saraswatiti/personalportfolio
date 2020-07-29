import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header';
import Portfolio from './Component/Section/Portfolio';
import About from './Component/Section/About';
import Contact from './Component/Section/Contact';
import Footer from './Component/Footer';
import BtmFooter from './Component/BtmFooter';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {/* <Route path='/' extact component={} /> */}
        </Switch>
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <BtmFooter />
      </HashRouter>
    </div>
  );
}

export default App;
