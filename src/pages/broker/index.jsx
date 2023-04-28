import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Accordion } from "../modules/components/accordion";
import { useSelector } from "react-redux";

export const Broker = () => {
    const request = useSelector((state) => state.request.request)
    const brokerName = useParams().broker;
    const navigate = useNavigate();

    return (
        <>
            <div className=" w-11/12 mx-auto bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-md rounded-lg p-5 mt-5">
                <div className="mb-5 text-white font-normal text-xl flex justify-between items-center ml-[25px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" fixed left-[20px] w-6 h-6 cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    <div className="mx-5">{brokerName}</div>
                    <div className="mx-5">Status: Undefainded</div>
                </div>
                <div className="flex flex-col  min-h-screen border border-white p-3 text-xl text-white">
                    {request.request.supportedCommands.map((command, key) => {
                        return (<>
                        {console.log(command.alias)}
                        <Accordion key={key} id={command.alias} /* commandAlias={command.alias} commandCaption={command.caption} commandDescription={command.description} *//>
                        </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
