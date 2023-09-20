import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = post;

    const handelGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>User Id = {id}</h1>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <button onClick={handelGoBack} className=" bg-blue-600 py-2 px-4 text-center mt-4 text-white rounded-lg">
                Go Back
            </button>
        </div>
    );
};

export default PostDetails;