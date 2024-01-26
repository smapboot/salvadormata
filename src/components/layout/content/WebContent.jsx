import React, { useEffect } from "react";
import "./WebContent.css"
import DevHelper from "../../../helpers/DevHelper";
import { CCol, CContainer, CRow } from "@coreui/react";
import Sidebar from "../sidebar/Sidebar";

const WebContent = (props) => {
  // Props
  const {columns, singlePage, element, content_sidebar_left, content_sidebar_right} = props;

  useEffect(() => {
    DevHelper.console("WebContent > useEffect initialize props", props)
  }, [])

  const renderLayout = () => {
    if ( columns ) {
      if ( columns === 2 ) {
        return (
          <div className={"mainTwoColumns"}>
            <CRow>
              <CCol className={"col-2"}>
                <Sidebar orientation={"left"} content={content_sidebar_left} />
              </CCol>
              <CCol className={"col-10"}>
                {element}
              </CCol>
            </CRow>
          </div>
        )
      } else if ( columns === 3 ) {
        return (
          <div className={"mainThreeColumns"}>
            <CRow>
              <CCol className={"col-2"}>
                <Sidebar orientation={"left"} content={content_sidebar_left} />
              </CCol>
              <CCol className={"col-8"}>
                {element}
              </CCol>
              <CCol className={"col-2"}>
                <Sidebar orientation={"right"} content={content_sidebar_right} />
              </CCol>
            </CRow>
          </div>
        )
      }
    }
    // Single view
    else if ( singlePage === true ) {
      return (
        <CContainer className={"mainSinglePage"}>
          <CRow>
            <CCol className={"col-12"}>
              {element}
            </CCol>
          </CRow>
        </CContainer>
      )
    }
    return (
      <div className={"mainFullPage"}>
        {element}
      </div>
    )
  }

  return (
    <div className={"smapFlexContent"}>
      {renderLayout()}
    </div>
  )
}

export default WebContent

WebContent.getDefaultProps = {
  singlePage: false
}