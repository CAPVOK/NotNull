import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
import logo from "../modules/components/img/crypto.png"
import { useEffect, useRef, useState } from "react";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

export const Main = () => {
    const [connection, setConnection] = useState(false); // подключены ли мы 

    const [payloadData, setPayloadData] = useState(
        {
            header: {
                messageNum: "",
                timestamp: "",
                sender: "",
                receiver: "",
                messageNumAnswer: ""
            },
            request: {
                supportedCommands: [
                    {
                        alias: "",
                        caption: "",
                        description: "",
                        parameters: [
                            {
                                alias: "",
                                caption: "",
                                hint: "",
                                value: {
                                    dataType: [],
                                    format: "",
                                    value: ""
                                }
                            }
                        ]
                    }
                ]
            }
        }
    );

    const stompClient = useRef(null);
    const onConnected = () => { // подключаемся)))
        console.log('WS connected');
        stompClient.current.subscribe('/connect/newHandshake', chatMessages);
        setConnection(true);
    };

    const chatMessages = (payload) => { // слушаем сервер 
        const Data = JSON.parse(JSON.parse(payload.body));
        /* setPayloadData(prevState => ({
            ...prevState, // копируем все значения из предыдущего состояния
            header: {
                ...prevState.header, // копируем все значения из предыдущего объекта header
                messageNum: Data.header.messageNum, // устанавливаем новое значение messageNum
                timestamp: Data.header.timestamp, // устанавливаем новое значение timestamp
                sender: Data.header.sender, // устанавливаем новое значение sender
                receiver: Data.header.receiver, // устанавливаем новое значение receiver
                messageNumAnswer: Data.header.messageNumAnswer // устанавливаем новое значение messageNumAnswer
            },
            request: {
                ...prevState.request, // копируем все значения из предыдущего объекта request
                supportedCommands: [...prevState.request.supportedCommands, 
                    {
                        alias: prevState.request.supportedCommands.alias,
                        caption: prevState.request.supportedCommands.caption,
                        description: "",
                        parameters: [
                            {
                                alias: "",
                                caption: "",
                                hint: "",
                                value: {
                                    dataType: [],
                                    format: "",
                                    value: ""
                                }
                            }
                        ]
                    }
                ]
            }
        })); */
        setPayloadData(Data);
    };

    const onError = () => {
        console.log('WS error');
        setConnection(false);
    };

    const currentMessage = "hello";

    const WsConnect = () => {
        stompClient.current = over(new SockJS('http://localhost:8085/ws'));
        stompClient.current.connect({}, onConnected, onError);
    };
    const sendMessage = () => {
        if (stompClient.current !== null) {
            if (currentMessage.trim() !== "") {
                const newDate = new Date();
                const newMessage = {
                    message: currentMessage.trim(),
                };
                stompClient.current.send("/app/messageForHandshake", {}, JSON.stringify(newMessage));
            }
        }
    };
    /* ------------------------------------------------------- */
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        if (stompClient.current !== null) sendMessage();
        return () => clearInterval(intervalId);
    }, [count]);

    return (
        <div className="flex ">
            {connection && <SideBar data={payloadData} />}
            <div className=" mx-1 w-full">
                <Header />
                <div className='grid grid-rows-1 gap-4 justify-center h-[865px] text-white mb-5 p-5 mt-16 sm:mt-5'>
                    <div className="mt-[50px]">
                        <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                        <img className="animate-spin-slow" src={logo} alt="logo" />
                        {!connection &&
                            <div className="flex justify-center my-7">
                                <button
                                    className="rounded bg-white/20 py-2 px-4 w-2/3"
                                    onClick={WsConnect}
                                >Начать</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
