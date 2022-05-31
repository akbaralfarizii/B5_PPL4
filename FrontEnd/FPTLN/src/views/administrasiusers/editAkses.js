import { CButton, CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CRow} from "@coreui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const editAkses = () => {
    let kembali = useNavigate()
    const uri = `http://localhost:1337/api/administrasi-users`
    const [admin, setAdmin] = useState({
        data : {
            NIP :"",
            Nama : "",
            Password : "",
            Akses : "",
            AdministrasiUsers : "",
            Master: "",
            DaftarFP: "",
            NilaiFP: "",
            Report: "",
    }
    })
  
  function submit(e) {
    axios.post(uri,{
      data : {
        NIP :document.getElementById("NIP").value,
        Nama : document.getElementById("Nama").value,
        Password : document.getElementById("Password").value,
        Akses : document.getElementById("Akses").value,
        AdministrasiUsers : document.getElementById("AdminUser").value,
        Master : document.getElementById("Master").value,
        DaftarFP : document.getElementById("DaftarFP").value,
        NilaiFP : document.getElementById("NilaiFP").value,
        Report : document.getElementById("Report").value,
    }
    })
    .then(res=>{
      console.log(res.data)
    })
  }
    return(
        <>
            <CButton className="btn btn-md btn-dark text-white mb-2" onClick={() => {kembali('/administrasiusers')}}>
                Kembali
            </CButton>
            <CCard>
                <CCardHeader className="bg-dark text-white">
                    Form Edit Akses User
                </CCardHeader>
                <CCardBody>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">NIP</CFormLabel>
                            <div className="col-sm-10">
                            <CFormInput type="input" id="NIP" placeholder='Masukkan NIP' />
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Nama</CFormLabel>
                            <div className="col-sm-10">
                            <CFormInput type="input" id="Nama" placeholder='Masukkan Nama' />
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Password</CFormLabel>
                            <div className="col-sm-10">
                            <CFormInput type="password" id="Password" placeholder='Masukkan Password' />
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Akses</CFormLabel>
                            <div className="col-sm-10">
                            <CFormInput type="input" id="Akses" placeholder='Masukkan Akses' />
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Administrasi Users</CFormLabel>
                            <div className="col-sm-10">
                                <CFormSelect type="input" id="AdminUser" placeholder='Masukkan Nama Peserta'>
                                    <option disabled selected className="bg-dark text-white">Pilih Akses Administrasi Users</option>
                                    <option>0</option>
                                    <option>1</option>
                                </CFormSelect>
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Master</CFormLabel>
                            <div className="col-sm-10">
                                <CFormSelect type="input" id="Master" placeholder='Masukkan Nama Peserta'>
                                    <option disabled selected className="bg-dark text-white">Pilih Akses Master</option>
                                    <option>0</option>
                                    <option>1</option>
                                </CFormSelect>
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Daftar FP</CFormLabel>
                            <div className="col-sm-10">
                                <CFormSelect type="input" id="DaftarFP" placeholder='Masukkan Nama Peserta'>
                                    <option disabled selected className="bg-dark text-white">Pilih Akses Daftar FP</option>
                                    <option>0</option>
                                    <option>1</option>
                                </CFormSelect>
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Nilai FP</CFormLabel>
                            <div className="col-sm-10">
                            <CFormSelect type="input" id="NilaiFP" placeholder='Masukkan Nama Peserta'>
                                <option disabled selected className="bg-dark text-white">Pilih Akses Nilai FP</option>
                                <option>0</option>
                                <option>1</option>
                             </CFormSelect>
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                        <CInputGroup>
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Report</CFormLabel>
                            <div className="col-sm-10">
                                <CFormSelect type="input" id="Report" placeholder='Masukkan Nama Peserta'>
                                    <option disabled selected className="bg-dark text-white">Pilih Akses Report</option>
                                    <option>0</option>
                                    <option>1</option>
                                </CFormSelect>
                            </div>
                        </CInputGroup>
                    </CRow>
                    <CButton className="btn btn-md btn-info text-white mt-5" onClick={(e)=>submit(e)}>
                        Update
                    </CButton>

                </CCardBody>
            </CCard>
    
        </>
    )
}
export default editAkses