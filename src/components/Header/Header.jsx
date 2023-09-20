import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-8 text-2xl font-medium text-blue-700 mb-8">
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact Us</Link>
        </div>
    );
};

export default Header;