import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { UserContext } from "../Users/UserProvider"
import { useMapEvents, } from "react-leaflet"
import "./Post.css"

export const CreatePost = () => {
    const { Posts, getPosts } = useContext(PostContext)
    const { Users, getUsers } = useContext(UserContext)

    document.addEventListener("click", clickEvent => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("Post__location")) {
            useMapEvents.flyTo([Posts.latitude, Posts.longitude], 12)
            }
        })
    


    useEffect(() => {
        console.log("PostList: useEffect - getPosts")
        getPosts()
    }, [])

    useEffect(() => {
        console.log("PostList: useEffect - getUsers")
        getUsers()
    }, [])



    return (
        <section className="Section__Post">
                      <div className="Post" id={`Post--${Post.id}`} key={`${Post.id}`}>
                            <div className="Post__content">
                                <h2 className="Post__title">{Post.title} </h2>
                                <div className="Post__username">@{username}</div>
                                <div className="Post__description"> {Post.description} </div>
                                <div className="Post__location">Latitude:{Post.latitude} Longitude:{Post.longitude}</div>
                            </div>
                        </div>
        </section>
    )
}

