import { api } from "../axiosInstance";

export interface LoginRequest {
  username: string;
  password: string;
}

// Auth response structure from FastAPI
interface TokenResponse {
  access_token: string;
  token_type: string;
}

// --- LOGIN : récupère le token et configure axios ---
export async function login({ username, password }: LoginRequest): Promise<string> {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  const response = await api.post<TokenResponse>('/auth', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  
  return response.data.access_token;
}

/**
 * Vérifie si le token est toujours valide.
 */
export async function auth_check(): Promise<string> {
  const response = await api.get("/check_auth");
  return response.data.message;
}
