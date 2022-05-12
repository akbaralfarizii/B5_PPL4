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
    <CRow>
      <CButton color="secondary" variant="outline">Secondary</CButton>
      <CCol md={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CIcon icon={cilPeople} size="lg" />
            <strong> Data Peserta</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {todos.map((todo, index) => (  
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    
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
    //         <button className='btn'onClick={() => {navigate('/master/datapenguji/inputdatapenguji')}}><BsIcons.BsFillPersonFill className='Icon-btn'/> Tambah Data Penguji</button>
    //     </div>
        
    //     <div className='side'>
    //         <h3><BsIcons.BsFillPersonFill />  Data Penguji</h3>
    //     </div>

    //     <div className='TabelDataPeserta'>
    //     <table>
    //         <tr className='table'>
    //             <th>No</th>
    //             <th>Nama</th>
    //             <th>NIP</th>
    //             <th>Jabatan</th>
    //             <th>Edit</th>
    //         </tr>
    //         {todos.map((todo, index) => (
    //         <tbody>
    //           <tr>
    //             <th>{index+1}</th>
    //             <td>{todo.id}</td>
    //             <td>{todo.attributes.id_penguji}</td>
    //             {/* <td>{todo.attributes.pegawais.data.attributes.NIP}</td> */}
    //             {/* <td>{todo.attributes.pegawai.data.attributes.nama}</td>
    //             <td>{todo.attributes.pegawai.data.attributes.NIP}</td>
    //             <td>{todo.attributes.pegawais.data.attributes.jabatan.data.attributes.nama_jabatan}</td> */}
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

export default DataPenguji;
