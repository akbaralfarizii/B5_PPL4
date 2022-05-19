import React from "react";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import '../style.css';
import { useNavigate } from "react-router-dom";
import * as api from '../api';
import { useEffect, useState } from 'react';
import axios from "axios";
import { CButton, CCard, CCardBody, CCardHeader, CFormInput, CFormLabel, CInputGroup } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilUserPlus} from '@coreui/icons'

function InputDataPenguji () {
    let navigate = useNavigate();
    return(
        <>
        <CButton className='bg-info text-white' onClick={() => {navigate ('/master/datapenguji')}}>Kembali</CButton>
            <CCard>
                <CCardHeader className="bg-dark text-white">
                    <CIcon icon={cilUserPlus}/>
                    <strong>Tambah / Update Data Penguji</strong>
                </CCardHeader>
                <CCardBody>
                    <h4>Input Data Penguji</h4><hr></hr>
                    <CInputGroup className="mt-5">
                        <CFormLabel className="col-sm-1 col-form-label"><h5><b>NIP</b></h5></CFormLabel>
                        <div className="col-sm-6">
                            <CFormInput type="input" id="NIP" placeholder="Masukkan NIP"></CFormInput>
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
                            <CFormInput className="bg-info text-white" type="submit" id="NIP" value="BATAL"></CFormInput>
                        </div>
                    </CInputGroup>

                </CCardBody>
            </CCard>
        </>

    )
}
export default InputDataPenguji;