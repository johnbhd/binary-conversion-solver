  import React, { useState } from 'react'
  import SolutionConversion from './SolutionConversion.jsx'

  function AnswerConversion({ submit }) {
    const {number, fromBase, toBase} = submit
    const [Result, setResult] = useState('')

    return (
      <div className='space-y-3 text-gray-100'> 
          <p><span className='font-semibold'>Answer: </span>{Result}</p>
          <h2  className='font-semibold'>Solution:  </h2>
          <div className='px-2'>
            <SolutionConversion fromBase={fromBase} toBase={toBase} number={number} resultComputed = {setResult} />
          </div>
          
      </div>
    )
  }

  export default AnswerConversion