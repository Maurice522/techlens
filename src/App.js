import React, { useEffect } from "react";
import { Routes, Route, Navigate,  } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import  Home  from "./pages/Home";
import Single from "./pages/singleblog";
import LinkBlog from "./pages/linkblog";
import Mainpage from "./pages/mainpage";
import LinkBlogtl from "./pages/blogtl";
import TopicBlogs from "./pages/TopicBlogs";

function App() {
  return (
    <>
      {/* <Toaster /> */}
      <Routes>
    
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/viewblog" element={<Single/>} /> */}
        {/* <Route path="/blog/:id" element={<LinkBlog/>} /> */}
        <Route path="/tl/blog/:id" element={<LinkBlogtl/>} />
        <Route path="/blog/:id" element={<TopicBlogs/>} />
      </Routes>
    </>
  );
}

export default App;
