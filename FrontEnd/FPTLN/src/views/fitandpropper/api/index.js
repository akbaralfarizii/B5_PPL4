import axios from 'axios';

//--Data Peserta
const urlpeserta = 'http://192.168.100.3:1337/api/pesertas?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Peserta = () => axios.get(urlpeserta);

// const urlpeserta = 'http://10.50.158.181:1337/api/pendaftars?populate[0]=Peserta.pegawai.jabatan&populate[1]=Peserta.pegawai.grade&populate[2]=fitnproper.Jenjang_jabatan_tujuan.jenjang';
// export const Peserta = () => axios.get(urlpeserta);

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