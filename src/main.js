import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Techlogos from './components/techlogos.js';
import DetailboxAbout from './components/detailbox/detailbox-about.js';
import DetailboxContact from './components/detailbox/detailbox-contact.js';
import DetailboxProjects from './components/detailbox/detailbox-projects.js';
import DetailboxIdeas from './components/detailbox/detailbox-ideas.js';
import Mainboxes from './components/combined-mainboxes.js';
import ReactGA from 'react-ga';
import './style.css';




class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      about: [{
        "tagline": "A few of my interests, a few biographical details, and more",
        "header": "About Me",
        "class": "about",
        "preview": ["Biographical Info, Personal and Professional", "My Resume"]
      }],
      contact: [{
        "tagline": "Methods of getting in touch with me",
        "header": "Contact Info",
        "class": "contact",
        "preview": ["Email", "Instagram"]
      }],
      projects: [{
        "tagline": "Past projects of mine",
        "header": "Projects",
        "class": "projects",
        "preview": ["Past Professional Projects", "Fun Personal Projects"]
      }],
      ideas: [{
        "tagline": "Musings and ideas of mine and others I admire",
        "header": "Items of Interest",
        "class": "ideas",
        "preview": ["Future Project Ideas", "Things That Caught My Interest"]
      }]
    }
  }

  render() {

    function initializeReactGA() {
      ReactGA.initialize('UA-126044321-1');
      ReactGA.pageview('/homepage');
    }

    initializeReactGA();
    console.log(this.props);
    return (
      <Router>
        <div>
          <header className="Main-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="Main-title"><Link to="/">Ryan Koskela</Link></h1>
                  <p className="title-subheading">Web developer, writer, sports and food/drink aficionado, and so much more</p>
                </div>
                <div className="col-md-6">
                  <ul className="Nav float-md-right">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/ideas">Ideas</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="Main">
            <div className="container box-container">
              <div className="row">
                <div className="col-md-12">
                  <Switch>
                    <Route exact path='/' render={(props) => <Mainboxes {...props} stateinfo={this.state} />} />
                    <Route exact path="/about" component={DetailboxAbout} />
                    <Route exact path="/projects" component={DetailboxProjects} />
                    <Route exact path="/contact" component={DetailboxContact} />
                    <Route exact path="/ideas" component={DetailboxIdeas} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">Created With: <Techlogos /></div>
                <div className="col-md-6"><span className="float-md-right">&copy; {new Date().getFullYear()} Ryan Koskela</span></div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default Main;
