import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import '../style.css';
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
    <CRow>
      <CButton color="secondary" variant="outline">Secondary</CButton>
      <CCol md={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CIcon icon={cilPeople} size="lg" />
            <strong> Data Peserta {todo.attributes.pegawais.data.attributes.nama}</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nip</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Grade</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Jenjang</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {todos.map((todo, index) => (  
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                    <CTableDataCell>{todo.id}</CTableDataCell>
                    {/* <CTableDataCell>{todo.attributes.pegawais.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawais.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawais.data.attributes.Grade_Pendidikan}</CTableDataCell> */}
                    <CTableDataCell>{todo.attributes.Jenjang_jabatan_tujuan.jenjang.data.attributes.nama_jenjang}</CTableDataCell>
                    <CTableDataCell><CButton color="secondary" variant="outline">Secondary</CButton></CTableDataCell>
                  </CTableRow>
                </CTableBody>
              ))}
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    // <div className='container'>
    //     <div className='body'>
    //     <div>
    //         <button className='btn' onClick={() => {navigate('/master/datapeserta/inputdatapeserta')}}><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Peserta</button>  
    //     </div>
    //     <div className='title'>
    //         <div className='title-icon'>
    //             <BsIcons.BsFillPersonFill />
    //         </div>
    //         <h3>Data Peserta</h3>
    //     </div>

    //     <div className='TabelDataPeserta'>
    //     <table>
    //         <tr>
    //             <th>No</th>
    //             <th>NIP</th>
    //             <th>Nama</th>
    //             <th>Jabatan</th>
    //             <th>Grade Pendidikan</th>
    //             <th>Jabatan Tujuan</th>
    //             <th>Edit</th>
    //         </tr>
    //         {todos.map((todo, index) => (
    //         <tbody>
    //           <tr>
    //             <th>{index+1}</th>
    //             <td>{todo.attributes.pegawai.data.attributes.NIP}</td>
    //             <td>{todo.attributes.pegawai.data.attributes.nama}</td>
    //             <td>{todo.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</td>
    //             <td>{todo.attributes.pegawai.data.attributes.Grade_Pendidikan}</td>
    //             <td>{todo.attributes.Jenjang_jabatan_tujuan.jenjang.data.attributes.nama_jenjang}</td>
    //             <td><button><AiIcons.AiOutlineForm className='Icon-btn'/></button></td>
    //           </tr>
    //         </tbody>
    //       ))}
            
    //     </table>
    //     </div>
    // </div>
    //     </div>
        
  );
}

export default DataPeserta;
