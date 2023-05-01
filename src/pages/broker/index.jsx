import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Accordion } from "../modules/components/accordion";
import { useSelector } from "react-redux";
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
    const DataRows = response?.response.status.advStatus.data.rows;
    console.log(DataRows);

    return (
        <div className="min-h-[95vh] mt-5 w-11/12 p-0 pt-5 sm:p-5 mx-auto rounded-xl ">
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
            <div className="w-full mt-5 text-white">
                <div className="bg-white/20 backdrop-blur-md p-5 w-max rounded-lg">
                    {DataRows ? <table>
                        <thead>
                            <tr>
                                <th className="border-[1px]">Id</th>
                                {
                                    DataRows[0].values.map((data, key) => (
                                        <th key={key} className="border-[1px] px-3">{data.alias}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DataRows.map((data, key) => (
                                    <tr key={key} className="border-[1px]">
                                        {
                                            <>
                                                <td className="border-[1px] px-3">{data.rowIdent}</td>
                                                {
                                                    data.values.map((item, key) => (
                                                        <td key={key} className="border-[1px] px-3">{item.value.value}</td>
                                                    ))
                                                }

                                            </>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> : <p>Loading data...</p>}
                </div>
            </div>
            {/* list */}
            <div className="flex flex-col text-xl text-white">
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
