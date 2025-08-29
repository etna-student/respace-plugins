import { api } from "../axiosInstance";

/**
 * Récupère la liste des éléments de transaction.
 */
export async function get_list_transaction_item(): Promise<any> {
  const response = await api.get("/transaction_item/");
  return response.data;
}

/**
 * Crée un nouvel élément de transaction.
 */
export async function create_transaction_item(data: any): Promise<any> {
  const response = await api.post("/transaction_item/", data);
  return response.data;
}

/**
 * Récupère les détails d'un élément de transaction par ID.
 */
export async function get_transaction_item(id: number): Promise<any> {
  const response = await api.get(`/transaction_item/${id}`);
  return response.data;
}

/**
 * Met à jour un élément de transaction.
 */
export async function update_transaction_item(id: number, data: any): Promise<any> {
  const response = await api.put(`/transaction_item/${id}`, data);
  return response.data;
}

/**
 * Supprime un élément de transaction.
 */
export async function delete_transaction_item(id: number): Promise<void> {
  await api.delete(`/transaction_item/${id}`);
}
