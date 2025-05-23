import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: '1px solid white'
      });
      setBtnText("Enable light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong> Analyse Your Text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtilis gives you a way to analyse your text quickly and efficiently. Be it word count, characters count or time to read.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong> Free to Use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             TextUtilis is a free character counter tool that provides instant  characteer count & word count statictics for a given text. TextUtilis reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works on any browser such as chrome, Firefox, Edge and so on .It suits to count characters from facebook, blog, books, excel document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={toggleStyle}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
