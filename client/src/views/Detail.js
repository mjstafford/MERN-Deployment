import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Pet from '../components/Pet';

export default (props) => {
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false)

    const { id } = useParams()

    console.log(id)

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
            {loaded && <Pet pet={pet} />}
        </div>
    )

}

