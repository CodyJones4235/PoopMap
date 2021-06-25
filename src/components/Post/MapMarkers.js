import { PostContext } from "./PostProvider";
import { UserContext } from "../Users/UserProvider"
import React, { useContext, useEffect } from "react"
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from '../Images/Marker.png';
import "leaflet/dist/leaflet.css";

export const Markermap = () => {
    const { Posts, getPosts } = useContext(PostContext)
    const { Users, getUsers } = useContext(UserContext)

    useEffect(() => {
        console.log("Markermap: useEffect - getUsers")
        getUsers()
    }, [])

    useEffect(() => {
        console.log("Markermap: useEffect - getPosts")
        getPosts()
    }, [])

    const Markermap = new L.Icon({
        iconUrl: icon,
        iconSize: [36, 40],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]
    });

    // for (const Post of Posts){
    //     if 
    // }




    return (
        <section className="Post">
            {
                Posts.map(Post => {

                    let username = null
                    for (const user of Users) {
                        if (user.id === Post.userId) {
                            username = user.name
                        }
                    }
                    return (
                        <Marker position={[Post.latitude, Post.longitude]} icon={Markermap} key={`${Post.id}`}>
                            <Popup>
                                {username}
                            </Popup>
                        </Marker>
                    )
                })
            }
        </section>
    )
}

export default Markermap;