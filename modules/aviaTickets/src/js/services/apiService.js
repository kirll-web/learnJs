import axios from 'axios';
import config from '../config/apiConfig'

/**
 * /countries - array of countries(возвращает массив поддерживаемых стран)
 * /cities - array of cities(возвращает массив поддерживаемых городов)
 * /prices/cheap - array
 */
class Api {
  constructor(config) {
    this.url = config.url;
  }

  async countries() {
    try {
      const response = await axios.get(`${this.url}/countries`);
      return response.data;
    } catch(err) {
      console.log(err);
      return Promises.reject(err);
    }
  }

  async cities() {
    try {
      const response = await axios.get(`${this.url}/cities`);
      return response.data;
    } catch(err) {
      console.log(err);
      return Promises.reject(err);
    }
  }

  prices(params) {}

}

const api = new Api(config);

export default api;