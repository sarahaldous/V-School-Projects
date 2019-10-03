import React, { useState } from 'react'
import Layout from "../components/layout"

const NewProjects = () => {
    const initInputs = { firstname: "", lastname: "" }
    const [inputs, setInputs] = useState(initInputs)
    const [namesArr, setNamesArr] = useState([])

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        // alert("Here is " inputs.fullname, "'s" inputs.value, "project" )
        e.preventDefault()
        setNamesArr([...namesArr, inputs])
        setInputs(initInputs)
    }
    return (
        <Layout>
        <div>
          <h3>This will soon have a form where new projects can be added by students.</h3>
        </div>
        </Layout>
    )
}

export default NewProjects