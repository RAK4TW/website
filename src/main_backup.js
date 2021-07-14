import React, { Component } from 'react';
import Navlink from './components/navlink.js';
import Mainbox from './components/mainbox.js';
import Detailbox from './components/detailbox.js';
import Techlogos from './components/techlogos.js';
import './style.css';



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
       about:[{
         "tagline" : "A few My interests, a few biographical details, and more", 
         "header" : "About Me", 
         "main" : "Biographical Info",
         "class" : "about"
        }],
       contact:[{
         "tagline" : "Methods of getting in touch with me", 
         "header" : "Contact Info", 
         "main" : "ryanak@gmail.com",
         "class" : "contact"
        }],
       projects:[{
         "tagline" : "Past projects of mine", 
         "header": "Projects", 
         "main":"Past Work",
         "class" : "projects"
        }],
       ideas:[{
         "tagline": "Musings and ideas of mine and others I admire", 
         "header" :"Ideas", 
         "main" : "Concept Ideas",
         "ideas" : "ideas"
        
        }]
    }   
}

  render() {
    return (
      <div>
        <header className="Main-header">
        <div className="container">
        <div className="row">
        <div className="col-md-6">
          <h1 className="Main-title">Ryan Koskela - Web Developer</h1></div>
          <div className="col-md-6">
          <ul className="Nav float-md-right">
            <li><Navlink title="About"></Navlink></li>
            <li><Navlink title="Projects"></Navlink></li>
            <li><Navlink title="Contact"></Navlink></li>
            <li><Navlink title="Ideas"></Navlink></li>
          </ul>
          </div>
          </div>
          </div>
        </header>
        <div className="Main">
          <div className="container flip-container">
            <div className="row">
              <div className="col-md-6">
                <Mainbox myinfo={this.state.about}/>
                <Mainbox myinfo={this.state.projects}/>
                </div>
                <div className="col-md-6">
                <Mainbox myinfo={this.state.contact}/>
                <Mainbox myinfo={this.state.ideas}/>
                </div>
                <div className="col-md-12">
                <Detailbox/>
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
    );
  }
}

export default Main;
