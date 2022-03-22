import React from 'react';
import './style.css';
import BsFillPersonFill from "react-icons/bs";
import * as BsIcons from 'react-icons/bs';
import InputDataPeserta from './InputDataPeserta';


function DataPeserta () {
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
        
        <div className='side'>
            <h3><BsIcons.BsFillPersonFill />  data Peserta</h3>
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
            <tr>
                <td>1.</td>
                <td>Muhammad Akbar Alfarisi</td>
                <td>201511049</td>
                <td>Front-End Developer</td>
                <td>2nd grade</td>
                <td>test</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Muhammad Akbar Alfarisi</td>
                <td>201511049</td>
                <td>Front-End Developer</td>
                <td>2nd grade</td>
                <td>test</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Muhammad Akbar Alfarisi</td>
                <td>201511049</td>
                <td>Front-End Developer</td>
                <td>2nd grade</td>
                <td>test</td>
            </tr>
        </table>
        </div>
    </div>
        </div>
        
  );
}

export default DataPeserta;
