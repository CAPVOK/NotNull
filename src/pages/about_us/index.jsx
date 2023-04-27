import Header from "../modules/header";

export const AboutUs = () => {

    return (
        <>
            <Header/>
            <div className="w-full h-screen mt-12 md:mt-0">
                <div className="flex flex-col lg:grid lg:gap-6 2xl:gap-8 lg:grid-cols-12 2xl:pb-8 ml-2 pt-4 px-6">
                    {/* Краснов */}
                    <div className="bg-indigo-600 lg:order-1 lg:row-span-1 lg:col-span-7 rounded-lg shadow-xl mb-5 lg:mb-0">
                        <div className="mx-6 my-8 2xl:mx-10 flex flex-row items-center">
                            <div className="bg-cover w-20 h-20 lg:w-32 lg:h-32 rounded-full border-2 ml-3" style={{backgroundImage: 'url(/vova_krasniy.jpg)'}}></div>
                            <div className="flex flex-col ml-4">
                                <h1 className="text-white text-xl lg:text-2xl ">Краснов Владимир</h1>
                                <h2 className="text-white text-opacity-50 text-base ">Backend</h2>
                            </div>
                        </div>
                        <div className="-mt-2 relative">
                            <p className="text-white text-xl 2xl:text-2xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">
                                I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                                in the company I joined. I honestly feel I got every penny’s worth.</p>
                            <br />
                        </div>
                    </div>

                    {/* Каримов */}
                    <div className="bg-indigo-600 lg:order-2 lg:row-span-1 lg:col-span-5 rounded-lg shadow-xl mb-5 lg:mb-0">
                        <div className="mx-6 my-8 2xl:mx-10 flex flex-row items-center">
                            <div className="bg-cover bg-center w-20 h-20 lg:w-32 lg:h-32 rounded-full border-2 ml-3" style={{backgroundImage: 'url(/amon.jpg)'}}></div>
                            <div className="flex flex-col ml-4">
                                <h1 className="text-white text-xl lg:text-2xl ">Каримов Амонулло</h1>
                                <h2 className="text-white text-opacity-50 text-base ">Frontend</h2>
                            </div>
                        </div>
                        <div className="-mt-2 relative">
                            <p className="text-white text-xl 2xl:text-2xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">
                                I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                                in the company I joined. I honestly feel I got every penny’s worth.</p>
                            <br />
                        </div>
                    </div>

                    {/* Кабанец */}
                    <div className="bg-indigo-600 lg:order-3 lg:row-span-1 lg:col-span-5 rounded-lg shadow-xl mb-5 lg:mb-0">
                        <div className="mx-6 my-8 2xl:mx-10 flex flex-row items-center">
                            <div className="bg-cover w-20 h-20 lg:w-32 lg:h-32 rounded-full border-2 ml-3" style={{backgroundImage: 'url(/kaban.jpg)'}}></div>
                            <div className="flex flex-col ml-4">
                                <h1 className="text-white text-xl lg:text-2xl ">Кабанец Владимир</h1>
                                <h2 className="text-white text-opacity-50 text-base ">Frontend</h2>
                            </div>
                        </div>
                        <div className="-mt-2 relative">
                            <p className="text-white text-xl 2xl:text-2xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">
                                I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                                in the company I joined. I honestly feel I got every penny’s worth.</p>
                            <br />
                        </div>
                    </div>

                    {/* Толкачeв */}
                    <div className="bg-indigo-600 lg:order-4 lg:row-span-1 lg:col-span-7 rounded-lg shadow-xl mb-5 lg:mb-0">
                        <div className="mx-6 my-8 2xl:mx-10 flex flex-row items-center">
                            <div className="bg-cover w-20 h-20 lg:w-32 lg:h-32 rounded-full border-2 ml-3" style={{ backgroundImage: 'url(/rodya.jpg)'}}></div>
                            <div className="flex flex-col ml-4">
                                <h1 className="text-white text-xl lg:text-2xl ">Толкачeв Родион</h1>
                                <h2 className="text-white text-opacity-50 text-base ">Frontend</h2>
                            </div>
                        </div>
                        <div className="-mt-2 relative">
                            <p className="text-white text-xl 2xl:text-2xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">
                                I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                                in the company I joined. I honestly feel I got every penny’s worth.</p>
                            <br />
                        </div>
                    </div>
                    {/* <!-- Ending of the component about Patrick Abrams -->*/}
                </div>
            </div>
        </>
    );
}
