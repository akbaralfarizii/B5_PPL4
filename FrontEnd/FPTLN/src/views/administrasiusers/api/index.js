import axios from 'axios';

//--Administrasi User
const urladminuser = 'http://localhost:1337/api/administrasi-users?populate=%2A';
export const AdminUser = () => axios.get(urladminuser);

//--Data Pegawai
const urlpegawai = 'http://localhost:1337/api/pegawais';
export const Pegawai = () => axios.get(urlpegawai);
