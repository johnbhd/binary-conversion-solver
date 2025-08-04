import React, { useState } from 'react'

export default function formSubmit() {
    const baseOptions = ["decimal", "binary", "octal", "hexadecimal"]
    
    const [form, setForm] = useState({ 
      number: "",
      fromBase: baseOptions[0],
      toBase: baseOptions[1]
    })
    
    const [submit, setSubmit] = useState({
      number: ""
    })
    
    const handleChange = (e) => { 
      const { name, value } = e.target
        setForm(prev => ({
          ...prev,
          [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(form)
    }


  return {
    submit,
    baseOptions,
    handleChange,
    handleSubmit,
    form
  }
}
