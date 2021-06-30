import { useState } from "react";

import Image from "./components/Image";
import Display from "./components/Display";

function Gallery() {
  var titles = [
    "Smile",
    "House",
    "Japan",
    "Flowers",
    "Smart City",
    "Food",
    "Microsoft",
    "Building",
    "Work",
    "Dell",
    "Laptop",
    "Coca cola",
    "Natural View",
    "Natural View",
  ];

  // var displayimgclass = '1';
  // var displayimgtitle = 'title';
  var [displaystatus, setdisplaystatus] = useState(false);
  var [display, setdisplay] = useState([1, titles[0]]);

  function DisplayHandler(event) {
    var displayimgNo = event.currentTarget.className.split("g")[1];
    var displayimgtitle = event.currentTarget.children[0].innerHTML;
    setdisplay([parseInt(displayimgNo), displayimgtitle]);
    console.log(event.currentTarget.className);
    console.log(event.currentTarget.children[0].innerHTML);
    setdisplaystatus(true);
  }

  function CloseHandler() {
    setdisplaystatus(false);
  }

  function NextHandler() {
    let c = display[0];
    if (c === 14) {
      c = 0;
    }

    setdisplay([c + 1, titles[c - 1 + 1]]);
  }

  function PrevHandler() {
    let c = display[0];
    if (c === 1) {
      c = 15;
    }

    setdisplay([c - 1, titles[c - 1 - 1]]);
  }

  return (
    <div>
      <div id="gallery">
        <h1> Photo Gallery </h1>{" "}
        {[...Array(14)].map((v, i, a) => {
          return (
            <Image
              key={i}
              imgclass={"img" + (i + 1)}
              imgtitle={titles[i]}
              display={DisplayHandler}
            >
              {" "}
            </Image>
          );
        })}{" "}
      </div>{" "}
      {displaystatus && (
        <Display
          displayimgno={display[0]}
          displaytitle={display[1]}
          closeDisplay={CloseHandler}
          Next={NextHandler}
          Prev={PrevHandler}
        />
      )}{" "}
    </div>
  );
}

export default Gallery;
