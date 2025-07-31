import React, { useState } from 'react'

export default function formSubmit() {
    const [form, setForm] = useState({ 
        input: ""
    })

    const [submit, setSubmit] = useState("")

    const handleChange = (e) => { 
        setForm({
        ...form,
        [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form.input)
        setSubmit(form.input)
    }


  return {
    submit,
    handleChange,
    handleSubmit,
    form
  }
}
