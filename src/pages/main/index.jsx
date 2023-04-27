import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
import logo from "../modules/components/img/crypto.png"
import { useEffect, useRef, useState } from "react";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

export const Main = () => {
    const [connection, setConnection] = useState(false); // подключены ли мы 
    const stompClient = useRef(null);
    const onConnected =()=>{ // подключаемся)))
        console.log('WS connected');
        stompClient.current.subscribe('/connect/newHandshake', chatMessages);
        setConnection(true);
    };

    const chatMessages = (payload) => { // слушаем сервер и добавляем в chatHistory
        const payloadData = JSON.parse(JSON.parse(payload.body));
        /* console.log(payloadData["header"]); */  
        console.log(payloadData.request);   
    }; 

    const onError =()=>{ // ничего не работает 
        console.log('WS error');
        setConnection(false);
    };

    const currentMessage = "hello";

    const WsConnect=()=>{ // угадай по названию 
        stompClient.current = over(new SockJS('http://localhost:8085/ws'));
        stompClient.current.connect({}, onConnected, onError);

    };
    const sendMessage=()=>{ // угадай по названию 
        if(stompClient.current !== null) {
            if (currentMessage.trim() !== "") {
                const newDate = new Date();
                const newMessage = {
                  message: currentMessage.trim(),
                };
                stompClient.current.send("/app/messageForHandshake", {}, JSON.stringify(newMessage));
            }
        }
    };

    return (
        <div className="flex ">
            <SideBar />
            <div className=" mx-1 w-full">
                <Header />
                <div className='grid grid-rows-1 gap-4 justify-center h-[865px] text-white mb-5 p-5 mt-16 sm:mt-5'>
                    <div className="mt-[50px]">
                        <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                        <img className="animate-spin-slow" src={logo} alt="logo" />
                    </div>
                    {!connection && <button
                        className="rounded bg-white/20" 
                        onClick={WsConnect}
                    >Connect</button>}
                    <button
                        className="rounded bg-white/20"
                        onClick={sendMessage}
                    >Send</button>
                </div>
            </div>
        </div>
    );
}
