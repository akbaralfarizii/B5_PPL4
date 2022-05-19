import React, { Component } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CButton,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormInput,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const PenilaianFitAndPropper = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data Penguji</strong>
          </CCardHeader>
          <CCardBody className='mt-3'>
            <CRow>
              <CCol xs={9}>
                <CForm>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder="Masukkan Kata Kunci Pencarian . . ."
                    />
                </CForm>
              </CCol>
              <CCol>
                <Link to={'/tambahpenguji'}>
                  <CButton
                    color='primary'
                    style={{width:'100%'}}
                    variant="outline" >
                      Tambah Penguji
                  </CButton>
                </Link>
              </CCol>
            </CRow>
              <CTable striped className='mt-3'>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Place and Date Birth</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Position</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Photo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>akbar</CTableDataCell>
                    <CTableDataCell>test</CTableDataCell>
                    <CTableDataCell>Bandung, 21 Mei 2001</CTableDataCell>
                    <CTableDataCell>Test</CTableDataCell>
                    <CTableDataCell>
                      <img src="https://cdn.keepo.me/images/post/lists/2019/08/27/main-list-image2nd-b016a720-04e2-4536-bcac-b82f60ee00a3-7.jpeg" width="100" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color={'warning'} variant="outline">
                      Edit</CButton>
                      <CButton color={'danger'} variant="outline">
                      Delete</CButton>
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

export default PenilaianFitAndPropper
