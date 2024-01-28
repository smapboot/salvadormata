import React, {createContext, useState} from "react"
import * as store from "../../stores/offline/browser/SmapStorage";
import _ from "lodash";
import "./localeProviderStyles.css"
import Catala from "../../assets/images/catala.png";
import Castella from "../../assets/images/castella.png";

export const LocaleContext = createContext()

const LocaleProvider = (props) => {
  const {children} = props
  const [idioma, setIdioma] = useState(() => {
    let currentLanguage = store.getStorage('language')
    if ( _.isEmpty(currentLanguage) ) {
      store.saveStorage('language', 'ca')
      return 'ca'
    }
    return currentLanguage
  })

  const labels = {
    cat: "Català",
    cas: "Castellano"
  }

  const toggleIdioma = (target) => {
    store.saveStorage('language', target)
    setIdioma(target)
  }

  const switcherLanguage = (
    <div className={"smapSwitcher"}>
      <div className={"labelIdioma float-start mr_5"}>
        <span className={idioma === "ca" ? "actiu" : ""}>
          {labels.cat}
        </span>
      </div>
      <div className={"smapSwitch"}>
        <div className={"smapSwitchFlag float-start"}>
          <img
            onClick={() => toggleIdioma('ca')}
            className={idioma === "ca" ? "actiu" : ""}
            alt={labels.cat}
            src={Catala}
          />
        </div>
        <div className={"smapSwitchFlag float-end"}>
          <img
            onClick={() => toggleIdioma('es')}
            className={idioma === "es" ? "actiu" : ""}
            alt={labels.cas}
            src={Castella}
          />
        </div>
      </div>
      <div className={"labelIdioma float-end ml_5"}>
        <span className={idioma === "es" ? "actiu" : ""}>
          {labels.cas}
        </span>
      </div>
    </div>
  )

  const LocaleAPI = {
    idioma,
    switcherLanguage,
  };

  return <LocaleContext.Provider value={LocaleAPI} children={children}/>
}

export default LocaleProvider
