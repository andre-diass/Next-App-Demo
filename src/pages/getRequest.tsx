import { useState } from "react";

interface Message {
  name: string;
}

export default function TesteAPI() {
  const [message, setMessage] = useState<Message>({ name: "" });

  const fetchMessage = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
    setMessage(data);
    
  };

  return (
    <>
      <button onClick={fetchMessage}> Load comments</button>
      <h1>{message.name}</h1>
    </>
  );
}
