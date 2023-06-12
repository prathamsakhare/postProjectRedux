import { useDispatch, useSelector } from "react-redux";
import { postRemove, selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
// import ReactionButtons from "./ReactionButtons";
const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post, index) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <h4 className="postCredit">
        <PostAuthor userId={post.userId} />
      </h4>
      {/* <ReactionButtons post={post} /> */}
      <button onClick={() => dispatch(postRemove(index))}>Delete Post</button>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
