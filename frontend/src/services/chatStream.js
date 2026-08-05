import api from "../api/axios";

export async function streamChat(question, onChunk) {
  const response = await fetch(
    "http://127.0.0.1:8000/chat/stream",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        question,
      }),
    }
  );

  const reader = response.body.getReader();

  const decoder = new TextDecoder();

  let done = false;

  while (!done) {
    const result = await reader.read();

    done = result.done;

    if (!done) {
      onChunk(
        decoder.decode(result.value)
      );
    }
  }
}