import axios from 'axios';

const urlpeserta = 'https://0ea2-103-209-131-27.ngrok.io/api/pendaftars?populate[0]=pegawai.jabatan&populate[1]=Jenjang_jabatan_tujuan.jenjang&populate[2]=pengujis.pegawais';
export const Peserta = () => axios.get(urlpeserta);

const urlpenguji = 'https://0ea2-103-209-131-27.ngrok.io/api/pengujis?populate[0]=pegawais.jabatan';
export const Penguji = () => axios.get(urlpenguji);