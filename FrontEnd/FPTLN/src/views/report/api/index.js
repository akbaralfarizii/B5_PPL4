import axios from 'axios';

//--Data Fit and Proper
const urlNilaiFitAndPropper = 'localhost:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const NilaiFitAndPropper = () => axios.get(urlNilaiFitAndPropper); 

//--Data Wawancara
const urlNilaiWawancara = 'http://localhost:1337/api/wawancaras?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const NilaiWawancara = () => axios.get(urlNilaiWawancara); 
