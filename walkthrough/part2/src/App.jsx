import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Notification from './components/Notification'
import Note from './components/Note'
import Footer from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('an empty note...')
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState('error')

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (e) => {
    e.preventDefault()
    console.log('button clicked', e.target)

    const noteObj =
    {
      content: newNote,
      important: Math.random() > 0.5,
    }

    const newNotes = notes.concat(noteObj)

    console.log(newNotes)

    noteService
      .create(noteObj)
      .then(createdNote => {
        console.log('posted successfully', createdNote)
        setNotes(notes.concat(createdNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(updatedNote => {
        setNotes(notes.map(n => n.id !== id ? n : updatedNote))
      })
      .catch(error => {
        setErrorMessage(
          `The note '${note.content}' was already deleted from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {
          notesToShow.map(note =>
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

      <Footer />
    </div>
  )
}

export default App