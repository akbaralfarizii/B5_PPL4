import axios from 'axios';

//--Administrasi User
<<<<<<< HEAD
const urlpeserta = 'http://192.168.100.3:1337/api/pendaftars?populate=%2A';
=======
const urlpeserta = 'http://localhost:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
>>>>>>> a55dace552448a432785b0b14304e2941859e4e2
export const Peserta = () => axios.get(urlpeserta);

