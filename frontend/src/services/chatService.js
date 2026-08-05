import api from "./api";

export const askQuestion = async (
    question,
    conversationId = null,
    document = null
) => {

    const response = await api.post("/chat", {
        question,
        conversation_id: conversationId,
        document,
    });

    return response.data;
};