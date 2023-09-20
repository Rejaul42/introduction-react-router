import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div className=" text-center">
            <h2 className=" text-3xl font-semibold my-4">Our Users: {users.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;