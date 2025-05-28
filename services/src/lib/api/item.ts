import { api } from "../axiosInstance";

// --- API methods for item ---
export async function create_item(data: any): Promise<any> {
  const response = await api.post(`/item/`, data);
  return response.data;
}

export async function get_item(id: number): Promise<any> {
  const response = await api.get(`/item/${id}`);
  return response.data;
}

export async function get_item_list(): Promise<any> {
  const response = await api.get(`/item/`);
  return response.data;
}

export async function update_item(id: number, data: any): Promise<any> {
  const response = await api.put(`/item/${id}`, data);
  return response.data;
}

export async function delete_item(id: number): Promise<void> {
  await api.delete(`/item/${id}`);
}
