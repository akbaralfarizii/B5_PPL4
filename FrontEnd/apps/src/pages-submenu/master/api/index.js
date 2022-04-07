import axios from 'axios';

const url = 'http://192.168.137.1:1337/api/pegawais';
export const readTodos = () => axios.get(url);
//api akbar : "http://192.168.137.1:1337/api/pegawais"

// const urlGambar = 'http://192.168.1.5:1337/api/upload/files';
// export const readGambar = () => axios.get(urlGambar);
