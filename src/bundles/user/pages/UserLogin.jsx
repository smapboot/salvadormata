import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import {cibGmail, cilLockLocked, cilUser} from '@coreui/icons'
import {useUser} from "../../../hooks/useUser";
import "../../../styles"

const UserLogin = () => {
  const {initSession, accessGmail} = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    const signIn = initSession(email.value, password.value);
  }

  const handleGmail = async () => {
    const signIn = await accessGmail();
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Inici de sessió</h1>
                    <p className="text-medium-emphasis">Accedeix al teu compte</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser}/>
                      </CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="username" name="email"/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked}/>
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CButton type="submit" color="primary" className={"mb_4 w_full"}>
                        Identifica't
                      </CButton>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <div onClick={handleGmail} className={"btn btn-info w_full"}>
                        <CIcon className={"text-danger"} icon={cibGmail}
                               title={"Identifica't amb el teu correu de Gmail"}/> Accedeix amb GMAIL
                      </div>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12} className="text-right">
                        <CButton color="maroon" className="px-0">
                          Has oblidat la clau de pas?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default UserLogin;
