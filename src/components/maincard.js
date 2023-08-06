import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css"

function MainCard({props}) {
  console.log(props.img)
  return (
    <>
    {props.img?
      <div style={{height:"550px", backgroundColor:"#222222", borderRadius:"0px"}} className="card" >
      <img src={props.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 style={{color: "#ffffff", marginBottom:"10px"}}className="card-title">{props.heading}</h5>
        <p style={{color: "#aaaaaa", fontSize: "17px", textAlign:"justify", marginTop:"10px"}}>{(props.body[0].split(' ')[0] == "Image" && props.body[0].split(' ')[1] == "Credits:")?null:props.body[0].length<250? props.body[1].length<250? props.body[2].substr(0,290):props.body[1].substr(0,290):props.body[0].substr(0,290)}... </p> 
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    :null}
    </>
    
  )
}

export default MainCard