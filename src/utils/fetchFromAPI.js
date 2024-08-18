import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
	method: 'GET',
	hostname: 'youtube-v31.p.rapidapi.com',
	port: null,
	path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&minResults=10&maxResults=500',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url, pageToken = '') => {
	const { data } = await axios.get(`${BASE_URL}/${url}${pageToken ? `&pageToken=${pageToken}` : ''}`, options);
	return data;
  };