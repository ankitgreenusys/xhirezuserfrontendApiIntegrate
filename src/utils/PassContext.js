import React from "react";

const PassContext = React.createContext({
  loggedUser: null,
  setLoggedUser: () => {},
});

export default PassContext;
