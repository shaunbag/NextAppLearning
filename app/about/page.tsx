// Client Compoenet
'use client'

import { useState } from "react";
import Card from "./card";

export default function About() {

    // client components can add interactivity and useState hooks for state interaction
    const [serverStuf, setServerStuf] = useState("there is no server stuff");
    const things = [
        {
            name: 'thing 1',
            description: 'Description 1'
        },
        {
            name: 'thing 2',
            description: 'Description 2'
        },
        {
            name: 'thing 3',
            description: 'Description 3'
        },
        {
            name: 'thing 4',
            description: 'Description 4'
        },
        {
            name: 'thing 5',
            description: 'Description 5'
        },

    ]
    function getServerStuff() {
        const serverStuf = "Here Is Server Stuff";
        setServerStuf(serverStuf);
    }

    return (
        <div className="flex flex-col items-center gap-6">
            <h1>I am the about page</h1>

            <a href="/" style={{ color: "white" }}>Home</a><br></br>

            <button onClick={getServerStuff}>
                Get Server Stuff
            </button>

            <p>{serverStuf}</p>
            <div className="grid grid-cols-2 gap-6 bg-gray-900 px-20 py-10 rounded-md">
                {
                    things.map(thing => {
                        return (
                            <Card
                                name={thing.name}
                                description={thing.description}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}