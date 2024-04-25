import { useState } from "react";


function PostModal(props) {

    const [editorText, setEditorText] = useState("")
    const [shareImage, setShareImage] = useState("")

    const handleChange = (e) =>{
        const image = e.target.files[0];

        if(image ==="" || image === undefined){
            alert(`not an image, the file is a ${typeof image}`)
        return
        }

        setShareImage(image)
    }

    const reset = (e) => {
        setEditorText("");
        props.handleClick(e);
    }

    return (
        <>
        {props.showModal==="open" && 
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 text-black bg-[#00000185]">
            <div className="w-full max-w-[552px]  bg-white max-[90%] rounded-md relative flex flex-col top-8 mx-auto">
                <div className="py-4 px-6 border-b border-solid border-slate-200 text-sm text-slate-600 font-[400] flex justify-between items-center">
                <h2>Create a post</h2>
                <button onClick={(event) => reset(event)} className="h-10 w-10 min-w-[auto]">
                    <img className="pointer-events-none" src="./images/close-icon.svg" alt="" />
                </button>
                </div>
                <div className=" flex flex-col flex-grow overflow-auto align-baseline bg-transparent py-2 px-3">
                    <div className="flex items-center py-3 px-6">
                        <img className="w-12 h-12 bg-clip-content border-solid border border-transparent rounded-full" src="./images/user.svg" alt="" />
                        <span className="font-semibold text-lg leading-6 ml-1">Name</span>
                    </div>
                <div className="py-3 px-6 ">
                <textarea className="border-2 w-full min-h-[100px] resize-none" value={editorText} onChange={(e) => setEditorText(e.target.value)} placeholder="what do you want to talk about?" autoFocus={true}></textarea>
                <div className="text-center">
                    <input type="file" accept="image/gif, image/jpeg, image/png" name="image" id="file" className="hidden"
                    onChange={handleChange}
                    />
                    <p>
                        <label htmlFor="file">Select an image to share</label>
                    </p>
                    {
                        shareImage && <img className="w-full" src={URL.createObjectURL(shareImage)}/>
                    }
                </div>
                </div>
                </div>
                <div className="flex justify-between py-3 px-6">
                    <div className="flex items-center pr-2">
                        <button className="flex items-center h-10 min-w-[auto] w-10 ">
                            <img src="./images/icons-image.svg" alt="" />
                        </button>
                        <button className="flex items-center h-10 min-w-[auto] w-7 ">
                            <img src="./images/icons-video.svg" alt="" />
                        </button>
                    </div>
                    <div className="pl-2 mr-auto border-l border-solid border-slate-300">
                    <button className="flex items-center h-10 min-w-[auto] w-7 ">
                            <img src="./images/icons-comment.png" alt="" />
                        </button>
                    </div>
                    <button disabled={!editorText ? true : false} className={`min-w-[60px] rounded-3xl px-4  text-white bg-[#0a66c2] hover:bg-[#004182]`}>
                        Post
                    </button>
                </div>
            </div>
        </div>
        }
        </>
    );
}

export default PostModal;