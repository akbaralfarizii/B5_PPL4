import { cilNewspaper, cilSpreadsheet } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'

const CetakNilaiWawancara = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          <CIcon icon={cilNewspaper} size="lg" />
          <strong> Report Nilai Peserta Wawancara</strong>
        </CCardHeader>
        <CCardBody>
          <CTable striped hover bordered>
            <CTableHead color='dark'>
              <CTableRow>
                <CTableHeaderCell scope="col"> <center>NO</center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center>TANGGAL</center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center>PROYEKSI JABATAN</center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center>LIHAT</center></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell><center>1</center></CTableDataCell>
                <CTableDataCell><center>09-09-2022</center></CTableDataCell>
                <CTableDataCell>SENIOR MANAGER PERENCANAAN</CTableDataCell>
                <CTableDataCell>
                  <center>
                    <CButton className='text-white' color='info'>
                      <CIcon icon={cilSpreadsheet} className="me-2" />
                      <b>Lihat Cetak</b>
                    </CButton>
                  </center>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CetakNilaiWawancara
