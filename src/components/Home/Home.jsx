import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className=" flex flex-col justify-center items-center gap-4">
            <Header></Header>
            <h2>This is the Home page</h2>
            <Outlet></Outlet>
            <div className="mt-12 mb-8">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;