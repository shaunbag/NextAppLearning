type Props = {
    name: string;
    description: string;
}

export default function Card({name, description}: Props){

    return(
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}