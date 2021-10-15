import React, { Component } from 'react';
import Detailbox from '../components/detailbox';
import Mainbox from '../components/mainbox';


class Boxcontainer extends Component {

      constructor(props) {
        super(props);
        this.state = {
            currentClass : "current"
          }
        }

        setClass(theClass) {
          this.setState({
            currentClass : theClass
          });
        }

render() {
    return (
    <div className="container box-container">
    <div className="row">
      <div className="col-md-6">
        <Mainbox myinfo={this.about} onClick={() => this.setClass("about")}/>
        <Mainbox myinfo={this.projects} onClick={() => this.setClass("projects")}/>
        </div>
        <div className="col-md-6">
        <Mainbox myinfo={this.contact} onClick={() => this.setClass("contact")}/>
        <Mainbox myinfo={this.ideas} onClick={() => this.setClass("ideas")}/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <Detailbox />
        </div>
      </div>
    </div>
        )
    };
  }

  export default Boxcontainer;