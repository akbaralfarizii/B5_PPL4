import axios from 'axios';

//--Administrasi User
const urladminuser = 'http://192.168.100.3:1337/api/administrasi-users?populate=%2A';
export const AdminUser = () => axios.get(urladminuser);
