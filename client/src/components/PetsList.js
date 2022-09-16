import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'


const PetsList = (props) => {
    const { pets } = props

    //sort by type
    pets.sort((petA, petB) => {
        const typeA = petA.type.toUpperCase(); // no longer case sensitive
        const typeB = petB.type.toUpperCase(); // ^^^
        if (typeA < typeB) {
            return -1;
        }
        if (typeA > typeB) {
            return 1;
        } else {
            return 0;
        }
    });

    return (
        <table className='table  table-striped table-hover'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    pets.map(pet => {
                        return (
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>details</Link>  |  <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default PetsList