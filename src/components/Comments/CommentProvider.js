import React, { useState, createContext } from "react"


export const CommentsContext = createContext()


export const CommentProvider = (props) => {
    const [Comments, setComments] = useState([])

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
        .then(res => res.json())
        .then(setComments)
    }

    const addComments = CommentsObj => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CommentsObj)
        })
        .then(getComments)
    }

    return (
        <CommentsContext.Provider value={{
            Comments, getComments, addComments
        }}>
            {props.children}
        </CommentsContext.Provider>     
    )
}