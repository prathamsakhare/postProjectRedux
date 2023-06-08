import { useDispatch, useSelector } from "react-redux";
import { postRemove, selectAllPosts } from "./postsSlice";
// import { useState } from "react";
const PostsList = () => {
    // const dispatch = useDispatch();
    // const [idno, setIdno] = useState(0)
    // const valId = Number(idno) || 0;
    // const onClickDelete = (id) => {
    //     setIdno(id);
    //     console.log(idno)
    //     dispatch(postRemove(valId))
        
    // }

  const posts = useSelector(selectAllPosts) ;
  const renderedPosts = posts.map(post => (
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>
        {/* <button onClick={onClickDelete(post.id)}>Delete Post</button> */}
    </article>
  ));
  return (
    <section>
        <h2>
            Posts
        </h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList