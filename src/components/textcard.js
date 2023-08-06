import React from 'react'
import "./card.css"

function TextCard({props, viewblog}) {
  return (
    <div className="card" onClick={()=>viewblog(props)} style={{border:"0px"}}>

        <div className="card-body cd" style={{backgroundColor:"#181818"}}>
            <blockquote className="blockquote mb-0">
            <h4 style={{color:"#fff"}}>{props.heading}</h4>
            {/* <p style={{marginTop:"20px"}}>{props.body[0]}</p> */}
            <p style={{marginTop:"20px", fontSize: "17px", color:"#aaaaaa", textAlign:"justify"}}>{(props.body[0].split(' ')[0] == "Image" && props.body[0].split(' ')[1] == "Credits:")?null:props.body[0].length<250? props.body[1].length<250? props.body[2].substr(0,290):props.body[1].substr(0,290):props.body[0].substr(0,290)}... </p> 
            <footer style={{marginTop:"20px"}} className="blockquote-footer">{props.author}</footer>
            </blockquote>
        </div>
    </div>
  )
}

export default TextCard