import {
  FaAd,
  FaAlignCenter,
  FaArtstation,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 text-black">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              Bookings
            </NavLink>
          </li>
          <div className="divider divider-info"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menus">
              <FaAlignCenter></FaAlignCenter>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
             <FaArtstation></FaArtstation>
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="ml-3 mt-10 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
