import axios from 'axios';

const urlpeserta = 'https://6a79-103-209-131-27.ngrok.io/api/pendaftars?filters[id][$notIn][0]=1&populate[1]=pegawais.jabatan&populate[2]=Jenjang_jabatan_tujuan.jenjang&populate[3]=pengujis.pegawais';
// const urlpeserta = 'http://6a79-103-209-131-27.ngrok.io/api/pegawais';
export const Peserta = () => axios.get(urlpeserta);

const urlpenguji = 'https://0ea2-103-209-131-27.ngrok.io/api/pengujis?populate[0]=pegawais.jabatan';
export const Penguji = () => axios.get(urlpenguji);