import { api } from "../axiosInstance";

// --- API methods for transaction ---
export async function create_transaction(): Promise<any> {
  const response = await api.post(`/transaction/`);
  return response.data;
}

export async function get_list_transaction(): Promise<any> {
  const response = await api.get(`/transaction/`);
  return response.data;
}

export async function get_transaction(id: number): Promise<any> {
  const response = await api.get(`/transaction/${id}`);
  return response.data;
}

export async function update_transaction(id: number, data: any): Promise<any> {
  const response = await api.put(`/transaction/${id}`, data);
  return response.data;
}

export async function delete_transaction(id: number): Promise<void> {
  await api.delete(`/transaction/${id}`);
}
