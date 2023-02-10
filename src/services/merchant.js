import type { ApiServiceInterface } from 'shared/services/ApiServiceInterface';

export class MerchantService {
  api: ApiServiceInterface;

  endpoint: string = '/merchant';

  constructor(apiService: ApiServiceInterface) {
    this.api = apiService;
  }

  createService(payload: Object = {}) {
    return this.api.post(`${this.endpoint}/services`, payload);
  }

  getServices() {
    return this.api.get(`${this.endpoint}/services`);
  }

  getMerchantProfile() {
    return this.api.get(`${this.endpoint}/profile`);
  }

  updateProfile(payload: Object = {}) {
    return this.api.put(`${this.endpoint}/profile`, payload);
  }

  getMerchantProfiles(keyword: string) {
    return this.api.put(`${this.endpoint}/profiles`, keyword);
  }
}
