import React from 'react'
import {useLocale} from "../../../hooks/useLocale";
import {LabelsHistoria} from "../locales";

const Formacions = () => {
  const {idioma} = useLocale()
  const labels = LabelsHistoria[idioma]

  return (
    <>
      <div>
        <span className={"SmapTitle"}>{labels.reglats}</span>
        <ul>
          <li>{labels.informatica}</li>
        </ul>
      </div>
      <div>
        <span className={"SmapTitle"}>{labels.no_reglats}</span>
        <ul>
          <li>{labels.curs1}</li>
          <li>{labels.curs2}</li>
          <li>{labels.curs3}</li>
        </ul>
      </div>
      <div>
        <span className={"SmapTitle"}>{labels.idiomes}</span>
        <ul>
          <li>{labels.cat}</li>
          <li>{labels.cas}</li>
          <li>{labels.eng}</li>
        </ul>
      </div>
    </>
  )
}

export default Formacions
