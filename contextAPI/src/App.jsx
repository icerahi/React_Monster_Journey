import { createContext } from "react";
import ComponentA from "./components/ComponentA";
import { UserContext, UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Imran Hasan";
  const age = 24;
  return (
    <div>
      <UserProvider>
        <Data.Provider value={name}>
          <Data1.Provider value={age}>
            <ComponentA />
          </Data1.Provider>
        </Data.Provider>
        <UserProfile />
      </UserProvider>
    </div>
  );
};
export default App;
