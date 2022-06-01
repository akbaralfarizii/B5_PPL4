import axios from 'axios';

//--Administrasi User
const urlpeserta = 'http://localhost:1337/api/pendaftars?populate=%2A';
export const Peserta = () => axios.get(urlpeserta);

