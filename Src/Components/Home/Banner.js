import { useState } from "react";
import { Link } from "react-router-dom";
import Marketing from "../../Assets/Marketing.png"
import Design from "../../Assets/Design.png"
import Adminstration from "../../Assets/Adminstration.png"
import PetCare from "../../Assets/PetCare.png"
import OddJobs from "../../Assets/OddJobs.png"
import banner from "../../Assets/banner.png"

const Banner = () => {
    const [searchText, setSearchText] = useState("");
    return(
        <div className=" bg-indigo-600 w-full pt-9">
            <div className=" ml-20 flex flex-row justify-between ">
                <div className=" w-[45%] pt-12">
                    <p className="text-md font-sans font-bold text-gray-300 leading-relaxed">Welcome to</p>
                    <p className="text-5xl font-serif font-bold text-white leading-relaxed tracking-wide">SCHOLARSHIFTS</p>
                    <p className="text-base font-sans font-normal text-gray-300 leading-relaxed">Boost Your Skills, Elevate Your Career, and Achieve Financial <br/> Independence - Your Path to Student Freelancing Success.</p>
                    <input 
                        type="text"
                        placeholder="Search Restaraunt"
                        className="flex-1 border-solid border border-black rounded-l-md font-sans text-sm py-2 px-4 text-slate-400 mt-10 w-1/2"
                        value= {searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <span>
                        <button className="border-solid border border-black rounded-r-md font-sans text-sm py-2 px-4 text-white bg-black text-center"
                        onClick={() => alert("Coming Soon")}  
                        >Search</button>
                    </span> 
                    <div className="flex flex-row mt-10 items-center justify-between">
                        <p className="text-xl font-sans font-semibold text-white leading-relaxed">Popular:</p>
                        <Link className="flex flex-col justify-center items-center">
                            <div className=" w-[40px] h-[40px] rounded-md bg-orange-500 flex items-center justify-center">
                               <img src={Marketing} className="w-[30px] h-[30px] m-auto"/> 
                            </div>
                            <p className="text-xs font-sans font-normal text-white leading-relaxed uppercase mt-2">Marketing</p>
                        </Link>
                        <Link className="flex flex-col justify-center items-center">
                            <div className=" w-[40px] h-[40px] rounded-md bg-blue-300 flex items-center justify-center">
                               <img src={Design} className="w-[30px] h-[30px] m-auto"/> 
                            </div>
                            <p className="text-xs font-sans font-normal text-white leading-relaxed uppercase mt-2">Design</p>
                        </Link>
                        <Link className="flex flex-col justify-center items-center">
                            <div className=" w-[40px] h-[40px] rounded-md bg-white flex items-center justify-center">
                               <img src={Adminstration} className="w-[30px] h-[30px] m-auto"/> 
                            </div>
                            <p className="text-xs font-sans font-normal text-white leading-relaxed uppercase mt-2">ADMINISTRATION</p>
                        </Link>
                        <Link className="flex flex-col justify-center items-center">
                            <div className=" w-[40px] h-[40px] rounded-md bg-blue-300 flex items-center justify-center">
                               <img src={PetCare} className="w-[30px] h-[30px] m-auto"/> 
                            </div>
                            <p className="text-xs font-sans font-normal text-white leading-relaxed uppercase mt-2">Pet Care</p>
                        </Link>
                        <Link className="flex flex-col justify-center items-center">
                            <div className=" w-[40px] h-[40px] rounded-md bg-orange-500 flex items-center justify-center">
                               <img src={OddJobs} className="w-[30px] h-[30px] m-auto"/> 
                            </div>
                            <p className="text-xs font-sans font-normal text-white leading-relaxed uppercase mt-2">Odd Jobs</p>
                        </Link>
                    </div> 
                </div>       
                <div className="w-[43%]">
                    <img src={banner}/>
                </div>
            </div>
        </div>
    )
}

export default Banner;