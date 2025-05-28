import { api } from "../axiosInstance";

// --- API methods for message ---
export async function create_message(): Promise<any> {
  const response = await api.post(`/message/`);
  return response.data;
}

export async function get_list_message(): Promise<any> {
  const response = await api.get(`/message/`);
  return response.data;
}

export async function get_message(id: number): Promise<any> {
  const response = await api.get(`/message/${id}`);
  return response.data;
}

export async function update_message(id: number, data: any): Promise<any> {
  const response = await api.put(`/message/${id}`, data);
  return response.data;
}

export async function delete_message(id: number): Promise<void> {
  await api.delete(`/message/${id}`);
}
