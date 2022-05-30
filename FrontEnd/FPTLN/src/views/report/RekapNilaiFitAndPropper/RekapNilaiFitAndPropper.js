import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import { cilCalendar, cilCalendarCheck, cilSpreadsheet } from '@coreui/icons'

const RekapNilaiFitAndPropper = () => {
  return (
    <>
      <CInputGroup>
        <CFormLabel className="col-sm-2 col-form-label"><b>Pilih Tanggal</b></CFormLabel>
        <div className='col-sm-7'>
          <CFormInput id='tanggal' type='date' placeholder='Pilih Tanggal Bulan'></CFormInput>
        </div>
          <CButton className='btn-info text-white ml-5'><b>Go</b></CButton>
      </CInputGroup>
      <CRow className='mt-5'>
        <CCol>
          <CCard>
            <CCardHeader className='bg-dark text-white'>
              <CIcon icon={cilSpreadsheet}/>
              <strong> Report Nilai Peserta Fit & Propper</strong>
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
                    <CTableHeaderCell scope='col'><center><b>Jenjang</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Tanggal</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Penguji</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope='col'><center><b>Nilai</b></center></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell><center>1</center></CTableDataCell>
                    <CTableDataCell>Hanhan</CTableDataCell>
                    <CTableDataCell><center>201511041</center></CTableDataCell>
                    <CTableDataCell>Manager</CTableDataCell>
                    <CTableDataCell>Manager Atas</CTableDataCell>
                    <CTableDataCell>Jenjang Teuing</CTableDataCell>
                    <CTableDataCell><center>09-09-2022</center></CTableDataCell>
                    <CTableDataCell>Zulaikha</CTableDataCell>
                    <CTableDataCell>
                      <center>
                        <CButton className='btn btn-md btn-info text-white'>
                          <CIcon icon={cilSpreadsheet}></CIcon>
                          <strong> Lihat Nilai</strong>
                        </CButton>
                      </center>
                    </CTableDataCell>
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

export default RekapNilaiFitAndPropper