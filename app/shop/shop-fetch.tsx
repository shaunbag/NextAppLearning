import { Item } from "../lib/definitions";
import ShopList from "../ui/shop-list";

export default async function ShopFetch() {
    
    const data = await fetch("https://fakestoreapi.com/products");
    const items: Item[] = await data.json();

    return <ShopList items={items}/>
}