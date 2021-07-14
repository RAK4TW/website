import React from 'react';
import {Animated} from "react-animated-css";
import agility from '../../assets/agility.jpg';
import bgi from '../../assets/bgi.jpg';
import mardo from '../../assets/mardo.jpg';
import jlrfd from '../../assets/jlrfd.jpg';
import vmt from '../../assets/vmt.jpg';
import mdc1 from '../../assets/mdc1.jpg';
import mdc2 from '../../assets/mdc2.jpg';
import mdc3 from '../../assets/mdc3.jpg';
import mdc4 from '../../assets/mdc4.jpg';
import sda from '../../assets/sda.jpg';
import byte from '../../assets/byte_thumb.jpg';
import intactpic from '../../assets/intact-pic.jpg';




export default function DetailboxProjects(props) {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOutDown" isVisible={true} animationInDuration="500">
    <div className="white-bg">
      <div className="detailbox">
        <div className="row">
          <div className="col-9"><h1>Projects</h1></div><div className="col-3 closex text-right" onClick={() => {props.history.replace("/")}}>Close [X]</div>
          </div>
        <div className='row'>
          <div className='col-md-12'>
            <p>A selection of past projects I've taken charge of.</p>
          </div>
        </div>

        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>Byte</h2>
            <p>Developed new Shopify site using a custom theme utilizing the latest CSS, HTML5 and pure JavaScript techniques from concept to completion. Company was eventually sold for over $1 billion USD.</p>
          </div>
          <div className='col-md-4 text-center'><a target='_blank' rel="noopener noreferrer" href='http://www.byteme.com'><img alt="Byte" className='img-fluid' src={byte} /></a></div>
        </div>
     
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>Agility Fuel Solutions</h2>
            <p>WordPress site with custom theme edits, CSS and JavaScript customization. WooCommerce integration also customized.</p>
          </div>
          <div className='col-md-4'><img alt="Agility" className='img-fluid' src={agility} /></div>
        </div>
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>Business Growth Innovators</h2>
            <p>Developed entire site, including all design, images, functionality and more. Built using WordPress.</p>
          </div>
          <div className='col-md-4'><a target='_blank' rel="noopener noreferrer" href='http://www.businessgrowthinnovators.com'><img alt="BGI" className='img-fluid' src={bgi} /></a></div>
        </div>
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>SDA Partnership USA</h2>
            <p>Custom UX/UI solution for architecture firm's website. </p>
          </div>
          <div className='col-md-4'><a target='_blank' rel="noopener noreferrer" href='http://web.archive.org/web/20170723072442/http://www.sdapartnershipusa.com/sda-design.html'><img alt="SDA" className='img-fluid' src={sda} /></a></div>
        </div>
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>Accelerated Mobile Pages (AMP)</h2>
            <p>Website design created and developed around the AMP framework for near instantaneous loading.</p>
          </div>
          <div className='col-md-4'><a target='_blank' rel="noopener noreferrer" href='https://rak4tw.github.io/INTACT/'><img alt="INTACT" className='img-fluid' src={intactpic} /></a></div>
        </div>
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>Jewelry By Mardo</h2>
            <p>Took design from PhotoShop file and built it out using Bootstrap utilizing the Modx CMS. Wrote custom PHP to properly display many different types of jewelry, in conjunction with Bootstrap's built in utilities and JavaScript. Site now archived online.</p>
          </div>
          <div className='col-md-4'><a target='_blank' rel="noopener noreferrer" href='https://web.archive.org/web/20160430191043/http://jewelrybymardo.com/'><img alt="Jewelry By Mardo" className='img-fluid' src={mardo} /></a></div>
        </div>
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>Jaguar Land Rover Facility Design</h2>
            <p>Built and maintained architecture documents website, which only certain authorized members could access.</p>
          </div>
          <div className='col-md-4'><a target='_blank' rel="noopener noreferrer" href='http://www.jaguarlandroverfacilitydesign.com/'><img alt="Jaguar Land Rover" className='img-fluid' src={jlrfd} /></a></div>
        </div>
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>VM-Tech</h2>
            <p>Computer services website built on Modx CMS, and uses a completely separate (not responsive) mobile site.</p>
          </div>
          <div className='col-md-4'><a target='_blank' rel="noopener noreferrer" href='http://www.vm-tech.com'><img alt="VMT Computer Services" className='img-fluid' src={vmt} /></a></div>
        </div>
        <div className='row project-entry'>
          <div className='col-md-8'>
            <h2 className='about-format'>Mobile Design Concepts</h2>
            <p>These are mobile site concepts that I created, which include UI/UX features and functionality. These were created in PhotoShop.</p>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-6'><a target='_blank' rel="noopener noreferrer" href={mdc1}><img alt="Responsive Mobile Design" className='img-fluid' src={mdc1} /></a><br></br></div>
              <div className='col-md-6'><a target='_blank' rel="noopener noreferrer" href={mdc2}><img alt="Responsive Mobile Design" className='img-fluid' src={mdc2} /></a><br></br></div>
            </div>
            <div className='row'>
              <div className='col-md-6'><a target='_blank' rel="noopener noreferrer" href={mdc3}><img alt="Responsive Mobile Design" className='img-fluid' src={mdc3} /></a><br></br></div>
              <div className='col-md-6'><a target='_blank' rel="noopener noreferrer" href={mdc4}><img alt="Responsive Mobile Design" className='img-fluid' src={mdc4} /></a><br></br></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Animated>
  )
}
