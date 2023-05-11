import { useState, useEffect } from "react";
import Scroll from "../components/UI/ScrollToTop";
import PostListLoading from "../components/PostListLoading";
import Post from "../components/Post";
import { getPosts } from "../api/api";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((postList) => {
        setPosts(postList);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <PostListLoading />;

  const postList = posts.map((item) => {
    return (
      <Post key={item.id} title={item.title} body={item.body} id={item.id} />
    );
  });

  return (
    <div className="bg-primary">
      <Scroll />
      <div className="flex flex-col justify-center gap-4 p-5 md:flex-row md:flex-wrap">
        {postList}
      </div>
    </div>
  );
};
export default Posts;
