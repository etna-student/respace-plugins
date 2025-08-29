import { api } from "../axiosInstance";

/**
 * Récupère la liste de tous les avis.
 */
export async function get_list_review(): Promise<any> {
  const response = await api.get("/review/");
  return response.data;
}

/**
 * Crée un nouvel avis.
 */
export async function create_review(data: any): Promise<any> {
  const response = await api.post("/review/", data);
  return response.data;
}

/**
 * Récupère les détails d’un avis par son ID.
 */
export async function get_review(id: number): Promise<any> {
  const response = await api.get(`/review/${id}`);
  return response.data;
}

/**
 * Met à jour un avis existant.
 */
export async function update_review(id: number, data: any): Promise<any> {
  const response = await api.put(`/review/${id}`, data);
  return response.data;
}

/**
 * Supprime un avis.
 */
export async function delete_review(id: number): Promise<void> {
  await api.delete(`/review/${id}`);
}
