import React from "react";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import './style.css';

function InputDataPeserta () {
    return(
        <div className='container'>
            <div className='locationBar'>
                <p className='text'>Dashboard / <b> Tambah/Update Data Peserta</b></p>
            </div>
            <div className="body">
                <div>
                    <button className='btn' ><BsIcons.BsFillPersonFill className='Icon-btn'/> KEMBALI</button>
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
                                <b>NIP</b><input type="text" name="NIP" className="label"/>
                            </label>
                        </form>
                        <div className="Submit">
                            <input type="submit" value="CEK" className="SubmitButton"/>
                            <input type="submit" value="MANUAL" className="SubmitButton"/>
                            <input type="submit" value="BATAL" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default InputDataPeserta;