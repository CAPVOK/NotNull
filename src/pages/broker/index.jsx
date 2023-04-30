import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Accordion } from "../modules/components/accordion";
import { useSelector } from "react-redux";
import { async } from "q";
export const Broker = () => {
    const brokerName = useParams().broker;
    const navigate = useNavigate();

    const request = useSelector((state) => {
        return state.request.requests.find((item) =>
            item.header.sender === brokerName
        )
    })
    const response = useSelector((state) => state.request.response);
    console.log(response);

    const bord = "border-2 border-gray-300"
    /* bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-md */
    return (
        <div className="min-h-[95vh] mt-5 w-11/12 p-0 pt-5 sm:p-5 mx-auto bg-transparent rounded-xl ">
            {/* header */}
            <div onClick={() => navigate(-1)}
                className="flex p-2 px-3 flex-row w-min justify-start space-x-5 items-center rounded-lg text-white font-normal text-xl cursor-pointer hover:bg-white/20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className=" w-6 h-6 "
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <div className="text-lg sm:text-xl ">{brokerName}</div>
                {/* <div className="mx-5">Status: Undefainded</div> */}
            </div>
            {/* response */}
            <div className="w-full mt-5">
                {/* <table className={`text-white w-full ${bord}`}>
                    <thead>
                        <tr className={`text-white ${bord}`}>
                            <th className={`text-white ${bord}`}>command</th>
                            <th className={`text-white ${bord}`}>answerType</th>
                            {response.errorText && <th className={`text-white ${bord}`}>errorText</th>}
                            {response.status && <th className={`text-white ${bord}`}>
                                <div className="border-b-2 border-gray-300">{response.status.advStatus.caption}</div>
                                <div className="grid grid-flow-col">
                                    {response.status.advStatus.fields.map((item, index) =>
                                        <div key={index} className="border-r-2 border-gray-300">{item.alias}</div>
                                    )}
                                </div>
                            </th>}
                        </tr>
                    </thead>
                    <tbody>
                        <th className={`text-white ${bord}`}>
                            {response.command}
                        </th>
                        <th className={`text-white ${bord}`}>
                            {response.answerType}
                        </th>
                        {response.errorText && <th className={`text-white ${bord}`}>
                            {response.errorText}
                        </th>}
                        {response.status && <th className={`text-white ${bord}`}>
                            <div className="grid grid-flow-col">
                                {response.status.advStatus.data.rows.map((item, index) =>
                                    <div key={index} className="border-r-2 border-gray-300">
                                        <div className="flex flex-col">
                                            {item.values.map((value, index) =>
                                                <div>{value.value}</div>
                                            )}</div>
                                    </div>
                                )}
                            </div>
                        </th>}
                    </tbody>
                </table> */}
            </div>
            {/* list */}
            <div className="flex flex-col p-3 text-xl text-white">
                {
                    request &&
                    request.request.supportedCommands.map((command, key) => {
                        return (
                            <div key={key} className="">
                                <Accordion id={command.alias} sender={brokerName} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
