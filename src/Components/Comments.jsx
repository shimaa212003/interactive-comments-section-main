import Comment from "./Comment"
import NewComment from "./NewComment"
import { useState } from "react"
import { nanoid } from "nanoid"

import data from "../data.js"

function Comments({ currentUser }) {
  const allData = data;
  const [backendComments, setBackendComments] = useState(allData.comments)
  const [activeComment, setActiveComment] = useState(null)
  // console.log(backendComments);

  const createComment = async (text) => {
    return {
      content: text,
      createdAt: "Just now",
      id: nanoid(),
      replies: [],
      score: 1,
      user: currentUser,
    };
  };

  const addComment = (text) => {
    createComment(text).then((comment) => {
      setBackendComments([...backendComments, comment]);
    });
  };

  const deleteComment = (commentId) => {
    setBackendComments((oldBackendComments) => oldBackendComments.filter(
      (backendComment) => backendComment.id !== commentId
    ));
  };

  const updateComment = (text, commentId) => {
    const updatedBackendComments = backendComments.map((backendComment) => {
      if (backendComment.id === commentId) {
        return { ...backendComment, content: text }
      }
      return backendComment
    })
    setBackendComments(updatedBackendComments)
    setActiveComment(null)
  }

  return (
    <main>
      {backendComments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          currentUser={currentUser}
          replies={comment.replies}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          deleteComment={deleteComment}
          addComment={addComment}
          updateComment={updateComment}
          {...comment}
        />
      ))}
      <NewComment currentUser={currentUser} handleSubmit={addComment} initialText='' buttonText='send' />
    </main>
  )
}

export default Comments 