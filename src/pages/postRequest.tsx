import { headers } from "next/dist/client/components/headers";
import { useState } from "react";

export default function PostRequest() {
  const [comment, setComment] = useState<string>("");

  
  //the second parameter of the fetch api here, is an options objectw
  const submitComment = async () => {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit comment</button>
    </>
  );
}
