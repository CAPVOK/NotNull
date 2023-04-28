import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SideBar = (data) => {
    const navigate = useNavigate();
    const clickTable = (broker) => { 
        navigate(`/brokers/${broker}`);
    }
    const request = useSelector((state)=>state.request.request);

    return (
        <div className=" hidden top-0 left-0 sm:flex sm:flex-col text-white bg-white/30 backdrop-blur-sm  place-content-start text-center text-2xl h-[full]" >
            <p className="my-2 mx-1 mt-5">Сервисы БИ</p>
            <hr className="border mx-3 "/>
            {(request !== -1) && <div
                className=" cursor-pointer hover:bg-white/20 mx-3 my-2 py-2 px-3 rounded-md"
                onClick={()=>clickTable(request.header.sender)}    
            >{request.header.sender}</div>}
            
        </div>
    );
}