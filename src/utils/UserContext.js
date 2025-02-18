import { createContext } from "react";

const UserContext = createContext({
    user: "Default User",
});

export default UserContext;