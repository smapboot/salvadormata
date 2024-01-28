import "./timelineHookStyles.css"
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
} from "@coreui/react";
import {useModal} from "../modalCustomHook/useModal";
import {Items, LabelsHistoria} from "../../bundles/curriculum/locales";
import {useLocale} from "../useLocale";

export const useTimeline = () => {
  const {idioma} = useLocale()
  const labels = LabelsHistoria[idioma]
  const items = Items[idioma]

  // Definim les dades d'un ítem de la cronologia per carregar en el Modal
  const {setModalData, setModalVisible, getModalInfo} = useModal()

  const parseItemToDataModal = (item) => {
    return {
      header: <><b>{labels.empresa}:</b> {item?.empresa}</>,
      body: <>
        <p>
          <b>{labels.periode}:</b> {labels.inici} {item?.inici} {labels.fins} {item?.final}
        </p>
        <p>
          <b>{labels.posicio}:</b> <br />
          {item?.posicio}
        </p>
        <p>
          <b>{labels.resum}:</b><br />
          <div dangerouslySetInnerHTML={{ __html: item?.resum }}/>
        </p>
        <p>
          <b>{labels.treballs}:</b>
          <br />
          <ul>
            {item?.treballs?.map((treball, i) => {
              return (
                <li key={i}>
                  {treball}
                </li>
              )
            })}
          </ul>
        </p>
      </>,
      footer: <><b>{labels.motiu_fi}:</b> <br />
        <i>{item?.motiu_fi}</i></>
    }
  }

  const timelineComponent = (
    items && items.length > 0 &&
      <>
        <div className={"SmapTimeline"}>
          <span className={"SmapTitle"}>{labels.cronologia}</span>
          <ul className={"LineVertical"}>
            {
              items.map((item, i) => {
                return (
                  <li key={i} className={"point"}>
                    <CCard className={"card " + ( i % 2 === 0 ? "cardLeft" : "cardRight") }>
                      <CCardHeader>
                        <b>{labels.empresa}:</b> <i>{item.empresa}</i>
                      </CCardHeader>
                      <CCardBody>
                        <p>
                          <b>{labels.posicio}:</b><br />
                          {item.posicio}
                        </p>
                        <p>
                          <b>{labels.skills}:</b><br />
                          {
                            item.skills.map((skill, j) => {
                              return (
                                <span key={j}>
                              <CBadge color={"info"} shape="rounded-pill">
                                {skill}
                              </CBadge>&nbsp;&nbsp;
                            </span>
                              )
                            })
                          }
                        </p>
                      </CCardBody>
                      <CCardFooter>
                        <CBadge color={"success"} className={"icone_boto"} onClick={() => {
                          setModalData(parseItemToDataModal(item));
                          setModalVisible(true)
                        }}>
                          + info
                        </CBadge>
                      </CCardFooter>
                    </CCard>
                    <div className={"year " + ( i % 2 === 0 ? "cardRight" : "cardLeft") }>
                      <b><i>{labels.des_de} {item.inici} {labels.fins} {item.final}</i></b>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {getModalInfo}
      </>
  )
  return {
    timelineComponent,
  };
};
