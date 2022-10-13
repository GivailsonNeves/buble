import { createContext, useContext } from "react";

type AppContextType = {
  building: any;
  buildings: any[];
};

const AppContext = createContext<AppContextType>({
  building: undefined,
  buildings: [],
});

export const useAppContext = () => useContext(AppContext);

export default AppContext;
