import React from "react";

const userContext = React.createContext("Programming");

//Provider
const UserProvider = userContext.Provider;

//Consumer
const UserConsumer = userContext.Consumer;

export { UserProvider, UserConsumer };
export default userContext;
