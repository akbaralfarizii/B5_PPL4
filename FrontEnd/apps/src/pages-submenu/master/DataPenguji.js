import React from 'react';
import './style.css';
import * as BsIcons from 'react-icons/bs';
import * as api from './api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DataPenguji() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.readTodos();
            setTodos(result.data.data);
        };
        fetchData();

    }, []);

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
            <h3>data Penguji</h3>
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
            </tr>

            {todos.map((todo) => (
            <tbody>
              <tr>
                <th>{todo.id}</th>
                <td>{todo.attributes.Nama}</td>
                <td>{todo.attributes.NIP}</td>
                <td>{todo.attributes.nama_jabatan}</td>
                <td>{todo.attributes.nama_grade}</td>
                <td>{todo.attributes.Jenjang}</td>
                {/* <td>@inifoto</td> */}
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
