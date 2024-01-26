import {useContext} from "react"
import {UserContext} from "../contexts/UserProvider"

export const useUser = () => {
  const {User, initSession, accessGmail, endSession, itemsUserNav,} = useContext(UserContext)
  return {User, initSession, accessGmail, endSession, itemsUserNav,};
};
