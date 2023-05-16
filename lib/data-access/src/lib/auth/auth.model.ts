export interface Login {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    email: string;
    accessToken: string;
  }