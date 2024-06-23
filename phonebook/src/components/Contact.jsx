const Contact = ({contact, handleDelete}) => {
    // console.log(contact)
    return (
        <div>
            <h3>{contact.name} | {contact.number}</h3>
            <button onClick={handleDelete} >
              delete
            </button>
        </div>
    )
}

export default Contact
