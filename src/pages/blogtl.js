import React, { useEffect, useState } from 'react'
import './style.css'
import './basic.css'
import { getBlog, getBlogs } from '../firebase';
import { useParams } from 'react-router-dom';

export default function LinkBlogtl() {
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
    <div className='main2'>
        
            <a href="/" style={{textDecoration: "none", marginBottom:"10%"}}> 
               
               <h2>GO HOME</h2>
               </a>
           <div style={{textAlign: "justify", marginTop:"3%"}}>
                    <div style={{width: "64%", marginLeft: "18%"}}>
                        <h1 style={{color: "black", letterSpacing: "normal", wordSpacing: "normal", fontWeight: "900"}}>{data?.heading} </h1>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p style={{color: "black", marginTop: "4px"}}>{data?.author}</p>
                            <p style={{color: "grey", fontSize: "13px", marginTop: "8px"}}>{data?.timestamp}</p>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img  style={{aspectRatio: 19 / 9, height: "400px", width:"90%", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px "}} src={data?.img} alt=""/>
                    </div>
                    <div style={{width: "70%", marginLeft: "15%", marginTop: "50px"}}>
                        {para}
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



