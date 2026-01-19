// API Base URL - Environment değişkeninden alınır
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * API endpoint'lerini oluşturur
 */
export const getApiUrl = (endpoint: string): string => {
  // Eğer endpoint zaten tam URL ise, olduğu gibi döndür
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint;
  }
  
  // Base URL'in sonunda / varsa kaldır
  const baseUrl = API_BASE_URL.endsWith('/') 
    ? API_BASE_URL.slice(0, -1) 
    : API_BASE_URL;
  
  // Endpoint'in başında / varsa kaldır
  const cleanEndpoint = endpoint.startsWith('/') 
    ? endpoint.slice(1) 
    : endpoint;
  
  return `${baseUrl}/${cleanEndpoint}`;
};

export const getImageUrl = (endpoint: string): string => {
  return API_BASE_URL.split('/api')[0] + '/public/' + endpoint;
};

// API endpoint'leri
export const API_ENDPOINTS = {
  getImageUrl: (endpoint: string) => getImageUrl(endpoint),
  blogs: () => getApiUrl('blogs.php'),
  blog: (id: number) => getApiUrl(`blogs.php?id=${id}`),
  login: () => getApiUrl('login.php'),
};

