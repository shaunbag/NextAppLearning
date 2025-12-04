type Props = {
    name: string;
    description: string;
}

export default function Card({name, description}: Props){

    return(
        <div className="flex flex-col items-center gap-3 bg-gray-600 hover:bg-gray-500 px-20 py-10 rounded-md">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}