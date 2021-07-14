import React from 'react';
import {Animated} from "react-animated-css";
import ryimage from '../../assets/ryan.jpg';
import resume from '../../assets/Koskela_Ryan_Resume.pdf';




export default function DetailboxAbout(props) {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOutDown" isVisible={true} animationInDuration="500">
    <div className="white-bg">
      <div className="detailbox">
        <div className="row">
          <div className="col-9"><h1>About</h1></div><div className="col-3 closex text-right" onClick={() => {props.history.replace("/")}}>Close [X]</div></div>
        <div>
          <div className='row'><div className='col-md-7 about-format'><p>After taking interest in a variety of different careers, I ended up finding a love and passion for web development, specifically front end development. My specialties are in creating custom JavaScript and CSS solutions for unique UI/UX experiences, utilizing APIs, and performing fast and efficient updates to existing sites. Additionally, I have a strong background in WordPress and graphic design. Aside from development, you'll likely find me playing and watching sports, hitting the gym, trying out new drinks, brewing coffee with just about every type of coffee maker, driving to random places, and playing guitar. Drop me a line to know anything else!</p><p><a target='_blank' href={resume}>Download Resume</a></p></div><div class='col-md-5'><img alt="Me" className='img-fluid rounded float-md-right' src={ryimage} /></div></div>        </div>
      </div>
    </div>
    </Animated>
  )
}
