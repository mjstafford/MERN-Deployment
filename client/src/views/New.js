import React from 'react';
import { Link } from 'react-router-dom';
import NewPetForm from '../components/NewPetForm';

export default (props) => {

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <h3>Know a pet needing a home?</h3>
            <NewPetForm />
        </div>
    )
}

