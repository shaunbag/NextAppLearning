import { Item } from "../lib/definitions";
import ShopList from "../ui/shop-list";


export default async function Shop() {

    const data = await fetch("https://fakestoreapi.com/products");
    const items: Item[] = await data.json();


    return (
        <div className="flex flex-col items-center gap-6">
            <h1>Shop</h1>
            <a href="/" style={{ color: "white" }}>Home</a><br></br>
            <ShopList items={items} />
        </div>
    )
}