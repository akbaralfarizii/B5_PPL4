import axios from 'axios';

//--Data Peserta
const urlpeserta = 'http://192.168.100.3:1337/api/pesertas?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Peserta = () => axios.get(urlpeserta);

//--Data Penguji
const urlpenguji = 'http://192.168.100.3:1337/api/pengujis?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Penguji = () => axios.get(urlpenguji);

//--Data Pegawai
const urlpegawais = 'http://192.168.100.3:1337/api/pegawais?populate[0]=jabatan&populate[1]=grade&populate[2]=jenjang';
export const Pegawai = () => axios.get(urlpegawais);

