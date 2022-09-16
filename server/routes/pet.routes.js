const PetController = require('../controllers/pet.controller')
module.exports = function (app) {
    app.get('/api/pets', PetController.findAllPets)
    app.get('/api/pets/:id', PetController.findOnePet)
    app.put('/api/pets/:id/edit', PetController.updateOnePet)
    app.delete('/api/pets/:id/delete', PetController.deleteOnePet)
    app.post('/api/pets/new', PetController.createPet)
}