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
import CIcon from '@coreui/icons-react'
import {
  cilUser
} from '@coreui/icons'

const AdministrasiUsers = () => {
  return (
    <>
      <CCard>
        <CCardHeader className='bg-dark text-white'>
          <CIcon icon={cilUser}></CIcon>
          <strong> Administrasi User</strong>
        </CCardHeader>
        <CTable striped bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col"><center><b>No</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Edit Hak Akses</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Password</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Akses</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Administrasi Users</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Master</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Daftar FP</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Nilai FP</b></center></CTableHeaderCell>
              <CTableHeaderCell scope="col"><center><b>Report</b></center></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell><center></center>1</CTableDataCell>
              <CTableDataCell>
                <center><CButton className='text-white' color='info'>Edit akses</CButton></center>
              </CTableDataCell>
              <CTableDataCell><center>201511041</center></CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>hanhan12345</CTableDataCell>
              <CTableDataCell><center>2</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
              <CTableDataCell><center>0</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
              <CTableDataCell><center>0</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><center></center>1</CTableDataCell>
              <CTableDataCell>
              <center><CButton className='text-white' color='info'>Edit akses</CButton></center>
              </CTableDataCell>
              <CTableDataCell><center>201511041</center></CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>hanhan12345</CTableDataCell>
              <CTableDataCell><center>2</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
              <CTableDataCell><center>0</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
              <CTableDataCell><center>0</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell><center></center>1</CTableDataCell>
              <CTableDataCell>
              <center><CButton className='text-white' color='info'>Edit akses</CButton></center>
              </CTableDataCell>
              <CTableDataCell><center>201511041</center></CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>hanhan12345</CTableDataCell>
              <CTableDataCell><center>2</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
              <CTableDataCell><center>0</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
              <CTableDataCell><center>0</center></CTableDataCell>
              <CTableDataCell><center>1</center></CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCard>
    </>
  )
}

export default AdministrasiUsers
