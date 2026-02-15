'use client';

import { useState } from "react";
import { Item } from "../lib/definitions";
import Card from "./card";

export default function ShopList(props: {items: Item[]}) {
    
    const [query, setQuery] = useState("");
    
    return (
        <div>
            <h1>Shop List</h1>
            <input type="text" placeholder="Search..." className="mb-4 p-2 border border-gray-300 rounded-md w-full" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {props.items.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => (
                    <Card key={item.title} item={item}/>
                ))}
            </ul>
        </div>
    );
}