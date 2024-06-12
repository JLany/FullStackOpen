
import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('an empty note...')
  const [showAll, setShowAll] = useState(false)

  const addNote = (e) => {
    e.preventDefault()
    console.log('button clicked', e.target)

    const lastId = notes.reduce((last, note) => 
      note.id > last.id ? note : last
    ).id

    const noteObj = 
    {
      id: lastId + 1,
      content: newNote,
      important: Math.random() > 0.5,
    }
    
    const newNotes = notes.concat(noteObj)
    
    console.log(newNotes)

    setNotes(newNotes)
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  const notesToShow = showAll  
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {
          notesToShow.map(note =>
            <Note key={note.id} note={note} />
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App