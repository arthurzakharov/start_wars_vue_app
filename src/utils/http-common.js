import axios from 'axios';

export const HTTP = axios.create({
	baseURL: 'https://swapi.co/api/',
	timeout: 1000,
});