import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import parse from 'html-react-parser';

export default function Mainbox(props) {
  function handleMouseOver(theclass) {
    document.querySelector('.' + theclass).classList.add('animated', 'pulse');
  }

  function handleMouseOut(theclass) {
    document
      .querySelector('.' + theclass)
      .classList.remove('animated', 'pulse');
  }

  var innerdata = [];

  props.myinfo.map((elem) => {
    innerdata.header = elem.header;
    innerdata.tagline = elem.tagline;
    innerdata.class = elem.class;
    innerdata.preview = elem.preview.map((previewitem) => {
      return parse('<li>' + previewitem + '</li>');
    });
    return innerdata;
  });

  return (
    <Router>
      <div
        className="white-bg"
        onClick={() => {
          props.router.history.replace(`/${innerdata.class}`);
        }}
      >
        <div
          className={'mainbox ' + innerdata.class}
          onMouseOver={() => handleMouseOver(innerdata.class)}
          onMouseOut={() => handleMouseOut(innerdata.class)}
        >
          <h2>{innerdata.header}</h2>
          <p>{innerdata.tagline}</p>
          <ul className="infoList">{innerdata.preview}</ul>
        </div>
      </div>
    </Router>
  );
}
