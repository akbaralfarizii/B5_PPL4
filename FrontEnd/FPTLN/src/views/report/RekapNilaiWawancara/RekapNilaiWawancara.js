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
} from '@coreui/react'
import { Link } from 'react-router-dom'

const RekapNilaiWawancara = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
          <CCardHeader>
              <strong>Rekap Penilaian Peserta Wawancara</strong>
            </CCardHeader>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                  <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Proyeksi</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Jenjang</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tgl Fit Proper</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Penguji</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nilai</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Akbar Alfarisi</CTableDataCell>
                  <CTableDataCell>201511049</CTableDataCell>
                  <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>Test</CTableDataCell>
                  <CTableDataCell>19-05-2022</CTableDataCell>
                  <CTableDataCell>-</CTableDataCell>
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
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RekapNilaiWawancara
