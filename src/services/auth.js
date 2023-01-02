// @flow
import axios from "axios";

export class AuthService {
  endpoint: string = "http://localhost:8080/api";

  sampleAuthServiceRequest(payload: Object) {
    return axios.post(this.endpoint, payload);
  }
}
