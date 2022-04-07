import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import './style.css';

const PendaftaranFitAndPropper = () => {
  return (
    <div className='container'>
        <div className='locationBar'>
            <p className='text'>Dashboard / <b> Pendaftaran </b>/ Updating Peserta Fit Proper</p>
        </div>
        <div className="body">
            <div>
                <button className='btn' ><BsIcons.BsFillPersonFill className='Icon-btn'/> KEMBALI</button>
            </div>
            <div className="containerform">
                <div className="textPath">
                    <AiIcons.AiOutlineForm className='icon-btn' /> <b>Pendaftaran / Updating Pendaftaran Peserta Fit Proper</b>
                </div> 
                <div className="textPath">
                    <b>Input / Updating Pendaftaran Peserta Fit Proper</b> 
                </div>
                <div className="nipform">
                    <form>
                        <table>
                            <tr>
                                <td><label >NIP</label></td>
                                <td><input type="text" name='NIP' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Nama</label></td>
                                <td><input type="text" name='Nama' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Jabatan</label></td>
                                <td><input type="text" name='Jabatan' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Grade</label></td>
                                <td><input type="text" name='Grade' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Date</label></td>
                                <td><input type="date" name='Date' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Proyeksi</label></td>
                                <td><input type="text" name='Proyeksi' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Jenjang Jabatan</label></td>
                                <td><input type="text" name='JenjangJabatan' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Jenis Fit & Prope</label></td>
                                <td><input type="text" name='FitProper' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Pilih Urjab</label></td>
                                <td><input type="text" name='Urjab' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Upload PPT *.ppt/.pptx</label></td>
                                <td><input type="file" name='UploadPPT' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Upload CV *.doc/docx</label></td>
                                <td><input type="file" name='UploadCV' className='label'/></td>
                            </tr>
                            <tr>
                                <td><label>Penguji</label></td>
                                <td><input type="text" name='Penguji' className='label'/></td>
                            </tr>
                        </table>
                    </form>
                    <div className="Submit">
                        <input type="submit" value="Simpan" className="SubmitButton"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PendaftaranFitAndPropper;