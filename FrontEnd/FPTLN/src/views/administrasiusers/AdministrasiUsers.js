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
  CButton
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const AdministrasiUsers = () => {
  return (
    <>
      <DocsExample>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">No</CTableHeaderCell>
              <CTableHeaderCell scope="col">Edit Hak Akses</CTableHeaderCell>
              <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
              <CTableHeaderCell scope="col">Password</CTableHeaderCell>
              <CTableHeaderCell scope="col">Akses</CTableHeaderCell>
              <CTableHeaderCell scope="col">Administrasi Users</CTableHeaderCell>
              <CTableHeaderCell scope="col">Master</CTableHeaderCell>
              <CTableHeaderCell scope="col">Daftar FP</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nilai FP</CTableHeaderCell>
              <CTableHeaderCell scope="col">Report</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>
                <CButton className='info'>Edit akses</CButton>
              </CTableDataCell>
              <CTableDataCell>201511041</CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>hanhan12345</CTableDataCell>
              <CTableDataCell>2</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>
                <CButton className='info'>Edit akses</CButton>
              </CTableDataCell>
              <CTableDataCell>201511041</CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>hanhan12345</CTableDataCell>
              <CTableDataCell>2</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>
                <CButton>Edit akses</CButton>
              </CTableDataCell>
              <CTableDataCell>201511041</CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>hanhan12345</CTableDataCell>
              <CTableDataCell>2</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </DocsExample>
    </>
  )
}

export default AdministrasiUsers
