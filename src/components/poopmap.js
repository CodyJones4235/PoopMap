import React from "react"
import { PostList } from "./Posts/PostList"
import { PostProvider } from "./Posts/PostProvider"
import { MapContainer, TileLayer, } from 'react-leaflet'
import "./poopmap.css"
import Markermap from "./Posts/MapMarkers"
import { UserProvider } from "./Users/UserProvider"

export const Poopmap = () => (
    <>
        <UserProvider>
            <PostProvider>
                {<h1 className="Header">Poopmap</h1>}
                <MapContainer  center={{ lat: 50.505, lng: 50 }} zoom={2}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
                    <Markermap></Markermap>
                </MapContainer>
                <PostList />
            </PostProvider>
        </UserProvider>
    </>
)