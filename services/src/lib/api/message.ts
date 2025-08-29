import { api } from "../axiosInstance";

/**
 * Récupère la liste de tous les messages.
 */
export async function get_list_message(): Promise<any> {
  const response = await api.get("/message/");
  return response.data;
}

/**
 * Crée un nouveau message.
 */
export async function create_message(data: any): Promise<any> {
  const response = await api.post("/message/", data);
  return response.data;
}

/**
 * Récupère un message spécifique.
 */
export async function get_message(id: number): Promise<any> {
  const response = await api.get(`/message/${id}`);
  return response.data;
}

/**
 * Met à jour un message.
 */
export async function update_message(id: number, data: any): Promise<any> {
  const response = await api.put(`/message/${id}`, data);
  return response.data;
}

/**
 * Supprime un message.
 */
export async function delete_message(id: number): Promise<void> {
  await api.delete(`/message/${id}`);
}

/**
 * Récupère un message spécifique.
 */
export async function get_message_by_user(id: number): Promise<any> {
  const response = await api.get(`/message/user/${id}`);
  return response.data;
}

/**
 * Récupère un message spécifique.
 */
export async function get_conversation(): Promise<any> {
  const response = await api.get(`/message/conversation/`);
  return response.data;
}

/**
 * Récupère un message spécifique.
 */
export async function delete_conversation(): Promise<any> {
  await api.delete(`/message/conversation/`);

}
