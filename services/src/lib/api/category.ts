import { api } from "../axiosInstance";

/**
 * Récupère la liste de toutes les catégories.
 */
export async function get_list_category(): Promise<any> {
  const response = await api.get("/category/");
  return response.data;
}

/**
 * Crée une nouvelle catégorie.
 */
export async function create_category(data: any): Promise<any> {
  const response = await api.post("/category/", data);
  return response.data;
}

/**
 * Récupère les détails d'une catégorie spécifique par son ID.
 */
export async function get_category(id: number): Promise<any> {
  const response = await api.get(`/category/${id}`);
  return response.data;
}

/**
 * Met à jour une catégorie spécifique.
 */
export async function update_category(id: number, data: any): Promise<any> {
  const response = await api.put(`/category/${id}`, data);
  return response.data;
}

/**
 * Supprime une catégorie spécifique.
 */
export async function delete_category(id: number): Promise<void> {
  await api.delete(`/category/${id}`);
}

/**
 * Récupère les objets associés à une catégorie.
 */
export async function get_category_items(id: number): Promise<any> {
  const response = await api.get(`/category/${id}/items`);
  return response.data;
}
