import React from "react"
import { useHistory, Redirect, Route } from "react-router-dom";
import { PostList } from "./Post/PostList"
import { PostProvider } from "./Post/PostProvider"
import { MapContainer, TileLayer, } from 'react-leaflet'
import "./poopmap.css"
import Markermap from "./Post/MapMarkers"
import { UserProvider } from "./Users/UserProvider"
import {Login} from "./Auth/Login"
import  {Register} from "./Auth/Register"
import {Createpost} from "./Post/CreatePost"
import { CommentProvider } from "./Comments/CommentProvider";
import {Createcomment} from "./Comments/CreateComment"

export const Poopmap = () => (
    <><UserProvider>
        <Route path="/" render={() => {
            if (localStorage.getItem("poop_usr") != null) {
                return (       
                    <CommentProvider>      
                        <PostProvider>
                            {<h1 className="Header">Poopmap</h1>}
                            <MapContainer center={{ lat: 50.505, lng: 50 }} zoom={2}>
                                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
                                <Markermap></Markermap>
                            </MapContainer>
                            <Createpost/>
                            <PostList />
                            <Createcomment/>
                        </PostProvider>
                        </CommentProvider>
                    
                );
            } else {
                return <Redirect to="/login" />;
            }
        }}
    />

<Route path="/login">
      <Login />
    </Route>
    {/* <Route path="/register">
      <Register />
    </Route> */}
    </UserProvider>
  </>
);