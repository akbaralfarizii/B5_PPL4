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
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const PencarianFitAndPropper = () => {
  return (
    <>
      <DocsExample href="forms/layout#gutters">
        <CForm className="row g-3">
          <CCol xs={12}>
            <CFormLabel htmlFor="inputAddress">Input NIP Peserta</CFormLabel>
            <CFormInput id="inputAddress" placeholder="NIP Peserta" />
          </CCol>
          <CCol xs={12}>
            <CButton type="submit">Cari Peserta</CButton>
          </CCol>
        </CForm>
      </DocsExample>
      <DocsExample href="components/table">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">No</CTableHeaderCell>
              <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
              <CTableHeaderCell scope="col">Jabatan Proyeksi</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tanggal Uji</CTableHeaderCell>
              <CTableHeaderCell scope="col">Hasil Nilai</CTableHeaderCell>
              <CTableHeaderCell scope="col">Lihat Report Nilai</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>201511041</CTableDataCell>
              <CTableDataCell>Hanhan Septian</CTableDataCell>
              <CTableDataCell>MANAGER SISTEM TRANSMISI</CTableDataCell>
              <CTableDataCell>09-09-2022</CTableDataCell>
              <CTableDataCell>Tidak Disaratkan (0)</CTableDataCell>
              <CTableDataCell>
                <CButton>Lihat Nilai</CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </DocsExample>
    </>
  )
}

export default PencarianFitAndPropper
