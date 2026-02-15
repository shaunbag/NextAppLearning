import SideBar from "../ui/side-bar";

export default function Layout({children}: {children: React.ReactNode}){
    return(
        <div className="flex">
            <div className="w-1/6">
                <SideBar />
            </div>
            <div className="w-5/6">
                {children}
            </div>
        </div>
    )
}