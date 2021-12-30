import ReactDOM from 'react-dom'
<<<<<<< HEAD
import App from './App.js'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
=======
import App from './App'
import axios from 'axios'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
>>>>>>> f82399c7c73c153522081792be1a1ed15d576fec
