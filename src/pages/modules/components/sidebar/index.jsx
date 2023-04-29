import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SideBar = (data) => {
    const navigate = useNavigate();
    const clickTable = (broker) => { 
        navigate(`/brokers/${broker}`);
    }
    const requests = useSelector((state)=>state.request.requests);

    return (

            <div className="mt-16 sm:mt-4 m-4 md:m-5 lg:m-6 w-6/12 md:w-5/12 lg:w-4/12 flex flex-col text-white bg-gradient-to-br from-white/30 rounded-xl to-white/20 backdrop-blur-md shadow-xl place-content-start text-center text-2xl " >
                <p className="mx-1 mt-6 mb-4 ">Сервисы БИ</p>
                <b className="border-[1px] w-11/12 mx-auto border-gray-300"/>
                {
                    (requests?.length > 0) && requests.map((item, index) => (
                        <div key={index}
                        className=" cursor-pointer hover:bg-white/20 mx-3 my-2 py-2 px-3 rounded-md font-normal"
                        onClick={()=>clickTable(item.header.sender)}    
                        >{item.header.sender}</div>
                    ) )
                }
            </div>

    );
}