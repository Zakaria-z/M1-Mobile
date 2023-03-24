import axios from 'axios';
import { BASE_API_KEY } from '../config/config';

export const fetchConvert = async (baseCurrency, targetCurrency, amount) => {
  try {
    const response = await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?have=${baseCurrency}&want=${targetCurrency}&amount=${amount}`, {
      headers: {
        'X-API-Key': BASE_API_KEY,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
