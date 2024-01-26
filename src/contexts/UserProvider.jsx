import React, {createContext, useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {ConstantsHelper} from "../helpers/ConstantsHelper"
import * as store from "../stores/offline/browser/SmapStorage"
import * as OAuth from "../stores/cloud/firebaseDB/OAuth"
import * as db from "../stores/cloud/firebaseDB/CrudModel"
import * as utils from "../helpers/Utils"
import _ from "lodash"
import DevHelper from "../helpers/DevHelper";

export const UserContext = createContext()

const defaultUserData = {
  accessToken: null,
  refreshToken: null,
  expiration: null,
  name: null,
  id: null,
  user_id: null,
  email: null,
  avatar: null,
  isAuthenticated: false,
  error: {
    status: null,
    code: null,
    headers: null,
    data: null,
    message: null
  }
}

const UserProvider = (props) => {
  const {children} = props
  const [User, setUser] = useState(() => {
    return store.getStorage(ConstantsHelper.KEYS_STORAGE.USER) || defaultUserData
  })
  const navigate = useNavigate()

  // Controlem els canvis sobre l'estat de l'autenticació de l'usuari
  useEffect(() => {
    if ( OAuth.existsAuth() ) {
      const _getUserDataFromStorage = () => {
        let user
        let data = store.getStorage(ConstantsHelper.KEYS_STORAGE.USER)
        if (!_.isEmpty(data)) {
          user = data
        } else {
          navigate("/user/login")
        }
        return user
      }

      let user = _getUserDataFromStorage()
      user = user || {isAuthenticated: false}
      // utils.developmentLog("UserProvider > useEffect _getUserDataFromStorage > user", user)
      setUser((previousUserData) => {
        return {
          ...previousUserData,
          ...user
        }
      })
    }
  }, [User.isAuthenticated])

  // Mirem d'iniciar sessió d'un usuari registrat amb mètode mail/password
  const initSession = async (email, password) => {
    try {
      const res = await OAuth.Login(email, password)
      // DevelopmentLog(ConstantsHelper.PROVIDERS.USER + " > signIn called!", res)
      if (!_.isEmpty(res)) {
        await setterUser(res)
      }
    } catch (error) {
      utils.developmentLog(ConstantsHelper.PROVIDERS.USER + " > signIn with email + password failure!", error)
    }
  }

  // Mirem d'iniciar sessió d'un usuari registrat mitjançant el proveïdor de GMail
  const accessGmail = async () => {
    // utils.developmentLog(ConstantsHelper.PROVIDERS.USER + " > accessGmail")
    try {
      const res = await OAuth.AuthGmail()
      if (!utils.isEmpty(res.uid)) {
        await setterUser(res)
      }
    } catch (error) {
      utils.developmentLog(ConstantsHelper.PROVIDERS.USER + " > signInWithGmail failure!", error)
    }
  }

  // A partir de l'usuari autenticat, definim l'entitat d'aquest pel context de l'aplicació
  const setterUser = async (res) => {
    // Obtenim els settings de l'usuari
    const settings = await db.getUserSettings(res.uid)
    const user = {
      accessToken: res.stsTokenManager.accessToken,
      refreshToken: res.stsTokenManager.refreshToken,
      expiration: res.stsTokenManager.expirationTime,
      name: res.displayName,
      id: res.uid,
      user_id: res.uid,
      email: res.email,
      avatar: res.photoURL,
      isAuthenticated: true,
      settings: settings || {}
    }
    setUser(user)
    store.saveStorage(ConstantsHelper.KEYS_STORAGE.USER, user)
    navigate("/")
  }

  const endSession = async () => {
    // Tanquem sessió al servidor
    await OAuth.Logout()
      .then((xhr) => {
        utils.developmentLog(ConstantsHelper.PROVIDERS.USER + " > closeSession > Hem finalitzat la sessió de l'usuari correctament al servidor:", xhr)
        store.resetStorage()
        setUser(defaultUserData)
        navigate('/user/login')
      })
      .catch((error) => {
        throw new Error(ConstantsHelper.PROVIDERS.USER + " > closeSession > No hem pogut tancar la sessió al servidor en fer logout, error: " + error.toString())
      })
  }

  const itemsUserNav = () => {
    return []
  }

  const UserAPI = {
    User, initSession, accessGmail, endSession, itemsUserNav,
  };

  return <UserContext.Provider value={UserAPI} children={children}/>
}

export default UserProvider