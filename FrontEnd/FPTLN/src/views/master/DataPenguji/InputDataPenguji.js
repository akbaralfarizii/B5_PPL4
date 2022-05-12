import React from "react";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import '../style.css';
import { useNavigate } from "react-router-dom";

function InputDataPenguji () {
    let navigate = useNavigate();
    return(
        <div className='container'>
            <div className="body">
                <div>
                    <button className='btn' onClick={() => {navigate ('/master/datapenguji')}} ><BsIcons.BsFillPersonFill className='Icon-btn'/> KEMBALI</button>
                </div>
                <div className="containerform">
                    <div className="textPath">
                        <AiIcons.AiOutlineForm className='icon-btn' /> <b>Tambah / Update Data Penguji</b>
                    </div> 
                    <div className="textPath">
                       <b>Input Data Penguji</b> 
                    </div>
                    <div className="nipform">
                        <form>
                            <label >
                                <b>NIP</b><input type="text" name="NIP" className="label"/>
                            </label>
                        </form>
                    </div>
                        <div className="button">
                            <input type="submit" value="CEK" className="SubmitButton"/>
                            <input type="submit" value="MANUAL" className="SubmitButton"/>
                            <input type="submit" value="BATAL" />
                        </div>
                </div>
            </div>
        </div>

    )
}
export default InputDataPenguji;