
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name, website} = user;
    const handelGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>{name}</h2>
            <h1>My Website: {website}</h1>
            <button onClick={handelGoBack} className=" bg-blue-600 py-2 px-4 text-center mt-4 text-white rounded-lg">
                Go Back
            </button>
        </div>
    );
};

export default UserDetails;