const envs = import.meta.env;

export default {
  baseApiUrl: envs.VITE_MARVEL_BASE_API_URL,
};