import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import React, {useContext} from "react"
import {DesignContext} from "./Contexts/Design"
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router';



const designs = [{
  type: "web",
  bgImg: "/assets/home/desktop/image-web-design-large.jpg"
},
{
  type: "app",
  bgImg: "/assets/home/desktop/image-app-design.jpg"
},
{
  type: "graphic",
  bgImg: "/assets/home/desktop/image-graphic-design.jpg"
}]

function App() {
  return (
    <DesignContext.Provider value={designs}>
      <div className="App">
          <Header theme="dark"/>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
          <Footer />
      </div>
    </DesignContext.Provider>
  );
}

export default App;
