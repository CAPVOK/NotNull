import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
import logo from "../modules/components/img/crypto.png"
import { useEffect, useRef } from "react";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

export const Main = () => {
    
    const stompClient = useRef(null);
    const onConnected =()=>{ // подключаемся)))
        console.log('WS connected');
        stompClient.current.subscribe('/newHandshake', chatMessages);
    };

    const chatMessages = (payload) => { // слушаем сервер и добавляем в chatHistory
        console.log(payload);      
    }; 

    const onError =()=>{ // ничего не работает 
        console.log('WS error');
    };

    useEffect(() => { //подключаемся / отключаемся
        stompClient.current = over(new SockJS('http://localhost:8888/ws'));
        stompClient.current.connect({}, onConnected, onError); 

        return () => { // выполняется при размонтировании компонента
            stompClient.current && stompClient.current.disconnect();
        };
    }, []);

    return (
        <div className="flex ">
            <SideBar />
            <div className=" mx-1 w-full">
                <Header />
                <div className='grid grid-rows-1 justify-center h-[865px] text-white mb-5 p-5 mt-16 sm:mt-5'>
                    <div className="mt-[50px]">
                        <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                        <img className="animate-spin-slow" src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}
