import React, { useEffect, useState } from 'react'
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
import * as api from './api'

const PencarianFitAndPropper = () => {
  const [peserta, setPeserta] = useState([]);
  const [cari, setCari] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.Peserta();
      const arr = result.data.data;
      setPeserta(arr);
    };
    fetchData();
  }, []);

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
              <CFormLabel>Input NIP Peserta</CFormLabel>
              <CFormInput id="NIP" placeholder="Masukkan NIP Peserta" onChange={(event)=>{
                setCari(event.target.value);
              }}
              />
            </CCol>
            <CCol xs={12}>
              <CButton className='text-white btn-info' type="submit">Cari Peserta</CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
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
            <CTableBody align="center">
                {peserta.filter((todo)=>{
                  if(cari == ""){
                    return todo
                  }else if(todo.attributes.NIP.toLowerCase().includes(cari.toLowerCase())) {
                    return todo
                  }else if(todo.attributes.Nama.toLowerCase().includes(cari.toLowerCase())) {
                    return todo
                  }
                }).map((todo, index) => (  
                  <CTableRow>
                    <CTableDataCell>{index+1}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.JabatanProyeksi}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.TanggalUji}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.HasilNilai}</CTableDataCell>
                    <CTableDataCell>
                      <center>
                        <CButton className='text-white btn-info'>Lihat Nilai</CButton>
                      </center>
                    </CTableDataCell>
                  </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default PencarianFitAndPropper
