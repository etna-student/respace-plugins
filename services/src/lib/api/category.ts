import { api } from "../axiosInstance";

// --- API methods for category ---

export async function create_category(): Promise<any> {
  const response = await api.post(`/category/`);
  return response.data;
}
export async function get_list_category(): Promise<any> {
  const response = await api.get(`/category/`);
  return response.data;
}

export async function get_category(id: number): Promise<any> {
  const response = await api.get(`/category/${id}`);
  return response.data;
}

export async function update_category(id: number, data: any): Promise<any> {
  const response = await api.put(`/category/${id}`, data);
  return response.data;
}

export async function delete_category(id: number): Promise<void> {
  await api.delete(`/category/${id}`);
}
