import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared !", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard !", "success");
  };

  const handleExtraSpace = () => {
    let newText1 = text.split(/[ ]+/);
    setText(newText1.join(" "));
    navigator.clipboard.writeText(text.value);
    props.showAlert("Removed extra spaces !", "success");
  };

  const [text, setText] = useState("Enter Text Here ");

  return (
    <>
      <div className="container">
        <h1
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {props.heading}{" "}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary:</h1>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((element) => element.length !== 0).length
          } words
          & {text.replace(/\s/g, "").length} characters

        </p>
        <p>{0.008 * text.replace(/\s/g, "").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
