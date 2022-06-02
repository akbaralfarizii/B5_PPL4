import React from "react"
import * as api from '../api'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"
import { 
    CButton, 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CFormInput, 
    CFormLabel, 
    CInputGroup, 
    CTable, 
    CTableBody, 
    CTableHead,
    CTableDataCell, 
    CTableRow, 
    CTableHeaderCell 
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
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
        <CButton className='btn btn-sm btn-info text-white mb-2' onClick={() => {navigate ('/master/datapeserta')}}>KEMBALI</CButton>
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
                            <CFormInput className="btn btn-sm btn-info text-white" type="submit" id="NIP" value="CEK"/>
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
                                            <CButton className="btn btn-sm btn-info text-white" onClick={(e)=>submit(todo.id)}>
                                                <CIcon icon={cilPlus} className="me-1"/>Tambahkan
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