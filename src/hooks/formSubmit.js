import React, { useState } from 'react'

export default function formSubmit() {
    const [form, setForm] = useState({ 
        number: "",
        base: ""
    })

    const [submit, setSubmit] = useState({
         number: ""
    })

    const handleChange = (e) => { 
        setForm({
        ...form,
        [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(form.number)
    }


  return {
    submit,
    handleChange,
    handleSubmit,
    form
  }
}
