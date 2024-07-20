import React , {useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState("enter text here");
    const handleUpclick=()=>{
      console.log("up was clicked" + text)
      let newText= text.toUpperCase()
      setText(newText)
    }
    const handleLowclick=()=>{
        console.log("lowercase was clicked" + text)
        let newText= text.toLowerCase()
        setText(newText)
      }
      const handleClearclick=()=>{
        console.log("clear was clicked" + text)
        let newText= '';
        setText(newText)
      }
    const handleOnchange=(event)=>{
        console.log("on changed")
        setText(event.target.value)
      }
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className='my-3'>
        <textarea className='form-control' id='mybox' onChange={handleOnchange} value ={text} rows="8"></textarea>
      </div>
      <button className='btn btn-success mx-2' onClick={handleUpclick} >Convert to uppercase</button>
      <button className='btn btn-success mx-2' onClick={handleLowclick} >Convert to lowercase</button>
      <button className='btn btn-success mx-2' onClick={handleClearclick} >Clear text</button>


    </div>
    <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  minutes will be taken to read this text </p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
