import { Link } from "react-router-dom";
import './Header.css'
import DropLink from "../droplink";
import SignUpLogInForm from "../login";
import { useCookies } from 'react-cookie';
import { NavLink } from "react-router-dom";

const Header = () => {

    const [cookies,] = useCookies(['username', 'sessionId']);

    const LnkStyle = ({isActive}) => (isActive ? "your-element text-white rounded-[10px] px-2 transition duration-300 easy-ease-in-out" : 
    "your-element text-gray-400 hover:text-white rounded-[10px] px-2 transition duration-300 easy-ease-in-out") 
    
    return (
        <>
            <div className="container lg:px-8 mx-auto text-headerLinks mt-2 sm:mt-7 text-2xl font-semibold">
                <div className='hidden sm:flex sm:flex-row sm:justify-between'>
                    <div className='flexspace-x-1 lg:space-x-2 place-items-center'>
                        {/* <div className="flex space-x-2 text-white bg-white/30 py-1 px-4 rounded-[10px]">
                            <img src={crypto} className="h-[30px]" alt="логотип" />
                            <p className='text-center text-[22px] font-[600]'>NotNull Company</p>
                        </div> */}
                        <NavLink to="/" className={LnkStyle}>Главная</NavLink>
                        <NavLink to="/about" className={LnkStyle}>О нас</NavLink>
                    </div>

                    <div className='space-x-2 flex'>
                        {
                            (cookies.sessionId) ? (
                                <DropLink />
                            ) : (
                                <div className='whitespace-nowrap'>
                                    <SignUpLogInForm />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='sm:hidden space-x-2 z-10 absolute right-[20px] top-[15px]'>
                    {
                        (cookies.sessionId) ? (
                            <DropLink />
                        ) : (
                            <div className='whitespace-nowrap'>
                                <SignUpLogInForm />
                            </div>
                        )
                    }
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;