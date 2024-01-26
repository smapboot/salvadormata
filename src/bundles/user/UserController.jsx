import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/useUser";
import { useUri } from "../../hooks/useUri";
import DevHelper from "../../helpers/DevHelper";
import UserHome from "./pages/UserHome";
import UserLogin from "./pages/UserLogin";
import _ from "lodash";


const UserController = () => {
  // React Hooks
  const navigate = useNavigate();

  // Custom hooks
  const {User, initSession, accessGmail, closeSession} = useUser()
  const {controllerAction, controller, uriString} = useUri()

  useEffect(() => {
    if (!_.isEmpty(User)) {
      if (User.isAuthenticated && uriString === '/user/login') {
        navigate(-1);
      }
    }
  }, [User.isAuthenticated]);

  useEffect(() => {
    DevHelper.console("UserController > useEffect when controllerAction change", {controller, controllerAction})
  }, [controllerAction])

  let view;
  switch (controllerAction) {
    default:
      view = <UserHome />
      break;
    case "login":
      view = <UserLogin />
      break;
    case "logout":
      closeSession();
      view = '<p>Sessió finalitzada correctament</p>';
      break;
  }

  return (
    <>
      {view}
    </>
  );
};

export default UserController;