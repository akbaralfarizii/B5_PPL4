import axios from 'axios';

const url = 'http://5d3b-103-209-131-27.ngrok.io/api/pegawais?populate=*';
export const readTodos = () => axios.get(url);
//api akbar : "http://192.168.137.1:1337/api/pegawais"

// const urlGambar = 'http://192.168.1.5:1337/api/upload/files';
// export const readGambar = () => axios.get(urlGambar);
