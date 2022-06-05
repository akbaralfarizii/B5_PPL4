import axios from 'axios';

//--Data Fit and Proper
<<<<<<< HEAD
const urlNilaiFitAndPropper = 'http://localhost:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
=======
const urlNilaiFitAndPropper = 'localhost:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
>>>>>>> 6a693086e97c51dedf9799580e8d6934d542ca41
export const NilaiFitAndPropper = () => axios.get(urlNilaiFitAndPropper); 

//--Data Wawancara
const urlNilaiWawancara = 'http://localhost:1337/api/wawancaras?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const NilaiWawancara = () => axios.get(urlNilaiWawancara); 
