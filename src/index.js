import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Poopmap} from "./components/poopmap"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
         <Router>
        <Poopmap />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)

