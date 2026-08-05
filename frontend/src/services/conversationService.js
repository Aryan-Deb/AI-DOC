import api from "../api/axios";

export const getConversations = async () => {
    const res = await api.get("/conversations");
    return res.data;
};