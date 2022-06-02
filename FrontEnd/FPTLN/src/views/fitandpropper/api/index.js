import axios from 'axios';

//--Data Peserta
const urlpeserta = 'http://192.168.100.3:1337/api/pesertas?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Peserta = () => axios.get(urlpeserta);

//--Data Fit and Proper
const urlFitAndPropper = 'http://192.168.100.3:1337/api/fitnpropers?populate=%2A';
export const FitAndPropper = () => axios.get(urlFitAndPropper);

//--Data Penguji
const urlpenguji = 'http://192.168.100.3:1337/api/pengujis?populate[0]=pegawai.jabatan';
export const Penguji = () => axios.get(urlpenguji);

const urljabatan = 'http://192.168.100.3:1337/api/jabatans';
export const jabatan = () => axios.get(urljabatan);

const urlproyeksi = 'http://192.168.100.3:1337/api/jabatans';
export const proyeksi = () => axios.get(urlproyeksi);

//--Data Pendaftar
const urlpendaftar = 'http://192.168.100.3:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const Pendaftar = () => axios.get(urlpendaftar);

//--Data Fit and Proper
const urlNilaiFitAndPropper = 'http://192.168.100.3:1337/api/pendaftars?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const NilaiFitAndPropper = () => axios.get(urlNilaiFitAndPropper); 

//--Data Wawancara
const urlNilaiWawancara = 'http://192.168.100.3:1337/api/wawancaras?populate[0]=peserta.pegawai.jenjang&populate[1]=peserta.pegawai.jabatan&populate[2]=peserta.pegawai.grade&populate[3]=proyeksi';
export const NilaiWawancara = () => axios.get(urlNilaiWawancara); 
