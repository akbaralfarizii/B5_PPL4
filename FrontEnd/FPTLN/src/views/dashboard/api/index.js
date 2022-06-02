import axios from 'axios';

<<<<<<< HEAD
//--Administrasi User
const urlpeserta = 'http://192.168.100.3:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const Peserta = () => axios.get(urlpeserta);
=======
//--Data Pendaftar
const urlpendaftar = 'http://192.168.100.3:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const Pendaftar = () => axios.get(urlpendaftar);
>>>>>>> d136a96421424c97c654a126288527946ac41a05

