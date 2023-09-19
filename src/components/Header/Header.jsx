import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact Us</Link>
        </div>
    );
};

export default Header;