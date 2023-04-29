import { Bitcoin } from "../modules/components/bitcoin"
import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
import '../../index.css'
export const Test1 = () => {

    const [isAnimeted, setAnimated] = useState(false);

    useEffect(()=>{
        setAnimated(true);
    });

    return (
        <div className="h-screen flex">
            <div className="sm:hidden"><Header /></div>
            {isConnected && <SideBar />}
            <div className={`${isConnected ? 'hidden sm:block' : ''} w-full  mx-1`}>
            <div className="hidden sm:block"><Header /></div>
            <div className='w-full px-10 lg:pl-12 tracking-widest mt-12 sm:mt-0 gap-4 text-white '>
                <div className={`beforeAnimated1 ${isAnimeted ? 'afterAnimated' : ''} py-5 pb-9 text-4xl font-semibold text-amber-500`}>Брокер Дядя Вова</div>
                    <div className="w-full lg:w-7/12">
                        <div className={`beforeAnimated2 ${isAnimeted ? 'afterAnimated' : ''} text-2xl sm:text-3xl font-light leading-relaxed `}> {/* текст большой */}
                            Добро пожаловать в наше приложение для банковского обслуживания! Мы предлагаем удобный и надежный способ управлять своими финансами, совершать платежи и получать доступ к своим банковским продуктам.
                        </div>
                        <div className={`beforeAnimated3 ${isAnimeted ? 'afterAnimated' : ''} mt-9 text-gray-300 leading-relaxed`}>
                            Мы гарантируем безопасность ваших данных и финансовых операций. Мы используем самые современные технологии для защиты вашей информации и предотвращения мошенничества.
                        </div>
                        {!(isConnected) &&
                            <div className="">
                                <button 
                                    onClick={WsConnect} 
                                    className=" mt-9 p-3 px-6 bg-amber-500 hover:bg-amber-500 transition ease-in-out rounded-xl text-black font-medium">
                                    Начать
                                </button>
                            </div>
                        }
                    </div>
                    <div className="hidden lg:block absolute top-0 right-0 w-6/12 h-full"> {/* монетка */}
                        <Bitcoin/>
                    </div>
                </div>
            </div>
        </div>
    );
}