import React, { useEffect, useState } from 'react'
import './style.css'
import './basic.css'
import { getBlogs } from '../firebase';
import { useNavigate } from "react-router-dom";
import AdsComponent from './AdsComponent';


export default function Home() {
    var mrsarr = [2,3,4,5];
    var revarr = [4,3,2];
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [mrs, setmrs] = useState();
    const [lower, setLower] = useState();
    const [lowerrev, setLowerrev] = useState();
    const setBlogData = async()=>{
        var temp = await getBlogs()
        // console.log(temp)
        setData(temp)
        // console.log(temp)
        setmrs(mrsarr.map((i,idx) => { 
            return(
                <h3 className='multitem' onClick={()=>viewblog(temp[i])} key={i+'mrs'} style={{color: "black", letterSpacing: "normal", wordSpacing: "normal", fontWeight: 900, margin: "0px", width: "fit-content", marginBottom: "25px", fontSize: "21px",cursor:"pointer"}}>{temp[i].heading} <span style={{color:"black", marginTop: "15px", fontWeight: 400, fontSize: '14px'}}>- {temp[i].author}</span></h3>
                ) }))
        setLower(temp.map((item, i)=>{
            if(i > 4){
                return (
                    <div onClick={()=>viewblog(temp[i])} key={i} className="morecontentbox multitem" style={{display: "flex", justifyContent: "space-between",cursor:"pointer"}}>
                        <h3 style={{maxWidth: "230px", color: "black", letterSpacing: "normal", wordSpacing: "normal", fontWeight: 900, width:"fit-content", margin: "0px", width: "100%", marginTop: "15px"}}>{temp[i].heading} </h3>
                        <p style={{color: "black", fontSize: "17px"}}>{(temp[i].body[0].split(' ')[0] == "Image" && temp[i].body[0].split(' ')[1] == "Credits:")?null:temp[i].body[0].length<250? temp[i].body[1].length<250? temp[i].body[2].substr(0,290):temp[i].body[1].substr(0,290):temp[i].body[0].substr(0,290)}... </p> 
                        <img  style={{aspectRatio: 16 / 9, marginTop: "15px", width: "300px", backgroundSize: "cover", height: "90%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} src={temp[i].img} alt=""/>
                    </div>
                )
            }
        }))
        setLowerrev(revarr.map((i,index)=>{
            return(
                <div onClick={()=>viewblog(temp[i])}  className="morecontentbox multitem" style={{display: "flex", justifyContent: "space-between",cursor:"pointer"}}>
                            <h3 style={{maxWidth: "230px", color: "black", letterSpacing: "normal", wordSpacing: "normal", fontWeight: 900, width:"fit-content", margin: "0px", width: "100%", marginTop: "15px"}}>{temp[i].heading} </h3>
                            <p style={{color: "black", fontSize: "17px"}}>{(temp[i].body[0].split(' ')[0] == "Image" && temp[i].body[0].split(' ')[1] == "Credits:")?null:temp[i].body[0].length<250? temp[i].body[1].length<250? temp[i].body[2].substr(0,290):temp[i].body[1].substr(0,290):temp[i].body[0].substr(0,290)}... </p> 
                            <img  style={{aspectRatio: 16 / 9, marginTop: "15px", width: "300px", backgroundSize: "cover", height: "90%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} src={temp[i].img} alt=""/>
                        </div>
            )
        }))
    }
    useEffect(()=>{
       setBlogData()
    },[])

    const checkNum = (char)=>{
        var result = false;
        if(char == "1"){
            result =true
        }else if(char == "2"){
            result =true
        }else if(char == "3"){
            result =true
        }else if(char == "4"){
            result =true
        }else if(char == "5"){
            result =true
        }else if(char == "6"){
            result =true
        }else if(char == "7"){
            result =true
        }else if(char == "8"){
            result =true
        }else if(char == "9"){
            result =true
        }else if(char == "0"){
            result =true
        }
        return result
    }

    const viewblog = (data)=>{
        console.log(data)
        // navigate("/viewblog",{state:{data}})
        // if(checkNum(data.heading[data.heading.length-1]))
        // navigate(`/blog/${data.heading}digitaldrama`)
        // else
        navigate(`/blog/${data.heading}`)
    }
    if(data){
        return (
            <>
            <div className='main'>
                <a href="/" style={{textDecoration: "none", marginBottom:"10%"}}> 
               
                <h2> <img src="logo.png" style={{width: "100%", width:"50px", transform: "translateY(20px)"}} /> Digital Drama</h2>
                </a>
                {/* <AdsComponent dataAdSlot='7810258282' /> */}
                   
                   <div style={{textAlign: "justify", marginTop:"3%"}}>
                        <div className="homebox" style={{display: "flex", justifyContent: "space-between"}}>
                            
                            <div onClick={()=>viewblog(data[0])} style={{cursor:"pointer"}}>
        
                                <h1 style={{color: "black", letterSpacing: "normal", wordSpacing: "normal", fontWeight: 900, width:"fit-content", margin: "0px"}}>{data?data[0].heading:null} </h1>
                                <p style={{color: "black", marginBottom: "4px", marginLeft: "1px"}}>{data?data[0].author:null}</p>
                                <img className="mainimg" style={{aspectRatio: 18 / 9, marginTop: "15px", height: "300px"}} src={data?data[0].img:null} alt=""/>
        
                            </div>
                            <div>
                                 {mrs?mrs:null}
                            </div>
                        </div>
                        <div style={{marginTop: "30px"}}>
                        {lower?lower:null}
                        {lowerrev?lowerrev:null}
                        </div>
                    </div>
                    </div>
                  
          
           
            </>
        //     <>
        //     <h1>Place To show Google AdSense</h1>
        //    <AdsComponent dataAdSlot='7810258282' />
        //      </>
          )
    }
    else{
        return(
        
            <div className="video-bgs" style={{backgroundColor:"white"}}>
                <video style={{width:"20%"}}   autoPlay loop muted>
                 <source src="loader.mp4" type="video/mp4"/>
                 Your browser does not support the video tag.
                </video>
            </div>
        )
    }
    
}
// export default function Home() {
//     const [data, setData] = useState();
//     const setBlogData = async()=>{
//         var temp = await getBlogs()
//         console.log(temp)
//         setData
//     }
//     useEffect(()=>{
//        setBlogData()
//     },[])

    
//   return (
//     <>
//     <div >
//         <h1>hello</h1>
//     </div>
//     </>
//   )
// }
