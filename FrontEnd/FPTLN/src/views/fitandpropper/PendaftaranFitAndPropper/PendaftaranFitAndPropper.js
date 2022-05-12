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
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton,
  CFormInput,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

const PendaftaranFitAndPropper = () => {
  return (
    <CRow>
      <CCol md={12}>
          <h3>welcome to fit & propper Dashboard</h3>
        <CCard className="mb-6">
          <CCardHeader color="primary">
            Dashboard / Jadwal
          </CCardHeader>
          <CCardBody>
            <CRow className='align-self-center'>
              <CCol sm="auto" >Pilih Bulan Tahun</CCol>
              <CCol sm={5}>
                  <CFormInput type="text" size="sm" placeholder="Date" aria-label="default input example"/>
              </CCol>
              <CCol sm="auto">
                <CButton color="primary" type="submit">Go</CButton>
              </CCol>
            </CRow>
            <CTable striped hover>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nip</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Proyeksi</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Penguji</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>201213123</CTableDataCell>
                  <CTableDataCell>Leader</CTableDataCell>
                  <CTableDataCell>grade atas</CTableDataCell>
                  <CTableDataCell>masa depan</CTableDataCell>
                  <CTableDataCell>Icon button</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>21314123</CTableDataCell>
                  <CTableDataCell>@fat</CTableDataCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell>Larry the Bird</CTableDataCell>
                  <CTableDataCell>12355435</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PendaftaranFitAndPropper
