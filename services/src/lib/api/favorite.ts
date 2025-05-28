import { api } from "../axiosInstance";

// --- API methods for favorite ---

export async function create_favorite(): Promise<any> {
  const response = await api.post(`/favorite/`);
  return response.data;
}
export async function get_list_favorite(): Promise<any> {
  const response = await api.get(`/favorite/`);
  return response.data;
}

export async function get_favorite(id: number): Promise<any> {
  const response = await api.get(`/favorite/${id}`);
  return response.data;
}

export async function update_favorite(id: number, data: any): Promise<any> {
  const response = await api.put(`/favorite/${id}`, data);
  return response.data;
}

export async function delete_favorite(id: number): Promise<void> {
  await api.delete(`/favorite/${id}`);
}
