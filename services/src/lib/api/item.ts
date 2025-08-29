import { api } from "../axiosInstance";

/**
 * Récupère la liste de tous les objets.
 */
export async function get_list_item(): Promise<any> {
  const response = await api.get("/item/");
  return response.data;
}

/**
 * Crée un nouvel objet (form-data).
 */
export async function create_item(formData: FormData): Promise<any> {
  const response = await api.post("/item/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

/**
 * Récupère les détails d’un objet par son ID.
 */
export async function get_item(id: number): Promise<any> {
  const response = await api.get(`/item/${id}`);
  return response.data;
}

/**
 * Met à jour un objet par son ID (form-data).
 */
export async function update_item(id: number, formData: FormData): Promise<any> {
  const response = await api.put(`/item/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

/**
 * Supprime un objet.
 */
export async function delete_item(id: number): Promise<void> {
  await api.delete(`/item/${id}`);
}

/**
 * Récupère les objets liés à un utilisateur.
 */
export async function get_items_by_user(user_id: number): Promise<any> {
  const response = await api.get(`/item/user/${user_id}`);
  return response.data;
}

/**
 * Récupère les objets liés à une catégorie.
 */
export async function get_related_items(id: number): Promise<any> {
  const response = await api.get(`/item/${id}/related`);
  return response.data;
}

/**
 * Lance une recherche d’objets avec filtres facultatifs.
 */
export async function search_items(params: Record<string, any>): Promise<any> {
  const query = new URLSearchParams(params).toString();
  const response = await api.get(`/item/search?${query}`);
  return response.data;
}

/**
 * Récupère les utilisateurs qui ont ajouté cet objet en favori.
 */
export async function get_item_favorites(id: number): Promise<any> {
  const response = await api.get(`/item/${id}/favorites`);
  return response.data;
}

/**
 * Récupère les avis sur un objet.
 */
export async function get_item_reviews(id: number): Promise<any> {
  const response = await api.get(`/item/${id}/reviews`);
  return response.data;
}

/**
 * Ajoute ou retire un favori pour cet objet.
 */
export async function toggle_favorite(id: number): Promise<any> {
  const response = await api.post(`/item/${id}/favorite`);
  return response.data;
}
