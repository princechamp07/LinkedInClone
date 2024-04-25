import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/userSlice";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LeftSide() {


    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserPhoto)
    
    useEffect(() => {
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                setUser(user)
                Navigate("/LinkedInClone/home")
            }
        })
    },[username])
    
     const handleauth = (event) => {
        event.preventDefault()
            if(!username){
                signInWithPopup(auth,provider).then((result) =>{
              
                setUser(result.user)
              
            })
            .catch((e) => {
                alert(e.message)
            })}
            else if (username){
                auth.signOut().then(()=>{
                    dispatch(setSignOutState)
                    Navigate("/LinkedInClone/")
                })
                .catch((err => alert(err.message)))
            }
        }
    
        const setUser = (user) => {
            dispatch(
                setUserLoginDetails({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL,
                })
            )
            }


    return (
        <div>
            {
                //----ArtCard----
            }
            <div className="text-center overflow-hidden mb-2 bg-white rounded-md transition shadow ">
               {
                //UserInfo
               }
                <div className="border-b border-slate-600 py-4 px-4 break-words ">
                    <div className="bg-[url('./images/card-bg.svg')] bg-[center] h-[54px] bg-[length:462px] mt-[-12px] mx-[-12px] mb-0"/>

                    <a>
                    <div className="shadow-none bg-[url('./images/photo.svg')] w-[72px] h-[72px] box-border bg-clip-content rounded-full bg-white bg-[center] bg-[length:60%] bg-no-repeat border-2 border-solid border-white mt-[-38px] mx-auto mb-3 "></div>
                    <Link className="text-lg font-semibold">Welcome,{ username ? username : "there!"}</Link>

                    </a>

                    <a>
                        <div className="text-blue-600 text-sm mt-1 font-medium">Add a Photo</div>
                    </a>
                    
                </div>
                {
               // -----Widget--------
               }
                <div className="border-b border-t border-solid border-slate-200 py-3 hover:bg-slate-100 ">
                    <a className="flex justify-between items-center py-1 px-3">
                        <div className="flex flex-col text-left">
                        <span className="text-sm text-slate-500">Connections</span>
                        <span className="text-sm ">Grow your network</span>
                        </div>
                        <img src="./images/widget-icon.svg" alt="" />
                    </a>
                </div>
                {
                    //-----Items------
                }
                <div className="text-left block p-3 text-sm hover:bg-slate-100">
                    <span className="flex items-center">
                        <img src="./images/item-icon.svg" alt="" />
                    My Items
                    </span>
                </div>
              
            </div>

            {
                //---Community card---
            }
            <div className="overflow-hidden mb-2 bg-white rounded-md transition shadow pt-2 flex flex-col text-left">
                <a className="text-black py-1 px-3 hover:text-blue-500">
                    <span>Groups</span>
                </a>
                <a className="text-black py-1 px-3 hover:text-blue-500">
                    <span className="flex items-center justify-between">
                        Events
                        <img src="./images/plus-icon.svg" alt="" />
                    </span>
                </a>
                <a className="text-black py-1 px-3 hover:text-blue-500">
                    <span>Follow Hashtags</span>
                </a>
                <a className="text-slate-500 border-t p-3 hover:bg-slate-100 ">
                    <span >Dicover more</span>
                </a>
            </div>
        </div>
    );
}

export default LeftSide;