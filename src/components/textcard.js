import React from 'react'
import "./card.css"

function TextCard({props}) {

  console.log("props",props)
  let para="";
  for(var i=0;i<3;i++){
    if(props.body[i]!==undefined && props.body[i]!=="Introduction"){
      para+=props.body[i];
    }

   
    
  }
  console.log(para)
  
  return (
    <div className="card" /*onClick={()=>viewblog(props)}*/ style={{border:"0px"}}>

        <div className="card-body cd" style={{backgroundColor:"#181818"}}>
            <blockquote className="blockquote mb-0">
            <h4 style={{color:"#3F72AF"}}>{props.heading}</h4>
            {/* <p style={{marginTop:"20px"}}>{props.body[0]}</p> */}
            <p style={{marginTop:"20px", fontSize: "17px", color:"#aaaaaa", textAlign:"justify"}}>{ para.slice(0,400)/*props.body[0].length<250 ? props.body[1].length<250? props.body[2].substr(0,290):props.body[1].substr(0,290):props.body[0].substr(0,290) */}... </p> 
            <footer style={{marginTop:"20px"}} className="blockquote-footer">{props.author}</footer>
            </blockquote>
        </div>
    </div>
  )
}

export default TextCard