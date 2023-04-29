import { Bitcoin } from "../modules/components/bitcoin"
import { SideBar } from "../modules/components/sidebar";
import Header from "../modules/header";
import '../../index.css'
export const Test1 = () => {

    function AnimatedText() {
        return (
          <h1 className="text-4xl font-bold text-white animated-text">NotNull !== !Null</h1>
        );
      }

      function AnimatedFade() {
        return (
          <h1 className="text-4xl font-bold text-white animated-fade-in">NotNull === !Null</h1>
        );
      }
      
    return (
        <div className="h-screen flex">
            <div className="sm:hidden"><Header/></div>
             <SideBar />
            <div className={` sm:block w-full  mx-1`}>
                <Header />
                <div className='w-full p-5 mt-[50px] flex flex-col sm:mt-5 gap-4 text-white '>
                    <p className='text-center text-3xl font-[600] py-5'>NotNull Company</p>
                    <AnimatedText />
                    <AnimatedFade/>
                    {/* <img className="animate-spin-slow mx-auto" src={logo} alt="logo" /> */}
                    <div className="flex flex-col w-full h-96">
                        {/* <Bitcoin/> */}
                        
                        <table class="min-w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                <th scope="col" class="px-6 py-4">#</th>
                                <th scope="col" class="px-6 py-4">First</th>
                                <th scope="col" class="px-6 py-4">Last</th>
                                <th scope="col" class="px-6 py-4">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                class="border-b transition duration-300 ease-in-out hover:bg-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                                <tr
                                class="border-b transition duration-300 ease-in-out hover:bg-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                <td class="whitespace-nowrap px-6 py-4">@fat</td>
                                </tr>
                                <tr
                                class="border-b transition duration-300 ease-in-out hover:bg-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                    
                    <button  className="w-full mt-5 flex flex-row justify-center">
                        <div className="p-3 px-6 bg-amber-400 rounded-xl text-black font-medium">Начать</div>
                    </button>
                
                </div>
            </div>
        </div>
    );
}