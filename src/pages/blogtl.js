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
               
               <h2 className='h2style'>GO HOME</h2>
               </a>
           <div style={{textAlign: "justify", marginTop:"3%"}}>
                    <div style={{width: "80%", marginLeft: "10%"}}>
                        <h1 className='h1style' >{data?.heading} </h1>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p style={{color: "black", marginTop: "4px"}}>{data?.author}</p>
                            <p className='pstyle' >{data?.timestamp}</p>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img className="imgStyle"   src={data?.img} alt=""/>
                    </div>
                    <div className='paraStyle' >
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



