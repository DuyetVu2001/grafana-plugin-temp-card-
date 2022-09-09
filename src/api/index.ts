import axios from 'axios';

export const getOee = async (url: string) => axios.get(`${url}/cards`);
export const getTempConfig = async (url: string) => axios.get(`${url}/config/temp`);

export const updateTempConfig = async (url: string, body: any) => axios.patch(`${url}/config/temp`, body);
