import { Suspense } from "react";
import ShopList from "../ui/shop-list";
import ShopFetch from "./shop-fetch";


export default async function Shop() {

    return (
        <div className="flex flex-col items-center gap-6">
            <h1>Shop</h1>
            <a href="/" style={{ color: "white" }}>Home</a><br></br>
            <Suspense fallback={<h3>...Loading</h3>}>
                <ShopFetch />
            </Suspense>
        </div>
    )
}