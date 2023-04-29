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

    const [cookies,] = useCookies(['username', 'sessionId']);
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
        <div className="h-screen flex">
            <div className="sm:hidden"><Header/></div>
            {isConnected && <SideBar />}
            <div className={`${isConnected ? 'hidden sm:block' : ''} w-full  mx-1`}>
                <Header />
                <div className='w-full p-5 mt-[50px] flex flex-col sm:mt-5 gap-4 text-white '>
                    <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                    <img className="animate-spin-slow mx-auto" src={logo} alt="logo" />
                    {!(isConnected) &&
                        <button onClick={WsConnect} className="w-full mt-5 flex flex-row justify-center">
                            <div className="p-3 px-6 bg-amber-400 rounded-xl text-black font-medium">Начать</div>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}
