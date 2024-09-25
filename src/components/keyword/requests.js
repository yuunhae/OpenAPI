const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = async () => {
    try {
      const endpoint = '/key_word'; // 엔드포인트 추가
      
      // 요청
      const url = `${BASE_URL}${endpoint}?serviceKey=${API_KEY}`;
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };