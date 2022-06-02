import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilTrash, cilUserFollow } from '@coreui/icons'
import * as api from '../api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DataPeserta () {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.Peserta();
      const arr = result.data.data;
      setTodos(arr);
    };
    fetchData();
  }, []);

  const hapus = (id) => {
    var yakin = confirm("Anda Yakin untuk Menghapus Peserta ?");
    if (yakin) {
      fetch("http://192.168.100.3:1337/api/pesertas/" + id, {
        method: "DELETE",
      }).then(() => {
        console.log('todo deleted.')
        window.location.reload();
      });
    } else {
      window.location.reload();
    }
  };

  let navigate = useNavigate();

  return (
    <>
      <CButton className='btn btn-sm btn-info text-white mb-2' onClick={() => {navigate('/master/datapeserta/inputdatapeserta')}}>
        <CIcon icon={cilUserFollow} className="me-1"/>
        <strong>Tambah Data Peserta</strong> 
      </CButton>
      <CRow>
        <CCol md={12}>
          <CCard className="mb-4">
            <CCardHeader className='bg-dark text-white'>
              <CIcon icon={cilPeople} size="lg" className="me-1" />
              <strong> Data Peserta</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover bordered>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col"><center><b>No</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope="col"><center><b>Jabatan</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope="col"><center><b>Grade</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope="col"><center><b>Jenjang</b></center></CTableHeaderCell>
                    <CTableHeaderCell scope="col"><center><b>Edit</b></center></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                {todos.map((todo, index) => (  
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell><center>{index+1}</center></CTableDataCell>
                      <CTableDataCell>{todo.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.pegawai.data.attributes.NIP}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</CTableDataCell>
                      <CTableDataCell>{todo.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</CTableDataCell>
                      <CTableDataCell>
                        <center>
                          <CButton className="btn btn-sm btn-danger text-white" onClick={(e)=>hapus(todo.id)}>
                            <CIcon icon={cilTrash} className="me-1"/>Hapus
                          </CButton>
                        </center>
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                ))}
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
        
  );
}

export default DataPeserta;
