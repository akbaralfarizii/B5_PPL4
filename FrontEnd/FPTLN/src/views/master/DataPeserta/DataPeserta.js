import React from 'react';
import '../style.css';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as api from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DataPeserta () {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await api.Peserta();
        const arr = result.data.data;
        setTodos(arr);
      };
      fetchData();
    }, []);

    let navigate = useNavigate();

  return (

    <div className='container'>
        <div className='body'>
        <div>
            <button className='btn' onClick={() => {navigate('/master/datapeserta/inputdatapeserta')}}><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Peserta</button>  
        </div>
        <div className='title'>
            <div className='title-icon'>
                <BsIcons.BsFillPersonFill />
            </div>
            <h3>Data Peserta</h3>
        </div>

        <div className='TabelDataPeserta'>
        <table>
            <tr>
                <th>No</th>
                <th>NIP</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Grade Pendidikan</th>
                <th>Jabatan Tujuan</th>
                <th>Edit</th>
            </tr>
            {todos.map((todo, index) => (
            <tbody>
              <tr>
                <th>{index+1}</th>
                <td>{todo.attributes.pegawai.data.attributes.NIP}</td>
                <td>{todo.attributes.pegawai.data.attributes.nama}</td>
                <td>{todo.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</td>
                <td>{todo.attributes.pegawai.data.attributes.Grade_Pendidikan}</td>
                <td>{todo.attributes.Jenjang_jabatan_tujuan.jenjang.data.attributes.nama_jenjang}</td>
                <td><button><AiIcons.AiOutlineForm className='Icon-btn'/></button></td>
              </tr>
            </tbody>
          ))}
            
        </table>
        </div>
    </div>
        </div>
        
  );
}

export default DataPeserta;
