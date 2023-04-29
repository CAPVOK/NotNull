import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
import logo from "../modules/components/img/crypto.png"
import { useEffect, useRef, useState } from "react";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { saveConnect, saveStompClient, saveRequests } from "../modules/core/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from 'react-cookie';

export const Main = () => {

    const isConnected = useSelector((state) => state.request.isConnected)
    const dispatch = useDispatch();
    
    const newStomp1 = useSelector((state) => state.request.stompClient);
    const newStomp2 = useRef(null);
    const stompClient = isConnected ? newStomp1 : newStomp2;

    const [cookies, ] = useCookies(['username', 'sessionId']);
    const [count, setCount] = useState(0);

    const onConnected = () => { // подключаемся)))
        console.log('WS connected');
        stompClient.current.subscribe('/connect/newHandshake', getData);
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
        if (cookies.sessionId){
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
                stompClient.current.send("/app/messageForHandshake", {}, JSON.stringify(newMessage));
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
        <div className="flex ">
            {isConnected && <SideBar />}
            <div className=" mx-1 w-full">
                <Header />
                <div className='grid grid-rows-1 gap-4 justify-center h-screen text-white mb-5 p-5 mt-16 sm:mt-5'>
                    <div className="mt-[50px]">
                        <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                        <img className="animate-spin-slow" src={logo} alt="logo" />
                        {!(isConnected) &&
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
