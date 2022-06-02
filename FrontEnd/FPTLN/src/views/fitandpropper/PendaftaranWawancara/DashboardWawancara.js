import CIcon from '@coreui/icons-react'
import { 
  CButton, 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CCol, 
  CFormInput, 
  CFormLabel,
  CInputGroup, 
  CRow, 
  CTable, 
  CTableBody, 
  CTableDataCell, 
  CTableHead, 
  CTableHeaderCell, 
  CTableRow 
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { cilCalendar, cilUserPlus} from '@coreui/icons'
import * as api from '../api'
import { Link } from 'react-router-dom'

const DashboardWawancara = () => {
  const [peserta, setPeserta] = useState([]);

  const [cari, setCari] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.Pendaftar();
      const arr = result.data.data;
      setPeserta(arr);
    };
    fetchData();
  }, []);

  return (
    <>
      <CRow>
        <CCol>
            <Link to={'/fit&propper/pendaftaranwawancara'}>
                <CButton className='btn btn-sm btn-info text-white mb-2'>
                    <CIcon icon={cilUserPlus} className="me-1"/>Pendaftaran Wawancara
                </CButton>
            </Link>
          <CCard>
            <CCardHeader className='bg-dark text-white'>
              Dashboard / <b>Pendaftaran Wawancara</b>
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
                  <CButton className='btn btn-sm btn-info text-white ms-1'><b>Go</b></CButton>
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
                    <CTableHeaderCell scope='col'><center><b>Nama</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>NIP</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Jabatan</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Proyeksi</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Tanggal</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Penguji</b></center></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {peserta.filter((todo)=>{
                  if(cari == ""){
                    return todo
                  }else if(todo.attributes.Date.toLowerCase().includes(cari.toLowerCase())) {
                    return todo
                  }
                }).map((todo, index) => (  
                  <CTableRow>
                    <CTableDataCell>{index+1}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.peserta.data.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.proyeksi.data.attributes.nama_proyeksi}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Date}</CTableDataCell>
                    <CTableDataCell>penguji</CTableDataCell>
                  </CTableRow>
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

export default DashboardWawancara