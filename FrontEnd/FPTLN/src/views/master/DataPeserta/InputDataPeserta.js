import React from "react";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import '../style.css';
import * as api from '../api';
import { useNavigate } from "react-router";
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
        <div className='container'>
            <div className="body">
                <div>
                    <button className='btn' onClick={() => {navigate ('/master/datapeserta')}} ><BsIcons.BsFillPersonFill className='Icon-btn'/> KEMBALI</button>
                </div>
                <div className="containerform">
                    <div className="textPath">
                        <AiIcons.AiOutlineForm className='icon-btn' /> <b>Tambah / Update Data Peserta</b>
                    </div> 
                    <div className="textPath">
                       <b>Input Data Peserta</b> 
                    </div>
                    <div className="nipform">
                        <form>
                            <label >
                                <b>NIP</b><input type="text" name="NIP" className="label " onChange={handleFormChange}/>
                            </label>
                        </form>
                    </div>
                        <div className="button" >
                            <button className='SubmitButton' onClick={(e) => {this.handleDeleteData()}}  >CEK</button>
                            <button className='SubmitButton' onClick={() => {navigate ('/master/data-peserta')}} >MANUAL</button>
                            <button onClick={() => {navigate ('/master/data-peserta')}} >BATAL</button>
                        </div>
                </div>
            </div>
        </div>

    )
}
export default InputDataPeserta;