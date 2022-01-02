const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
// create morgan token to log content body for logging POST body
morgan.token('body', (req, res) => JSON.stringify(req.body))


app.use(morgan((tokens, req, res) => {
    // if request is POST then log body
    if (req.method === 'POST') {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens['body'](req, res)
        ].join(' ')
    // else log tiny
    } else {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ')
    }
}))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

// get all persons
app.get('/api/persons', (request, response) => {
    response.send(persons)
})

// get info about phonebook
app.get('/info', (request, response) => {
    response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `)
})

// display information for a single entry
app.get('/api/persons/:id', (request, response) => {
    // get id from url
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    persons = persons.filter(person => person.id !== id)
    console.log(persons)
    if (person) {
        response.status(204).end()
    } else {
        response.status(404).end()
    }
})


app.post('/api/persons/', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Name or number missing'
        })
    }

    // if name already exists in phonebook return error
    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'Name already exists in phonebook'
        })
    }

    const newPerson = {
        "name": body.name,
        "number": body.number,
        "id": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    }
    persons = persons.concat(newPerson)
    response.json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})