

function Login() {
    return (
        <div className="p-0">
           <nav className=" max-w-[1128px] m-auto flex pt-3 pb-4 items-center relative justify-between flex-nowrap">
            <a href="" className="px-2 w-32 h-9">
                <img src="./images/login-logo.svg" alt="" />
            </a>
            <div>
                <a href="" className="text-xl rounded font-sans font-bold py-2 px-3 text-slate-500 mr-3 hover:bg-slate-200 hover:text-slate-600">Join Now</a>
            <a href="" className="shadow-inner font-sans text-lg py-2 px-6 shadow-sky-600 rounded-3xl duration-150 text-center bg-slate-200 text-blue-700 font-bold hover:bg-slate-300">
                Sign In
            </a>
            </div>
           </nav>

        <section className="flex min-h-0 px-2 pb-36 pt-10 flex-wrap w-full max-w-[1128px] items-center m-auto">
            <div className="w-full">
                <h1 className="pb-0 md:w-[55%] text-center w-full font-bold text-lg leading-[2]  md:text-6xl text-blue-500 md:leading-[70px]">Welcome to your professional community</h1>
            <img src="./images/login-hero.svg" className=" md:w-[700px] md:h-[670px]  md:absolute  top-[230px]  bottom-[-2px] right-[-10px]" alt="" />
            
            </div>
            <div className="  mt-5 md:mt-[100px] md:ml-16 w-[408px]">
                <button className="flex justify-center ml-10 bg-white items-center h-[56px] w-full rounded-full shadow-inner shadow-black text-xl font-sans font-bold duration-150 text-slate-500 hover:bg-slate-200">
                    <img src="./images/google.svg" alt="" />
                    Sign in with Google
                </button>
            </div>
        </section>


        </div>
    );
}

export default Login;