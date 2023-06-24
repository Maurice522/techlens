import React, { useEffect } from "react";
import { Routes, Route, Navigate,  } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import  Home  from "./pages/Home";
import Single from "./pages/singleblog";
import LinkBlog from "./pages/linkblog";

function App() {
  return (
    <>
      {/* <Toaster /> */}
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/viewblog" element={<Single/>} />
        <Route path="/blog/:id" element={<LinkBlog/>} />
      </Routes>
    </>
  );
}

export default App;
