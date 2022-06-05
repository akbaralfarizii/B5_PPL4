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

const PenilaianWawancara = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.NilaiWawancara();
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
                  <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Jabatan</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>CV</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Proyeksi</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Jenjang</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Tanggal Wawancara</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Penguji</b></center></CTableHeaderCell>
                  <CTableHeaderCell scope="col"><center><b>Nilai</b></center></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {todos.map((todo, index) => (  
                <CTableBody>
                    <CTableRow>
                      <CTableDataCell><center>{index+1}</center></CTableDataCell>
                      <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.NIP}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                      <CTableDataCell>File</CTableDataCell>
                      <CTableDataCell>{todo.attributes.proyeksi.data.attributes.nama_proyeksi}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.Tgl_Wawancara}</CTableDataCell>
                      <CTableDataCell>penguji</CTableDataCell>
                      <CTableDataCell>{todo.attributes.total_penilaian_wawancara}</CTableDataCell>
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

export default PenilaianWawancara
