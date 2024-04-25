import PostModal from "./PostModal";
import { useState } from "react";


function Main() {

    const [showModal, setShowModal] = useState("close")

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return
        }
        
        switch(showModal){
            case "open":
                setShowModal("close")
                break;

                case "close":
                    setShowModal("open")
                    break

                    default:
                        setShowModal("close")
                        break
        }
    }

    return (
        <div>
            {
               //------------ CommonCard -------------
            }
            <div className="text-center overflow-hidden mb-2 rounded-md relative border-none ">
                {
                    // ------------- ShareBox --------
                }
                <div className="text-center text-slate-500 ml-2 flex flex-col overflow-hidden mb-2 bg-white rounded-md relative border-none shadow">
                    Share 
                    <div className="flex items-center pt-2 px-4">
                    <img  className="w-12 rounded-full mr-2" src="./images/user.svg" alt="" />
                    <button onClick={handleClick} className="outline-none text-sm min-h-12 bg-transparent text-left bg-white flex items-center font-semibold flex-grow mt-1 pl-4 rounded-3xl border border-solid">Start a post</button>
                </div>

                <div className="flex flex-wrap justify-around pb-1">
                    <button className="outline-none text-sm min-h-12 bg-transparent border-none flex items-center font-semibold">
                    <img src="./images/photo-icon.svg" alt="" className="mb-1 -ml-1" />
                    <span className="text-blue-500">Photo</span>
                    </button>
                    <button className="outline-none text-sm min-h-12 bg-transparent border-none flex items-center font-semibold">
                        <img src="./images/video-icon.svg" alt="" />
                        <span className="text-blue-500">Video</span>
                    </button>
                    <button className="outline-none text-sm min-h-12 bg-transparent border-none flex items-center font-semibold">
                        <img src="./images/event-icon.svg" alt="" />
                        <span className="text-blue-500">Event</span>
                    </button>
                    <button className="outline-none text-sm min-h-12 bg-transparent border-none flex items-center font-semibold">
                        <img src="./images/article-icon.svg" alt="" />
                        <span className="text-blue-500">Write Article</span>
                    </button>
                </div>
                </div>
                
            </div>
            {
                    // ------------ Article -----------
                }

                <div className="text-center ml-2 flex flex-col overflow-hidden mb-2 bg-white rounded-md relative border-none shadow">
                <div className="pr-10 flex-nowrap pt-3 pb-4 mb-2 items-center flex">
                    <a className="mr-3 flex-grow overflow-hidden flex ">
                        <img src="./images/user.svg" alt="" className="w-12 h-12" />
                        <div className="flex flex-col flex-grow ml-2 overflow-hidden">
                            <span className="text-left text-sm text-slate-600 font-bold">Title</span>
                            <span className="text-left text-sm text-slate-600">Info</span>
                            <span className="text-left text-sm text-slate-600">Date</span>
                        </div>
                    </a>
                    <button className="absolute right-3 top-0 bg-transparent outline-none">
                        <img src="./images/ellipsis.svg" alt="" />
                    </button>
                </div>
                    {
                        // Description
                    }
                    <div className="overflow-hidden text-slate-600 text-sm text-left">
                    Description
                    </div>
                    <div className="mt-2 w-full block relative bg-slate-400">
                        <a>
                            <img src="" alt="" className="w-full h-full object-contain" />
                        </a>
                    </div>
                    <ul>
                        <li>
                            <button>
                                <img src="" alt="" />
                            </button>
                        </li>
                    </ul>
                </div>
                <PostModal showModal={showModal} handleClick={handleClick}/>
        </div>
    );
}

export default Main;