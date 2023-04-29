import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
import logo from "../modules/components/img/crypto.png"
import { useEffect, useRef, useState } from "react";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { saveConnect, saveStompClient, saveRequests } from "../modules/core/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from 'react-cookie';
import { api } from "../modules/core/api";

export const Main = () => {

    const isConnected = useSelector((state) => state.request.isConnected)
    const dispatch = useDispatch();

    const newStomp1 = useSelector((state) => state.request.stompClient);
    const newStomp2 = useRef(null);
    const stompClient = isConnected ? newStomp1 : newStomp2;

    const [cookies,] = useCookies(['username', 'sessionId']);
    const [count, setCount] = useState(0);

    const onConnected = () => { // подключаемся)))
        console.log('WS connected');
        stompClient.current.subscribe('/connect/newHandshake', sendMessage, getData);
    };

    const getData = (payload) => { // слушаем сервер 
        const Data = JSON.parse(JSON.parse(payload.body));
        dispatch(saveRequests(Data));
        console.log(Data);
    };

    const onError = () => {
        console.log('WS error');
    };

    const currentMessage = "hello";

    const WsConnect = () => {
        if (cookies.sessionId) {
            stompClient.current = over(new SockJS('http://localhost:8085/ws'));
            stompClient.current.connect({}, onConnected, onError);
            dispatch(saveStompClient(stompClient));
            dispatch(saveConnect(true));
        } else alert("Сначала пройдите авторизацию!");
    };

    const sendMessage = () => {
        if (stompClient.current !== null) {
            if (currentMessage !== "") {
                const newMessage = {
                    message: currentMessage,
                };
                stompClient.current.send("/app/subscribeToHandshakes", {}, JSON.stringify(newMessage));
            } else console.log('Empty')
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        if (isConnected) sendMessage();

        return () => clearInterval(intervalId);
    }, [count]);

    return (
        <div className="h-screen flex">
            <div className="sm:hidden"><Header /></div>
            {isConnected && <SideBar />}
            <div className={`${isConnected ? 'hidden sm:block' : ''} w-full  mx-1`}>
            <div className="hidden sm:block"><Header /></div>
                <div className='w-full p-5 mt-[50px] grid grid-col-1 place-items-center sm:mt-5 gap-4 text-white '>
                    <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                    <img className="animate-spin-slow mx-auto" src={logo} alt="logo" />
                    {!(isConnected) &&
                        <div>
                            <button 
                                onClick={WsConnect} 
                                className=" mt-5 p-3 px-6 bg-amber-400 hover:bg-amber-500 transition ease-in-out rounded-xl text-black font-medium"
                            >
                                Начать
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
