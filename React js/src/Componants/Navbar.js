import React from 'react'
import '../Css/Page.css'


function Navbar() {
    return (
        <div className='nav'>
         <div className='btn'>
               <h1 style={{marginLeft:'47px'}}>Meet</h1>
            </div>
        <div className='navbar'>
            <div className='discovery'><h1>&#9881;</h1> <p>discovery</p></div>
            <div className='invited'><h1>&#9787;</h1><p>invited</p></div>
            <div className='support'><h1>&#9990;</h1><p>support</p></div>


             
        </div>

        <div className='btn'>
                <button className='btn1'>Post Job</button>
                <button className='btn2'>Sign In</button>

            </div>
        </div>
    )
}

export default Navbar
