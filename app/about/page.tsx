// Client Component
'use client'

import { useState } from "react";
import Card from "./card";

export default function About() {

    // client components can add interactivity and useState hooks for state interaction
    const [serverStuf, setServerStuf] = useState("there is no server stuff");
    const things = [
        {
            name: 'thing 1',
            description: 'Description 1',
            img: '/img/space.jpg'
        },
        {
            name: 'thing 2',
            description: 'Description 2',
            img: '/img/space.jpg'
        },
        {
            name: 'thing 3',
            description: 'Description 3',
            img: '/img/space.jpg'
        },
        {
            name: 'thing 4',
            description: 'Description 4',
            img: '/img/space.jpg'
        },
        {
            name: 'thing 5',
            description: 'Description 5',
            img: '/img/space.jpg'
        },
        {
            name: 'thing 6',
            description: 'Description 6',
            img: '/img/space.jpg'
        }
    ]
    function getServerStuff() {
        const serverStuf = "Here Is Server Stuff";
        setServerStuf(serverStuf);
    }

    return (
        <div className="flex flex-col items-center gap-6">
            <h1>I am the about page</h1>

            <a href="/" style={{ color: "white" }}>Home</a><br></br>

            <button onClick={getServerStuff} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
                                img={thing.img}
                                key={thing.name}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}