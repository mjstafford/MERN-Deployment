import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'


const Pet = (props) => {
    const { pet } = props
    const { _id, name, type, description, skillOne, skillTwo, skillThree } = pet

    console.log("id: ", _id)

    const navigate = useNavigate()

    const adoptHandler = (e) => {
        e.preventDefault()

        axios.delete(`http://localhost:8000/api/pets/${_id}/delete`)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div>
                <h3>Details about {name}</h3>
                <button onClick={adoptHandler}>Adopt {name}</button>
            </div>
            <div>
                <div>
                    <h5>Pet Type:</h5>
                    <p>{type}</p>
                </div>
                <div>
                    <h5>Description:</h5>
                    <p>{description}</p>
                </div>
                <div>
                    <h5>Skills:</h5>
                    <ul>
                        <li style={{ listStyle: "none" }}>{skillOne}</li>
                        <li style={{ listStyle: "none" }}>{skillTwo}</li>
                        <li style={{ listStyle: "none" }}>{skillThree}</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Pet