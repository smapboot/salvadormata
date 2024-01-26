import {db} from "./firebaseCore"
import * as fb from "firebase/firestore"
import _ from "lodash";

const PK = "primary_key";

const getAllItems = async (collectionId) => {
  try {
    const q = fb.collection(db, collectionId)
    const querySnap = await fb.getDocs(q)
    return querySnap.docs.map(doc => ({[PK]: doc.id, ...doc.data()}))
  } catch (e) {
    throw new Error(e.toString())
  }
}

const createNewItem = async (collectionId, entity) => {
  let response
  try {
    const docRef = await fb.addDoc(fb.collection(db, collectionId), {...entity, created_at: new Date()})
    entity[PK] = docRef.id
    response = {
      status: 200,
      message: `S'ha afegit a la BBDD, un nou ítem a la col·lecció ${collectionId} amb l'identificador únic ${docRef.id}.`,
      item: entity
    }
    await updateItem(collectionId, entity)
  } catch (e) {
    let error = e.toString()
    response = {
      status: 500,
      log: error,
      message: `No s'ha pogut afegir el nou ítem a la col·lecció ${collectionId}.\n[ERROR] ${error}`
    }
  }
  return response
}

const updateItem = async (collectionId, entity) => {
  let response
  let title = entity["title"]
  const docRef = fb.doc(db, collectionId, entity[PK])
  await fb.updateDoc(docRef, {...entity, updated_at: new Date()})
    .then(res => {
      response = {
        status: 200,
        log: docRef,
        message: "El ítem " + title + " de la col·lecció " + collectionId + ",\n s'ha actualitzat correctament a la BBDD.",
        item: entity
      }
    })
    .catch(e => {
      let error = e.toString()
      response = {
        status: 500,
        log: error,
        message: `El ítem amb id ${entity[PK]} de la col·lecció ${collectionId}, no s'ha pogut actualitzar.\n [ERROR] ${error}`
      }
    })
  return response
}

const deleteItem = async (collectionId, entity) => {
  let response
  const docRef = fb.doc(db, collectionId, entity[PK])
  await fb.deleteDoc(docRef)
    .then(res => {
      response = {
        status: 200,
        log: docRef,
        message: `El ítem amb id ${entity[PK]} de la col·lecció ${collectionId}, s'ha eliminat de la BBDD.`
      };
    })
    .catch(e => {
      let error = e.toString()
      response = {
        status: 500,
        log: error,
        message: `El ítem amb id ${entity[PK]} de la col·lecció ${collectionId}, no s'ha pogut eliminar.\n [ERROR] ${error}`
      };
    });
  return response
}

export const getUserSettings = async (user_id) => {
  try {
    const q = fb.collection(db, "users_settings")
    const querySnap = await fb.getDocs(q)
    const all = querySnap.docs.map(doc => ({
      [PK]: doc.id,
      ...doc.data()
    }))
    const filtered = all.filter(doc => doc.user_id === user_id)
    return ( !_.isEmpty(filtered) ) ? filtered[0] : {}
  } catch (e) {
    throw new Error(e.toString())
  }
}

export {
  getAllItems,
  createNewItem,
  updateItem,
  deleteItem
}