import axios from 'axios';

//--Data Peserta
const urlpeserta = 'http://10.50.158.181:1337/api/pendaftars?populate[0]=Peserta.pegawai.jabatan&populate[1]=Peserta.pegawai.grade&populate[2]=fitnproper.Jenjang_jabatan_tujuan.jenjang';
export const Peserta = () => axios.get(urlpeserta);

//--Data Penguji
const urlpenguji = 'http://10.50.158.181:1337/api/pengujis?populate[0]=Penguji.pegawai.jabatan';
export const Penguji = () => axios.get(urlpenguji);

//--Jadwal Fit and Proper
// const urlpenguji = 'http://localhost:1337/api/pendaftars?populate[0]=Peserta.pegawai.jabatan&populate[1]=fitnproper.Jenjang_jabatan_tujuan.jenjang&populate[2]=fitnproper.fit_n_proper.proyeksi';
// export const Penguji = () => axios.get(urlpenguji);

//--Rekap nilai fit and proper
// const urlpenguji = 'http://localhost:1337/api/pendaftars?populate[0]=Peserta.pegawai.jabatan&populate[1]=fitnproper.Jenjang_jabatan_tujuan.jenjang&populate[2]=fitnproper.fit_n_proper.proyeksi';
// export const Penguji = () => axios.get(urlpenguji);

// --Jadwal Wawancara
// const urlpenguji = 'http://localhost:1337/api/pendaftars?populate[0]=Peserta.pegawai.jabatan&populate[1]=wawancara.Jenjang_jabatan_tujuan.jenjang&populate[2]=wawancara.wawancara.proyeksi';
// export const Penguji = () => axios.get(urlpenguji);

// --Cetak nilai fit and proper
// const urlpenguji = 'http://localhost:1337/api/pendaftars?populate[0]=fitnproper.fit_n_proper.proyeksi';
// export const Penguji = () => axios.get(urlpenguji);

// --Cetak nilai wawancara
// const urlpenguji = 'http://localhost:1337/api/pendaftars?populate[0]=wawancara.wawancara.proyeksi';
// export const Penguji = () => axios.get(urlpenguji);