import axios from 'axios';

//--Data Pendaftar
const urlpendaftar = 'http://localhost:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const Pendaftar = () => axios.get(urlpendaftar);

