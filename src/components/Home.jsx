import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

function Home() {
    return (
        <div className="pt-[52px] max-w-full">
            <section className="min-h-[50px] py-4 px-0 box-content underline justify-center flex flex-col md:flex-row text-center">
                <h5 className="text-blue-600 text-[14px]">
                    <a className="font-bold">Hiring in a hurry? - </a>
                </h5>
                <p className="text-[14px] text-slate-700 font-semibold">Find talented pros in record time with Upwork and keep business moving.</p>
            </section>
            <div className="flex flex-col md:grid  md:grid-cols-[400px_minmax(900px,_1fr)_400px] gap-10 md:mx-10 px-2 md:my-6">
             <LeftSide/>
             <Main/>
             <RightSide/>

            </div>
        </div>
    );
}

export default Home;