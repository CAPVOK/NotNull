import { useState } from 'react';
import { useSelector } from 'react-redux';


export const Accordion = ({ id, sender }) => {
    const [showInputs, setShowInputs] = useState(false);
    const [formData, setFormData] = useState({});

    const request = useSelector((state) => {
        return state.request.requests.find((item) => item.header.sender === sender)
            .request.supportedCommands.find((item) => item.alias === id);
    });

    const toggleInputs = () => {
        setShowInputs(!showInputs);
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    function Send() {
        console.log(JSON.stringify(formData));
    }

    const dataType = (key) => {
        switch (key) {
            case 'dtBoolean':
                return 'checkbox';
            case 'dtInteger':
                return 'number';
            case 'dtFloat':
                return 'number';
            case 'dtDateTime':
                return 'date';
            default:
                return 'text';
        }
    };

    return (
<>
    <div className="w-full mx-auto mt-4 border-[1px] border-gray-500 overflow-hidden rounded-xl text-white ">
        <div
            onClick={toggleInputs}
            className="w-full flex space-x-5 p-5 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md cursor-pointer transition ease-in-out hover:bg-white/10 ">
            <p>{request.alias}</p>
            <p>{request.caption}</p>
            <p>{request.description}</p>
        </div>
        {showInputs && (
            <div className="bg-gray-700 px-20">
                <div className="flex flex-col">
                    <div className=" flex flex-col">
                        {request.parameters.map((data, key) => {
                            const inputType = dataType(data.value.dataType);
                            return (
                                <div key={key}>
                                    <p className="m-1 rounded">{data.caption}</p>
                                    <div className="grid grid-cols-3 gap-x-4 w-full">
                                        <input
                                            name={data.caption}
                                            type={inputType}
                                            className="rounded max-h-6 self-center justify-self-start w-full text-black"
                                            onChange={handleInputChange}
                                            value={formData[data.caption] || ''}
                                            checked={formData[data.caption] || false}
                                        ></input>
                                        <p className="col-span-2">{data.hint}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <br />
                    <div className="flex justify-between mx-7 my-3">
                        <button
                            className="border rounded inline-block py-1 px-4 active:bg-white/30 hover:bg-white/20"
                            onClick={Send}
                        >
                            Send
                        </button>
                    </div>
                </div>
                {/*  <div className="flex flex-col items-center">
                    <p className="m-1">Таблица значений</p>
                    <table className="table-auto border-spacing-2 border-collapse border-slate-400 w-full mb-2">
                        <thead className="text-left">
                            <tr className="space-x-1">
                                <th className="border p-1">Song</th>
                                <th className="border p-1">Artist</th>
                                <th className="border p-1">Year</th>
                            </tr>
                        </thead>
                        <tbody className="space-x-2">
                            <tr>
                                <td className="border p-1">The Sliding Mr. Bones</td>
                                <td className="border p-1">Malcolm Lockyer</td>
                                <td className="border p-1">1961</td>
                            </tr>
                            <tr>
                                <td className="border p-1">Witchy Woman</td>
                                <td className="border p-1">The Eagles</td>
                                <td className="border p-1">1972</td>
                            </tr>
                            <tr>
                                <td className="border p-1">Shining Star</td>
                                <td className="border p-1">Earth, Wind, and Fire</td>
                                <td className="border p-1">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>
        )}
    </div>
</>
    );
};
