import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CInputGroup,
  CFormSelect,
  CInputGroupText,
} from '@coreui/react'
import {
  cilNotes,
  cilPaperclip,
  cilSearch,
  cilSpeedometer,
  cilSpreadsheet,
  cilUser,
} from '@coreui/icons'
import { DocsCallout, DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'

const PendaftaranFitAndPropper = () => {
  return (
    <>
      <CButton className='text-white' color='info'>Kembali</CButton>
      <DocsExample href="components/accordion">
        <div className='mb-3'>
          <CIcon icon={cilSpreadsheet}></CIcon><h6>Pendaftaran/ Updating Peserta Fit & Propper</h6><hr></hr>
        </div>
        <div className='mb-5'>
          <h5><b>Input/ Updating Pendaftaran Peserta Fit & Propper</b></h5><hr></hr>
        </div>
        <CRow className="mb-3 ">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">NIP</CFormLabel>
              <div className="col-sm-5">
                <CFormInput type="input" id="NIP" placeholder='Masukkan NIP Peserta'/>
              </div>
              <CButton type="button" color="info" variant="outline" id="button-addon2">Cek</CButton>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Nama</CFormLabel>
              <div className="col-sm-10">
                <CFormInput type="input" id="Nama" placeholder='Masukkan Nama Peserta' />
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Jabatan</CFormLabel>
              <div className="col-sm-10">
                <CFormInput type="input" id="NIP" placeholder='Masukkan Jabatan Peserta'/>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Grade</CFormLabel>
              <div className="col-sm-5">
                <CFormInput type="input" id="NIP" placeholder='Masukkan Grade Peserta'/>
              </div>
            </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Date</CFormLabel>
              <div className="col-sm-5">
                <CFormInput type="input" id="NIP" placeholder='Masukkan Tanggal'/>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Proyeksi</CFormLabel>
              <div className="col-sm-10">
                <CFormInput type="input" id="NIP" placeholder='Masukkan Proyeksi'/>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Jenjang Jabatan</CFormLabel>
              <div className="col-sm-5">
                <CFormSelect aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Jenis Fit and Propper</CFormLabel>
              <div className="col-sm-5">
                <CFormSelect aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Pilih Uraian Jabatan</CFormLabel>
              <div className="col-sm-6">
                <CFormSelect aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Upload PPT *.ppt/.pptx</CFormLabel>
              <div className="col-sm-10">
                <CFormInput type="file" id="inputGroupFile02" />
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Upload CV *.doc/.docs</CFormLabel>
              <div className="col-sm-10">
                <CFormInput type="file" id="inputGroupFile02" />
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 1</CFormLabel>
              <div className="col-sm-6">
                <CFormSelect aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 2</CFormLabel>
              <div className="col-sm-6">
                <CFormSelect aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 3</CFormLabel>
              <div className="col-sm-6">
                <CFormSelect aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
          </CInputGroup>
        </CRow>
        <CRow className="mb-3">
          <CInputGroup>
            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 4</CFormLabel>
              <div className="col-sm-6">
                <CFormSelect aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
          </CInputGroup>
        </CRow>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton className='mt-3 text-white' type="submit" color="info">Submit Form</CButton>
        </div>
      </DocsExample>
    </>
  )
}

export default PendaftaranFitAndPropper
