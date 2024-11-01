import React from 'react';

export default function Navlink ({myinfo, title, currentClass}) {
  function showDetailBox(key, mainboxes) {
    setTimeout(function(){
    mainboxes[key].classList.add("d-none");
},500);
}

function handleClick() {
let mainboxes = document.querySelectorAll(".mainbox");
for(let i = 0; i < mainboxes.length; i++) {
    mainboxes[i].classList.add("animated","fadeOut");
    showDetailBox(i,mainboxes);

}
}

var innerdata = [];

myinfo.map((elem) => {
  innerdata.header = elem.header;
  innerdata.tagline = elem.tagline;
  innerdata.class = elem.class;
  return innerdata;
});


    return (
      <span onClick={() => {props.setclass(currentClass); handleClick(innerdata.class) }}>{title}</span>
    );
  }

