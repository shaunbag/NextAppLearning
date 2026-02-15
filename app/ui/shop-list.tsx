'use client';

import { useMemo, useState } from "react";
import { Item } from "../lib/definitions";
import Card from "./card";

export default function ShopList(props: {items: Item[]}) {
    
    const maxValue = useMemo(() => {
        if (props.items.length === 0) return 1000;
        return Math.max(...props.items.map(i => Number(i.price)))
    },[props.items])

    const [query, setQuery] = useState("");
    const [price, setPrice] = useState<number>(maxValue)

    const filtered = useMemo(() => {
        return props.items.filter((item) => {
            const containesQuery = item.title.toLowerCase().includes(query.toLowerCase());
            const isLowerThanPrice = Number(item.price) <= price;
            return containesQuery && isLowerThanPrice;
        })
    }, [query, price, props.items])

    return (
        <div>
            <h1>Shop List</h1>
            <input type="text" placeholder="Search..." className="mb-4 p-2 border border-gray-300 rounded-md w-full" value={query} onChange={(e) => setQuery(e.target.value)} />
            <input type="range" step={0.01} max={maxValue} min={0} value={price} onChange={(e) => setPrice(Number(e.target.value))}/> <p>${price}</p>
            <ul>
                {filtered.map(item => (
                    <Card key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
}