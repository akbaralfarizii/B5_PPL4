import axios from 'axios';

//--Administrasi User
const urlpeserta = 'http://localhost:1337/api/pesertas';
export const Peserta = () => axios.get(urlpeserta);

