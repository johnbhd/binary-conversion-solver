import React, { useState } from 'react'
import SolutionConversion from './SolutionConversion.jsx'

function ShowAnswer({ submit }) {
  const {number, fromBase, toBase} = submit
  const [binaryResult, setBinaryResult] = useState('')

  return (
    <div className='space-y-3'> 
        <p><span className='font-semibold'>Answer: </span>{binaryResult}</p>
        <h2  className='font-semibold'>Solution:  </h2>
        <div className='px-2'>
          <SolutionConversion number={number} binaryComputed = {setBinaryResult} />
        </div>
        
    </div>
  )
}

export default ShowAnswer