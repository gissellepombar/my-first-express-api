import express, { request, response } from "express";

const app = express()
app.use(express.json())

let instructors = ['Jiho', 'Todd']

app.post('/instructors', (req, res) => {
    //take an array of new instructors and merge w existing
    const newInstuctors = req.body.instructors
    instructors = [...instructors, ...newInstuctors]
    res.send(instructors)
})

// Now we just need to lost some valid requests
app.get('/test', (request, response) => {
    console.log('Test Request Made.')
    response.send('Our API fricken works! ')
})

app.get('/instructors', (request, response) => {
    response.send(instructors)
})

app.get('/secure', (request, response) => {
    //no users are allowed here.
    response.status(401).send('Not authorized.')
})

app.post('/students', (req, res) => {
    // we need to handle the post request (body)
    const newStudent = req.body
    console.log(newStudent)
    res.send(newStudent)
})

app.listen(3030, () => {
    console.log('Listening on http://localhost:3030...')
})