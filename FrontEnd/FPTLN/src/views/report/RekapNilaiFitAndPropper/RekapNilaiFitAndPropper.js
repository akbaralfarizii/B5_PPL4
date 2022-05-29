import React from 'react'
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
  CFormInput,
  CInputGroup,
  CFormLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPen, cilPeople, cilUserFollow } from '@coreui/icons'
import * as api from '../api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function RekapNilaiFitAndPropper () {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.NilaiFitAndPropper();
      const arr = result.data.data;
      setTodos(arr);
    };
    fetchData();
  }, []);

  return (
    <>
    <CRow>
      <CCol md={12}>
      <CCard>
            <CCardHeader className='bg-info text-white'><b>Data User</b>
            </CCardHeader>
            <CCardBody>
              <CInputGroup>
                <CFormLabel className="col-sm-2 col-form-label"><b>Pilih Bulan Tahun</b></CFormLabel>
                  <div className='col-sm-4'>
                    <CFormInput id='tanggal' type='date' placeholder='Pilih Tanggal Bulan'></CFormInput>
                  </div>
                  <CButton className='btn-info text-white ml-5'><b>Go</b></CButton>
              </CInputGroup>
            </CCardBody>
          </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <CIcon icon={cilPeople} size="lg" />
            <strong> Report Nilai Peserta Fit And Proper</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nip</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Proyeksi</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Jenjang</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tgl Fit and Proper</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Penguji</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nilai</CTableHeaderCell>
                </CTableRow>
                </CTableHead>
              {todos.map((todo, index) => (  
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell><center>{index+1}</center></CTableDataCell>
                    <CTableDataCell>{todo.attributes.Nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Proyeksi}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Jenjang_Jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Date}</CTableDataCell>
                    <CTableDataCell>Penguji</CTableDataCell>
                    {/* <CTableDataCell>
                      <center><CButton color="info"><CIcon icon={cilPen} className="me-2" ></CIcon><b>Edit</b></CButton></center>
                    </CTableDataCell> */}
                    <CTableDataCell>                  
                    <Link to={'/report/detailreport'}>
                    <CButton
                      color='info'
                      style={{width:'100%'}}
                      variant="outline" >
                       Lihat Nilai
                    </CButton>
                  </Link>
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

export default RekapNilaiFitAndPropper