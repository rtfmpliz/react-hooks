import React, {useState} from 'react'

const AddUserForm = (props) => {
    return (
        <form>
            <label>NAme</label>
            <input type="text" name="name" value=""/>
            <label>UserNAme</label>
            <input type="text" name="username" value=""/>
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm