import React from 'react'
import './DataStyle.css'

const Data = () => {
  return (
    <div className='data'>
    <div className="container">
        <div className="content">
            <h2><span>Data</span>Recovery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima sunt officiis esse tenetur blanditiis earum in obcaecati dolorum perspiciatis eum suscipit cumque cupiditate, dolore quos. Expedita ut voluptas quibusdam?</p>
            <div>
                <button onClick={()=>{console.log("button click")}}>Sign Up</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Data