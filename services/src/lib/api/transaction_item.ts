import { api } from "../axiosInstance";

// --- API methods for transaction_item item ---
export async function create_transaction_item(): Promise<any> {
  const response = await api.post(`/transaction_item/`);
  return response.data;
}

export async function get_list_transaction_item(): Promise<any> {
  const response = await api.get(`/transaction_item/`);
  return response.data;
}

export async function get_transaction_item(id: number): Promise<any> {
  const response = await api.get(`/transaction_item/${id}`);
  return response.data;
}

export async function update_transaction_item(id: number, data: any): Promise<any> {
  const response = await api.put(`/transaction_item/${id}`, data);
  return response.data;
}

export async function delete_transaction_item(id: number): Promise<void> {
  await api.delete(`/transaction_item/${id}`);
}
