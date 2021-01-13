import React , {useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Home from './components/Home/home';
import About from './components/About/about';
import Services from './components/Services/services';
import Portfolio from './components/Portfolio/portfolio';
import Team from './components/Team/team';
import JobOpening from './components/Career/career'
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const Brotherhood = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about" exact component={About}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/products" exact component={Portfolio}></Route>
        <Route path="/team" exact component={Team}></Route>
        <Route path="/career/job" exact component={JobOpening}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/" exact component={Home}></Route>
        <Redirect to="/"/>
      </Switch>
      <Footer/>

    </Router>
  );
};

export default Brotherhood;
