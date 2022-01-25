
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './Home';
import About from './About';
import Courses from './Course';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/course" component={Courses} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>

      </BrowserRouter>
      <Footer />

    </>
  );
};

export default App;
