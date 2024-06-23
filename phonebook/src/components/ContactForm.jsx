import axios from 'axios'
import { useState } from 'react'

const ContactForm = ({
  newName, 
  newNumber,
  handleFormSubmit,
  handleNameChange,
  handleNumberChange }) => {
  
  return (
    <form>
      <h2>Add new</h2>
      <div>
        name:
        <input
          value={newName}
          onChange={handleNameChange}
        />
        <br />
        number:
        <input
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleFormSubmit}>
          add
        </button>
      </div>
    </form>
  )
}

export default ContactForm
