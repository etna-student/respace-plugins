import { api } from "../axiosInstance";

// --- API methods for user ---
export async function get_me(): Promise<any> {
  const response = await api.get(`/user/me`);
  return response.data;
}

export async function create_user(data: any): Promise<any> {
  const response = await api.post(`/user/`, data);
  return response.data;
}

export async function get_list_user(): Promise<any> {
  const response = await api.get(`/user/`);
  return response.data;
}

export async function get_user(id: number): Promise<any> {
  const response = await api.get(`/user/${id}`);
  return response.data;
}

export async function update_user(id: number, data: any): Promise<any> {
  const response = await api.put(`/user/${id}`, data);
  return response.data;
}

export async function delete_user(id: number): Promise<void> {
  const response = await api.delete(`/user/${id}`);
  return response.data;
}
