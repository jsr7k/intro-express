const express = require('express')
const app = express()
const port = 3000

const users = [
    { id: 1, name: 'Rodrigo', lastName: 'Cabrera'},
    { id: 2, name: 'Juan', lastName: 'Perez'},
    { id: 3, name: 'Pedro', lastName: 'Gonzalez'},
]

app.get('/', (request, response) => {
    response.send({ message: 'Intro ExpressJS 26a'})
})

app.get('/users', (request, response) => {
    
    response.send(users)
})

app.get('/users/:id', (request, response) => {
    console.log(request.params);
    const userId = request.params.id
    
    const findUser = users.find(user => user.id == userId)

    if (!findUser) {
        response.send({ error: `Usuario con el id ${userId} no encontrado`})
    }
    response.send(findUser)
})


app.listen(port, () => {
    console.log(`Aplicación escuchando por el puerto ${port}`)
})