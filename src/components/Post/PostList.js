import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { UserContext } from "../Users/UserProvider"
import { CommentsContext } from "../Comments/CommentProvider"
import { CommentList } from "../Comments/CommentList"
import "./Post.css"

export const PostList = () => {
    const { Posts, getPosts } = useContext(PostContext)
    const { Users, getUsers } = useContext(UserContext)
    const { Comments, getComments } = useContext(CommentsContext)
    useEffect(() => {
        console.log("PostList: useEffect - getPosts")
        getPosts()
    }, [])

    useEffect(() => {
        console.log("PostList: useEffect - getUsers")
        getUsers()
    }, [])
    useEffect(() => {
        console.log("PostList: useEffect - getUsers")
        getComments()
    }, [])



    return (
        <section className="Section__Post">
            {
                Posts.map(Post => {

                    let msg_msg = null
                    let msg_usr = null
                    let username = null

                    for (const user of Users) {
                        if (user.id === Post.userId) {
                            username = user.name
                        }
                    }

                    for (const cmt of Comments) {
                        if (cmt.postId === Post.id) {
                            msg_msg = cmt.msg
                            for (const user of Users) {
                                if (user.id === cmt.userId) {
                                    msg_usr = user.name
                                }
                            }
                        }
                    }
                    return (
                        <div className="Post" id={`Post--${Post.id}`} key={`${Post.id}`}>
                            <div className="Post__content">
                                <h2 className="Post__title">{Post.title} </h2>
                                <div className="Post__username">@{username}</div>
                                <div className="Post__description"> {Post.description} </div>
                                <div className="Post__location">Latitude:{Post.latitude} Longitude:{Post.longitude}</div>
                                <h5>comments</h5>
                                <div>{msg_usr}: {msg_msg}</div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}