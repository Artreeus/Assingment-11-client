import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    const navItems = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/payment">Add Card</Link></li>
            {user?.email ? (
                <>
                    <li><Link to="/bookings">My Bookings</Link></li>
                </>
            ) : (
                <></>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src="https://i.ibb.co/0Yng01M/logo.png" className="lg:w-auto w-24" alt="logo" />
                    <p>Crestview</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <ul>
                    {user?.email ? (
                        <>
                            <li><button className="btn btn-outline btn-error" onClick={handleLogOut}>Log out</button></li>
                        </>
                    ) : (
                        <button className="btn btn-success btn-outline"><li><Link to="/login">Login</Link></li></button>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
