import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

import React from "react";

const reactionEmoji = {
  thumbsUp: "thumbsUp",
  wow: "Wow!",
  heart: "Love",
  rocket: "Rockit!",
  coffee: "Coffee",
};

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) =>{
        return(
            <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => dispatch(reactionAdded({postId : post.id, reaction:name}))}
            >{emoji}{post.reaction[name]}</button>
        )
    })
    return <div>{reactionButtons}</div>
 
}

export default ReactionButtons
