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

const RekapNilaiFitAndPropper = () => {
  const [nilaiFitAndPropper, setNilaiFitAndPropper] = useState([]);
  const [cari, setCari] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.NilaiFitAndPropper();
      const arr = result.data.data;
      setNilaiFitAndPropper(arr);
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
                    <CFormInput id='tanggal' type='date' placeholder='Pilih Bulan Tahun' onChange={(event)=>{
                      setCari(event.target.value);
                    }}
                    />
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
            <CTable striped hover bordered>
              <CTableHead color="dark" align="center">
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
              <CTableBody>
                {nilaiFitAndPropper.filter((todo)=>{
                  if(cari == ""){
                    return todo
                  }else if(todo.attributes.Date.toLowerCase().includes(cari.toLowerCase())) {
                    return todo
                  }
                }).map((todo, index) => ( 
                
                  <CTableRow>
                    <CTableDataCell><center>{index+1}</center></CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.proyeksi.data.attributes.nama_proyeksi}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Date}</CTableDataCell>
                    <CTableDataCell>Penguji</CTableDataCell>
                    <CTableDataCell>                  
                      <Link to={'/report/detailreport'}>
                        <CButton className='btn btn-md btn-info text-white'>
                          Lihat Nilai
                        </CButton>
                      </Link>
                  </CTableDataCell>
                  </CTableRow>
                   ))}
                </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  );
}

export default RekapNilaiFitAndPropper