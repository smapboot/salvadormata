import {ConstantsHelper} from "./ConstantsHelper";
import * as store from "../stores/offline/browser/SmapStorage";

export const isLinkActive = (href) => {
  let uri = window.location.pathname;
  if ( href === '/' && uri === '/'){
    return true;
  } else {
    if ( href !== '/' ) {
      return ( uri.indexOf(href) !== -1 );
    } else {
      return false
    }
  }
}
export const existsObjectInArray = (key, value, array) => {
  for (let i in array) {
    if (array[i][key] === value) {
      return true
    }
  }
  return false
}
export const inArray = (value, array) => {
  if (getType(array) !== 'Array') {
    return false
  }
  for (const i in array) {
    if (value === array[i]) {
      return true
    }
  }
  return false
}
export const getType = (arg) => {
  let s = typeof arg,
    name
  let getFuncName = function (fn) {
    let name = /\W*function\s+([\w$]+)\s*\(/.exec(fn)
    if (!name) {
      return '(Anonymous)'
    }
    return name[1]
  }
  if (s === 'object') {
    if (arg !== null) {
      if (
        typeof arg.length === 'number' &&
        !arg.propertyIsEnumerable('length') &&
        typeof arg.splice === 'function'
      ) {
        s = 'Array'
      } else if (arg.constructor && getFuncName(arg.constructor)) {
        name = getFuncName(arg.constructor)
        if (name === 'Date') {
          s = 'Date'
        } else if (name === 'RegExp') {
          s = 'regexp'
        } else if (name === 'PHPJS_Resource') {
          s = 'Resource'
        }
      }
    } else {
      s = 'Null'
    }
  } else if (s === 'number') {
    s = isFloat(arg) ? 'Float' : 'Integer'
  }
  return s
}
export const strStr = (str, caracter, side, cut) => {
  let corte = str.indexOf(caracter)
  if (typeof side != 'undefined' || side === true || side === false) {
    let out = side === true ? subString(str, corte) : subString(str, 0, corte)
    if (typeof cut != 'undefined' && cut === true) {
      return subString(out, 1).trim()
    }
    return out.trim()
  }
  return subString(str, 0, corte).trim()
}
export const subString = (str, init, end) => {
  if (typeof str != 'undefined' && typeof init != 'undefined' && isNumeric(init)) {
    if (typeof end == 'undefined') {
      return str.substr(init)
    } else {
      let extractor = false === isPositive(end) ? str.length + end : end
      return str.substr(init, extractor)
    }
  }
  return str
}
export const isNumeric = (arg) => {
  if (getType(arg) === 'Decimal' || getType(arg) === 'Integer') {
    return true
  }
  if (isNaN(parseInt(arg))) {
    return false
  }
  return !isNaN(parseFloat(arg))
}
export const isPositive = (arg) => {
  if (typeof arg != 'undefined' && !isNaN(arg)) {
    return 0 <= arg
  }
  return arg
}
export const isFloat = (num) => {
  return Number(num) === num && num % 1 !== 0
}
export const dateLong = (concatenacio) => {
  let avui = new Date().toLocaleDateString('ca-ca', {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  let hora = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  return avui + ' ' + concatenacio + ' ' + hora
}
export const dateLongFormatted = (date) => {
  let data = date.toLocaleDateString('ca-ca', {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  let hora = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  return data + ' a les ' + hora
}
export const deleteObjectFromArray = (key, value, array) => {
  if (existsObjectInArray(key, value, array)) {
    for (let i in array) {
      if (array[i][key] === value) {
        if (i > -1) {
          array.splice(i, 1)
          return true
        }
      }
    }
  }
  return false
}
export const addingObjectOnArrayIfNotExists = (key, value, objecte, array) => {
  if (!existsObjectInArray(key, value, array) || array.length < 1) {
    return array.push(objecte)
  }
  return false
}
export const updateObjectOfArrayIfExists = (key, value_key, objecte, array) => {
  let objIndex = array.findIndex((obj => obj[key] === value_key));
  if ( ! isEmpty(objIndex)){
    array[objIndex] = objecte;
  }
  return array;
}
export const arrayKey = (value, array) => {
  return array.indexOf(value);
}
export const updateValueInArray = (old_value, new_value, array) => {
  let index = array.indexOf(old_value)
  if ( index > -1 ) {
    array[index] = new_value
  }
  return array
}

export const removeFromArray = (value, array) => {
  let index = array.indexOf(value)
  if (index > -1) {
    array.splice(index, 1)
    return true
  }
  return false
}
export const isEmpty = (src) => {
  return src === '' || src === null || src === 'undefined' || src === undefined
}
export const myClipboard = (string) => {
  navigator.clipboard.writeText(string).then(() => '')
}
export const developmentLog = (label, src, action = 'Debug') => {
  let showConsole = false;
  if (process.env.NODE_ENV === 'development') {
    showConsole = true;
  }
  const user = store.getStorage(ConstantsHelper.KEYS_STORAGE.USER);
  if (!isEmpty(user) && user.user_id === process.env.REACT_APP_ADMIN) {
    showConsole = true;
  }
  if (showConsole) {
    console.log(`[${action}] ${label}`, src);
  }
}
export const isAdmin = () => {
  const user = store.getStorage(ConstantsHelper.KEYS_STORAGE.USER);
  return (!isEmpty(user) && user.user_id === process.env.REACT_APP_ADMIN);
}
export const isArray = (arg) => {
  return getType(arg) === 'Array'
}
export const getUriSegments = () => {
  const url = new URL(window.location.href);
  return url.pathname;
}
export const url2Array = () => {
  let array = window.location.href // Capturem l'URL actual
    .replace(/(^\w+:|^)\/\//, '') // Netegem la part del protocol de l'URL
    .split('/'); // Separem la cadena resultant per les barres
  array.shift();// Només volem a partir del domini

  return array;
}
export const getControllerFromUri = () => {
  return "/"+url2Array()[0];
}
export const getUriAction = () => {
  return "/"+url2Array()[1];
}
export const currentTimestamp = () => {
  return new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
}
export const currentDate = () => {
  return new Date().toLocaleDateString();
}
export const getDateEventCalendar = (date) => {
  return new Date(date).toLocaleDateString('ca-ca', {day: '2-digit', month: '2-digit', year: 'numeric'})
}
export const getDataToString = (date) => {
  return new Date(date).toLocaleDateString('ca-ca', {day: '2-digit', month: '2-digit', year: 'numeric'}) + ' ' + new Date(date).toLocaleTimeString();
}
export const getTimestampToDateString = (date) => {
  return new Date(date*1000).toLocaleDateString('en-CA')+'T'+new Date(date*1000).toLocaleTimeString();
}
export const getDateToDateString = (date) => {
  return new Date(date).toLocaleDateString('en-CA')+'T'+
    new Date(date).toLocaleTimeString('ca-ca', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
export const getCurrentDateToDateString = () => {
  return new Date().toLocaleDateString('en-CA')+'T'+
    new Date().toLocaleTimeString('ca-ca', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
export const sanitizeDate = (date, any = null) => {
  if ( ! isEmpty(date) ) {
    try{
      let d = new Date(date)
      if (d instanceof Date && !isNaN(d) ){
        developmentLog("Sanitize date if instance", date)
        return d
      }
      if ( ! isEmpty(any) ){
        let x = new Date(any)
        if ( x instanceof Date && !isNaN(x) ){
          developmentLog("Sanitize date if instance (any)", any)
          return x
        }
      }
    }catch(err){}
  }
  developmentLog("Sanitize date else", date)
  return new Date()
}
export const dateWithoutTime = (date) => {
  if (date instanceof Date && !isNaN(date) ){

  }
  return date
}
export const getUriRepo = (rpm, versio) => {
  let repo;
  switch (rpm) {
    case 'appsrecursos':
      repo = ConstantsHelper.REPOS.APPSRECURSOS;
      break;
    case 'api_ccma_cat-webapp-base':
      repo = ConstantsHelper.REPOS.API_AWS;
      break;
    case 'www_ccma_cat-webapp-dades':
      repo = ConstantsHelper.REPOS.DADES;
      break;
    case 'www_ccma_cat-webapp-portal':
      repo = ConstantsHelper.REPOS.PORTAL;
      break;
    case 'portal-internet-apptv':
      repo = ConstantsHelper.REPOS.TRESCAT_APPTV;
      break;
    case 'portal-internet-tvsmart':
      repo = ConstantsHelper.REPOS.TRESCAT_TVSMART;
      break;
    case 'portal-internet-web':
      repo = ConstantsHelper.REPOS.TRESCAT_WEB;
      break;
    case 'appsmvp':
      repo = ConstantsHelper.REPOS.APPSMVP;
      break;
    case 'media-service-webapp':
      repo = ConstantsHelper.REPOS.MEDIA_SERVICE;
      break;
  }
  return `${repo}${rpm}/${versio}`
}
export const getListOfSprints = () => {
  let items = ConstantsHelper.SELECTOR_SPRINTS
  let sprints = []
  Object.entries(items).map(exercici => {
    exercici[1].map((num) => {
      sprints.push({
        value: exercici[0]+num,
        label: "Exercici: " + exercici[0] + " - Sprint " + num
      })
    })
  })
  return sprints
}
