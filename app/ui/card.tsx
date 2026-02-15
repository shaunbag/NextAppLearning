import { Item } from "../lib/definitions";

export default function Card(props: {item:Item}) {
    return(
        <div className="flex flex-col items-center gap-3 bg-gray-600 hover:bg-gray-500 px-20 py-10 rounded-md">
            <img  src={props.item.image} alt={props.item.title} width={100}></img>
            <h1 className="align-left">{props.item.title}</h1>
            <p>{props.item.description}</p>
            <p className="text-green-500">${props.item.price}</p>
            <p className="text-sm text-gray-300">{props.item.category}</p>
        
        </div>
    )
}