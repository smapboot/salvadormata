import React, {useState} from 'react'
import {LabelsHistoria} from "../locales";
import {useLocale} from "../../../hooks/useLocale";
import {CAlert, CButton, CCol, CFormInput, CFormTextarea, CInputGroup, CInputGroupText, CRow} from "@coreui/react";
import * as _ from "lodash";
import * as store from "../../../stores/offline/browser/SmapStorage";
import {useModal} from "../../../hooks/modalCustomHook/useModal";
import * as crud from "../../../stores/cloud/firebaseDB/CrudModel"

const Contact = () => {
  const {idioma} = useLocale()
  const labels = LabelsHistoria[idioma]
  const {setModalData, setModalVisible, getModalForError} = useModal()

  const [alertSuccessVisible, setAlertSucessVisibility] = useState(false)
  const [alertErrorVisible, setAlertErrorVisibility] = useState(false)
  const [alertMessage, setAlertMessage] = useState(<></>)

  const locales = {
    ca: {
      enviar: 'Enviar el formulari',
    },
    es: {
      enviar: 'Enviar el formulario',
    },
  }

  const formDefault = [
    {
      key: 'empresa',
      type: 'f',
      label: {
        ca: "Nom de l'empresa",
        es: "Nombre de la empresa",
      },
      assert: {
        ca: "El nom de l'empresa, és requerit",
        es: "El nombre de la empresa, es requerido",
      },
      value: '',
    },
    {
      key: 'sector',
      type: 'f',
      label: {
        ca: "Sector de l'empresa",
        es: "Sector de la empresa"
      },
      assert: {
        ca: "El sector de l'empresa, és requerit",
        es: "El sector de la empresa, es requerido",
      },
      value: '',
    },
    {
      key: 'web',
      type: "f",
      label: {
        ca: "Lloc web de l'empresa",
        es: "Sitio web de la empresa",
      },
      assert: {
        ca: "El lloc web de l'empresa, és requerit",
        es: "El sitio web de la empresa, es requerido",
      },
      value: '',
    },
    {
      key: 'posicio',
      type: 'f',
      label: {
        ca: "Posició ofertada",
        es: "Posición ofertada",
      },
      assert: {
        ca: "La posició ofertada, és requerida",
        es: "La posición ofertada, es requerida",
      },
      value: '',
    },
    {
      key: 'rang',
      type: 'f',
      label: {
        ca: "Rang salarial",
        es: "Rango salarial",
      },
      assert: {
        ca: "El rang salarial, és requerit",
        es: "El rango salarial, es requerido",
      },
      value: '',
    },
    {
      key: 'tecnos',
      type: 't',
      label: {
        ca: "Tecnologies a usar",
        es: "Tecnologías a usar",
      },
      assert: {
        ca: "Les tecnologies a usar, són requerides",
        es: "Las tecnologías a usar, son requeridas",
      },
      value: '',
    },
    {
      key: 'requirements',
      type: 't',
      label: {
        ca: "Requeriments",
        es: "Requisitos",
      },
      assert: {
        ca: "Els requeriments, són requerits",
        es: "Los requisitos, son requeridos",
      },
      value: '',
    },
  ]

  const [form, setForm] = useState(() => {
    let formStore = store.getStorage('form')
    if ( _.isEmpty(formStore) ) {
      store.saveStorage('form', formDefault)
      return formDefault
    }
    return formStore
  })

  const handlerFieldForm = (e) => {
    let newForm = [...form]
    let index = _.findIndex(newForm, {key: e.target.name});
    newForm[index].value = e.target.value
    setForm(newForm)
    store.saveStorage('form', newForm)
  }

  const validarForm = () => {
    let error = false;
    let falta = [];
    _.forEach(form, function (camp){
      if ( _.isEmpty(camp.value) ) {
        error = true;
        falta.push(camp.assert[idioma]);
      }
    })
    if ( error ) {
      const data = {
        header: ( idioma === 'ca' )
          ? "Hi ha errors al formulari"
          : "Hay errores en el formulario",
        body: falta.map(log => {
          return log + '<br />'
        }),
        footer: ( idioma === 'ca' )
          ? "Si us plau, revisa els camps i, torna-ho a provar altre cop"
          : "Por favor, revisa los campos y vuelve a probar de nuevo",
      }
      setModalData(data)
      setModalVisible(true)
    } else {
      enviarProposta().then(res => {
        setAlertMessage(<div dangerouslySetInnerHTML={{__html: res.msg}}/>)
        if ( res.status === 200 ) {
          setAlertSucessVisibility(true)
          setTimeout(() => {
            setAlertSucessVisibility(false)
          }, 5000)
        } else {
          setAlertErrorVisibility(true)
          setTimeout(() => {
            setAlertErrorVisibility(false)
          }, 5000)
        }
      })
    }
  }

  const enviarProposta = async () => {
    let msg;
    const response = await crud.createNewItem("ofertes", form)
    if ( response.status === 200 ) {
      msg = ( idioma === 'ca' )
        ? "La teva proposta s'ha enregistrat correctament. " +
          "<br />Gràcies per posar-te en contacte amb mí. " +
          "<br />Et respondre el més aviat possible."
        : "Tu propuesta se ha registrado correctamente. " +
          "<br />Gracies por ponerte en contacto conmigo. " +
          "<br />Te responderé lo más pronto possible."
    } else {
      msg = ( idioma === 'ca' )
        ? "Vaja, alguna cosa no ha anat del tot bé. " +
          "<br />Ja saps com funcionen aquestes coses d'Internet. " +
          "<br />Prova-ho altre cop passats uns minuts i disculpa les molèsties."
        : "Vaya, alguna cosa no ha salido del todo bien. " +
          "<br />Ya sabes como funcionan estas cosas de Internet. " +
          "<br />Prueba otra vez pasados unos minutos y disculpa las molestias."
    }
    return {status: response.status, msg}
  }

  return (
    <>
      {getModalForError}
      <span className={"SmapTitle"}>{labels.contact}</span>
      <CRow>
        <CCol>
          <p>
            {
              idioma && idioma === "ca"
              ?
                <>
                  Des d'aquest formulari se'm poden fer arribar candidatures que faré bé de considerar amb un interès real,
                  sempre que aquestes s'adeqüin realment al meu perfil professional (abstenir-se ofertes de teleoperador i similars)
                  <br />
                  <span className={"text-danger"}>
                    <b>Nota:</b> Tots els camps són requerits
                  </span>
                </>
              :
                <>
                  Desde este formulario se me pueden hacer llegar candidaturas que haré bien de considerar con interés real,
                  siempre que estas se adecuen realmente a mi perfil profesional (abstenerse ofertas de teleoperador y similar)
                  <br />
                  <span className={"text-danger"}>
                    <b>Nota:</b> Todos los campos son requeridos
                  </span>
                </>
            }
          </p>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CAlert color={"success"} visible={alertSuccessVisible}>{alertMessage}</CAlert>
          <CAlert color={"danger"} visible={alertErrorVisible}>{alertMessage}</CAlert>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          {
            form.map((field, i) => {
              return (
                <CInputGroup size="sm" className="mb-3" key={i}>
                  <CInputGroupText className={"smapFieldLabel bg-smap-white"}>
                    {field.label[idioma]}
                  </CInputGroupText>
                  {
                    field.type === 'f'
                      ?
                      <>
                        <CFormInput name={field.key} onChange={handlerFieldForm} value={form[i].value} />
                      </>
                      :
                      <>
                        <CFormTextarea name={field.key} onChange={handlerFieldForm} className={"smapTextarea"} value={form[i].value} />
                      </>
                  }
                </CInputGroup>
              )
            })
          }
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CButton color={"info"} className={"bg-smap-white float-end"} onClick={validarForm}>
            {locales[idioma].enviar}
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default Contact
