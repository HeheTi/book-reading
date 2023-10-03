import instanseAxios from 'services/instanseAxios';
import { ENDPOINTS } from 'services/endpoints';

export const refreshTokens = async refreshToken => {
  try {
    const { data } = await instanseAxios.post(ENDPOINTS.REFRESH, {
      refreshToken,
    });
    return data;
  } catch (error) {
    return null;
  }
};
