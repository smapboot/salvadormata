import * as store from "../stores/offline/browser/SmapStorage";
import { ConstantsHelper } from "./ConstantsHelper";
import _ from "lodash";

const DevHelper = {
  isDevelopment: () => {
    return (process.env.NODE_ENV === 'development')
  },
  isAdmin: () => {
    const user = store.getStorage(ConstantsHelper.KEYS_STORAGE.USER);
    return (!_.isEmpty(user) && user.user_id === process.env.REACT_APP_ADMIN)
  },
  console: (label, src, action = 'Debug') => {
    let showConsole = DevHelper.isDevelopment() || DevHelper.isAdmin();
    if (showConsole) {
      console.log(`[${action}] ${label}`, src);
    }
  },
};

export default DevHelper;