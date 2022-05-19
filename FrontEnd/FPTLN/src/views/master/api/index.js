import axios from 'axios';

const urlpeserta = 'https://6a79-103-209-131-27.ngrok.io/api/pegawais';
// const urlpeserta = 'http://6a79-103-209-131-27.ngrok.io/api/pegawais';
export const Peserta = () => axios.get(urlpeserta);

const urlpenguji = 'https://0ea2-103-209-131-27.ngrok.io/api/pengujis';
export const Penguji = () => axios.get(urlpenguji);