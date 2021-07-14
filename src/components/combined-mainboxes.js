
import React from 'react';
import {Animated} from "react-animated-css";
import Mainbox from './mainbox.js';

export default function Mainboxes(props) {
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration="500">
            <div className="row mobilecrop">
                <div className="col-md-6">
                    <Mainbox router={props} myinfo={props.stateinfo.about} />
                    <Mainbox router={props} myinfo={props.stateinfo.projects} />
                </div>
                <div className="col-md-6">
                    <Mainbox router={props} myinfo={props.stateinfo.contact} />
                    <Mainbox router={props} myinfo={props.stateinfo.ideas} />
                </div>
            </div>
            </Animated>
           
    )
}


