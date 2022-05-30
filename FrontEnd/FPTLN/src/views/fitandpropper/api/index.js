import axios from 'axios';

//--Data Peserta
const urlpeserta = 'http://localhost:1337/api/pendaftars?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Peserta = () => axios.get(urlpeserta);

// const urlpeserta = 'http://10.50.158.181:1337/api/pendaftars?populate[0]=Peserta.pegawai.jabatan&populate[1]=Peserta.pegawai.grade&populate[2]=fitnproper.Jenjang_jabatan_tujuan.jenjang';
// export const Peserta = () => axios.get(urlpeserta);


//--Data Penguji
const urlpenguji = 'http://3ef0-125-164-23-176.ngrok.io:1337/api/pengujis?populate[0]=pegawai.jabatan';
export const Penguji = () => axios.get(urlpenguji);

const urljabatan = 'http://3ef0-125-164-23-176.ngrok.io:1337/api/jabatans';
export const jabatan = () => axios.get(urljabatan);

const urlproyeksi = 'http://3ef0-125-164-23-176.ngrok.io:1337/api/jabatans';
export const proyeksi = () => axios.get(urlproyeksi);

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