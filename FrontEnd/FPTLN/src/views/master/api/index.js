import axios from 'axios';

//--Data Peserta
const urlpeserta = 'http://192.168.100.3:1337/api/pesertas?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Peserta = () => axios.get(urlpeserta);

//--Data Penguji
// const urlpenguji = 'http://localhost:1337/api/pengujis?populate[0]=pegawai.jabatan';
// export const Penguji = () => axios.get(urlpenguji);

//--Jadwal Fit and Proper
const urlpenguji = 'http://192.168.100.3:1337/api/pengujis?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const Penguji = () => axios.get(urlpenguji);

const urlpegawais = 'http://192.168.100.3:1337/api/pegawais?populate[0]=jabatan&populate[1]=grade&populate[2]=jenjang';
export const Pegawai = () => axios.get(urlpegawais);

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
