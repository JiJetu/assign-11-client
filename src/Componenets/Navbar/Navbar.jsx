import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    const [theme, setTheme] = useState('light');

    function changeTheme() {
        const html = document.documentElement;
        if (theme === 'light') {
            html.setAttribute('data-theme', 'dark');
            setTheme('dark');
        } else {
            html.setAttribute('data-theme', 'light');
            setTheme('light');
        }
    }


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>

            {/* <li><NavLink to="/login">Login</NavLink></li> */}
            <li><NavLink to="/rooms">Rooms</NavLink></li>
            <li><NavLink to="/mybookings">My Bookings</NavLink></li>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>


        </>
    );

    return (
        <div className="navbar bg-white">
          
           
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-[#164863] lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#164863] rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="text-2xl text-black">Book<span className="text-red-400">
                    Bliss
                    </span></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className=" text-[#164863] font-semibold  text-sm menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end  gap-2 ">

                <div className="form-control   ">
                    {user ? (
                        <>

                            <div className="w-10 ml-4 rounded-full bg-black">
                                {user && (
                                    <img src={user.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full" />

                                )}
                            </div>
                            <span className="ml-4 text-[#164863]">Welcome, <span className="font-bold ">{user.displayName}</span> </span>
                            {/* <span className="ml-4">Email: {user.email}</span> */}

                            <a

                                onClick={handleLogOut} className="btn btn-sm bg-[#427D9D] hover:bg-[#164863] text-white w-30 lg:w-44 ml-4">Sign Out</a>
                        </>
                    ) : (

                        <Link to='/login'><button className="btn  bg-[#427D9D] hover:bg-[#164863] text-white">Log in</button></Link>

                    )}

                   
                </div>

                <button  onClick={changeTheme} className={`btn ${theme === 'dark' ? 'bg-white hover:bg-white text-white border-[white]' : 'bg-white hover:bg-black text-gray-900 border-[#164863]'} w-16 rounded-full` }>
                        {theme === 'dark' ? (
                            <img className="border-[#164863]" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/moon-symbol.png" alt="moon-symbol" />
                        ) : (
                            <img className="border-[#164863]" width="50" height="50" src="https://img.icons8.com/ios/50/moon-symbol.png" alt="moon-symbol" />
                        )}
                        {theme === 'dark' ? '' : ''}
                    </button>

            </div>
        </div>
    );
};

export default Navbar;
