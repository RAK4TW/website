import React from 'react';

export default function Navlink (props) {
  function showDetailBox(key, mainboxes) {
    setTimeout(function(){
    mainboxes[key].classList.add("d-none");
},500);
}

function handleClick(theclass) {
let mainboxes = document.querySelectorAll(".mainbox");
for(let i = 0; i < mainboxes.length; i++) {
    mainboxes[i].classList.add("animated","fadeOut");
    showDetailBox(i,mainboxes);

}
}

var innerdata = [];

props.myinfo.map((elem) => {
  innerdata.header = elem.header;
  innerdata.tagline = elem.tagline;
  innerdata.class = elem.class;
  return innerdata;
});


    return (
      <span onClick={() => {props.setclass(props.currentClass); handleClick(innerdata.class) }}>{props.title}</span>
    );
  }

