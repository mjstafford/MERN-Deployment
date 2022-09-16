import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import EditPetForm from '../components/EditPetForm';

export default (props) => {
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                console.log(response.data)
                setPet(response.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <h3>Details about {loaded && pet.name}</h3>
            {loaded && <EditPetForm pet={pet} />}
        </div>
    )

}

