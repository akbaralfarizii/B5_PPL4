import axios from 'axios';

//--Administrasi User
const urlpeserta = 'http://192.168.100.3:1337/api/pendaftars?populate=%2A';
export const Peserta = () => axios.get(urlpeserta);

