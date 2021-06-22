import { PostContext } from "./PostProvider";
import React, { useContext, useEffect } from "react"
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import "leaflet/dist/leaflet.css";

export const Markermap = () => {
    const { Posts, getPosts } = useContext(PostContext)

    useEffect(() => {
        console.log("Markermap: useEffect - getPosts")
        getPosts()
    }, [])

    const Markermap = new L.Icon({
        iconUrl: icon,
        iconSize: [25, 40],
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
                    return (
                        <Marker position={[Post.latitude, Post.longitude]} icon={Markermap} key={`${Post.id}`}>
                            <Popup>
                                
                            </Popup>
                        </Marker>
                    )
                })
            }
        </section>
    )
}

export default Markermap;