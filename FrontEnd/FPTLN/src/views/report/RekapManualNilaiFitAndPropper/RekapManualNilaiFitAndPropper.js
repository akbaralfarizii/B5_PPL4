import { cilSpreadsheet, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardHeader, CTable, CTableHeaderCell } from '@coreui/react'
import React from 'react'

const RekapManualNilaiFitAndPropper = () => {
  return (
    <>
      <CButton className='btn btn-md btn-secondary text-white'>
        <CIcon icon={cilUser}></CIcon>
        <strong>Kembali</strong>
      </CButton>
      <CCard className='mt-2'>
        <CCardHeader className='bg-dark text-white'>
          <CIcon icon={cilSpreadsheet}></CIcon>
          <strong> Report Manual Penilaian Peserta Fit Propper</strong>
        </CCardHeader>
        <CTable className='table-border'>
          <CTableHeaderCell >
            sdasdsa
          </CTableHeaderCell>
          <CTableHeaderCell>
            sdasdsa
          </CTableHeaderCell>
          <CTableHeaderCell>
            sdasdsa
          </CTableHeaderCell>
          <CTableHeaderCell>
            sdasdsa
          </CTableHeaderCell>
        </CTable>
      </CCard>
    </>
  )
}

export default RekapManualNilaiFitAndPropper
