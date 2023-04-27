import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { saveRequest } from "../../core/Slice";

export const SideBar = (data) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickTable = (broker) => { /*  */
        navigate(`/brokers/${broker}`);
    }

    useEffect(()=>{
        dispatch(saveRequest(data));
    },[])

    return (
        <div className=" hidden text-white w-3/12 bg-white/30 backdrop-blur-sm top-0 left-0 sm:flex sm:flex-col place-content-start text-center text-2xl h-[full]" >
            <p className="my-2 mx-1 mt-5">Сервисы БИ</p>
            <hr className="border mx-3 "/>
            <div
                className=" cursor-pointer hover:bg-white/20 mx-3 my-2 py-2 px-3 rounded-md"
                onClick={()=>clickTable(data.data.header.sender)}    
            >{data.data.header.sender}</div>
            
        </div>
    );
}