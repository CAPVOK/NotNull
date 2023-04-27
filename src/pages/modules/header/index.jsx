import { Link } from "react-router-dom";
import './Header.css'
import { useNavigate } from "react-router-dom";
import DropLink from "../droplink";
import SignUpLogInForm from "../login";
import { useCookies } from 'react-cookie';


const Header = () => {

    const [cookies, setCookie] = useCookies(['username', 'sessionId']);

    const LnkStyle = "hover:bg-hoverBg rounded-[10px] py-1 px-4 active:bg-activeBg";
    const navigate = useNavigate();

    const clickTable = (broker) => { /*  */
        navigate(`/brokers/${broker}`);
    }

    return (
        <>
            <div className="container lg:px-8 mx-auto text-headerLinks mt-2 sm:mt-7 text-2xl font-semibold">
                <div className='hidden sm:flex sm:flex-row sm:justify-between'>
                    <div className='flexspace-x-1 lg:space-x-2 place-items-center'>
                        {/* <div className="flex space-x-2 text-white bg-white/30 py-1 px-4 rounded-[10px]">
                            <img src={crypto} className="h-[30px]" alt="логотип" />
                            <p className='text-center text-[22px] font-[600]'>NotNull Company</p>
                        </div> */}
                        <Link to="/" className={LnkStyle}>Главная</Link>
                        <Link to="/about" className={LnkStyle}>О нас</Link>
                    </div>

                    <div className='space-x-2 flex'>
                        {
                            (cookies.sessionId)? (
                            <DropLink/>
                            ) : (
                            <div className='whitespace-nowrap'>
                                <SignUpLogInForm/>
                            </div>
                            )
                        }
                        </div>
                </div>

                <div className='sm:hidden'>
                    <input type="checkbox" id="burgerButton" /> {/* 'виртуальная' кнопка */}
                    <label className="sidebarIcon" htmlFor='burgerButton'>  {/* дизайн кнопки */}
                        <div className="spinner diagonal part-1"></div>
                        <div className="spinner horizontal"></div>
                        <div className="spinner diagonal part-2"></div>
                    </label>
                    <div id='sidebarMenu' className='bg-gradient-to-br from-white-40 to-white-10 backdrop-blur-md'> {/* то, что будет появляться */}
                        <div className='p-4 pt-20 mx-auto text-white grid grid-flow-row content-evenly text-center text-2xl h-full'>
                            <Link to="/" className="tracking-widest  text-gray-100 font-normal">Главная</Link>                           
                            <Link to="/about" className="tracking-widest  text-gray-100 font-normal">О нас</Link>
                            <div className="tracking-widest border-gray-100 text-gray-100 font-thin">Брокеры:</div>
                            <div
                                className="tracking-widest  text-gray-100 font-light"
                                onClick={() => clickTable("Sber")}
                            >Sber</div>
                            <div
                                className="tracking-widest  text-gray-100 font-light"
                                onClick={() => clickTable("Tinkoff")}
                            >Tinkoff</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;