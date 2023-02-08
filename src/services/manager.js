import {
  registerGlobalServices,
  serviceManager,
} from 'shared/services/manager';

import { AuthService } from './auth';
import { MerchantService } from './merchant';

export const registerServices = options => {
  registerGlobalServices(options);

  serviceManager.register('AuthService', serviceManager => {
    let api = serviceManager.get('ApiService');
    return new AuthService(api);
  });

  serviceManager.register('MerchantService', serviceManager => {
    let api = serviceManager.get('ApiService');
    return new MerchantService(api);
  });
};

export { serviceManager };
