import { Bitcoin } from "../modules/components/bitcoin"
import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
export const Test1 = () => {

    return (
        <div className="h-screen flex">
            <div className="sm:hidden"><Header/></div>
             <SideBar />
            <div className={` sm:block w-full  mx-1`}>
                <Header />
                <div className='w-full p-5 mt-[50px] flex flex-col sm:mt-5 gap-4 text-white '>
                    <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                    {/* <img className="animate-spin-slow mx-auto" src={logo} alt="logo" /> */}
                    <div className="flex items-center h-96 w-96">
                        <Bitcoin/>
                    </div>
                    
                    <button  className="w-full mt-5 flex flex-row justify-center">
                        <div className="p-3 px-6 bg-amber-400 rounded-xl text-black font-medium">Начать</div>
                    </button>
                
                </div>
            </div>
        </div>
    );
}