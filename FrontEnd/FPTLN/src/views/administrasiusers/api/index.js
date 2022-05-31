import axios from 'axios';

//--Administrasi User
const urladminuser = 'http://localhost:1337/api/administrasi-users';
export const AdminUser = () => axios.get(urladminuser);

const urladminuserpost = 'http://localhost:1337/api/administrasi-users';
export const PostAdminUser = () => axios.post(urladminuserpost);

