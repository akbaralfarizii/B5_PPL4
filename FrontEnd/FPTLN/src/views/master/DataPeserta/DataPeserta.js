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
import { cilPen, cilPeople, cilUserFollow } from '@coreui/icons'
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
    <>
    <CButton onClick={() => {navigate('/master/datapeserta/inputdatapeserta')}}><CIcon icon={cilUserFollow}></CIcon>Tambah Data Peserta</CButton>
    <CRow>
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
                  <CTableHeaderCell scope="col"><center><b>No</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Jabatan</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Grade</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Jenjang</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Edit</b></center></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {todos.map((todo, index) => (  
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell><center>{index+1}</center></CTableDataCell>
                    <CTableDataCell>{todo.attributes.Peserta.pegawai.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Peserta.pegawai.data.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Peserta.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Peserta.pegawai.data.attributes.grade.data.attributes.nama_grade}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.fitnproper.data.attributes.Jenjang_jabatan_tujuan.jenjang.data.attributes.nama_jenjang}</CTableDataCell>
                    <CTableDataCell>
                      <center><CButton color="info"><CIcon icon={cilPen} className="me-2" ></CIcon><b>Edit</b></CButton></center>
                    </CTableDataCell>s
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

export default DataPeserta;
