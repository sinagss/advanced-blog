import { Link } from "react-router-dom";
import postImage from "../assets/undraw_post.svg";
const Post = ({ title, body }) => {
  return (
    <div className="my-20 max-w-md rounded-lg bg-primaryLight px-8 py-4 shadow-lg">
      <div className="-mt-16 flex justify-center md:justify-end">
        <img
          className="h-20 w-20 rounded-full border-2 border-indigo-500 object-fill"
          src={postImage}
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{body}</p>
      </div>
      <div className="fix right-3 mt-4 flex justify-end">
        <a href="#" className="text-l font-medium text-indigo-500">
          <Link to="post/:id">Read More</Link>
        </a>
      </div>
    </div>
  );
};

export default Post;
