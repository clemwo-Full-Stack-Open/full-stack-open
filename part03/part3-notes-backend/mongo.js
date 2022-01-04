const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@fullstack.zzxjd.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url)

// define noteSchema with mongoose
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

// define Note model
const Note = mongoose.model('Note', noteSchema)

//// create note object
//const note = new Note({
//    content: 'I want a nutella croisson',
//    date: new Date(),
//    important: true,
//})
//
//// call mongoose save function that saves the note to the database
//note.save().then(result => {
//    console.log('note saved!')
//    mongoose.connection.close()
//})

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})