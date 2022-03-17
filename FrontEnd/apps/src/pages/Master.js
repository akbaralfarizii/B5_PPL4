import React from 'react';
import './style.css';
import BsFillPersonFill from "react-icons/bs";
import * as BsIcons from 'react-icons/bs';

export const Master = () => {
  return (
    <div className='reports'>
      
    </div>
  );
};
export function DataPeserta () {
    return (
      <div className='container'>
          <div>
              <button className='btn'><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Peserta</button>
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
                  <td>Abdul Rangga NIP</td>
                  <td>20151101</td>
                  <td>Back-End Developer</td>
                  <td>2nd grade</td>
                  <td>test</td>
              </tr>
              <tr>
                  <td>2.</td>
                  <td>Anshar Ridho W</td>
                  <td>20151102</td>
                  <td>Leader</td>
                  <td>2nd grade</td>
                  <td>test</td>
              </tr>
              <tr>
                  <td>3.</td>
                  <td>Hanhan Septian</td>
                  <td>20151103</td>
                  <td>Front-End Developer</td>
                  <td>2nd grade</td>
                  <td>test</td>
              </tr>
              <tr>
                  <td>4.</td>
                  <td>M. Akbar Alfarizi</td>
                  <td>20151104</td>
                  <td>Front-End Developer</td>
                  <td>2nd grade</td>
                  <td>test</td>
              </tr>
              <tr>
                  <td>5.</td>
                  <td>Nova Kensa D O</td>
                  <td>20151105</td>
                  <td>Back-End Developer</td>
                  <td>2nd grade</td>
                  <td>test</td>
              </tr>
          </table>
          </div>
      </div>
    );
  }
export const DataPenguji = () => {
  return (
    <div className='reports'>
      <h1>INI DATA PENGUJI</h1>
    </div>
  );
};
