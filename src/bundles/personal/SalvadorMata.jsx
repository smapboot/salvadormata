import React from 'react'
import {CCol, CRow} from "@coreui/react";
import Me from "../../assets/images/me.jpg"
import {useLocale} from "../../hooks/useLocale";

const SalvadorMata = () => {
  // Custom hooks
  const {idioma, switcherLanguage} = useLocale()
  return (
    <>
      <CRow className={"mt_5"}>
        <CCol className={"col-1"}>
          <img className={"avatar"} alt={"Salvador Mata Garcia"} src={Me} />
        </CCol>
        <CCol className={"col-8"}>
          <div className={"titular"}>
            Salvador Mata Garcia<br />
            Analista programador Sènior - Full Stack Developer
          </div>
        </CCol>
        <CCol className={"col-3"}>
          {switcherLanguage}
        </CCol>
      </CRow>
      <CRow className={"ml_30"}>
        <CCol>
          <b>Made in Barcelona at 1971</b><br />
          {
            idioma && idioma === "ca"
              ?
              <>
                 Actualment, residint a Sant Vicenç dels Horts, a la província de Barcelona
              </>
              :
              <>
                Actualmente, residiendo en Sant Vicenç dels Horts, en la província de Barcelona
              </>
          }
        </CCol>
      </CRow>
    </>
  )
}

export default SalvadorMata
