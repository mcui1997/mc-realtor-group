import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '151b3e2094msh9d5e0af43ebe4f9p18bdc1jsnb86796f85f11',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}