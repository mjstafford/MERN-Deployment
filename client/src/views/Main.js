import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PetsList from '../components/PetsList';


export default (props) => {
    const [pets, setPets] = useState([])
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(response => {
                console.log(response.data)
                setPets(response.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='main-container'>
            <div>
                <h1>Pet Shelter</h1>
                <Link to={'/pets/new'}>add a pet to the shelter</Link>
            </div>
            <h3>These pets are looking for a good home</h3>
            {loaded && <PetsList pets={pets} />}
        </div>
    )
}
