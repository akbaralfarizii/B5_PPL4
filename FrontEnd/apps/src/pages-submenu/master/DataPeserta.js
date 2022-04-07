import React from 'react';
import './style.css';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as api from './api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DataPeserta () {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await api.readTodos();
        const arr = result.data.data;
        var sum = arr.map((item) => item).filter((item) => item.attributes.role.data.attributes.nama_role === 'Peserta');
        setTodos(sum);
      };
      fetchData();
    }, []);

    let navigate = useNavigate();

  return (

    <div className='container'>
        <div className='locationBar'>
            <p className='text'>Dashboard / <b> Data Peserta</b></p>
        </div>
        <div className='body'>
        <div>
            <button className='btn' onClick={() => {navigate('/master/input-data-peserta')}}><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Peserta</button>  
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
                <th>No.</th>
                <th>Nama</th>
                <th>NIP</th>
                <th>Jabatan</th>
                <th>Grade</th>
                <th>Jenjang</th>
                <th>Edit</th>
            </tr>
            {todos.map((todo) => (
            <tbody>
              <tr>
                <th>{todo.attributes.id_pendaftar}</th>
                <td>{todo.attributes.Nama}</td>
                <td>{todo.attributes.NIP}</td>
                <td>{todo.attributes.jabatan.data.attributes.nama_jabatan}</td>
                <td>{todo.attributes.grade.data.attributes.nama_grade}</td>
                <td>{todo.attributes.jenjang.data.attributes.nama_jenjang}</td>
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
