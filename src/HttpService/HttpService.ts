import axios from 'axios';


const httpService = {
  get: (baseUrl: string, api: string, token: string) =>
    axios.get(baseUrl + api, { headers: { Authorization: `Bearer ${token}` } }),
  post: (baseUrl: string, api: string, data: any) =>
    axios.post(baseUrl + api, data),
};

export default httpService;