import axios from 'axios';

const url = 'http://192.168.100.2:1337/api/pegawais';
export const readTodos = () => axios.get(url);

// const urlGambar = 'http://192.168.1.5:1337/api/upload/files';
// export const readGambar = () => axios.get(urlGambar);
