import { api } from "../axiosInstance";

/**
 * Récupère la liste de toutes les transactions.
 */
export async function get_list_transaction(): Promise<any> {
  const response = await api.get("/transaction/");
  return response.data;
}

/**
 * Crée une nouvelle transaction.
 */
export async function create_transaction(data: any): Promise<any> {
  const response = await api.post("/transaction/", data);
  return response.data;
}

/**
 * Récupère les détails d'une transaction spécifique.
 */
export async function get_transaction(id: number): Promise<any> {
  const response = await api.get(`/transaction/${id}`);
  return response.data;
}

/**
 * Met à jour une transaction existante.
 */
export async function update_transaction(id: number, data: any): Promise<any> {
  const response = await api.put(`/transaction/${id}`, data);
  return response.data;
}

/**
 * Supprime une transaction.
 */
export async function delete_transaction(id: number): Promise<void> {
  await api.delete(`/transaction/${id}`);
}

/**
 * Récupère les détails d'une transaction spécifique.
 */
export async function get_transaction_items(id: number): Promise<any> {
  const response = await api.get(`/transaction/${id}/items`);
  return response.data;
}

/**
 * Récupère les détails d'une transaction spécifique.
 */
export async function get_transaction_messages(id: number): Promise<any> {
  const response = await api.get(`/transaction/${id}/messages`);
  return response.data;
}
