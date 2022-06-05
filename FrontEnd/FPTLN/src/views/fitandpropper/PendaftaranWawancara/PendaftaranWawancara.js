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
import * as api from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

  const PendaftaranWawancara = () => {
    const [NIP, setNIP] = useState("");
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

    const [todosProyeksi, setTodosProyeksi] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const resultProyeksi = await api.proyeksi();
        const arrProyeksi = resultProyeksi.data.data;
        setTodosProyeksi(arrProyeksi);
        };
        fetchData();
    }, []);

    const [peserta, setPeserta] = useState([]);
    const [Penguji1, setpenguji1] = useState([]);
    const [Penguji2, setpenguji2] = useState([]);
    const [Penguji3, setpenguji3] = useState([]);
    const [Penguji4, setpenguji4] = useState([]);
    const [Penguji5, setpenguji5] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const resultPeserta = await api.Peserta();
        const arrPeserta = resultPeserta.data.data;
        setPeserta(arrPeserta);
        };
        fetchData();

    }, []);
    function Peserta() { 
      const idx = peserta.findIndex(x => 
        x.attributes.pegawai.data.attributes.NIP === document.getElementById("NIP").value)
      console.log(idx)
      document.getElementById("Nama").value = peserta[idx].attributes.pegawai.data.attributes.nama
      document.getElementById("Jabatan").value = peserta[idx].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
      document.getElementById("Grade").value = peserta[idx].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
    }

    const uri = `http://localhost:1337/api/wawancaras`
    const [pendaftar, setPendaftar] = useState({
      data :{
        NIP : "",
        Nama : "",
        Grade : "",
        Tgl_Wawacnara : "",
        Jenjang_Jabatan : "",
        jenis_wawancara : "",
        Uraian_Jabatan : "",
        Jabatan : "",
      }
    })



    function submit(e) {
      // let [Penguji1, setPenguji1] = useState(null);
      // let [Penguji2, setPenguji2] = useState(null);
      // let [Penguji3, setPenguji3] = useState(null);
      // let [Penguji4, setPenguji4] = useState(null);
      // let [Penguji5, setPenguji5] = useState(null);
      // setPenguji1 = document.getElementById("Penguji1").value;
      // setPenguji2 = document.getElementById("Penguji2").value;
      // setPenguji3 = document.getElementById("Penguji3").value;
      // setPenguji4 = document.getElementById("Penguji4").value;
      // setPenguji5 = document.getElementById("Penguji5").value;
      const idx = peserta.findIndex(x => 
        x.attributes.pegawai.data.attributes.NIP === document.getElementById("NIP").value)
      e.preventDefault();
      axios.post(uri,{
        data : {
          Tgl_Wawancara : document.getElementById("Tgl_Wawacnara").value,
          proyeksi :document.getElementById("Proyeksi_Jabatan").value,
          jenis_wawancara :document.getElementById("jenis_wawancara").value,
          uraian_jabatan : document.getElementById("UraianJabatan").value,
          // PPT : document.getElementById("PPT").value,
          // CV : document.getElementById("CV").value,
          // Penguji : document.getElementById("Penguji1").value,
          // Penguji : document.getElementById("Penguji2").value,
          // Penguji : document.getElementById("Penguji3").value,
          // Penguji : document.getElementById("Penguji4").value,
          // pengujis : [
          //   setPenguji1 = document.getElementById("Penguji1").value,
          //   setPenguji2 = document.getElementById("Penguji2").value,
          //   setPenguji3 = document.getElementById("Penguji3").value,
          //   setPenguji4 = document.getElementById("Penguji4").value,
          //   setPenguji5 = document.getElementById("Penguji5").value,
          // ],
          // pengujis : document.getElementById("Penguji1").value,
          peserta: peserta[idx].id,
      }
      })
      .then(res=>{
        console.log(peserta[idx].id)
      })
      // console.log(document.getElementById("ppt").value)
    }
    return (
      <>
        <CButton className='text-white mb-3 btn-dark'>
          <strong> Kembali</strong>
        </CButton>
        <CCard>
          <CCardHeader className='text-white bg-dark'>
            <CIcon icon={cilUserPlus} size="lg" />
            <strong> Pendaftaran/ Updating Peserta Wawancara Fit & Propper</strong>
          </CCardHeader>
          <CCardBody>
          <div className='mb-5'>
            <h5><b>Input/ Updating Pendaftaran Wawancara Fit & Propper</b></h5><hr></hr>
          </div>
          <CRow className="mb-3 ">
            <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">NIP</CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="text" id="NIP" placeholder='Masukkan NIP Peserta'
                    value={NIP}
                    onChange={(e) => {
                      setNIP(e.target.value);
                      console.log(NIP)
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
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Tgl_Wawacnara</CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="date" id="Tgl_Wawacnara" placeholder='Masukkan Tanggal'/>
                </div>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
              <CInputGroup>
              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">Proyeksi</CFormLabel>
                <div className="col-sm-5">
                  <CFormSelect id="Proyeksi_Jabatan" aria-label="Default select example">
                    <option disabled selected>--Pilih Proyeksi Jabatan--</option>
                    {todosProyeksi.map((todo) => ( 
                      <option value={todo.id}>{todo.attributes.nama_proyeksi}</option>
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
                  <CFormSelect id="jenis_wawancara" aria-label="Default select example">
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
                    <CFormInput type="input" id="UraianJabatan" placeholder='Masukkan Uraian Jabatan'/>
                  {/* <CFormSelect id="UraianJabatan" aria-label="Default select example">
                    <option disabled selected>--Pilih Uraian Jabatan--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect> */}
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
                    <option value={todo.id}>{todo.attributes.pegawai.data.attributes.nama}</option>
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
                    <option value={todo.id}>{todo.attributes.pegawai.data.attributes.nama}</option>
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
                    <option value={todo.id}>{todo.attributes.pegawai.data.attributes.nama}</option>
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
                    <option value={todo.id}>{todo.attributes.pegawai.data.attributes.nama}</option>
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
                    <option value={todo.id}>{todo.attributes.pegawai.data.attributes.nama}</option>
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

  export default PendaftaranWawancara
