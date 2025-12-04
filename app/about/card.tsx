type Props = {
    name: string;
    description: string;
    img: string
}

export default function Card({name, description, img}: Props){

    return(
        <div className="flex flex-col items-center gap-3 bg-gray-600 hover:bg-gray-500 px-20 py-10 rounded-md">
            <img className="w-full" src={img} alt={name}></img>
            <h1 className="align-left">{name}</h1>
            <p>{description}</p>
        </div>
    )
}