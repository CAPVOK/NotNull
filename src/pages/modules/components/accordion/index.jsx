import { useState } from 'react';
import { useSelector } from "react-redux";

export const Accordion = ({ id } /* ,commandAlias ,commandCaption ,commandDescription */) => {
    
    const [showInputs, setShowInputs] = useState(false);

    const request = useSelector((state) => {
        return state.request.request.request.supportedCommands.find((item) => 
            item.alias == id
        )
    })

    const toggleInputs = () => {
        setShowInputs(!showInputs);
    }

    function Send() {
        // Получаем список всех инпутов на странице
        const inputs = document.getElementsByTagName("input");

        // Создаем пустой объект для хранения данных полей
        const data = [];

        // Проходимся по каждому инпуту и добавляем его значение в объект данных
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            data[i] = {
                type: input.type,
                value: input.value
            }
        }

        // Выводим объект данных на консоль
        console.log(JSON.stringify(data));
    }

    const dataType = (key) => {
        switch (key) {
            case "dtBoolean": return "checkbox";
            case "dtInteger": return "number";
            case "dtFloat": return "number";
            case "dtDateTime": return "date";
            default: return "text";
        }
    }

    return (
        <>
            <div className="w-full mx-auto mt-4 text-white ">
                <div
                    onClick={toggleInputs}
                    className="border-t bg-slate-500 rounded flex space-x-5 p-5 cursor-pointer w-full"
                >
                    <p>{request.alias}</p>
                    <p>{request.caption}</p>
                    <p>{request.description}</p>
                </div>
                {showInputs &&
                    <div className=" bg-gray-700 rounded px-20">
                        <div className="flex flex-col">
                            <div className=" flex flex-col">
                                {
                                    request.parameters.map((data, key) => {
                                        const inputType = dataType(data.value.dataType);
                                        return (
                                            <div key={key}>
                                                <p className="m-1 rounded">{data.caption}</p>
                                                <div className="grid grid-cols-3 gap-x-4 w-full">
                                                    <input
                                                        type={inputType}
                                                        className="rounded max-h-6 self-center justify-self-start w-full text-black"
                                                    /* onChange={} */
                                                    ></input>
                                                    <p className="col-span-2">{data.hint}</p>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <br />
                            <div className="flex justify-between mx-7 my-3">
                                {/* <p className="m-1 inline-block">success/fail</p> */}
                                <button
                                    className="border rounded inline-block py-1 px-4 active:bg-white/30 hover:bg-white/20"
                                    onClick={Send}
                                >Send</button>
                            </div>
                        </div>
                        <hr />
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
                }
            </div>
        </>
    );
}

/* 
    <label>
        <input className="absolute opacity-0 peer" type="checkbox"></input>
        <p className="p-5 cursor-pointer inline-block w-11/12">function one</p>
    
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
            className="w-6 h-6 cursor-pointer inline-block float-right mt-5 mr-2 peer-checked:-rotate-90 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>

        <div className=" bg-gray-700 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full rounded px-20">
            <div className="flex flex-col">
                <div className="container flex flex-col">
                    <p className="m-1 rounded">input-1</p>
                    <div className="grid grid-cols-3 gap-x-4 w-full">
                        <input type="text" className="rounded max-h-6 self-center justify-self-start w-full"
                            onChange={(e) => setState(e.target.value)} value={state}
                        ></input>
                        <p className="col-span-2">description ghhgjgjhg ghjfjfghfjfjh sjkahdkjshadkjshkjahdjkhs</p>
                    </div>
                    <p className="m-1">input-2</p>
                    <div className="grid grid-cols-3 gap-x-4 w-full">
                        <input type="text" className="rounded max-h-6 self-center justify-self-start w-full"
                        
                        ></input>
                        <p className="col-span-2">description ghhgjgjhg ghjfjfghfjfjh sjkahdkjshadkjshkjahdjkhs</p>
                    </div>
                    <p className="m-1">input-3</p>
                    <div className="grid grid-cols-3 gap-x-4 w-full">
                        <input type="text" className="rounded max-h-6 self-center justify-self-start w-full"></input>
                        <p className="col-span-2">description ghhgjgjhg</p>
                    </div>
                </div>
                <br/>
                <div className="flex justify-between mx-7 my-3">
                    <p className="m-1 inline-block">success/fail</p>
                    <button 
                        className="border rounded inline-block py-1 px-4 active:bg-white/30 hover:bg-white/20"
                        onClick={Send}
                    >Send</button>
                </div>
            </div>
            <hr/>
            <div className="flex flex-col items-center">
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
                </div>
        </div>
    </label>

*/