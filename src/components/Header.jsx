
function Header() {
    return (
        <div className="bg-white border-b-2 left-0 px-6 fixed top-0 w-svw z-50">
            <div className="flex items-center my-0 mx-auto min-h-full max-w-[1128px]">
                <div className="Logo">
                    <a href="/home">
                        <img src="./images/home-logo.svg" className="mr-2 " alt="" />
                    </a>
                    </div>
                    <div className="Search opacity-100 flex-grow relative">
                        <div className="max-w-[280px]">
                            <input type="text" placeholder="Search" className="bg-slate-200 text-slate-500 w-[218px] pl-8 pr-10 leading-8 font-normal text-sm align-text-top border-blue-600 border-none shadow-none" />
                        </div>
                        <div className="SearchIcon pointer-events-none flex items-center  justify-center m-0 w-10 absolute top-[12px] left-[2px]">
                <img src="./images/search-icon.svg" alt="" />
               </div>
                    </div>
                    <nav className="Nav">
                <ul className="flex flex-nowrap NavlistWrap ">
                    <li className="flex items-center active">
                        <a className="items-center bg-transparent flex flex-col text-sm font-normal justify-center leading-6 min-h-[42px] relative min-w-[80px]"><img src="./images/nav-home.svg" alt="" />
                        <span className="text-slate-600 flex items-center hover:text-slate-800">Home</span></a>
                    </li>
                    <li className="flex items-center">
                        <a className="items-center bg-transparent flex flex-col text-sm font-normal justify-center leading-6 min-h-[42px] relative min-w-[80px]"><img src="./images/nav-network.svg" alt="" />
                        <span className="text-slate-600 flex items-center hover:text-slate-800">My Networks</span></a>
                    </li>
                    <li className="flex items-center">
                        <a className="items-center bg-transparent flex flex-col text-sm font-normal justify-center leading-6 min-h-[42px] relative min-w-[80px]"><img src="./images/nav-jobs.svg" alt="" />
                        <span className="text-slate-600 flex items-center hover:text-slate-800">Jobs</span></a>
                    </li>

                    <li className="flex items-center">
                        <a className="items-center bg-transparent flex flex-col text-sm font-normal justify-center leading-6 min-h-[42px] relative min-w-[80px]"><img src="./images/nav-messaging.svg" alt="" />
                        <span className="text-slate-600 flex items-center hover:text-slate-800">Messaging</span></a>
                    </li>

                    <li className="flex items-center">
                        <a className="items-center bg-transparent flex flex-col text-sm font-normal justify-center leading-6 min-h-[42px] relative min-w-[80px]"><img src="./images/nav-notifications.svg" alt="" />
                        <span className="text-slate-600 flex items-center hover:text-slate-800">Notification</span></a>
                    </li>
                </ul>
               </nav>
            </div>
        </div>
    );
}

export default Header;