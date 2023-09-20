import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="border-4 py-8 px-4 text-center">
            <h1 className="text-2xl font-semibold ">Post Id: {id}</h1>
            <h2 className="text-xl font-medium">Title: {title} </h2>
            <button className=" text-3xl text-blue-600 font-semibold">
                <Link to={`/post/${id}`}>Show Details</Link>
            </button>
        </div>
    );
};

export default Post;