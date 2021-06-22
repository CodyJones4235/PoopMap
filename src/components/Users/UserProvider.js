import React, { useState, createContext } from "react"


export const UserContext = createContext()


export const UserProvider = (props) => {
    const [Users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/Users")
        .then(res => res.json())
        .then(setUsers)
    }

    const addUser = UsersObj => {
        return fetch("http://localhost:8088/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UsersObj)
        })
        .then(getUsers)
    }

    return (
        <UserContext.Provider value={{
            Users, getUsers, addUser
        }}>
            {props.children}
        </UserContext.Provider>     
    )
}