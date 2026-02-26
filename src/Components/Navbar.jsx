import { Link, Outlet } from "react-router"

const Navbar = () => {
    return (
        <>
        <div className="flex justify-around py-[15px] bg-[oklch(83.7%_0.128_66.29)] w-full gap-[5px] p-[2px]">
            <div>
                <h1 className="text-xl font-bold lg:text-3xl xl:text-3xl pt-2 md:text-4xl">Invoice Builder</h1>
                </div>
                <div>
        <nav>
            <ul className="flex justify-between gap-[15px] items-center pt-[8px]">
                <li><Link to={""}     className=" inline-block 
      text-[15px] md:text-[20px] xl:text-[22px] font-semibold px-[10px] py-[3px]
        bg-zinc-900 text-white rounded-lg
        hover:bg-[oklch(98.5%_0_0)] hover:text-zinc-900 
        hover:scale-110 
        transition-all duration-300 ease-in-out
    ">Home</Link></li>
                <li><Link to={"create"} className="inline-block 
      text-[15px] md:text-[20px] xl:text-[22px] font-semibold px-[10px] py-[3px]
        bg-zinc-900 text-white rounded-lg
        hover:bg-[oklch(98.5%_0_0)] hover:text-zinc-900 
        hover:scale-110 
        transition-all duration-300 ease-in-out
    ">New Invoice</Link></li>
            </ul>
                    </nav>
                    </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar