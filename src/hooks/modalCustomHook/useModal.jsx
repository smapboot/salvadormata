import {useState} from "react"
import {
  CButton,
  CCard,
  CCardBody, CCardFooter, CCardHeader,
  CCardText,
  CCardTitle,
  CModal,
  CModalBody, CModalFooter, CModalHeader,
} from "@coreui/react";
import {useLocale} from "../useLocale";
import {LabelsHistoria} from "../../bundles/curriculum/locales";

export const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const {idioma} = useLocale()
  const labels = LabelsHistoria[idioma]

  const getModalForError = (
    <>
      <CModal
        className={"text-danger"}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        size={"xl"}
      >
        <CModalHeader>
          {modalData.header}
        </CModalHeader>
        <CModalBody>
          <div dangerouslySetInnerHTML={{__html: modalData.body}}/>
        </CModalBody>
        <CModalFooter>
          {modalData.footer}
          <CButton color={"info"} className={"bg-smap-white"} onClick={() => setModalVisible(false)}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )

  const getModalInfo = (
    <>
      <CModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        size={"xl"}
      >
        <CModalBody>
          <CCard>
            <CCardHeader className={"topCard"}>
              <CCardTitle>
                {modalData.header}
              </CCardTitle>
            </CCardHeader>
            <CCardBody>
              <CCardText>
                {modalData.body}
              </CCardText>
            </CCardBody>
            <CCardFooter>
              {modalData.footer}
            </CCardFooter>
          </CCard>
        </CModalBody>
        <CModalFooter>
          <CButton color={"info"} className={"bg-smap-white"} onClick={() => setModalVisible(false)}>
            {labels.entesos}
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )

  return {
    setModalVisible,
    setModalData,
    getModalForError,
    getModalInfo,
  };
};
