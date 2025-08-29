import { api } from "../axiosInstance";

/**
 * Récupère la liste de tous les utilisateurs.
 */
export async function get_list_user(): Promise<any> {
  const response = await api.get("/user/");
  return response.data;
}

/**
 * Crée un nouvel utilisateur (form-data, avec image).
 */
export async function create_user(formData: FormData): Promise<any> {
  const response = await api.post("/user/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

/**
 * Récupère les informations de l'utilisateur connecté.
 */
export async function get_me(): Promise<any> {
  const response = await api.get("/user/me");
  return response.data;
}

/**
 * Récupère les statistiques de l'utilisateur connecté.
 */
export async function get_my_stats(): Promise<any> {
  const response = await api.get("/user/me/stats");
  return response.data;
}

/**
 * Met à jour le mot de passe de l'utilisateur connecté.
 */
export async function update_password(data: { new_password: string }): Promise<void> {
  await api.put("/user/me/password", data);
}

/**
 * Recherche d'utilisateurs par mots-clés.
 */
export async function search_users(query: string): Promise<any> {
  const response = await api.get(`/user/search?query=${encodeURIComponent(query)}`);
  return response.data;
}

/**
 * Récupère les infos publiques d'un utilisateur par ID.
 */
export async function get_public_user(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/public`);
  return response.data;
}

/**
 * Récupère les infos complètes d'un utilisateur par ID.
 */
export async function get_user(id: number): Promise<any> {
  const response = await api.get(`/user/${id}`);
  return response.data;
}

/**
 * Met à jour un utilisateur par ID (form-data).
 */
export async function update_user(id: number, formData: FormData): Promise<any> {
  const response = await api.put(`/user/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

/**
 * Supprime un utilisateur.
 */
export async function delete_user(id: number): Promise<void> {
  await api.delete(`/user/${id}`);
}

/**
 * Récupère les avis donnés par un utilisateur.
 */
export async function get_reviews_given(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/reviews/given`);
  return response.data;
}

/**
 * Récupère les avis reçus par un utilisateur.
 */
export async function get_reviews_received(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/reviews/received`);
  return response.data;
}

/**
 * Récupère les favoris d’un utilisateur.
 */
export async function get_user_favorites(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/favorites`);
  return response.data;
}

/**
 * Récupère les objets en vente d’un utilisateur.
 */
export async function get_items_for_sale(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/items/for-sale`);
  return response.data;
}

/**
 * Récupère les objets stockés d’un utilisateur.
 */
export async function get_items_stored(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/items/stored`);
  return response.data;
}

/**
 * Récupère les objets vendus d’un utilisateur.
 */
export async function get_items_sold(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/items/sold`);
  return response.data;
}

/**
 * Récupère les transactions d’un utilisateur.
 */
export async function get_user_transactions(id: number): Promise<any> {
  const response = await api.get(`/user/${id}/transactions`);
  return response.data;
}

/**
 * Récupère les wishlists de l'utilisateur connecté.
 */
export async function get_my_wishlists(): Promise<any> {
  const response = await api.get("/user/me/wishlist");
  return response.data;
}

/**
 * Crée une wishlist pour l'utilisateur connecté.
 * @param data - Objet contenant le nom de la wishlist et les ID des items.
 */
export async function create_my_wishlist(data: { name: string; item_ids: number[] }): Promise<any> {
  const response = await api.post("/user/me/wishlist", data);
  return response.data;
}

/**
 * Supprime une wishlist par son ID.
 * @param wishlist_id - L'identifiant de la wishlist à supprimer.
 */
export async function delete_my_wishlist(wishlist_id: number): Promise<void> {
  await api.delete(`/user/me/wishlist/${wishlist_id}`);
}
