import React from 'react';
import './style.css';
import * as BsIcons from 'react-icons/bs';
import InputDataPeserta from './InputDataPeserta';
import * as api from './api';
import { useEffect, useState } from 'react';

function DataPeserta () {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.readTodos();
            setTodos(result.data.data);
        };
        fetchData();

    }, []);
    function handleClick(e) {
        e.preventDefault();
        console.log('../InputDataPeserta.js');
    }


  return (

    <div className='container'>
        <div className='locationBar'>
            <p className='text'>Dashboard / <b> Data Peserta</b></p>
        </div>
        <div className='body'>
        <div>
            <button className='btn' onClick={handleClick} ><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Peserta</button>
        </div>
        <div className='title'>
            <div className='title-icon'>
                <BsIcons.BsFillPersonFill />
            </div>
            <h3>data Peserta</h3>
        </div>

        <div className='TabelDataPeserta'>
        <table>
            <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>NIP</th>
                <th>Jabatan</th>
                <th>Grade</th>
                <th>Edit</th>
            </tr>

            {todos.map((todo) => (
            <tbody>
              <tr>
                <th>{todo.id}</th>
                <td>{todo.attributes.Nama}</td>
                <td>{todo.attributes.NIP}</td>
                <td>{todo.attributes.nama_jabatan}</td>
                <td>{todo.attributes.nama_grade}</td>
                <td><button><BsIcons.BsFillPersonFill className='Icon-btn'/></button></td>
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

export default DataPeserta;
