import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SideBar = (data) => {
    const navigate = useNavigate();
    const clickTable = (broker) => { 
        navigate(`/brokers/${broker}`);
    }
    const requests = useSelector((state)=>state.request.requests);

    return (
        <div className="h-[full] top-0 left-0 flex flex-col text-white bg-white/30 backdrop-blur-sm place-content-start text-center text-2xl " >
            <p className="my-2 mx-1 mt-5">Сервисы БИ</p>
            <hr className="border mx-3 "/>
            {
                (requests?.length > 0) && requests.map((item, index) => (
                    <div key={index}
                    className=" cursor-pointer hover:bg-white/20 mx-3 my-2 py-2 px-3 rounded-md"
                    onClick={()=>clickTable(item.header.sender)}    
                    >{item.header.sender}</div>
                ) )
            }
        </div>
    );
}