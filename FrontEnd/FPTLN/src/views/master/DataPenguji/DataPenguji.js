import React from 'react';
import '../style.css';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as api from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function DataPenguji() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const result = await api.Penguji();
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
            <button className='btn'onClick={() => {navigate('/master/datapenguji/inputdatapenguji')}}><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Penguji</button>
        </div>
        
        <div className='side'>
            <h3><BsIcons.BsFillPersonFill />  Data Penguji</h3>
        </div>

        <div className='TabelDataPeserta'>
        <table>
            <tr className='table'>
                <th>No</th>
                <th>Nama</th>
                <th>NIP</th>
                <th>Jabatan</th>
                <th>Edit</th>
            </tr>
            {todos.map((todo, index) => (
            <tbody>
              <tr>
                <th>{index+1}</th>
                <td>{todo.id}</td>
                <td>{todo.attributes.id_penguji}</td>
                {/* <td>{todo.attributes.pegawais.data.attributes.NIP}</td> */}
                {/* <td>{todo.attributes.pegawai.data.attributes.nama}</td>
                <td>{todo.attributes.pegawai.data.attributes.NIP}</td>
                <td>{todo.attributes.pegawais.data.attributes.jabatan.data.attributes.nama_jabatan}</td> */}
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
