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
  cilUserPlus,
} from '@coreui/icons'
import { DocsCallout, DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
function dataPeserta() { 
  const idx = peserta.findIndex(object => {
  return nip === document.getElementById("nip").value})
  document.getElementById("nama").value = peserta[idx].attributes.pegawai.data.attributes.nama
  document.getElementById("jabatan").value = peserta[idx].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
  document.getElementById("grade").value = peserta[idx].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
}

// const uri = `${url}/api/pendaftars`
// const [pendaftar, setPendaftar] = useState({
//   data : {
//     urjab :"",
//     Jenis_FitnProper : "",
//     date : "",
//     proyeksi_jabatan : "",
//     jenjang_jabatan : "",
//     file_cv: "",
//     file_ppt: "",
//     pesertas: "",
// }
// })
// function submit(e) {
//   const idx = peserta.findIndex(object => {
//     return nip === document.getElementById("nip").value})
//   e.preventDefault();
//   axios.post(uri,{
//     data : {
//       urjab :document.getElementById("urjab").value,
//       Jenis_FitnProper : document.getElementById("fp").value,
//       date : document.getElementById("date").value,
//       proyeksi_jabatan : document.getElementById("proyeksi").value,
//       jenjang_jabatan : document.getElementById("jenjab").value,
//       file_cv: "",
//       file_ppt: "",
//       pesertas: peserta[idx].id,
//   }
//   })
//   .then(res=>{
//     console.log(res.data)
//   })
//   document.location.reload(true)
// }

  const PendaftaranFitAndPropper = () => {
    return (
      <>
        <CButton className='text-white mb-3' color='info'>Kembali</CButton>
        <CCard>
          <CCardHeader>
            <CIcon icon={cilUserPlus} size="lg" />
            <strong> Pendaftaran/ Updating Peserta Fit & Propper</strong>
          </CCardHeader>
          <CCardBody>
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
                  <CFormInput type="input" id="Jabatan" placeholder='Masukkan Jabatan Peserta'/>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Grade</CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="input" id="Grade" placeholder='Masukkan Grade Peserta'/>
                </div>
              </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Date</CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="input" id="Date" placeholder='Masukkan Tanggal'/>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Proyeksi</CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="input" id="Proyeksi" placeholder='Masukkan Proyeksi'/>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Jenjang Jabatan</CFormLabel>
                <div className="col-sm-5">
                  <CFormSelect id="JenjangJabatan" aria-label="Default select example">
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
                  <CFormSelect id="JenisFitPropper" aria-label="Default select example">
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
                  <CFormSelect id="UraianJabatan" aria-label="Default select example">
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
                  <CFormInput type="file" id="PPT" />
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Upload CV *.doc/.docs</CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="file" id="CV" />
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 1</CFormLabel>
                <div className="col-sm-6">
                  <CFormSelect id='Penguji1' aria-label="Default select example">
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
                  <CFormSelect id="Penguji2" aria-label="Default select example">
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
                  <CFormSelect id='Penguji3' aria-label="Default select example">
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
                  <CFormSelect id='Penguji4' aria-label="Default select example">
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
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 5</CFormLabel>
                <div className="col-sm-6">
                  <CFormSelect id='Penguji5' aria-label="Default select example">
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
        </CCardBody>
        </CCard>
      </>
    )
  }

  export default PendaftaranFitAndPropper
