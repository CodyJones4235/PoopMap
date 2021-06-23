// import React, { useRef } from "react";
// import { useHistory, Redirect } from "react-router-dom";

// export const Register = (props) => {
//     const name = useRef();
//     const email = useRef();
//     const history = useHistory();
  
//     const existingUser = () => {
//       return fetch(`http://localhost:8088/users?email=${email.current.value}`)
//         .then((res) => res.json())
//         .then((user) => !!user.length);
//     };