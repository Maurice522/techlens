import React, { useEffect, useState } from 'react'
import { getBlogs } from '../firebase';
import MainCard from '../components/maincard';
import TextCard from '../components/textcard';
import Navbar from '../components/navbar';
import { useNavigate } from "react-router-dom";
function Mainpage() {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState();
    const setBlogData = async()=>{
        var temp = await getBlogs()
        // console.log(temp)
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
        setLoading(false)
    }
    useEffect(()=>{
        setLoading(true)
        setBlogData() 
    },[])
    const viewblog = (data)=>{
        console.log(data)
        // navigate("/viewblog",{state:{data}})
        // if(checkNum(data.heading[data.heading.length-1]))
        // navigate(`/blog/${data.heading}digitaldrama`)
        // else
        navigate(`/tl/blog/${data.heading}`)
    }
  if(loading)
  return (
    <div>loading</div>
  )
  else
  return (
    
    <>
    <Navbar/>
    <div style={{marginTop:"40px"}} className='container'>
        <h1 style={{color:"#fff",paddingBottom:"20px" ,borderBottom:"2px solid #e7005e"}}>EXPLORE</h1>
    </div>
    {(!loading&&data?.length>2)?
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
    {(!loading&&data?.length>5)?
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
    {(!loading&&data)?
    <div className='container'>
    {rows}
    </div>
    :null}
    </>

  )
}

export default Mainpage