import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div className=" text-center mt-40 h-full ">
            <h1 className="text-5xl font-extrabold">Oopps!!!</h1>
            <p className="text-2xl mt-4 text-red-500 font-semibold">Page not found</p>
            <button className="bg-blue-600 text-xl px-4 py-2 text-white rounded-lg mt-8">
                <Link to={'/'}>Go to Home</Link>
            </button>
        </div>
    );
};

export default ErrorPages;