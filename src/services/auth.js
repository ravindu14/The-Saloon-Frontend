import type { ApiServiceInterface } from 'shared/services/ApiServiceInterface';

export class AuthService {
  api: ApiServiceInterface;

  endpoint: string = '/auth';

  constructor(apiService: ApiServiceInterface) {
    this.api = apiService;
  }

  signUp(payload: Object = {}) {
    return this.api.post(`${this.endpoint}/signup`, payload);
  }

  signIn(payload: Object = {}) {
    return this.api.post(`${this.endpoint}/login`, payload);
  }

  getCurretUser() {
    return this.api.get(`${this.endpoint}/user-profile`);
  }

  updateUserProfile(payload) {
    return this.api.put(`${this.endpoint}/user-profile`, payload);
  }
}
