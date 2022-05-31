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
  } from '@coreui/react';
import {
  cilNotes,
  cilPaperclip,
  cilSearch,
  cilSpeedometer,
  cilSpreadsheet,
  cilUser,
  cilUserPlus,
} from '@coreui/icons';
import { DocsCallout, DocsExample } from 'src/components';
import CIcon from '@coreui/icons-react';
import * as api from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

  const PendaftaranFitAndPropper = () => {
    const [NIP, setNIP] = useState(" ");
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const result = await api.Penguji();
        const arr = result.data.data;
        setTodos(arr);
        };
        fetchData();

    }, []);
    const [todosJabatan, setTodosJabatan] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const resultJabatan = await api.jabatan();
        const arrJabatan = resultJabatan.data.data;
        setTodosJabatan(arrJabatan);
        };
        fetchData();

    }, []);
    const [todosPeserta, setTodosPeserta] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const resultPeserta = await api.Peserta();
        const arrPeserta = resultPeserta.data.data;
        setTodosPeserta(arrPeserta);
        };
        fetchData();

    }, []);
    function Peserta() { 
      const idPeserta = todosPeserta.findIndex(object => {
        return NIP === document.getElementById("NIP").value
      })
      document.getElementById("Nama").value = todosPeserta[idPeserta].attributes.pegawai.data.attributes.nama
      document.getElementById("Jabatan").value = todosPeserta[idPeserta].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
      document.getElementById("Grade").value = todosPeserta[idPeserta].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
      console.log(todosPeserta[idPeserta].attributes.pegawai.data.attributes.nama)
      console.log(todosPeserta[idPeserta].attributes.pegawai.data.attributes.NIP)
    }

    const uri = `http://10.10.67.182:1337/api/pendaftars`
    const [pendaftar, setPendaftar] = useState({
      data :{
        NIP : "",
        Nama : "",
        Grade : "",
        Date : "",
        Jenjang_Jabatan : "",
        Jenis_FitPropper : "",
        Uraian_Jabatan : "",
        Jabatan : "",
      }
    })

    function submit(e){
      axios.post(uri,{
        data : {
          NIP : document.getElementById("NIP").value,
          Nama : document.getElementById("Nama").value,
          Grade : document.getElementById("Grade").value,
          Date: document.getElementById("Date"),
          Jenjang_Jabatan : document.getElementById("Jenjang_Jabatan"),
          Jenis_FitPropper : document.getElementById("Jenis_FitPropper"),
          Uraian_Jabatan : document.getElementById("Uraian_Jabatan"),
          Jabatan : document.getElementById("Jabatan"),
        }
        .then(res=>{
          console.log(res.data)
        })
      })
    }
    return (
      <>
        <CButton className='text-white mb-3 btn-dark'>
          <strong> Kembali</strong>
        </CButton>
        <CCard>
          <CCardHeader className='text-white bg-dark'>
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
                  <CFormInput type="input" id="NIP" placeholder='Masukkan NIP Peserta'
                    value={NIP}
                    onChange={(e) => {
                      setNIP(e.target.value);
                    }}
                  />
                </div>
                <CButton className='btn-info text-white' type="submit" id="cek" onClick={() => Peserta()}>Cek</CButton>
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
                  <CFormInput type="date" id="Date" placeholder='Masukkan Tanggal'/>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
              <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Proyeksi</CFormLabel>
                <div className="col-sm-5">
                  <CFormSelect id="Proyeksi_Jabatan" aria-label="Default select example">
                    <option disabled selected>--Pilih Proyeksi Jabatan--</option>
                    {todosJabatan.map((todo) => ( 
                      <option value="Proyeksi_Jabatan">{todo.attributes.nama_jabatan}</option>
                    ))}
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Jenjang Jabatan</CFormLabel>
                <div className="col-sm-5">
                  <CFormSelect id="Jenjang_Jabatan" aria-label="Default select example">
                    <option disabled selected>--Pilih Jenjang Jabatan--</option>
                    {todosJabatan.map((todo) => ( 
                      <option value="Jenjang_Jabatan">{todo.attributes.nama_jabatan}</option>
                    ))}
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Jenis Fit and Propper</CFormLabel>
                <div className="col-sm-5">
                  <CFormSelect id="Jenis_FitPropper" aria-label="Default select example">
                    <option disabled selected>--Pilih Jenis Fit & Propper--</option>
                    <option value="regular">Regular</option>
                    <option value="vicon">Vicon</option>
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Pilih Uraian Jabatan</CFormLabel>
                <div className="col-sm-6">
                  <CFormSelect id="UraianJabatan" aria-label="Default select example">
                    <option disabled selected>--Pilih Uraian Jabatan--</option>
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
                    <option disabled selected>--Pilih Penguji 1--</option>
                    {todos.map((todo) => ( 
                    <option value="penguji1">{todo.attributes.pegawai.data.attributes.nama}</option>
                    ))}
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 2</CFormLabel>
                <div className="col-sm-6">
                  <CFormSelect id="Penguji2" aria-label="Default select example">
                    <option disabled selected>--Pilih Penguji 2--</option>
                    {todos.map((todo) => ( 
                    <option value="penguji1">{todo.attributes.pegawai.data.attributes.nama}</option>
                    ))}
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 3</CFormLabel>
                <div className="col-sm-6">
                  <CFormSelect id='Penguji3' aria-label="Default select example">
                    <option disabled selected>--Pilih Penguji 3--</option>
                    {todos.map((todo) => ( 
                    <option value="penguji1">{todo.attributes.pegawai.data.attributes.nama}</option>
                    ))}
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 4</CFormLabel>
                <div className="col-sm-6">
                  <CFormSelect id='Penguji4' aria-label="Default select example">
                    <option disabled selected>--Pilih Penguji 4--</option>
                    {todos.map((todo) => ( 
                    <option value="penguji1">{todo.attributes.pegawai.data.attributes.nama}</option>
                    ))}
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Penguji 5</CFormLabel>
                <div className="col-sm-6">
                  <CFormSelect id='Penguji5' aria-label="Default select example">
                    <option disabled selected>--Pilih Penguji 5--</option>
                    {todos.map((todo) => ( 
                    <option value="penguji1">{todo.attributes.pegawai.data.attributes.nama}</option>
                    ))}
                  </CFormSelect>
                </div>
            </CInputGroup>
          </CRow>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <CButton className='mt-3 text-white btn-info' type="submit" onClick={(e) => submit(e)}>Submit Form</CButton>
          </div>
        </CCardBody>
        </CCard>
      </>
    )
  }

  export default PendaftaranFitAndPropper
