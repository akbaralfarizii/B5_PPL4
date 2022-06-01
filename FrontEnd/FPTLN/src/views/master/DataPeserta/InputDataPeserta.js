import React from "react";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import '../style.css';
import * as api from '../api';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { CButton, CCard, CCardBody, CCardHeader, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableHead,CTableDataCell, CTableRow, CTableHeaderCell } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilUserPlus , cilPlus} from '@coreui/icons'

const InputDataPeserta  = () => {
    let navigate = useNavigate ()
    const [pegawai, setPegawai] = useState([]);
    const [cari, setCari] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await api.Pegawai();
        const arr = result.data.data;
        setPegawai(arr);
      };
      fetchData();
    }, []);

    const uri = `http://192.168.100.3:1337/api/pesertas`
    // const [peserta, setPeserta] = useState({
    //     "data" : {
    //         id_peserta: "",
    //         pegawai : [],
    //     }
    // })
  
  function submit(nilai) {
    axios.post(uri,{
      "data" : {
        pegawai : [nilai]
    }
    })
    .then(res=>{
      console.log(res.data)
    })
  }
    

    return(
        <>
        <CButton className='btn btn-md bg-info text-white' onClick={() => {navigate ('/master/datapeserta')}}>Kembali</CButton>
            <CCard>
                <CCardHeader className="bg-dark text-white">
                    <CIcon icon={cilUserPlus}/>
                    <strong>Tambah / Update Data Peserta</strong>
                </CCardHeader>
                <CCardBody>
                    <h4>Input Data Peserta</h4><hr></hr>
                    <CInputGroup className="mt-5">
                        <CFormLabel className="col-sm-1 col-form-label"><h5><b>NIP</b></h5></CFormLabel>
                        <div className="col-sm-6">
                        <CFormInput type="input" id="NIP" placeholder="Masukkan NIP" onChange={(event)=>{
                            setCari(event.target.value);
                        }}
                        />
                        </div>
                    </CInputGroup>
                    <CInputGroup className="mt-3">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-1">
                            <CFormInput className="bg-info text-white" type="submit" id="NIP" value="CEK"></CFormInput>
                        </div>
                        <div className="col-sm-1">
                            <CFormInput className="bg-info text-white" type="submit" id="NIP" value="MANUAL"></CFormInput>
                        </div>
                        <div className="col-sm-1">
                            <CFormInput className=" bg-info text-white" type="submit" id="NIP" value="BATAL"></CFormInput>
                        </div>
                    </CInputGroup>

                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <CTable bordered striped >
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
                            <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
                            <CTableHeaderCell scope="col"><center><b>Jabatan</b></center></CTableHeaderCell>
                            <CTableHeaderCell scope="col"><center><b>Grade</b></center></CTableHeaderCell>
                            <CTableHeaderCell scope="col"><center><b>Jenjang</b></center></CTableHeaderCell>
                            <CTableHeaderCell scope="col"><center><b>Aksi</b></center></CTableHeaderCell>
                        </CTableRow>
                        </CTableHead>
                        <CTableBody align="center">
                            {pegawai.filter((todo)=>{
                            if(cari == ""){
                                return null
                            }else if(todo.attributes.NIP.toLowerCase().includes(cari.toLowerCase())) {
                                return todo
                            }
                            }).map((todo) => (  
                            <CTableRow>
                                <CTableDataCell>{todo.attributes.nama}</CTableDataCell>
                                <CTableDataCell>{todo.attributes.NIP}</CTableDataCell>
                                <CTableDataCell>{todo.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                                <CTableDataCell>{todo.attributes.grade.data.attributes.nama_grade}</CTableDataCell>
                                <CTableDataCell>{todo.attributes.jenjang.data.attributes.nama_jenjang}</CTableDataCell>
                                <CTableDataCell>
                                    <center>
                                    <Link to={'/master/datapeserta'}>
                                        <CButton className="btn btn-md bg-info text-white" onClick={(e)=>submit(todo.id)}>
                                            <CIcon icon={cilPlus}/>
                                             Tambahkan
                                        </CButton>
                                    </Link>
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
export default InputDataPeserta;