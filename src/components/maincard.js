import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css"

function MainCard({props}) {
  console.log(props)
  let para="";
  for(var i=0;i<3;i++){
    if(props.body[i]!==undefined && props.body[i]!=="Introduction"){
      para+=props.body[i];
    }

   
    
  }
  return (
    <>
    { true?
      <div  className="card" >
      <div className="card-body">
        <h5 style={{color: "#3F72AF", marginBottom:"10px"}}className="card-title">{props.heading}</h5>
        <p style={{color: "#aaaaaa", fontSize: "17px", textAlign:"justify", marginTop:"10px"}}>{ para.slice(0,400)}... </p> 
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    :null}
    </>
    
  )
}

export default MainCard