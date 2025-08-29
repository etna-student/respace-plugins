import { api } from "../axiosInstance";

/**
 * Récupère tous les favoris.
 */
export async function get_list_favorite(): Promise<any> {
  const response = await api.get("/favorite/");
  return response.data;
}

/**
 * Ajoute un favori.
 */
export async function create_favorite(data: any): Promise<any> {
  const response = await api.post("/favorite/", data);
  return response.data;
}

/**
 * Récupère un favori spécifique.
 */
export async function get_favorite(id: number): Promise<any> {
  const response = await api.get(`/favorite/${id}`);
  return response.data;
}

/**
 * Met à jour un favori.
 */
export async function update_favorite(id: number, data: any): Promise<any> {
  const response = await api.put(`/favorite/${id}`, data);
  return response.data;
}

/**
 * Supprime un favori.
 */
export async function delete_favorite(id: number): Promise<void> {
  await api.delete(`/favorite/${id}`);
}
