import React, {useState} from 'react'
import './curriculum.css'
import {LabelsHistoria} from "./locales";
import {CCol, CNav, CNavItem, CNavLink, CRow, CTabContent, CTabPane} from "@coreui/react";
import {useLocale} from "../../hooks/useLocale";
import * as store from "../../stores/offline/browser/SmapStorage";
import _ from "lodash";

const AboutMe = React.lazy(() => import("./fragments/AboutMe"))
const Formacions = React.lazy(() => import("./fragments/Formacions"))
const ProfessionalCareer = React.lazy(() => import("./fragments/ProfessionalCareer"))
const Contact = React.lazy(() => import("./fragments/Contact"))


const Curriculum = () => {
  // Custom hooks
  const {idioma} = useLocale()
  const labels = LabelsHistoria[idioma]

  const [activeKey, setActiveKey] = useState(() => {
    let currentTab = store.getStorage('currentTab')
    if ( _.isEmpty(currentTab) ) {
      store.saveStorage('currentTab', '1')
      return '1'
    }
    return currentTab
  })

  return (
    <>
      <CRow className={"mt_30 mb_30"}>
        <CCol>
          <CNav variant="tabs" role="tablist" className={"curriculumNav"}>
            <CNavItem role={"presentation"} className={"curriculumNavItem"}>
              <CNavLink
                className={"curriculumNavLink"}
                active={activeKey === '1'}
                component="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected={activeKey === '1'}
                onClick={() => {
                  store.saveStorage('currentTab', '1')
                  setActiveKey('1')
                }}
              >
                {labels.about}
              </CNavLink>
            </CNavItem>
            <CNavItem role={"presentation"} className={"curriculumNavItem"}>
              <CNavLink
                className={"curriculumNavLink"}
                active={activeKey === '2'}
                component="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected={activeKey === '2'}
                onClick={() => {
                  store.saveStorage('currentTab', '2')
                  setActiveKey('2')
                }}
              >
                {labels.formacio}
              </CNavLink>
            </CNavItem>
            <CNavItem role={"presentation"} className={"curriculumNavItem"}>
              <CNavLink
                className={"curriculumNavLink"}
                active={activeKey === '4'}
                component="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected={activeKey === '4'}
                onClick={() => {
                  store.saveStorage('currentTab', '4')
                  setActiveKey('4')
                }}
              >
                {labels.cronologia}
              </CNavLink>
            </CNavItem>
            <CNavItem role={"presentation"} className={"curriculumNavItem"}>
              <CNavLink
                className={"curriculumNavLink"}
                active={activeKey === '5'}
                component="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected={activeKey === '5'}
                onClick={() => {
                  store.saveStorage('currentTab', '5')
                  setActiveKey('5')
                }}
              >
                {labels.contact}
              </CNavLink>
            </CNavItem>
          </CNav>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === '1'}>
              <AboutMe />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === '2'}>
              <Formacions />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === '4'}>
              <ProfessionalCareer />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === '5'}>
              <Contact />
            </CTabPane>
          </CTabContent>
        </CCol>
      </CRow>
    </>
  )
}

export default Curriculum
