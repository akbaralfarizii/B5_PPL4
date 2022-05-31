import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilUser, cilUserPlus
} from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import * as api from './api'

const AdministrasiUsers = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.AdminUser();
      const arr = result.data.data;
      setTodos(arr);
    };
    fetchData();
  }, []);

  let edit = useNavigate()
  return (
    <>
      <CButton className='text-white btn btn-md btn-info mb-2' onClick={() => {edit('/administrasiusers/tambahUser')}}>
        <CIcon icon={cilUserPlus} size="lg"></CIcon>
        Tambah User
      </CButton>
      <CCard>
        <CCardHeader className='bg-dark text-white'>
          <CIcon icon={cilUser} size="lg"></CIcon>
          <strong> Administrasi User</strong>
        </CCardHeader>
        <CCardBody>
          <CTable striped bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col"><center><b>No</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Edit Hak Akses</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>NIP</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Nama</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Password</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Akses</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Administrasi Users</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Master</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Daftar FP</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Nilai FP</b></center></CTableHeaderCell>
                <CTableHeaderCell scope="col"><center><b>Report</b></center></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody align="center">
              {todos.map((todo, index) => (  
                  <CTableRow>
                    <CTableDataCell>{index+1}</CTableDataCell>
                    <CTableDataCell>
                      <CButton className='text-white btn btn-md btn-info' onClick={() => {edit('/administrasiusers/editAkses')}}>Edit akses</CButton>
                    </CTableDataCell>
                    <CTableDataCell>{todo.attributes.NIP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Nama}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Password}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Akses}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.AdministrasiUsers}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Master}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.DaftarFP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.NilaiFP}</CTableDataCell>
                    <CTableDataCell>{todo.attributes.Report}</CTableDataCell>
                  </CTableRow>
              ))}

            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AdministrasiUsers
