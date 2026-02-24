import { Link, Outlet } from "react-router"

const Navbar = () => {
    return (
        <>
        <div className="flex justify-around py-[15px] bg-[oklch(83.7%_0.128_66.29)]">
            <div>
                <h1 className="text-4xl font-bold">Invoice Builder</h1>
            </div>
        <nav>
            <ul className="flex justify-between gap-[35px] items-center pt-[8px]">
                <li><Link to={""}     className=" inline-block 
      text-[22px] font-semibold px-[10px] py-[3px]
        bg-zinc-900 text-white rounded-lg
        hover:bg-[oklch(98.5%_0_0)] hover:text-zinc-900 
        hover:scale-110 
        transition-all duration-300 ease-in-out
    ">Home</Link></li>
                <li><Link to={"create"} className="inline-block 
      text-[22px] font-semibold px-[10px] py-[3px]
        bg-zinc-900 text-white rounded-lg
        hover:bg-[oklch(98.5%_0_0)] hover:text-zinc-900 
        hover:scale-110 
        transition-all duration-300 ease-in-out
    ">New Invoice</Link></li>
                <li><Link to={"history"} className="
     inline-block 
      text-[22px] font-semibold px-[10px] py-[3px]
        bg-zinc-900 text-white rounded-lg
        hover:bg-[oklch(98.5%_0_0)] hover:text-zinc-900 
        hover:scale-110 
        transition-all duration-300 ease-in-out
    ">History</Link></li>
            </ul>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar