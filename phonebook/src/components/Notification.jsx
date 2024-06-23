
const Notification = ({ message, style }) => {
    

    if (message === '')
        return null

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Notification
