import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from "axios"

const NewPetForm = (props) => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")

    const [errors, setErrors] = useState(null)

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        //save and redirect
        axios.post('http://localhost:8000/api/pets/new', {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                setErrors(err?.response?.data?.errors)
            })
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-form-row" >


                <div className="new-form-col">
                    {errors?.name && (<span style={{ color: 'red' }}> {errors?.name?.message}</span>)}
                    <label htmlFor='name'>Pet Name:
                        <input className="form-control" type="text" id="name" onChange={e => setName(e.target.value)} value={name} />
                    </label>

                    {errors?.type && (<span style={{ color: 'red' }}> {errors?.type?.message}</span>)}
                    <label htmlFor='type'>Pet Type:
                        <input className="form-control" type="text" id="type" onChange={e => setType(e.target.value)} value={type} />
                    </label>

                    {errors?.description && (<span style={{ color: 'red' }}> {errors?.description?.message}</span>)}
                    <label htmlFor='description'>Pet Description:
                        <input className="form-control" type="text" id="description" onChange={e => setDescription(e.target.value)} value={description} />
                    </label>
                </div>

                <div className="new-form-col">
                    {errors?.skillOne && (<span style={{ color: 'red' }}> {errors?.skillOne?.message}</span>)}
                    <label htmlFor='skillOne'>Skill 1:
                        <input className="form-control" type="text" id="skillOne" onChange={e => setSkillOne(e.target.value)} value={skillOne} />
                    </label>

                    {errors?.skillTwo && (<span style={{ color: 'red' }}> {errors?.skillTwo?.message}</span>)}
                    <label htmlFor='skillTwo'>Skill 2:
                        <input className="form-control" type="text" id="skillTwo" onChange={e => setSkillTwo(e.target.value)} value={skillTwo} />
                    </label>

                    {errors?.skillThree && (<span style={{ color: 'red' }}> {errors?.skillThree?.message}</span>)}
                    <label htmlFor='skillThree'>Skill 3:
                        <input className="form-control" type="text" id="skillThree" onChange={e => setSkillThree(e.target.value)} value={skillThree} />
                    </label>
                </div>
            </div>
            <div>
                <input className="btn btn-primary" type="submit" value="Add Pet" />
            </div>
        </form>
    )
}

export default NewPetForm