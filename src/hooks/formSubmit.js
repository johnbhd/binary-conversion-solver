import React, { useState } from 'react'

export default function formSubmit() {
    const baseOptions = ["decimal", "binary", "octal", "hexadecimal"]
    
    const [form, setForm] = useState({ 
      number: "",
      fromBase: baseOptions[2],
      toBase: baseOptions[1]
    })
    
    const [submit, setSubmit] = useState({
      number: ""
    })
    
    const handleChange = (e) => { 
      const { name, value } = e.target

        setForm((prev) => {
          if (name === "fromBase" && value === prev.toBase) {
            const newToBase = baseOptions.find(val => val !== value)
            return {...prev, fromBase: value, toBase: newToBase}
          }
          if (name === "toBase" && value === prev.fromBase) {
            const newFromBase = baseOptions.find(val => val !== value)
            return {...prev, toBase: value, fromBase: newFromBase}
          }
          return {...prev, [name] : value}
        })
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
