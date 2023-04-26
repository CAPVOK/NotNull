import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";

export const Main = () => {

    return (
        <div className="flex ">
            <SideBar />
            <div className=" mx-1 w-full">
                <Header />
                <div className='container mx-auto text-white mb-5 text-3xl font-[600] bg-white/30 backdrop-blur-sm rounded-md h-screen p-5 mt-16 sm:mt-5'>
                    Main
                </div>
            </div>
        </div>
    );
}
