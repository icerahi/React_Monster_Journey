import { useState } from "react";
import { createContext } from "react";
import UserProfile from "./components/UserProfile";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    id: 1,
    name: "Imran",
    school: "Viko",
  });

  return (
    <div>
      <UserContext.Provider value={{ profile, setProfile }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export { UserContext, UserProvider };
