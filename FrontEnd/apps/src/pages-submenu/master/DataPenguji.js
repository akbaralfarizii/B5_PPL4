import React from 'react';
import './style.css';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as api from './api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


function DataPenguji() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
        const result = await api.readTodos();
        const arr = result.data.data;
        var sum = arr.map((item) => item).filter((item) => item.attributes.role.data.attributes.nama_role === 'Penguji');
        setTodos(sum);
        };
        fetchData();

    }, []);
    let nomor = 1;
    let navigate = useNavigate();
  return (
    <div className='container'>
        <div className='locationBar'>
            <p className='text'>Dashboard / <b> Data Penguji</b></p>
        </div>
        <div className='body'>
        <div>
            <button className='btn' onClick={() => {navigate('/master/input-data-penguji')}}><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Penguji</button>
        </div>
        
        <div className='title'>
            <div className='title-icon'>
                <BsIcons.BsFillPersonFill />
            </div>
            <h3>Data Penguji</h3>
        </div>

        <div className='TabelDataPeserta'>
        <table>
            <tr className='table'>
                <th>No</th>
                <th>Nama</th>
                <th>NIP</th>
                <th>Jabatan</th>
                <th>Grade</th>
                <th>Jenjang</th>
                <th>Edit</th>
            </tr>
<<<<<<< HEAD

=======
>>>>>>> 78571c6cf8c9067c49841a42979f2b5a320d4c86
            {todos.map((todo, index) => (
            <tbody>
              <tr>
                <th>{index+1}</th>
                <td>{todo.attributes.nama}</td>
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

export default DataPenguji;
