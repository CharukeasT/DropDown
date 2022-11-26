import React ,{ useState } from 'react'
import "./Style1.css"
import Select from 'react-select'
 function Dropdown() {
    var colors=[
    {
       value:1,
       label:"lime"
    },
    {
        value:2,
        label:"lavender"
    },
    {
        value:3,
        label:"crimson"
    },
    {
        value:4,
        label:"darkblue"
    },
    {
        value:5,
        label:"teal"
    },
    {
        value:6,
        label:"rebeccapurple"
    },
    {
        value:7,
        label:"ghostwhite"
    },
    {
        value:8,
        label:"aquamarine"
    },
    {
        value:9,
        label:"aliceblue"
    },
    
    ];
    var [setbgcolor,ddlvalue]=useState(colors.label);
    var ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
  return (
    <div>
       <center ><div className='div1'>Color Changer</div></center>
    <div className='wrapper'>
        <style>{'p {background-color:'+ setbgcolor +';}'}</style>
       <center>       
       <div className='optionsss'><Select options={colors} onChange={ddlhandle} placeholder="Select a color">  </Select></div><br></br>
        <p><div className="head"></div><h1 style={{color:"yellow"}}>The selected color is : {setbgcolor}</h1><br></br></p>
        
       </center>
    </div>
    </div>
  )
}

export default Dropdown;