import { useNavigate } from "react-router-dom";

export const SideBar = () => {
    const navigate = useNavigate();

    const clickTable = (broker) => { /*  */
        navigate(`/brokers/${broker}`);
    }

    return (
        <div className=" hidden text-white w-3/12 bg-white/30 backdrop-blur-sm top-0 left-0 sm:flex sm:flex-col place-content-center text-center text-2xl h-[full]" >
            <p className="my-2 mx-1">Брокеры</p>
            <hr className="border mx-3 "/>
            <div
                className=" cursor-pointer hover:bg-white/20 mx-3 my-2 py-2 px-3 rounded-md"
                onClick={()=>clickTable("Sber")}    
            >Sber</div>
            <div
                className=" cursor-pointer hover:bg-white/20 mx-3 my-2 py-2 px-3 rounded-md"
                onClick={()=>clickTable("Tinkoff")}    
            >Tinkoff</div>
        </div>
    );
}