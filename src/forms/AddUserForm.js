import React, { useState } from 'react'



const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)
    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault()
            if (!user.name || !user.username) return

            props.addUser(user)
            setUser(initialFormState)
        }}
        >
            <label>NAme</label>
            <input
                type="text"
                name="name"
                value=""
                onChange={handleInputChange} />
            <label>UserNAme</label>
            <input
                type="text"
                name="username"
                value=""
                onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm