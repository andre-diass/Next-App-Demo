import { useState, useEffect } from "react";

interface Comment {
  id: number;
  text: string;
}

export default function TesteAPI() {
  const [message, setMessage] = useState<Comment[]>([]);

  const fetchMessage = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
    setMessage(data);
  };

  const deleteComment = async (commentId: number) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      fetchMessage(); // Fetch comments again after successful deletion
    }
  };

  return (
    <>
      <button onClick={fetchMessage}> Load comments</button>
      {message.map((comment) => (
        <div key={comment.id}>
          {comment.id}. {comment.text}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
