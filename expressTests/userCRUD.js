const express = require('express')
const app = express()

app.use(express.json());


let user = [
    {
        id: 1,
        name: 'Pedro',
        lastname: 'Paulo',
        phone: 948561245
    },
    {
        id: 2,
        name: 'Joao',
        lastname: 'Vitor',
        phone: 984512645
    },
    {
        id: 3,
        name: 'Luiz',
        lastname: 'Miguel',
        phone: 987456124
    }
]

app.get('/', (req, res) => {
    return res.status(200).json(user)
})

app.get('/:id', (req, res) => {
    let findUser = user.find((item) => {
        return item.id === parseInt(req.params.id)
    })

    if (findUser){
        res.status(200).json(findUser)
    }else {
        res.sendStatus(404)
    }
})

app.post('/users', (req, res) => {
    let newUser = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone
    }

    user.push(newUser)

    return res.status(201).json(newUser)
})

app.put('/users/:id', (req, res) => {

    const findUser = user.find((value) => {
        return value.id === parseInt(req.params.id)
    })

    if(findUser){
        let newUserUpdated = {
            id: findUser.id,
            name: req.body.name,
            lastname: req.body.lastname,
            phone: req.body.phone
        }

        let target = user.indexOf(findUser)

        user.splice(target, 1, newUserUpdated)

        res.json(user)

    }else {
        res.sendStatus(404)
    }    
})

app.delete('/users/:id', (req, res) => {
    let userID = user.find((value) => {
        return value.id === parseInt(req.params.id)
    })

    let target = user.indexOf(userID)

    user.splice(target, 1)

    res.json(user)

})

app.listen(3000)

