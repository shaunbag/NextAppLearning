// Client Compoenet
'use client'

import { useState } from "react";

export default function About() {

    // client components can add interactivity and useState hooks for state interaction
    const [serverStuf, setServerStuf] = useState("there is no server stuff");

    function getServerStuff() {
        const serverStuf = "Here Is Server Stuff";
        setServerStuf(serverStuf);
    }

    return (
        <div>
            <h1>I am the about page</h1>

            <a href="/" style={{ color: "white" }}>Home</a><br></br>

            <button onClick={getServerStuff}>
                Get Server Stuff
            </button>

            <p>{serverStuf}</p>
        </div>
    )
}