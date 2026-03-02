import axios from "axios";

let token: string | null = null;

/** Callback appelé lorsqu'une requête reçoit 401 (token invalide/expiré). L'app peut y enregistrer logout + redirection. */
let onUnauthorized: (() => void) | null = null;

export function setToken(newToken: string | null) {
  token = newToken;
}

/**
 * Enregistre un callback appelé à chaque réponse 401 (hors POST /auth).
 * Utilisé par l'app pour déconnecter l'utilisateur et rediriger vers la page de connexion.
 */
export function setOnUnauthorized(callback: (() => void) | null) {
  onUnauthorized = callback;
}

/** Indique si l'erreur correspond à une redirection login suite à un token invalide (ne pas afficher d'erreur). */
export function isUnauthorizedRedirect(err: unknown): boolean {
  return (err as { __unauthorizedRedirect?: boolean })?.__unauthorizedRedirect === true;
}

export const api = axios.create({
  baseURL: process.env.API_URL || "https://respace-api.mathurinchung.io",
});

api.interceptors.request.use((config) => {
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const isLoginRequest =
      error?.config &&
      String(error.config.url || "").endsWith("/auth") &&
      (error.config.method || "").toLowerCase() === "post";

    // 401 sur une route protégée = token invalide/expiré → déconnexion + redirection (sans afficher d'erreur).
    // 401 sur POST /auth = mauvais identifiants → on ne déclenche pas le callback (la page login gère l'erreur).
    if (status === 401 && !isLoginRequest && onUnauthorized) {
      onUnauthorized();
      const silentError = new Error() as Error & { __unauthorizedRedirect?: boolean };
      silentError.__unauthorizedRedirect = true;
      return Promise.reject(silentError);
    }
    return Promise.reject(error);
  }
);
