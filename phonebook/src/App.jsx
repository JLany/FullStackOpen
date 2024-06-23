import { useState, useEffect } from 'react'
import contactService from './services/contacts'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Notification from './components/Notification'

const App = () => {
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: '10px',
    fontSize: '20px',
    margin: '15px',
    padding: '10px',
  }
  const errorStyle = {
    ...notificationStyle,
    color: 'red',
  }

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')

  const [successMessage, setSuccessMessage] = useState('success')
  const [errorMessage, setErrorMessage] = useState('error')

  useEffect(() => {
    contactService
      .getAll()
      .then(persons => {
        console.log('resolved', persons)
        setPersons(persons)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    const newSearchText = e.target.value

    setSearchText(newSearchText)
  }

  const addPerson = (e) => {
    e.preventDefault()

    const personExists = persons
      .findIndex(person =>
        person.name === newName
      ) !== -1

    console.log(personExists)

    if (personExists) {
      const ok = confirm(`${newName} already exists in the phonebook.
Do you want to replace the old number?`)

      if (!ok)
        return

      const personObj = {
        ...persons.find(p => p.name === newName),
        number: newNumber
      }

      contactService
        .update(personObj.id, personObj)
        .then(updatedPerson => {
          console.log('updated number of', newName, updatedPerson)
          setPersons(persons.map(p => (p.id === updatedPerson.id ? updatedPerson : p)))
          setNewName('')
          setNewNumber('')

          setSuccessMessage(`${updatedPerson.name} was updated successfully.`)
          setTimeout(() => {
            setSuccessMessage('')
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(
            `${personObj.name} was already deleted from the server.`
          )

          setPersons(persons.filter(p => p.id !== personObj.id))

          setTimeout(() => {
            setErrorMessage('')
          }, 5000)
        })

      return
    }

    const personObj =
    {
      name: newName,
      number: newNumber,
    }

    contactService
      .create(personObj)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')

        setSuccessMessage(`${newPerson.name} was added successfully.`)
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000)
      })
  }

  const deletePerson = (id) => {

    const deleteCandidate = persons.find(p => p.id === id)
    const ok = confirm(`Delete ${deleteCandidate.name} ?`)
    if (!ok)
      return

    console.log(`deleting from server ${id}`)

    contactService
      .truncate(id)
      .then(res => {
        setPersons(persons.filter(person => person.id !== id))

        setSuccessMessage(`${deleteCandidate.name} was deleted successfully.`)
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000)
      })
      .catch(error => {
        setErrorMessage(
          `${deleteCandidate.name} was already deleted from the server.`
        )

        setPersons(persons.filter(p => p.id !== id))

        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      })
  }

  const personsToShow = persons.filter(person => {
    return searchText.length === 0
      || person.name.toLowerCase().includes(searchText.toLowerCase())
  })

  console.log('to show: ', personsToShow)

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={successMessage} style={notificationStyle} />
      <Notification message={errorMessage} style={errorStyle} />

      <Filter onFilterChange={handleSearchChange} searchText={searchText} />

      <br />

      <ContactForm
        newName={newName}
        newNumber={newNumber}
        handleFormSubmit={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <ContactList persons={persons} filter={searchText} deletePerson={deletePerson} />
      ...

    </div>
  )
}


export default App