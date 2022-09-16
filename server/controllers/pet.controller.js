const { Pet } = require('../models/pet.model')

// Find all Pets
module.exports.findAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.json(err))
}

// Find One Pet
module.exports.findOnePet = (req, res) => {
    //find one id req.params (url)
    Pet.findById({ _id: req.params.id })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
}

//Create new Pet
module.exports.createPet = (req, res) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = req.body   //update to match what the form provides

    Pet.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
    //status(400) is to catch/notify front-end of errors specified in Model
    /*Example of what the error looks like:
        {
            "errors": {
                "name": {
                    "message": "name is required",
                    "name": "ValidatorError",
                    "properties": {
                        "message": "name is required",
                        "type": "required",
                        "path": "name"
                    },
                    "kind": "required",
                    "path": "name"
                }
            },
            "_message": "Author validation failed",
            "message": "Author validation failed: name: Name is required",
            "name": "ValidationError"
        }
     */
}

//update new Pet 
module.exports.updateOnePet = (req, res) => {
    const updatedData = req.body
    const id = req.params.id

    Pet.findByIdAndUpdate(id, updatedData, {
        runValidators: true,
        new: true,
    })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
    //status(400) is to catch/notify front-end of errors specified in Model

}

//delete Pet By ID 
module.exports.deleteOnePet = (req, res) => {
    const id = req.params.id

    Pet.findByIdAndDelete(id)
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}