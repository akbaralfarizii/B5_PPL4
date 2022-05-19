import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import { cilCalendar, cilCalendarCheck } from '@coreui/icons'

const Dashboard = () => {
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
                    <CFormInput id='tanggal' type='date' placeholder='Pilih Tanggal Bulan'></CFormInput>
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
                    <CTableHeaderCell scope='col'><center><b>Nama</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>NIP</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Jabatan</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Proyeksi</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Tanggal</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Penguji</b></center></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell><center>1</center></CTableDataCell>
                    <CTableDataCell>Hanhan</CTableDataCell>
                    <CTableDataCell><center>201511041</center></CTableDataCell>
                    <CTableDataCell>Manager</CTableDataCell>
                    <CTableDataCell>Manager Atas</CTableDataCell>
                    <CTableDataCell><center>09-09-2022</center></CTableDataCell>
                    <CTableDataCell>Zulaikha</CTableDataCell>
                  </CTableRow>
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