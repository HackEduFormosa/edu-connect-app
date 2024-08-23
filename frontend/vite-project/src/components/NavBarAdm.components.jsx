import BarChart from "../components/BarChart";
import BarChart2 from "../components/BarChart2";
import {Footer} from "../components/Footer.components"
import {Header}  from "../components/Header.components";

const NavBarAdm = () => {
    return (
        <>
            <Header/>
            <div className="mt-8 text-center">
                <span className="hidden text-gray-400 lg:block">Admin</span>
            </div>

            <ul className="space-y-2 tracking-wide mt-8">
                {[
                    { href: "#", icon: "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z", text: "Reportes" },
                    { href: "/registro", icon: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z", text: "Registrar Usuarios" },
                ].map(({ href, icon, text }) => (
                    <li key={text}>
                        <a href={href} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path className="fill-current text-gray-300 group-hover:text-cyan-300" d={icon} />
                                <path className="fill-current text-gray-600 group-hover:text-cyan-600" d={icon} />
                            </svg>
                            <span className="group-hover:text-gray-700">{text}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                    <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex space-x-4">
                        {/* search bar */}
                        <div className="md:block">
                            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                        <path d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                    </svg>
                                </span>
                                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                            </div>
                        </div>
                        {/* /search bar */}
                        <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                <path d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-8">
                    <div className="shadow-lg p-4 rounded-lg bg-white">
                        <BarChart width={400} height={300} />
                    </div>
                    <div className="shadow-lg p-4 rounded-lg bg-white">
                        <BarChart2 width={400} height={300} />
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default NavBarAdm;
