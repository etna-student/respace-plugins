import { api } from "../axiosInstance";

// --- API methods for review ---
export async function create_review(): Promise<any> {
  const response = await api.post(`/review/`);
  return response.data;
}

export async function get_list_review(): Promise<any> {
  const response = await api.get(`/review/`);
  return response.data;
}

export async function get_review(id: number): Promise<any> {
  const response = await api.get(`/review/${id}`);
  return response.data;
}

export async function update_review(id: number, data: any): Promise<any> {
  const response = await api.put(`/review/${id}`, data);
  return response.data;
}

export async function delete_review(id: number): Promise<void> {
  const response = await api.delete(`/review/${id}`);
}
