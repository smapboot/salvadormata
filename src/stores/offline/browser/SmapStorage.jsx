import _ from "lodash";

export const saveStorage = (key, value) => {
  if (!_.isEmpty(value)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const getNode = (key, child) => {
  let parent = JSON.parse(localStorage.getItem(key));
  return parent?.[child];
}

export const resetStorage = () => {
  localStorage.clear();
}

export const deleteStorage = (key) => {
  localStorage.removeItem(key);
}

export const putOrPushObjectInArrayOfStorage = (key_object, key, object) => {
  let list = getStorage(key);
  if (list.length > 0) {
    let objIndex = list.findIndex((obj => obj[key_object] === object[key_object]));
    if (objIndex > -1) {
      // Actualitzem
      list[objIndex] = object;
    } else {
      // Afegim
      list.push(object)
    }
    saveStorage(key, list)
  } else {
    let newList = [];
    newList.push(object);
    saveStorage(key, newList);
  }
}

export const deleteObjectInArrayOfStorage = (keyStorage, keyObject, value_key_object, object) => {
  let list = getStorage(keyStorage);
  if (list.length > 0) {
    list = _.remove(list, (el) => el[keyObject] !== value_key_object)
    saveStorage(keyStorage, list)
  }
}
