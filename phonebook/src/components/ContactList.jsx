import Contact from './Contact'
import contactService from '../services/contacts'

const ContactList = ({ persons, filter, deletePerson }) => {
  const personsToShow = persons.filter(person =>
    filter.length === 0
    || person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {
        personsToShow.map(person =>
            <Contact key={person.id} contact={person} handleDelete={() => deletePerson(person.id)} />
        )
      }
    </div>
  )
}

export default ContactList
