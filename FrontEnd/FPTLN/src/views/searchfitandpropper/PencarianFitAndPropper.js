import React from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilZoom } from '@coreui/icons'
import { DocsCallout, DocsExample } from 'src/components'

const PencarianFitAndPropper = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className='bg-dark text-white'>
          <CIcon icon={cilZoom} size="lg" />
          <strong> Cari Fit & Propper</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol xs={12}>
              <CFormLabel htmlFor="inputAddress">Input NIP Peserta</CFormLabel>
              <CFormInput id="inputAddress" placeholder="NIP Peserta" />
            </CCol>
            <CCol xs={12}>
              <CButton className='text-white btn-info' type="submit">Cari Peserta</CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard>
        <CTable bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col"><center><b>No</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Jabatan Proyeksi</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Tanggal Uji</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Hasil Nilai</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Lihat Report Nilai</b></center></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><center>1</center></CTableDataCell>
              <CTableDataCell><center>201511041</center></CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>MANAGER SISTEM TRANSMISI</CTableDataCell>
              <CTableDataCell><center>09-09-2022</center></CTableDataCell>
              <CTableDataCell><center>Tidak Disaratkan (0)</center></CTableDataCell>
              <CTableDataCell>
                <center>
                  <CButton className='text-white btn-info'>Lihat Nilai</CButton>
                </center>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCard>
    </>
  )
}

export default PencarianFitAndPropper
