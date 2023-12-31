import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")

  }
  const handleClearClick = ()=>{
    let newText = ""; 
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode===`dark`?`white`:`#42743`, color:props.mode===`light`?`black`:`white`}}>
   <h1 >{props.heading} </h1>   
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`white`:`white`, color:props.mode===`light`?`black`:`black`}} id="myBox" rows="8"/>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode===`dark`?`white`:`#42743`, color:props.mode===`light`?`black`:`white`}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} Words and {text.length} Charaters</p>
    <p>{0.008*text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview "}</p>

  </div>
    </>
)}
