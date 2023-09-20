import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, phone, email} = user;
    return (
        <div className="border-4 mb-4 p-4 bg-slate-300 shadow-lg">
            <h2 className="text-xl">{name}</h2>
            <p className="my-2">Phone: {phone}</p>
            <p>Email: {email}</p>
            <button className="text-blue-600 text-2xl font-semibold mt-4">
                <Link to={`/user/${id}`}>Show Details</Link>
                </button>
        </div>
    );
};

export default User;