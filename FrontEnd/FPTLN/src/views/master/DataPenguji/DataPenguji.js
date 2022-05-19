import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilPen, cilUserFollow } from '@coreui/icons'
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
    <>
     <CButton onClick={() => {navigate('/master/datapenguji/inputdatapenguji')}}><CIcon icon={cilUserFollow}></CIcon>Tambah Data Penguji</CButton>
    <CRow>
      <CCol md={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CIcon icon={cilPeople} size="lg" />
            <strong> Data Penguji</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col"><center><b>No</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Jabatan</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Edit</b></center></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {todos.map((todo, index) => (  
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell><center>{index+1}</center></CTableDataCell>
                    <CTableDataCell><center>{todo.attributes.Penguji.pegawai.data.attributes.NIP}</center></CTableDataCell>
                    <CTableDataCell>{todo.attributes.Penguji.pegawai.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Penguji.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    <CTableDataCell>
                      <center><CButton color="info"><CIcon icon={cilPen} className="me-2" ></CIcon><b>Edit</b></CButton></center>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              ))}
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>

  );
}

export default DataPenguji;
