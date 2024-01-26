import React from 'react'
import "./WebFooter.css"
import {CCol, CContainer, CFooter, CRow} from "@coreui/react";
import CommonHelper from "../../../helpers/CommonHelper";

const WebFooter = () => {
  return (
    <CFooter className={"smapFooter"}>
      <CContainer>
        <CRow lg = { {cols : 4, gutter: 6 } }>
          <CCol>
            <p>&nbsp;</p>
          </CCol>
          <CCol>
            <h6>Enllaços ràpids {CommonHelper.iconTargetBlank()}</h6>
          </CCol>
          <CCol>
            <h6>Wiki</h6>
          </CCol>
          <CCol>
            <p>&nbsp;</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol style={{textAlign: "center"}}>
            <div className={"mt_20 mb_6"}>
              <span className="ms-1">&copy; 2023 smapbcn&trade;</span>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </CFooter>
  )
}

export default WebFooter