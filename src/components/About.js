import React, { useState } from 'react'

export default function About() {
  const [myStyle , setMustyle]=useState(
    {color: "black",
    backgroundColor:"white",
  }

  )
  const [setbtn , setbtntxt]=useState("enable dark mode")

  const ToggleStyle=()=>{
    if(myStyle.color==="black"){
      setMustyle({
        color:"white",
        backgroundColor:"black"
      })
      setbtntxt("enable light mode")
    }else{
      setMustyle({
        color:"black",
        backgroundColor:"white"
      })
      setbtntxt("enable dark mode")
    }

  }
  return (
    <>
    <div className='container' style={myStyle} >
      <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne"  style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Lorem ipsum
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body"  style={myStyle}>
      Lorem ipsum dolor sit amet, consectetur 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo"  style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}> 
          lorem ipsum
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" >
      <div className="card-body" style={myStyle}>
      Lorem ipsum dolor sit amet, consectetur 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat       </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle} >
            Lorem ipsum
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample" >
      <div className="card-body"  style={myStyle}>
      Lorem ipsum dolor sit amet, consectetur 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat       </div>
    </div>
  </div>
</div>
     <div>
      <button onClick={ToggleStyle} type='button' className='btn btn-success my-3'>{setbtn}</button>
     </div>
      
    </div>
    </>
  )
}
