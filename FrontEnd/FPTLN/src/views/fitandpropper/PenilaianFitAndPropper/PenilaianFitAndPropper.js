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
import * as api from '../api';
import { useEffect, useState } from 'react';

function PeniaianFitAndPropper () {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.Peserta();
      const arr = result.data.data;
      setTodos(arr);
    };
    fetchData();
  }, []);

  return (
    <>
    <CRow>
      <CCol md={12}>
        <CCard className="mb-4">
          <CCardHeader className='bg-dark text-white'>
            <CIcon icon={cilPeople} size="lg" />
            <strong> Penilaian Fit And Proper</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover bordered>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col"><center><b>No</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Jabatan</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>CV</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Proyeksi</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Jenjang</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Tanggal Fit And Proper</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Penguji</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Penilaian</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Nilai</b></center></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {todos.map((todo, index) => (  
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell><center>{index+1}</center></CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</CTableDataCell>
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

export default PeniaianFitAndPropper;


