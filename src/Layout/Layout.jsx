import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../components/Header/Navbar/Navbar";


const Layout = () => {
    const location = useLocation();
    const isShared = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div>
            { isShared || <Navbar></Navbar>}
            <Outlet></Outlet>
            { isShared || <Footer></Footer>}
        </div>
    );
};

export default Layout;