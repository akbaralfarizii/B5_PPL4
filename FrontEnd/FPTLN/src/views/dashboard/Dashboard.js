import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { cilCalendar, cilCalendarCheck } from '@coreui/icons'
import * as api from './api'

const Dashboard = () => {
  const [peserta, setPeserta] = useState([]);
  const [cari, setCari] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.Peserta();
      const arr = result.data.data;
      setPeserta(arr);
    };
    fetchData();
  }, []);
  return (
    <>
      <h3>Welcome to Fit & Propper Dashboard</h3>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className='bg-info text-white'>
              Dashboard / <b>Jadwal</b>
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
          <CCard>
            <CCardHeader>
              <CIcon icon={cilCalendar}/>
              <strong> Jadwal Fit & Propper</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope='col'><center><b>No</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>NIP</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Nama</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Jabatan</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Proyeksi</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Tanggal</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Penguji</b></center></CTableHeaderCell>
                    {/* <CTableHeaderCell scope='col'><center><b>Nilai</b></center></CTableHeaderCell> */}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {peserta.filter((todo)=>{
                  // if(cari == ""){
                  //   return todo
                  // }else if(todo.attributes.Date.toLowerCase().includes(cari.toLowerCase())) {
                  //   return todo
                  // }
                }).map((todo, index) => (  
<<<<<<< HEAD
                  // <CTableRow>
                  //   <CTableDataCell>{index+1}</CTableDataCell>
                  //   <CTableDataCell>{todo.attributes.NIP}</CTableDataCell>
                  //   <CTableDataCell>{todo.attributes.Nama}</CTableDataCell>
                  //   <CTableDataCell>{todo.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                  //   <CTableDataCell>{todo.attributes.proyeksi.data.attributes.nama_proyeksi}</CTableDataCell>
                  //   <CTableDataCell>{todo.attributes.Date}</CTableDataCell>
                  //   <CTableDataCell>penguji</CTableDataCell>
=======
                  <CTableRow>
                    <CTableDataCell>{index+1}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.proyeksi.data.attributes.nama_proyeksi}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Date}</CTableDataCell>
                    <CTableDataCell>penguji</CTableDataCell>
>>>>>>> a55dace552448a432785b0b14304e2941859e4e2
                    {/* <CTableDataCell>
                      <center>
                        <CButton className='text-white btn-info'>Lihat Nilai</CButton>
                      </center>
                    </CTableDataCell> */}
                  // </CTableRow>
              ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard