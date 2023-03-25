import axios from 'axios';
import { BASE_API_KEY } from '../config/config';

export const fetchConvert = async (baseCurrency, targetCurrency, amount) => {
  try {
    const source = axios.CancelToken.source();
    const timeout = setTimeout(() => {
      source.cancel('La requête a expiré. Veuillez réessayer.');
    }, 10000); // Délai d'attente de 10 secondes

    const response = await axios.get(
      `https://api.api-ninjas.com/v1/convertcurrency?have=${baseCurrency}&want=${targetCurrency}&amount=${amount}`,
      {
        headers: {
          'X-API-Key': BASE_API_KEY,
          'Content-Type': 'application/json',
        },
        cancelToken: source.token,
      }
    );

    clearTimeout(timeout);

    if (response.status !== 200) {
      throw new Error("Une erreur s'est produite lors de la récupération des taux de change.");
    }

    return response.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      throw new Error(err.message);
    } else {
      throw new Error("Une erreur s'est produite lors de la conversion. Veuillez réessayer.");
    }
  }
};
