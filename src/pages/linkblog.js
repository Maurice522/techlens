import React, { useEffect, useState } from 'react'
import './style.css'
import './basic.css'
import { getBlog, getBlogs } from '../firebase';
import { useParams } from 'react-router-dom';

export default function LinkBlog() {
    var mrsarr = [2,3,4,5];
    var revarr = [4,3,2];

    const [data, setData] = useState()
    const [para, setPara] = useState()
    const {id} = useParams();
    const setBlogData = async()=>{
        // var temp = useLocation().data;
        // // console.log(temp)

        // // console.log(temp)
        var res = await getBlog(id, setData)
        if(res){
          var tempPara = []
          res.body.map((item,index)=>{
              if(item!=undefined)
              {
              if(item.split(' ')[0] == "Image"&& item.split(' ')[1] == "Credits:"){
                  console.log(item)
              }else{
                  tempPara.push(<p style={{color: "black", fontSize: "17px"}}>{item}</p> )
              }
              }
              
         })
         setPara(tempPara)
        }else {
          console.log("NOT FOUND")
        }
 
    }
    useEffect(()=>{
       setBlogData()
    },[])
  if(data)
    {return (
    <>
    <div >
        <div className="video-bg">
        <video width="320" height="240" autoPlay loop muted>
         <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4"/>
         Your browser does not support the video tag.
        </video>
       </div>
       <div className="dark-light" id="theme">
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
         <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
       </div>
       <div className="app" style={{marginTop:"30px"}}>
       <div className="wrapper">
       <div className="main-container">
          <div className="main-header">
            <a href="#" style={{textDecoration: "none", width: "5%"}}> <img src="logo.png" style={{width: "100%", marginLeft: "10%"}} /></a>
           <a className="menu-link-main" href="/" style={{paddingLeft: "1%"}}>  Digital Drama</a>
           <div className="header-menu">
            <a className="main-header-link is-active" href="#">Current Blog</a>
            {/* <a className="main-header-link" href="#">Mobile</a>
            <a className="main-header-link" href="#">Web</a>
             */}
           </div>
          </div>
          <div className="content-wrapper">
           <div className="content-wrapper-header">
           <div style={{textAlign: "justify"}}>
                    <div style={{width: "64%", marginLeft: "18%"}}>
                        <h1 style={{color: "black", letterSpacing: "normal", wordSpacing: "normal", fontWeight: "900"}}>{data?.heading} </h1>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p style={{color: "black", marginTop: "4px"}}>{data?.author}</p>
                            <p style={{color: "grey", fontSize: "13px", marginTop: "8px"}}>{data?.timestamp}</p>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img  style={{aspectRatio: 19 / 9, height: "400px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px "}} src={data?.img} alt=""/>
                    </div>
                    <div style={{width: "60%", marginLeft: "20%", marginTop: "50px"}}>
                        {para}
                    </div>
                </div>
            </div>
            <div className="overlay-app"></div>
            </div>
       </div>
       </div>
    </div>
    </div>
    </>
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



