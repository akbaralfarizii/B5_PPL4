import axios from 'axios';

//--Data Peserta
const urlpeserta = 'http://localhost:1337/api/pesertas?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Peserta = () => axios.get(urlpeserta);

//--Data Fit and Proper
const urlFitAndPropper = 'http://localhost:1337/api/fitnpropers?populate=%2A';
export const FitAndPropper = () => axios.get(urlFitAndPropper);

//--Data Penguji
const urlpenguji = 'http://localhost:1337/api/pengujis?populate[0]=pegawai.jabatan';
export const Penguji = () => axios.get(urlpenguji);

const urljabatan = 'http://localhost:1337/api/jabatans';
export const jabatan = () => axios.get(urljabatan);

const urlproyeksi = 'http://localhost:1337/api/proyeksis';
export const proyeksi = () => axios.get(urlproyeksi);

//--Data Pendaftar
const urlpendaftar = 'http://localhost:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const Pendaftar = () => axios.get(urlpendaftar);

//--Data Fit and Proper
const urlNilaiFitAndPropper = 'http://localhost:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const NilaiFitAndPropper = () => axios.get(urlNilaiFitAndPropper); 

//--Data Wawancara
const urlNilaiWawancara = 'http://localhost:1337/api/wawancaras?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const NilaiWawancara = () => axios.get(urlNilaiWawancara); 
