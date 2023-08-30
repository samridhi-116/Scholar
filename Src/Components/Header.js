import Logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../utils/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    return(
        <div className=" bg-indigo-600">
            <div className="flex flex-row justify-between items-center w-4/5 mx-auto py-8">
                <img src={Logo} className=" w-[100px] h-[100px]"/>
                <div className="flex flex-row justify-between items-center w-2/5 text-sm font-sans font-semibold text-white ">
                    <p><Link to = "/">Home</Link></p>
                    <p><Link>Browse Jobs</Link></p>
                    <p><Link>What we do</Link></p>
                    {
                        user ? 
                            <button onClick={()=>{
                                dispatch(logout());
                            }}>
                                {user?.name}
                            </button>
                        : 
                        <Link to='/login'>
                            <button className="border-solid border border-white rounded-sm font-sans text-sm py-1 px-2 text-black bg-white text-center" onClick={()=>{
                                dispatch(login());
                            }}>Log in
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;