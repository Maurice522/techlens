import React, { useEffect, useState } from 'react'
import { getBlogs, getBlogsbyId } from '../firebase';
import MainCard from '../components/maincard';
import TextCard from '../components/textcard';
import Navbar from '../components/navbar';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import './basic.css'
function TopicBlogs() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [rows, setRows] = useState();
    const {id} = useParams();
    const setBlogData = async()=>{
        var temp = await getBlogsbyId(id)
         console.log("temp",temp)
        setData(temp)
        var tempRows= [];
        for (var i=6;i<temp.length; i++){
            if(i+1<temp.length)
            tempRows.push(
                <div style={{marginTop:"40px"}} class="row">
                    <div  class="col">
                    <TextCard props={temp[i]} viewblog={viewblog}/>
                    </div>
                    <div  viewblog={viewblog} class="col">
                    <TextCard props={temp[i+1]}/>
                    </div> 
                </div>
            )
            i++;
        }
        setRows(tempRows)
    }
    useEffect(()=>{
        setBlogData(id) 
    },[id])
    const viewblog = (data)=>{
        console.log(data)
        // navigate("/viewblog",{state:{data}})
        // if(checkNum(data.heading[data.heading.length-1]))
        // navigate(`/blog/${data.heading}digitaldrama`)
        // else
        navigate(`/tl/blog/${data.heading}`)
    }
  
  console.log("data",data)
  return (
    
    <>
    <Navbar/>
    <div style={{marginTop:"40px"}} className='container'>
        <h1 style={{color:"#3F72AF",paddingBottom:"20px" ,borderBottom:"2px solid #3F72AF"}}>{id}</h1>
    </div>

    { (data?.length===1)?
    <div className="container">
        <div style={{marginTop:"40px"}} className="row">
            <div  className="col-sm">
                <div onClick={()=>viewblog(data[0])}>
                    <MainCard  props={data[0]}/>
                </div>
            </div>
            
            
        </div>
    </div>
  :null}

    { (data?.length===2)?
    <div className="container">
        <div style={{marginTop:"40px"}} className="row">
            <div  className="col-sm">
                <div onClick={()=>viewblog(data[0])}>
                    <MainCard  props={data[0]}/>
                </div>
            </div>
            <div className="col-sm">
                <div onClick={()=>viewblog(data[1])}>
                    <MainCard props={data[1]}/>
                </div>
            </div>
            
        </div>
    </div>
  :null}
   
   

    { (data?.length>2)?
    <div className="container">
        <div style={{marginTop:"40px"}} className="row">
            <div  className="col-sm">
                <div onClick={()=>viewblog(data[0])}>
                    <MainCard  props={data[0]}/>
                </div>
            </div>
            <div className="col-sm">
                <div onClick={()=>viewblog(data[1])}>
                    <MainCard props={data[1]}/>
                </div>
            </div>
            <div className="col-sm">
                <div onClick={()=>viewblog(data[2])}>
                    <MainCard props={data[2]}/>
                </div>
            </div>
        </div>
    </div>
  :null}
    {(data?.length>5)?
    <div style={{marginTop:"40px"}} className="container">
        <div className="row">
            <div className="col-sm">
                <div onClick={()=>viewblog(data[3])}>
                    <MainCard props={data[3]}/>
                </div>
            </div>
            <div className="col-sm">
                <div onClick={()=>viewblog(data[4])}>
                    <MainCard props={data[4]}/>
                </div>
            </div>
            <div className="col-sm">
                <div onClick={()=>viewblog(data[5])}>
                    <MainCard props={data[5]}/>
                </div>
            </div>
        </div>
    </div>
    :null}
    {(data)?
    <div className='container'>
    {rows}
    </div>
    :null }
    </>

  )
}

export default TopicBlogs;