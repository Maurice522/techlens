import React from 'react'
import "./button.css"

function Button({text}) {
  return (
    <>
    <button className="custom-btn btn-16">{text}</button>
    </>
  )
}

export default Button