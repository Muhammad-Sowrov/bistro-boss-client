import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleOut = () => {
    logOut().then().then();
  };
  const nav = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/faq">FAQ</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <button className="btn btn-xs">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          {" "}
          <li>
            {" "}
            <NavLink onClick={handleOut} to="/">
              Log Out
            </NavLink>
          </li>{" "}
        </>
      ) : (
        <>
          <li>
            {" "}
            <NavLink to="/login">Login</NavLink>
          </li>{" "}
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
