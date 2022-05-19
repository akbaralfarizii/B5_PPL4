import React from "react";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import '../style.css';
import * as api from '../api';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

const InputDataPeserta  = () => {
    let navigate = useNavigate ()
    // state = {
    //     put : [],
    //     formNIP : {
    //         NIP : ''
    //     }
    // }
    const handleFormChange = (event) => {
        console.log(event.target.value)
        let NIP = event.target.value
        this.setState({
            formNIP: NIP
        }, () => {
            console.log('value obj formNIP : ', this.state.formNIP)
        })
    }
    return(
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Tambah Peserta</strong>
              </CCardHeader>
              <CCardBody>
                  <CForm onSubmit={this.postData}>
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        NIP
                      </CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="number" id="inputEmail3" name='NIP' placeholder='Masukkan NIP' onChange={this.handleFormChange} />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                        Nama
                      </CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="password" id="inputPassword3" placeholder='Nama Pegawai Akan Muncul Disini' disabled />
                      </CCol>
                    </CRow>
                    <CButton type="submit" style={{width:'100%'}}>Submit</CButton>
                  </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )
  }
    )
}
export default InputDataPeserta;