import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <p className="text-5xl font-bold text-center my-8">Posts: {posts.length}</p>
            <div className="grid grid-cols-3 gap-8">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;