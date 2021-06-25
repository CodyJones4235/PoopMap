import React, { useContext, useEffect } from "react"
import { PostContext } from "../Post/PostProvider"
import { UserContext } from "../Users/UserProvider"
import { CommentsContext } from "../Comments/CommentProvider"
// import { useMapEvents, } from "react-leaflet"
import "../Post/Post.css"


export const CommentList = () => {
    const { Posts, getPosts } = useContext(PostContext)
    const { Users, getUsers } = useContext(UserContext)
    const { Comments, getComments } = useContext(CommentsContext)

    useEffect(() => {
        console.log("CommentList: useEffect - getPosts")
        getPosts()
    }, [])

    useEffect(() => {
        console.log("CommentList: useEffect - getUsers")
        getUsers()
    }, [])

    useEffect(() => {
        console.log("CommentList: useEffect - getComments")
        getComments()
    }, [])


    return (
                Comments.map(cmt => {

                    let username = null
                    for (const user of Users) {
                        if (user.id === cmt.userId) {
                            username = user.name
                        }
                    }

                    for(const post of Posts){
                        if (post.id === cmt.postId){
                            
                    return (
                            <div className="Comment__content">
                                <h2 className="Comment__title">@{username} </h2>
                                <div className="Comment__username">{cmt.msg}</div>
                            </div>
                    )

                        }
                    }
                })
    )
}