import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
export const Accordion = () =>{
    const [state, setState] = useState([]);

    // map - (тип инпута, его дефолтное значение, его описание)
    const inputs = [
        {   
            type:'text', 
            name:'input-1', 
            description:'description ghhgjgjhg dfsfd sjkahdkjshadkjsh kjahdjkhs jkahdkjshadkjshkj ahdjkhs'},
        {   
            type:'text', 
            name:'input-2', 
            description:'description ghhgjgjhg dfsfd sjkahdkjshadkjs hkjahdjkhs ghhgjgjhg dfsfd sjkahdkjsh adkjshkjahdjkhs'
        },
        {   
            type:'text', 
            name:'input-3', 
            description:'description ghhgjgjhg dfsfd sjkahdkjsh adkjshkjahdjkhs'
        },
    ];

    const Send = () => {
        
    }
    const [inputsState, setInputsState] = useState([]);

    return(
        <>
            <div className=" md:w-2/3 mx-auto mt-4 text-white">
                <div className="border-t bg-slate-500 rounded">
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
                                    {/* {inputs.map((input, index) => (
                                        <>
                                            <p className="m-1 rounded">{input[1]}</p>
                                            <div className="grid grid-cols-3 gap-x-4 w-full">
                                                <input type={input[0]} className="rounded max-h-6 self-center justify-self-start w-full text-black"
                                                    onChange={(e) =>setInputsState({...inputsState, [index]: e.target.value})} 
                                                    value={inputsState[index]} 
                                                ></input>
                                                <p className="col-span-2">{input[2]}</p>
                                            </div>
                                        </>
                                    ))} */}

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
                </div>

            </div>
        </>
    );
}

